// The history tree: the global structure of the world-history construction, carved before any values.
//
// History is the root, as the Meaning Model's grammar defines it: the Universe is a Thing and History is its
// lifecycle Event, containing every other lifecycle and Event of the accepted world. Three relations are kept apart
// (Sema: SpecializationEdge, CompositionEdge, and part or member encapsulation):
//   - parts and members, between Things: Universe > Earth > land regions; Earth > life on Earth > humanity;
//   - composition, between concepts: what each kind of history must address, carved with the four tests;
//   - kinds, between concepts: open-world lists, never claimed complete.
// Every process the construction follows is a node of the process decomposition rooted at the process `history`,
// and every reading sits in an Event contained by History. The same carve is reused at every scale: the history of
// any human population (humanity, the people of a region, a country such as Kenya, a city) has the same twelve
// dimensions, instantiated when someone opens it (`localHistory` below).
//
// This file is the single source for the build script and for the agents who fill the tree: series questions,
// units and answers are frozen here, and a reworded question is a new series, never an edit.

export const NOW = 2026.767; // 2026-10-08, the evidence cutoff of this structure
export const HUMAN_START = -320000;

// ---------- Things (parts and members) ----------
export const things = [
  { id: 'universe', name: 'The Universe', boundary: 'The Universe: everything that exists, observed or not.', continuity: 'The same expanding spacetime and its contents since the Big Bang.',
    interval: [-13.8e9, NOW], tag: 'inferred', why: 'The age of the Universe, about 13.8 billion years, from the cosmic microwave background (Planck 2018); recalled, not yet checked against the paper.' },
  { id: 'earth', name: 'The Earth', boundary: 'The Earth: the planet, its interior, crust, oceans, ice and atmosphere.', continuity: 'The same planet since its formation.',
    interval: [-4.54e9, NOW], tag: 'inferred', why: 'The age of the Earth, about 4.54 billion years, from meteorite and lead isotope dating; recalled, not yet checked.' },
  { id: 'biosphere', name: 'Life on Earth', boundary: 'Life on Earth: all living organisms, joined by common descent.', continuity: 'The same lineage of descent from the last universal common ancestor.',
    interval: [-3.8e9, NOW], tag: 'sketch', why: 'The earliest accepted traces of life are between about 3.5 and 4.1 billion years old and contested; 3.8 billion is a placeholder.' },
  { id: 'humanity', name: 'Humanity', boundary: 'Humanity: all living members of Homo sapiens at any time.', continuity: 'The same interbreeding species lineage; admixture with Neanderthals and Denisovans and the replacement of individuals over generations do not make a new Thing.',
    interval: [HUMAN_START, NOW], tag: 'inferred', why: 'Begins before the oldest fossils assigned to Homo sapiens, at Jebel Irhoud, about 315,000 years old; recalled, not yet checked.' },
];

// The Earth's land surface divided by the UN M49 standard (checked 2026-10-08 at unstats.un.org/unsd/methodology/m49):
// World (001) holds five regions and Antarctica (010), which belongs to none. Areas are fixed by 2026 borders and used
// for all times; the Russian Federation is in Eastern Europe (151), so all of Siberia counts in Europe. Subregions,
// intermediate regions and countries are opened when someone opens them (`localHistory`).
export const regions = [
  { id: 'africa', m49: '002', name: 'Africa', subregions: ['Northern Africa (015)', 'Sub-Saharan Africa (202): Eastern (014), Middle (017), Southern (018), Western Africa (011)'] },
  { id: 'americas', m49: '019', name: 'The Americas', subregions: ['Latin America and the Caribbean (419): Caribbean (029), Central America (013), South America (005)', 'Northern America (021)'] },
  { id: 'asia', m49: '142', name: 'Asia', subregions: ['Central Asia (143)', 'Eastern Asia (030)', 'South-eastern Asia (035)', 'Southern Asia (034)', 'Western Asia (145)'] },
  { id: 'europe', m49: '150', name: 'Europe', subregions: ['Eastern Europe (151), the whole Russian Federation included', 'Northern Europe (154)', 'Southern Europe (039)', 'Western Europe (155)'] },
  { id: 'oceania', m49: '009', name: 'Oceania', subregions: ['Australia and New Zealand (053)', 'Melanesia (054)', 'Micronesia (057)', 'Polynesia (061)'] },
  { id: 'antarctica', m49: '010', name: 'Antarctica', subregions: [] },
];

// ---------- Concepts: the ascent and the carves ----------
// Each carve lists its children with the four-test verdicts (N necessity, I independence, U universality over the
// stated range); rejected and frontier candidates are kept with their verdicts.
export const ascent = [
  { id: 'event', label: 'Event', differentia: ['anything that occurs or persists over an interval'], parent: null,
    effect: 'The Meaning Model grammar’s most general occurrence; the root of the ascent.' },
  { id: 'lifecycle', label: 'Lifecycle', differentia: ['the whole existence of one continuing identity over its interval'], parent: 'event',
    effect: 'Exposes what any history must address: the identity followed, its parts, what changes in it, and its interval.' },
  { id: 'history', label: 'History', differentia: ['the lifecycle of the Universe, which contains every other lifecycle and Event of the accepted world'], parent: 'lifecycle',
    effect: 'The root of the construction. The account of anything else is the lifecycle of a part of it.' },
  { id: 'lifecycle-of-a-part', label: 'The history of a part of the Universe', differentia: ['the lifecycle of a Thing that lies within a larger whole'], parent: 'lifecycle',
    effect: 'Adds what the Universe lacks: a setting (the whole it lies in) and relations to other Things.' },
  { id: 'living-history', label: 'The history of a population of living things', differentia: ['a lifecycle whose members are born, take in energy and die'], parent: 'lifecycle-of-a-part',
    effect: 'Exposes energy intake, births and deaths, and a range in space.' },
  { id: 'social-history', label: 'The history of a social population', differentia: ['its members live in groups that coordinate and compete'], parent: 'living-history',
    effect: 'Exposes coordination, violence within and between groups, and transfers between members.' },
  { id: 'cultural-history', label: 'The history of a cultural population', differentia: ['its members learn their behaviour from others and pass it on'], parent: 'social-history',
    effect: 'Exposes learning and its accumulation; every other dimension is realized through learned practice, so it can change without genetic change.' },
  { id: 'human-history', label: 'The history of a human population', differentia: ['a population of Homo sapiens; no capacity is claimed as uniquely human'], parent: 'cultural-history',
    effect: 'The template for humanity and for any human population inside it: a region’s people, a country’s, a city’s.' },
];

export const lifecycleCarve = {
  id: 'lifecycle', lens: 'what the account of any lifecycle must address, judged over every Thing in History, the Universe included',
  children: [
    { id: 'identity', label: 'Identity', differentia: ['what the Thing is and what keeps it the same through change'], N: 'without it nothing is followed', I: 'the continuity criterion can be revised while the processes stand', U: 'every Thing' },
    { id: 'composition', label: 'Composition', differentia: ['its parts and members, each with a lifecycle of its own'], N: 'the changes of a composite happen in its parts', I: 'parts can be opened or regrouped without changing identity', U: 'every composite Thing; for elementary things it is empty, outside this construction’s range' },
    { id: 'processes', label: 'Processes', differentia: ['what changes in the Thing over its interval'], N: 'without change there is no history', I: 'what changes can be revised while identity and parts stand', U: 'every Thing' },
    { id: 'interval', label: 'Interval', differentia: ['when it exists, and the order and duration of what happens in it'], N: 'without order there is no “came to be”', I: 'redating does not change what happened', U: 'every Thing' },
  ],
  extendedBy: { concept: 'lifecycle-of-a-part', children: [
    { id: 'setting', label: 'Setting', differentia: ['the whole the Thing lies in and the conditions it supplies'], N: 'a part’s changes depend on its whole', I: 'the setting can change while the Thing’s identity stands', U: 'every part of the Universe; fails for the Universe itself, so it belongs to this specialization' },
    { id: 'relations', label: 'Relations', differentia: ['what the Thing does with and to other Things: joint Events with their roles'], N: 'parts meet, exchange, fight and mix', I: 'relations change while each Thing’s identity stands', U: 'every part of the Universe; fails for the Universe, which has nothing outside it' },
  ] },
  caution: 'These six dimensions restate the Meaning Model grammar’s own forms: Thing and continuity criterion (identity), encapsulation (composition), processes and Cuts (processes), intervals (interval), the containing lifecycle (setting), joint Events with Bindings (relations). That may mean the grammar is a sound decomposition of a history, or that this carve was fitted to a grammar already in mind; it was not derived blind.',
  rejected: [
    { label: 'Causation', verdict: 'Not a dimension of the history itself: causes are relations between Events (causes, enables, constrains) and explanations in the understanding record. It belongs to the account, beside it.' },
    { label: 'Evidence and perspective', verdict: 'Not dimensions of the history itself: they are carried by every record’s provenance tag and source and by the understanding root.' },
    { label: 'Periods', verdict: 'Dividing time into periods is a lens chosen for a question, not a fact of time: kept as views, not as structure.' },
  ],
};

// What changes in the Earth, as the setting of every human society in the range. Sketched: the construction follows
// these only as far as they bear on humanity.
export const earthCarve = {
  id: 'earth-processes', label: 'The Earth as setting', differentia: ['what the Earth provides to or imposes on every human society'],
  lens: 'what the Earth supplies to every human society from 320,000 years ago to 2026',
  children: [
    { id: 'climate', label: 'Climate', differentia: ['temperature, rainfall and the composition of the atmosphere'], N: 'sets what grows and where people can live', I: 'varies apart from sea level on short timescales', U: 'every time' },
    { id: 'land-and-sea', label: 'Land and sea', differentia: ['the extent of land, ice and sea, and the coastlines between them'], N: 'sets where people can go and live', I: 'sea level and ice change apart from rainfall', U: 'every time' },
    { id: 'living-world', label: 'The living world', differentia: ['the plants, animals and microbes people live among, wild and domesticated'], N: 'food, fuel and disease come from it', I: 'species change apart from climate, as megafauna went extinct and crops spread', U: 'every time' },
    { id: 'resources', label: 'Resources', differentia: ['the Earth’s stores of stone, metals, fuels and soil'], N: 'every material and every non-living fuel comes from them', I: 'stores are found and exhausted apart from climate', U: 'every time, though which are used changes' },
  ],
};

// The history of a human population: twelve dimensions (revision 5, 2026-10-08). The carve was judged again against
// the construction's own frame: an account in which every kind of change that history records has exactly
// one home, or its parts do (claude.frame.history-account). Run 2 had judged it against a narrower survival lens,
// what a society must address to live and pass its way of living on, which rejected art and left property, diplomacy,
// religious practice and political contest without a home. Candidates came from the run-2 carve, from the Outline of
// Cultural Materials (HRAF, 2025 edition, read 2026-10-08), and from Mann's four sources of social power (recalled).
// Completeness was tested against the OCM categories and by routing claims from two outside lists of history's fields,
// frozen before the carve (routing-r5.mjs). N, I and U are necessity, independence and universality, all three
// required (DecompositionGate, non-compensatory). Every split declares its synthesis: how the children's contributions
// give the parent (CompositionEdge, Synthesis).
export const humanCarve = {
  id: 'human-way-of-living', label: 'A human way of living', differentia: ['how a human population lives, and how its way of living is passed on and changes'],
  lens: 'every kind of change that history records about a human population, at any scale, from 320,000 years ago to 2026, has exactly one home here, or its parts do; and each node can carry measures that mean the same across the range',
  frameNote: 'claude.frame.history-account',
  children: [
    { id: 'provisioning', label: 'Provisioning', differentia: ['how people obtain the energy and materials they live on, and organize the work that does it'],
      N: 'the history of food-getting, energy, materials and work, from foraging to farming to industry, has no other home', I: 'the same provisioning carries different political orders and densities', U: 'every society' },
    { id: 'exchange', label: 'Exchange', differentia: ['how goods, services and claims pass between people: sharing, gift, tribute, trade, money and credit'],
      N: 'the history of sharing, trade, markets, money and credit has no other home', I: 'markets and money change under one political order and one technique', U: 'every society: even forager sharing follows terms set by custom' },
    { id: 'wealth', label: 'Wealth', differentia: ['who holds rights over land, herds, tools and other assets, how they pass, and how income and wealth are divided among people'],
      N: 'property, enclosure, land reform, inheritance and inequality had no home in run 2 (OCM 420 and the distribution of income and wealth that W2 names as economic history)', I: 'property rights change apart from technique (enclosure kept the crops) and inequality apart from output (the compression of 1914 to 1950)', U: 'every society: foragers hold territories and share by rules, and every population divides what it has somehow' },
    { id: 'population', label: 'Population', differentia: ['how people are born, kept alive and die, and how they move between places'],
      N: 'demographic history has no other home', I: 'mortality fell through medicine without a change in provisioning', U: 'every society' },
    { id: 'habitat', label: 'Habitat', differentia: ['where people live, how densely, in what settlements and buildings, and how they reshape land, living things and the air'],
      N: 'the history of settlement, cities and human impact on the environment has no other home', I: 'settlement form varies under one provisioning', U: 'every society' },
    { id: 'connection', label: 'Connection', differentia: ['how people, goods and messages are carried across space: carriers, routes and the means of sending word, with their speed and reach'],
      N: 'the history of transport and communication had no single home in run 2, whose routing check twice found connection with two equal homes (warning W1)', I: 'carriage and messaging change apart from what is exchanged and who migrates: the telegraph changed neither money nor migration', U: 'every society moves people, goods and word, on foot and by voice at least' },
    { id: 'society', label: 'Society', differentia: ['how people are grouped and ranked by kin, birth, freedom, wealth, sex and age, the associations they form, and how those who cannot support themselves are cared for, by kin, community, charity or the state'],
      N: 'social history’s subjects, family, caste, class, slavery, gender, childhood and welfare, were split between Coordination and Population in run 2 or had no home', I: 'caste and kinship persist through changes of regime, and household forms change apart from fertility', U: 'every society has kin, sex and age roles and some ranking, if only by prestige' },
    { id: 'politics', label: 'Politics', differentia: ['how a population is divided among polities, who holds authority in each and on what terms, how authority is carried out and rules upheld, and how members belong, take part and contest it'],
      N: 'political, constitutional, diplomatic and legal history: states, rulers, succession, revolutions, treaties and courts', I: 'farmers live with and without states, and foragers with and without hierarchy; regimes change apart from provisioning', U: 'every society: bands decide by discussion and restrain would-be leaders' },
    { id: 'security', label: 'Security', differentia: ['how violence within and between groups is used, deterred and suffered: killing and injury among members, and war'],
      N: 'military history and the history of violence', I: 'regimes change without changing military organization, and the reverse; strongly coupled to Politics, recorded as a seam', U: 'every society' },
    { id: 'knowledge', label: 'Knowledge', differentia: ['how know-how and information are learned, kept and made, and the languages they are carried in'],
      N: 'the history of science, learning, writing and language', I: 'writing and schooling change without forcing a change in provisioning', U: 'every society' },
    { id: 'beliefs-and-norms', label: 'Beliefs and norms', differentia: ['what people hold true, sacred and right, and the identities they share'],
      N: 'religious history, the history of ideas and of morals, and nationalism', I: 'conversion and secularization change without forcing the same change in authority', U: 'every society for worldview, norms and identity; the sacred by the inference stated for Arts and play' },
    { id: 'arts-and-play', label: 'Arts and play', differentia: ['what people make and perform for its form, the feelings it carries or the pleasure of play: ornament, image, music, dance, story, drama, games and sport, with who makes it, who pays and who takes part'],
      N: 'art history, music, literature, theatre, film, games and sport had no home in run 2, where expression was rejected under the survival lens', I: 'styles change apart from knowledge and belief, as painting moved from Baroque to Rococo with no change of religion or science', U: 'inferred, moderate: play, song, dance and story are found in every society known to ethnography and history and in every lineage of living humans, the deepest-diverging included, so they were probably present in the ancestral population those lineages share, about 200,000 to 300,000 years ago, unless they spread by later contact; play is shared with all mammals. For the earliest part of the range only the continuity of the species speaks for them, and durable ornament begins about 100,000 years ago; the silence before that is weak evidence either way (AbsenceEvidence#10a3). If the inference is rejected, the node holds under the narrower claim from about 100,000 years ago' },
  ],
  synthesis: 'A population’s way of living at any time is the joint state of the twelve: what it produces (Provisioning), how goods pass (Exchange) and who owns and gets what (Wealth); how many live and die (Population), where they live (Habitat) and how they reach each other (Connection); how they are grouped (Society), governed (Politics) and fight (Security); and what they know (Knowledge), hold true and right (Beliefs and norms) and make for its own sake (Arts and play). The mechanism cards say how a change in one forces or permits change in others. A regime such as a forager band, an agrarian empire or an industrial nation is a recurring joint state that the mechanisms hold together, which no single dimension describes.',
  rejected: [
    { label: 'Technique and technology', verdict: 'Fails independence: a technique is the means by which a dimension is realized, so each routes to the dimension it serves (ploughs to Provisioning, ships to Connection, guns to Security, print to Knowledge), and the making of new techniques to Knowledge · Discovery. The history of technology is kept as a view over the means nodes (fields below).' },
    { label: 'Health and medicine', verdict: 'Fails independence from Population, of which Health is a part: medical care and its effect on health go to Population · Mortality · Health, theories of disease to Knowledge or Worldview, and support of the sick as dependents to Society · Care.' },
    { label: 'Environment and climate', verdict: 'Outside a way of living: the Earth’s processes are its setting; what people do to land, living things and air is Habitat · Land.' },
    { label: 'Inner life (emotions, personality, experience)', verdict: 'Frontier alternative. Its claims route to norms of feeling (Beliefs and norms · Norms), mental health (Population · Mortality · Health), unions (Society · Kinship · Marriage) and expression (Arts and play); the experience itself has no home (warning W6). Reopened if history-of-emotions claims keep finding none.' },
    { label: 'Economy, society, politics and culture as an intermediate level', verdict: 'Rejected (MandatoryAbstraction#e172: an intermediate is inserted only when it changes routing, exposes a reusable invariant or changes the dimensions visible below). These are historians’ fields; each is kept as a view over the dimensions (fields below), and inserting them would add a boundary without changing where any claim goes.' },
    { label: 'Kinship and household', verdict: 'Run 2’s frontier alternative, promoted: a part of Society (Society · Kinship).' },
    { label: 'The sacred and ritual', verdict: 'Run 2’s frontier alternative, kept out on the absence of traces before about 100,000 years ago. Promoted to Beliefs and norms · The sacred on a positive inference from every living human lineage (its universality verdict), not because the frame changed. If the inference is rejected, it, Arts and play and Language hold under the narrower claim from about 100,000 years ago, the gate’s other route.' },
    { label: 'Connection between societies', verdict: 'Run 2’s frontier alternative, promoted after warning W1 recurred: Connection.' },
    { label: 'Expression (art, music, play)', verdict: 'Rejected in run 2 under the survival lens (fails necessity); accepted under this frame as Arts and play.' },
    { label: 'Labour', verdict: 'A part of Provisioning (Work). Who works at what, by age and sex, goes to Provisioning · Work · Division; the standing of women and of life stages to Society (warning W4).' },
    { label: 'Communication and language', verdict: 'Communication moves to Connection, the carriage of word beside the carriage of people and goods; language becomes a part of Knowledge. Run 2 had put language under Identity while its own record said it had merged into Knowledge; that inconsistency is corrected.' },
    { label: 'Law', verdict: 'Split by a seam rule: what a rule requires or forbids goes to Beliefs and norms · Norms · Content; how rules are made, judged and enforced to Politics · Law (warning W3, kept from run 2).' },
    { label: 'Diplomacy and empire', verdict: 'Inside Politics · Polities · Order for relations among the population’s own polities. Relations with Things outside the population, for a local history, belong to the lifecycle dimension Relations (joint Events with roles), so no second dimension is made.' },
    { label: 'What government does (policy)', verdict: 'Routes to the dimension it acts on: a school law to Knowledge · Learning, poor relief to Society · Care, a road to Connection · Transport · Routes. How much a polity takes and spends is Politics · Government · Revenue.' },
  ],
};

// Below the twelve dimensions, two more levels. Each node holds for every human society from 320,000 years ago to
// 2026; N, I and U as above; `synthesis` says how a node's children give it; an open node has no leaf question yet.
// The run-2 verdicts of nodes kept from run 2 were stated under the survival lens; each was re-read under the new frame
// and holds, since each names a kind of change that has no other home. Kinds that exist only in some eras (coal,
// coinage, parliaments, monarchy, empire) are added as open-world specializations when met, never carved
// (SpecializationEdge, MarginalValueRule).
const n = (id, label, differentia, U, extra = {}) => ({ id, label, differentia: [differentia], U, ...extra });
export const humanTree = {
  provisioning: [
    n('food', 'Food', 'how the household obtains the food energy it eats', 'every society', { N: 'without food energy a population starves within weeks, and the history of foraging, farming and famine is about it', I: 'food changed with domestication while power stayed fire and muscle, and power changed with coal while food stayed farming',
      synthesis: 'Acquisition says how food is taken, diet what it is, preparation how it is made edible and kept, and sufficiency whether it is enough; together they say how a population feeds itself.', children: [
      n('acquisition', 'Acquisition', 'how food is taken from the living world: gathering, hunting, fishing, cultivating, herding', 'every society', { N: 'domestication and the spread of farming', I: 'diet and amount change under one mode of acquisition' }),
      n('diet', 'Diet', 'what people eat and drink: which plants and animals, wild or domesticated, and stimulants such as tea, coffee and tobacco', 'every society', { N: 'the same energy from different foods means different health and land use; the Columbian Exchange of crops', I: 'diets change through trade without a change in acquisition', open: true }),
      n('sufficiency', 'Sufficiency', 'how much food energy people get against what they need', 'every society', { N: 'hunger kills and stunts; famines', I: 'more food of the same composition' }),
      n('preparation', 'Preparation and storage', 'how food is processed, cooked, preserved and stored', 'every society; cooking with fire is inferred for all Homo sapiens', { N: 'cooking and storage decide what can be eaten and when', I: 'storage changes apart from acquisition', open: true }),
    ] }),
    n('power', 'Power', 'energy beyond food: fire, animals, water and wind, fossil fuels, electricity', 'every society since habitual fire use, argued to predate Homo sapiens', { N: 'the history of fuel, mills, coal and electricity', I: 'sources of power change apart from how food is obtained',
      synthesis: 'Sources say where non-food energy comes from and converters how it is turned to heat, light and motion; together they give the energy a population commands beyond its muscles.', children: [
      n('sources', 'Sources', 'where non-food energy comes from', 'every society', { N: 'no heat or motion without a source', I: 'sources change while the converters stay' }),
      n('converters', 'Converters', 'what turns energy into heat, light and motion: hearths, draught animals, mills, engines, motors', 'every society, the hearth at least', { N: 'a source does no work without a converter; the steam engine', I: 'converters change under one source, as steam engines and turbines both burn coal', open: true }),
    ] }),
    n('materials', 'Materials', 'what things are made from, and how', 'every society', { N: 'stone, bronze, iron, textiles, plastics: tools, shelter and clothing are made of materials', I: 'materials changed from stone to metal while food and power stayed the same', open: true,
      synthesis: 'Extraction says how raw material is obtained and transformation how it is worked; together they say what things are made of and how.', children: [
      n('extraction', 'Extraction', 'how materials are obtained: gathering, quarrying, mining, farming fibre, synthesis', 'every society', { N: 'mining and quarrying', I: 'extraction changes apart from how material is worked', open: true }),
      n('transformation', 'Transformation', 'how materials are worked: knapping, spinning, firing, smelting, manufacturing', 'every society', { N: 'stone tool industries, metallurgy, factories', I: 'working changes apart from extraction', open: true }),
    ] }),
    n('work', 'Work', 'how labour is divided among people, how it is directed, in what units it is done, and how much of life it takes', 'every society, by age and sex at least', { N: 'labour history: slavery, wage labour, factories, the working week', I: 'the organization of work changed from slavery to wages while the crops grown stayed the same',
      synthesis: 'Division says who does which work, control how it is directed and compelled, units in what organizations it is done, and working time how much of life it takes; together they give the organization of production.', children: [
      n('division', 'Division', 'who does which kind of work, by occupation, age and sex', 'every society', { N: 'the shift out of farming; child labour; women’s paid work', I: 'the division changes apart from who controls the work' }),
      n('control', 'Control', 'how work is directed, compelled and regulated: kin, command, coercion, guild rules, wages, own account', 'every society', { N: 'slavery as a labour regime, serf labour, guilds, wage labour', I: 'control changes while the division stands, as slaves and wage workers did the same field work', open: true }),
      n('units', 'Units', 'the organizations in which work is done: households, bands, estates, temples, workshops, plantations, firms, corporations, state enterprises', 'every society: the household or band at least', { N: 'business history: the factory, the joint-stock company, the corporation (OCM 470)', I: 'units change apart from the division and control of work, as the corporation spread under wage labour already established', open: true }),
      n('time', 'Working time', 'how much of life is spent working', 'every society', { N: 'the industrious revolution, the shorter working week', I: 'hours change apart from the division of work', open: true }),
    ] }),
  ],
  exchange: [
    n('media', 'Media', 'what carries value in exchange', 'every society', { N: 'the history of money, coinage, paper money and banking', I: 'coinage spread within trade networks that already existed', open: true,
      synthesis: 'Tokens say what stands for value and credit how obligations are recorded and deferred; together they give what carries value between people and across time.', children: [
      n('tokens', 'Tokens', 'what stands for value, and what it is worth: obligation, valued objects, coin, paper, digital money', 'every society', { N: 'coinage, paper money, inflation', I: 'tokens change apart from credit', open: true }),
      n('credit', 'Credit', 'how obligations are recorded and deferred: memory, tallies, ledgers, banks, shares and bonds', 'every society', { N: 'banking, bills of exchange, stock exchanges', I: 'changes apart from the tokens', open: true }),
    ] }),
    n('reach', 'Reach', 'who exchanges with whom, how far goods travel and how much is traded', 'every society', { N: 'the history of trade networks, from obsidian exchange to the Silk Road and globalization', I: 'reach changes apart from what carries value', open: true,
      synthesis: 'Distance says how far goods travel from where they are made and volume how much of what is made is exchanged; together they give the extent of exchange.', children: [
      n('distance', 'Distance', 'how far goods travel from where they are made', 'every society', { N: 'long-distance trade', I: 'changes apart from volume', open: true }),
      n('volume', 'Volume', 'how much of what is made is exchanged beyond the household', 'every society', { N: 'commercialization; trade’s share of output', I: 'changes apart from distance', open: true }),
    ] }),
    n('terms', 'Terms', 'what is owed in exchange and who decides it', 'every society: even sharing has terms, set by custom', { N: 'sharing rules, gift, tribute, markets and prices', I: 'terms change apart from reach and media', open: true,
      synthesis: 'Return says what is owed for what is given and setting who decides it; together they give the terms on which goods pass.', children: [
      n('return', 'Return', 'what return is owed for what is given, and when: none, in kind, later, at once', 'every society', { N: 'decides whether exchange binds people over time', I: 'changes apart from who sets the terms', open: true }),
      n('setting', 'Setting', 'who sets the terms: custom, the parties, an authority, a market', 'every society, custom at least', { N: 'the rise of markets and of price controls', I: 'changes apart from the return owed', open: true }),
    ] }),
  ],
  wealth: [
    n('property', 'Property', 'who holds rights over land, herds, buildings, tools and other assets, and how those rights pass', 'every society', { N: 'enclosure, collectivization, land reform, inheritance', I: 'property changes apart from how income is divided in a given year', open: true,
      synthesis: 'Holders say who holds rights over the main assets and transfer how those rights pass; together they say who owns what and how that changes.', children: [
      n('holders', 'Holders', 'who holds rights over land and the other main assets: open access, kin groups, lords, private owners, religious bodies, the state', 'every society', { N: 'enclosure, collectivization, land reform', I: 'holders change apart from how property passes', open: true }),
      n('transfer', 'Transfer', 'how property passes: inheritance, gift, sale, lease, seizure', 'every society', { N: 'primogeniture, land markets, confiscation', I: 'how property passes changes apart from who holds it', open: true }),
    ] }),
    n('distribution', 'Distribution', 'how income and wealth are divided among people', 'every society', { N: 'inequality and its rise and fall; real wages', I: 'distribution changes apart from output, as in the compression of 1914 to 1950', open: true,
      synthesis: 'Income says how what people receive in a year is divided and assets how what they own is divided; together they give who has what.', children: [
      n('income', 'Income', 'how what people receive each year is divided among them, wages and the share of labour included', 'every society', { N: 'top income shares, real wages, the Gini index', I: 'income can be evened by taxes and transfers while holdings stay unequal', open: true }),
      n('assets', 'Assets', 'how what people own is divided among them', 'every society', { N: 'concentrations of land and capital, and their destruction by war and inflation', I: 'holdings change apart from yearly income, as inflation destroyed savings while wages recovered', open: true }),
    ] }),
  ],
  population: [
    n('fertility', 'Fertility', 'how many children are born, and how births are spaced and limited: nursing, abstinence, contraception', 'every society', { N: 'without births a population ends in a generation; the fertility transition', I: 'births fall apart from deaths, as in the demographic transition' }),
    n('mortality', 'Mortality and health', 'how long people live, how healthy they are and what kills them', 'every society', { N: 'deaths set a population’s size and the ages of its people; epidemics, medicine', I: 'deaths fall apart from births, as they did first in the demographic transition',
      synthesis: 'Survival says how long people live, health how well their bodies grow and work, and causes what ends their lives; together they give the toll of death and illness.', children: [
      n('survival', 'Survival', 'how long people live, from birth to old age', 'every society', { N: 'decides how many reach each age', I: 'survival changes apart from the causes that end it, as famine relief and vaccination both raised it' }),
      n('health', 'Health', 'how well bodies grow and function, and the care that treats them: stature, illness, disability, medicine', 'every society', { N: 'stature, antibiotics, hospitals', I: 'stature changes apart from survival', open: true }),
      n('causes', 'Causes of death', 'what people die of: infection, violence, hunger, degenerative disease', 'every society', { N: 'plagues, the epidemiological transition', I: 'the mix changes apart from its total', open: true }),
    ] }),
    n('movement', 'Movement', 'how people move between places, for a season or for good', 'every society', { N: 'migration history: the dispersal out of Africa, the slave trade, mass emigration', I: 'migration changes apart from fertility and mortality', open: true }),
  ],
  habitat: [
    n('range', 'Range', 'where on Earth people live', 'every society', { N: 'the peopling of the continents', I: 'foragers spread through the Americas without changing how they settled' }),
    n('settlement', 'Settlement', 'the kind and size of the places people live in, from mobile camps to cities, and what they build there', 'every society', { N: 'urban history', I: 'villages and towns arose within ranges already occupied',
      synthesis: 'Form says whether people live in camps, villages or towns, size how many live together, and the built environment what they build to live in; together they give how people live together in places.', children: [
      n('form', 'Form', 'whether people live in moving camps, fixed villages or towns and cities', 'every society', { N: 'sedentism, urbanization', I: 'form changes apart from size, as nomad confederations were large and villages small' }),
      n('size', 'Size', 'how many people live together in one place', 'every society', { N: 'the largest cities', I: 'the largest places grow while most people stay rural' }),
      n('built', 'Built environment', 'what people build to live in: shelters, houses, monuments, streets, water and waste systems', 'every society, shelters at least', { N: 'architecture, sanitation, monuments', I: 'buildings change apart from size and form', open: true }),
    ] }),
    n('land', 'Land and environment', 'how people use and transform land, living things and the air', 'every society, from burning to fields to emissions', { N: 'environmental history: clearing, extinctions, emissions', I: 'land use intensifies without a change in range or settlement form',
      synthesis: 'Land use says how much land people use and for what, living systems what they do to wild species and habitats, and emissions what they release; together they give a population’s mark on the Earth.', children: [
      n('land-use', 'Land use', 'how much land people use, and for what: crops, pasture, settlement', 'every society', { N: 'the spread of fields and pasture', I: 'use changes apart from what is done to wild species' }),
      n('ecosystems', 'Living systems', 'what people do to wild species and habitats: hunting out, clearing, domesticating, introducing', 'every society', { N: 'megafaunal extinctions, deforestation, domestication', I: 'changes apart from the area farmed', open: true }),
      n('atmosphere', 'Emissions', 'what people release into the air and water: smoke, carbon dioxide, pollutants', 'every society, smoke at least', { N: 'emissions change climate and health', I: 'change apart from land use', open: true }),
    ] }),
  ],
  connection: [
    n('transport', 'Transport', 'how people and goods are carried: the carriers and the routes', 'every society, on foot at least', { N: 'the history of transport: horses, ships, railways, container shipping, aviation (OCM 480 to 500)', I: 'carriage changes apart from messaging, as railways did not change how word was sent until the telegraph',
      synthesis: 'Carriers say what carries people and goods and routes what links places; together they give how far, how fast and at what cost people and goods can move.', children: [
      n('carriers', 'Carriers', 'what carries people and goods: walking and porters, pack and draught animals, boats, wheeled vehicles, ships, trains, motor vehicles, aircraft', 'every society', { N: 'horse riding, ships, railways, aviation', I: 'carriers change apart from routes, as steamships used old sea lanes', open: true }),
      n('routes', 'Routes', 'the paths and networks that link places: trails, roads, sea lanes, canals, railways, airways, pipelines', 'every society', { N: 'Roman roads, canals, railway networks', I: 'routes change apart from carriers', open: true }),
    ] }),
    n('communication', 'Communication', 'how messages pass among the living, apart from carrying the people who know them', 'every society', { N: 'the history of communication: runners, mail, the telegraph, radio, the internet (OCM 200)', I: 'the speed and reach of messages change apart from transport, as the telegraph showed', open: true,
      synthesis: 'Speed says how fast a message travels and audience how many one message can reach; together they give how well a population can share word.', children: [
      n('speed', 'Speed', 'how fast a message travels', 'every society', { N: 'decides what can be coordinated at a distance', I: 'changes apart from audience', open: true }),
      n('audience', 'Audience', 'how many people one message can reach', 'every society', { N: 'news, broadcasting, mass media', I: 'changes apart from speed', open: true }),
    ] }),
  ],
  society: [
    n('kinship', 'Kinship and household', 'how people marry, live together and reckon kin', 'every society', { N: 'family history: marriage patterns, household size, clans (OCM 580 to 619)', I: 'kinship changes apart from rank and from government',
      synthesis: 'Marriage says how unions form and end, household who lives together, and descent how kin are reckoned and grouped; together they give a population’s family order.', children: [
      n('marriage', 'Marriage', 'how unions are formed and ended: who may marry whom, at what age, with how many partners, and divorce', 'every society', { N: 'the European marriage pattern, polygyny, divorce; it was Population · Fertility · Unions in run 2', I: 'marriage rules change apart from household form', open: true }),
      n('household', 'Household', 'who lives and keeps house together: size and composition', 'every society', { N: 'nuclear and extended households, single-person households', I: 'household size changes apart from marriage rules', open: true }),
      n('descent', 'Descent', 'how kin are reckoned and grouped: through fathers, mothers or both; lineages and clans', 'every society', { N: 'clans and lineages', I: 'descent groups change apart from household form', open: true }),
    ] }),
    n('stratification', 'Rank and freedom', 'how far people stand above and below each other, by birth, law, freedom, wealth or occupation', 'every society: prestige is ranked even where foragers level it', { N: 'castes, estates, slavery, serfdom, classes (OCM 550 to 567)', I: 'ranking changes apart from government, as caste persisted through changes of regime',
      synthesis: 'Rank says how far standing is set by birth and law, freedom who is free and who is bound, and class how far it is set by wealth and occupation; together they say who stands above whom.', children: [
      n('rank', 'Rank', 'how far standing is set by birth and law: from equal standing among adults of one age and sex, through seniority of lines and chiefly families, to nobility, estates, castes and ranks by race or origin', 'every society: equal standing is a value of it, not its absence', { N: 'castes, estates, aristocracies, apartheid', I: 'rank changes apart from bondage', open: true }),
      n('freedom', 'Freedom', 'whether people are free or held in bondage: slavery, serfdom, debt bondage, forced labour', 'every society: that no one is bound is a value of it, not its absence', { N: 'slavery and its abolition, serfdom; it was Coordination · Membership · Status in run 2', I: 'bondage changes apart from rank, as serfs were freed while nobles kept their titles' }),
      n('class', 'Class', 'how far standing is set by wealth and occupation, and which groups that makes: none where sharing levels it, landlords and peasants, merchants, workers, a middle class', 'every society: no class division is a value of it, not its absence', { N: 'the rise of merchants, the middle class and the working class', I: 'class changes apart from legal rank, as merchants rose under unchanged estates', open: true }),
    ] }),
    n('gender', 'Gender', 'the roles, rights and standing of women and men relative to each other', 'every society', { N: 'women’s history: seclusion, footbinding, property rights, the vote; it was Coordination · Membership · Gender in run 2', I: 'gender standing changes apart from other ranks', open: true }),
    n('age', 'Age', 'how life stages are marked and ranked: childhood, initiation, adulthood, old age', 'every society', { N: 'the history of childhood and of old age (OCM 850, 880)', I: 'the standing of life stages changes apart from kinship', open: true }),
    n('associations', 'Associations and sociability', 'the groups and gatherings people form beyond kin and government, and where they meet: friendships, patrons and clients, age sets, clubs, confraternities, unions, coffeehouses', 'every society: friendships and exchange partners among foragers', { N: 'patronage, clubs, unions, coffeehouses (OCM 570)', I: 'associations change apart from kinship and rank', open: true }),
    n('care', 'Care', 'how those who cannot support themselves are supported: the young, the sick, the old and the poor, by kin, community, charity, insurance or the state', 'every society', { N: 'poor laws, pensions, the welfare state (OCM 740)', I: 'care moves from kin to the state apart from household form', open: true }),
  ],
  politics: [
    n('polities', 'Polities', 'how the population is divided among polities, how large they are, and how they stand toward one another', 'every society: a band is a polity of a few dozen', { N: 'state formation and collapse, empires, unification, diplomacy', I: 'the size and order of polities change apart from how each is ruled',
      synthesis: 'Scale says how many people and how much land one polity holds and order how polities stand toward one another; together they give the political map.', children: [
      n('scale', 'Scale', 'how many people and how much land one polity governs', 'every society', { N: 'unification and fragmentation, the rise and fall of empires', I: 'scale changes apart from how rulers are chosen' }),
      n('order', 'Order among polities', 'how the population’s polities stand toward one another apart from war: independence, alliance, marriage ties, tribute, vassalage, empire over other polities, federation, treaties, international organizations', 'every society: bands and tribes keep alliances, marriage ties and truces with neighbours', { N: 'diplomatic history: treaties, tribute systems, empires, the United Nations (OCM 628, 648)', I: 'alliances and empires change apart from each polity’s internal rule', open: true }),
    ] }),
    n('rule', 'Rule', 'who holds the highest authority, how they gain and lose it, why it is accepted, and how far it is bound', 'every society', { N: 'monarchy, oligarchy, democracy, succession, constitutions', I: 'who rules changes apart from what means government has',
      synthesis: 'Form says how many hold the highest authority, selection how they are chosen and replaced, legitimacy why their authority is accepted, and constraint how far it is bound; together they give the terms on which a polity is ruled.', children: [
      n('form', 'Form', 'how many hold the highest authority: none apart from the group as a whole, one, a few, or many', 'every society', { N: 'monarchy, oligarchy, democracy', I: 'form changes apart from how holders are chosen: elected monarchs, hereditary oligarchies' }),
      n('selection', 'Selection', 'how holders of the highest authority are chosen and replaced in the ordinary course: consensus, descent, election, appointment, lot, seizure', 'every society has some way leaders come and go, if only by influence', { N: 'succession rules, elections, term limits', I: 'selection changes apart from form, as the Holy Roman Emperor was elected while the French king inherited', open: true }),
      n('legitimacy', 'Legitimacy', 'why people accept authority: custom, descent, the sacred, charisma, law, consent, performance', 'every society', { N: 'the Mandate of Heaven, divine right, popular sovereignty, official ideologies', I: 'the grounds of acceptance change while form and holders stay, as monarchies moved from divine right to constitutions', open: true }),
      n('constraint', 'Constraint', 'how far holders of authority are bound: by custom, councils, law, courts, elections, and the right to leave', 'every society: even band leaders are restrained by ridicule and the right to leave', { N: 'Magna Carta, constitutions, the separation of powers', I: 'one form can be bound or unbound, as absolute and constitutional monarchies were', open: true }),
    ] }),
    n('government', 'Government', 'how a polity gathers resources and carries out its decisions', 'every society: decisions are carried out by someone, and some resources are pooled', { N: 'fiscal and administrative history: tribute, taxes, bureaucracy (OCM 647, 651)', I: 'government grows apart from who rules, as China’s examinations served many dynasties',
      synthesis: 'Revenue says what a polity takes for collective purposes and administration who carries its decisions out; together they give its capacity to act.', children: [
      n('revenue', 'Revenue', 'how a polity gathers resources for collective purposes: shared contributions, tribute, labour levies, taxes, state monopolies, borrowing', 'every society pools something for collective purposes, if only for feasts and shared hunts', { N: 'tribute, taxation, public debt', I: 'revenue rises or falls under one form and one administration, as under tax farming', open: true }),
      n('administration', 'Administration', 'who carries out collective decisions: everyone, kin, retainers, appointed officials, salaried bureaucracies', 'every society: by all adults at least', { N: 'commanderies, examinations, bureaucracy', I: 'administration changes apart from form, as examinations served many dynasties', open: true }),
    ] }),
    n('law', 'Law and justice', 'how a polity’s rules are made, how disputes and accusations are settled, and how compliance is forced', 'every society', { N: 'legal history: codes, courts, police, prisons (OCM 670 to 698)', I: 'enforcement changed from ostracism to police apart from who rules',
      synthesis: 'Rules say how rules are made and stated, adjudication how disputes and accusations are settled, and enforcement how compliance is forced; together they give how rules are upheld. What a rule requires is Beliefs and norms · Norms · Content (warning W3).', children: [
      n('rules', 'Rules', 'how rules are made and stated: custom, decree, assemblies, legislation, written codes', 'every society: unstated custom at least', { N: 'Hammurabi’s code, the Napoleonic Code', I: 'stating changes apart from judging', open: true }),
      n('adjudication', 'Adjudication', 'how disputes and accusations are settled: elders, assemblies, ordeals, courts, juries', 'every society', { N: 'courts, trial by jury', I: 'courts change apart from sanctions', open: true }),
      n('enforcement', 'Enforcement', 'how compliance is forced and breaches dealt with: shame, exclusion, compensation, fines, punishment, police, prisons', 'every society', { N: 'wergild, policing, prisons', I: 'sanctions change apart from how rules are stated', open: true }),
    ] }),
    n('participation', 'Membership and participation', 'who belongs to the polity, and how members take part in its decisions and contest them', 'every society', { N: 'citizenship, elections, parties, revolutions (OCM 641, 660 to 669)', I: 'participation widens or narrows apart from the form of rule',
      synthesis: 'Belonging says who is a member and with what political standing, voice how members take part in decisions, and contest how they oppose decisions and holders and change them outside the ordinary course; together they say whose consent and whose opposition the polity meets.', children: [
      n('belonging', 'Belonging', 'who counts as a member of the polity and with what political standing: kin, subject, citizen, colonial subject, alien', 'every society', { N: 'citizenship, its widening and its loss', I: 'the bounds of membership change apart from who decides', open: true }),
      n('voice', 'Voice', 'how members take part in collective decisions and who may: consensus meetings, assemblies, councils, petitions, elections, the franchise', 'every society: band decisions are discussed among adults', { N: 'assemblies, elections, the widening franchise', I: 'voice widens or narrows apart from the form of rule, as one-party states held elections', open: true }),
      n('contest', 'Contest', 'how members oppose decisions and holders, and change them outside the ordinary course: factions, fission, revolts, parties, movements, coups, revolutions', 'every society: bands split and factions form', { N: 'revolts, parties, revolutions', I: 'contest rises and falls under one form of rule', open: true }),
    ] }),
  ],
  security: [
    n('violence-within', 'Violence within groups', 'killing and injury among members of a group outside war: homicide, assault, feud, abuse', 'every society', { N: 'the history of homicide and feud', I: 'homicide fell in Europe while wars grew deadlier' }),
    n('war', 'War between groups', 'how groups fight, deter or avoid organized violence with other groups', 'every society: each must meet the possibility of violence from outsiders, even where it avoids it', { N: 'military history', I: 'war changes apart from violence within groups',
      synthesis: 'Toll says what organized violence costs people, organization who fights and how, and means with what; together they give the war a population wages and suffers.', children: [
      n('toll', 'Toll', 'what organized violence between groups costs people: deaths, wounds, captivity, flight', 'every society', { N: 'war’s toll shapes populations and states', I: 'the toll changes apart from who fights' }),
      n('organization', 'Organization', 'who fights and how: all men, warriors, armies, conscripts, professionals', 'every society', { N: 'mass conscription, standing armies', I: 'changes apart from weapons', open: true }),
      n('means', 'Means', 'weapons and defences: spears, bows, walls, chariots, guns, missiles', 'every society', { N: 'chariots, gunpowder, nuclear weapons', I: 'change apart from organization', open: true }),
    ] }),
  ],
  knowledge: [
    n('learning', 'Learning', 'how people acquire know-how', 'every society', { N: 'the history of education', I: 'learning changes apart from how knowledge is stored, as schools arose long after writing',
      synthesis: 'Transmitters say from whom people learn and duration for how long; together they give how much each generation can take in.', children: [
      n('transmitters', 'Transmitters', 'from whom people learn: parents, other adults, peers, specialists, teachers and schools', 'every society', { N: 'nothing is learned without a model to learn from; universities', I: 'who teaches changes apart from how long learning takes', open: true }),
      n('duration', 'Duration', 'how long it takes to become competent: childhood, apprenticeship, schooling', 'every society', { N: 'compulsory schooling', I: 'changes apart from who teaches' }),
    ] }),
    n('storage', 'Storage', 'where knowledge is kept: memory, objects, writing, print, digital', 'every society', { N: 'writing, printing, archives (OCM 210)', I: 'storage changes apart from communication, as writing preceded fast messages by millennia',
      synthesis: 'Capacity says how much can be kept, durability for how long and access by whom; together they give what a population can keep of what it knows.', children: [
      n('capacity', 'Capacity', 'how much knowledge a society can keep: in memory, objects, writing, print, data', 'every society', { N: 'decides how much can accumulate', I: 'changes apart from who can retrieve it', open: true }),
      n('durability', 'Durability', 'how long stored knowledge lasts before it is lost', 'every society', { N: 'decides what survives a generation or a collapse', I: 'changes apart from capacity, as stone lasts and paper burns', open: true }),
      n('access', 'Access', 'who can retrieve what is stored', 'every society', { N: 'literacy', I: 'changes apart from how much is stored' }),
    ] }),
    n('discovery', 'Discovery', 'how new knowledge is made', 'every society', { N: 'the history of science and invention', I: 'the rate of discovery changes apart from storage and learning', open: true,
      synthesis: 'Generation says how new ideas and techniques arise and selection how what works is told from what does not; together they give how knowledge grows.', children: [
      n('generation', 'Generation', 'how new ideas and techniques arise: trial, error, recombination, observation, invention', 'every society', { N: 'nothing new is kept unless something new appears', I: 'the rate of new ideas changes apart from how they are tested', open: true }),
      n('selection', 'Selection', 'how what works is told from what does not and kept: use, testing, debate, experiment', 'every society', { N: 'the experimental method, scientific societies', I: 'testing changes apart from the rate of new ideas', open: true }),
    ] }),
    n('language', 'Language', 'the languages people speak and write: which, how many speak each, and how languages spread, change and die', 'inferred, moderate to strong, by the argument stated for Arts and play: every lineage of living humans has full language, so it was probably present in the ancestral population they share; when it arose is not dated', { N: 'the Bantu and Indo-European spreads, Latin into the Romance languages, English as a world language (OCM 190); it was Beliefs and norms · Identity · Language in run 2', I: 'a population can change language without changing what it knows', open: true }),
  ],
  'beliefs-and-norms': [
    n('worldview', 'Worldview', 'what people hold true about the world and their place in it', 'every society', { N: 'the history of ideas and of philosophy', I: 'worldviews change apart from norms',
      synthesis: 'Explanation says how people account for what happens and warrant why they hold their beliefs; together they give what people take to be true.', children: [
      n('explanation', 'Explanation', 'how people explain what happens: by persons and spirits, by forces, by mechanisms', 'every society', { N: 'natural philosophy, cosmologies', I: 'explanations change apart from why they are believed', open: true }),
      n('warrant', 'Warrant', 'why beliefs are held: experience, tradition, authority, revelation, evidence', 'every society', { N: 'the turn to evidence and reason', I: 'changes apart from what is explained', open: true }),
    ] }),
    n('sacred', 'The sacred', 'what people hold holy, how they worship, and who keeps and leads worship', 'inferred, moderate, by the argument stated for Arts and play: rites toward the sacred are found in every society known and in every lineage of living humans; burials begin about 120,000 years ago. Run 2 kept the sacred as a frontier alternative on the absence of early traces; it is accepted now on this positive inference, not because the frame changed', { N: 'religious history: rites, priesthoods, churches, monasteries, missions (OCM 770 to 798); run 2 kept it only as a frontier alternative', I: 'rites and religious organization change apart from doctrine, as churches split from states and liturgies were reformed',
      synthesis: 'Rites say what people do toward the sacred and organization who keeps and leads it; with the doctrines in Worldview they make a religious tradition, which the religion measure follows.', children: [
      n('rites', 'Rites', 'what people do toward the sacred: prayer, offering, sacrifice, festivals, pilgrimage, rites of burial and passage', 'inferred, moderate, as for The sacred', { N: 'sacrifice, pilgrimage, burial rites, attendance at worship', I: 'rites change apart from doctrine, as liturgies were reformed', open: true }),
      n('organization', 'Organization', 'who keeps and leads worship: everyone, elders, shamans, priests, monks, churches, denominations, missions', 'inferred, moderate, as for The sacred: where there are no specialists, everyone or the elders lead', { N: 'priesthoods, monasteries, churches, missions', I: 'organization changes apart from rites and doctrine, as churches split from states', open: true }),
    ] }),
    n('norms', 'Norms', 'what people hold right and wrong', 'every society', { N: 'moral history: honour, rights, the circle of concern', I: 'circles of moral concern widened under unchanged religions', open: true,
      synthesis: 'Content says what conduct is required and forbidden and scope toward whom; together they give what people owe each other.', children: [
      n('content', 'Content', 'what conduct is required and what is forbidden, in custom, morality or law', 'every society', { N: 'what is a crime or a sin; decriminalization', I: 'changes apart from whom they protect', open: true }),
      n('scope', 'Scope', 'toward whom norms apply: kin, group, strangers, all people, other beings', 'every society', { N: 'decides who may be harmed', I: 'the circle widens or narrows apart from what is required within it', open: true }),
    ] }),
    n('identity', 'Identity', 'who “we” are: the groups people identify with, such as kin, people, faith and nation', 'every society', { N: 'ethnic and national identity, nationalism', I: 'nations formed among peoples of one religion and one language alike', open: true }),
  ],
  'arts-and-play': [
    n('forms', 'Forms', 'what is made and performed, and in what styles: ornament, image, music, dance, story and literature, drama, film, games and sport', 'inferred, moderate, as for Arts and play', { N: 'styles and movements, genres, games and sports', I: 'forms change apart from who makes and pays for them, as the novel rose within an existing book trade', open: true }),
    n('production', 'Production', 'who makes works and who pays for them: everyone, specialists, guilds, patrons, temples, courts, markets, the state', 'inferred, moderate, as for Arts and play: in bands everyone sings and dances', { N: 'patronage, the art market, the studios', I: 'support moves from courts to markets while forms continue', open: true }),
    n('audiences', 'Audiences', 'who takes part, and on what occasions: camps and gatherings, rites, festivals, courts, theatres, exhibitions, recordings, broadcasts', 'inferred, moderate, as for Arts and play', { N: 'festivals, public theatres, mass media', I: 'audiences widen apart from who pays, as public broadcasting did', open: true }),
  ],
};
export const humanSynthesis = {
  'arts-and-play': 'Forms say what is made and performed, production who makes it and who pays, and audiences who takes part; together they give a population’s arts and play.',
  society: 'Kinship, rank, gender and age are the axes along which every society groups and ranks people from birth; associations are the groups people join, and care is how those who cannot support themselves are supported. Together they say whom each person lives with, stands above and below, and leans on.',
  population: 'Births, deaths and moves are the only ways a population’s numbers change; together they give its size and ages over time.',
  security: 'Violence among members and organized violence between groups together give the violence a population inflicts and suffers.',
  wealth: 'Property says who holds rights over assets and how they pass, and distribution how income and holdings end up divided; together they say who has what.',
  connection: 'Transport carries people and goods, and communication carries word; together they set how far and how fast a population’s parts, and its neighbours, can reach each other.',
  politics: 'Polities are the units; rule says who holds authority in each and on what terms, government how a polity gathers resources and acts, law how rules are upheld, and participation who belongs, takes part and contests. Together they say who can make a population act as one, by what means, within what limits and with whose consent.',
  knowledge: 'Learning passes know-how between generations, storage keeps it, discovery adds to it, and language carries most of it; together they set what a population can know.',
  'beliefs-and-norms': 'Worldview says what people hold true, the sacred what they hold holy and how they worship, norms what they hold right, and identity who they hold themselves to be; together they give the shared convictions people act on.',
  provisioning: 'Food, power and materials are what a population draws from the living world and the Earth, and work is how its people do it; together they set what can be produced, by whom and at what cost.',
  exchange: 'Media say what carries value, reach with whom and how far goods pass, and terms on what conditions; together they say how goods and claims pass between people.',
  habitat: 'Range says where people live, settlement how they live together there, and land what they do to the land, living things and air; together they say how a population occupies the Earth.',
};
export const subFrontier = [
  { under: 'population', label: 'Size and age structure', verdict: 'A measure of Population, not a sub-dimension: followed as the world population, a dated value.' },
  { under: 'materials', label: 'Built stock', verdict: 'Routed to Habitat · Settlement · Built environment, where people live; Materials keeps the flows of material.' },
  { under: 'security', label: 'Restraint of violence', verdict: 'Withdrawn as a part of Security: it is realized by courts and police (Politics · Law), by norms (Beliefs and norms · Norms) and by honour and kin (Society), so it failed independence; run 2 had courts in two places. Violence within groups is now followed as one node, its harm.' },
  { under: 'politics', label: 'Services (what government does)', verdict: 'Fails necessity: what a polity does routes to the dimension it acts on; how much it takes and spends is Revenue.' },
  { under: 'knowledge', label: 'Numbers and measures', verdict: 'Kinds of know-how (numerals, calendars, weights and measures): their making routes to Discovery, their adoption by decree to Politics · Law · Rules.' },
];

// ---------- Leaves: the questions the fillers answer, frozen ----------
// kind 'share': a Cut series (life_series_record) under the node's Event; every reading is an average over its
// interval with equal weight for each year, and readings nest.  kind 'scalar': a typed process with dated values
// filed through the estimation exchange (operation assimilate, evidence cutoff the retrieval date).
const SHARE_UNIT = 'share of the world’s living people, averaged over the interval with equal weight for each year';
export const leaves = [
  { node: 'provisioning.food', kind: 'share', series: 'livelihood', denominator: 'people', question: 'How do the world’s people divide by how their household obtains its food?', unit: SHARE_UNIT,
    answers: [
      { key: 'foraging', meaning: 'Food from wild plants and animals, by gathering, hunting and fishing, eaten mainly by the household.' },
      { key: 'food_production', meaning: 'Food the household grows or herds itself, from domesticated plants and animals.' },
      { key: 'fed_by_others', meaning: 'Food obtained mostly from what others produce, through exchange, wages, rations or tribute.' }],
    rule: 'A household’s livelihood is the source of most of the food energy it eats (refined by the first run’s routing check of nine households).' },
  { node: 'provisioning.power.sources', kind: 'share', series: 'energy-supply', denominator: 'primary energy supply', question: 'How does the world’s primary energy supply divide by source?',
    unit: 'share of world primary energy as total energy supply in energy content (Energy Institute 2026: hydro, wind and solar power by energy, nuclear by heat), with traditional biomass from Smil; equal weight for each year; food and fodder excluded',
    answers: [
      { key: 'traditional_biomass', meaning: 'Wood, charcoal, crop residues and dung, burned for heat.' },
      { key: 'coal', meaning: 'Coal.' }, { key: 'oil', meaning: 'Oil.' }, { key: 'natural_gas', meaning: 'Natural gas.' },
      { key: 'nuclear', meaning: 'Nuclear fission, counted by its heat.' },
      { key: 'hydro_and_water', meaning: 'Hydroelectricity, counted by its energy, and earlier the water wheels of mills.' },
      { key: 'wind_solar_other', meaning: 'Wind, solar, geothermal, modern biofuels, biomass in power and waste, and earlier windmills.' }] },
  { node: 'provisioning.power', kind: 'scalar', process: 'humanity.energy-per-person', aggregate: 'ratio of totals: total primary energy over total population', label: 'Energy use per person', unit: 'gigajoules per person per year', bounds: [0, 500],
    meaning: 'Primary energy used per person in a year, food and fodder included, so that foragers and farmers are comparable with industrial societies.', initial: { value: 18, lower: 8, upper: 30, why: 'Agrarian societies around 1 CE used roughly 10 to 25 gigajoules per person in food, fodder and fuel (Smil’s estimates); recalled, not checked.' } },
  { node: 'provisioning', kind: 'scalar', process: 'humanity.output-per-person', aggregate: 'ratio of totals: total output over total population', label: 'Output per person', unit: '2011 international dollars per person per year', bounds: [0, 100000],
    meaning: 'Gross domestic product per person at 2011 purchasing-power parity, the Maddison Project’s unit.', initial: { value: 1000, lower: 600, upper: 1500, why: 'Close to subsistence in 1 CE; the Maddison Project’s early estimates are of this order; recalled, not checked.' } },
  { node: 'provisioning.food.sufficiency', kind: 'scalar', process: 'humanity.food-supply', aggregate: 'ratio of totals: total food energy over total population', label: 'Food supply per person', unit: 'kilocalories per person per day', bounds: [0, 5000],
    meaning: 'Food energy available per person per day, before losses in the household.', initial: { value: 2100, lower: 1700, upper: 2600, why: 'Pre-modern agrarian estimates mostly lie around 2,000 kilocalories; recalled, not checked.' } },
  { node: 'provisioning.work.division', kind: 'share', series: 'work-sector', denominator: 'working people aged 15 and over', question: 'How do the world\u2019s working people divide by the kind of work they mainly do?',
    unit: 'share of the world\u2019s working people, paid or unpaid, aged 15 and over, averaged over the interval with equal weight for each year',
    answers: [
      { key: 'food_getting', meaning: 'Getting food and raw materials from the living world: foraging, farming, herding, fishing, forestry.' },
      { key: 'making', meaning: 'Making and building things: crafts, mining, construction, manufacturing, utilities.' },
      { key: 'services', meaning: 'Everything else: trade, transport, care, administration, religion, teaching, the military.' }],
    rule: 'A person counts in the kind of work that takes most of their working time; household work counts with the kind it mainly serves.' },
  { node: 'population', kind: 'scalar', process: 'humanity.world-population', aggregate: 'sum over the parts', label: 'World population', unit: 'billion people', bounds: [0, 20],
    meaning: 'The number of living people in the world.', initial: { value: 0.232, lower: 0.17, upper: 0.33, why: 'HYDE 3.3 gives 0.232 billion for 1 CE (Our World in Data, retrieved 2026-10-07); other reconstructions give 0.17 to 0.33 billion.' } },
  { node: 'population.mortality.survival', kind: 'scalar', process: 'humanity.life-expectancy', aggregate: 'recomputed from pooled age-specific death rates; a population-weighted mean of the parts is only an approximation and must be flagged as one', label: 'Life expectancy at birth', unit: 'years', bounds: [0, 120],
    meaning: 'Period life expectancy at birth for the world’s population.', initial: { value: 25, lower: 20, upper: 35, why: 'Estimates for the Roman Empire and Han China are mostly in the 20s; recalled, not checked.' } },
  { node: 'population.mortality.survival', kind: 'scalar', process: 'humanity.child-mortality', aggregate: 'weighted by live births', label: 'Child mortality', unit: 'percent of children dying before age 5', bounds: [0, 100],
    meaning: 'The share of children born alive who die before their fifth birthday.', initial: { value: 45, lower: 30, upper: 55, why: 'Pre-modern populations lost roughly two in five children before age five; recalled, not checked.' } },
  { node: 'population.fertility', kind: 'scalar', process: 'humanity.fertility', aggregate: 'recomputed from pooled age-specific birth rates; weighting the parts by women aged 15 to 49 is only an approximation and must be flagged as one', label: 'Total fertility rate', unit: 'births per woman', bounds: [0, 12],
    meaning: 'Births per woman over a lifetime at the period’s age-specific rates.', initial: { value: 5.5, lower: 4.5, upper: 7, why: 'Pre-transition populations with high mortality and slow growth; recalled, not checked.' } },
  { node: 'habitat.range', kind: 'share', series: 'where-people-live', denominator: 'people', question: 'How do the world’s living people divide among the UN M49 regions?', unit: SHARE_UNIT,
    answers: regions.map((r) => ({ key: r.id, meaning: `${r.name}: the land of the countries and areas the UN M49 standard assigns to ${r.name === 'Antarctica' ? 'Antarctica (010)' : `${r.name.replace(/^The /, '')} (${r.m49})`}, within their 2026 borders${r.id === 'europe' ? ', the whole Russian Federation included' : ''}.` })),
    rule: 'Replaces the first run’s regions, which put Siberia in Asia; under M49 all of Russia is in Europe, so readings from the first run are not comparable.' },
  { node: 'habitat.settlement.form', kind: 'share', series: 'settlement-kind', denominator: 'people', question: 'How do the world’s people divide by the kind of settlement they live in?', unit: SHARE_UNIT,
    answers: [
      { key: 'mobile', meaning: 'Living in camps that move during the year, as foragers and pastoral nomads do.' },
      { key: 'rural', meaning: 'Living in a village, hamlet or homestead that stays in place.' },
      { key: 'urban', meaning: 'Living in a town or city: before 1950 a settlement of at least about 5,000 people; from 1950 what each country’s statistics count as urban.' }],
    rule: 'Replaces the first run’s rural and urban, which could not tell mobile camps from villages over a range that is mostly foragers.' },
  { node: 'habitat.settlement.size', kind: 'scalar', process: 'humanity.largest-city', aggregate: 'maximum over the parts', label: 'Largest city', unit: 'thousand people', bounds: [0, 50000],
    meaning: 'The population of the world\u2019s largest settlement.', initial: { value: 800, lower: 450, upper: 1000, why: 'Rome in 1 CE, with estimates from about 450,000 to a million; recalled, not checked.' } },
  { node: 'habitat.land.land-use', kind: 'scalar', process: 'humanity.land-use', aggregate: 'weighted by ice-free land area', label: 'Land used for crops and pasture', unit: 'percent of the Earth’s ice-free land', bounds: [0, 100],
    meaning: 'Cropland and pasture, as HYDE counts them, as a share of the ice-free land.', initial: { value: 4, lower: 2, upper: 8, why: 'HYDE’s reconstruction for 1 CE is of this order; recalled, not checked.' } },
  { node: 'politics.polities.scale', kind: 'scalar', process: 'humanity.largest-polity', aggregate: 'for the world only: polities cross regional borders', label: 'Largest polity', unit: 'percent of the world\u2019s people', bounds: [0, 100],
    meaning: 'The share of the world\u2019s people living in its most populous polity.', initial: { value: 25, lower: 18, upper: 30, why: 'Han China and the Roman Empire each held roughly a fifth to a quarter of humanity in 1 CE; recalled, not checked.' } },
  { node: 'politics.rule.form', kind: 'share', series: 'political-order', denominator: 'people',
    question: 'How do the world\u2019s people divide by the kind of highest authority they live under?', unit: SHARE_UNIT,
    answers: [
      { key: 'non_state', meaning: 'No state: a band, tribe or chiefdom without a central authority that taxes its people and claims the right to use force over a territory, or beyond any state\u2019s effective reach.' },
      { key: 'rule_by_one', meaning: 'A state whose highest authority is one ruler or ruling family, holding it by descent, force or appointment, including a colony governed by an appointed governor and a personal dictatorship that holds elections it cannot lose.' },
      { key: 'rule_by_few', meaning: 'A state whose highest authority is a council, aristocracy, single or dominant party, junta or other narrow group, chosen among themselves or by a minority of adults, including a colony governed by its settler or colonial elite.' },
      { key: 'rule_by_many', meaning: 'A state whose highest authority is chosen in competitive elections that the incumbents can lose and in which most adult residents of that state may vote; a colony counts only by its own residents\u2019 franchise, not its metropole\u2019s. A state is classed by who effectively holds power, whatever its constitution says.' }],
    rule: 'One unconditioned division of all people, so that its interval averages combine correctly: before the first states every reading is non_state 1. It replaces a series of the forms of states conditioned on living under one, whose equal-year averages did not multiply back to the combined shares (a 2026-10-08 review).' },
  { node: 'society.stratification.freedom', kind: 'share', series: 'personal-status', denominator: 'people', question: 'How do the world’s people divide by whether they are legally free or held in bondage?', unit: SHARE_UNIT,
    answers: [
      { key: 'free', meaning: 'Not owned by or bound to another person or to land by law or custom.' },
      { key: 'bonded', meaning: 'Enslaved, or bound by law or custom to a master or to land, as serfs and bonded labourers are, or held in forced labour by a private party or the state.' }] },
  { node: 'security.violence-within', kind: 'scalar', process: 'humanity.homicide-rate', aggregate: 'ratio of totals: total deaths over total population', label: 'Homicide rate', unit: 'deaths per 100,000 people per year', bounds: [0, 1000],
    meaning: 'Killings of people by other people outside war, per 100,000 living people per year.', initial: { value: 25, unknown: true, why: 'A placeholder the engine requires: no estimate of the world\u2019s homicide rate in 1 CE has been consulted.' } },
  { node: 'security.war.toll', kind: 'scalar', process: 'humanity.war-death-rate', aggregate: 'ratio of totals: total deaths over total population', label: 'Deaths in war', unit: 'deaths per 100,000 people per year', bounds: [0, 2000],
    meaning: 'Deaths of combatants and civilians from organized violence between groups, per 100,000 living people per year.', initial: { value: 50, unknown: true, why: 'A placeholder the engine requires: no estimate of the world\u2019s war deaths in 1 CE has been consulted.' } },
  { node: 'knowledge.storage.access', kind: 'share', series: 'literacy', denominator: 'people aged 15 and over', question: 'How do the world’s adults divide between those who can read and write and those who cannot?',
    unit: 'share of the world’s living people aged 15 and over, averaged over the interval with equal weight for each year',
    answers: [
      { key: 'literate', meaning: 'Can read and write a short simple statement about their everyday life, in any script.' },
      { key: 'not_literate', meaning: 'Cannot, including everyone who lives where no script is used.' }] },
  { node: 'knowledge.learning.duration', kind: 'scalar', process: 'humanity.schooling', aggregate: 'weighted by people aged 25 and over', label: 'Years of schooling', unit: 'mean years of formal schooling of adults', bounds: [0, 20],
    meaning: 'The average number of years adults aged 25 and over spent in formal schooling.', initial: { value: 0.1, lower: 0, upper: 0.5, why: 'Formal schooling reached few people in 1 CE; recalled, not checked.' } },
  { node: 'beliefs-and-norms.sacred', kind: 'share', series: 'religion', denominator: 'people', question: 'How do the world’s people divide by the religious tradition they belong to?', unit: SHARE_UNIT,
    answers: [
      { key: 'local_traditions', meaning: 'Local and ethnic traditions: the religions of particular peoples and places, including every religion before the traditions named here, and folk and indigenous religions today.' },
      { key: 'hinduism', meaning: 'Hindu traditions.' }, { key: 'buddhism', meaning: 'Buddhist traditions.' }, { key: 'judaism', meaning: 'Judaism.' },
      { key: 'christianity', meaning: 'Christian traditions.' }, { key: 'islam', meaning: 'Islam.' },
      { key: 'chinese_traditions', meaning: 'Chinese religious traditions: ancestral rites, Confucian ritual, Daoism and popular religion, including people who practise them while surveys count them as unaffiliated.' },
      { key: 'other', meaning: 'Other named traditions, such as Zoroastrianism, Jainism and Sikhism.' },
      { key: 'unaffiliated', meaning: 'Belonging to no religion and practising none of the traditions named here.' }],
    remainder: { meaning: 'Unknown: before evidence of ritual, about 100,000 years ago, and wherever the tradition cannot be told.' },
    rule: 'A measure on The sacred, not a dimension: a tradition joins rites and organization with the doctrines in Worldview. Before evidence of ritual, about 100,000 years ago, the division is unknown and is left in the remainder rather than guessed. Run 2 hung it on Worldview.' },
  { node: 'earth.climate', kind: 'scalar', process: 'earth.temperature', aggregate: 'a global measure, not divided by region', label: 'Global temperature', unit: 'degrees Celsius relative to 1850–1900', bounds: [-15, 15],
    meaning: 'Global mean surface temperature, as a difference from the 1850–1900 average.', initial: { value: 0, lower: -0.3, upper: 0.3, why: 'Close to the pre-industrial average in 1 CE in multiproxy reconstructions; recalled, not checked.' } },
  { node: 'earth.climate', kind: 'scalar', process: 'earth.co2', aggregate: 'a global measure, not divided by region', label: 'Carbon dioxide', unit: 'parts per million', bounds: [100, 1000],
    meaning: 'The concentration of carbon dioxide in the atmosphere.', initial: { value: 278, lower: 275, upper: 282, why: 'Antarctic ice cores give about 277 to 280 parts per million around 1 CE; recalled, not checked.' } },
  { node: 'earth.land-and-sea', kind: 'scalar', process: 'earth.sea-level', aggregate: 'a global measure, not divided by region', label: 'Sea level', unit: 'metres relative to 2000', bounds: [-200, 100],
    meaning: 'Global mean sea level, as a difference from the year 2000.', initial: { value: -0.2, lower: -0.5, upper: 0.1, why: 'Sea level in 1 CE was close to its pre-industrial level, about 0.2 metres below 2000; recalled, not checked.' } },
];

// ---------- The filling schedule ----------
// Coarse first: every reading is an average over its interval, so the long readings constrain the short ones. The
// schedule has four nested levels, each block dividing exactly into blocks of the next: the whole span; six long
// blocks; eighteen; and the 77 cells. A share is read for a block only after the block containing it has a reading,
// and its finer readings must average to it (the grammar's mixture law). A quantity is given at a level's boundaries
// only after the boundaries of the level above. This is a construction schedule, not a periodization of history.
const cells = [
  ...[[-320000, -200000], [-200000, -100000], [-100000, -50000], [-50000, -30000], [-30000, -20000], [-20000, -10000]],
  ...Array.from({ length: 9 }, (_, i) => [-10000 + i * 1000, -9000 + i * 1000]),
  ...Array.from({ length: 25 }, (_, i) => [-1000 + i * 100, -900 + i * 100]),
  ...Array.from({ length: 6 }, (_, i) => [1500 + i * 50, 1550 + i * 50]),
  ...Array.from({ length: 15 }, (_, i) => [1800 + i * 10, 1810 + i * 10]),
  ...Array.from({ length: 15 }, (_, i) => [1950 + i * 5, 1955 + i * 5]),
  [2025, NOW],
];
export const schedule = [
  { level: 'A', name: 'the whole span', blocks: [[HUMAN_START, NOW]] },
  { level: 'B', name: 'six long blocks', blocks: [[HUMAN_START, -10000], [-10000, -1000], [-1000, 1500], [1500, 1800], [1800, 1950], [1950, NOW]] },
  { level: 'C', name: 'eighteen blocks', blocks: [[HUMAN_START, -100000], [-100000, -30000], [-30000, -10000], [-10000, -7000], [-7000, -4000], [-4000, -1000],
    [-1000, 0], [0, 500], [500, 1000], [1000, 1500], [1500, 1650], [1650, 1800], [1800, 1850], [1850, 1900], [1900, 1950], [1950, 1975], [1975, 2000], [2000, NOW]] },
  { level: 'D', name: 'the 77 cells', blocks: cells },
];
// Every level must tile the span and divide exactly into the next.
for (const [i, { level, blocks }] of schedule.entries()) {
  for (let j = 0; j < blocks.length; j++) {
    const [a, b] = blocks[j];
    if (!(a < b) || (j > 0 && blocks[j - 1][1] !== a) || (j === 0 && a !== HUMAN_START) || (j === blocks.length - 1 && b !== NOW)) throw new Error(`schedule level ${level} does not tile the span at ${a}`);
    if (i > 0 && !schedule[i - 1].blocks.some(([pa, pb]) => pa <= a && b <= pb)) throw new Error(`block ${a}..${b} of level ${level} crosses a block of level ${schedule[i - 1].level}`);
  }
}
export const grid = cells;

// ---------- Local histories: the same structure, running locally ----------
export const localHistory = {
  recipe: [
    'A place is a Thing with a lifecycle: open it inside its whole by an encapsulation cut (Earth > M49 region > subregion > country > smaller area), with relation region and the lens it is divided by.',
    'Its people are a Thing too: "the people living in X", a member of humanity (and of the people of the larger area), with a lifecycle from the first lasting presence to the present.',
    'Their history uses the same twelve dimensions and the same sub-dimensions as humanity: Events for each, contained in their lifecycle, and the structural processes `<people>.<dimension>` and `<people>.<dimension>.<sub>` in the process decomposition, each a membership view of humanity’s node.',
    'Their leaves ask the same questions about "the people living in X" instead of "the world’s people", with the same answers; region answers are replaced by the subregions of X.',
    'Events that happen there are placed with a located_in binding to the place; a site may also carry coordinates as position processes in a named reference frame.',
    'Readings for the parts must agree with the whole. A share is aggregated within each year, weighting each part by the denominator its leaf declares (people, adults, working people, primary energy), and only then averaged over the years of the interval with equal weight for each year. A quantity is aggregated as its leaf declares: a sum, a ratio of totals, a weighted mean, a maximum, or recomputed from pooled rates. Readings are interval averages, so a check made from them is approximate when the weights change within the interval, and the checker states its tolerance. The engine does not check this.',
  ],
  example: 'Kenya (M49 404) lies in Eastern Africa (014), in Sub-Saharan Africa (202), in Africa (002). Its history is the lifecycle of the place Kenya and of "the people living in Kenya", with the same twelve dimensions as world history.',
};

export const mechanisms = [
  // [handle, concept id suffix, dimensions it couples]
  ['MalthusianTrap', 'malthusian-trap', ['provisioning', 'population']],
  ['DensityRatchet', 'density-ratchet', ['provisioning', 'population', 'habitat']],
  ['SurplusBound', 'surplus-bound', ['provisioning', 'politics', 'habitat']],
  ['DemographicTransition', 'demographic-transition', ['population', 'provisioning', 'knowledge', 'beliefs-and-norms']],
  ['WaveOfAdvance', 'wave-of-advance', ['population', 'habitat']],
  ['InnovationDiffusion', 'innovation-diffusion', ['connection', 'knowledge']],
  ['VirginSoilEpidemic', 'virgin-soil-epidemic', ['connection', 'population']],
  ['Twinflow', 'twinflow', ['connection', 'exchange', 'population', 'security', 'knowledge']],
  ['ExitCage', 'exit-cage', ['habitat', 'politics']],
  ['SecurityDilemma', 'security-dilemma', ['security', 'politics']],
  ['FreeRiderProblem', 'free-rider-problem', ['politics', 'exchange']],
  ['Warsift', 'warsift', ['security', 'politics']],
  ['StructuralDemographicCycle', 'structural-demographic-cycle', ['population', 'politics', 'security']],
  ['DiminishingComplexityReturns', 'diminishing-complexity-returns', ['politics', 'provisioning']],
  ['Sunbound', 'sunbound', ['provisioning', 'habitat']],
  ['CumulativeCulture', 'cumulative-culture', ['knowledge', 'population', 'connection']],
];
