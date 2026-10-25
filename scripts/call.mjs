// Calls one tool through a running bridge (scripts/bridge.mjs) and prints its result as JSON.
//
//   node scripts/call.mjs [--server sema] [--port 8811] <tool> [<json> | @arguments.json]
//   node scripts/call.mjs --read <life-sim:// uri> [<file>]     reads a whole resource, page by page
//
// Exits 1 when the tool reports an error.
import { readFileSync, writeFileSync } from 'node:fs';
import http from 'node:http';

const argv = process.argv.slice(2);
const option = (name, fallback) => {
  const at = argv.indexOf(`--${name}`);
  if (at < 0) return fallback;
  const [value] = argv.splice(at, 2).slice(1);
  return value;
};
const port = option('port', '8811');
const server = option('server', 'meaning-model');
const readUri = option('read', null);

// node:http rather than fetch: fetch gives up after five minutes without a response, and importing a large
// construction takes longer. The bridge allows each call thirty minutes.
const call = (name, args) => new Promise((resolve, reject) => {
  const body = JSON.stringify({ server, name, arguments: args });
  const request = http.request({ host: '127.0.0.1', port, path: '/call', method: 'POST',
    headers: { 'content-type': 'application/json', 'content-length': Buffer.byteLength(body) } }, (response) => {
    let text = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => { text += chunk; });
    response.on('end', () => {
      try {
        const out = JSON.parse(text);
        if (out.error) reject(new Error(out.error)); else resolve(out);
      } catch (error) { reject(error); }
    });
  });
  request.on('error', reject);
  request.end(body);
});

if (readUri) {
  let offset = 0; let text = ''; let sha256 = null;
  while (offset !== null) {
    const { isError, structuredContent: page, content } = await call('life_modeling_read',
      { uri: readUri, offset, ...(sha256 ? { expectedSha256: sha256 } : {}) });
    if (isError) { console.error(JSON.stringify(content)); process.exit(1); }
    sha256 = page.sha256; text += page.text; offset = page.nextOffset ?? null;
  }
  if (argv[0]) { writeFileSync(argv[0], text); console.log(JSON.stringify({ uri: readUri, sha256, characters: text.length, file: argv[0] })); }
  else process.stdout.write(text);
} else {
  const [tool, raw = '{}'] = argv;
  if (!tool) { console.error('usage: node scripts/call.mjs [--server sema] <tool> [<json> | @file.json]'); process.exit(2); }
  const args = JSON.parse(raw.startsWith('@') ? readFileSync(raw.slice(1), 'utf8') : raw);
  const out = await call(tool, args);
  console.log(JSON.stringify(out.structuredContent ?? out.content, null, 1));
  if (out.isError) process.exit(1);
}
