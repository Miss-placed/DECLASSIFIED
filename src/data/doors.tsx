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
		new MiscMarker(``, MiscTypes.door, [100.49179147287857, 182.50233393925075]),
		new MiscMarker(``, MiscTypes.door, [107.46485256515149, 254.60080990808527]),
		new MiscMarker(``, MiscTypes.door, [107.46485256515149, 265.82848107160856]),
		new MiscMarker(``, MiscTypes.door, [232.08788853302397, 272.1633978120472]),
		new MiscMarker(``, MiscTypes.door, [230.90216175213448, 165.6553340622634]),
		new MiscMarker(``, MiscTypes.door, [291.3809548549552, 263.63290356829134]),
		new MiscMarker(``, MiscTypes.door, [291.7321396217922, 175.13652781961594]),
		new MiscMarker(``, MiscTypes.door, [302.1520136932104, 219.18459382284507]),
		new MiscMarker(``, MiscTypes.door, [373.68956210655614, 232.90043957126852]),
		new MiscMarker(``, MiscTypes.door, [374.76531471427563, 205.3342789984567]),
		new MiscMarker(``, MiscTypes.door, [384.0436809558562, 190.9460878702086]),
		new MiscMarker(``, MiscTypes.door, [418.4677644028797, 151.6811176884474]),
		new MiscMarker(``, MiscTypes.door, [355.3283252215737, 240.84348826739088]),
		new MiscMarker(``, MiscTypes.door, [388.82311498061483, 253.24896595592463]),
		new MiscMarker(``, MiscTypes.door, [426.57121137572466, 275.4016046854492]),
		new MiscMarker(``, MiscTypes.door, [385.44704937632633, 265.69159012662635]),
		new MiscMarker(``, MiscTypes.door, [379.87309993311044, 458.5840223736749]),
		new MiscMarker(``, MiscTypes.door, [322.2756223532124, 413.31679659240604]),
		new MiscMarker(``, MiscTypes.door, [304.5403286702526, 398.1151162927262]),
		new MiscMarker(``, MiscTypes.door, [336.6327648584656, 354.87478121808135]),
		new MiscMarker(``, MiscTypes.door, [336.46385729958024, 341.1932689483695]),
		new MiscMarker(``, MiscTypes.door, [373.2857051365825, 304.0336059935966]),
	]
};