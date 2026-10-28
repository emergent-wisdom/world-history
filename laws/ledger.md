# The laws pass, Phase 1: the ledger of findings

Each finding in `.local-work/laws/report.md` and `.local-work/laws/checks.json` is weighed here. For each one the
ledger separates what the bridging parameters can explain from what they cannot, ranks the explanations
(`Abduction#e738`), checks the literature in full texts where they could be reached, and gives a status. The
same entries are recorded as Understanding Nodes held by `claude` in the graph `history-numbers` (scope
`world-history`), written against model `a5847467efa7…`. The closing note is `claude.closing.laws-phase-1`, at graph
head `f2bdad38a909…`.

No value, law or other record was changed. Every correction below is a proposal, to be made later on review.

Statuses: **known** (published; cited); **error in the model** (which values and why); **candidate discovery**
(none this phase).

Sema patterns cited, each checked with a strict `sema_handshake` on its full hash:
`Abduction#e738`, `MalthusianTrap#0f6b`, `DemographicTransition#6e31`, `StructuralDemographicCycle#8433`,
`SurplusBound#7fe3`, `MetricReading#56a9`.

---

## 1. Growth gap before 1950

- **Note:** `claude.laws-phase-1.growth-gap`
- **About:** `law.identity.growth-from-births-and-deaths`, `law.bridge.births-from-fertility`, `law.identity.growth`;
  `h.humanity.growth-implied`, `h.humanity.growth-recorded`, `h.continuation`, `h.alive`, `h.alive.deaths`
- **Status:** error in the model. Fertility, life expectancy and the counts before 1950 cannot all hold. The
  inconsistency is the known forager population paradox.
- **Finding:** implied against recorded growth, in % a year. Every era before 1950 implies 0.45–1.05 against
  0.001–0.58 recorded; since 1950, 1.65 against 1.58. The largest single gaps (−17000 to −10000) are where e0 is
  recorded at 31, not a late-glacial signal. Deaths follow 100,000/e0, so the gap is on the births side: before
  farming, 7.725 × 5.5 = 42.5 births per 1,000 against 33 deaths.
- **The parameters' part:**
  - **The factor holds for high-mortality populations.** In a stationary population the birth rate is 1/e0. Read
    against Gurven & Davison's zero-growth combinations, that gives a births factor of 7.4–7.8, and 7.725 sits
    inside that range.
  - **Its range moves the result only a little.** The plausible range shifts implied growth by about ±0.2 points.
  - **The calibration range is mostly noise.** The written range of 5.83–9.59 comes from two short intervals in
    1960–1962. The other 23 intervals run 6.71–8.16.
  - **A check without the factor agrees.** By the renewal equation, r ≈ ln(TFR / TFR at zero growth) / 28. That
    gives about 0.7% before farming, 0.5% in antiquity and 0.8% in 1500–1750.
  - **Conclusion.** The parameter cannot explain the gap. The agreement since 1950 is by calibration.
- **Explanations, ranked:**
  1. **Crises the model does not hold.** e0 at the block dates is a normal-year value, while the counts include the
     crises. Gurven & Davison find that modest vital-rate change plus periodic catastrophes is the realistic route
     to zero growth.
  2. **TFR too high as a long-run average.** Fertility alone would need about 4.5 at e0 30.
  3. **The counts.** Unlikely to be wrong enough.
  4. **The births factor.** Excluded.
- **Literature:**
  - Gurven, M. D. & Davison, R. J. (2019). *Periodic catastrophes over human evolutionary history are necessary to
    explain the forager population paradox.* PNAS 116(26): 12758–12766. Full main text read, pp. 12758–12764 with
    Tables 1–3, in the UC eScholarship copy (escholarship.org/uc/item/6401j91k).
  - Kaneda, T. & Haub, C. (2022). *How Many People Have Ever Lived on Earth?* Population Reference Bureau. The whole
    article was read on prb.org. Its method needs 60–80 births per 1,000 and an e0 of about 10 to keep growth near
    zero.
  - Swanson, D. A. & Tedrow, L. M. (2016). *On Equality and Inequality in Stationary Populations.* Casualty
    Actuarial Society E-Forum, Fall 2016. Sections 1–1.2 read on casact.org.
- **Proposed correction:**
  - Make e0, TFR and the counts consistent as interval averages. Lower e0 before 1800 to about 22–25, with the
    causes rising to match. Or lower TFR to about 4.5–5.0. Or use a mix, which the literature favours: for example,
    TFR 5.0 and e0 25 before farming.
  - Record dated crises in every era.
  - Keep `law.identity.growth` disabled until the gap falls inside its band.

## 2. Deaths against the steady rate, 1918

- **Note:** `claude.laws-phase-1.deaths-1918`
- **About:** `law.identity.deaths`, `law.bridge.deaths-steady`; `h.alive.deaths`, `h.alive.deaths-steady`, `h.alive`,
  `h.alive.infection`
- **Status:** error in the model.
- **Finding:** at 1918.0, deaths are 5,000 per 100,000 against 3,333 implied by e0 30. Growth implied is −1.06%,
  against +0.16% recorded for 1914.6–1918 and +0.54% for 1918–1920.
- **The parameters' part:** none. The model's own pre-war ratio, deaths × e0 = 1.06, shows that age structure
  explains a factor of only about 1.06. At that ratio, deaths of 50 per 1,000 need an e0 of about 21, and e0 30
  needs deaths of about 35 per 1,000.
- **Explanations, ranked:**
  1. **e0 at 1918 is too high for a period measure.** It was set as "about five years below 1910". The United States
     lost 11.8 years in 1918 alone.
  2. **The deaths follow the high toll.** The excess is about 34 million in a year. Spreeuwenberg et al. estimate
     15 million in 1918 and judge more than 25 million unrealistic.
  3. **The peak is dated January 1918.** The deadly wave ran from August to December 1918.
  4. **The steady bridge itself.** It explains about 1.06 only.
- **Literature (known):**
  - Spreeuwenberg, P., Kroneman, M. & Paget, J. (2018). *Reassessing the Global Mortality Burden of the 1918
    Influenza Pandemic.* American Journal of Epidemiology 187(12): 2561–2567. Whole text read in the Nivel
    postprint, pp. 1–8.
  - National Center for Health Statistics (2022). *Life Expectancy: Historical Trends.* NCHS blog. Whole page read.
- **Proposed correction:**
  - Move the infection peak to about 1918.8, with a value set from a chosen toll. A toll of 15–25 million gives an
    excess of about 800–1,350 per 100,000.
  - Add values near baseline at 1918.0 and 1919.5.
  - Set e0 at 1918.8 from the same deaths, at about 24–27.

## 3. Deaths against the steady rate after 1950

- **Note:** `claude.laws-phase-1.deaths-after-1950`
- **About:** `law.bridge.deaths-steady`, `law.identity.deaths`; `h.alive.deaths`, `h.alive.deaths-steady`, `h.alive`
- **Status:** known.
- **Finding:** deaths × e0 / 100,000 falls from 0.90 in 1950 to 0.70 in 1970, 0.60 in 1990, and 0.55–0.56 in
  2010–2025.
- **The parameters' part:** none.
- **Explanations, ranked:**
  1. **Age structure.** A growing population is young, so its crude death rate falls below 1/e0. The identity
     1/e0 = b = d holds only in a stationary population. The model's own births and deaths give 0.94% for 2025,
     against 0.87% recorded.
  2. **A wrong input.** Not indicated.
  3. **The 1962 row.** Its 3.2% growth is an artefact of a 0.1-year interval.
- **Literature:** Swanson & Tedrow (2016), as above, sections 1–1.2.
- **Prediction:** deaths × e0 rises toward 1 and beyond as the population ages. This follows from published theory,
  so it is not a discovery.
- **Proposed correction:**
  - No value change.
  - Label the steady bridge as a stationary comparison.
  - A stable-population bridge would need a life-table family.

## 4. Plague intervals (from `checks.json` and the derived series)

- **Note:** `claude.laws-phase-1.plague-intervals`
- **About:** `law.identity.growth-from-births-and-deaths`, `law.identity.deaths`; `h.alive.infection`, `h.safety`,
  `h.alive.deaths`, `h.humanity.growth-implied`, `h.humanity.growth-recorded`
- **Status:** error in the model, in how crises are dated.
- **Finding:** recorded against implied growth, in % a year:

  | Crisis | Interval | Recorded | Implied | Cause in the model |
  |---|---|---|---|---|
  | Black Death | 1353–1400 | −0.06 | about −1.1 | No infection value between the 1349 peak and 1400. Over 1346–1353 the two agree. |
  | Justinianic plague | 549–610 | +0.07 (count over 549–770) | about −0.8 | The peak is dated 549, after the first wave, and interpolated to 770. A ramp from 500 also puts plague deaths before 541. |
  | Antonine plague | 165–180 | −0.27 | about +0.3 | No infection value between 1 and 200. |
  | Han collapse | 184–200 | −0.39 | about +0.4 | Violent deaths peak at 184 and fall linearly. |
  | Smallpox in the Americas | 1518–1520 | 0.10 | 0.81 | Equals the era gap: no world-scale signal. |

- **The parameters' part:** ±0.2 points at most. These gaps are 0.6–1.1 points within single intervals and change
  sign.
- **Explanations, ranked:**
  1. **Each crisis is held as one interpolated peak.**
  2. **Deaths no cause records,** or births that fell in the crisis.
  3. **The counts.** The Han registers may undercount after 184.
- **Literature:**
  - Mordechai, L., Eisenberg, M., Newfield, T. P., Izdebski, A., Kay, J. E. & Poinar, H. (2019). *The Justinianic
    Plague: An inconsequential pandemic?* PNAS 116(51): 25546–25554. Body text read, sections 1–9, via the Europe PMC
    full text (PMC6926030). They find "no 6th century population collapse".
  - Left open: the Black Death and Antonine tolls. Alfani & Murphy (2017) and Benedictow (2005) could not be
    reached.
- **Proposed correction:**
  - Add infection values at the ends of waves and between them: about 1352, 541, 543, about 550, 165 and 180.
  - Add hunger and infection values for the Han collapse.
  - Weigh whether the 541–549 world fall survives Mordechai et al.
  - Rerun the single-interval check.

## 5. Energy in fossil fuels taken, against stores

- **Note:** `claude.laws-phase-1.fossil-energy`
- **About:** `law.bridge.fossil-energy`; `h.warmth.stores.fossil`, `h.warmth.stores`, `h.earth.resources.fossil.coal`
- **Status:** error in the model, inside the bands.
- **Finding:** energy computed from tonnes exceeds stores at 1970–2014 and in 2025, although stores include nuclear.
  In GJ a person: 1976, 58.0 vs 52.6; 2025, 64.4 vs 64.0.
- **The parameters' part:**
  - **energy.coal is too high for today's mix.** GCB puts coal at 41% of 10.1 GtC in 2023, and the IEA puts output
    at a little under 9 Gt. That is about 0.46–0.47 t C a tonne, or roughly 18–20 GJ a tonne at IPCC carbon contents.
    This is an inference from the two sources, not a published heat content.
  - **Its effect.** At 19.5 GJ/t, coal energy falls by 2.0 GJ a person in 1976 and 2.7 in 2025.
- **Explanations, ranked:**
  1. **Stores held low by their parent's sum over 1970–1990.** The model's own note at 1975.19 says so. This
     explains about 3.4 GJ at 1976.
  2. **energy.coal too high after 1970.**
  3. **The oil and gas factors.** No sign of error.
- **Literature:**
  - Friedlingstein, P. et al. (2025). *Global Carbon Budget 2024.* Earth System Science Data 17: 965–1039. Read on
    essd.copernicus.org through section 3.5.
  - International Energy Agency (2024). *Coal 2024: Analysis and forecast to 2027.* Executive summary only,
    pp. 7–9.
  - Left open: the Energy Institute's coal tables could not be reached.
- **Proposed correction:**
  - Make energy.coal depend on the era: about 24–25 GJ/t before 1950 and 19–20 after 1970. Or record coal in energy
    units.
  - Raise stores over 1970–1990, together with the parts of `h.warmth`.

## 6. Fossil carbon kept in the air, against the CO2 people added

- **Note:** `claude.laws-phase-1.carbon-to-air`
- **About:** `law.bridge.carbon-to-air`, `law.bridge.fossil-carbon`; `h.co2.human`, `h.co2.human.fossil-emissions`
- **Status:** known, with parameter corrections proposed.
- **Finding:** the fossil-explained ratio is 0.01–0.2 before 1890, 0.3–0.8 over 1890–1940, 1.4–3.8 over 1940–1950,
  and 0.6–1.07 after 1950.
- **The parameters' part:**
  - **The airborne fraction is defined on total emissions.** The Global Carbon Budget defines AF = G_ATM /
    (E_FOS + E_LUC), about 44%. Applied to fossil carbon alone, ratios below one are expected.
  - **carbon.coal = 0.61 is about 30% high.** Sources give 0.46–0.47.
  - **carbon.oil is about 15% high.**
  - **The model's fossil emissions.** They run 11.4 GtC in 2025 against about 9.7 GtC from fuels in 2023, and agree
    at 1950. So the ratios after 1970 are 10–15% too high.
- **Explanations, ranked by era:**
  - **Before 1900.** Land-use carbon, a record the model does not hold: 225 GtC from land use against 490 GtC fossil
    over 1850–2023. Then noise in the recorded rise.
  - **1940–1950.** The 1940s plateau at 310–312 ppm. Reconstructions miss by 0.9–2.0 PgC a year, and the ocean can
    explain at most about 0.5. A terrestrial sink is needed, possibly wartime land-use change.
  - **After 1950.** Land use, plus the carbon.coal parameter.
- **Literature:**
  - Friedlingstein et al. (2025), as above: sections 3.1.1, 3.1.3, 3.2.1, 3.4 and 3.5.2.
  - Bastos, A. et al. (2016). *Re-evaluating the 1940s CO2 plateau.* Biogeosciences 13: 4877–4897. Read pp. 4877–4878
    and 4891–4893 in the LMU repository PDF.
- **Proposed correction:**
  - Add a land-use carbon process.
  - Write the law with AF on total emissions, as a series rather than a constant.
  - Make carbon.coal depend on the era (about 0.6 before 1950, 0.47–0.50 recently), and set carbon.oil for the share
    burned.
  - Revise the 1946 note's explanation of the plateau.
  - Keep `law.bridge.carbon-to-air` disabled until then.

## 7. The surplus bound

- **Note:** `claude.laws-phase-1.surplus-bound`
- **About:** `law.bound.surplus`; `h.habitat.rural-non-food`, `h.food-work`, `h.habitat`
- **Status:** error in the model, in the law's definition. No violation.
- **Finding:** the bound holds at 127 dates. The slack is 3% before farming (by construction), 21.1% around
  1820–1850, about 8% by 1960 and 16% in 2025.
- **The parameters' part:** none.
- **Explanations, ranked:**
  1. **Two denominators (`MetricReading#56a9`).** `h.food-work` is a share of workers and `h.habitat` a share of
     people.
  2. **The law tests only the partition,** not the card's bound s/(1+s) (`SurplusBound#7fe3`).
  3. **Values.** None found wrong.
- **Literature:** not checked. The error is definitional, and the slack's shape was not tested against sources.
- **Proposed correction:**
  - Put both shares on one denominator.
  - Add s/(1+s) once surplus per producer is recorded.

## 8. The largest city, and the largest settlement before towns

- **Note:** `claude.laws-phase-1.largest-settlement`
- **About:** `law.bound.largest-city`; `h.largest-city`, `h.largest-city.share-of-towns`, `h.habitat`
- **Status:** error in the model.
- **Finding:** the model records a largest settlement of 100–6,000 people at 29 dates before towns. On the model's own
  town shares the bound fails at three dates:

  | Date | Town dwellers | Largest settlement |
  |---|---|---|
  | −9500 | about 100 | 1,000 |
  | −7900 | 680 | 3,000 |
  | −6300 | 5,500 | 6,000 |

- **The parameters' part:** none.
- **Explanations, ranked:**
  1. **Definition.** `h.largest-city` holds the largest settlement of any kind.
  2. **Town shares too low** for the settlements counted.
  3. **Settlement sizes too high.** Marciniak & Kuijt (2024) put Çatalhöyük at 600–800 people, against earlier
     estimates of 2,800–10,000.
- **Literature:**
  - Bower, B. (2024). *One of the world's earliest farming villages housed surprisingly few people.* Science News,
    20 May 2024. Whole article read. It reports Marciniak, A. & Kuijt, I. (2024), *Journal of Anthropological
    Archaeology* 74.
  - Left open: the study itself was not read in full.
- **Proposed correction:**
  - Either rename the process as the largest settlement with a town threshold, or add a separate largest-town
    process.
  - Make town shares at least the counted settlement's.
  - Reconsider Çatalhöyük's size.

## 9. Bands (from `checks.json` and the derived series)

- **Note:** `claude.laws-phase-1.bands`
- **About:** `h.food-work`, `h.habitat.rural-non-food`, `h.humanity.growth-recorded`, `h.humanity`
- **Status:** error in the model, and in the check that reads it.
- **Finding:**
  - **Share bands beyond 0–100.** At the block dates food-getting runs as high as 38.8–155.2%, which makes the slack
    bands −55 to 61%.
  - **Growth bands over short intervals reach about ±100% a year,** for example 1929.8–1930. That is why "every
    interval's bands overlap": the test is uninformative.
- **The parameters' part:** none causal.
- **Explanations, ranked:**
  1. **Relative spreads never clipped** to the measure's range.
  2. **Errors at neighbouring dates treated as independent.**
- **Literature:** none applies.
- **Proposed correction:**
  - Clip share bands to 0–100.
  - Compute growth bands only on intervals of 10 years or more, or with correlated errors.

## 10. World output = people × output per person

- **Note:** `claude.laws-phase-1.output-identity`
- **About:** `law.identity.output-from-people` and the continents' identities
- **Status:** no finding. The identity holds by construction.
- **Finding:** the worst gap is 2.01% at −200, which is rounding.
- **Proposed correction:** none.

---

## Candidate discoveries

None. Every finding is either an inconsistency in the model's own values or already published.

## For the next phase

The next phase tests mechanisms: first `StructuralDemographicCycle#8433`, with `DemographicTransition#6e31` as
calibration.

1. **Make the demography consistent first,** or test on the counts alone. The births–deaths gap, and troughs smeared
   by single-peak interpolation, hide the cycle's fall in population during disorder.
2. **Do not calibrate the transition on 1950–2025 through the births law.** The factor was fitted there. It holds
   before 1950 with a band of ±0.2 points of growth.
3. **Test cycles in regions, not in the world sum.** Use 10–50-year resolution for population, wages or output per
   person, elites and state revenue. `MalthusianTrap#0f6b` gives the precondition: a population near its limit.
4. **Keep both evolution laws disabled** until findings 1 and 6 are resolved.
5. **The model holds no age structure.** A stable-population bridge needs a life-table family.
6. **Literature checks left open:**
   - Alfani & Murphy (2017) and Benedictow (2005), on plague tolls;
   - Marciniak & Kuijt (2024), on Çatalhöyük;
   - Lee (2003), on pre-transition vital rates;
   - the Energy Institute's coal tonnes and energy;
   - the 2023 Genus paper on life expectancy and crude death rates.
