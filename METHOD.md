# Method

This is how the construction is being built, with the Meaning Model as the medium the account is thought in and
Sema as the source of the patterns it reasons and explains with. It describes what has been done so far and says where
a step is still to come.

## The aim

The Meaning Model's method is to build an account of how the present came to be: model the processes and
relationships that could have produced it, including those not observed directly, follow their consequences to
predict what else should be found, and revise the account with new evidence. World history is that account at the
largest human scale. The present here is the world of mid-2026, and the account runs back to the emergence of Homo
sapiens, about 320,000 years ago. Since run 2 it sits inside History, the lifecycle of the Universe, with the Earth and
life on Earth as its setting.

The span, and that the construction stands on its own, were decided on 2026-10-07. The decisions are recorded in the
construction beside the modeler's notes.

## Run 2: the structure first

The Meaning Model's instructions ask for the categories before the numbers: every concept the work divides is carved
with Fractal Intelligence's conceptual decomposition before it gets values. The first run did not do this. It picked its
eras and series by convention, filled values, and stored lists of kinds as if they were carves. On 2026-10-08 the
work restarted, keeping the first run's insights. Every process is to be a subprocess of History, and the
structure is to be carved first so that it holds throughout time and can fit everything, regions included. It must
also run locally, so that Kenya's history uses the same categories as world history.

**The root.** In the Meaning Model's grammar, the Universe is a Thing and History is its lifecycle Event, which
contains every other lifecycle and Event. History is therefore the root of the construction, not world history.
- **Parts.** The Earth is a part of the Universe. Its land is divided by the UN M49 standard into Africa, the
  Americas, Asia, Europe, Oceania and Antarctica, by 2026 borders.
- **Members.** Life on Earth is the Earth's living part, and humanity is one of its lineages.

**Three relations, kept apart.** Sema's cards keep them distinct, and the first run had mixed two of them:
- **Parts and members.** These hold between Things: the Earth's regions, humanity's populations.
- **Composition.** This holds between concepts: what a history must address, claimed complete for its promise
  (`CompositionEdge`).
- **Kinds.** These are open-world lists, never claimed complete (`SpecializationEdge`).

**The carve, step by step,** as Fractal Intelligence's method is stated in Sema:
- **The frame.** The claim frame comes first. The promise is that every record the construction will hold has exactly
  one place in the tree. The range is every Thing in History, and in detail every human society from 320,000 years ago
  to 2026. The range is the hard test: states, cities, writing, money and fossil fuels exist only in some eras, so each
  can be a kind under a dimension, never a dimension itself. Revision 5 found that the carve of a human way of living
  had been judged against a narrower lens, what a society needs to live and pass its way of living on, and judged it
  again against this frame (see *Revise openly*).
- **The ascent** (`MandatoryAbstraction`) runs Event → lifecycle → the history of a part of the Universe → of a
  population of living things → of a social population → of a cultural population → of a human population. Each step
  records what it adds to the carve below.
- **The carves** (`DecompositionGate`). Every candidate dimension must pass necessity, independence and universality,
  none of which can make up for another, and each accepted set must be complete. Every verdict is recorded, the
  rejected candidates included.
  - Any lifecycle needs identity, composition, processes and interval; a part of the Universe adds setting and
    relations. These restate the grammar's own forms, which the record says plainly.
  - A human way of living has twelve dimensions: provisioning, exchange, wealth, population, habitat, connection,
    society, politics, security, knowledge, beliefs and norms, and arts and play. Run 2 had eight.
  - Technology failed independence, because a technique is the means by which some dimension is realized. The
    history of technology is kept as a view over the means nodes.
  - Two further levels follow, 41 and 71 nodes, each tested against the same range. Politics, for example, opens into
    polities, rule, government, law and justice, and membership and participation, and those into fourteen nodes,
    such as rule's form, selection, legitimacy and constraint.
- **Completeness.** The independent test is the Outline of Cultural Materials (HRAF, 2025 edition), which classifies
  every aspect of every documented culture. All 78 of its substantive categories have a home, except behaviour and
  personality, which is kept as the frontier alternative Inner life. Under run 2's carve, 17 had no home or two.
- **The routing check** (`RoutingSanityCheck`) routed 142 claims from 55 fields of history, taken from two outside
  lists and frozen before the carve. It is weak evidence: the modeler wrote the claims knowing the defects already
  found, so it was not blind. Its warnings stay on record: labour, law, work by age and sex, real wages, inner life,
  machines that hold knowledge, and ideologies. Run 2's own check had used the first run's events. A blind sample,
  written and routed by another model, is the stronger test.
- **The synthesis** (`Synthesis`). Every split declares how its children's contributions give the parent. Each of
  the sixteen mechanism patterns is recorded as the dimensions it couples: `MalthusianTrap` couples provisioning and
  population, and `Warsift` security and politics. Wealth, society, beliefs and norms, and arts and play have no
  mechanism yet.
- **History's fields.** Economic, social, political, cultural, gender, environmental and technology history cut across
  the dimensions, and a level that mixed them would break `MECE`. Each field in the two lists has a recorded verdict:
  a dimension, a node, a view over several nodes, a scale, or a method. Fields that are views or nodes are concepts
  that study the nodes they cover, so each can be found without cutting the tree
  ([`structure/carve-evidence.mjs`](structure/carve-evidence.mjs)).
- **The depth** (`MarginalValueRule`). Depth stops three levels below humanity. Below that, almost everything is a
  kind that exists only in some eras; kinds are added as they are met.

**Every node is a process.** The tree is recorded three ways:
- **as concepts**, with 44 abstract cuts for the carves in force;
- **as one process decomposition rooted at the process `history`,** with 148 processes and 147 edges. Nodes above the
  leaves are structural and carry no value of their own;
- **as Events contained in History.** So the viewer's tree and its structure view show the same hierarchy.

**Values second.** The 25 measures at the leaves are frozen in
[`structure/history-tree.mjs`](structure/history-tree.mjs), each with its exact question, unit and answers. Agents,
including less capable models, fill them cell by cell: a node, a place and a period of the filling grid.
- **Each reading** is tagged, with its reason and source, and finer readings must average to coarser ones.
- **Parts and wholes** are aggregated within each year by the denominator or aggregation the leaf declares
  (people, adults, working people, primary energy; a sum, a ratio of totals, a maximum), then averaged across years.
- **A separate checker** verifies the sources and the agreement between regional and world readings.
- **A local history** (a region, a country, a city) is the same structure instantiated for "the people living in X",
  opened when someone needs it.

**The long-term fill.** The whole span and the six long blocks were filled first, for every question, by the
modeler.
- **From published data:** where people live from 1500 on (Our World in Data's population by country, placed in the
  M49 regions after interpolating each country to common years), the urban share from 1950 (UN Population Division,
  national definitions), and energy by source from 1800 (Smil and the Energy Institute). These readings are tagged
  `source`.
- **Recalled:** everything else, tagged `inferred` or `sketch`, with what it rests on.
- **One account before 1 CE:** where people lived uses one account up to 1 CE, the modeler's sketch, with HYDE's very
  different reconstruction recorded as the rival account. This avoids an artificial step where the sources change.
- **The whole-span reading** is the exact duration-weighted mean of the six blocks and takes the weakest of their
  tags.
- **A correction.** Energy for 1800–1950 was first taken straight from Smil's series and tagged `source`. That series
  counts no water or wind mills, which the leaf counts, so mills stepped to zero at 1800 because the source changed,
  not the world. The reading now adds a recalled mills share continuous with the block before and is tagged
  `inferred`, with the reason recorded.

**Revise openly.** Run 2's first registration repeated a mistake the first run had made: a patch to the build script
failed, and the registration ran without it. The carves went in tagged `inferred` instead of `exploring`. Revision 1
corrected the tags with the reason recorded, and the earlier revision stays in the history. A review then found
twelve third-level nodes that were kinds or era-bound media, not dimensions: schooling and writing, which are zero
before schools and scripts, prices, religious tradition and others. Revision 2 withdrew them and carved their parents
again into dimensions that hold for every society, such as capacity, durability and access for storage. The
era-bound quantities now hang as measures on the new nodes: a measure may be zero for most of the range, a dimension
may not be a kind. Every node's universality verdict was then scanned for the same defect. An outside review found more:
- **Aggregation.** Shares would have been aggregated by population when energy needs energy weights and literacy adult weights.
- **Conditioned averages.** The averages of a series conditioned on living under a state did not multiply back to the combined shares.
- **Missing verdicts.** The middle-level nodes lacked necessity and independence verdicts.
- **Non-fatal violence.** It had no home.
- **Tags.** Two recalled ages were tagged `source`.

Revision 3 answers all of them, and the review is recorded under its reviewer. Every share now declares its
denominator and every quantity its aggregation. State and form became one unconditioned series. Every node now
carries all three verdicts, and violence within groups opens into harm, fatal or not, and restraint. A step that depends on a
patch now runs only if the patch succeeded.

Revision 5 (2026-10-08) re-carved the structure. A flaw near the root distorts everything below it, so the decomposition
gate was applied in full, and history's other categories were tracked. The tree's frame promised one home for every record, but
the human carve had been judged against what a society needs to live and pass its way of living on. Under that lens
art failed necessity, and property, diplomacy, religious practice, political contest and transport had no home, or
two. The frame was restated as a note before any verdict, and every candidate was judged again, the old eight
included:
- **The dimensions.** Four are new: wealth, connection, society, and arts and play. Coordination became politics.
  Restraint of violence was withdrawn, since it had put courts and policing in two places.
- **Universality.** For the arts, the sacred and language, the new frame changes necessity, not universality, so
  their universality rests on a positive inference: every living human lineage has them. The inference is of moderate
  strength, and the narrower claim from about 100,000 years ago is recorded as the alternative.
- **Rank and class.** They had been phrased as kinds, and are now phrased as dimensions every society answers.
- **The leaves.** The frozen leaves were routed through their new nodes too. The political-order series mixes two
  criteria: its no-state answer includes chiefdoms with one ruler, so it divides first by whether people live under a
  state, a question about polities, and only then by form. It stays frozen as a joint reading of polities and form,
  filed under form, because splitting it would bring back the averaging error that revision 3 removed.

Recorded readings were kept. The change went to the model as a difference, after a dry run on a scratch copy. That run
caught four node Events that a note was anchored to, which now stay as retired Events inside their successors.

**Record the reasons where they belong.** Each decision is recorded under the name of whoever made it. The frame, the
ascent, every carve, the routing results, the synthesis, the defaults that can be overturned and the open nodes are
recorded as the modeler's notes, each linked to the records it concerns and citing the Sema cards by full id
(`life_construction_replay`).

**Prove it travels.** The exported history imports into a fresh engine with the same hashes, and the repository pins
every tool by digest (`tool.json`).

## The first run, and what it taught

The first run built values first. It is superseded, and its record is not part of the published history, but several
of its results carry into run 2:
- **Livelihood.** Routing nine households through the livelihood carve forced a rule: a household's livelihood is the
  source of most of the food energy it eats.
- **Published data.** Checking against published data showed that recalled figures from 1500 on held within about one
  percentage point, while prehistoric regional reconstructions disagree by a factor of two or more.
- **Energy.** Energy has to be read in its source's own accounting.
- **Labels on sources.** A source must not be called checked when only summaries were read. The first run's
  dispersal dates were relabelled after the PubMed abstracts were fetched and compared claim by claim.
- **Time 0.** A calendar-year model starts its world at 1 CE, which decides how dated values can enter.

## How Sema is used

Sema is used in three ways: as the patterns the reasoning follows, as the source of the mechanisms the account
explains with, and as the identities that tie the model to those mechanisms.

### 1. Thinking with Sema's patterns

Before reasoning about a decision, a carve or a rival explanation, the relevant patterns are searched for and
resolved, and their mechanisms, invariants and failure modes are used as the procedure and the checks. The notes cite
each pattern by handle and full content hash, so a reader can resolve exactly the definition that was followed.

| Pattern | Where it was used | What it changed |
| --- | --- | --- |
| `MandatoryAbstraction` | locating history (run 2) | the ascent from Event to the history of a human population; each step's frame changed what the carve below had to contain, from energy intake and births (living populations) to learning (cultural ones) |
| `ConceptualDecomposition`, `DecompositionGate`, `CompositionEdge` | carving history and a human way of living, three levels deep (run 2, judged again in revision 5) | twelve dimensions and 112 nodes below them, each judged for necessity, independence and universality over 320,000 years against the frame of the account of history; technology rejected for failing independence; the sacred, the arts and language accepted on a positive inference of moderate strength, with the claim from 100,000 years ago as the alternative; in the first run these were cited for lists of kinds, which was a misuse |
| `SpecializationEdge`, `MECE` | kinds and places (run 2) | kinds stay open-world and are never stored as carves; the land is one partition along one criterion, the UN M49 regions |
| `RoutingSanityCheck` | testing the carve with claims from history's fields (revision 5), with events (run 2), and the livelihood carve with households (first run) | revision 5: 142 claims from 55 fields, none without a home, but written by the modeler knowing the defects, so weak evidence; run 2: 23 of 25 events routed cleanly, and its warning on connection became a dimension; first run: three households forced the livelihood rule |
| `MarginalValueRule` | how deep to carve (run 2) | depth stops where the dimensions that hold throughout time run out and only era-bound kinds remain |
| `Synthesis` | how the dimensions together give the account (run 2, revision 5) | every split declares how its children give the parent; each mechanism pattern recorded as the dimensions it couples |
| `Hypothesis` | every causal claim not yet tested (first run) | such claims are tagged `exploring`, never asserted |
| `EvidenceUnderdetermination`, `DistinguishingTest` | the first states; the dispersal out of Africa; 1914 (first run) | each question names the observation its rival explanations predict differently, instead of gathering more of the evidence they all fit |
| `DistinguishingTest`, failure mode "after-the-fact prediction" | the dispersal (first run) | the modeler already recalled early dates for Australia, so that recall could not count as a prediction made before looking; against dates checked in the primary studies the test came out inconclusive between a front and coastal jumps, and exposed a sharper conflict: all living non-Africans share one Neanderthal admixture about 47,000 years ago, against arrivals in Southeast Asia and Sahul 65,000 to 70,000 years ago |
| `ConfoundedAttribution` | why industrialisation began in Britain (first run) | crediting coal alone is held as an attribution to be separated from wages, institutions, knowledge and colonies |
| `EvidenceUnderdetermination`, `SourceEvaluate` | where people lived before 1 CE (first run) | the published reconstruction (HYDE) and the recalled ones disagree by a factor of two or more; HYDE allocates prehistoric population by land and assumed densities, so neither is preferred until radiocarbon or genomic estimates of regional population decide |
| `SourceEvaluate`, `AbsenceEvidence` | the population of the Americas in 1492 (first run) | estimates are to be weighed by what their sources could know; archaeological silence counts only as far as surveys could find settlements |
| `EvidenceDependence` | every recalled figure | figures recalled from one training corpus share one foundation, so their agreement is not independent support |

**Written in Sema.** The construction's notes name the patterns they reason with inline, by short reference, such as
`ConfoundedAttribution#18ab` for a step that a change of source could explain. A reader can then resolve exactly the
card that was meant, and each note's data carries the full ids. References are checked with `sema check` before a note
is recorded. Fillers do the same in their reasons: `structure/FILLING.md` lists the patterns that filling most often
needs, `fill.mjs check` refuses a reference that does not resolve, and a filler's bridge runs Sema read-only
(`--sema-readonly`). The long-term fill was first made without the patterns. Checking it against them afterwards
named the error a review had caught (`ConfoundedAttribution#18ab` for the mills that the 1800–1950 source omits), found
two definitional gaps (`MetricReading#56a9`: HYDE's definition of urban, and battle deaths against all organized
violence), and turned the oldest homicide and war figures into recorded questions (`UncertaintyMap#c412`).

### 2. Making the mechanism patterns

The account explains change by recurring mechanisms: population pressing on food, farming that cannot be abandoned,
diseases meeting people with no immunity, war sifting states. Twenty searches of Sema 0.8.0's 590 patterns found none
of them: the vocabulary covers reasoning, evidence and the coordination of agents, not how societies change. That gap
is what made Sema useful here, so the construction defines these mechanisms as patterns in its own vocabulary, the
0.8.0 full preset plus sixteen cards:

`MalthusianTrap`, `DensityRatchet`, `SurplusBound`, `DemographicTransition`, `WaveOfAdvance`, `InnovationDiffusion`,
`VirginSoilEpidemic`, `Twinflow`, `ExitCage`, `SecurityDilemma`, `FreeRiderProblem`, `Warsift`,
`StructuralDemographicCycle`, `DiminishingComplexityReturns`, `Sunbound`, `CumulativeCulture`.

They were made against the Sema vocabulary design manual, its naming taxonomy and its card review method:

- **What a card holds.** Each card states only what must hold: a gloss, a mechanism that ends by naming what is not
  an instance, invariants that define an instance, and failure modes that are the ways reasoning with it goes wrong.
  The reasons for each choice go in a separate design commentary, in the manual's sidecar format (why the pattern
  exists, why its layer, whether it could be removed, its intended and broad uses, tensions, tradeoffs, critique and
  family). They are process cards describing what happens; none prescribes a response.
- **Layer by what the mechanism needs.** Mechanisms that need several parties with separate interests are Society
  patterns; the wave of advance and the virgin-soil epidemic hold for any population, people or not, and are Physics.
- **Names that do not squat.** Four working names were changed under the Occupancy Test: a "secular cycle" already
  means a long market cycle in finance, so the card is `StructuralDemographicCycle`; the others became the
  established terms `MalthusianTrap` and `FreeRiderProblem`, and `DiminishingComplexityReturns`, which could not be
  mistaken for a claim about software. Six handles are coined because English has no short name for the concept, and
  they were kept.
- **Descent and references, checked against the neighbours' own commentary.** `DensityRatchet` extends `Brakefade`
  (an activity whose capacity to be stopped declines) and `SecurityDilemma` extends `Recifluence` (influence returning
  through a changed response), after reading each parent's design entry to confirm that the child only fixes what the
  parent leaves to descendants. `StructuralDemographicCycle` references `Capacitylag` for elite crowding, after its
  card and commentary confirmed it compares the same quantities: demands growing faster than the capacity to meet
  them.
- **Collisions, by reading.** Each draft was searched with three phrasings; the nearest cards were then read in
  full, and the glosses of every card on the shelves the new ones joined. Search scores alone were not taken as evidence of
  distinctness, since known collisions score as low as 0.45.
- **Contracts a reader can check.** The review method lists unmeasurable comparisons as a defect, so vague words in
  hashed fields were made checkable before minting: "within a few generations" became a direction of change, "far
  exceeds" became a comparison of the share of a population killed. Two were kept on purpose, with the reason in the
  critique: the security dilemma's requirement that each side arms to secure itself, without which every aggression
  answered by defence would be an instance, and the two-to-three-century length of the cycle, which the mechanism
  describes but the invariants do not require.
- **Cautions only where they are earned.** `ExitCage` carries one because its description doubles as a recipe for
  coercive extraction, and `MalthusianTrap` because it has been used to justify withholding famine relief, which its
  failure modes do not say. The other risks are already explicit in the failure modes, such as crediting a
  population's collapse to disease alone.
- **Validated, rebuilt, pinned.** Every card passed `sema_validate` before minting; validation caught one card listing
  a dependency again as a soft link. A fresh 0.8.0 vocabulary with the committed cards applied reproduces all sixteen
  identities and both vocabulary roots, which `tool.json` pins and `scripts/setup.sh` checks.

The cards are in [`sema/patterns/`](sema/patterns/), and [`sema/MANUAL.md`](sema/MANUAL.md) shows each beside its
commentary.

### 3. Grounding the model in the patterns

Each mechanism is a Concept in the model whose provenance names its card's full Sema identity, so the definition a
concept stands for is fixed by hash. Since run 2, each mechanism is also placed in the tree it explains: a constrains
relation from the mechanism to each dimension it couples. When the tree is filled, an episode claimed as an instance of
a mechanism becomes a Realization that names the card and says what kind of claim it is. In the first run, the Black
Death was claimed as `Twinflow` (inferred), and the first states as `ExitCage` (exploring, one of several rival
explanations).

## Keeping claims honest

Every record's provenance begins with what kind of claim it is: `source`, `inferred`, `exploring` or `sketch`. This
is an account of the real world, so nothing is invented.
- **Carves** are tagged `exploring`: a carve that passes the four tests is the best current hypothesis until filling
  tests it.
- **Starting values.** The engine needs a starting value for each quantity at its time 0, 1 CE. These are recalled and
  tagged `sketch`, with wide intervals. Only the world population is tagged `source`, because it was checked against
  HYDE 3.3.
- **Fillers** must say what each reading rests on, and nothing is tagged `source` until a source has been read. The
  first run's mistake of calling summaries "the abstract" is the case this rule exists for.

## What the tools could do better

Building this surfaced these limits, reported here as feedback:

- **Dated values in a calendar-year model.** Its world starts at 1 CE, so dated values after that can't be initial
  claims. A probe on a scratch store showed what works: a scalar process takes dated values through the estimation
  exchange (operation `assimilate`, with the retrieval date as evidence cutoff), and Cut series take readings at any
  date.
- **The viewer's time labels.** They fail beyond about 271,800 years from 1970, where browser dates end, so History's
  span shows "Invalid Date". Views have to pick a time window.
- **Series and the process tree.** A Cut series names no process (`process_ids` is empty), so it reaches the process
  tree only through the Event it is recorded under.
- **Structural nodes.** A node of the process decomposition must have a value type, so the structural nodes carry a
  single placeholder category.
- **The document root.** A document root marked to render is refused until it is linked to Events.
- **Long spans in the viewer.** With History spanning 13.8 billion years, the time track's end label can read
  "276,000,000 years ago" even inside a window of the last 14,000 years.
- **Questions without records.** The model's question about numerical positions is not tied to records, so a
  sufficiency note about records does not answer it; it has to be about the account's root.
- **Retiring Events.** In a re-carve, concepts and carves can be withdrawn, but Events cannot. Node Events that notes
  are anchored to therefore stay as retired Events. Links are stored as anchor targets, so a scan of the notes' about
  records misses them. A tool listing the records a graph is anchored to would let a builder check a removal first.

## Continuing

`scripts/setup.sh` installs the pinned tools and rebuilds the vocabulary, and `node scripts/bridge.mjs` serves both
servers. `life_construction_import` loads a construction history from [`construction/`](construction/) into an empty
store; read it back with `life_construction_replay` and `life_model_outline` before changing anything. The structure's
own construction history is not published yet (see the README). The tree and its frozen questions are in
[`structure/history-tree.mjs`](structure/history-tree.mjs). The structure's construction records two notes for
whoever continues:
- `claude.plan.filling.v2`: how the tree is filled across time;
- `claude.question.open-nodes.r5`: which nodes still need a measure, and the measures worth adding next.
