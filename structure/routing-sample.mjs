// The routing sample for the run-2 revision-5 carve, written BEFORE the new carve was drafted.
// Fields come from two outside lists, read raw on 2026-10-08:
//   W1 = Wikipedia, "Outline of history", sections "Historical disciplines" and "History by field"
//        (raw wikitext, sha256 90805c9960b65a587cd2ab9f09dd8881d6c5c69adddce760c9f6da7da9889215)
//   W2 = Wikipedia, "History", section "Areas of study / By theme"
//        (raw wikitext, sha256 871458681f891583b8f6b09d4604b7705ff255180f7c98d23815c53512cac0d5)
// For each field the modeler wrote concrete claims of change in that field's own terms, spread over eras and
// regions. The facts are recalled, not checked: the sample is used only to route claims through the carve, never as
// values. Its weakness: the modeler who carves also wrote it (RoutingSanityCheck#71bd, failure mode "tailored
// sample"); a blind sample by another model is the stronger test.
export const sample = [
  // Political history (W1, W2): the organization of power, how power structures arise, factions, parties, leaders, policies
  ['political', 'W2', 'The first states arose in Mesopotamia and Egypt in the late fourth millennium BCE, with kings ruling cities and then a unified Nile valley.'],
  ['political', 'W2', 'In 1868 the Meiji Restoration ended the Tokugawa shogunate and returned formal rule to the Japanese emperor.'],
  ['political', 'W2', 'Factions of optimates and populares contested power in the late Roman Republic before it gave way to rule by emperors under Augustus.'],
  ['political', 'W2', 'Mass political parties formed in Europe in the late nineteenth century, such as the German Social Democratic Party.'],
  ['political', 'W2', 'The Mandate of Heaven justified Zhou rule in China after 1046 BCE and was invoked by later dynasties to explain their rise and fall.'],
  ['political', 'W2', 'The Qin unified China in 221 BCE and replaced hereditary fiefs with commanderies run by appointed officials.'],
  ['political', 'W2', 'Imperial China recruited officials through civil service examinations from the Sui and Tang dynasties to 1905.'],
  ['political', 'W2', 'The Ottoman sultans killed their brothers on accession to prevent civil wars over succession, a practice ended in the early seventeenth century.'],
  ['political', 'W2', 'The French Revolution of 1789 abolished the monarchy within three years and proclaimed a republic.'],
  ['political', 'W2', 'The Soviet Union dissolved in 1991 into fifteen independent states.'],
  ['political', 'W2', 'Many forager bands decided matters by discussion among adults and kept would-be leaders in check by ridicule.'],
  // Archontology (W1): offices and positions
  ['archontology', 'W1', 'The office of consul in Rome was held by two men elected for one year at a time.'],
  // Constitutional history (W2)
  ['constitutional', 'W2', 'Magna Carta in 1215 bound the English king to rule according to law and to consult his barons on extraordinary taxes.'],
  ['constitutional', 'W2', 'The United States Constitution of 1787 divided power among a president, a congress and courts.'],
  // Diplomatic history (W1, W2): international relations, treaties, negotiations, international organizations
  ['diplomatic', 'W2', 'The Peace of Westphalia in 1648 ended the Thirty Years War and recognized the sovereignty of the German princes.'],
  ['diplomatic', 'W2', 'The Amarna letters record correspondence among the great kings of Egypt, Babylon, Mitanni and Hatti in the fourteenth century BCE, who addressed each other as brothers.'],
  ['diplomatic', 'W2', 'Neighbouring states sent tribute missions to the Chinese court for centuries, receiving recognition and trade in return.'],
  ['diplomatic', 'W2', 'The United Nations was founded in 1945 with 51 member states.'],
  ['diplomatic', 'W2', 'The Congress of Vienna in 1815 redrew the map of Europe after Napoleon and set up a concert of the great powers.'],
  // Military history (W1, W2): armed conflict, battles, causes of war, technology, strategy, logistics, institutions
  ['military', 'W2', 'Chariot warfare spread across western Asia and Egypt in the second millennium BCE.'],
  ['military', 'W2', 'Gunpowder weapons spread from China across Eurasia from the thirteenth century.'],
  ['military', 'W2', 'The First World War killed about 9 to 11 million soldiers.'],
  ['military', 'W2', 'Napoleonic France raised mass conscript armies after the levée en masse of 1793.'],
  ['military', 'W2', 'Mass graves at Talheim and Schöneck-Kilianstädten show the killing of whole communities in Neolithic Europe around 5000 BCE.'],
  ['naval', 'W1', 'The Battle of Salamis in 480 BCE was won by the Athenian fleet against the Persian navy.'],
  // Economic history (W2): production, exchange, consumption; land, labour, capital; distribution of income and wealth; inflation
  ['economic', 'W2', 'Silver from Potosí and Mexico flowed to Europe and China in the sixteenth century, and prices rose across Europe.'],
  ['economic', 'W2', 'Real wages of English labourers rose sharply after the Black Death.'],
  ['economic', 'W2', 'The share of income received by the richest tenth of the population fell in many Western countries between 1914 and 1950.'],
  ['economic', 'W2', 'The Great Depression after 1929 cut world industrial output by about a third.'],
  ['economic', 'W2', 'Enclosure turned English open fields and commons into private holdings between the sixteenth and nineteenth centuries.'],
  ['economic', 'W2', 'China’s economy grew about tenfold in real terms between 1978 and 2010 after market reforms.'],
  ['economic', 'W2', 'Hyperinflation in Germany in 1923 destroyed the savings of the middle class.'],
  ['economic', 'W2', 'Soviet collectivization after 1929 placed peasant land in collective farms.'],
  ['economic', 'W2', 'Hunter-gatherers in many societies shared large game across the whole band.'],
  // Business history (W1, W2)
  ['business', 'W1', 'The Dutch East India Company, founded in 1602, issued shares that were traded on the Amsterdam exchange.'],
  ['business', 'W1', 'Assyrian merchant families ran a tin and textile trade between Assur and Kanesh in Anatolia around 1900 BCE.'],
  // Money and banking (W1, culture)
  ['money', 'W1', 'Coins were first struck in Lydia around 600 BCE.'],
  ['banking', 'W1', 'Italian banking houses such as the Medici used bills of exchange across Europe in the fifteenth century.'],
  ['money', 'W1', 'Song China issued the first government paper money in the eleventh century.'],
  // Industrial history and agriculture (W1, technology)
  ['industrial', 'W1', 'Factories with water-powered and then steam-powered spinning machines spread in Lancashire after the 1770s.'],
  ['agriculture', 'W1', 'Wheat and barley were domesticated in the Fertile Crescent by about 8500 BCE.'],
  ['agriculture', 'W1', 'Maize was domesticated from teosinte in southern Mexico about 9,000 years ago.'],
  ['agriculture', 'W1', 'The Green Revolution’s high-yielding wheat and rice varieties raised grain yields in South Asia from the late 1960s.'],
  // Social history (W2): everyday life, family structures, community, education; classes, races, genders, age groups; poverty, disease, crime
  ['social', 'W2', 'The caste system ranked Indian society into hereditary groups that married within themselves.'],
  ['social', 'W2', 'Serfdom bound Russian peasants to the land until its abolition in 1861.'],
  ['social', 'W2', 'A middle class of professionals and businessmen grew in nineteenth-century British cities.'],
  ['social', 'W2', 'Poor laws in England from 1601 made parishes responsible for relieving their poor.'],
  ['social', 'W2', 'Slavery in the Americas held about 12 million Africans carried across the Atlantic and their descendants.'],
  ['social', 'W2', 'Apartheid in South Africa from 1948 classified people by race and segregated where they could live and work.'],
  ['family', 'W2', 'In north-western Europe from the sixteenth century, women married late, in their mid-twenties, and many never married.'],
  ['family', 'W2', 'Patrilineal clans with ancestral halls organized kinship in southern China under the Ming and Qing.'],
  ['family', 'W2', 'Average household size in Western countries fell below three people in the late twentieth century.'],
  ['age', 'W2', 'Pensions for the elderly were introduced in Germany in 1889.'],
  ['age', 'W2', 'Child labour in British factories was restricted by the Factory Act of 1833.'],
  // Women's history and gender history (W1, W2)
  ['women', 'W1', 'New Zealand gave women the vote in national elections in 1893.'],
  ['women', 'W1', 'Footbinding of girls spread among Chinese elites from the Song dynasty and was banned in 1912.'],
  ['women', 'W1', 'Women’s participation in paid work outside the home rose in most rich countries after 1950.'],
  ['lgbtq', 'W1', 'Homosexual acts were decriminalized in England and Wales in 1967.'],
  ['rape', 'W1', 'Marital rape was not a crime in most legal systems until the late twentieth century.'],
  // Cultural history (W1, W2)
  ['cultural', 'W1', 'Coffeehouses spread from the Ottoman Empire to European cities in the seventeenth century as places of conversation and news.'],
  ['cultural', 'W1', 'Hellenistic Greek culture spread across the Near East after Alexander’s conquests.'],
  ['cooking', 'W1', 'Chili peppers from the Americas entered the cooking of India, China and Korea after the sixteenth century.'],
  ['cooking', 'W1', 'Cooking with fire is attested at least 400,000 years ago and may be much older.'],
  ['games', 'W1', 'Chess spread from India to Persia by the sixth century and later to Europe.'],
  ['sport', 'W1', 'The Olympic Games were held at Olympia from 776 BCE and revived in Athens in 1896.'],
  ['sport', 'W1', 'Association football’s rules were codified in England in 1863 and the game spread worldwide.'],
  ['journalism', 'W1', 'Printed weekly newspapers appeared in Strasbourg and Antwerp in the early seventeenth century.'],
  ['literature', 'W1', 'The Epic of Gilgamesh was written down in Mesopotamia in the early second millennium BCE.'],
  ['literature', 'W1', 'The novel became a popular form in eighteenth-century England.'],
  ['poetry', 'W1', 'Tang dynasty China produced the poetry of Li Bai and Du Fu in the eighth century.'],
  // Art history (W1, W2): works of art, artistic activities, styles and movements
  ['art', 'W2', 'People painted animals on the walls of Chauvet cave in France about 36,000 years ago.'],
  ['art', 'W2', 'Shell beads were worn in North Africa and the Levant by about 100,000 years ago.'],
  ['art', 'W2', 'Linear perspective was developed by Florentine painters and architects in the fifteenth century.'],
  ['art', 'W2', 'Impressionist painters exhibited in Paris from 1874.'],
  ['music', 'W1', 'Bone flutes were made in south-western Germany about 40,000 years ago.'],
  ['music', 'W1', 'Jazz arose in New Orleans in the early twentieth century and spread through recordings.'],
  ['theatre', 'W1', 'Athenian tragedy was performed at the festival of Dionysus from the sixth century BCE.'],
  ['film', 'W1', 'Cinema spread from 1895, and by the 1930s Hollywood studios produced hundreds of films a year.'],
  ['dance', 'W1', 'Classical Indian dance forms such as Bharatanatyam were taught in temples and courts.'],
  ['architecture', 'W1', 'Gothic cathedrals with pointed arches and flying buttresses were built in France from the twelfth century.'],
  ['architecture', 'W1', 'Monumental stone enclosures were built at Göbekli Tepe about 9500 BCE by people who did not yet farm.'],
  // Intellectual history, philosophy (W1, W2): ideas, concepts, philosophies, ideologies, beliefs of ordinary people
  ['intellectual', 'W2', 'The Enlightenment argued in eighteenth-century Europe that reason and natural rights should judge institutions.'],
  ['intellectual', 'W2', 'Nationalism spread across Europe in the nineteenth century, holding that each nation should have its own state.'],
  ['intellectual', 'W2', 'Marxist socialism became the official ideology of states ruling a third of humanity by the 1950s.'],
  ['philosophy', 'W1', 'Confucius taught in the fifth century BCE that order rests on ritual propriety and the cultivation of virtue.'],
  ['philosophy', 'W1', 'Greek philosophers from the sixth century BCE explained nature by natural causes rather than the acts of gods.'],
  // History of science and mathematics (W1, W2)
  ['science', 'W1', 'Galileo used a telescope in 1609 to observe the moons of Jupiter.'],
  ['science', 'W1', 'Darwin’s Origin of Species in 1859 explained the diversity of life by natural selection.'],
  ['science', 'W1', 'Scientific societies such as the Royal Society, founded in 1660, published experiments for others to repeat.'],
  ['mathematics', 'W1', 'A place-value decimal system with zero developed in India and spread through the Islamic world to Europe.'],
  // Religious history (W1, W2)
  ['religion', 'W1', 'Buddhism spread from India to Central Asia, China, Korea and Japan between the first and seventh centuries.'],
  ['religion', 'W1', 'Islam spread across the Middle East and North Africa within a century of 632.'],
  ['religion', 'W1', 'The Protestant Reformation from 1517 split Western Christianity.'],
  ['religion', 'W1', 'The Neanderthals and early modern humans of the Levant buried some of their dead between about 120,000 and 90,000 years ago.'],
  ['religion', 'W1', 'Christian monasteries organized under the Rule of Saint Benedict spread across Western Europe from the sixth century.'],
  ['religion', 'W1', 'The share of people in Western Europe who attend religious services weekly fell sharply after 1960.'],
  ['religion', 'W1', 'The Aztecs sacrificed captives to their gods at the Templo Mayor in Tenochtitlan.'],
  // Legal history and criminal justice (W1, W2)
  ['legal', 'W2', 'Hammurabi’s code of laws was inscribed in Babylon around 1754 BCE.'],
  ['legal', 'W2', 'The Napoleonic Code of 1804 was adopted or imitated across Europe and Latin America.'],
  ['legal', 'W2', 'Germanic law codes set wergild, a payment to the victim’s kin, as compensation for killing.'],
  ['criminal-justice', 'W1', 'London created the Metropolitan Police in 1829.'],
  ['criminal-justice', 'W1', 'Prisons replaced public corporal punishment as the main penalty in Europe and North America in the nineteenth century.'],
  ['crime', 'W2', 'Homicide rates in Western Europe fell roughly tenfold between the late Middle Ages and the twentieth century.'],
  // Environmental history (W1, W2)
  ['environmental', 'W2', 'Most large mammals of the Americas went extinct around 13,000 to 11,000 years ago, after people arrived.'],
  ['environmental', 'W2', 'The Little Ice Age brought cooler temperatures to much of the Northern Hemisphere between about 1300 and 1850.'],
  ['environmental', 'W2', 'Easter Island’s palm forest disappeared after Polynesian settlement.'],
  ['environmental', 'W2', 'Atmospheric carbon dioxide rose from about 280 parts per million before industrialization to over 420 by the 2020s.'],
  // Urban history (W1, W2)
  ['urban', 'W1', 'Uruk in Mesopotamia grew to perhaps 40,000 people by about 3000 BCE.'],
  ['urban', 'W1', 'More than half of the world’s people lived in cities by about 2007.'],
  ['urban', 'W1', 'Paris was rebuilt with wide boulevards and sewers under Haussmann in the 1850s and 1860s.'],
  // Technology, transport, communication, engineering, measurement, cartography (W1)
  ['technology', 'W1', 'Iron smelting spread across Anatolia and the Near East after about 1200 BCE.'],
  ['technology', 'W1', 'The steam engine was improved by Watt in the 1770s.'],
  ['technology', 'W1', 'Pottery was made in East Asia about 20,000 years ago, long before farming.'],
  ['transport', 'W1', 'Railways spread across Britain in the 1840s.'],
  ['transport', 'W1', 'Container shipping from the late 1950s cut the cost of moving goods by sea.'],
  ['transport', 'W1', 'The horse was domesticated on the western Eurasian steppe by about 2200 BCE and spread rapidly for riding and chariots.'],
  ['aviation', 'W1', 'Air passengers exceeded one billion a year in the 1980s.'],
  ['communication', 'W1', 'Writing appeared in Mesopotamia around 3200 BCE.'],
  ['communication', 'W1', 'Gutenberg’s movable-type printing in the 1450s spread printing presses across Europe within fifty years.'],
  ['communication', 'W1', 'The electric telegraph cut messages between London and India from weeks to minutes after 1870.'],
  ['communication', 'W1', 'The internet reached more than half of the world’s people by 2019.'],
  ['cartography', 'W1', 'Mercator published his world map projection for navigation in 1569.'],
  ['measurement', 'W1', 'The metric system was introduced in revolutionary France in the 1790s.'],
  ['computing', 'W1', 'Electronic digital computers were built from the 1940s.'],
  ['artificial-intelligence', 'W1', 'Large language models came into everyday use from 2022.'],
  // Medicine (W1, W2)
  ['medicine', 'W1', 'Smallpox was declared eradicated in 1980 after a worldwide vaccination campaign.'],
  ['medicine', 'W1', 'The Black Death killed perhaps a third to a half of Europe’s people between 1347 and 1351.'],
  ['medicine', 'W1', 'Antibiotics such as penicillin came into use in the 1940s.'],
  ['medicine', 'W1', 'Old World diseases killed most of the indigenous people of the Americas in the century after 1492.'],
  // Education (W1, W2)
  ['education', 'W1', 'Universities were founded in Bologna, Paris and Oxford from the late eleventh century.'],
  ['education', 'W1', 'Prussia made schooling compulsory in the eighteenth century, and most countries had followed by the twentieth.'],
  // Linguistics (W1)
  ['linguistics', 'W1', 'Bantu languages spread across central, eastern and southern Africa with farming between about 1000 BCE and 500 CE.'],
  ['linguistics', 'W1', 'Latin gave rise to the Romance languages after the fall of the Western Roman Empire.'],
  ['linguistics', 'W1', 'English became the main language of international science and business in the twentieth century.'],
  // Psychohistory, and social history's experience of groups (W1, W2)
  ['psychohistory', 'W1', 'Accounts of romantic love as the basis of marriage became common in Western Europe in the eighteenth and nineteenth centuries.'],
  // World history and people's history: transnational patterns (W1, W2)
  ['world', 'W1', 'People of the modern human lineage spread out of Africa and reached Sahul (Australia and New Guinea) by at least 50,000 years ago.'],
  ['world', 'W1', 'The Columbian Exchange after 1492 carried crops, animals and diseases between the hemispheres.'],
  ['world', 'W1', 'Polynesian voyagers settled remote Pacific islands and reached New Zealand around 1250 to 1300.'],
  ['world', 'W1', 'About 50 million Europeans emigrated overseas between 1815 and 1930.'],
  ['world', 'W1', 'Silk Road trade connected China with the Mediterranean through Central Asia from the second century BCE.'],
  // Archaeology (W1): material remains of past cultures
  ['archaeology', 'W1', 'Stone tool industries changed from large cutting tools to smaller prepared-core flakes and blades in Africa after about 300,000 years ago.'],
  ['archaeology', 'W1', 'Dogs were domesticated from wolves by about 15,000 years ago.'],
];
