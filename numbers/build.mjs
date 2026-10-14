// Builds the history-as-numbers model in the Meaning Model from numbers/model.js:
// one process per node of the conceptual decomposition, every process with guessed values at every date.
// Usage: node numbers/build.mjs [--port 8811]   (bridge on a fresh store, with a Meaning Model that has life_values_record)
import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = (p) => fileURLToPath(new URL(p, import.meta.url));
const port = process.argv.includes('--port') ? process.argv[process.argv.indexOf('--port') + 1] : '8811';
const SCOPE = 'world-history';
const call = async (name, args) => {
  const r = await fetch(`http://127.0.0.1:${port}/call`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name, arguments: args }) });
  const out = await r.json();
  if (out.error || out.isError) throw new Error(`${name}: ${JSON.stringify(out.error ?? out.content).slice(0, 3000)}`);
  return out.structuredContent;
};

// Load the tree and its guesses.
const ctx = { window: {} }; vm.createContext(ctx); vm.runInContext(readFileSync(here('./model.js'), 'utf8'), ctx);
const { years: Y, tree: humanity, earth } = ctx.window.HISTORY;
const interp = (anchors) => { const pts = Object.entries(anchors).map(([y, v]) => [+y, v]).sort((a, b) => a[0] - b[0]);
  return Y.map((y) => { if (y <= pts[0][0]) return pts[0][1]; for (let i = 1; i < pts.length; i++) if (y <= pts[i][0]) { const [a, va] = pts[i - 1], [b, vb] = pts[i]; return va + (vb - va) * (y - a) / (b - a); } return pts.at(-1)[1]; }); };
const resolve = (node) => { (node.children ?? []).forEach(resolve);
  if (node.anchors) node.vals = interp(node.anchors);
  else if (node.values === 'sum') node.vals = Y.map((_, i) => node.children.reduce((s, c) => s + c.vals[i], 0));
  else if (Array.isArray(node.values)) node.vals = [...node.values];
  if (node.vals && node.vals.length !== Y.length) throw new Error(`${node.id} has ${node.vals.length} values`); };
resolve(humanity); resolve(earth);
const byId = {}; const index = (n) => { byId[n.id] = n; (n.children ?? []).forEach(index); }; index(humanity); index(earth);
// The two grouping nodes get measures of their own.
const ends = byId.ends, means = byId.means;
ends.unit = 'index 0–1: life, literacy and income together'; ends.why = 'A rough development index: the geometric mean of life expectancy (20 to 85 years), adult literacy, and income per person (log of 100 to 75,000 dollars).';
ends.vals = Y.map((_, i) => { const le = (byId.alive.vals[i] - 20) / 65, lit = Math.max(byId.understanding.vals[i], 0.5) / 100, inc = Math.log(byId.provisioning.vals[i] / 100) / Math.log(750); return Math.cbrt(le * lit * inc); });
means.unit = 'world output, trillion 2011 $'; means.why = 'Output per person times the number of people.'; means.log = true;
means.vals = Y.map((_, i) => byId.provisioning.vals[i] * humanity.vals[i] * 1e9 / 1e12);
const history = { id: 'history', label: 'History', unit: 'billion people ever born', why: 'The lifecycle of the Universe, followed for the Earth and humanity: measured by everyone who has ever lived.',
  vals: [0.01, 2, 4, 6.5, 9.4, 13, 20, 30, 46, 55, 62, 67, 70, 71, 72.5, 74, 75.5, 77.5, 80, 83, 87, 88, 89, 90, 91.5, 93, 95, 97.5, 100.5, 104, 107.5, 111, 115.5, 117.5],
  children: [earth, humanity] };
index(history);

// The model starts as the root process alone; one life_values_record call opens every other process under its
// parent and records its guesses, so the values live in the model, not in the understanding graph.
const ZERO = Y.indexOf(1);
const tag = (y) => (y < 1500 ? 'sketch' : 'inferred');
const band = (y) => (y < -10000 ? 0.6 : y < 1500 ? 0.4 : y < 1900 ? 0.2 : y < 1950 ? 0.1 : 0.05);
const lohi = (v, y) => { const d = Math.max(Math.abs(v) * band(y), 0.02 * band(y)); return [v >= 0 ? Math.max(0, v - d) : v - d, v + d]; };
const entries = [];
const walk = (node, parent) => {
  node.pid = node.id === 'history' ? 'history' : `h.${node.id}`;
  entries.push({ processId: node.pid, ...(parent ? { process: { label: node.label, unit: node.unit || 'index', ...(node.why ? { meaning: node.why.slice(0, 1000) } : {}), parent: parent.pid } } : {}),
    points: node.vals.map((v, i) => { const [lower, upper] = lohi(v, Y[i]); return { time: Y[i], value: v, lower, upper, tag: tag(Y[i]) }; }) });
  (node.children ?? []).forEach((c) => walk(c, node));
};
walk(history, null);
const root = { id: 'history', value_type: { kind: 'scalar', bounds: { minimum: 0, maximum: 1000 } }, initial_value: { kind: 'scalar', value: history.vals[ZERO] },
  uncertainty: { kind: 'interval', ...Object.fromEntries(['lower', 'upper'].map((k, i) => [k, lohi(history.vals[ZERO], 1)[i]])) }, provenance: ['sketch: the root of the decomposition'],
  axes: [], unit: history.unit, reference_frame: 'world', scale: { semantic_role: `History: ${history.unit}`, label: 'History' }, support: ['dated values in value_series'], access_scopes: [], update_mode: 'observed' };
const model = { schema: 'life-sim-rust-model/v1', id: 'history-numbers', time_unit: 'year',
  revision: { number: 0, previous_model_hash: null, provenance: ['history as numbers'], reason: 'History as a conceptual decomposition of processes, every one with guessed values, to be deepened and improved without limit.' },
  decomposition: [], dependencies: [], laws: [], initial_claims: [], processes: [root],
  meaning_model: { schema: 'life-sim-rust-meaning-model/v1',
    referents: [{ id: 'referent.universe', boundary: 'The Universe', continuity_criterion: 'The same expanding spacetime and its contents.', lifecycle_event_id: 'event.universe', interval: null, authority: null, uncertainty: { kind: 'unknown' }, provenance: ['frame'] }],
    events: [{ id: 'event.universe', boundary: 'History: the lifecycle of the Universe', interval: { start: Y[0], end: 2025.9 }, participants: { subject: 'referent.universe' }, process_ids: ['history'], observation_process_ids: [], region: null, substrate: null, provenance: ['frame'] }],
    event_referent_bindings: [{ id: 'binding.universe', binding_type: 'lifecycle_subject', role: 'subject', referent_id: 'referent.universe', target: { kind: 'event', event_id: 'event.universe' }, interval: null, authority: null, uncertainty: { kind: 'unknown' }, provenance: ['frame'] }],
    event_relations: [], normalized_cuts: [], context_roots: [{ event_id: 'event.universe', kind: 'accepted_world', provenance: ['frame'] }],
    concepts: [], abstract_relations: [], abstract_cuts: [], encapsulation_cuts: [], physical_cuts: [], realizations: [] } };

const run = Date.now().toString(36);
const { modelHash: m0 } = await call('life_model_register', { requestId: `numbers-model-${run}`, model });
const recorded = await call('life_values_record', { requestId: `numbers-values-${run}`, previousModelHash: m0, holder: 'claude',
  reason: 'First pass: every process of the decomposition, guessed at every date.', values: entries });
const modelHash = recorded.modelHash;
console.log('model', modelHash, JSON.stringify(recorded.values));
const { graphHash } = await call('life_narrative_register', { requestId: `numbers-graph-${run}`, narrativeGraph: { schema: 'life-sim-rust-narrative-graph/v1', id: 'history-numbers',
  revision: { number: 0, reason: 'History as numbers: the account root.', provenance: ['history as numbers'] }, source: { kind: 'model', model_hash: modelHash }, roots: ['account'],
  nodes: [{ id: 'account', node_type: 'account', role: 'document_root', title: 'History as numbers', text: '# History as numbers\n\nEvery process of history, guessed at every date.',
    render: 'exclude', training: 'exclude', epistemic_status: 'real_world_account', evidence_type: 'estimate', authority: { source: 'Claude', weight: 1 }, provenance: ['sketch'] }],
  edges: [{ id: 'account.grounded', source: { kind: 'node', node_id: 'account' }, target: { kind: 'anchor', anchor_kind: 'event', anchor_id: 'event.universe' }, family: 'grounding', relation: 'grounded_in', provenance: ['frame'] }] } });
writeFileSync(here('../.local-work/numbers-heads.json'), JSON.stringify({ model: modelHash, graph: graphHash }, null, 1));
const v = await call('life_model_viewer_open', { graphHash, accessScopes: [SCOPE], mode: 'live' });
console.log('graph', graphHash, 'viewer', v.url);
