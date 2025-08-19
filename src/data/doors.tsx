import { MiscMarker } from "../classes";
import { MapIds } from "./intel";
import { MarkerStore, MiscTypes } from "./types";


// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it`s very very unlikely but still possible).
// Non collectible items that need icons on the respective maps

/////////////////////Round Based Misc Items/////////////////////////
export const DoorStore: MarkerStore = {
	/////////////////////Bo6 Items/////////////////////////
	[MapIds.libertyFalls]: [
		new MiscMarker(`eznoZ`, MiscTypes.door, [241.00316487358356, 281.4319355180847]),
		new MiscMarker(`YVX1t`, MiscTypes.door, [223.23959911864264, 304.67125670801784]),
		new MiscMarker(`bIFAl`, MiscTypes.door, [229.3034757756142, 327.2518894802814]),
		new MiscMarker(`Us4er`, MiscTypes.door, [251.22318106238743, 366.9163116763981]),
		new MiscMarker(`_JBkw`, MiscTypes.door, [295.14523598775605, 319.3908869231275]),
		new MiscMarker(`oObW4`, MiscTypes.door, [302.32504150392526, 273.716277985651]),
		new MiscMarker(`q8M2E`, MiscTypes.door, [324.63397937808065, 335.04635432377677]),
		new MiscMarker(`_13bg`, MiscTypes.door, [258.2520814892866, 328.17234136213443]),
		new MiscMarker(`93OQi`, MiscTypes.door, [235.49762093035028, 334.63416632668674]),
		new MiscMarker(`LvUR1`, MiscTypes.door, [248.15625, 314.09375]),
		new MiscMarker(`CZ9QV`, MiscTypes.door, [165.49959808262045, 338.1174584483644]),
		new MiscMarker(`i7idT`, MiscTypes.door, [172.4791113072325, 269.0818319557974]),
		new MiscMarker(`7wbDr`, MiscTypes.door, [192.35468820444106, 131.41311162858815]),
		new MiscMarker(`FyQUj`, MiscTypes.door, [222.44929392091163, 84.51568438708819]),
		new MiscMarker(`OcT3e`, MiscTypes.door, [174.2979247745587, 186.33576706114695]),
		new MiscMarker(`XYMOz`, MiscTypes.door, [241.25209442885952, 314.30277205618233]),
	],
	[MapIds.terminusBiolabs]: [
		new MiscMarker(`_dCtL`, MiscTypes.door, [288.84375, 250.78125]),
		new MiscMarker(`EOPEV`, MiscTypes.door, [287.78125, 301.9375]),
		new MiscMarker(`83JFo`, MiscTypes.door, [232.50655418257475, 261.69066863109407]),
		new MiscMarker(`Ux5Fy`, MiscTypes.door, [239.03697280313114, 286.2718237163247]),
		new MiscMarker(`1x0mx`, MiscTypes.door, [287.04117343836907, 276.70301654973383], { uniqueTitle: `Inclined Lift` }),
		new MiscMarker(`D5MbG`, MiscTypes.doorPower, [230.77608506070993, 270.38500473724457]),
		new MiscMarker(`cULPN`, MiscTypes.doorPower, [262.59872235828027, 322.96031472747234], { uniqueTitle: `Boat Door` }),
		new MiscMarker(`puX03`, MiscTypes.doorPower, [259.50325608293707, 232.50391134799926], { uniqueTitle: `Boat Door` }),
	],
	[MapIds.terminusPrison]: [
		new MiscMarker(`CTP4L`, MiscTypes.door, [283.13496536547103, 298.7052786620223]),
		new MiscMarker(`3sMT0`, MiscTypes.door, [286.55652377111375, 266.42837660123934]),
		new MiscMarker(`Tcos8`, MiscTypes.door, [241.84375, 286.6875]),
		new MiscMarker(`ft64F`, MiscTypes.door, [245.34375, 277.21875]),
		new MiscMarker(`MArfW`, MiscTypes.door, [238.28125, 239.09375]),
		new MiscMarker(`Z3MPg`, MiscTypes.door, [238.35490492396977, 302.0274755370141]),
		new MiscMarker(`a5ru5`, MiscTypes.door, [225.36336206270096, 301.74249194838507]),
		new MiscMarker(`rhih5`, MiscTypes.door, [271.55219005823653, 276.45691874285905], { uniqueTitle: `Inclined Lift` }),
		new MiscMarker(`mTnUT`, MiscTypes.doorPower, [211.83383472310055, 270.9445225243447]),
		new MiscMarker(`FTNny`, MiscTypes.doorPower, [212.04507005770893, 288.4066435186371]),
		new MiscMarker(`p25xL`, MiscTypes.doorPower, [301.79623492671783, 269.34795885490774]),
		new MiscMarker(`2bDxl`, MiscTypes.doorPower, [285.4902945141612, 286.09017860960637]),
		new MiscMarker(`k_wfq`, MiscTypes.doorPower, [249.17003928084094, 296.2336733144075]),
		new MiscMarker(`pWDOG`, MiscTypes.doorPower, [250.20620271842816, 250.86062173164112]),
		new MiscMarker(`h9zst`, MiscTypes.doorPower, [259.4226038211776, 243.82561733960162]),
	],
	[MapIds.citadelle]: [
		new MiscMarker(`fVqIz`, MiscTypes.door, [100.49179147287857, 182.50233393925075]),
		new MiscMarker(`lk6Zp`, MiscTypes.door, [107.46485256515149, 254.60080990808527]),
		new MiscMarker(`quoLz`, MiscTypes.door, [107.46485256515149, 265.82848107160856]),
		new MiscMarker(`tBATP`, MiscTypes.door, [232.08788853302397, 272.1633978120472]),
		new MiscMarker(`drnEC`, MiscTypes.door, [230.90216175213448, 165.6553340622634]),
		new MiscMarker(`PqheC`, MiscTypes.door, [291.3809548549552, 263.63290356829134]),
		new MiscMarker(`0ENcs`, MiscTypes.door, [291.7321396217922, 175.13652781961594]),
		new MiscMarker(`8vhuU`, MiscTypes.door, [302.1520136932104, 219.18459382284507]),
		new MiscMarker(`ZRTqw`, MiscTypes.door, [373.68956210655614, 232.90043957126852]),
		new MiscMarker(`FryMW`, MiscTypes.door, [374.76531471427563, 205.3342789984567]),
		new MiscMarker(`Hubjx`, MiscTypes.door, [384.0436809558562, 190.9460878702086]),
		new MiscMarker(`QG12v`, MiscTypes.door, [418.4677644028797, 151.6811176884474]),
		new MiscMarker(`wunck`, MiscTypes.door, [355.3283252215737, 240.84348826739088]),
		new MiscMarker(`VOQd7`, MiscTypes.door, [388.82311498061483, 253.24896595592463]),
		new MiscMarker(`PgXbW`, MiscTypes.door, [426.57121137572466, 275.4016046854492]),
		new MiscMarker(`lQxZL`, MiscTypes.door, [385.44704937632633, 265.69159012662635]),
		new MiscMarker(`nm_2B`, MiscTypes.door, [379.87309993311044, 458.5840223736749]),
		new MiscMarker(`_UWlg`, MiscTypes.door, [322.2756223532124, 413.31679659240604]),
		new MiscMarker(`Ij7m9`, MiscTypes.door, [304.5403286702526, 398.1151162927262]),
		new MiscMarker(`7BTXd`, MiscTypes.door, [336.6327648584656, 354.87478121808135]),
		new MiscMarker(`c3F0Y`, MiscTypes.door, [336.46385729958024, 341.1932689483695]),
		new MiscMarker(`42_CU`, MiscTypes.door, [373.2857051365825, 304.0336059935966]),
	],
	[MapIds.shatteredVeil]: [

	],
	[MapIds.reckoning]: [
		// Reception
		new MiscMarker(`xwC1y`, MiscTypes.door, [249.1286528539106, 423.25193287577486]),
		new MiscMarker(`TUYlc`, MiscTypes.door, [116.24597497417126, 423.12578133602665]),
		new MiscMarker(`izuDP`, MiscTypes.doorPower, [162.33190555407688, 464.3907515720198]),
		new MiscMarker(`QdNFK`, MiscTypes.doorPower, [167.20610115165363, 482.96920725553684]),
		new MiscMarker(`kPNuf`, MiscTypes.doorPower, [182.40981699538102, 382.71269505842884]),
		// Mutant
		new MiscMarker(`fN7a3`, MiscTypes.door, [328.8074590743468, 271.6452905682642]),
		new MiscMarker(`x1fye`, MiscTypes.door, [269.47879438581793, 256.81312439613197]),
		new MiscMarker(`zxvvk`, MiscTypes.door, [235.6481232291568, 264.9791484684295]),
		new MiscMarker(`7Wl7W`, MiscTypes.door, [334.49985145261405, 297.42867525492983]),
		// Quantum
		new MiscMarker(`xZHVA`, MiscTypes.door, [32.977874958006524, 278.4408520390551]),
		new MiscMarker(`hGM5m`, MiscTypes.door, [121.62053176002406, 270.8395688040536]),
		new MiscMarker(`owQFu`, MiscTypes.door, [21.73591386618226, 304.1977897117392]),
		// Android
		new MiscMarker(`hLwjI`, MiscTypes.door, [92.80574107774062, 30.902649294590134]),
		// Executive
		new MiscMarker(`U2Vbx`, MiscTypes.door, [439.228832933651, 204.89214896071937]),
		new MiscMarker(`hh0Ns`, MiscTypes.door, [453.6897584130215, 295.31649021124093]),
	],
};