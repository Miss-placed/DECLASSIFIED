import { MiscMarker } from "../classes";
import { MapIds } from "./intel";
import { MarkerStore, MiscTypes } from "./types";

// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it`s very very unlikely but still possible).
// Non collectible items that need icons on the respective maps

/////////////////////Round Based Misc Items/////////////////////////
export const WallbuyStore: MarkerStore = {
	[MapIds.dieMaschine]: [
		new MiscMarker(`68O2O`, MiscTypes.wallbuy, [261.1077465118457, 355], { uniqueTitle: `1911` }),
		new MiscMarker(`lmW4Q`, MiscTypes.wallbuy, [276.7037503511565, 255.75], { uniqueTitle: `MP5` }),
		new MiscMarker(`qnd1q`, MiscTypes.wallbuy, [340.9758521397134, 318.75], { uniqueTitle: `Gallo` }),
		new MiscMarker(`sLfEw`, MiscTypes.wallbuy, [220.98347152062405, 256.6785228855506], { uniqueTitle: `Hauer 77` }),
		new MiscMarker(`V1v4Z`, MiscTypes.wallbuy, [179.74021678059745, 256], { uniqueTitle: `Diamatti` }),
		new MiscMarker(`znu5z`, MiscTypes.wallbuy, [211.11624215750538, 158.125], { uniqueTitle: `M16` }),
	],
	[MapIds.dieMaschineUnderground]: [
		new MiscMarker(`GdJqJ`, MiscTypes.wallbuy, [325.4370259387583, 188.25], { uniqueTitle: `XM4` }),
		new MiscMarker(`OwuYN`, MiscTypes.wallbuy, [189.74051249234878, 245], { uniqueTitle: `RPD` }),
		new MiscMarker(`CRQrY`, MiscTypes.wallbuy, [99.48320905903957, 413], { uniqueTitle: `LW3 - Tundra` }),
		new MiscMarker(`6wZVg`, MiscTypes.wallbuy, [185.47998163708195, 359.25], { uniqueTitle: `Krig 6` }),
		new MiscMarker(`FUa64`, MiscTypes.wallbuy, [334.4108888394265, 318.5], { uniqueTitle: `Type 63` }),
		new MiscMarker(`TUgDl`, MiscTypes.wallbuy, [210.9681570307718, 296], { uniqueTitle: `AK-74u` }),
	],
	[MapIds.firebaseZ]: [
		new MiscMarker(`77gVD`, MiscTypes.wallbuy, [353.48127867777885, 317.5], { uniqueTitle: `M16` }),
		new MiscMarker(`z46lQ`, MiscTypes.wallbuy, [331.09573696038956, 278.375], { uniqueTitle: `Ak-74u` }),
		new MiscMarker(`8ZbjF`, MiscTypes.wallbuy, [432.8419561756719, 283.75], { uniqueTitle: `1911` }),
		new MiscMarker(`STzNi`, MiscTypes.wallbuy, [239.21495926584885, 261.75], { uniqueTitle: `AUG` }),
		new MiscMarker(`TChc2`, MiscTypes.wallbuy, [278.60534460155446, 153.125], { uniqueTitle: `DMR 14` }),
		new MiscMarker(`Oc61M`, MiscTypes.wallbuy, [268.34635967787244, 216.5], { uniqueTitle: `QBZ-83` }),
		new MiscMarker(`T2xi0`, MiscTypes.wallbuy, [359.83813091113404, 212], { uniqueTitle: `Hauer 77` }),
		new MiscMarker(`OSfjR`, MiscTypes.wallbuy, [430.4222586384493, 350.75], { uniqueTitle: `FFAR 1` }),
		new MiscMarker(`n4iky`, MiscTypes.wallbuy, [382.9138074726098, 385.5], { uniqueTitle: `M82` }),
		new MiscMarker(`TBoB4`, MiscTypes.wallbuy, [284.8504518213316, 361.875], { uniqueTitle: `Type 63` }),
		new MiscMarker(`3exzd`, MiscTypes.wallbuy, [191.4971626556794, 350], { uniqueTitle: `AK-47` }),
		new MiscMarker(`IC4tW`, MiscTypes.wallbuy, [215.2387114898399, 331.5], { uniqueTitle: `KSP` }),
		new MiscMarker(`pYZAK`, MiscTypes.wallbuy, [148.46469238692762, 343.75], { uniqueTitle: `RPD` }),
	],
	[MapIds.firebaseZSpawn]: [
		new MiscMarker(`UyWMz`, MiscTypes.wallbuy, [325.9028748010113, 223.5], { uniqueTitle: `Magnum` }),
		new MiscMarker(`8Tm13`, MiscTypes.wallbuy, [315.20624122108813, 328], { uniqueTitle: `Bullfrog` }),
		new MiscMarker(`zQK69`, MiscTypes.wallbuy, [115.12184661485156, 215.125], { uniqueTitle: `Gallo` }),
		new MiscMarker(`il15s`, MiscTypes.wallbuy, [314.4659378218934, 149.25], { uniqueTitle: `Stoner-63` }),
	],
	[MapIds.mauerDerToten]: [
		new MiscMarker(`qUsdq`, MiscTypes.wallbuy, [333.1876563339571, 200.75], { uniqueTitle: `Krig 6` }),
		new MiscMarker(`_MhF2`, MiscTypes.wallbuy, [287.957458635193, 312], { uniqueTitle: `M16` }),
		new MiscMarker(`9iDLM`, MiscTypes.wallbuy, [264.4634433306776, 206.21861097788877], { uniqueTitle: `Milano 821` }),
		new MiscMarker(`6n4vD`, MiscTypes.wallbuy, [159.12485177224806, 196.85347379562404], { uniqueTitle: `XM4` }),
		new MiscMarker(`v08K4`, MiscTypes.wallbuy, [150.48213221909987, 80.55439072511358], { uniqueTitle: `DMR 14` }),
		new MiscMarker(`xRomg`, MiscTypes.wallbuy, [157.85840261969585, 417.3706776955915], { uniqueTitle: `RPD` }),
	],
	[MapIds.mauerDerTotenStreets]: [
		new MiscMarker(`hELxf`, MiscTypes.wallbuy, [286.69157898902415, 102.51138061773712], { uniqueTitle: `Stoner-63` }),
		new MiscMarker(`Bv7or`, MiscTypes.wallbuy, [199.4014593131159, 175.9347523985546], { uniqueTitle: `QBZ-83` }),
		new MiscMarker(`0NXak`, MiscTypes.wallbuy, [399.8494608215523, 326], { uniqueTitle: `Type 63` }),
		new MiscMarker(`8kTWI`, MiscTypes.wallbuy, [286.72101221026105, 380.25], { uniqueTitle: `AK-74u` }),
		new MiscMarker(`X4lhW`, MiscTypes.wallbuy, [140.47611680346853, 340], { uniqueTitle: `MP5` }),
		new MiscMarker(`jQOwR`, MiscTypes.wallbuy, [186.48321783920994, 404.375], { uniqueTitle: `Gallo SA12` }),
		new MiscMarker(`ZEXRC`, MiscTypes.wallbuy, [340.85034092382944, 413.75], { uniqueTitle: `Diamatti` }),
		new MiscMarker(`vdYgv`, MiscTypes.wallbuy, [323.38931113034687, 313.6534246276432], { uniqueTitle: `Hauer 77` }),
		new MiscMarker(`ZUMvb`, MiscTypes.wallbuy, [307.8645191395491, 294.70791575751707], { uniqueTitle: `KSP 45` }),
	],
	[MapIds.forsaken]: [
		new MiscMarker(`LinzC`, MiscTypes.wallbuy, [252.94734525704655, 91.75], { uniqueTitle: `1911` }),
		new MiscMarker(`DkPDk`, MiscTypes.wallbuy, [285.1908512032962, 57.25], { uniqueTitle: `Diamatti` }),
		new MiscMarker(`hPvQY`, MiscTypes.wallbuy, [381.70090364266315, 78.25], { uniqueTitle: `Hauer 77` }),
		new MiscMarker(`ftW_1`, MiscTypes.wallbuy, [236.37046539938197, 307.5], { uniqueTitle: `Pellington` }),
		new MiscMarker(`xbmnw`, MiscTypes.wallbuy, [320.9730698099073, 182.9375], { uniqueTitle: `DMR 14` }),
		new MiscMarker(`5Bzt4`, MiscTypes.wallbuy, [365.2261190186347, 203.5], { uniqueTitle: `Bullfrog` }),
		new MiscMarker(`e6LK0`, MiscTypes.wallbuy, [447.66361667759156, 220.9375], { uniqueTitle: `Gallo` }),
		new MiscMarker(`5dWjB`, MiscTypes.wallbuy, [159.05660876486562, 183.9375], { uniqueTitle: `QBZ-83` }),
		new MiscMarker(`mOTWb`, MiscTypes.wallbuy, [154.86786332989982, 158.9375], { uniqueTitle: `Milano 821` }),
		new MiscMarker(`nNJxZ`, MiscTypes.wallbuy, [198.60605627867778, 273.5], { uniqueTitle: `Type 63s` }),
		new MiscMarker(`PO_Zs`, MiscTypes.wallbuy, [81.87718419327653, 85], { uniqueTitle: `MP5` }),
		new MiscMarker(`PE7Yv`, MiscTypes.wallbuy, [124.48701657458564, 175], { uniqueTitle: `AUG` }),
		new MiscMarker(`Cjvh8`, MiscTypes.wallbuy, [85.69720451791603, 91.59201547112765], { uniqueTitle: `XM4` }),
		new MiscMarker(`IHqvu`, MiscTypes.wallbuy, [157.2287878078472, 232], { uniqueTitle: `FFAR 1` }),
		new MiscMarker(`6YJ_i`, MiscTypes.wallbuy, [110.609525704654, 202.25], { uniqueTitle: `M82` }),
		new MiscMarker(`Dzmo9`, MiscTypes.wallbuy, [118.23181243562132, 215.375], { uniqueTitle: `RPD` }),
		new MiscMarker(`0U1dM`, MiscTypes.wallbuy, [163.22869884820676, 344.625], { uniqueTitle: `FFAR1` }),
	],
	[MapIds.forsakenUnderground]: [
		new MiscMarker(`EWbhd`, MiscTypes.wallbuy, [345.4748735836689, 228.375], { uniqueTitle: `Krig` }),
		new MiscMarker(`wTePJ`, MiscTypes.wallbuy, [222.46318007304055, 263.75], { uniqueTitle: `M60` }),
		new MiscMarker(`OFSTG`, MiscTypes.wallbuy, [150.21780597434218, 470.75], { uniqueTitle: `AK-74u` }),
	],

	/////////////////////Outbreak Misc Items/////////////////////////
	[MapIds.zoo]: [
		new MiscMarker(`XHBng`, MiscTypes.wallbuy, [169.788791011143, 373.51495741647]),
		new MiscMarker(`C48eX`, MiscTypes.wallbuy, [199.8618860850235, 339.953248441663]),
		new MiscMarker(`hUgNo`, MiscTypes.wallbuy, [226.05336642166992, 284.46966314770833]),
		new MiscMarker(`5mHNU`, MiscTypes.wallbuy, [271.9013083975607, 327.48529982779115]),
		new MiscMarker(`uLBiL`, MiscTypes.wallbuy, [378.694470373232, 279.2212709056113]),
		new MiscMarker(`IseUH`, MiscTypes.wallbuy, [377.02986155344405, 406.01380851879895]),
		new MiscMarker(`s6Ggz`, MiscTypes.wallbuy, [258.7671967862002, 112.99627959809773]),
		new MiscMarker(`GRImF`, MiscTypes.wallbuy, [117.70440343659759, 383.7635095097696]),
		new MiscMarker(`C8ExY`, MiscTypes.wallbuy, [150.5199691988099, 271.05612018196865]),
		new MiscMarker(`xn8bs`, MiscTypes.wallbuy, [189.5625, 209.9375]),
	],
	[MapIds.duga]: [
		new MiscMarker(`pWj7D`, MiscTypes.wallbuy, [240.40983939603782, 309.6215067926123]),
		new MiscMarker(`_et7e`, MiscTypes.wallbuy, [179.7866999930869, 311.14179392441775]),
		new MiscMarker(`QJLeT`, MiscTypes.wallbuy, [162.5180873040452, 353.77125671112447]),
		new MiscMarker(`Aa7h5`, MiscTypes.wallbuy, [218.9804723907548, 387.53389130258694]),
		new MiscMarker(`Z2G7z`, MiscTypes.wallbuy, [295.8011933010631, 273.74144329217023]),
		new MiscMarker(`jyPt2`, MiscTypes.wallbuy, [329.9425791075898, 236.51538664159438]),
	],
	[MapIds.ruka]: [
		new MiscMarker(`IDIaG`, MiscTypes.wallbuy, [257.623049666483, 419.4945666147199]),
		new MiscMarker(`ViQKB`, MiscTypes.wallbuy, [330.8199221096839, 219.85452285253052]),
		new MiscMarker(`bg0KW`, MiscTypes.wallbuy, [149.24142150677562, 197.01558759817974]),
		new MiscMarker(`ddBw7`, MiscTypes.wallbuy, [267.5912024956175, 231.7284640168234]),
		new MiscMarker(`G3Lx1`, MiscTypes.wallbuy, [290.428408237228, 265.0335171292474]),
		new MiscMarker(`aM_1i`, MiscTypes.wallbuy, [278.76550804955167, 148.92171676191577]),
	],
	[MapIds.alpine]: [
		new MiscMarker(`eAUAb`, MiscTypes.wallbuy, [237.5596066858896, 394.0444742792774]),
		new MiscMarker(`OUQrp`, MiscTypes.wallbuy, [216.02706746094876, 85.24573718234292]),
		new MiscMarker(`X6Bf3`, MiscTypes.wallbuy, [164.33578728860493, 343.10287670138746]),
		new MiscMarker(`31UO9`, MiscTypes.wallbuy, [317.30615777129947, 67.41337618919444]),
		new MiscMarker(`GpZS_`, MiscTypes.wallbuy, [139.88254903819504, 197.95937117870153]),
		new MiscMarker(`K7ay6`, MiscTypes.wallbuy, [378.35148690180966, 214.6089341851221]),
		new MiscMarker(`UzNkV`, MiscTypes.wallbuy, [216.07746476812133, 139.11181913168872]),
	],
	[MapIds.golova]: [
		new MiscMarker(`wmuWG`, MiscTypes.wallbuy, [391.01912850701865, 349.97680753791883]),
		new MiscMarker(`PHx0y`, MiscTypes.wallbuy, [259.9441282565234, 324.96215738223185]),
		new MiscMarker(`NUegF`, MiscTypes.wallbuy, [255.30544263370194, 278.5150283276749]),
		new MiscMarker(`WgZlk`, MiscTypes.wallbuy, [247.78045977198417, 260.83585172484396]),
		new MiscMarker(`EDdVd`, MiscTypes.wallbuy, [189.4695980177873, 406.4654447254141]),
		new MiscMarker(`Cj7z7`, MiscTypes.wallbuy, [102.99143995016017, 332.67423226159815]),
		new MiscMarker(`Sv2Mr`, MiscTypes.wallbuy, [133.40913902258612, 294.7666483087646]),
		new MiscMarker(`lf_Z1`, MiscTypes.wallbuy, [213.79236709189115, 283.7899469967797]),
		new MiscMarker(`wY8A6`, MiscTypes.wallbuy, [175.03616784419052, 335.71818781886225]),
		new MiscMarker(`ZPs7o`, MiscTypes.wallbuy, [285.4329306073199, 141.63750920858075], { uniqueTitle: `DMR 14` }),
	],
	[MapIds.sanatorium]: [
		new MiscMarker(`Fgozl`, MiscTypes.wallbuy, [369.03998522090853, 182.79574040351952]),
		new MiscMarker(`KKSy2`, MiscTypes.wallbuy, [240.2366599253267, 64.20726302897477]),
		new MiscMarker(`RGkIq`, MiscTypes.wallbuy, [156.49071639701307, 125.97763641344636]),
		new MiscMarker(`wvhSe`, MiscTypes.wallbuy, [151.36399346608587, 385.4893157572437]),
		new MiscMarker(`wYhoP`, MiscTypes.wallbuy, [221.0869496733043, 267.7446709720566]),
		new MiscMarker(`MWdg9`, MiscTypes.wallbuy, [257.38248348472337, 352.125]),
		new MiscMarker(`Li3bP`, MiscTypes.wallbuy, [280.5175197881211, 200.75]),
		new MiscMarker(`a_JVl`, MiscTypes.wallbuy, [260.2622177801051, 212]),
		new MiscMarker(`FLBef`, MiscTypes.wallbuy, [279.026156408071, 251]),
		new MiscMarker(`O6WkK`, MiscTypes.wallbuy, [309.86762509032627, 210.59375]),
		new MiscMarker(`Gf_oJ`, MiscTypes.wallbuy, [283.2996720837837, 136.5767028690432]),
	],
	[MapIds.collateral]: [
		new MiscMarker(`K1b_U`, MiscTypes.wallbuy, [274.1902735759488, 271.97980445743264]),
		new MiscMarker(`1NE2i`, MiscTypes.wallbuy, [329.35910463308284, 392.12343294135957]),
	],
	[MapIds.armada]: [
		new MiscMarker(`7dw4P`, MiscTypes.wallbuy, [273.61241453743673, 248.625]),
		new MiscMarker(`MplYv`, MiscTypes.wallbuy, [237.96560363435918, 272.5625]),
		new MiscMarker(`i2E9R`, MiscTypes.wallbuy, [175.35905393637324, 164]),
		new MiscMarker(`K7xgo`, MiscTypes.wallbuy, [318.5914958959441, 382.375]),
	],

	/////////////////////Bo6 Misc Items/////////////////////////
	[MapIds.libertyFalls]: [
		new MiscMarker(`fvuiO`, MiscTypes.wallbuy, [233.00348379819602, 119.87817395400299], { uniqueTitle: `XMG` }),
		new MiscMarker(`KjVcG`, MiscTypes.wallbuy, [260.3911978406195, 198.80150418737742], { uniqueTitle: `AK-74` }),
		new MiscMarker(`4zfaY`, MiscTypes.wallbuy, [198.92378085777787, 252.7375535307155], { uniqueTitle: `Tanto .22` }),
		new MiscMarker(`LDSqJ`, MiscTypes.wallbuy, [226.8714611903116, 252.1371056442005], { uniqueTitle: `LR 7.62` }),
		new MiscMarker(`BgXvx`, MiscTypes.wallbuy, [155.37139785865875, 288.90258018583415], { uniqueTitle: `Marine SP` }),
		new MiscMarker(`unyje`, MiscTypes.wallbuy, [168.31573473300784, 370.0835855753783], { uniqueTitle: `DM-10` }),
		new MiscMarker(`GIMoK`, MiscTypes.wallbuy, [241.74995353941142, 394.23867000110164], { uniqueTitle: `GS45` }),
		new MiscMarker(`ycejl`, MiscTypes.wallbuy, [306.853841906432, 286.6399279147556], { uniqueTitle: `ASG-89` }),
		new MiscMarker(`78Nsj`, MiscTypes.wallbuy, [240.25637620775572, 331.2362333030811], { uniqueTitle: `C9` }),
		new MiscMarker(`yVyNb`, MiscTypes.wallbuy, [266.64290906700586, 301.1046331431583], { uniqueTitle: `XM4` }),
	],
	[MapIds.terminusBiolabs]: [
		// ISLANDS // CRAB ISLAND //
		new MiscMarker(`JYpUP`, MiscTypes.wallbuy, [127.03492945576355, 232.95667735865507], { uniqueTitle: `Tsarkov 7.62` }),
		// TEMPLE //
		new MiscMarker(`uTBhc`, MiscTypes.wallbuy, [398.6807293035015, 184.42052684266662], { uniqueTitle: `PU-21` }),
		// CASTLE ROCK //
		new MiscMarker(`77JpN`, MiscTypes.wallbuy, [284.33094277923067, 410.17031487378046], { uniqueTitle: `XMG` }),

		new MiscMarker(`yuNGc`, MiscTypes.wallbuy, [193.47119996575876, 136.43358778013183], { uniqueTitle: `SVD` }),
		// MAIN ISLAND //
		new MiscMarker(`EQ96g`, MiscTypes.wallbuy, [325.9300249223915, 286.60776697843335], { uniqueTitle: `XM4` }),
		new MiscMarker(`JHQR3`, MiscTypes.wallbuy, [283.26596956730333, 308.3863220984108], { uniqueTitle: `AK-74` }),
		new MiscMarker(`F4Mjn`, MiscTypes.wallbuy, [241.88025981670182, 258.4050398521217], { uniqueTitle: `AS VAL` }),
	],
	[MapIds.terminusPrison]: [
		new MiscMarker(`w0fbt`, MiscTypes.wallbuy, [301.5634536941064, 294.6754273738092], { uniqueTitle: `GS45` }),
		new MiscMarker(`KsBG8`, MiscTypes.wallbuy, [294.19030976573237, 289.04240130454195], { uniqueTitle: `ASG-89` }),
		new MiscMarker(`1bjPY`, MiscTypes.wallbuy, [302.34375, 255.90625], { uniqueTitle: `Tanto .22` }),
		new MiscMarker(`EeAjA`, MiscTypes.wallbuy, [260.26474908706786, 292.5024709259978], { uniqueTitle: `C9` }),
		new MiscMarker(`kzPC1`, MiscTypes.wallbuy, [248.8489336765139, 263.518870815491], { uniqueTitle: `Marine-SP` }),
		new MiscMarker(`HhY0_`, MiscTypes.wallbuy, [213.9061948934098, 253.16855562546598], { uniqueTitle: `Goblin MK2` }),
		new MiscMarker(`QpYZL`, MiscTypes.wallbuy, [222.14994470956643, 301.70984599036944], { uniqueTitle: `PP-919`, uniqueDesc: `On the ramp up from the docks. Under the bridge from engineering.` }),
	],
	[MapIds.citadelle]: [
		new MiscMarker(`rOi2C`, MiscTypes.wallbuy, [127.73649367629511, 228.42558032860603], { uniqueTitle: `GS45` }),
		new MiscMarker(`eVI5z`, MiscTypes.wallbuy, [165.96601156989868, 139.6872831798305], { uniqueTitle: `Kompakt 92` }),
		new MiscMarker(`N9JkV`, MiscTypes.wallbuy, [205.5005706224356, 285.15195458461994], { uniqueTitle: `XM4` }),
		new MiscMarker(`tzQO6`, MiscTypes.wallbuy, [222.90325641504634, 188.4240737755952], { uniqueTitle: `LR 7.62` }),
		new MiscMarker(`l1BrO`, MiscTypes.wallbuy, [273.98949585701473, 230.92895315329292], { uniqueTitle: `AS VAL` }),
		new MiscMarker(`XHeyD`, MiscTypes.wallbuy, [374.75612089105084, 170.90119089726755], { uniqueTitle: `Marine SP` }),
		new MiscMarker(`yk4zv`, MiscTypes.wallbuy, [422.86317549059004, 233.27140868730157], { uniqueTitle: `Tanto .22` }),
		new MiscMarker(`eLJ0c`, MiscTypes.wallbuy, [378.52897328670235, 443.23262884685033], { uniqueTitle: `KSV` }),
		new MiscMarker(`QkZXh`, MiscTypes.wallbuy, [381.386189260236, 325.7815918407204], { uniqueTitle: `GPMG-7` }),
	]
};