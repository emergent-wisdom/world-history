# Filling the history tree

This is the brief for anyone, a person or a model, who fills a part of the history tree with values. It is meant to
be enough on its own. You fill values. You never change the structure: the questions, units, answers and
denominators are fixed in [`history-tree.mjs`](history-tree.mjs), and a reading for anything not in it is refused.

## What you are given

A **block** of the filling schedule, for the world. The schedule fills coarse first, because every share is an
average over its interval and the long readings constrain the short ones. It has four nested levels, each dividing
exactly into the next:

| Level | Blocks | What |
|---|---|---|
| A | 1 | the whole span, 320,000 years ago to 2026 |
| B | 6 | to 10,000 BCE, to 1000 BCE, to 1500, to 1800, to 1950, to 2026 |
| C | 18 | finer divisions of those |
| D | 77 | the cells, from 120,000 years at the start to one year at the end |

To see your block, run

```sh
node scripts/fill.mjs show --from 1500 --to 1800
```

It prints three things:
- **the schedule's blocks inside your block**, level by level;
- **every leaf of the tree**, each with its exact contract;
- **for each leaf, what is already recorded and what can be filled now** (`fillableNow`).

A share block can be filled once the block containing it has a reading. A quantity can be given at a boundary once
both ends of the coarser block around it have values.

There are two kinds of leaf:
- **Shares** (9). A question that divides one unit among exclusive answers, such as how the world's people divide by
  how their household obtains its food. Each has a `denominator`, the people or the energy it divides.
- **Quantities** (16). A number with a unit, such as world population in billions or life expectancy in years.

## What you produce

One readings file. You may write it anywhere: `.local-work/` is the usual place, and it is not committed.

```json
{
  "schema": "world-history-fill/v1",
  "filler": { "id": "your-id", "kind": "model", "model": "the model you are" },
  "place": "world",
  "period": [1500, 1800],
  "note": "Anything a later reader of your fill should know, in a sentence or two.",
  "readings": [
    { "leaf": "livelihood", "start": 1500, "end": 1550,
      "weights": { "foraging": 0.02, "food_production": 0.88, "fed_by_others": 0.10 },
      "tag": "inferred", "why": "What happens in this stretch that gives these shares.",
      "restsOn": "What the reading rests on: the source you read, or the knowledge you relied on." },
    { "leaf": "humanity.world-population", "at": 1500, "value": 0.46, "lower": 0.40, "upper": 0.52,
      "tag": "inferred", "why": "...", "restsOn": "..." }
  ]
}
```

- **A share reading** covers one block of the schedule, from `start` to `end`. Give every answer a weight, zero
  included, and make the weights sum to 1.
  - **Coarse first.** Read the blocks listed in `fillableNow`, level by level. Your readings for the finer blocks must
    average, weighted by duration, to the reading of the block they divide.
  - **The unit.** A reading is an average over its interval with equal weight for each year, as the unit says.
- **A quantity reading** is a value at one year, `at`, which must be a boundary of the schedule. Give the coarse
  boundaries first, as `fillableNow` lists them. Give `lower` and `upper` bounds that honestly cover your uncertainty,
  and make them wide when you are unsure. Set `"unknownUncertainty": true` only if you have no basis at all for
  bounds.
- **Read the contract, not the label.** Each answer's `meaning` decides what belongs to it. For example, a household
  that grows cocoa and buys most of its food is `fed_by_others`; all of Russia counts in Europe; Antarctica holds
  essentially no one.

## Tags: say what kind of claim each reading is

This is an account of the real world. Nothing is invented. Every reading carries one tag.

| Tag | Use it when |
|---|---|
| `source` | you read a source in this session and the reading states what it says; `restsOn` names it and says when you read or retrieved it |
| `inferred` | it follows from well-established knowledge, and a careful reader would conclude the same |
| `sketch` | it is a rough first estimate, drawn to give the shape, to be redrawn later |
| `exploring` | it is a hypothesis under test |

**Never tag `source` for something you remember.** Recalling that "Maddison estimated about 0.6 billion people" is
`inferred` at best. Write "recalled from Maddison's estimates, not checked" in `restsOn`. The first run of this
project tagged search summaries as checked sources, and the record had to be corrected; do not repeat it.

## Reason with Sema, and write in it

Sema's patterns are there to help you reason better, and citing them lets a later reader see exactly what you meant.
When a pattern shapes a reading, name it in `why`, `restsOn` or `note` by its short reference, such as
`ConfoundedAttribution#18ab`. `fill.mjs check` resolves every reference against the project's vocabulary and refuses
any that are wrong. To read a pattern in full, or to look for one:

```sh
node scripts/call.mjs --server sema sema_resolve '{"handle":"MetricReading"}'
node scripts/call.mjs --server sema sema_search '{"query":"a change of source mistaken for a change in the world","limit":5}'
```

A filler's bridge is started with `--sema-readonly`, so patterns can be read but never minted.

The patterns these readings most often need:

| Pattern | Use it to ask |
|---|---|
| `SourceEvaluate#24f6` | What could this source know, and what were its incentives? |
| `CiteBack#b840` | Does every figure point to what supports it, and does a recalled figure say it is recalled? |
| `Prestigeloan#7f65` | Is the source an authority for this claim, or only for others? HYDE for recent centuries, not for prehistoric regional allocation |
| `MetricReading#56a9` | Does the source count what the leaf counts? Mills, urban thresholds, adults or everyone |
| `ConfoundedAttribution#18ab` | Where a series steps, did the world change, or did the source? |
| `EvidenceDependence#23ca` | Are two agreeing figures really from one dataset, or from one memory? |
| `EvidenceUnderdetermination#999b` | If two reconstructions fit equally, read one and record the other |
| `AbsenceEvidence#10a3` | Could the search have found it, if it existed? |
| `BaseRateInclude#1e63` | What is the rate in the reference class, before this case's particulars? |
| `Fermi#f206` | Can an unmeasured quantity be built from parts? Area times density; per person times people |
| `UncertaintyMap#c412` | Is this a known unknown? Then say so, rather than wrapping a guess in wide bounds |
| `ConfidenceCalibrate#e357` | Would bounds like these contain the truth as often as they claim? |

The mechanisms the account explains with are Sema cards too. When one explains a change you record, cite it, for
example `VirginSoilEpidemic#d1fd` for the Americas after 1492:
- `MalthusianTrap#0f6b`, `DensityRatchet#2ace`, `SurplusBound#7fe3`, `DemographicTransition#6e31`
- `WaveOfAdvance#4cec`, `InnovationDiffusion#d44a`, `VirginSoilEpidemic#d1fd`, `Twinflow#9474`
- `ExitCage#eef7`, `SecurityDilemma#a61b`, `FreeRiderProblem#b2e3`, `Warsift#b01b`
- `StructuralDemographicCycle#8433`, `DiminishingComplexityReturns#cb63`, `Sunbound#c94c`, `CumulativeCulture#4f93`

## Make the readings agree with each other

`check` cannot test these, so you must:
- **Food and work.** The share of people fed by others, and the share of workers outside food-getting, rise together.
- **Towns.** The urban share cannot be large while the largest city is small.
- **States.** The share under no state and the largest polity's share of the world must fit together.
- **Energy.** Energy per person includes food and fodder, so world population times energy per person is more than
  the primary energy that the energy-supply series divides. Neither should jump without a cause.
- **Literacy and schooling.** Neither can rise where the other stays at zero for long.
- **Earlier periods.** If readings already exist for the period, your detail must average to the coarser readings.
  `check` refuses detail that cannot. If you think a coarse reading is wrong, say so in `note` rather than forcing
  the detail.

## Check your file, and stop there

```sh
node scripts/fill.mjs check your-file.json
```

Fix every problem it reports and run it again, until it says `ok`. Warnings are worth reading but do not block.

Do not record the file yourself, and do not change anything under `structure/`. One recorder records every fill with
`node scripts/fill.mjs record`, because the store takes one writer at a time.

## Where the structure comes from

The tree is History, the lifecycle of the Universe, decomposed with Fractal Intelligence's method as Sema 0.8.0 states
it. Under humanity, twelve dimensions are opened two levels further, and every node holds for every human society from
320,000 years ago to 2026. [`../METHOD.md`](../METHOD.md) explains how it was made. The construction records each
verdict, and you can read them with `life_construction_replay`.
