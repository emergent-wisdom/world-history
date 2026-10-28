# The laws pass: what the laws find on the recorded series

Recorded values are those of the world-history model at revision 566 (holder claude). Derived values are the laws applied to them. Bands carry every input's lower and upper value, and the births factor's range. A finding needs the central values to disagree beyond what the bands and the bridging parameters can explain.

## Parameters of the bridging laws

- `energy.oil` = 42.3: GJ per tonne of crude oil, IPCC 2006 default net calorific value
- `energy.gas` = 48.0: GJ per tonne of natural gas, IPCC 2006 default net calorific value
- `carbon.gas` = 0.734: tonnes of carbon per tonne of natural gas: 48.0 GJ x 15.3 kg C per GJ (IPCC 2006)
- `ppm` = 2.124: billion tonnes of carbon per ppm of CO2 in the air
- `births.per-woman` = 7.725: births per 1,000 people a year per child per woman, the median of 25 periods in 1950-2025 on the model's own values (range 5.83 to 9.59)

The laws also read these recorded series in place of constants: `h.earth.resources.fossil.coal.energy` (Energy in a tonne of coal); `h.earth.resources.fossil.coal.carbon` (Carbon in a tonne of coal); `h.earth.resources.fossil.oil.carbon` (Carbon released by a tonne of oil); `h.co2.human.land-use` (Carbon released by land use); `h.co2.human.airborne-fraction` (Share of emitted carbon kept in the air); `h.alive.crisis` (Crises the model does not date).

## 1. Growth = births - deaths (law.identity.growth-from-births-and-deaths)

Births are children per woman times the births factor; deaths are the five causes, violent deaths and, where recorded, the crises the model does not date. Growth in % a year: the implied rate is its time average over each recorded interval, and each era weights its intervals by length:

| Era | Years | Intervals | Recorded | Implied | Gap |
|---|---|---|---|---|---|
| before farming | -300000 to -10000 | 29 | 0.0009 | 0.6199 | 0.619 |
| farming spreads | -10000 to -3000 | 8 | 0.0332 | 0.5164 | 0.4832 |
| antiquity | -3000 to 500 | 16 | 0.044 | 0.5212 | 0.4772 |
| middle ages | 500 to 1500 | 14 | 0.0786 | 0.5025 | 0.4239 |
| early modern | 1500 to 1750 | 12 | 0.2155 | 0.6699 | 0.4544 |
| industrial | 1750 to 1950 | 36 | 0.576 | 0.9786 | 0.4026 |
| since 1950 | 1950 to 2026 | 25 | 1.5822 | 1.6576 | 0.0755 |

The biggest single gaps (from, to, recorded, implied): 1960 to 1961.9: 1.202 vs 2.137; 1961.9 to 1962: 3.221 vs 2.297; 1346 to 1353: -1.858 vs -0.969; 1914.6 to 1918: 0.16 vs 0.876; 1945.7 to 1946: 0.841 vs 1.526; -14600 to -13000: 0.008 vs 0.689; -13000 to -12000: 0.009 vs 0.689; -17000 to -14600: 0.008 vs 0.662

Bands overlap in every interval but 1 (1961.9 to 1962: 3.2206 vs 2.2966), because the births factor's range (calibrated 1950-2025) is wide; the central gap is systematic before 1950.

## 2. Deaths from the normal causes, against the rate normal-year life expectancy implies in a stationary population

308 dates compared. They disagree beyond their bands at 47 dates (time, deaths from the normal causes, stationary rate, growth % a year): 1958: 1619 vs 2018 (growth 1.832); 1962: 1527 vs 1957 (growth 3.221); 1962.6: 1511 vs 1939 (growth 2.378); 1963.71: 1483 vs 1906 (growth 2.378); 1964.4: 1465 vs 1886 (growth 2.378); 1965: 1449 vs 1869 (growth 2.378); 1965.6: 1439 vs 1855 (growth 2.108); 1966.19: 1405 vs 1841 (growth 2.108); 1966.88: 1366 vs 1825 (growth 2.108); 1967.6: 1335 vs 1807 (growth 2.061); 1968.08: 1315 vs 1795 (growth 2.061); 1969.85: 1238 vs 1758 (growth 1.98); 1970: 1231 vs 1754 (growth 1.98); 1971.45: 1215 vs 1737 (growth 1.926); 1975.19: 1136 vs 1692 (growth 1.926); 1976: 1121 vs 1684 (growth 1.828); 1979.02: 1080 vs 1650 (growth 1.703); 1979.5: 1075 vs 1645 (growth 1.645); 1980: 1070 vs 1639 (growth 1.645); 1980.72: 1058 vs 1634 (growth 1.808); 1981: 1054 vs 1631 (growth 1.808); 1982.6: 1028 vs 1619 (growth 1.808); 1984.5: 998 vs 1604 (growth 1.808); 1985: 990 vs 1600 (growth 1.808); 1986: 978 vs 1592 (growth 1.825); 1986.96: 966 vs 1585 (growth 1.825); 1988.9: 943 vs 1571 (growth 1.825); 1989: 942 vs 1570 (growth 1.825); 1990: 930 vs 1562 (growth 1.744); 1992: 936 vs 1550 (growth 1.497); 1994: 943 vs 1538 (growth 1.497); 1996: 890 vs 1527 (growth 1.497); 1997.5: 878 vs 1514 (growth 1.379); 1999.1: 866 vs 1500 (growth 1.379); 2000: 859 vs 1493 (growth 1.379); 2001.75: 845 vs 1484 (growth 1.286); 2002: 844 vs 1481 (growth 1.27); 2006: 815 vs 1460 (growth 1.312); 2007.2: 807 vs 1450 (growth 1.247); 2010: 790 vs 1429 (growth 1.247); 2014: 755 vs 1399 (growth 1.085); 2016.77: 738 vs 1394 (growth 1.189); 2020: 796 vs 1389 (growth 1.189); 2020.95: 876 vs 1407 (growth 0.874); 2021: 880 vs 1408 (growth 0.874); 2023.29: 811 vs 1368 (growth 0.874); 2025: 760 vs 1361 (growth 0.874)

The stationary rate holds only where growth is near zero, so the differences after 1950 are expected. Before 1950 they disagree at 0 dates. The normal causes leave out the crises the model does not date (h.alive.crisis), which life expectancy in normal years leaves out too.

## 3. Energy in fossil fuels taken, against energy from stores

Stores include nuclear, so they should be at least the fossil energy. Since 1900 (year, stores, fossil energy): 1900: 12.4 vs 12.2; 1910: 17.3 vs 16.9; 1914.6: 18.6 vs 17.1; 1918: 17.4 vs 17.2; 1920: 19 vs 18.9; 1930: 20.9 vs 20.8; 1936: 22.2 vs 21.8; 1940: 23.1 vs 22.8; 1941.5: 23.5 vs 22.5; 1941.93: 23.6 vs 22.5; 1943.2: 23.9 vs 22.3; 1944: 24.2 vs 22.2; 1945: 21.9 vs 22.0; 1946: 22.7 vs 23.4; 1950: 28.0 vs 28.8; 1960: 38.1 vs 37.4; 1962: 40.6 vs 40.2; 1965: 44.2 vs 44.4; 1966.88: 46.6 vs 47.8; 1968.08: 48.0 vs 49.9; 1970: 52.2 vs 53.4; 1975.19: 55.9 vs 57.4; 1976: 57.6 vs 58.0; 1979.02: 60.7 vs 59.3; 1980: 59.1 vs 59.8; 1985: 57.9 vs 56.0; 1990: 60.4 vs 57.3; 1996: 54.4 vs 55.2; 2000: 54.5 vs 54.5; 2001.75: 56.5 vs 56.3; 2006: 61.5 vs 60.5; 2010: 63.2 vs 61.0; 2014: 63.9 vs 63.1; 2020: 63.0 vs 59.0; 2025: 64.0 vs 61.0

Dates where fossil energy exceeds stores beyond the bands: none.

## 4. CO2 added by people, against fossil carbon kept in the air

Each row: interval, recorded rise in ppm a year, the rise that fossil and land-use carbon explain at the recorded airborne fraction, and their ratio:

| From | To | Recorded | Carbon explains | Ratio |
|---|---|---|---|---|
| 1730 | 1750 | 0.025 | 0.0132 | 0.53 |
| 1750 | 1760 | 0.05 | 0.015 | 0.3 |
| 1760 | 1780 | 0.025 | 0.017 | 0.68 |
| 1780 | 1789 | 0.2 | 0.019 | 0.09 |
| 1789 | 1800 | 0.2 | 0.0203 | 0.1 |
| 1800 | 1808.2 | 0.0488 | 0.0256 | 0.52 |
| 1808.2 | 1820 | 0.0508 | 0.0366 | 0.72 |
| 1820 | 1840 | 0.05 | 0.0547 | 1.09 |
| 1840 | 1850 | 0.1 | 0.0724 | 0.72 |
| 1850 | 1859 | 0.0 | 0.0852 | None |
| 1859 | 1862 | 0.2333 | 0.0945 | 0.41 |
| 1862 | 1865 | 0.2667 | 0.0984 | 0.37 |
| 1865 | 1870 | 0.26 | 0.1038 | 0.4 |
| 1870 | 1880 | 0.24 | 0.128 | 0.53 |
| 1880 | 1890 | 0.28 | 0.169 | 0.6 |
| 1890 | 1900 | 0.2 | 0.213 | 1.07 |
| 1900 | 1910 | 0.4 | 0.2655 | 0.66 |
| 1910 | 1914.6 | 0.3043 | 0.2931 | 0.96 |
| 1914.6 | 1918 | 0.2941 | 0.2962 | 1.01 |
| 1918 | 1920 | 0.3 | 0.3023 | 1.01 |
| 1920 | 1929.8 | 0.398 | 0.3315 | 0.83 |
| 1929.8 | 1930 | 0.5 | 0.3557 | 0.71 |
| 1930 | 1936 | 0.3 | 0.3676 | 1.23 |
| 1936 | 1940 | 0.3 | 0.388 | 1.29 |
| 1940 | 1941.5 | 0.0667 | 0.3967 | 5.95 |
| 1941.5 | 1941.93 | 0.0 | 0.3964 | None |
| 1941.93 | 1942.12 | 0.0 | 0.3962 | None |
| 1942.12 | 1943.2 | 0.0926 | 0.3959 | 4.28 |
| 1943.2 | 1944 | 0.0 | 0.3954 | None |
| 1944 | 1945 | 0.1 | 0.395 | 3.95 |
| 1945 | 1945.7 | 0.1429 | 0.4011 | 2.81 |
| 1945.7 | 1946 | 0.3333 | 0.4099 | 1.23 |
| 1946 | 1946.5 | 0.2 | 0.4174 | 2.09 |
| 1946.5 | 1948 | 0.1333 | 0.4363 | 3.27 |
| 1948 | 1950 | 0.1 | 0.4695 | 4.69 |
| 1950 | 1954.2 | 0.5952 | 0.5305 | 0.89 |
| 1954.2 | 1955 | 0.25 | 0.5809 | 2.32 |
| 1955 | 1960 | 0.66 | 0.652 | 0.99 |
| 1960 | 1962 | 0.6 | 0.7397 | 1.23 |
| 1962 | 1965 | 0.6 | 0.806 | 1.34 |
| 1965 | 1966.88 | 1.2234 | 0.8942 | 0.73 |
| 1966.88 | 1968.08 | 1.1667 | 0.9674 | 0.83 |
| 1968.08 | 1970 | 1.1979 | 1.046 | 0.87 |
| 1970 | 1975.19 | 1.0019 | 1.1871 | 1.18 |
| 1975.19 | 1976 | 0.9877 | 1.2986 | 1.31 |
| 1976 | 1979.02 | 1.755 | 1.37 | 0.78 |
| 1979.02 | 1980 | 1.7347 | 1.4452 | 0.83 |
| 1980 | 1985 | 1.4 | 1.5409 | 1.1 |
| 1985 | 1989 | 1.6 | 1.594 | 1.0 |
| 1989 | 1990 | 1.6 | 1.5639 | 0.98 |
| 1990 | 1996 | 1.4167 | 1.5202 | 1.07 |
| 1996 | 2000 | 1.875 | 1.5554 | 0.83 |
| 2000 | 2001.75 | 2.0 | 1.6517 | 0.83 |
| 2001.75 | 2006 | 2.0 | 1.8291 | 0.91 |
| 2006 | 2010 | 2.0 | 2.0449 | 1.02 |
| 2010 | 2014 | 2.0 | 2.2173 | 1.11 |
| 2014 | 2020 | 2.6667 | 2.2647 | 0.85 |
| 2020 | 2025 | 2.6 | 2.3135 | 0.89 |

## 5. Bounds

- SurplusBound#7fe3 (towns at most those outside food-getting): 344 dates, violations none; the slack (outside food-getting but not in towns) runs 3.0 to 21.1% of people.
- The largest town at most all town dwellers: 116 dates, from the start of referent.towns, violations none. The share ranges 0.779 to 13.889%.
- The largest settlement exceeds the town dwellers the model counts at 29 dates up to -6300, all before towns: at 25 it counts none, and at 4 fewer (time: largest settlement against town dwellers, thousand people): -9700: 0.8 against 0.046; -9500: 1 against 0.096; -7900: 3 against 0.68; -6300: 6 against 5.5. There the largest settlement is counted as a village.
- Before towns (town share under 0.1%), the model still records a largest settlement (time, thousand people): -300000: 0.1; -253000: 0.1; -213000: 0.1; -180000: 0.1; -151000: 0.1; -130000: 0.1; -127000: 0.1; -110000: 0.1; -100000: 0.1; -89000: 0.1; -75000: 0.1; -60000: 0.1; -53000: 0.1; -50000: 0.1; -44000: 0.12; -37000: 0.15; -31000: 0.15; -26000: 0.2; -21000: 0.15; -20000: 0.2; -17700: 0.15; -14600: 0.2; -13000: 0.24; -12000: 0.3; -10000: 0.5; -9700: 0.8; -9500: 1; -7900: 3; -6300: 6. The two processes count settlements differently there.

## 6. By construction

- World output = people x output per person: 129 dates, worst gap 2.0126% at -200. One was computed from the others, so this confirms consistency and discovers nothing.

## The births factor's calibration (1950-2025, from the model's own values)

Intervals (from, to, factor): 1950 to 1954.2: 7.90; 1954.2 to 1959: 7.18; 1959 to 1960: 7.66; 1960 to 1961.9: 5.83; 1961.9 to 1962: 9.59; 1962 to 1965: 7.72; 1965 to 1966.88: 7.04; 1966.88 to 1968.08: 6.90; 1968.08 to 1970: 6.71; 1970 to 1975.19: 6.88; 1975.19 to 1976: 7.05; 1976 to 1979.02: 7.04; 1979.02 to 1980: 7.24; 1980 to 1985: 7.88; 1985 to 1989: 8.16; 1989 to 1990: 8.07; 1990 to 1996: 7.89; 1996 to 2000: 8.12; 2000 to 2001.75: 7.96; 2001.75 to 2002: 7.92; 2002 to 2006: 8.13; 2006 to 2010: 7.88; 2010 to 2014: 7.28; 2014 to 2020: 8.05; 2020 to 2025: 7.54
