# The laws pass, Phase 1: what the laws find on the recorded series

Recorded values are those of the world-history model at revision 548 (holder claude). Derived values are the laws applied to them. Bands carry every input's lower and upper value, and the births factor's range. A finding needs the central values to disagree beyond what the bands and the bridging parameters can explain.

## Parameters of the bridging laws

- `energy.coal` = 22.0: GJ per tonne of coal with lignite and peat: IPCC 2006 default net calorific values (bituminous 25.8, sub-bituminous 18.9, lignite 11.9, peat 9.8) weighted roughly by the world mix
- `energy.oil` = 42.3: GJ per tonne of crude oil, IPCC 2006 default net calorific value
- `energy.gas` = 48.0: GJ per tonne of natural gas, IPCC 2006 default net calorific value
- `carbon.coal` = 0.61: tonnes of carbon per tonne of coal with lignite and peat: IPCC 2006 default carbon contents times the calorific values above
- `carbon.oil` = 0.846: tonnes of carbon per tonne of crude oil: 42.3 GJ x 20.0 kg C per GJ (IPCC 2006)
- `carbon.gas` = 0.734: tonnes of carbon per tonne of natural gas: 48.0 GJ x 15.3 kg C per GJ (IPCC 2006)
- `airborne` = 0.44: share of emitted carbon that stays in the air, the Global Carbon Budget average since 1959
- `ppm` = 2.124: billion tonnes of carbon per ppm of CO2 in the air
- `births.per-woman` = 7.725: births per 1,000 people a year per child per woman, the median of 25 periods in 1950-2025 on the model's own values (range 5.83 to 9.59)

## 1. Growth = births - deaths (law.identity.growth-from-births-and-deaths)

Births are children per woman times the births factor; deaths are the five causes plus violent deaths. Growth in % a year, weighted by interval length:

| Era | Years | Intervals | Recorded | Implied | Gap |
|---|---|---|---|---|---|
| before farming | -300000 to -10000 | 29 | 0.0009 | 0.9501 | 0.9492 |
| farming spreads | -10000 to -3000 | 8 | 0.0332 | 0.8464 | 0.8132 |
| antiquity | -3000 to 500 | 15 | 0.0454 | 0.693 | 0.6476 |
| middle ages | 500 to 1500 | 14 | 0.0786 | 0.4458 | 0.3672 |
| early modern | 1500 to 1750 | 12 | 0.2155 | 0.849 | 0.6336 |
| industrial | 1750 to 1950 | 36 | 0.576 | 1.0513 | 0.4753 |
| since 1950 | 1950 to 2026 | 25 | 1.5822 | 1.6513 | 0.0691 |

The biggest single gaps (from, to, recorded, implied): -17000 to -14600: 0.008 vs 1.019; -14600 to -13000: 0.008 vs 1.019; -13000 to -12000: 0.009 vs 1.019; -12000 to -10000: 0.011 vs 0.969; -180000 to -151000: -0.0 vs 0.949; -127000 to -110000: 0.0 vs 0.949; -110000 to -100000: 0.0 vs 0.949; -26000 to -24000: 0.0 vs 0.949

Every interval's bands overlap, because the births factor's range (calibrated 1950-2025) is wide; the central gap is systematic before 1950.

## 2. Deaths counted once, against the rate life expectancy implies if numbers held steady

125 dates compared. They disagree beyond their bands at 23 dates (time, deaths from causes, steady rate, growth % a year): 1918: 5000 vs 3333 (growth 0.16); 1962: 1527 vs 1957 (growth 3.221); 1965: 1449 vs 1869 (growth 2.378); 1966.88: 1366 vs 1825 (growth 2.108); 1968.08: 1315 vs 1795 (growth 2.061); 1970: 1231 vs 1754 (growth 1.98); 1975.19: 1136 vs 1692 (growth 1.926); 1976: 1121 vs 1684 (growth 1.828); 1979.02: 1080 vs 1650 (growth 1.703); 1980: 1070 vs 1639 (growth 1.645); 1985: 990 vs 1600 (growth 1.808); 1989: 942 vs 1570 (growth 1.825); 1990: 930 vs 1562 (growth 1.744); 1996: 890 vs 1527 (growth 1.497); 2000: 859 vs 1493 (growth 1.379); 2001.75: 845 vs 1484 (growth 1.286); 2002: 844 vs 1481 (growth 1.27); 2006: 815 vs 1460 (growth 1.312); 2010: 790 vs 1429 (growth 1.247); 2014: 755 vs 1399 (growth 1.085); 2020: 796 vs 1389 (growth 1.189); 2021: 880 vs 1408 (growth 0.874); 2025: 760 vs 1361 (growth 0.874)

The steady rate holds only where growth is near zero, so the post-1950 differences are expected; 1918 is the one earlier date where they disagree.

## 3. Energy in fossil fuels taken, against energy from stores

Stores include nuclear, so they should be at least the fossil energy. Since 1900 (year, stores, fossil energy): 1900: 12.4 vs 10.9; 1910: 17.3 vs 15.2; 1918: 17.4 vs 15.7; 1920: 19 vs 17.3; 1930: 20.9 vs 19.4; 1936: 22.2 vs 20.5; 1940: 23.1 vs 21.5; 1945: 21.9 vs 21.0; 1950: 28.0 vs 27.6; 1960: 38.1 vs 37.0; 1965: 44.2 vs 43.8; 1970: 50.2 vs 53.1; 1976: 52.6 vs 58.0; 1980: 56.2 vs 60.0; 1985: 55.3 vs 56.5; 1990: 54.4 vs 58.1; 1996: 54.4 vs 56.2; 2000: 54.5 vs 55.6; 2006: 61.5 vs 62.5; 2010: 63.2 vs 63.5; 2014: 63.9 vs 66.0; 2020: 63.0 vs 61.8; 2025: 64.0 vs 64.4

Dates where fossil energy exceeds stores beyond the bands: none.

## 4. CO2 added by people, against fossil carbon kept in the air

Each row: interval, recorded rise in ppm a year, the rise fossil carbon explains at the airborne fraction, and their ratio (the rest is land use or error):

| From | To | Recorded | Fossil explains | Ratio |
|---|---|---|---|---|
| 1730 | 1750 | 0.025 | 0.001 | 0.04 |
| 1750 | 1760 | 0.05 | 0.0012 | 0.02 |
| 1760 | 1780 | 0.025 | 0.0016 | 0.06 |
| 1780 | 1789 | 0.2 | 0.002 | 0.01 |
| 1789 | 1800 | 0.2 | 0.0023 | 0.01 |
| 1800 | 1808.2 | 0.0488 | 0.0028 | 0.06 |
| 1808.2 | 1820 | 0.0508 | 0.0035 | 0.07 |
| 1820 | 1840 | 0.05 | 0.0056 | 0.11 |
| 1840 | 1850 | 0.1 | 0.0088 | 0.09 |
| 1850 | 1859 | 0.0 | 0.0132 | None |
| 1859 | 1862 | 0.2333 | 0.0178 | 0.08 |
| 1862 | 1865 | 0.2667 | 0.0209 | 0.08 |
| 1865 | 1870 | 0.26 | 0.025 | 0.1 |
| 1870 | 1880 | 0.24 | 0.0367 | 0.15 |
| 1880 | 1890 | 0.28 | 0.0561 | 0.2 |
| 1890 | 1900 | 0.2 | 0.0837 | 0.42 |
| 1900 | 1910 | 0.4 | 0.1247 | 0.31 |
| 1910 | 1914.6 | 0.3043 | 0.1528 | 0.5 |
| 1914.6 | 1918 | 0.2941 | 0.1584 | 0.54 |
| 1918 | 1920 | 0.3 | 0.1681 | 0.56 |
| 1920 | 1929.8 | 0.398 | 0.1941 | 0.49 |
| 1929.8 | 1930 | 0.5 | 0.2119 | 0.42 |
| 1930 | 1936 | 0.3 | 0.2246 | 0.75 |
| 1936 | 1940 | 0.3 | 0.247 | 0.82 |
| 1940 | 1941.5 | 0.0667 | 0.2559 | 3.84 |
| 1941.5 | 1941.93 | 0.0 | 0.2546 | None |
| 1941.93 | 1942.12 | 0.0 | 0.254 | None |
| 1942.12 | 1943.2 | 0.0926 | 0.2529 | 2.73 |
| 1943.2 | 1944 | 0.0 | 0.2513 | None |
| 1944 | 1945 | 0.1 | 0.25 | 2.5 |
| 1945 | 1945.7 | 0.1429 | 0.2554 | 1.79 |
| 1945.7 | 1946 | 0.3333 | 0.2642 | 0.79 |
| 1946 | 1946.5 | 0.2 | 0.2718 | 1.36 |
| 1946.5 | 1948 | 0.1333 | 0.2926 | 2.19 |
| 1948 | 1950 | 0.1 | 0.3249 | 3.25 |
| 1950 | 1954.2 | 0.5952 | 0.3775 | 0.63 |
| 1954.2 | 1955 | 0.25 | 0.417 | 1.67 |
| 1955 | 1960 | 0.66 | 0.4873 | 0.74 |
| 1960 | 1962 | 0.6 | 0.5605 | 0.93 |
| 1962 | 1965 | 0.6 | 0.6242 | 1.04 |
| 1965 | 1966.88 | 1.2234 | 0.7085 | 0.58 |
| 1966.88 | 1968.08 | 1.1667 | 0.7705 | 0.66 |
| 1968.08 | 1970 | 1.1979 | 0.8365 | 0.7 |
| 1970 | 1975.19 | 1.0019 | 0.9593 | 0.96 |
| 1975.19 | 1976 | 0.9877 | 1.0545 | 1.07 |
| 1976 | 1979.02 | 1.755 | 1.1127 | 0.63 |
| 1979.02 | 1980 | 1.7347 | 1.1724 | 0.68 |
| 1980 | 1985 | 1.4 | 1.211 | 0.87 |
| 1985 | 1989 | 1.6 | 1.2907 | 0.81 |
| 1989 | 1990 | 1.6 | 1.3608 | 0.85 |
| 1990 | 1996 | 1.4167 | 1.4067 | 0.99 |
| 1996 | 2000 | 1.875 | 1.4683 | 0.78 |
| 2000 | 2001.75 | 2.0 | 1.5464 | 0.77 |
| 2001.75 | 2006 | 2.0 | 1.683 | 0.84 |
| 2006 | 2010 | 2.0 | 1.9143 | 0.96 |
| 2010 | 2014 | 2.0 | 2.0708 | 1.04 |
| 2014 | 2020 | 2.6667 | 2.1512 | 0.81 |
| 2020 | 2025 | 2.6 | 2.2528 | 0.87 |

## 5. Bounds

- SurplusBound#7fe3 (towns at most those outside food-getting): 127 dates, violations none; the slack (outside food-getting but not in towns) runs 3.0 to 21.1% of people.
- The largest city at most all town dwellers: 112 dates where towns exist, violations none; share ranges 0.779 to 13.889%.
- Before towns (town share under 0.1%), the model still records a largest settlement (time, thousand people): -300000: 0.1; -253000: 0.1; -213000: 0.1; -180000: 0.1; -151000: 0.1; -130000: 0.1; -127000: 0.1; -110000: 0.1; -100000: 0.1; -89000: 0.1; -75000: 0.1; -60000: 0.1; -53000: 0.1; -50000: 0.1; -44000: 0.12; -37000: 0.15; -31000: 0.15; -26000: 0.2; -21000: 0.15; -20000: 0.2; -17700: 0.15; -14600: 0.2; -13000: 0.24; -12000: 0.3; -10000: 0.5; -9700: 0.8; -9500: 1; -7900: 3; -6300: 6. The two processes count settlements differently there.

## 6. By construction

- World output = people x output per person: 128 dates, worst gap 2.0126% at -200. One was computed from the others, so this confirms consistency and discovers nothing.

## The births factor's calibration (1950-2025, from the model's own values)

Intervals (from, to, factor): 1950 to 1954.2: 7.90; 1954.2 to 1959: 7.18; 1959 to 1960: 7.66; 1960 to 1961.9: 5.83; 1961.9 to 1962: 9.59; 1962 to 1965: 7.72; 1965 to 1966.88: 7.04; 1966.88 to 1968.08: 6.90; 1968.08 to 1970: 6.71; 1970 to 1975.19: 6.88; 1975.19 to 1976: 7.05; 1976 to 1979.02: 7.04; 1979.02 to 1980: 7.24; 1980 to 1985: 7.88; 1985 to 1989: 8.16; 1989 to 1990: 8.07; 1990 to 1996: 7.89; 1996 to 2000: 8.12; 2000 to 2001.75: 7.96; 2001.75 to 2002: 7.92; 2002 to 2006: 8.13; 2006 to 2010: 7.88; 2010 to 2014: 7.28; 2014 to 2020: 8.05; 2020 to 2025: 7.54
