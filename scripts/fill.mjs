#!/usr/bin/env node
// Fills the history tree, cell by cell, without letting a filler change its structure.
//
//   node scripts/fill.mjs show --from 1500 --to 1800      the cell: its grid intervals, every leaf contract, and the
//                                                          readings already recorded that overlap it
//   node scripts/fill.mjs check <readings.json>            validates a readings file against structure/history-tree.mjs
//                                                          and the current model; writes nothing
//   node scripts/fill.mjs record <readings.json>           validates, then records through the running bridge
//
// Every question, unit, answer and denominator comes from structure/history-tree.mjs; a reading for anything not in
// it is refused. The store has one writer: fillers write readings files, and one recorder runs `record`. The current
// model and graph heads are kept in .local-work/heads.json (or --heads <file>), which `record` advances.
// A readings file:
//   { "schema": "world-history-fill/v1", "filler": { "id": "...", "kind": "model", "model": "..." }, "place": "world",
//     "period": [1500, 1800],
//     "readings": [
//       { "leaf": "livelihood", "start": 1500, "end": 1550, "weights": { "foraging": 0.02, ... }, "tag": "inferred",
//         "why": "what happens in this stretch that gives these shares", "restsOn": "what the reading rests on" },
//       { "leaf": "humanity.world-population", "at": 1500, "value": 0.46, "lower": 0.42, "upper": 0.5, "tag": "source",
//         "why": "...", "restsOn": "HYDE 3.3 via Our World in Data, retrieved 2026-10-07" } ] }
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as T from '../structure/history-tree.mjs';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const command = args[0];
const port = Number(flag('port', 8811));
const headsPath = resolve(flag('heads', join(repo, '.local-work', 'heads.json')));
const SCOPE = 'world-history';
const TAGS = ['source', 'inferred', 'exploring', 'sketch']; // a reality model: nothing is invented
const EPS = 1e-6;
const run = Date.now().toString(36); // keeps request ids unique when a cell is recorded again

const call = async (name, argsIn) => {
  const r = await fetch(`http://127.0.0.1:${port}/call`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name, arguments: argsIn }) });
  const out = await r.json();
  if (out.isError) throw new Error(`${name} failed: ${JSON.stringify(out.content).slice(0, 2000)}`);
  return out.structuredContent;
};
const heads = () => {
  if (!existsSync(headsPath)) throw new Error(`No heads file at ${headsPath}: write {"model": "...", "graph": "..."} with the current heads.`);
  return JSON.parse(readFileSync(headsPath, 'utf8'));
};

// ---------- Sema references ----------
// Readings are written in Sema where a pattern shaped them: a reference such as ConfoundedAttribution#18ab names the
// exact card. Every reference in a file is checked against the project vocabulary with `sema check`.
const semaBin = join(repo, '.tools', 'sema', 'bin', 'sema');
const semaHome = join(repo, '.tools', 'sema-home');
const semaEnv = { ...process.env, SEMA_DB_PATH: join(repo, 'store', 'sema', 'world-history.db'), SEMA_DISABLE_PULL: 'true',
  XDG_CONFIG_HOME: join(semaHome, 'config'), SEMA_LIBRARY_DIR: join(semaHome, 'libraries'), SEMA_CACHE_DIR: join(semaHome, 'cache') };
const semaRefs = (texts) => {
  if (!existsSync(semaBin)) return null;
  let out;
  try { out = execFileSync(semaBin, ['check', '--json'], { input: texts.join('\n'), env: semaEnv, encoding: 'utf8' }); }
  catch (e) { out = e.stdout; }
  try { return JSON.parse(out).refs ?? []; } catch { return null; }
};

// ---------- the contracts ----------
const shares = new Map(T.leaves.filter((l) => l.kind === 'share').map((l) => [l.series, l]));
const scalars = new Map(T.leaves.filter((l) => l.kind === 'scalar').map((l) => [l.process, l]));
// The filling schedule: four nested levels, coarse first (see structure/history-tree.mjs).
const S = T.schedule;
const boundaries = new Set(S.flatMap((l) => l.blocks.flat()));
const blockLevel = (a, b) => S.findIndex((l) => l.blocks.some(([x, y]) => x === a && y === b));
const boundaryLevel = (t) => S.findIndex((l) => l.blocks.some(([x, y]) => x === t || y === t));
const parentBlock = (k, a, b) => S[k - 1].blocks.find(([x, y]) => x <= a && b <= y);
const gridCells = (from, to) => T.grid.filter(([a, b]) => a >= from && b <= to);
const nodeEvent = (leaf) => `event.${leaf.node.startsWith('earth.') ? leaf.node : `humanity.${leaf.node}`}`;
const contract = (l) => l.kind === 'share'
  ? { leaf: l.series, kind: 'share', node: l.node, question: l.question, unit: l.unit, denominator: l.denominator, answers: l.answers, ...(l.remainder ? { remainder: l.remainder } : {}), ...(l.rule ? { rule: l.rule } : {}) }
  : { leaf: l.process, kind: 'quantity', node: l.node, label: l.label, unit: l.unit, meaning: l.meaning, bounds: l.bounds, aggregate: l.aggregate };

// ---------- the current model ----------
const currentModel = async () => (await call('life_model_inspect', { modelHash: heads().model, includeDefinition: true })).model;
// Dated quantity values already recorded: the approved process-estimate nodes of the graph.
const recordedValues = async () => {
  const g = await call('life_narrative_query', { graphHash: heads().graph, mode: 'full', includeContent: true, accessScopes: [SCOPE] });
  const nodes = g.graph?.nodes ?? g.nodes ?? [];
  const out = new Map();
  for (const node of nodes) {
    if (node.node_type !== 'process_estimate') continue;
    let o; try { o = JSON.parse(node.text); } catch { continue; }
    if (o?.status !== 'known' || o.reviewStatus !== 'approved' || o.value?.kind !== 'scalar') continue;
    const t = o.valueTime ?? node.value_time;
    if (!out.has(o.processId)) out.set(o.processId, new Map());
    out.get(o.processId).set(t, o.value.value);
  }
  return out;
};
const seriesReadings = (model, seriesId) => (model.meaning_model.normalized_cuts ?? [])
  .filter((c) => c.id.startsWith(`cut.series.${seriesId}.`) && !c.withdrawn)
  .map((c) => { const e = model.meaning_model.events.find((x) => x.id === c.parent_event_id); return { start: e?.interval?.start, end: e?.interval?.end, weights: Object.fromEntries(c.answers.map((a) => [a.key, a.weight])), provenance: c.provenance }; });

// ---------- validation ----------
let checkedRefs = 0;
function checkFile(file, model, values) {
  const problems = [], warnings = [];
  const fail = (m) => problems.push(m);
  if (file.schema !== 'world-history-fill/v1') fail('schema must be "world-history-fill/v1".');
  if (!file.filler?.id || !/^[A-Za-z0-9._-]{1,80}$/.test(file.filler.id)) fail('filler.id is required: letters, digits, dot, dash or underscore.');
  if (file.place !== 'world') fail('place must be "world": local histories are not instantiated yet.');
  const [from, to] = file.period ?? [];
  if (blockLevel(from, to) < 0) fail(`period must be a block of the filling schedule, such as [1500, 1800]; got ${JSON.stringify(file.period)}.`);
  if (!Array.isArray(file.readings) || !file.readings.length) fail('readings must be a nonempty list.');
  const byLeaf = new Map();
  for (const [i, r] of (file.readings ?? []).entries()) {
    const at = `readings[${i}] (${r.leaf})`;
    if (!TAGS.includes(r.tag)) fail(`${at}: tag must be one of ${TAGS.join(', ')}; this is an account of the real world, so nothing is invented.`);
    if (!r.why?.trim() || r.why.length > 1500) fail(`${at}: why is required, at most 1,500 characters.`);
    if (!r.restsOn?.trim() || r.restsOn.length > 400) fail(`${at}: restsOn is required, at most 400 characters: the source read, or the knowledge the reading rests on.`);
    if (r.tag === 'source' && !/\b(retrieved|read|checked|accessed)\b/i.test(r.restsOn ?? '')) fail(`${at}: a source reading must say in restsOn which source was read and when (retrieved, read, checked or accessed).`);
    if (shares.has(r.leaf)) {
      const l = shares.get(r.leaf);
      if (blockLevel(r.start, r.end) < 0) fail(`${at}: ${r.start} to ${r.end} is not a block of the filling schedule; use \`fill.mjs show\` to list the blocks.`);
      if (r.start < from || r.end > to) fail(`${at}: the interval lies outside the period.`);
      const keys = new Set([...l.answers.map((a) => a.key), ...(l.remainder ? ['remainder'] : [])]);
      const w = r.weights ?? {};
      const extra = Object.keys(w).filter((k) => !keys.has(k));
      if (extra.length) fail(`${at}: ${extra.join(', ')} ${extra.length > 1 ? 'are' : 'is'} not an answer of ${r.leaf}.`);
      const missing = l.answers.map((a) => a.key).filter((k) => !(k in w));
      if (missing.length) fail(`${at}: give every answer a weight, zero included; missing ${missing.join(', ')}.`);
      const vals = Object.values(w);
      if (vals.some((v) => typeof v !== 'number' || !Number.isFinite(v) || v < 0)) fail(`${at}: weights must be nonnegative numbers.`);
      const sum = vals.reduce((a, b) => a + b, 0);
      if (Math.abs(sum - 1) > EPS) fail(`${at}: weights must sum to 1; they sum to ${sum}.`);
      if (!byLeaf.has(r.leaf)) byLeaf.set(r.leaf, []);
      byLeaf.get(r.leaf).push(r);
    } else if (scalars.has(r.leaf)) {
      const l = scalars.get(r.leaf);
      if (typeof r.at !== 'number' || r.at < from || r.at > to) fail(`${at}: at must be a year within the period.`);
      if (!boundaries.has(r.at)) fail(`${at}: at ${r.at} is not a boundary of the filling schedule; values are given at block boundaries.`);
      const inB = (v) => typeof v === 'number' && Number.isFinite(v) && v >= l.bounds[0] && v <= l.bounds[1];
      if (!inB(r.value)) fail(`${at}: value must be a number within ${l.bounds[0]} to ${l.bounds[1]} ${l.unit}.`);
      if (r.unknownUncertainty !== true) {
        if (!inB(r.lower) || !inB(r.upper) || !(r.lower <= r.value && r.value <= r.upper)) fail(`${at}: give lower and upper bounds around the value, within the leaf’s bounds, or set unknownUncertainty to true.`);
      }
      if (!byLeaf.has(r.leaf)) byLeaf.set(r.leaf, []);
      byLeaf.get(r.leaf).push(r);
    } else fail(`${at}: ${r.leaf} is not a leaf of the history tree; leaves are the series ids and quantity process ids in structure/history-tree.mjs.`);
  }
  // Within the file: no duplicate or partly overlapping share intervals, no duplicate quantity dates.
  for (const [leaf, rs] of byLeaf) {
    if (shares.has(leaf)) {
      for (let a = 0; a < rs.length; a++) for (let b = a + 1; b < rs.length; b++) {
        const x = rs[a], y = rs[b];
        if (x.start === y.start && x.end === y.end) fail(`${leaf}: two readings for ${x.start} to ${x.end}.`);
        const partly = (x.start < y.start && y.start < x.end && x.end < y.end) || (y.start < x.start && x.start < y.end && y.end < x.end);
        if (partly) fail(`${leaf}: ${x.start}–${x.end} and ${y.start}–${y.end} partly overlap; nest them or make them disjoint.`);
      }
    } else {
      const seen = new Set(); for (const r of rs) { if (seen.has(r.at)) fail(`${leaf}: two values at ${r.at}.`); seen.add(r.at); }
    }
  }
  // Coarse first: a share block needs a reading of the block containing it, and a value at a finer boundary needs
  // values at both ends of the coarser block it falls in, recorded already or given in this file.
  for (const [leaf, rs] of byLeaf) {
    if (shares.has(leaf)) {
      const have = [...(model ? seriesReadings(model, leaf) : []), ...rs];
      for (const r of rs) {
        const k = blockLevel(r.start, r.end);
        if (k <= 0) continue;
        const [pa, pb] = parentBlock(k, r.start, r.end);
        if (!have.some((x) => x.start === pa && x.end === pb)) fail(`${leaf} ${r.start}\u2013${r.end}: read the block ${pa}\u2013${pb} first (coarse first); it has no reading.`);
      }
    } else {
      const have = new Set([...(values?.get(leaf)?.keys() ?? []), ...rs.map((r) => r.at)]);
      for (const r of rs) {
        const k = boundaryLevel(r.at);
        if (k <= 0) continue;
        const [pa, pb] = S[k - 1].blocks.find(([x, y]) => x < r.at && r.at < y);
        const missing = [pa, pb].filter((t) => !have.has(t));
        if (missing.length) fail(`${leaf} at ${r.at}: give the values at ${missing.join(' and ')} first (coarse first).`);
      }
    }
  }
  if (!model) warnings.push('the bridge is not running, so readings already recorded were not checked');
  // Sema references in reasons, bases and the note must name cards of the project vocabulary exactly.
  const texts = [file.note ?? '', ...(file.readings ?? []).flatMap((r) => [r.why ?? '', r.restsOn ?? ''])];
  const refs = semaRefs(texts);
  if (refs === null) warnings.push('Sema is not installed here, so Sema references were not checked');
  else {
    const bad = refs.filter((r) => r.verdict !== 'KNOWN');
    for (const r of bad) {
      const where = (file.readings ?? []).map((x, i) => ((x.why ?? '') + (x.restsOn ?? '')).includes(r.ref) ? i : -1).filter((i) => i >= 0);
      fail(`${where.length ? where.map((i) => `readings[${i}]`).join(', ') : 'note'}: ${r.ref} ${r.verdict === 'STALE' ? `has the wrong hash; the card is ${r.handle}#${r.canonical}` : 'is not a card of the project vocabulary'}.`);
    }
    checkedRefs = refs.length - bad.length;
  }
  // Against the model: no partial overlaps with recorded readings; finer readings must leave a feasible residual
  // under every recorded coarser reading that contains them (the grammar's mixture law, A9).
  if (model) for (const [leaf, rs] of byLeaf) {
    if (!shares.has(leaf)) continue;
    const recorded = seriesReadings(model, leaf);
    const l = shares.get(leaf); const keys = [...l.answers.map((a) => a.key), ...(l.remainder ? ['remainder'] : [])];
    for (const r of rs) for (const old of recorded) {
      const partly = (r.start < old.start && old.start < r.end && r.end < old.end) || (old.start < r.start && r.start < old.end && old.end < r.end);
      if (partly) fail(`${leaf} ${r.start}–${r.end} partly overlaps the recorded reading ${old.start}–${old.end}.`);
    }
    const all = [...recorded.filter((o) => !rs.some((r) => r.start === o.start && r.end === o.end)), ...rs];
    for (const coarse of all) {
      const inner = all.filter((x) => x !== coarse && x.start >= coarse.start && x.end <= coarse.end && !(x.start === coarse.start && x.end === coarse.end));
      // only the outermost inner readings count, so nested detail is not counted twice
      const top = inner.filter((x) => !inner.some((y) => y !== x && y.start <= x.start && y.end >= x.end && (y.end - y.start) > (x.end - x.start)));
      if (!top.length) continue;
      const span = coarse.end - coarse.start;
      for (const k of keys) {
        const used = top.reduce((sum, x) => sum + ((x.end - x.start) / span) * (x.weights[k] ?? 0), 0);
        if (used - (coarse.weights[k] ?? 0) > 1e-4) fail(`${leaf} ${coarse.start}–${coarse.end}: its finer readings already give ${k} ${used.toFixed(4)} of the interval’s average, more than the coarse reading’s ${(coarse.weights[k] ?? 0).toFixed(4)}; revise the coarse reading openly or the detail.`);
      }
      const covered = top.reduce((sum, x) => sum + (x.end - x.start), 0);
      if (Math.abs(covered - span) < EPS) for (const k of keys) {
        const avg = top.reduce((sum, x) => sum + ((x.end - x.start) / span) * (x.weights[k] ?? 0), 0);
        if (Math.abs(avg - (coarse.weights[k] ?? 0)) > 1e-3) warnings.push(`${leaf} ${coarse.start}–${coarse.end}: the finer readings average ${avg.toFixed(4)} for ${k}, the coarse reading says ${(coarse.weights[k] ?? 0).toFixed(4)}.`);
      }
    }
  }
  return { problems, warnings, byLeaf };
}

// ---------- commands ----------
const readFile = (p) => JSON.parse(readFileSync(resolve(p), 'utf8'));
if (command === 'show') {
  const from = Number(flag('from')), to = Number(flag('to'));
  if (blockLevel(from, to) < 0) throw new Error('--from and --to must be the ends of a block of the filling schedule, such as --from 1500 --to 1800.');
  let model = null, values = null;
  try { model = await currentModel(); values = await recordedValues(); } catch (e) { console.error(`(no bridge: recorded readings not shown) ${e.message}`); }
  const schedule = S.map((l) => ({ level: l.level, name: l.name, blocks: l.blocks.filter(([a, b]) => a >= from && b <= to) })).filter((l) => l.blocks.length);
  const leaves = T.leaves.map((l) => {
    if (l.kind === 'share') {
      const rec = model ? seriesReadings(model, l.series) : [];
      const has = (a, b) => rec.some((x) => x.start === a && x.end === b);
      const next = S.flatMap((lv, k) => lv.blocks.filter(([a, b]) => a >= from && b <= to && !has(a, b) && (k === 0 || has(...parentBlock(k, a, b)))));
      return { ...contract(l), recorded: rec.filter((r) => r.end > from && r.start < to), fillableNow: next };
    }
    const v = values?.get(l.process) ?? new Map();
    const pts = [...boundaries].filter((t) => t >= from && t <= to).sort((a, b) => a - b);
    const next = pts.filter((t) => !v.has(t) && (boundaryLevel(t) === 0 || (() => { const k = boundaryLevel(t); const blk = S[k - 1].blocks.find(([x, y]) => x < t && t < y); return blk && v.has(blk[0]) && v.has(blk[1]); })()));
    return { ...contract(l), recorded: [...v].filter(([t]) => t >= from && t <= to).map(([t, value]) => ({ at: t, value })), fillableNow: next };
  });
  const out = { period: [from, to], schedule, retrievalDate: T.NOW, leaves };
  console.log(JSON.stringify(out, null, 1));
} else if (command === 'check' || command === 'record') {
  const path = args[1]; if (!path) throw new Error(`usage: node scripts/fill.mjs ${command} <readings.json>`);
  const file = readFile(path);
  let model = null, values = null;
  try { model = await currentModel(); values = await recordedValues(); } catch (e) { if (command === 'record') throw e; console.error(`(no bridge: checked against the structure only) ${e.message}`); }
  const { problems, warnings, byLeaf } = checkFile(file, model, values);
  for (const w of warnings) console.log(`warning: ${w}`);
  if (problems.length) { for (const p of problems) console.log(`problem: ${p}`); console.log(`${problems.length} problem(s); nothing recorded.`); process.exit(1); }
  const nShare = [...byLeaf.keys()].filter((k) => shares.has(k)).length, nScalar = [...byLeaf.keys()].filter((k) => scalars.has(k)).length;
  console.log(`ok: ${file.readings.length} readings for ${nShare} share series and ${nScalar} quantities, ${file.period[0]} to ${file.period[1]}${checkedRefs ? `; ${checkedRefs} Sema reference(s) resolved` : ''}.`);
  if (command === 'record') {
    const start = heads(); let { model: m, graph: g } = start;
    const by = `Filled by ${file.filler.id}${file.filler.model ? ` (${file.filler.model})` : ''}, recorded ${new Date().toISOString().slice(0, 10)} by fill.mjs.`;
    for (const [leaf, rs] of byLeaf) {
      if (!shares.has(leaf)) continue;
      const l = shares.get(leaf);
      const s = await call('life_series_record', { requestId: `fill-${run}-${file.filler.id}-${leaf}-${file.period.join('_')}`, previousModelHash: m, subject: 'referent.humanity', parentEventId: nodeEvent(l),
        series: { id: l.series, question: l.question, unit: l.unit, answers: l.answers, ...(l.remainder ? { remainder: l.remainder } : {}) },
        reason: `${by} Period ${file.period[0]} to ${file.period[1]}.`,
        readings: rs.map((r) => ({ start: r.start, end: r.end, tag: r.tag, weights: r.weights, why: `${r.why.trim()} Rests on: ${r.restsOn.trim()} ${by}` })) });
      m = s.modelHash; writeFileSync(headsPath, JSON.stringify({ model: m, graph: g }, null, 1)); console.log(`recorded ${leaf}: ${rs.length} reading(s)`);
    }
    if (m !== start.model) { g = (await call('life_narrative_rebind', { requestId: `fill-${run}-${file.filler.id}-rebind-${file.period.join('_')}`, graphHash: g, modelHash: m, accessScopes: [SCOPE], reason: `${by}` })).graphHash; writeFileSync(headsPath, JSON.stringify({ model: m, graph: g }, null, 1)); }
    const qs = [...byLeaf].filter(([k]) => scalars.has(k)).flatMap(([, rs]) => rs);
    if (qs.length) {
      const world = await call('life_world_create', { requestId: `fill-${run}-${file.filler.id}-world-${file.period.join('_')}`, modelHash: m });
      const coords = qs.map((r) => ({ id: `${r.leaf}@${r.at}`, processId: r.leaf, targetTime: r.at }));
      const req = await call('life_estimation_request_create', { worldId: world.worldId, requestId: `fill-${run}-${file.filler.id}-est-${file.period.join('_')}`, operation: 'assimilate', intent: 'reality',
        evidenceCutoff: T.NOW, accessScopes: [SCOPE], coordinates: coords });
      const sub = await call('life_estimation_response_submit', { estimationRequestId: req.estimationRequestId, requestId: `fill-${run}-${file.filler.id}-sub-${file.period.join('_')}`,
        dispositions: qs.map((r) => ({ coordinateId: `${r.leaf}@${r.at}`, status: 'known', reason: r.why.trim().slice(0, 4000) })),
        provisionalClaims: qs.map((r) => ({ coordinateId: `${r.leaf}@${r.at}`, outputMode: 'estimated', valueTime: r.at, claim: { id: `fill.${file.filler.id}.${r.leaf}.${r.at}`, subject: r.leaf,
          value: { kind: 'scalar', value: r.value }, uncertainty: r.unknownUncertainty ? { kind: 'unknown' } : { kind: 'interval', lower: r.lower, upper: r.upper },
          evidence_type: 'estimate', holder: file.filler.id, evidence_cutoff: T.NOW, provenance: [`${r.tag}: ${r.why.trim()}`, `rests on: ${r.restsOn.trim()}`, by],
          authority: { source: file.filler.id, weight: 1 }, access_scopes: [SCOPE] } })) });
      const rec = await call('life_process_estimation_record', { requestId: `fill-${run}-${file.filler.id}-rec-${file.period.join('_')}`, proposalId: sub.proposalId, graphHash: g, accessScopes: [SCOPE], parentId: 'account',
        review: { verdict: 'approved', holder: 'fill.mjs', rationale: `Recorded as ${file.filler.id} gave it: the contract checks in fill.mjs passed (leaf, date, bounds, uncertainty, tag, reason). This approval checks the form, not the truth of the values.` } });
      if (!rec.graphHash) throw new Error(`recording the quantities stopped: ${rec.status} ${JSON.stringify(rec.error)}`);
      g = rec.graphHash; writeFileSync(headsPath, JSON.stringify({ model: m, graph: g }, null, 1)); console.log(`recorded ${qs.length} quantity value(s)`);
    }
    const n = await call('life_understanding_record', { graphHash: g, requestId: `fill-${run}-${file.filler.id}-note-${file.period.join('_')}`, accessScopes: [SCOPE], holder: file.filler.id, recordedBy: 'fill.mjs',
      notes: [{ nodeId: `fill.${file.filler.id}.${file.period.join('_')}.${run}`, kind: 'estimate', title: `Readings for ${file.period[0]} to ${file.period[1]} by ${file.filler.id}`,
        text: `${file.filler.id}${file.filler.model ? `, ${file.filler.model},` : ''} filled ${file.readings.length} readings for ${file.period[0]} to ${file.period[1]}: ${[...byLeaf.keys()].join(', ')}. Tags: ${TAGS.map((t) => `${t} ${file.readings.filter((r) => r.tag === t).length}`).join(', ')}. ${file.note ? file.note : ''}`.trim(),
        about: [...new Set([...byLeaf.keys()].map((k) => nodeEvent(shares.get(k) ?? scalars.get(k))))].slice(0, 32).map((e) => ({ record: `event:${e}` })) }] });
    g = n.graphHash;
    writeFileSync(headsPath, JSON.stringify({ model: m, graph: g }, null, 1));
    console.log(`heads: model ${m} graph ${g}`);
  }
} else {
  console.log('usage: node scripts/fill.mjs show --from <year> --to <year> | check <readings.json> | record <readings.json> [--heads <file>] [--port <n>]');
  process.exit(command ? 1 : 0);
}
