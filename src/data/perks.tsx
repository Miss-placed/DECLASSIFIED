import { Item, MiscMarker } from '../classes';
import { IconFileNames } from './icons';
import { MapIds } from './intel';
import { MarkerStore } from './types';

// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it`s very very unlikely but still possible).

/////////////////////Perks/////////////////////////
export const Perks = {
	wunderFizz: new Item({
		title: 'Der Wunderfizz',
		icon: IconFileNames.wunderFizz,
	}),
	staminup: new Item({
		id: 'staminUp',
		title: 'Stamin-Up',
		icon: IconFileNames.staminUp,
	}),
	quick: new Item({
		id: 'quickRevive',
		title: 'Quick Revive',
		icon: IconFileNames.quickRevive,
	}),
	jugg: new Item({
		id: 'juggernog',
		title: 'Jugger-Nog',
		icon: IconFileNames.juggernog,
	}),
	speed: new Item({
		id: 'speedCola',
		title: 'Speed Cola',
		icon: IconFileNames.speedCola,
	}),
	mule: new Item({
		id: 'muleKick',
		title: 'Mule Kick',
		icon: IconFileNames.muleKick,
	}),
	elemental: new Item({
		id: 'elementalPop',
		title: 'Elemental Pop',
		icon: IconFileNames.elementalPop,
	}),
	death: new Item({
		id: 'deathPerception',
		title: 'Death Perception',
		icon: IconFileNames.deathPerception,
	}),
	tombstone: new Item({
		id: 'tombstoneSoda',
		title: 'Tombstone',
		icon: IconFileNames.tombstoneSoda,
	}),
	deadshot: new Item({
		id: 'deadshotDaiquiri',
		title: 'Deadshot Daiquiri',
		icon: IconFileNames.deadshotDaiquiri,
	}),
	phd: new Item({
		id: 'phdSlider',
		title: 'PHD',
		icon: IconFileNames.phd,
	}),
	meleeMacchiato: new Item({
		id: 'meleeMacchiato',
		title: 'Melee Macchiato',
		icon: IconFileNames.meleeMacchiato,
	}),
	vulture: new Item({
		id: 'vultureAid',
		title: 'Vulture Aid',
		icon: IconFileNames.vulture,
	}),
	doubleTap: new Item({
		id: 'doubleTap',
		title: 'Double Tap',
		icon: IconFileNames.doubleTap,
	}),
};

export const PerkStore: MarkerStore = {
	[MapIds.dieMaschine]: [
		new MiscMarker(`ospc7`, Perks.staminup, [251.96478134656803, 349.75], { uniqueDesc: `Upstairs` }),
		new MiscMarker(`fcM5h`, Perks.jugg, [362.1755501451447, 259.75]),
		new MiscMarker(`bTuJZ`, Perks.quick, [184.8576278031701, 135.6785230479871]),
		new MiscMarker(`r5tfe`, Perks.wunderFizz, [277.920479445641, 297.75], { uniqueDesc: `On the 'Penthouse' level within the Dark Aether. Arrives in the standard map 10 rounds after the power is turned on.` }),
	],
	[MapIds.dieMaschineUnderground]: [
		new MiscMarker(`tbKp7`, Perks.deadshot, [195.98761430452765, 227.875]),
		new MiscMarker(`4CUDy`, Perks.elemental, [120.36551249234878, 419.875]),
		new MiscMarker(`bNKSM`, Perks.speed, [320.16749670765864, 330]),
	],
	[MapIds.firebaseZ]: [
		new MiscMarker(`ZehFH`, Perks.tombstone, [277.9856821799794, 285.375]),
		new MiscMarker(`P3Ykk`, Perks.jugg, [320.0880419514936, 208.125]),
		new MiscMarker(`dGeon`, Perks.staminup, [366.6949433467553, 355.25]),
		new MiscMarker(`8arCc`, Perks.speed, [168.88305552954398, 328.25]),
	],
	[MapIds.firebaseZSpawn]: [
		new MiscMarker(`kgGlY`, Perks.quick, [159.46212192152825, 258.5]),
		new MiscMarker(`GTe1y`, Perks.wunderFizz, [379.844980803446, 215.375]),
	],
	[MapIds.mauerDerToten]: [
		new MiscMarker(`lUa4E`, Perks.mule, [308.7001537862926, 268.75]),
		new MiscMarker(`mYtJL`, Perks.elemental, [254.115302662541, 212.98081184778474]),
		new MiscMarker(`vu9tj`, Perks.deadshot, [196.36891402801726, 392.7378280560345]),
	],
	[MapIds.mauerDerTotenStreets]: [
		new MiscMarker(`5Jio9`, Perks.jugg, [328.1014850567898, 386.125]),
		new MiscMarker(`npHck`, Perks.speed, [154.97101221026105, 300]),
		new MiscMarker(`YWNji`, Perks.staminup, [119.88167256489595, 364.5]),
		new MiscMarker(`kU1ty`, Perks.tombstone, [290.1182070000556, 384.25]),
		new MiscMarker(`KMuzB`, Perks.quick, [349.96564996205154, 243.66029463523287]),
		new MiscMarker(`Awvc5`, Perks.wunderFizz, [316.19672138741174, 57.20469016157574]),
	],
	[MapIds.forsaken]: [
		new MiscMarker(`dNZrb`, Perks.death, [296.9316883603334, 127.75]),
		new MiscMarker(`rBir5`, Perks.jugg, [396.847115834816, 98]),
		new MiscMarker(`yixf9`, Perks.phd, [237.61886646689766, 296.75]),
		new MiscMarker(`x_U2D`, Perks.quick, [354.6048998033524, 223.75]),
		new MiscMarker(`_EJAx`, Perks.tombstone, [367.60832474950837, 248]),
		new MiscMarker(`elRzv`, Perks.staminup, [416.8465375971533, 186.5]),
		new MiscMarker(`5UsEQ`, Perks.elemental, [156.10418812622905, 240.5]),
		new MiscMarker(`guJMC`, Perks.mule, [61.63438992415021, 109]),
		new MiscMarker(`MCTIZ`, Perks.speed, [80.109525704654, 178.125]),
		new MiscMarker(`OAD4X`, Perks.deadshot, [118.98323578986796, 238.875]),
		new MiscMarker(`Cpob6`, Perks.wunderFizz, [272.75, 453.0625]),
	],
	[MapIds.forsakenUnderground]: [
		new MiscMarker(`CCURy`, Perks.wunderFizz, [165.73875128757373, 263.625]),
	],

	[MapIds.libertyFalls]: [
		new MiscMarker(`gN56Y`, Perks.meleeMacchiato, [175.36257294357463, 137.6951945070073]),
		new MiscMarker(`HeXRx`, Perks.phd, [199.37685764143518, 211.34125795627676]),
		new MiscMarker(`GQcBM`, Perks.speed, [246.2859286146521, 250.42196558532459]),
		new MiscMarker(`1hoGs`, Perks.staminup, [143.9206383159653, 300.3575686763833]),
		new MiscMarker(`YksKA`, Perks.quick, [303.4512230353636, 338.6077383572001]),
		new MiscMarker(`juvMH`, Perks.jugg, [285.06369615742574, 302.10071909885824]),
		new MiscMarker(`8Kr_R`, Perks.wunderFizz, [267.38969773283367, 308.0772348330578], { uniqueDesc: `Spawns at round 25.` }),
	],
	[MapIds.terminusBiolabs]: [
		new MiscMarker(`gwiR8`, Perks.deadshot, [202.68742727157954, 261.91067882280566]),
		new MiscMarker(`nP_tL`, Perks.speed, [263.81746456832025, 243.56795749921676]),
		new MiscMarker(`4HdKo`, Perks.phd, [253.81568374876306, 287.67417127726407]),
		new MiscMarker(`y7Jgo`, Perks.meleeMacchiato, [325.31137424059085, 276.8607440345454]),
		new MiscMarker(`Tfw4f`, Perks.wunderFizz, [250.921668074456, 120.83816594406575], { uniqueDesc: `Spawns at round 25.` }),
	],
	[MapIds.terminusPrison]: [
		new MiscMarker(`N3iU1`, Perks.quick, [292.77832269240974, 268.2533852720715]),
		new MiscMarker(`__Aeo`, Perks.staminup, [291.9164241267842, 304.58624666837596]),
		new MiscMarker(`KIuKk`, Perks.jugg, [239.63390968267203, 278.29268337414294]),
		new MiscMarker(`JubO2`, Perks.elemental, [208.15153148056928, 309.7389992873544]),
	],
	[MapIds.citadelle]: [
		new MiscMarker(`sHBxE`, Perks.deadshot, [171.46832853492387, 152.85308855237312]),
		new MiscMarker(`p_SKt`, Perks.speed, [214.2486937122144, 303.9718379759372]),
		new MiscMarker(`w63q8`, Perks.meleeMacchiato, [293.3875225716126, 284.21916249124973]),
		new MiscMarker(`cP_Ms`, Perks.elemental, [293.94318075830125, 153.0838304327259]),
		new MiscMarker(`miVTY`, Perks.jugg, [324.64228661377797, 225.70260122669285]),
		new MiscMarker(`xa_D0`, Perks.staminup, [406.76607975552446, 153.4224091921224]),
		new MiscMarker(`wwGqo`, Perks.vulture, [452.7095809502072, 254.33556167620338]),
		new MiscMarker(`Hub2S`, Perks.quick, [371.53318266103963, 421.4483055393233]),
		new MiscMarker(`LAuUx`, Perks.wunderFizz, [152.04365048882423, 175.6295951969671], { uniqueDesc: `Spawns at round 25.` }),
	],
	[MapIds.tomb]: [
		new MiscMarker(`hYJma`, Perks.phd, [305.0816389023074, 61.91143283347559]),
		new MiscMarker(`j80yL`, Perks.death, [428.56163535866716, 137.88504789800595]),
		new MiscMarker(`zCVq_`, Perks.staminup, [463.3277034688893, 245.7339580099989]),
		new MiscMarker(`PUbZj`, Perks.quick, [360.42935894115567, 467.2823104856576]),
		new MiscMarker(`eUCAn`, Perks.speed, [275.9038898089378, 303.01583273813975]),
		new MiscMarker(`1e9Yb`, Perks.deadshot, [294.7227678421485, 132.0511102669367]),
		new MiscMarker(`fsBhA`, Perks.jugg, [207.645586434241, 422.62734566108963]),
		new MiscMarker(`xUrx3`, Perks.wunderFizz, [150.86998830014747, 280.05042225693336], { uniqueDesc: `Spawns at round 25.` }),
	],
	[MapIds.shatteredVeil]: [
		new MiscMarker(`V0gob`, Perks.quick, [213.24637618213714, 155.5444155681471]),
		new MiscMarker(`m5mJp`, Perks.speed, [91.46342528119638, 302.10646532273955]),
		new MiscMarker(`V93ey`, Perks.jugg, [279.3175984176603, 334.7499773759611]),
		new MiscMarker(`v1P3F`, Perks.phd, [295.33139678339165, 268.2311226260001]),
		new MiscMarker(`RneKw`, Perks.staminup, [331.9783584280461, 412.66326557846173]),
		new MiscMarker(`QkalJ`, Perks.elemental, [424.3656566918808, 438.22375143145604]),
		new MiscMarker(`MJgFd`, Perks.death, [382.4834148122757, 333.2101890715639]),
		new MiscMarker(`6gTBO`, Perks.doubleTap, [440.03063160978655, 361.2441947120343]),
	],

	/////////////////////Outbreak/////////////////////////

	[MapIds.zoo]: [
		new MiscMarker(`LPQNf`, Perks.wunderFizz, [187.39455541323238, 324.080828854942]),
	],
	[MapIds.duga]: [
		new MiscMarker(`svAvo`, Perks.wunderFizz, [219.1693079026586, 260.3728463398107]),
	],
	[MapIds.ruka]: [
		new MiscMarker(`lyrog`, Perks.wunderFizz, [294.15625, 257.75]),
	],
	[MapIds.alpine]: [
		new MiscMarker(`s22Xu`, Perks.wunderFizz, [244.61974027191252, 384.97768648319214]),
	],
	[MapIds.golova]: [
		new MiscMarker(`lbxwz`, Perks.wunderFizz, [251.3789140415691, 294.7111497838819]),
	],
	[MapIds.sanatorium]: [
		new MiscMarker(`A1YB4`, Perks.wunderFizz, [190.5554099253267, 262.79783535307956]),
	],
	[MapIds.collateral]: [
		new MiscMarker(`BUlnd`, Perks.wunderFizz, [239.15967566031475, 169.77687275024397]),
	],
	[MapIds.armada]: [
		new MiscMarker(`eGoUP`, Perks.wunderFizz, [347.8323266198514, 283.65625]),
	],
};
