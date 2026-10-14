// History as numbers: a tree of processes, every node with guessed values over time.
// Grows without limit: any node can be opened into children, any node can take values at more years
// (`more: {year: value}`), and places and people will get the same tree later.
// Every value is a guess to be improved. Tags: sketch (rough, before 1500), inferred (recalled from
// well-known estimates, not yet checked), source (checked against a source read). Nothing here is checked yet.
// Values given as a list follow the default years Y; `anchors` are interpolated onto Y.
const Y = [-300000, -100000, -50000, -20000, -10000, -5000, -3000, -1000,
  1, 500, 1000, 1300, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850,
  1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2025];

const n = (id, label, unit, values, rest = {}) => ({ id, label, unit, values, ...rest });
const zeros = (k) => Array(k).fill(0);

const religion = {
  '-300000': [100, 0, 0, 0, 0, 0, 0, 0], '-1000': [95, 3, 0, 2, 0, 0, 0, 0], 1: [55, 15, 8, 18, 0.1, 0, 3.9, 0],
  500: [45, 17, 12, 18, 6, 0, 2, 0], 1000: [30, 17, 13, 20, 12, 6, 2, 0], 1300: [25, 17, 10, 21, 16, 9, 2, 0],
  1500: [23, 16, 8, 23, 18, 10, 2, 0], 1600: [20, 16, 8, 24, 19, 11, 2, 0], 1700: [18, 16, 8, 25, 20, 11, 2, 0],
  1800: [15, 15, 8, 27, 22, 11, 2, 0], 1850: [13, 14, 8, 26, 25, 12, 2, 0], 1900: [10, 13, 8, 21, 34, 12, 1.8, 0.2],
  1950: [7, 13, 6, 15, 33, 14, 2, 10], 1970: [6, 13, 6, 8, 33, 15, 2, 17], 2000: [5, 14, 7, 6, 32, 21, 2, 13],
  2020: [5, 15, 6, 6, 31, 24, 1.5, 11.5], 2025: [5, 15, 6, 6, 31, 24.5, 1.5, 11],
};
const rel = (i) => Object.fromEntries(Object.entries(religion).map(([y, v]) => [y, v[i]]));
const relNames = ['Local and folk traditions', 'Hindu', 'Buddhist', 'Chinese traditions', 'Christian', 'Muslim', 'Jewish and other', 'No religion'];

window.HISTORY = { years: Y, tree:
n('humanity', 'Humanity', 'billion people', [0.0003, 0.0005, 0.001, 0.002, 0.0044, 0.018, 0.045, 0.11,
  0.232, 0.21, 0.295, 0.39, 0.461, 0.50, 0.554, 0.56, 0.603, 0.79, 0.99, 1.26,
  1.65, 1.75, 1.86, 2.07, 2.30, 2.50, 3.03, 3.70, 4.44, 5.32, 6.15, 6.99, 7.84, 8.19], { log: true,
  why: 'Living people. HYDE and UN figures as recalled; deep-time numbers are guesses of a few hundred thousand people.',
  children: [
  n('ends', 'What matters to people', '', null, { why: 'The ends: what must go well for a human life to go well, in every life ever lived.', children: [
    n('alive', 'Staying alive and well', 'years of life expectancy', [30, 30, 30, 31, 30, 27, 27, 26,
      25, 25, 26, 25, 27, 28, 28, 28, 28, 28, 29, 30, 32, 33, 35, 37, 40, 46, 50, 57, 61, 64, 67, 70, 72, 73.5],
      { why: 'Period life expectancy at birth.', children: [
      n('child-survival', 'Child mortality', '% dying before age 5', [45, 45, 45, 45, 45, 47, 47, 47,
        46, 46, 45, 46, 45, 45, 45, 45, 44, 44, 43, 41, 38, 36, 34, 31, 28, 23, 18, 14, 11.5, 9.3, 7.6, 5.6, 3.9, 3.6]),
      n('health', 'Health', 'cm adult male height', [166, 166, 167, 168, 166, 164, 163, 164,
        165, 166, 167, 167, 166, 166, 166, 165, 165, 165, 164, 165, 165, 165, 166, 166, 166, 167, 168, 168, 169, 169, 170, 171, 171, 171],
        { why: 'Height tracks childhood nutrition and disease; farming first lowered it.' }),
      n('safety', 'Safety', 'violent deaths per 100,000 a year', 'sum', { why: 'Homicide plus war deaths.', children: [
        n('homicide', 'Homicide', 'per 100,000 a year', [30, 30, 30, 30, 30, 30, 30, 30,
          28, 28, 28, 28, 25, 23, 20, 18, 15, 13, 11, 10, 9, 9, 9, 9, 8, 8, 8, 8, 8, 7.5, 7, 6.5, 5.9, 5.8]),
        n('war', 'War', 'deaths per 100,000 a year, averaged to the next date', [40, 40, 40, 40, 40, 40, 30, 30,
          20, 20, 20, 30, 20, 20, 120, 15, 15, 15, 10, 50, 5, 65, 10, 15, 300, 14, 6, 5, 4, 2, 1, 1.5, 2, 2],
          { why: 'Peaks: Ming–Qing transition and the Thirty Years War (1600s), Taiping and other wars (1850s), the two world wars.' }),
      ] }),
    ] }),
    n('sustenance', 'Sustenance and comfort', '% in extreme poverty', [90, 90, 90, 90, 90, 90, 90, 90,
      90, 90, 90, 90, 88, 88, 88, 88, 87, 86, 80, 75, 68, 66, 64, 62, 60, 55, 50, 47, 42, 38, 29, 16, 9.7, 8.5],
      { why: 'Share living on less than about $2 a day in today’s prices; before industry almost everyone.', children: [
      n('food', 'Food', 'kcal per person per day', [2200, 2200, 2200, 2200, 2100, 2000, 2000, 2000,
        2000, 2000, 2000, 1950, 2000, 2000, 2000, 2000, 2050, 2050, 2100, 2150, 2200, 2250, 2200, 2250, 2200, 2250, 2300, 2400, 2500, 2600, 2700, 2800, 2950, 2980]),
      n('warmth', 'Energy for warmth, light and work', 'GJ per person a year, food included', [5, 5, 5, 5, 6, 8, 10, 13,
        15, 15, 16, 17, 18, 18, 18, 18, 19, 19, 20, 23, 30, 33, 34, 36, 38, 42, 52, 64, 70, 68, 68, 77, 78, 80]),
      n('toil', 'Toil', 'hours worked per worker a year', [1800, 1800, 1800, 1800, 1900, 2100, 2200, 2200,
        2300, 2300, 2300, 2300, 2300, 2300, 2350, 2400, 2450, 2500, 2600, 2900, 2800, 2750, 2600, 2500, 2500, 2400, 2350, 2300, 2250, 2200, 2150, 2120, 2100, 2100]),
    ] }),
    n('belonging', 'Belonging', 'people per household', [5, 5, 5, 5, 5, 5.5, 5.5, 5.5,
      5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.4, 5.3, 5.3, 5.2, 5.1, 5.0, 5.0, 5.0, 5.0, 4.8, 4.6, 4.4, 4.1, 3.9, 3.8], { children: [
      n('marriage', 'Marriage', 'women’s mean age at first marriage', [17, 17, 17, 17, 17, 17, 17, 17,
        17, 17, 17, 17.5, 18, 18, 18, 18, 18, 18, 18, 18.5, 19, 19, 19.5, 19.5, 20, 20, 20.5, 21, 21.5, 22.5, 23, 24, 25, 25.3]),
    ] }),
    n('standing', 'Standing', 'income inequality between all people (Gini)', [0.3, 0.3, 0.3, 0.3, 0.3, 0.33, 0.36, 0.4,
      0.42, 0.42, 0.43, 0.43, 0.44, 0.44, 0.45, 0.45, 0.46, 0.47, 0.49, 0.53, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.66, 0.66, 0.68, 0.69, 0.65, 0.62, 0.61], { children: [
      n('rank', 'Hereditary rank', '% living under hereditary ranks or castes', [0, 0, 0, 0, 1, 5, 15, 40,
        50, 50, 50, 48, 45, 45, 45, 45, 45, 44, 42, 38, 25, 24, 23, 22, 20, 15, 8, 6, 5, 4, 4, 3, 3, 3]),
    ] }),
    n('freedom', 'Freedom and power', '% held in bondage', [0, 0, 0, 0, 0, 0.5, 2, 6,
      8, 7, 7, 8, 9, 9, 9, 9, 8, 8, 7, 5, 2, 1.5, 1, 1, 1.2, 0.8, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.35, 0.35],
      { why: 'Slaves, serfs and forced labourers.', children: [
      n('voice', 'Voice', '% living in democracies with broad suffrage', [...zeros(8),
        ...zeros(11), 0.1, 0.5, 1, 8, 8, 6, 15, 30, 30, 30, 45, 55, 55, 50, 48]),
    ] }),
    n('understanding', 'Understanding', '% of adults literate', [0, 0, 0, 0, 0, 0, 0.1, 1,
      3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 21, 24, 28, 32, 38, 42, 50, 62, 70, 75, 82, 85, 87, 87.5], { children: [
      n('schooling', 'Schooling', 'mean years of school, adults', [0, 0, 0, 0, 0, 0, 0, 0.01,
        0.02, 0.02, 0.03, 0.05, 0.1, 0.12, 0.15, 0.18, 0.22, 0.3, 0.4, 0.6, 1.0, 1.2, 1.5, 1.8, 2.2, 2.8, 3.4, 4.0, 4.9, 5.9, 6.8, 7.9, 8.7, 9.0]),
    ] }),
    n('meaning', 'Meaning', '% taking part in regular worship', [80, 80, 80, 80, 80, 80, 80, 80,
      80, 80, 80, 80, 80, 80, 80, 80, 80, 78, 75, 72, 70, 68, 66, 64, 62, 60, 55, 50, 48, 47, 45, 42, 40, 39],
      { why: 'Before about 100,000 years ago nothing is known of ritual; the early values are the weakest guesses here.',
        children: relNames.map((name, i) => n(`religion-${i}`, name, '% of people', null, { anchors: rel(i) })) }),
    n('play', 'Beauty and play', 'hours of leisure a day', [6, 6, 6, 6, 6, 5, 4.5, 4.5,
      4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.3, 4.2, 4, 3.8, 3.5, 3, 3.5, 3.6, 3.8, 4, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.7], { children: [
      n('media', 'Mass media', '% reached regularly by print, radio, TV or internet', [...zeros(8),
        0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.5, 2, 6, 8, 10, 15, 20, 25, 35, 45, 55, 65, 75, 85, 92, 94]),
    ] }),
    n('continuation', 'Continuation', 'children per woman', [5.5, 5.5, 5.5, 5.5, 5.5, 5.8, 5.8, 5.8,
      5.8, 5.8, 5.8, 5.8, 5.8, 5.8, 5.9, 5.9, 5.9, 6.0, 5.9, 5.8, 5.5, 5.4, 5.2, 5.0, 4.8, 4.9, 4.9, 4.8, 3.7, 3.3, 2.7, 2.6, 2.3, 2.2]),
  ] }),
  n('means', 'How people get it', '', null, { why: 'The means: the ways of living that serve the ends.', children: [
    n('provisioning', 'Provisioning', 'output per person, 2011 $', [400, 400, 400, 420, 450, 500, 550, 700,
      800, 750, 800, 850, 1000, 1000, 1000, 1000, 1050, 1100, 1150, 1300, 2200, 2500, 2600, 2900, 3100, 3350, 4400, 5800, 7200, 8100, 9900, 12900, 15500, 17500],
      { log: true, children: [
      n('food-work', 'Food-getting', '% of workers getting food', [97, 97, 97, 97, 96, 95, 92, 88,
        85, 85, 83, 80, 77, 77, 76, 76, 75, 74, 72, 70, 65, 64, 63, 62, 61, 60, 58, 55, 50, 44, 40, 33, 27, 26]),
      n('foraging', 'Foraging', '% of people living by foraging', [100, 100, 100, 100, 99, 60, 40, 15,
        8, 6, 5, 4, 3, 3, 2.5, 2.2, 2, 1.7, 1.5, 1, 0.5, 0.45, 0.4, 0.35, 0.3, 0.2, 0.15, 0.1, 0.08, 0.06, 0.05, 0.04, 0.03, 0.03]),
    ] }),
    n('exchange', 'Exchange', 'trade as % of world output', [0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.5, 0.8,
      1, 1, 1, 1.2, 1.5, 1.7, 2, 2.2, 2.5, 2.8, 3, 5, 9, 11, 9, 8, 6, 8, 10, 12, 18, 19, 25, 28, 26, 28]),
    n('habitat', 'Habitat', '% living in towns and cities', [0, 0, 0, 0, 0, 0.2, 1, 3,
      5, 4, 5, 5.5, 5, 5.5, 6, 6.2, 6.5, 6.8, 7, 9, 16, 18, 20, 23, 26, 29.6, 33.8, 36.6, 39.3, 43, 46.7, 51.7, 56.2, 58], { children: [
      n('largest-city', 'Largest city', 'thousand people', [0.1, 0.1, 0.1, 0.2, 0.5, 5, 40, 150,
        1000, 400, 700, 1000, 670, 700, 700, 750, 800, 900, 1100, 2300, 6500, 7200, 8000, 10000, 11500, 12300, 16700, 23300, 28500, 32500, 34500, 36800, 37400, 37000], { log: true }),
      n('farmland', 'Farmland', '% of ice-free land as crops or pasture', [0, 0, 0, 0, 0, 0.2, 0.4, 1.5,
        3, 3.3, 3.8, 4.5, 5, 5.2, 5.5, 6, 6.5, 7.5, 9, 12, 18, 20, 22, 24, 25.5, 27, 30, 32, 34, 36, 37, 37, 36.5, 36.5]),
    ] }),
    n('connection', 'Connection', 'fastest regular passenger speed, km/h', [5, 5, 5, 5, 5, 5, 8, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 15, 40, 80, 90, 110, 250, 350, 500, 900, 900, 900, 900, 900, 900, 900, 900], { log: true, children: [
      n('internet', 'Internet', '% of people online', [...zeros(8), ...zeros(12), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.05, 6.5, 29, 60, 68]),
    ] }),
    n('politics', 'Politics', '% living under a state', [0, 0, 0, 0, 0, 0, 3, 30,
      60, 55, 60, 70, 80, 81, 82, 84, 85, 87, 90, 92, 97, 97.5, 98, 98.5, 99, 99.5, 99.7, 99.8, 99.85, 99.9, 99.9, 99.95, 99.95, 99.95], { children: [
      n('largest-polity', 'Largest polity', '% of all people', [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 2.5, 5,
        25, 15, 28, 28, 23, 24, 28, 22, 25, 28, 33, 33, 25, 25, 24, 24, 24, 22, 22, 22, 22, 21.5, 20.6, 19.5, 18, 17.5]),
      n('revenue', 'Government', 'state revenue as % of output', [0, 0, 0, 0, 0, 0, 1, 2,
        5, 4, 5, 5, 5, 5, 5, 5.5, 6, 6.5, 7, 7, 9, 10, 14, 16, 25, 20, 22, 25, 28, 29, 29, 29, 30, 31]),
    ] }),
  ] }),
  ] }),
};

window.HISTORY.earth = n('earth', 'The Earth', '°C against 1850–1900', [-3, -2, -4, -6, -1.5, 0.2, 0.1, 0,
  0, -0.1, 0, -0.1, -0.2, -0.2, -0.3, -0.35, -0.3, -0.2, -0.25, -0.1, 0, -0.1, 0, 0.1, 0.2, 0.1, 0.15, 0.2, 0.4, 0.55, 0.7, 0.95, 1.25, 1.45],
  { why: 'Global mean temperature.', children: [
  n('co2', 'Carbon dioxide', 'ppm', [240, 230, 205, 190, 255, 262, 268, 276,
    278, 279, 280, 281, 281, 281, 278, 277, 277, 278, 283, 286, 296, 300, 303, 307, 310, 311, 317, 326, 339, 354, 370, 390, 414, 427]),
  n('sea', 'Sea level', 'm against 2000', [-60, -40, -70, -125, -55, -5, -2, -0.5,
    -0.3, -0.3, -0.25, -0.25, -0.25, -0.25, -0.24, -0.24, -0.23, -0.23, -0.22, -0.2, -0.16, -0.15, -0.14, -0.12, -0.11, -0.1, -0.08, -0.07, -0.05, -0.03, 0, 0.035, 0.075, 0.095]),
  n('forest', 'Forest', '% of land under forest', [43, 45, 42, 35, 45, 46, 46, 45,
    44.5, 44.5, 44, 43.5, 43, 43, 43, 42.5, 42, 41.5, 41, 40, 38, 37.5, 37, 36.5, 36, 35, 34.5, 34, 33.5, 33, 32, 31.5, 31, 31]),
] });
