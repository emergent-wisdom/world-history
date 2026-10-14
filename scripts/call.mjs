// Calls one tool through a running bridge (scripts/bridge.mjs) and prints its result as JSON.
//
//   node scripts/call.mjs [--server sema] [--port 8811] <tool> [<json> | @arguments.json]
//   node scripts/call.mjs --read <life-sim:// uri> [<file>]     reads a whole resource, page by page
//
// Exits 1 when the tool reports an error.
import { readFileSync, writeFileSync } from 'node:fs';

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

const call = async (name, args) => {
  const response = await fetch(`http://127.0.0.1:${port}/call`, {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ server, name, arguments: args }),
  });
  const out = await response.json();
  if (out.error) throw new Error(out.error);
  return out;
};

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
