# The laws pass: corrections from sources

The corrections that the laws pass's ledger (`.local-work/laws/ledger.md`) proposed and that needed new numbers,
made from sources, in the order findings 2, 4, 6, 5 and 1. Each correction is recorded in the model `history-numbers`
(scope `world-history`) as values held by `claude`, with an Understanding Node `claude.laws-corrections.*` about the
processes, Events and laws it concerns. No law, derived process or derived value (holder `derived-by-law`) was
changed, nor another holder's notes. The surplus bound (finding 7) and the size of Çatalhöyük (finding 8) are held
as they were.

Tags: `source` where a value is read from a cited source; `inferred` where it is computed from sourced values;
`sketch` otherwise.

Model revisions:
- 552 (`19bac62f9d6a…`), the start;
- 553–554, 1918;
- 555–556, the plague waves;
- 557, carbon;
- 558, coal's energy and stores;
- 559–562, the time schedule for the new processes;
- 563 (`8c1710123212…`), crises.

The graph `history-numbers` was rebound once, at graph revision 547. The notes were recorded after it, and the closing note
`claude.closing.laws-corrections` is at graph head `a04f8ef00022…`.

Sema patterns cited, each checked with a strict `sema_handshake` on its full hash: `EvidenceUnderdetermination#999b`,
`VirginSoilEpidemic#d1fd`.

---

## 1. 1918 (finding 2)

- **Note:** `claude.laws-corrections.1918`
- **Revisions:** 553 (values), 554 (the Event `ev.flu-1918`).
- **What changed.**
  - `h.alive.infection`: the influenza is dated where it fell. 1918.0 at the normal level (1860), 1918.6 (2140,
    the deadly wave begins in August), the peak at 1918.8 (6720, October), 1919.0 (3300), 1919.2 (2800, the third
    wave), 1919.5 back near normal (1820). The 1918 value of 3805, which held the whole pandemic at January 1918, is
    replaced. The notes at 1914.6 and 1920 are made to agree.
  - **The toll.** 30 million for 1918–1919, about 1.6% of the world's 1.84 billion. The peak's excess (4880 per
    100,000 a year) is set so that the area under the interpolated curve from 1918.0 to 1919.5 (0.334 of the peak's
    excess, in years) times the population is the toll. The shape puts 76% of the excess in 1918 and 24% in 1919,
    as Barro et al. split their 27.1 and 9.9 million. The band covers the published range, 17.4 to 100 million.
  - `h.alive`: life expectancy at each of these dates is set from the same deaths, by the model's own ratio of deaths
    times life expectancy (1.06 in 1914.6, 1.00 in 1920, interpolated): 33.4 at 1918.0, 31.1, **12.9 at the peak**
    (a period measure at the peak's annualized rates; band 5.2–19), 23.0, 26.0 and 34.9 at 1919.5. Averaged over
    the calendar year 1918 the same curves give deaths of about 4,240 per 100,000 and a life expectancy of about 24,
    which is what the ledger proposed for the year (24–27).
  - `h.alive.adult` (sketch): dated to the same wave, 38.5 at 1918.0, 11.8 at the peak, 40 at 1919.5, with three
    quarters of the excess taken as adults'. Notes of `h.child-survival` and `h.continuation` at 1918 made to agree.
  - `ev.flu-1918`: the waves dated, the published tolls named, the model's 30 million stated; it now names
    `h.alive.infection` and `h.alive.adult`.
- **Sources.**
  - Spreeuwenberg, P., Kroneman, M. & Paget, J. (2018). *Reassessing the Global Mortality Burden of the 1918
    Influenza Pandemic.* Am J Epidemiol 187(12): 2561–2567. Full text on PubMed Central (PMC7314216): 17.4 million
    (14.9 in 1918, 2.5 in 1919); more than 25 million "not realistic"; the second wave from August to the end of
    December 1918, peaking in India in September to November. Its introduction reports Patterson & Pyle (1991), 30
    million (24.7–39.3), and Johnson & Mueller (2002), 50–100 million.
  - Barro, R. J., Ursúa, J. F. & Weng, J. (2020). *The Coronavirus and the Great Influenza Pandemic.* NBER Working
    Paper 26866. Pages 1–7 read (nber.org PDF): 40.1 million over 1918–1920 from 48 countries holding 92% of the
    world's people, 27.1 million in 1918, 9.9 in 1919, 3.1 in 1920; second wave September 1918 to February 1919;
    India 16.7 million, China 8.1 million.
  - Johnson & Mueller (2002) and Patterson & Pyle (1991) themselves were not reached (the Society of Actuaries copy
    returned 404); their figures are as Spreeuwenberg et al. report them.
- **Why 30 million.** It lies between the two recent reconstructions read in full: Spreeuwenberg et al.'s 17.4
  million rests on the Human Mortality Database and British India, which underrepresent Africa and China, and Barro
  et al.'s 40.1 million inflates 48 countries to the world. 30 million is also Patterson & Pyle's central figure.
- **Open.**
  - The counts (`h.humanity`, 1.84 billion in 1918 and 1.86 in 1920) are interpolations that do not show the
    pandemic. With 30 million dead the implied growth over 1918–1920 runs near zero against +0.54% a year recorded.
    The counts were not in this correction's aim.
  - The fourth wave of 1920 (Barro et al.: 3.1 million) lies within the bands of the 1919.5 and 1920 values and is
    not shaped.
  - Adult life expectancy's dip is a sketch on an assumed age share of the excess deaths.

## 2. The plague waves (finding 4)

- **Note:** `claude.laws-corrections.plagues`
- **Revisions:** 555 (values), 556 (the four Events).
- **What changed.** Each crisis has its own shape, with values at the ends of its waves and between them, so none is
  held as one peak interpolated over a century.
  - **The Black Death** (`h.alive.infection`, inferred): 1346 normal (2855), 1347.5 (3950), the peak at 1349 (6500),
    1350.5 (4310), 1352 (3220), 1353 near normal (2880). The excess is set so that its area times 0.41 billion is a
    chosen toll of **40 million** in Europe, the Mediterranean and the Middle East (band 25–60 million). The straight
    fall from 1349 to 1400, which spread the dying over half a century, is gone.
  - **After it** (sketch): the second pestilence peaks at 1361.5 (3670) and the later returns are held at about 150
    above normal to 1400, whose value (2965) already carried them: about 35 million over 1353–1400.
  - **The Justinianic plague** (sketch): 541 normal (2810), so no plague deaths before 541; the first outbreak's peak
    at 542.5 (3340), from a toll of about 2 million (band 0.2–15 million); 544.5 and 549 back to normal; the
    recurrences to about 750 held at about 60 above normal (600, 750). The peak once dated 549 (4460) is replaced.
  - **The world's fall over 541–549 does not hold.** Mordechai et al. find "no 6th century population collapse" in
    any dataset they test. `h.humanity` at 549 goes from 0.200 to **0.213** billion, about 1% below 541's 0.215, not
    7%. World output and each continent's output at 549 are multiplied by the same 1.065, so output per person holds;
    the continents' shares are unchanged and their outputs sum to the world's (0.167975 trillion).
  - **The Antonine plague** (sketch): waves at 166.5, 168.7, 172, 179.5, 182 and 189, with values between them and
    at 165 and 192, from a Roman toll of about 10% of 65 million (6.5 million; band 2–30%). China's great epidemics
    of the same years (171, 173, 179, 182, 185) share these values.
  - **The Han collapse** (sketch): violent deaths (`h.safety`) no longer rise in a straight line from 1 CE to 184:
    52 at 183.5, the rising at 184 (288), then 120, 100, the war against Dong Zhuo (300 at 191), the warlords (280 at
    194), 180 and 73 at 200. Hunger (`h.alive.hunger`) rises from 195 to the famine of 194 (650) and falls through the
    famines of 196 and 197. With the epidemics, about 14 million excess deaths over 184–200.
  - `h.alive` at the Black Death's and the Justinianic plague's new dates is set from the same deaths by the model's
    ratio (0.977 and 0.96): 12.9 at the peak of 1349, 24.6 at 1353 (was 22); 22.0 at 542.5, 25 at 549 (was 22).
  - Events `ev.black-death`, `ev.justinianic-plague`, `ev.antonine-plague` and `ev.han-collapse` now state the
    shapes and tolls the values hold and name the causes of death they move.
- **Sources.**
  - Alfani, G. & Murphy, T. E. (2017). *Plague and Lethal Epidemics in the Pre-Industrial World.* Journal of
    Economic History 77(1): 314–343. Read in the Cambridge Core reader through the body text into the references
    (Table 1 is an image and was not read): the Black Death killed "between one- and two-thirds of the European
    population", "up to 50 million" in Europe and the Mediterranean; Benedictow up to 60% (50 million); the
    Justinianic plague up to 25–50 million; the Antonine plague 10–30% in Italy; little known of the century after
    the Black Death.
  - Mordechai, L., Eisenberg, M., Newfield, T. P., Izdebski, A., Kay, J. E. & Poinar, H. (2019). *The Justinianic
    Plague: An inconsequential pandemic?* PNAS 116(51): 25546–25554. Full text on PubMed Central (PMC6926030), to
    character 100,000 of about 107,000 (the end of the references unread).
  - Duncan-Jones, R. P. (2018). *The Antonine Plague Revisited.* Arctos 52: 41–72. Read pp. 41–46 and 62–72 in the
    journal.fi PDF: the chronicle of waves (165–192), Egypt's case history, the conclusion.
  - *Hou Han Shu*, juan 8 (annals of Emperor Ling) and juan 9 (annals of Emperor Xian), Chinese Wikisource: the
    great epidemics of 171, 173, 179, 182 and 185; the Yellow Turban rising (184); Dong Zhuo's move to Chang'an and
    the burning of Luoyang (190); the famine of 194 (grain at 500,000 cash a hu, people eating one another); the
    hunger of 196; the famine of 197.
  - Not reached: Benedictow (2005), Harper (2017), Elliott (2016), Slavin (2024) beyond its abstract, Ge Jianxiong's
    population history of China.
- **Open.**
  - Over 1346–1353 the counts fall 50 million (0.41 to 0.36 billion); a 40 million toll and the model's normal-year
    rates imply about half that fall. The rest is the era gap (correction 5) and China's own crisis at the Yuan's
    end, which the model does not hold as a dated crisis.
  - Europe's share falls from 12.8% to 11.5% at 549. That rests on the maximalist reading Mordechai et al. reject,
    but the shares were to be kept, so it stands, and it is named here for the next pass.
  - The Han collapse's real loss: the registers fall from about 56 to about 16 million, and Ge Jianxiong is reported
    to put the true trough near 22–24 million in 220. The counts after 184 were not in this correction's aim.
  - The volcanic winter of 536–541 is held as hunger at 549, after it, not at its dates.

## 3. Carbon (finding 6)

- **Note:** `claude.laws-corrections.carbon`
- **Revisions:** 557 (values and four new processes); the time schedule filled in 559–562.
- **What changed.** Four processes hold as series what the laws held as constants. A script can now rewrite
  `law.bridge.carbon-to-air` and `law.bridge.fossil-carbon` to read them. No law was changed here.
  - `h.co2.human.land-use` (billion tonnes of carbon a year, under `h.co2.human`):
    - **1850–2024, tagged source.** Global Carbon Budget 2025 (E_LUC): 0.74 in 1850, 1.22 in 1900, 1.82 in 1950,
      2.18 at the peak in 1955, 1.6–1.85 through 1960–2014 and 1.25 in 2024. Band 50% before 1960, ±0.7 GtC after.
    - **800–1800, inferred.** Shaped to Pongratz et al.'s 53 GtC over 800–1850, less than half of it before 1700:
      0.012 in 800, 0.025 in 1300, 0.08 in 1700 and 0.2 in 1800. The curve then rises to the GCB's 1850 value, so
      800–1850 emits about 63 GtC, inside Pongratz et al.'s ±70%.
    - **Before 800, sketch.** Back to zero before farming, about 12 GtC in all, against the roughly 10 GtC that
      Pongratz et al.'s section 4.1 implies.
    - **Upper bands** before 1850 reach four times the values, for Kaplan et al.'s much larger reconstruction.
  - `h.co2.human.airborne-fraction` (share of fossil plus land-use carbon, 0–1):
    - **By decade, inferred.** From NOAA's Mauna Loa growth and the GCB's emissions: 0.375 in the 1960s, 0.43, 0.47,
      0.40, 0.44, and 0.47 for 2014–2023.
    - **1850–1959, inferred.** 0.30 as one average from the cumulative budget: CO2 rose from 285.1 to 315.98 ppm,
      65.6 GtC, against about 76 GtC fossil and 139 GtC land use.
    - **800–1850, source.** 0.21 (Pongratz et al.).
    - **Before 800, sketch.** 0.21 held back, where it multiplies little or no carbon.
  - `h.earth.resources.fossil.coal.carbon` (tonnes of carbon a tonne):
    - **To 2010, sketch.** The IPCC 2006 constants weighted by each era's mix of coal types: 0.66 before 1870, 0.645
      in 1900, 0.615 in 1950, 0.556 in 1985. 1960 is lowered to 0.59 for the Great Leap's low-grade coal. Checked
      within 5% against the GCB's coal emissions in 1900 and 1950.
    - **2024, inferred.** 0.47: coal's 41% of 10.1 GtC in 2023, over the IEA's coal demand of 8.7–8.77 billion
      tonnes.
  - `h.earth.resources.fossil.oil.carbon` (tonnes of carbon a tonne, for the share burned). Crude oil's 0.846 times
    the share burned:
    - **1880–2000, sketch.** 0.82 in 1880, 0.79 in 1950, 0.76 in 1970, 0.74 in 2000.
    - **2025, inferred.** 0.72. Industry takes about 20% of oil, two-thirds of it as chemical feedstock (IEA 2026).
    - **Check.** 3.1 GtC from oil in 2023, against the GCB's 3.2.
  - Where no source reaches back, each parameter's earliest value is held to −300000, tagged `sketch`, with a note
    that it multiplies little or no fuel there.
- **Sources.**
  - Friedlingstein, P. et al. (2025). *Global Carbon Budget 2024.* ESSD 17: 965–1039. Read on essd.copernicus.org
    to about 60% of its text: the abstract, the executive summary and sections 2.2.1, 2.4.1, 3.1–3.2 and 3.5.2.
  - Global Carbon Budget 2025 (GCB v15): annual land-use emissions, World. Read in Our World in Data's export (grapher
    `co2-land-use`, updated 13 November 2025).
  - NOAA Global Monitoring Laboratory: Mauna Loa annual mean CO2 and annual increases, 1959–2025 (`co2_annmean_mlo.txt`,
    `co2_gr_mlo.txt`).
  - Pongratz, J., Reick, C. H., Raddatz, T. & Claussen, M. (2009). *Effects of anthropogenic land cover change on the
    carbon cycle of the last millennium.* Global Biogeochemical Cycles 23, GB4001. Draft read: the abstract and
    sections 1 and 3.3–4.3.
  - IPCC (2006). *2006 IPCC Guidelines for National Greenhouse Gas Inventories*, vol. 2, ch. 1, Tables 1.2–1.4.
  - IEA (2024). *Coal 2024*, executive summary.
  - IEA (2026). *Sheltering From Oil Shocks*, oil use in industry.
  - Kaplan et al. (2011), *The Holocene* 21: 775–791: the abstract only, as reported by PBL.
- **Open.**
  - The GCB 2025's land use runs higher than the GCB 2024 paper's (1.3 against 1.0 GtC in 2023). The airborne
    fraction mixes the 2024 paper's fossil decades with the 2025 land use.
  - The coal mixes before 2024 are sketches. The Energy Institute's coal tonnage tables could not be reached.
  - The 1940s plateau sits inside the 1850–1959 average.
  - The 1946 note's explanation of the plateau is unrevised.

## 4. The energy in coal (finding 5)

- **Note:** `claude.laws-corrections.coal-energy`
- **Revision:** 558, with its schedule in 559–562.
- **What changed.**
  - `h.earth.resources.fossil.coal.energy` (GJ a tonne, under `h.earth.resources.fossil.coal`):
    - **To 2010, sketch.** The IPCC 2006 calorific values (hard coal about 26.0, sub-bituminous 18.9, lignite 11.9)
      weighted by each era's mix: 25.3 before 1870, 24.9 in 1900, 23.6 in 1950, 21.4 in 1985. 1960 is lowered to 22.5
      for the Great Leap's coal.
    - **2024, inferred.** 18.9: 165.4 EJ of coal in the Energy Institute's Statistical Review 2026, via Our World in
      Data, over the IEA's 8.77 billion tonnes. With the carbon factor this implies about 25 kg C per GJ.
  - `h.warmth.stores` was low over 1970–1990. A source shows it:
    - **The source.** The Energy Institute's Statistical Review 2026 and Smil (2017), in Our World in Data's global
      primary energy series (updated 30 June 2026).
    - **The values.** Coal, oil, gas and nuclear over the model's own counts give 52.2 GJ a person in 1970, 55.9 at
      1975.19, 57.6 in 1976, 60.7 at 1979.02, 59.1 in 1980, 57.9 in 1985, 60.8 in 1989 and 60.4 in 1990. That is 2.0
      to 6.2 above the model's values.
    - **The change.** Stores are raised to these values at the model's own dates, tagged `inferred`. `h.warmth` is
      raised by the same amounts, so stores, flows, harvest and food still sum to it. 1965 already agreed.
- **Open.**
  - The same series runs above the model after 1990 as well: about 58.6 in 1995 and 60 in 2000, against 54.4–54.5.
    Stores and `h.warmth` now fall about 6 GJ a person from 1990 to 1996, an artefact of correcting only the window
    this pass was given.
  - At 1976 the model's 3.28 billion tonnes of coal at about 22 GJ give 72 EJ, against the series' 67.3 EJ. Coal's
    tonnes, or the factor, still run about 7% high there.

## 5. The growth gap, by crises (finding 1)

- **Note:** `claude.laws-corrections.crises`
- **Revision:** 563.
- **What changed.**
  - **Normal-year rates.** `h.alive` and `h.continuation` stay where their sources put them. `h.alive`'s meaning (its
    `semantic_role`) now says it is period life expectancy in normal years. It leaves out the crises the model does not
    date and counts the dated ones at their dates.
  - **`h.alive.crisis`** (deaths per 100,000 a year, an interval average, under `h.alive`) holds the crises the model
    does not date. Its rate comes from the literature, not from the gap:
    - **Before writing: 330** (band 200–600, inferred). A crash killing a quarter of a population every 50–100
      years: Keckler's combination for zero growth at 0.7% a year, as Gurven & Davison (2019) report it.
    - **Early farmers: 330 held** (sketch). No rate for their boom-and-bust was read.
    - **From −2200: 150** (band 50–330, sketch). A significant outbreak every 10–20 years in the Roman world
      (Duncan-Jones 2018, n.1), at an assumed 2–5% each.
    - **Then falling:** 100 in 1820, 50 in 1920, and 0 from 1950, when the United Nations' period rates count every
      year.
  - **A dated crisis history records but the model's deaths left out: the Americas' epidemics.** The model's own
    counts fall from 50 to 16.6 million over 1500–1600 (Koch et al.: 60.5 to 6.1 million). Infection deaths rose only
    about 35 at 1550. They are now dated wave by wave at the world's scale, matching the counts' fall:
    - central Mexico's smallpox, peaking at 1520.75 (+600);
    - 1522–1533 (+100–120);
    - the cocoliztli of 1545–1548 (+450) and of 1576–1580 (+200);
    - the decline to 1600 (+60).

    The Taiping war, the Mongol conquests and the Ming–Qing wars were already held.
- **How much of the gap it closes,** in % a year, against the second recording's era gaps (the script will
  recompute):

  | Era | Gap | After corrections 1–2 | Crisis rate | Left |
  |---|---|---|---|---|
  | before farming | 0.95 | 0.95 | 0.33 | about 0.62 |
  | farming spreads | 0.81 | 0.81 | 0.33 | about 0.48 |
  | antiquity | 0.64 | about 0.64 | about 0.17 | about 0.47 |
  | middle ages | 0.29 | about 0.58 | 0.15 | about 0.43 |
  | early modern | 0.64 | 0.64 (0.04 of it now dated, the Americas) | 0.15 | about 0.44 |
  | industrial | 0.47 | about 0.49 | about 0.08 | about 0.41 |
  | since 1950 | 0.08 | 0.08 | 0 | 0.08 |

  The middle ages' gap grows because the old smeared peaks had held about 450 million Justinianic and 360 million
  Black Death deaths that never happened. The literature's crisis rate closes a third to two-fifths of the gap before
  writing, and a quarter to a third after it. About 0.4–0.6% a year is left in every era before 1950.
- **What is left.** Gurven & Davison's other half is altered mean vital rates. That means fertility below the model's
  normal-year value as a long-run average, or a births factor that does not hold at forager rates. The counts are the
  third candidate. Keep `law.identity.growth` disabled.
- **Sources.**
  - Gurven, M. D. & Davison, R. J. (2019). *Periodic catastrophes over human evolutionary history are necessary to
    explain the forager population paradox.* PNAS 116(26): 12758–12766. Full text on PubMed Central (PMC6600907).
  - Duncan-Jones (2018), as in correction 2, n.1.
  - Koch, A., Brierley, C., Maslin, M. M. & Lewis, S. L. (2019). *Earth system impacts of the European arrival and
    Great Dying in the Americas after 1492.* Quaternary Science Reviews 207: 13–36. Read pp. 13–18 in the White Rose
    repository copy: the abstract, sections 1–3.1 and Table 1.
- **Open.**
  - The early farmers' crisis rate is held at the foragers'.
  - The historic-era rate of 150 rests on an assumed toll per outbreak.
  - The Americas' epidemics are dated in infection only, not in `h.alive`.
  - Revision 563 changes `h.alive`'s scale, so worlds on the parent revision cannot adopt it through
    `life_world_revise`.

---

## For the next phase

- **What the law rewrite should read.** `h.co2.human.airborne-fraction` × (`h.co2.human.fossil-emissions` +
  `h.co2.human.land-use`), the two carbon factors, `h.earth.resources.fossil.coal.energy`, and `h.alive.crisis`
  among the causes of death. All six have values over the whole span: the values report's time schedule is filled for
  them.
- **The derived values in revision 563 are stale.** They were derived before these corrections.
- **The growth gap left is not crises' alone.** Next: fertility as a long-run average, the births factor at forager
  rates, and the counts. Keep `law.identity.growth` disabled until the gap is inside its band.
- **Left open, each named above:**
  - the counts around 1918–1920 and after 184 in China;
  - Europe's share at 549;
  - the volcanic winter of 536–541, held after its dates;
  - the 1990s' stores, which a source also shows low;
  - coal's tonnes, about 7% high at 1976;
  - the coal mixes before 2024;
  - the 1946 plateau note.
- **What the values report still names.** Processes that pass over Events between their values: the new parameters
  in the 1950s–1980s, and the crisis rate in the 1940s. That is a world pass's work, not this pass's.
- **Sources worth reading next:**
  - Johnson & Mueller (2002) and Patterson & Pyle (1991);
  - Benedictow; Harper (2017); Elliott (2016); Slavin (2024) in full;
  - Ge Jianxiong;
  - Kaplan et al. (2011) in full;
  - Shennan et al. (2013) on early farmers;
  - the Energy Institute's coal tonnes.
