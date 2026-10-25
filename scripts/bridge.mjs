// The two servers of this construction, held open and driven one call at a time over 127.0.0.1, so a person can
// watch the model grow in the live viewer while it is built:
// - the Meaning Model at the release tool.json pins, on the engine store (default store/world-history.sqlite);
// - the project's own Sema server, on the project vocabulary store/sema/world-history.db and nothing else.
// Both are checked against tool.json before they start (scripts/setup.sh installs them). Every call and its result is
// logged to .local-work/calls/; the construction itself is recorded in the model and its graph, not in these logs.
//
//   node scripts/bridge.mjs [--port 8811] [--store store/world-history.sqlite] [--sema-readonly]
//
// --sema-readonly hides sema_mint, for bridges that fillers use: they look patterns up but never change the vocabulary.
// --dev-mm <dir> runs an unreleased Meaning Model checkout (its mcp-server and its own built engine) instead of the
// pinned release, for testing tool changes; nothing built that way is a pinned construction.
//
//   GET  /status                                  versions, pins, stores and the viewer
//   GET  /tools?server=sema                       a server's tools and their input schemas
//   POST /call  {server?, name, arguments}        call a tool; server is meaning-model (default) or sema
//   POST /open  {graphHash?, modelHash?}          open the live viewer on a revision, or move it
//
// Run one bridge per store: an engine store must have only one server process.
import http from 'node:http';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const option = (name, fallback) => { const at = process.argv.indexOf(`--${name}`); return at > 0 ? process.argv[at + 1] : fallback; };
const port = Number(option('port', '8811'));
const store = resolve(repo, option('store', 'store/world-history.sqlite'));
const semaReadonly = process.argv.includes('--sema-readonly');
const devMm = option('dev-mm', null);
const scope = 'world-history';
const pins = JSON.parse(readFileSync(join(repo, 'tool.json'), 'utf8'));
const tools = join(repo, '.tools');

// The pinned Meaning Model package and engine.
const pkg = devMm ? resolve(devMm) : join(tools, 'meaning-model', 'node_modules', ...pins.meaningModel.package.name.split('/'));
const target = { 'darwin arm64': 'aarch64-apple-darwin', 'darwin x64': 'x86_64-apple-darwin', 'linux x64': 'x86_64-unknown-linux-gnu' }[`${process.platform} ${process.arch}`];
const engine = join(pkg, 'rust-engine', 'target', 'release', 'life-sim-engine');
const sha256 = (file) => createHash('sha256').update(readFileSync(file)).digest('hex');
const refuse = (problem) => { throw new Error(`${problem} Run scripts/setup.sh, or update tool.json knowingly.`); };
const mmVersion = devMm ? `dev:${devMm}` : JSON.parse(readFileSync(join(pkg, 'package.json'), 'utf8')).version;
if (!devMm) {
  if (!existsSync(join(pkg, 'package.json'))) refuse(`The Meaning Model package is not installed at ${pkg}.`);
  if (mmVersion !== pins.meaningModel.release) refuse(`The installed Meaning Model is ${mmVersion}, not the pinned ${pins.meaningModel.release}.`);
  if (!target || !pins.meaningModel.engine[target]) refuse(`tool.json pins no engine for ${process.platform} ${process.arch}.`);
  if (!existsSync(engine) || sha256(engine) !== pins.meaningModel.engine[target].sha256) refuse(`The engine at ${engine} is not the pinned build.`);
}

// The pinned Sema package and the project vocabulary.
const sema = join(tools, 'sema', 'bin', 'sema');
const semaHome = join(tools, 'sema-home');
const vocabulary = join(repo, 'store', 'sema', 'world-history.db');
if (!existsSync(sema)) refuse(`Sema is not installed at ${sema}.`);
const semaVersion = execFileSync(sema, ['--version'], { encoding: 'utf8' }).trim();
if (!semaVersion.endsWith(` ${pins.sema.release}`)) refuse(`The installed Sema reports "${semaVersion}", not ${pins.sema.release}.`);
if (!existsSync(vocabulary)) refuse(`The project vocabulary ${vocabulary} does not exist.`);

// One bridge per store.
mkdirSync(dirname(store), { recursive: true });
const lock = `${store}.bridge-lock`;
if (existsSync(lock)) {
  const pid = Number(readFileSync(lock, 'utf8'));
  let alive = false; try { process.kill(pid, 0); alive = true; } catch { /* stale */ }
  if (alive) throw new Error(`Bridge ${pid} already holds ${store}.`);
}
writeFileSync(lock, String(process.pid));

// Servers inherit nothing from this shell's Meaning Model, estimator or Sema settings.
const baseEnv = Object.fromEntries(Object.entries(process.env).filter(([key]) => !/^(MEANING_MODEL_|LIFE_SIM_|TYPESAFE_|SEMA_)/u.test(key)));
const servers = {
  'meaning-model': {
    command: process.execPath,
    args: [join(pkg, 'mcp-server', 'bin', 'meaning-model-mcp.mjs')],
    env: { ...baseEnv, LIFE_SIM_STATE_FILE: store, MEANING_MODEL_ADDONS: '' },
  },
  sema: {
    command: sema,
    args: ['mcp'],
    env: { ...baseEnv, SEMA_DB_PATH: vocabulary, SEMA_DISABLE_PULL: 'true', ...(semaReadonly ? { SEMA_DISABLE_MINT: 'true' } : {}), XDG_CONFIG_HOME: join(semaHome, 'config'),
      SEMA_LIBRARY_DIR: join(semaHome, 'libraries'), SEMA_CACHE_DIR: join(semaHome, 'cache'), FASTEMBED_CACHE_PATH: join(semaHome, 'fastembed') },
  },
};
const clients = {};
for (const [name, spec] of Object.entries(servers)) {
  const client = new Client({ name: `world-history-bridge/${name}`, version: '0.1.0' });
  await client.connect(new StdioClientTransport({ ...spec, cwd: repo, stderr: 'inherit' }));
  clients[name] = client;
}

const logDir = join(repo, '.local-work', 'calls');
mkdirSync(logDir, { recursive: true });
let seq = 0;
const log = (server, name, payload) => {
  seq += 1;
  const file = join(logDir, `${new Date().toISOString().replace(/[:.]/gu, '-')}-${String(seq).padStart(4, '0')}-${server}-${name}.json`);
  writeFileSync(file, JSON.stringify(payload, null, 2));
  return file;
};
const call = async (server = 'meaning-model', name, args = {}) => {
  const client = clients[server];
  if (!client) throw new Error(`No server ${server}; use meaning-model or sema.`);
  const result = await client.callTool({ name, arguments: args }, { timeout: 1_800_000 });
  const out = { server, name, isError: result.isError ?? false, structuredContent: result.structuredContent ?? null,
    content: result.structuredContent ? undefined : result.content };
  out.logFile = log(server, name, { request: { server, name, arguments: args }, response: out });
  return out;
};

const engineStatus = await call('meaning-model', 'life_engine_status', {});
let viewer = null;
const open = async (selection) => {
  const out = await call('meaning-model', 'life_model_viewer_open', { accessScopes: [scope], mode: 'live', ...selection });
  if (out.isError) throw new Error(JSON.stringify(out.content ?? out.structuredContent).slice(0, 2000));
  viewer = out.structuredContent;
  return viewer;
};

const body = (req) => new Promise((done, fail) => {
  let data = '';
  req.on('data', (chunk) => { data += chunk; });
  req.on('end', () => { try { done(data ? JSON.parse(data) : {}); } catch (error) { fail(error); } });
  req.on('error', fail);
});
const send = (res, status, value) => { res.writeHead(status, { 'content-type': 'application/json' }); res.end(JSON.stringify(value, null, 1)); };
const status = () => ({ meaningModel: mmVersion, engine: { target, sha256: devMm ? 'dev build' : pins.meaningModel.engine[target].sha256 }, sema: semaVersion,
  store, vocabulary, scope, viewer, engineStatus: engineStatus.structuredContent });

const httpServer = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${port}`);
  try {
    if (req.method === 'GET' && url.pathname === '/status') return send(res, 200, status());
    if (req.method === 'GET' && url.pathname === '/tools') {
      const listed = await clients[url.searchParams.get('server') ?? 'meaning-model'].listTools();
      return send(res, 200, listed.tools.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })));
    }
    if (req.method === 'POST' && url.pathname === '/call') {
      const { server, name, arguments: args } = await body(req);
      return send(res, 200, await call(server, name, args));
    }
    if (req.method === 'POST' && url.pathname === '/open') return send(res, 200, await open(await body(req)));
    if (req.method === 'GET' && url.pathname === '/' && viewer?.url) { res.writeHead(302, { location: viewer.url }); return res.end(); }
    return send(res, 404, { error: 'not found' });
  } catch (error) {
    return send(res, 500, { error: String(error?.stack ?? error) });
  }
});

const shutdown = async () => {
  httpServer.close();
  for (const client of Object.values(clients)) await client.close().catch(() => {});
  rmSync(lock, { force: true });
  process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
httpServer.listen(port, '127.0.0.1', () => console.log(JSON.stringify({ bridge: `http://127.0.0.1:${port}`, ...status() }, null, 1)));
