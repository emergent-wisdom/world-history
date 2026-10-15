# World History

A construction of world history in the [Meaning Model](https://meaningmodel.ai/): an account of how the present
came to be, built as processes, events, institutions and concepts that can be inspected, tested and revised, with
the reasoning behind each choice recorded beside what it concerns. [Sema](https://semahash.org/) supplies the
thinking patterns the construction uses, cited by their content-addressed handles, and can hold shared identities
for the categories the construction defines, where a precise definition earns one.

**Status:** two constructions, the structure and history as numbers built on it; history as numbers is on the released
Meaning Model 0.13.0.
In the structure (run 2), History, the lifecycle of the Universe, is the root. Beneath it
are the Earth, its land divided into the UN M49 regions, life on Earth and humanity, and the conceptual decomposition
of a human way of living into twelve dimensions and two further levels. The decomposition was carved with Fractal
Intelligence's method as Sema 0.8.0 states it, with every verdict recorded, and judged again in revision 5 against
what an account of history must cover. Every process the construction follows is
a node of one decomposition rooted at History, and the 25 questions at its leaves are frozen. The long-term fill is
recorded: the whole span and six long blocks for every question, from published data from 1500 on and sketched
before, so that finer fills are bounded by them. History as numbers follows 55 processes of the decomposition, from
what matters to people and how they get it to the Earth. Its first pass guessed 50 of them at 34 dates from 300,000
years ago to 2025. A fresh agent, Claude Opus 5.5 on the released tool, then continued it:
- **The time schedule.** It filled all four levels of the coverage report's time schedule. Where finer dates exposed
  errors, it corrected the series. The largest correction is the number of people ever born: about 64 billion by the
  model's own population and life expectancy, with the usual 117 billion kept inside the band.
- **Events.** It added 22 Events under History, from the end of the penultimate glacial period to COVID-19, each
  naming the processes it moves.
- **Mechanisms.** The mechanism cards became concepts, with 11 Events claimed as their instances.
- **Regions.** It added the share of the world's people in five UN M49 regions.

By the coverage report that pass was done: every level filled, no process empty, none passing over its Events. Three
passes followed, made through the tools, the first two by fresh agents and the third in a working session:
- **Causes.** For the turning points and the largest turns in the measures, it asked why each came about rather than
  its contrast, and weighed the causes by the difference each made: 36 questions, 123 weighed causes.
- **Events.** It filled out the Events of each era, region and dimension: 676 Events, 551 of them placed in the UN M49
  areas and subregions where they happened, with 1,845 judgments of how much each matters to the world and to each
  region.
- **Corrections.** Blind readers found five errors, now corrected: the Black Death's dates for Europe, the end of the
  Achaemenid Empire, the end of the Last Interglacial, an argument about the megafauna now marked as exploratory, and
  two debated claims now stated as debates.

Five more passes followed on 2026-10-14 and 15, each by a fresh agent: the first on the released 0.12.0, the Americas
and the first part of Oceania on a candidate of 0.13.0 before its release, and the rest on the released 0.13.0.
- **Places and coverage.** Every Event was placed, in the UN M49 areas and subregions or in the Earth as a whole, and
  the measures were given values at the Events that move them.
- **Regions.** The Americas, Oceania and South-eastern Asia were filled out era by era, each subregion with periods of
  its own, with the importance of each Event and the weighed causes of their turning points. The construction now
  holds 1,143 Events, 3,309 judgments of importance and 65 more weighed causes.
- **The tree of processes.** The account was asked what it was missing. 28 divisions were carved with the conceptual
  decomposition and recorded with `life_carve_record`, each with its frame, its climb to broader kinds, the tests of
  every candidate part and its synthesis, and their parts opened: the tree went from 56 processes to 113, such as the
  four forests by climate zone, the carbon cycle's own level beside the human addition, and war between polities,
  within them and one-sided killing. What is still uncarved is named in the closing notes.
- **A check.** That work was read again against what is known and corrected where it was wrong, each correction with
  its reason; by the coverage report the pass is done.

The first run, which picked its eras and series by convention and filled values first, is superseded; what it taught is
kept in [METHOD.md](METHOD.md).

[METHOD.md](METHOD.md) describes how the construction is built and how Sema is used in it.

## The history tree

[`structure/history-tree.mjs`](structure/history-tree.mjs) is the single source of the structure, for the build and
for the agents who fill it. The process tree has eight levels:

| Level | Node |
|---|---|
| 0 | History, the lifecycle of the Universe |
| 1 | The Earth |
| 2 | Life on Earth, and the Earth's setting: climate, land and sea, the living world, resources |
| 3 | Humanity |
| 4 | Twelve dimensions: provisioning, exchange, wealth, population, habitat, connection, society, politics, security, knowledge, beliefs and norms, arts and play |
| 5 | 41 sub-dimensions, such as politics: polities, rule, government, law and justice, membership and participation |
| 6 | 71 sub-sub-dimensions, such as rule: form, selection, legitimacy, constraint |
| 7 | 25 measures: 9 share questions, each with its denominator, and 16 quantities, each with its aggregation |

Every node was kept only if, without it, some kind of change that history records would have no home, and only if it
holds for every human society from 320,000 years ago to 2026. Anything that exists only in some eras, such as states,
cities, writing, money or coal, is a kind under a node, not a node. Open nodes, which have no measure yet, are gaps
for the agents to define.

History's fields cut across the dimensions, so they are not levels of the tree. Economic history, for example, is a
view over provisioning, exchange and wealth, and the history of technology a view over the nodes for means such as
converters, carriers and weapons. Each field from two outside lists has a recorded verdict in
[`structure/carve-evidence.mjs`](structure/carve-evidence.mjs). The same file holds the completeness test against the
Outline of Cultural Materials and the routing of 142 claims, which was frozen before the carve in
[`structure/routing-sample.mjs`](structure/routing-sample.mjs).

The same structure runs locally. A region, a country such as Kenya, or a city is a place inside the Earth, with "the
people living in X" as a member of humanity. Their history has the same twelve dimensions and asks the same questions
of them, so it is instantiated when someone opens it.

Values are filled coarse first, block by block: the whole span, then 6 long blocks, then 18, then 77 cells from
120,000 years at the start to one year at the end, each level averaging to the one above. [`structure/FILLING.md`](structure/FILLING.md) is the brief for whoever fills a cell, a
person or a model. They write one readings file. `node scripts/fill.mjs check` validates it against the tree and the
current model, refusing any question, answer, interval or tag the tree does not allow. One recorder then runs
`node scripts/fill.mjs record`, because the store takes one writer at a time. A separate checker verifies the sources,
and that parts agree with wholes under each leaf's denominator.

## The construction

The construction lives in the model and its Understanding Graph, not in files beside them. The reasons for a choice,
the hypotheses and what they predict, reviews and revisions are recorded through the tools, linked to the records
they concern, so the whole development can be replayed with `life_construction_replay`.

What is committed is the exported construction history of history as numbers,
[`construction/history-numbers.construction.json`](construction/history-numbers.construction.json)
(`life_construction_export`, schema `meaning-model-construction-history/v2`), its first pass built by
[`numbers/build.mjs`](numbers/build.mjs) from [`numbers/model.js`](numbers/model.js) and every later pass made
through the Meaning Model's tools, with its hashes in [`construction/MANIFEST.json`](construction/MANIFEST.json). It
imports into a fresh engine of the released 0.13.0 with the same hashes (`life_construction_import`). The structure's own construction history, with every recorded verdict,
is not published yet: its notes link files by absolute local paths, which are part of its hash-bound history. The
manifest records its hashes, and [`structure/`](structure/) holds the tree it built. Engine databases, the working Sema
vocabulary and call logs stay local and ignored.

To continue a construction, start the bridge on an empty store and import its history:

```sh
node scripts/bridge.mjs
node scripts/call.mjs life_construction_import '{"requestId":"load","sourcePath":"<absolute path to the construction file>"}'
```

To build the first pass of history as numbers again from its source instead, run `node numbers/build.mjs` against a
bridge on an empty store.

Then read it back before changing it, with `life_construction_replay` and `life_model_outline` on the head graph
hash in the manifest, as the Meaning Model asks of any agent continuing unfamiliar work. `scripts/call.mjs` calls any
tool through the running bridge.

This is an account of the real world. Every record says what kind of claim it is, in the first entry of its
provenance:

- `source`: stated by a source someone has checked;
- `inferred`: implied by the evidence or by well-established knowledge;
- `exploring`: a hypothesis under test, with its predictions recorded before they are checked;
- `sketch`: a rough first account, to be opened or redrawn.

Nothing here is invented. Where a reading names a source beside a recalled figure, such as United Nations
estimates or Smil's energy reconstructions, the source is where that figure is to be checked, not a document that
was consulted; nothing is tagged `source` until it has been checked.

## Sema patterns

Sema serves the construction in two ways. Its structure was carved with Fractal Intelligence's method as Sema 0.8.0
states it (`MandatoryAbstraction`, `ConceptualDecomposition`, `DecompositionGate`, `RoutingSanityCheck`,
`MarginalValueRule`), and its reasoning uses the patterns for evidence and explanation, such as
`EvidenceUnderdetermination`, `DistinguishingTest`, `AbsenceEvidence` and `SourceEvaluate`, all cited by handle and hash. The historical mechanisms it explains with, which Sema 0.8.0
does not define, are this project's own patterns: 16 cards in [`sema/patterns/`](sema/patterns/), from
`MalthusianTrap` and `WaveOfAdvance` to `Warsift` and `CumulativeCulture`. Each card is content-addressed, so a
concept in the model can name the exact definition it uses.

[`sema/MANUAL.md`](sema/MANUAL.md) shows each card beside its design commentary
([`sema/design_critique.json`](sema/design_critique.json)), in the form of the Sema vocabulary design manual, and
`scripts/sema-manual.mjs` regenerates it. The cards were written against that manual's governing principles, the
naming taxonomy and the card review method, searched for collisions with three phrasings each, and validated before
minting.

## Toolchain

[`tool.json`](tool.json) pins both tools:

- **Meaning Model 0.13.0** (tag [`v0.13.0`](https://github.com/emergent-wisdom/meaning-model/releases/tag/v0.13.0),
  commit `388050c`): the package as published on npm, by SHA-256 and npm integrity, and the engine for each platform
  from the GitHub release, by SHA-256. 0.13.0 is the first release with `life_carve_record`, which the tree pass used.
- **Sema 0.10.0** (`semahash` on PyPI, tag `v0.10.0`, commit `67fa9f2`): the wheel by SHA-256, and the starting
  vocabulary, the package's full preset of 617 patterns, by its semantic and catalog roots.

```sh
scripts/setup.sh
```

installs both into `.tools/`, checks every digest, and creates the project vocabulary `store/sema/world-history.db`:
the pinned preset, checked against its roots, plus the cards in `sema/patterns/`, checked against the project roots
in `tool.json`. Nothing is installed globally. The project's Sema server reads
and mints only in that vocabulary; it never changes another Sema configuration or vocabulary, and never pulls.
Node.js 22.18 or later and Python 3.10 or later are required.

```sh
node scripts/bridge.mjs
```

starts both servers on the engine store `store/world-history.sqlite` and serves them on `127.0.0.1:8811`, one call
at a time, with the Meaning Model's live viewer following each saved revision. It refuses to start unless the
installed tools match the pins. Run one bridge per store.

## License

The construction, its records and values, the documentation and the scripts are licensed under
[CC BY 4.0](LICENSE): credit Henrik Westerberg and the World History construction, built with the
[Meaning Model](https://meaningmodel.ai/). Third-party data, sources and dependencies keep their own licenses.
