import { Item, MiscMarker } from '../classes';
import { IconFileNames } from './icons';
import { MapIds } from './intel';
import { MarkerStore } from './types';

// TODO : Move as many of these as I can inside the EE Types, too much refactoring for refactoring sake
export enum EggType {
	dieMaschineEE = `Seal the Deal`, //https://callofduty.fandom.com/wiki/Seal_the_Deal
	dieMaschineWW = `D.I.E. Wonder Weapon`,

	firebaseZEE = `Maxis Potential`, //https://callofduty.fandom.com/wiki/Maxis_Potential
	firebaseZWW = `Rai K-84`,
	firebaseZSafe = `Sergei's Safe`,
	firebaseZMonkeyUpgrade = `Monkey bomb upgrade`,
	firebaseZFreeJump = `Free Jump pad`,

	mauerDerTotenEE = `Tin Man Heart`, //https://callofduty.fandom.com/wiki/Tin_Man_Heart
	mauerDerTotenWW = `CRBR-S`,
	mauerDerTotenTargets = `Target Practice`,
	mauerDerTotenKlaus = `Klaus`,

	outbreakEE1 = `Ravenov Implications`, //https://callofduty.fandom.com/wiki/Ravenov_Implications
	outbreakEE2 = `Entrapment`, //https://callofduty.fandom.com/wiki/Entrapment
};

export const WorldEventTypes = {
	furyCrystal: new Item({ title: `Fury Crystal` }),
	escort: new Item({ title: `Escort` }),
	redChallengeChest: new Item({ title: `Red Challenge Chest` }),
	purpleChallengeChest: new Item({ title: `Purple Challenge Chest` }),
	dragonRocket: new Item({ title: `Dragon Rocket` }),
	orda: new Item({ title: `Orda` }),
	horde: new Item({ title: `Horde` }),
	orb: new Item({
		title: `Aetherial orb`, desc: `Damage it and chase it 3 times, you can also shoot it mid-air whilst moving to each location.`,
	}),
	musicRadio: new Item({ title: `Music radio` }),
};

const markers = {
	// Part of the music easter egg quests for Cold War
	cassetteTape: new Item({
		title: `Cassette Tape`, icon: IconFileNames.cassette,
	}),
	// Part of the music easter egg quests for BO6
	mrPeeksHeadphones: new Item({
		title: `Mr Peeks Headphones`, icon: IconFileNames.cassette,
		desc: `1 of 3 needed for the easter egg song.`,
	}),
	clue: new Item({ title: `Visual Clue`, icon: IconFileNames.clue }),
	// An initially hidden area, or interactable, that makes available a new area that is not immediately accessible.
	secretArea: new Item({
		title: `Secret Area`, icon: IconFileNames.secretArea,
	}),
	// Can be interacted with, but provides no direct reward
	interactable: new Item({
		title: `Interactable Object`, icon: IconFileNames.interactable,
	}),
	// A bonus interactable or side quest that provides a reward
	bonus: new Item({
		title: `Bonus Item`, icon: IconFileNames.interactable,
	}),
	fullPower: new Item({
		title: `Full Power`, icon: IconFileNames.fullPower,
	}),
	bonusPoints: new Item({
		title: `Bonus Points`, icon: IconFileNames.bonusPoints,
	}),
	nuke: new Item({
		title: `Nuke`, icon: IconFileNames.nuke,
	}),
	maxAmmo: new Item({
		title: `Max Ammo`, icon: IconFileNames.maxAmmo,
	}),
	maxArmour: new Item({
		title: `Max Armour`, icon: IconFileNames.maxArmour,
	}),
	doublePoints: new Item({
		title: `Double Points`, icon: IconFileNames.doublePoints,
	}),
	instaKill: new Item({
		title: `Insta Kill`, icon: IconFileNames.instaKill,
	}),
	fireSale: new Item({
		title: `Fire Sale`, icon: IconFileNames.fireSale,
	}),
	randomPerk: new Item({
		title: `Random Perk`, icon: IconFileNames.randomPerk,
	}),
	freePerk: new Item({
		title: `Free Perk / Challenge`, icon: IconFileNames.randomPerk,
	}),
	shovel: new Item({
		title: `Shovel`, desc: `Used to dig up spots on the map.`, icon: IconFileNames.shovel,
	}),
	// Die Maschine specific
	dieMaschineBonusChest: new Item({
		title: "Coffin Dance", icon: IconFileNames.chest,
	}),
	dieMaschineAntenna: new Item({
		title: "Radio Alignment", icon: IconFileNames.interactable,
	}),
	dieMaschineOrdaHand: new Item({
		title: "Orda Hand", icon: IconFileNames.interactable,
	}),
	dieMaschineFloatingBodies: new Item({
		title: "Floating Bodies", icon: IconFileNames.interactable,
	}),
	// D.I.E. Wonder Weapon Specific
	thermophasic: new Item({ title: `D.I.E. Thermophasic Upgrade`, icon: IconFileNames.upgrade, }),
	nova5: new Item({ title: `D.I.E. Nova-5 Upgrade`, icon: IconFileNames.upgrade, }),
	electrobolt: new Item({ title: `D.I.E. Electrobolt Upgrade`, icon: IconFileNames.upgrade, }),
	cryoemitter: new Item({ title: `D.I.E. Cryo-Emitter Upgrade`, icon: IconFileNames.upgrade, }),
	// Firebase Z specific
	firebaseZBonusChest: new Item({
		title: `Bunny Scare`, icon: IconFileNames.chest,
	}),
	// Maeur Der Toten specific
	mauerDerTotenBonusChest: new Item({
		title: `Hasenbau Club`, icon: IconFileNames.mrPeeksBlue,
	}),
	// Forsaken specific
	forsakenBonusChest: new Item({
		title: "Bonus Chest", icon: IconFileNames.chest,
	}),
	forsakenPizza: new Item({
		title: `Ronald Raygun Pizza`, icon: IconFileNames.pizza,
	}),
	// Outbreak specific
	dementedEcho: new Item({ title: 'Demented Echo', desc: 'Possible location. Starts spawning from round 2 onwards. Destroy it before it touches you to get a reward.', icon: IconFileNames.demented, }),
	aetherialOrb: new Item({ title: `Aetherial Orb`, desc: `Possible location.\nCan be shot for essence, follow it to all locations in order to destroy it at the end to gain loot.`, icon: IconFileNames.orb, }),
	unknownSignal: new Item({ title: 'Unknown Signal Radio', desc: 'Possible location, only one can spawn. Power on and then match the tone of the 3 surrounding amplifiers to be rewarded with an easter egg song and essence. Using subtitles is recommended.', icon: IconFileNames.cassette, }),
	unknownSignalAmp: new Item({ title: 'Unknown Signal Amplifier', desc: 'Tune all of the 3 amplifiers to the same tone as the central radio in order to fix the radio to be rewarded with an easter egg song and essence.', icon: IconFileNames.interactable, }),
	zooMask: new Item({ title: 'Tiger Mask', desc: `Part of the super easter egg, can be interacted with in order to make the next warp be guaranteed to be Zoo.`, icon: IconFileNames.mask }),
	// BO6 Specific
	// Liberty Falls
	bankVault: new Item({ title: 'Bank Vault', desc: `Opened by finding 3, 2 digit numbers around the map.\nAfter gaining entry player can bring a loot key (dropped by specials & elites) to open any of the 9 lootable deposit boxes.`, icon: IconFileNames.secretArea }),
	armoury: new Item({ title: 'Armoury', desc: `Can be entered at any time with cool-downs in between. Used to claim loot key rewards, unlike Liberty Falls, the doors are not finite and will re-lock.`, icon: IconFileNames.secretArea }),
	mrPeeksBowling: new Item({ title: 'Mr Peeks - Bowling!', desc: 'Find all collectibles on the map to be teleported to the bowling alley for a game and a reward!', icon: IconFileNames.mrPeeks, }),
	mrPeeksBowlingShoe: new Item({ title: 'Mr Peeks - Bowling Shoe', desc: 'Shoot all of the shoes to start a bowling mini game!', icon: IconFileNames.mrPeeksBlue, }),
	// Terminus
	sporesEgg: new Item({
		title: `Free Perk - Spores`, desc: `Final Spores Location\nAfter shooting all the spore islands shoot all spores here to be rewarded with a Random Perk powerup.`, icon: IconFileNames.randomPerk,
	}),
	sporesEggIsland: new Item({
		title: `Spore Island`, desc: `1 of 4 potential islands covered in spores. Shoot all spores on this island (you'll get an audio cue if done right), then find more islands over the next 2 rounds (can only find one per round) and repeat.\nAfter completing the last island look here:`, icon: IconFileNames.interactable,
	}),
	megaStuffyMain: new Item({
		title: `Mega-Stuffy!`, desc: `Collect 6 stuffed animals around the map. After collecting all of them, head back here and interact with all of the animals, now located on the bunk beds. And when all are interacted with your new friend will spawn!`, icon: IconFileNames.mrPeeks,
	}),
	megaStuffyCollectible: new Item({
		title: `Stuffed Animal`, desc: `1 of 6 Stuffed animals that need to be interacted with/shot in order to spawn a friendly NPC.`, icon: IconFileNames.mrPeeksBlue,
	}),
	meteorMain: new Item({
		title: `Meteor Landing Site`, desc: `Landing site of a meteor that can be shot down by the Void Canon trap, after activating the 2 towers with dead wire.`, icon: IconFileNames.mrPeeks,
	}),
	meteorTower: new Item({
		title: `Meteor Tower`, desc: `1 of 2 Towers that need to be shot with a weapon equipt with dead wire, once they are both activated and the red light on top stays lit, cycle to the next round and activate the Void Canon.`, icon: IconFileNames.interactable,
	}),
	mrPeeksBoatRace: new Item({
		title: `Mr Peeks - Boat Race!`, desc: `Underwater there is a pink boat, with a flashing red light. Interact with it to be teleported into a boat race game and play for a reward!`, icon: IconFileNames.mrPeeks,
	}),
	whackACrab: new Item({
		title: `Free Perk - Whack A Crab`, desc: `Throw a grenade/molotov at the crab cage up in the trees. 4 crab spots will spawn around the island, melee them to start a small mini game, win to be rewarded with loot & perks. `, icon: IconFileNames.randomPerk,
	}),
	cursedTreasureHunt: new Item({
		title: `Cursed Treasure Hunt`, desc: `Break the stalagmites with a melee attack with melee macchiato equipt to begin a side quest. Collect a watch first, then go to each location on the map, defeating a HVT at each highlighted location. After returning 3 coins you will be rewarded with legendary weapons.`, icon: IconFileNames.mrPeeks,
	}),
	cursedTreasureHuntSkeleton: new Item({
		title: `Cursed Skeleton`, desc: `1 of 3 skeletons that will spawn a HVT that drop a cursed coin, when set on fire after delivering the watch during the cursed treasure hunt.`, icon: IconFileNames.mrPeeks,
	}),
	culinaryDelight: new Item({
		title: `Culinary Delight`, desc: `Side quest involving Oil (located directly to the right of the hobs).\nFish (obtained from blowing up/shocking any fish around the map), and 5 different ingredients.\nAfter collecting any or all of them, interacting with the pan, then waiting 1 round and interacting with the pan, will then unlock the achievement.`, icon: IconFileNames.workbench,
	}),
	culinaryDelightIngredient: new Item({
		title: `Culinary Delight - Ingredient`, desc: `An ingredient involved in the Culinary Delight side egg.`, icon: IconFileNames.interactable,
	}),
	// Citadelle Des Morts
	cannonPart: new Item({
		title: `Cannon Upgrade Part`, icon: IconFileNames.interactable,
	}),
	alcoholBottle: new Item({
		title: `Alcohol Bottle`, icon: IconFileNames.bottle,
		desc: `1 of 3 needed for the bar easter egg.`,
	}),
	barEgg: new Item({
		title: `Bartending Egg`, icon: IconFileNames.bottle,
		desc: `After collecting all 3 bottles, you can come back here to trigger the easter egg that rewards you with intel and a free PHD flopper perk.`,
	}),
	mrPeeksHideNSeek: new Item({ title: `Mr Peeks - Hide 'N Seek!`, desc: 'Find all Mr Peeks dolls in a specific order, to unlock a free perk! Originally found by one of the creators!', icon: IconFileNames.mrPeeks, }),
	cannonEgg: new Item({
		title: `Clock Tower Monkey Bomb`, icon: IconFileNames.interactable,
	}),
	goldArmour: new Item({
		title: `Golden Armour`, icon: IconFileNames.goldenArmour,
	}),
	digSite: new Item({
		title: `Dig Site`, icon: IconFileNames.digSite,
		desc: `Dig up using the shovels to get salvage and various rewards. Also involved with a side egg involving green gems after getting death perception.`
	}),
	statueHead: new Item({
		title: `Statue Head`, icon: IconFileNames.mrPeeks,
		desc: `Can be melee'd open and a statue head can be found inside. Take this and the other head back to the statues in spawn to enable the Blood Sacrifice side egg.`
	}),
	// Shattered Veil
	wunderwaffeStart: new Item({
		title: `Wunderwaffe DG-2 - Start`, desc: `The start of the free Wunderwaffe Side Egg. Will not spawn until you have obtained at least 1 elemental raygun variant.`, icon: IconFileNames.objective,
	}),
	wunderwaffeStep: new Item({
		title: `Wunderwaffe DG-2 - Orb Step`, desc: `1 of 3 glowing purple items, that when shot, spawn an orb that needs to have the items around it destroyed, after doing all 3 the Wunderwaffe will be collectable.`, icon: IconFileNames.orb,
	}),
	wunderwaffeComplete: new Item({
		title: `Wunderwaffe DG-2 - Finish`, desc: `After destroying all 3 floating purple masses, come here and shoot the purple smoke to drop the weapon.`, icon: IconFileNames.objective,
	}),
	mrPeeksParts: new Item({
		title: `Mr Peeks Part`, desc: `1 of 6 parts around the map, that once all collected will allow you to spawn a friendly NPC at the motor court.`, icon: IconFileNames.mrPeeksBlue,
	}),
	mrPeeksComplete: new Item({
		title: `Mr Peeks - Donut Egg`, desc: `Once all 6 parts are collected come here and interact with the parts on the sandbags to spawn a friendly NPC.`, icon: IconFileNames.mrPeeks,
	}),
	evilSamComputer: new Item({
		title: `S.A.M Trap - Computer`, desc: `1 of 3 computers that can be interacted with, if you interact with one and end the round it will indicate if it was infected and then can be interacted with again to obtain a hard drive.`, icon: IconFileNames.interactable,
	}),
	evilSamTrapComplete: new Item({
		title: `S.A.M Trap Egg`, desc: `After obtaining the hard drive from the computers and without ending the round, interact with this computer to activate the S.A.M trap easter egg.`, icon: IconFileNames.trap,
	}),
};

// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it`s very very unlikely but still possible).

export const StaticEggStore: MarkerStore = {
	[MapIds.dieMaschine]: [
		new MiscMarker(`3WQ2t`, markers.cassetteTape, [162.08070435536573, 256.7927495340165], { uniqueDesc: `1 of 3 needed for the easter egg song\nIn the fridge.` }),
		new MiscMarker(`hHYOo`, markers.dieMaschineAntenna, [246.73749910857293, 412.077060366895], { uniqueDesc: `1 of 3 satellite dishes that can be shot to readjust them, once all 3 are pointing at the central building, electricity will hit an antenna and produce essence.` }),
		new MiscMarker(`4ELTq`, markers.dieMaschineAntenna, [417.49920845357474, 232.99036862739175], { uniqueDesc: `1 of 3 satellite dishes that can be shot to readjust them, once all 3 are pointing at the central building, electricity will hit an antenna and produce essence.` }),
		new MiscMarker(`V8VJ_`, markers.dieMaschineAntenna, [184.41720294197458, 26.708698357113562], { uniqueDesc: `1 of 3 satellite dishes that can be shot to readjust them, once all 3 are pointing at the central building, electricity will hit an antenna and produce essence.` }),
		new MiscMarker(`8tI4t`, markers.clue, [221.30221321842092, 14.634501196702029], { uniqueTitle: `Orda Bigfoot`, uniqueDesc: `Visual easter egg that starts around round 42. Screen-shake will happen and the Orda can be spotted walking along the treeline.` }),
		new MiscMarker(`Ro0Nv`, markers.dieMaschineFloatingBodies, [209.88016350392178, 52.82697992955854], { uniqueDesc: `1 of 5 locations, they spawn in one at a time, only in the dark aether. After shooting them all, one will spawn above the lake. Stand directly underneath and shoot it to earn your reward!` }),
		new MiscMarker(`3hdzn`, markers.dieMaschineFloatingBodies, [399.77174000747004, 244.14631264741922], { uniqueDesc: `1 of 5 locations, they spawn in one at a time, only in the dark aether. After shooting them all, one will spawn above the lake. Stand directly underneath and shoot it to earn your reward!` }),
		new MiscMarker(`mdXJT`, markers.dieMaschineFloatingBodies, [61.036578161854806, 348.729455345802], { uniqueDesc: `1 of 5 locations, they spawn in one at a time, only in the dark aether. After shooting them all, one will spawn above the lake. Stand directly underneath and shoot it to earn your reward!` }),
		new MiscMarker(`4Wsb9`, markers.dieMaschineFloatingBodies, [221.30221321842092, 157.05318357436323], { uniqueDesc: `Final Floating Body\nOnly in the dark aether, will only spawn after shooting all 5 others. Stand directly underneath and shoot it to earn your reward!` }),
	],
	[MapIds.dieMaschineUnderground]: [
		new MiscMarker(`se3Jv`, markers.cassetteTape, [349.60922508562146, 350.0557392855062], { uniqueDesc: `1 of 3 needed for the easter egg song\nIn Vogel's office on the bottom shelf by the zombie spawn window.` }),
		new MiscMarker(`AJI8t`, markers.cassetteTape, [149.7210717465117, 329.38635784232576], { uniqueDesc: `1 of 3 needed for the easter egg song\nOn the very top corner of a bloodied beige monitoring device. It's at eye level, easily missed.` }),
		new MiscMarker(`4Edp9`, markers.dieMaschineOrdaHand, [345.24724776945624, 316.846711383994], { uniqueDesc: `Down the inaccessible hallway. Can only be activated in the dark aether. You need to shoot 4 buttons to turn on 4 green lights, when activated there will be a large green light from the closest left door. Once this is activated, shoot the button of the door with the large green light to trigger the Orda Hand. After 15 zombies are caught you are rewarded with a legendary weapon upgrade.` }),
		new MiscMarker(`teuED`, markers.dieMaschineFloatingBodies, [113.86355809141334, 264.13489964779274], { uniqueDesc: `1 of 5 locations, they spawn in one at a time, only in the dark aether. After shooting them all, one will spawn above the lake. Stand directly underneath and shoot it to earn your reward!` }),
		new MiscMarker(`2TA2d`, markers.dieMaschineFloatingBodies, [324.45759970249134, 279.48327895165096], { uniqueDesc: `1 of 5 locations, they spawn in one at a time, only in the dark aether. After shooting them all, one will spawn above the lake. Stand directly underneath and shoot it to earn your reward!` }),
		new MiscMarker(`1m5tF`, markers.dieMaschineBonusChest, [147.39538299834174, 388.52809723485626], { uniqueDesc: `Downstairs, hidden behind the top left of the zombie spawn window\n1 of 5 blue orbs that you can shoot for a bonus chest.` }),
		new MiscMarker(`PxlsM`, markers.dieMaschineBonusChest, [76.10682851697437, 358.63289696847636], { uniqueDesc: `1 of 5 blue orbs that you can shoot for a bonus chest.` }),
		new MiscMarker(`ONsCv`, markers.dieMaschineBonusChest, [201.05343475851072, 301.68965836584806], { uniqueDesc: `High up on the wall\n1 of 5 blue orbs that you can shoot for a bonus chest.` }),
		new MiscMarker(`RFgwR`, markers.dieMaschineBonusChest, [221.09307449751262, 347.24424924795073], { uniqueDesc: `1 of 5 blue orbs that you can shoot for a bonus chest.` }),
		new MiscMarker(`7TACp`, markers.dieMaschineBonusChest, [134.79653471600014, 401.6474904867542], { uniqueDesc: `Hidden behind the grating\n1 of 5 blue orbs that you can shoot for a bonus chest.` }),
	],
	[MapIds.firebaseZSpawn]: [
		new MiscMarker(`Xst99`, markers.cassetteTape, [361.3527921527954, 188.83980649518872], { uniqueDesc: `1 of 3 needed for the easter egg song\nUp the stairs on the book shelf.` }),
		new MiscMarker(`ALMtJ`, markers.cassetteTape, [158.88932890084, 205.2850129398853], { uniqueDesc: `1 of 3 needed for the easter egg song\nInside a pigeon hole next to the locker containing one of the compounds for the main quest.` }),
		new MiscMarker(`tdq5M`, markers.firebaseZBonusChest, [324.0469269977337, 242.0591502874637], { uniqueTitle: `Mr Peeks Jumpscare`, uniqueDesc: `Stare at the bunny in outside of the map bounds in order to be teleported to the Dark Aether and obtain a bonus chest.` }),
	],
	[MapIds.firebaseZ]: [
		new MiscMarker(`_J2DT`, markers.cassetteTape, [254.14859342124302, 233.1454721757814], { uniqueDesc: `1 of 3 needed for the easter egg song\nOn the floor resting against a filing cabinet in the motor pool office.` }),
		// Monkey bomb upgrade?
	],
	[MapIds.mauerDerToten]: [
		new MiscMarker(`_n0MB`, markers.mauerDerTotenBonusChest, [193.68010197590363, 264.8048544502154], { uniqueDesc: `1 of 6 Mr Peeks pieces used to access the bonus chest room.` }),
		new MiscMarker(`drKer`, markers.interactable, [364.2365012890661, 214.16776152079905], { uniqueTitle: `Klaus Disk Box`, uniqueDesc: `Use blacklight to check if it contains a disk, order Klaus to open if it does. Used to upgrade Klaus a second time.` }),
		new MiscMarker(`eQXff`, markers.interactable, [206.05222014011366, 330.2612687292476], { uniqueTitle: `Klaus Disk Box`, uniqueDesc: `Use blacklight to check if it contains a disk, order Klaus to open if it does. Used to upgrade Klaus a second time.` }),
	],
	[MapIds.mauerDerTotenStreets]: [
		new MiscMarker(`ook1f`, markers.cassetteTape, [364.594308702165, 411.59576707869667], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`YMZPe`, markers.cassetteTape, [175.42748080394747, 324.57693567676864], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`00CEF`, markers.cassetteTape, [185.86657193523203, 70.19853360643957], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`pufCN`, markers.mauerDerTotenBonusChest, [310.47106934268305, 281.8460771337832], { uniqueDesc: `1 of 6 Mr Peeks pieces used to access the bonus chest room.` }),
		new MiscMarker(`9z8Uu`, markers.mauerDerTotenBonusChest, [315.8911862106404, 75.03474289078483], { uniqueDesc: `1 of 6 Mr Peeks pieces used to access the bonus chest room.` }),
		new MiscMarker(`1uxx8`, markers.mauerDerTotenBonusChest, [317.22176766835554, 386.3680282265149], { uniqueDesc: `1 of 6 Mr Peeks pieces used to access the bonus chest room.` }),
		new MiscMarker(`IC0Xq`, markers.mauerDerTotenBonusChest, [172.9720302577955, 466.15217502439106], { uniqueDesc: `1 of 6 Mr Peeks pieces used to access the bonus chest room.` }),
		new MiscMarker(`r79fA`, markers.mauerDerTotenBonusChest, [152.2094092404965, 343.9680542153249], { uniqueDesc: `1 of 6 Mr Peeks pieces used to access the bonus chest room.` }),
		new MiscMarker(`RC0It`, markers.interactable, [131.97446059908233, 383.233529816566], { uniqueTitle: `Klaus Disk Box`, uniqueDesc: `Use blacklight to check if it contains a disk, order Klaus to open if it does. Used to upgrade Klaus a second time.` }),
		new MiscMarker(`p0jy0`, markers.interactable, [296.2174019490392, 91.91078506007518], { uniqueTitle: `Klaus Disk Box`, uniqueDesc: `Use blacklight to check if it contains a disk, order Klaus to open if it does. Used to upgrade Klaus a second time.` }),
		new MiscMarker(`1Zm1y`, markers.interactable, [202.13121369227582, 53.47866191858418], { uniqueTitle: `Klaus Disk Box`, uniqueDesc: `Use blacklight to check if it contains a disk, order Klaus to open if it does. Used to upgrade Klaus a second time.` }),
		new MiscMarker(`1TKX2`, markers.interactable, [298.34930940180675, 420.2199816609127], { uniqueTitle: `Klaus Disk Box`, uniqueDesc: `Use blacklight to check if it contains a disk, order Klaus to open if it does. Used to upgrade Klaus a second time.` }),
	],
	[MapIds.forsaken]: [
		new MiscMarker(`VzBDN`, markers.cassetteTape, [160.83297381918277, 202.37192487696], { uniqueTitle: `Bubby Defense`, uniqueDesc: `Activate him by placing the aether bunny inside his back panel. Survive the timer by defending him to obtain a gold reward chest.` }),
		new MiscMarker(`aIGFd`, markers.bonus, [130.6702681516008, 187.2383874312874], { uniqueTitle: `PHD Slide Spot`, uniqueDesc: `When you cause a PHD explosion at this spot in order to obtain a powerup, or the Aether Bunny, used in the Bubby easter egg.` }),
		new MiscMarker(`yjPIh`, markers.bonus, [52.55243726963396, 147.19548401911365], { uniqueTitle: `PHD Slide Spot`, uniqueDesc: `When you cause a PHD explosion at this spot in order to obtain a powerup, or the Aether Bunny, used in the Bubby easter egg.` }),
		new MiscMarker(`JcFu8`, markers.bonus, [145.65459465472622, 153.68343923758698], { uniqueTitle: `PHD Slide Spot`, uniqueDesc: `When you cause a PHD explosion at this spot in order to obtain a powerup, or the Aether Bunny, used in the Bubby easter egg.` }),
		new MiscMarker(`u2RLm`, markers.bonus, [133.8172435222692, 112.61549892471038], { uniqueTitle: `Pistol Blueprint`, uniqueDesc: `When interacted with, it starts a small shooting gallery in the store front, when completed successfully it upgrades the held weapons rarity by 1 level.` }),
		new MiscMarker(`UKMsS`, markers.bonus, [399.518718750346, 162.32261744868782], { uniqueTitle: `SMG Blueprint`, uniqueDesc: `When interacted with, it starts run and gun shooting gallery throughout the pizza store and up the stairs on the left side, when completed successfully it upgrades the held weapons rarity by 1 level.` }),
		new MiscMarker(`fiK5X`, markers.bonus, [78.67637077654524, 112.73252751643948], { uniqueTitle: `Sniper Blueprint`, uniqueDesc: `When interacted with, it starts a shooting gallery across the skyline of the stores, when completed successfully it upgrades the held weapons rarity by 1 level.` }),
		new MiscMarker(`j21QQ`, markers.bonus, [89.5625, 101.65625], { uniqueTitle: `Arcade Token Dispenser`, uniqueDesc: `Dispenses tokens for 10k essence, or if knifed for the first time.` }),
		new MiscMarker(`vHgbN`, markers.bonus, [126.06004598884398, 220.60508048047697], { uniqueTitle: `Anytown Grand Prix`, uniqueDesc: `When impacted by a PHD explosion, activates and allows you to race ARC-XDs around the map with friends.` }),
		new MiscMarker(`E5bOF`, markers.forsakenBonusChest, [97.79068103184147, 71.92250393932072], { uniqueTitle: `World At War`, uniqueDesc: `Uses an arcade token, teleports you to Nacht, fight through the waves in the time limit to earn the maximum reward.` }),
		new MiscMarker(`SsF1e`, markers.forsakenBonusChest, [112.51909400070444, 83.36132213341226], { uniqueTitle: `Der Eisendrache`, uniqueDesc: `Uses an arcade token, teleports you to the top of the pyramid, starting a dragon trial from outbreak, will reward you with a loot chest.` }),
		new MiscMarker(`YCmuv`, markers.bonus, [98.43470550590929, 90.45351316759233], { uniqueTitle: `Enduro`, uniqueDesc: `Uses an arcade token, drive around in a room with an ARC-XD to collect as much essence as possible.` }),
		new MiscMarker(`UjJ2J`, markers.secretArea, [425.378151687563, 169.59318438272373], { uniqueTitle: `Ronald Raygun`, uniqueDesc: `Secret room that can be teleported into using the upgraded aether shroud ability whilst facing the door.\nDeliver pizzas to 3 locations around the map and interact with him to receive a reward each time.` }),
		new MiscMarker(`SfL7b`, markers.forsakenPizza, [86.25331875878506, 102.71430028850807], { uniqueDesc: `Pizza Delivery\nInteractable when holding a pizza from Ronald Raygun.` }),
		new MiscMarker(`dquTj`, markers.forsakenPizza, [162.7646126643831, 138.09457142299507], { uniqueDesc: `Pizza Delivery\nInteractable when holding a pizza from Ronald Raygun.` }),
		new MiscMarker(`m8uSv`, markers.forsakenPizza, [167.45318425512843, 244.97965375670142], { uniqueDesc: `Pizza Delivery\nInteractable when holding a pizza from Ronald Raygun.` }),
		new MiscMarker(`5m8bE`, markers.forsakenPizza, [105.75984994618577, 219.02958149971576], { uniqueDesc: `Pizza Delivery\nInteractable when holding a pizza from Ronald Raygun.` }),
	],
	[MapIds.forsakenUnderground]: [
		// Shoot floating manequins above tank?
	],
	/////////////////////Outbreak Items/////////////////////////
	[MapIds.zoo]: [
		new MiscMarker(`tzc4_`, markers.dementedEcho, [163.36993130570124, 296.445005309222]),
		new MiscMarker(`cl6IT`, markers.dementedEcho, [203.0904837783254, 333.7537888538516]),
		new MiscMarker(`AuC64`, markers.dementedEcho, [211.47346160666785, 323]),
		new MiscMarker(`s9ryH`, markers.dementedEcho, [213.7534729131719, 373.50719403987466]),
		new MiscMarker(`a0AnD`, markers.dementedEcho, [116.9816405037569, 387.408120242332]),
		new MiscMarker(`avNJX`, markers.aetherialOrb, [350.0944802125016, 341.88195044411935]),
		// TODO: Add steps 2 and 3 of aetherial orb movement steps and draw lines between them on the map.
		new MiscMarker(`33WZV`, markers.aetherialOrb, [327.83519665477627, 266.9414020277552]),
		new MiscMarker(`Dg5oV`, markers.aetherialOrb, [206.24902262075253, 214.86737932979338], { uniqueDesc: `On top of the gas station roof, in the middle of the circular sign.` }),
		new MiscMarker(`DwFPn`, markers.aetherialOrb, [198.63857629383395, 282.6457038605504], { uniqueDesc: `Inside the green rail walkway.` }),
		new MiscMarker(`Td7Ez`, markers.aetherialOrb, [137.78125, 371.03125], { uniqueDesc: `Inside the prison cell.` }),
		new MiscMarker(`RxA82`, markers.unknownSignal, [377.93564104802994, 370.7222945155921]),
		new MiscMarker(`1j__k`, markers.unknownSignalAmp, [357.82570526062756, 355.42125641648164]),
		new MiscMarker(`QdAzj`, markers.unknownSignalAmp, [389.3021264930835, 389.95788526875964]),
		new MiscMarker(`9uURg`, markers.unknownSignalAmp, [420.77854772553945, 359.7929815876561]),
		new MiscMarker(`NP9oR`, markers.unknownSignal, [238.29262198149303, 129.0956431457546]),
		new MiscMarker(`29Qp7`, markers.unknownSignalAmp, [264.5785088853629, 115.2157122105336]),
		new MiscMarker(`GCkDK`, markers.unknownSignalAmp, [256.59447781643047, 171.7180859291324]),
		new MiscMarker(`7NQwS`, markers.unknownSignalAmp, [217.90263494391172, 126.14769321261032]),
		new MiscMarker(`6YPvC`, markers.unknownSignal, [135.51866728917045, 369.0881874999369], { uniqueDesc: `On the roof.` }),
		new MiscMarker(`1kkfP`, markers.unknownSignalAmp, [123.58335545433826, 342.0448860007602]),
		new MiscMarker(`omF_y`, markers.unknownSignalAmp, [124.48983483419893, 362.89391173755564]),
		new MiscMarker(`wUSx0`, markers.unknownSignalAmp, [101.22353075110836, 383.59185757770763]),
		new MiscMarker(`41iYu`, markers.bonus, [307.9623739662823, 450.6289780715707], { uniqueTitle: `Ritual Site / The Pact Altar`, uniqueDesc: `Interact with the alter to provide a reward based on your completion of the main quests in other maps. The obelisks will indicate which you have completed in order of release left to right. The reward will increase your starting weapon rarity permanently.` }),
	],
	[MapIds.duga]: [
		new MiscMarker(`BcM6G`, markers.dementedEcho, [218.2373426139386, 258]),
		new MiscMarker(`X69Ma`, markers.dementedEcho, [168.83660953980305, 352.95720859235564]),
		new MiscMarker(`M6PhI`, markers.dementedEcho, [400.31381858522724, 250.95835630001685], { uniqueDesc: `Inside the underground bunker` }),
		new MiscMarker(`ZeAyZ`, markers.dementedEcho, [147.2673857661874, 265.46200912494885], { uniqueDesc: `Inside the underground bunker` }),
		new MiscMarker(`UtKcD`, markers.dementedEcho, [104.0667719037023, 306.8175516471223]),
		new MiscMarker(`xeydw`, markers.dementedEcho, [256.02458104515534, 191.20823141347046]),
		new MiscMarker(`xCH_G`, markers.dementedEcho, [361.7255340221552, 79.6459891424929]),
		new MiscMarker(`X3Me0`, markers.aetherialOrb, [386.53125, 287.125], { uniqueDesc: `On the roof.` }),
		new MiscMarker(`fs3If`, markers.aetherialOrb, [270.05608471024027, 443.38948547967425]),
		new MiscMarker(`piNyx`, markers.aetherialOrb, [117.21875, 318.09375]),
		new MiscMarker(`nAWMN`, markers.aetherialOrb, [188.85744444838855, 236.65597160044615], { uniqueDesc: `On top of the checkpoint roof.` }),
		new MiscMarker(`dSSMf`, markers.aetherialOrb, [200.7261531499677, 272.9761903253458], { uniqueDesc: `In the office with the flags and green table, second floor.` }),
		new MiscMarker(`6IA1p`, markers.electrobolt, [218.94657303732083, 383.23711642835906]),
		new MiscMarker(`P010c`, markers.unknownSignal, [122.47897236448067, 293.85384697759383]),
		new MiscMarker(`opqPj`, markers.unknownSignalAmp, [133.38725584069223, 266.96588507570397]),
		new MiscMarker(`hhCoX`, markers.unknownSignalAmp, [141.13787831063203, 319.6892552107265]),
		new MiscMarker(`guaSk`, markers.unknownSignalAmp, [115.11109668317988, 325.71751713179077]),
		new MiscMarker(`T0yu1`, markers.unknownSignal, [274.4294474541645, 259.40663600008367]),
		new MiscMarker(`pjT_w`, markers.unknownSignalAmp, [250.12502637558788, 233.95397455559004]),
		new MiscMarker(`W3wWO`, markers.unknownSignalAmp, [301.3174093560544, 271.7502199336915]),
		new MiscMarker(`cILkr`, markers.unknownSignalAmp, [280.5533960723885, 286.96440478209183]),
		new MiscMarker(`KskrY`, markers.unknownSignal, [370.2698515732512, 285.9269277205488]),
		new MiscMarker(`TnyeH`, markers.unknownSignalAmp, [359.67178784306867, 309.110192130323]),
		new MiscMarker(`3l08H`, markers.unknownSignalAmp, [394.55708095491946, 339.4692288574083]),
		new MiscMarker(`86k_u`, markers.unknownSignalAmp, [400.51849180314707, 294.8690439928903]),
		new MiscMarker(`ofN6E`, markers.zooMask, [278.5808192193514, 289.4431670345211], { uniqueDesc: `On a bench.` }),
	],
	[MapIds.ruka]: [
		new MiscMarker(`18A2Y`, markers.dementedEcho, [332.61885317644305, 225.16827101672993]),
		new MiscMarker(`NFpUv`, markers.dementedEcho, [146.8961039621756, 299.61206359787775]),
		new MiscMarker(`vi0sy`, markers.dementedEcho, [198.3015251501929, 89.86190166016635]),
		new MiscMarker(`JzRzZ`, markers.dementedEcho, [324.1631998133326, 339.009553939874]),
		new MiscMarker(`Rek6g`, markers.dementedEcho, [282.9017792859132, 270.16920975405776]),
		new MiscMarker(`5mZDo`, markers.aetherialOrb, [328.04137462064233, 340.1360436719856]),
		new MiscMarker(`yyP4V`, markers.aetherialOrb, [243.34572612410255, 201.22376324513016]),
		new MiscMarker(`aYcG_`, markers.aetherialOrb, [242.8125, 349.53125]),
		new MiscMarker(`TnTWH`, markers.unknownSignal, [273.3844894026913, 119.79076679152222]),
		new MiscMarker(`aH6T2`, markers.unknownSignalAmp, [273.75459475838085, 149.89266905427343]),
		new MiscMarker(`2I5a7`, markers.unknownSignalAmp, [269.31333049010607, 113.62234419669615]),
		new MiscMarker(`908YB`, markers.unknownSignalAmp, [292.2598625428591, 126.5760316458309]),
		new MiscMarker(`dwmEB`, markers.unknownSignal, [254.72755143316522, 260.02676161362564]),
		new MiscMarker(`bm9Jg`, markers.unknownSignalAmp, [235.63212164495448, 276.01575784777333]),
		new MiscMarker(`UdjeW`, markers.unknownSignalAmp, [230.88110562109344, 247.9664901684399]),
		new MiscMarker(`vdoyD`, markers.unknownSignalAmp, [272.90932429371037, 236.9112413436863]),
		new MiscMarker(`YeH4n`, markers.thermophasic, [94.0042121017423, 334.3317226785948]),
		new MiscMarker(`PfUQA`, markers.zooMask, [246.43373481049682, 222.82413429978607], { uniqueDesc: `On a blue barrel.` }),
	],
	[MapIds.alpine]: [
		new MiscMarker(`yfDA4`, markers.dementedEcho, [335.2545905360252, 70.87629629055847]),
		new MiscMarker(`JnfGP`, markers.dementedEcho, [240.22404548274855, 373.19860378733625]),
		new MiscMarker(`BXDDX`, markers.dementedEcho, [367.45739492817876, 227.5]),
		new MiscMarker(`sKxXQ`, markers.dementedEcho, [282.063145684509, 290.79367162236287]),
		new MiscMarker(`aGYxW`, markers.dementedEcho, [211.5378017806543, 142.50036019533616]),
		new MiscMarker(`jWuD8`, markers.aetherialOrb, [295.0187358378346, 144.26938180233338]),
		new MiscMarker(`sJ9S8`, markers.aetherialOrb, [235.4375, 401.5]),
		new MiscMarker(`Crgf2`, markers.aetherialOrb, [146.62596976081815, 273.8331450619502]),
		new MiscMarker(`zAfie`, markers.aetherialOrb, [279.47416576150295, 291.08250093388114]),
		new MiscMarker(`3GAvp`, markers.aetherialOrb, [334.9574702605456, 343.89150208940714]),
		new MiscMarker(`d1atj`, markers.unknownSignal, [374.29160575898163, 235.69436209180503]),
		new MiscMarker(`0d7wk`, markers.unknownSignalAmp, [370.99794502544603, 248.07852644989876]),
		new MiscMarker(`ynbO_`, markers.unknownSignalAmp, [365.4645949931063, 212.24349766903183]),
		new MiscMarker(`kVeQB`, markers.unknownSignalAmp, [405.2096889927135, 215.92319810760293]),
		new MiscMarker(`pvOww`, markers.unknownSignal, [307.22437744909496, 93.367408459139]),
		new MiscMarker(`k1c42`, markers.unknownSignalAmp, [331.4663009821876, 100.56797980560216]),
		new MiscMarker(`qaPzE`, markers.unknownSignalAmp, [285.9826919770286, 97.92777031189901]),
		new MiscMarker(`BRkq_`, markers.unknownSignalAmp, [315.86506306485074, 72.96578964416004]),
		new MiscMarker(`zEZ1J`, markers.unknownSignal, [138.7423061920885, 328.5255775818504]),
		new MiscMarker(`ELO34`, markers.unknownSignalAmp, [160.54949105829024, 349.32004488460626]),
		new MiscMarker(`eI9WF`, markers.unknownSignalAmp, [137.32450160326422, 351.27796550726833]),
		new MiscMarker(`lQWrl`, markers.unknownSignalAmp, [143.60335049662882, 309.41897288483773]),
		new MiscMarker(`KfCN7`, markers.cryoemitter, [106.2932488669672, 313.34003330490333]),
		new MiscMarker(`Z7ZZT`, markers.zooMask, [252.94159647833757, 223.5016466331229], { uniqueDesc: `In the snow, beside a red and yellow pillar.` }),
	],
	[MapIds.golova]: [
		new MiscMarker(`_9qob`, markers.dementedEcho, [167.02309933760583, 326.8300791718768]),
		new MiscMarker(`1blw4`, markers.dementedEcho, [184.7468020757672, 156.32421714103378]),
		new MiscMarker(`qAgVa`, markers.dementedEcho, [190.00365176294605, 397.6050741155826]),
		new MiscMarker(`I5d6u`, markers.dementedEcho, [91.33402582482371, 335.3619366422391]),
		new MiscMarker(`Sjjf7`, markers.dementedEcho, [331.2666015762386, 282.2520092653466]),
		new MiscMarker(`NMtT4`, markers.dementedEcho, [136.33052041417935, 278.97388266034534]),
		new MiscMarker(`Uevdm`, markers.aetherialOrb, [334.64974840518437, 349.32449239453473]),
		new MiscMarker(`YnzHx`, markers.aetherialOrb, [100.0357091478215, 336.9160415489129]),
		new MiscMarker(`1CIV3`, markers.aetherialOrb, [234.53164273202665, 283.2184602667901]),
		new MiscMarker(`DHIpJ`, markers.aetherialOrb, [295.4188442387635, 275.8291991501066]),
		new MiscMarker(`Iyl71`, markers.aetherialOrb, [229.32359347121474, 361.107903622541]),
		new MiscMarker(`ebdmf`, markers.unknownSignal, [189.71875, 335.46875]),
		new MiscMarker(`85DV2`, markers.unknownSignalAmp, [198.03201168380622, 331.2535468165486]),
		new MiscMarker(`972aa`, markers.unknownSignalAmp, [199.7333856103604, 358.47552964141545]),
		new MiscMarker(`ybspF`, markers.unknownSignalAmp, [164.44508450219828, 338.9342482397485]),
		new MiscMarker(`eBdU3`, markers.unknownSignal, [290.22549276450945, 141.9315225998444]),
		new MiscMarker(`ldZ3K`, markers.unknownSignalAmp, [278.0406202555562, 123.14023462220023]),
		new MiscMarker(`GHxiq`, markers.unknownSignalAmp, [313.5304359327235, 146.22229073634261]),
		new MiscMarker(`LbRSO`, markers.unknownSignalAmp, [273.8728096598053, 155.46762692266708]),
		new MiscMarker(`jxkej`, markers.nova5, [197.8850734145944, 146.29544698855156]),
		new MiscMarker(`lzG2p`, markers.zooMask, [186.875, 312.03125], { uniqueDesc: `In the grass in front of the statue.` }),
	],
	[MapIds.sanatorium]: [
		new MiscMarker(`ijcwV`, markers.dementedEcho, [121.50275687461007, 277.77812593764446]),
		new MiscMarker(`FpAjy`, markers.dementedEcho, [168.9897871582542, 435.97930944364305]),
		new MiscMarker(`H8LVB`, markers.dementedEcho, [302.18576429912486, 307.75772061687144]),
		new MiscMarker(`U0DjB`, markers.dementedEcho, [289.0557298906468, 211.186559738963]),
		new MiscMarker(`rngCc`, markers.dementedEcho, [284.82361164993495, 58.75987297871505]),
		new MiscMarker(`mZ5AD`, markers.aetherialOrb, [359.5562619363169, 138.68768084911696]),
		new MiscMarker(`5u7Uw`, markers.aetherialOrb, [266.5096929330548, 199.49767362940744]),
		new MiscMarker(`rw6TZ`, markers.aetherialOrb, [234.44976450587362, 154.45378186607422]),
		new MiscMarker(`_JnnW`, markers.aetherialOrb, [152.52312850546937, 122.19272444648973]),
		new MiscMarker(`DRDhc`, markers.aetherialOrb, [152.76378076668848, 382.2723112534592]),
		new MiscMarker(`aQ1dT`, markers.unknownSignal, [315.79619113139, 213.16572267442177]),
		new MiscMarker(`L6vko`, markers.unknownSignalAmp, [327.2581304840937, 248.07852644989876]),
		new MiscMarker(`kyPMi`, markers.unknownSignalAmp, [281.41037307327866, 203.67997976183935], { uniqueDesc: `On a desk inside the offices.` }),
		new MiscMarker(`UBPJW`, markers.unknownSignalAmp, [345.1756448745272, 191.82280112111133]),
		new MiscMarker(`dnojN`, markers.unknownSignal, [146.0481425873068, 422.3500358873178]),
		new MiscMarker(`r5JyD`, markers.unknownSignalAmp, [169.33987237706896, 422.45000039285327]),
		new MiscMarker(`V2Hv_`, markers.unknownSignalAmp, [150.0467228087252, 374.96686026350983]),
		new MiscMarker(`DR4n4`, markers.unknownSignalAmp, [126.55506400789214, 447.0412687545764]),
		new MiscMarker(`3U1Kx`, markers.zooMask, [268.0254816847518, 201.69485983672456], { uniqueDesc: `Under the water in the centre of the pool by PaP.` }),
	],
	[MapIds.collateral]: [
		new MiscMarker(`LZtAf`, markers.dementedEcho, [302.1582217610988, 414.1356865122179]),
		new MiscMarker(`2ogDj`, markers.dementedEcho, [196.9588998109597, 319.81699864797247]),
		new MiscMarker(`jZYx5`, markers.dementedEcho, [304.4851067015507, 202.60851085028]),
		new MiscMarker(`kEe8z`, markers.aetherialOrb, [141.32661710174656, 118.98874482804175]),
		new MiscMarker(`B8gYS`, markers.aetherialOrb, [256.51628033942154, 167.22147796251068]),
		new MiscMarker(`PHwrQ`, markers.aetherialOrb, [313.3569142959767, 359.19613522868246]),
		new MiscMarker(`Zkss8`, markers.aetherialOrb, [253.59375, 451.4375]),
		new MiscMarker(`aKvCm`, markers.unknownSignal, [305.84476920435446, 429.33372468749263]),
		new MiscMarker(`H6dJ4`, markers.unknownSignalAmp, [342.64987791566955, 448.6244332108942]),
		new MiscMarker(`q7WFL`, markers.unknownSignalAmp, [315.53672540433615, 389.695126305816]),
		new MiscMarker(`sdqd4`, markers.unknownSignalAmp, [289.20232712604985, 451.3167622400238]),
		new MiscMarker(`quGiV`, markers.unknownSignal, [288.9614214809424, 158.0324782067784]),
		new MiscMarker(`crMVB`, markers.unknownSignalAmp, [317.22286059580455, 76.72187340893528]),
		new MiscMarker(`ZvTyQ`, markers.unknownSignalAmp, [412.572982447416, 206.47161221493477]),
		new MiscMarker(`uQEjW`, markers.unknownSignalAmp, [242.96454069561725, 196.30468377190476]),
		new MiscMarker(`HKJYL`, markers.zooMask, [253.2459340007104, 277.5226580773655], { uniqueDesc: `On a bucket, holding the door open.` }),
	],
	[MapIds.armada]: [
		new MiscMarker(`AEpO7`, markers.dementedEcho, [245.08327415625956, 200.03583430491622]),
		new MiscMarker(`eKuk9`, markers.dementedEcho, [191.30383357596716, 134.46987913495167]),
		new MiscMarker(`l9CCu`, markers.dementedEcho, [300.8856411583173, 350.8475161407786]),
		new MiscMarker(`N_jXt`, markers.aetherialOrb, [311.1126069881438, 184.77455097576265]),
		new MiscMarker(`ACjLt`, markers.aetherialOrb, [260.1864362013941, 124.3833141033948], { uniqueDesc: `Underwater, in the corner of the capsized boat. ` }),
		new MiscMarker(`h4HUS`, markers.aetherialOrb, [201.50633494672996, 388.85962652554787]),
		new MiscMarker(`Os6pL`, markers.unknownSignal, [261.9257906505539, 214.6789938332886]),
		new MiscMarker(`Y9GNs`, markers.unknownSignalAmp, [237.10489278341913, 265.0465468151352]),
		new MiscMarker(`grgkn`, markers.unknownSignalAmp, [288.1409254098644, 91.56966208677449]),
		new MiscMarker(`uUbza`, markers.unknownSignalAmp, [338.7233304224225, 286.7865934912584]),
		new MiscMarker(`ZppLw`, markers.unknownSignal, [200.86153471581986, 319.81675295943194]),
		new MiscMarker(`nJFbl`, markers.unknownSignalAmp, [197.20277672061397, 258.6536419816775]),
		new MiscMarker(`7E5gL`, markers.unknownSignalAmp, [228.20696255778262, 410.3068041089928]),
		new MiscMarker(`I7fi0`, markers.unknownSignalAmp, [251.18951176176026, 295.2778263261625]),
		new MiscMarker(`6OweP`, markers.zooMask, [251.06749530113694, 258.1062871710513], { uniqueDesc: `On the desk inside the ship, opposite the box.` }),
	],
	/////////////////////Bo6 Items/////////////////////////
	[MapIds.libertyFalls]: [
		new MiscMarker(`yGbi1`, markers.mrPeeksHeadphones, [164.25934212296625, 319.5391735432103], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`91uL5`, markers.mrPeeksHeadphones, [292.69235875192874, 273.4487864638555], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`W79dg`, markers.mrPeeksHeadphones, [190.2183565265511, 98.67280276106689], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`0JqXi`, markers.bonus, [171.02883650135874, 340.44541021518586], { uniqueTitle: `Vending Machine`, uniqueDesc: `When meleed correctly can drop bonus items each round. When hit with Melee Macchiato it blows up and offers one last reward.` }),
		new MiscMarker(`YeXWV`, markers.bonus, [269.5062750742712, 231.81422099725725], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun. Up on top of an air conditioning unit.` }),
		new MiscMarker(`zM2jb`, markers.bonus, [205.28419151815734, 340.36086600016], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun.\nOn top of the motel sign, top left.` }),
		new MiscMarker(`0OHjM`, markers.bonus, [154.626598832603, 254.25667074355712], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun.\nNext to the bowling sign, jump onto the bus to reach it.` }),
		new MiscMarker(`G4IGc`, markers.bonus, [313.2844647277621, 313.5398735527481], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun.` }),
		new MiscMarker(`4w4zQ`, markers.bonus, [298.67507993856594, 316.96235180755974], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun.` }),
		new MiscMarker(`ypSrs`, markers.bonus, [307.052489398105, 338.26344781138766], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun.` }),
		new MiscMarker(`KnYD1`, markers.bonus, [320.4359118273686, 335.96476838651415], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun.` }),
		new MiscMarker(`7xM7R`, markers.bonus, [200.86456177774397, 141.34366589801542], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun.\nOn the edge of the window on the outside of the church entrance. Look up and to the right.` }),
		new MiscMarker(`gKJVw`, markers.bonus, [244.43444833982815, 340.1405042456944], { uniqueTitle: `Aetherella Statue`, uniqueDesc: `1 of 9\n Must be collected with Jet Gun.\nCan be grabbed when looking at the video store roof when stood on the roof of Yummy Freeze.` }),
		new MiscMarker(`9G12F`, markers.bonus, [225.68311592941944, 177.1593431115426], { uniqueTitle: `Black And Gold Car`, uniqueDesc: `1 of 3 Possible locations of the Mr Peeks sat in the back of the car, indicating a spot for loot and an intel item.` }),
		new MiscMarker(`Z0ygP`, markers.bonus, [293.8925195350405, 330.2987196842777], { uniqueTitle: `Black And Gold Car`, uniqueDesc: `1 of 3 Possible locations of the Mr Peeks sat in the back of the car, indicating a spot for loot and an intel item.` }),
		new MiscMarker(`tQAjx`, markers.bonus, [282.96580199111264, 174.92431395814236], { uniqueTitle: `Black And Gold Car`, uniqueDesc: `1 of 3 Possible locations of the Mr Peeks sat in the back of the car, indicating a spot for loot and an intel item.` }),
		new MiscMarker(`mZN2H`, markers.freePerk, [269.68018735607296, 99.48248959488959], { uniqueTitle: `Free Deadshot`, uniqueDesc: `Shoot all of the cans on the fence outside the cemetary to be rewarded with a free deadshot perk. You're timed and only one person can get it per game.` }),
		new MiscMarker(`j7eXX`, markers.maxAmmo, [237.08720300956975, 462.99502722954236], { uniqueDesc: `Look down at the yellow bridge between the barrier and the start of the yellow steel beams. Shoot the small golden object to spawn a free power up.` }),
		new MiscMarker(`jBX9A`, markers.bonusPoints, [330.02159775218337, 331.85260972373345], { uniqueDesc: `Look up at the window, shoot the small golden object to spawn a free power up.` }),
		new MiscMarker(`n0XYI`, markers.nuke, [234.8822157104421, 295.15912981387015], { uniqueDesc: `Look down through the bank roof, shoot the small golden object to spawn a free power up.` }),
		new MiscMarker(`HZhs_`, markers.instaKill, [209.83458802045342, 79.00247078947527], { uniqueDesc: `Up on the top of the church roof. Shoot the small golden object to spawn a free power up.` }),
		new MiscMarker(`W_IvO`, markers.doublePoints, [316.3963689820304, 180.48306806482694], { uniqueDesc: `Up on the water tower, shoot or grenade it to spawn a free power up.` }),
		new MiscMarker(`BZuaH`, markers.maxArmour, [317.1206977585009, 266.7174080485405], { uniqueDesc: `Through the barricade in the bottom right corner of the room on a tray.`, img: `2te9o40` }),
		new MiscMarker(`wwGl1`, markers.fullPower, [142.8486545607668, 226.59081368495958], { uniqueDesc: `Behind the barrier between the cars. Might need to go up on top of the verge by the scope in order to see it.` }),
		new MiscMarker(`GrnIU`, markers.fireSale, [183.74874653681505, 199.47129553364073], { uniqueDesc: `Only appears after shooting all 7 other power ups.\nInside the bin.` }),
		new MiscMarker(`W0cQ7`, markers.bonus, [182.19997530423058, 134.13828286183295], { uniqueTitle: `Falling Zombies!`, uniqueDesc: `Cook a grenade and throw it at the zombie head on the roof to trigger a zombie rain that drop loot.` }),
		new MiscMarker(`uqQGR`, markers.mrPeeksBowling, [130.4233520842571, 270.3960054771881], { uniqueDesc: `After shooting all the shoes you will be teleported here to bowl! Score 300 for a darkops challenge, you'll always get a reward.` }),
		new MiscMarker(`C1_lA`, markers.mrPeeksBowlingShoe, [263.07941062405075, 71.73609264466869], { uniqueDesc: `Outside the map hanging from a tree.\nShoot all of them to be teleported to a game of bowling for a reward!` }),
		new MiscMarker(`XDpvp`, markers.mrPeeksBowlingShoe, [205.1716488687219, 266.0576454274178], { uniqueDesc: `On top of the casket on the left.\nShoot all of them to be teleported to a game of bowling for a reward!` }),
		new MiscMarker(`TVoa1`, markers.mrPeeksBowlingShoe, [258.9359914503427, 183.38343504085915], { uniqueDesc: `Under the chair on the right.\nShoot all of them to be teleported to a game of bowling for a reward!` }),
		new MiscMarker(`VQG2f`, markers.mrPeeksBowlingShoe, [338.20461000783763, 361.3635060584787], { uniqueDesc: `On the shelving to the right.\nShoot all of them to be teleported to a game of bowling for a reward!` }),
		new MiscMarker(`dtAm9`, markers.mrPeeksBowlingShoe, [194.2381625762071, 431.0707322886372], { uniqueDesc: `Under spawn, on the fuel station counter.\nShoot all of them to be teleported to a game of bowling for a reward!` }),
		new MiscMarker(`bw8QU`, markers.mrPeeksBowlingShoe, [163.66353585351, 283.1703256475334], { uniqueDesc: `Bonus Shoe\nSpawns a couple of rounds after bowling, can be shot to play bowling again!` }),
		new MiscMarker(`DzJw9`, markers.bankVault, [257.1898821141628, 285.095345453075]),
		new MiscMarker(`59M0p`, markers.clue, [313.2238913426472, 326.38618562722263], { uniqueTitle: `Bank Vault Number`, uniqueDesc: `1 of 3 numbers needed for the bank vault.` }),
		new MiscMarker(`AmVI8`, markers.clue, [144.84576970738917, 255.81102392565194], { uniqueTitle: `Bank Vault Number`, uniqueDesc: `1 of 3 numbers needed for the bank vault.` }),
		new MiscMarker(`Wa3zX`, markers.clue, [243.625, 293.28125], { uniqueTitle: `Bank Vault Number`, uniqueDesc: `1 of 3 numbers needed for the bank vault.` }),
		new MiscMarker(`ycopO`, markers.clue, [297.32875445409906, 383.9627368184202], { uniqueTitle: `Viewfinder`, uniqueDesc: `Set of binoculars that can be used for 50 essence. A dancing zombie can be spotted on a rock. The zombies will not attack you whilst in use. When both binoculars are focused on the dancing zombie, a party will start!` }),
		new MiscMarker(`Xvkv1`, markers.clue, [282.07221275373934, 388.5203872504264], { uniqueTitle: `Viewfinder`, uniqueDesc: `Set of binoculars that can be used for 50 essence. A dancing zombie can be spotted on a rock. The zombies will not attack you whilst in use. When both binoculars are focused on the dancing zombie, a party will start!` }),
		new MiscMarker(`9DjTf`, markers.bonus, [196.2236235990396, 77.3084034954576], { uniqueTitle: `Unlit Candles`, uniqueDesc: `1 of 2 candle racks that can be shot with Napalm burst to trigger a fire trap inside the main church building. Useful for the final battle.` }),
		new MiscMarker(`jgS2I`, markers.bonus, [218.4032735692863, 81.15692723458717], { uniqueTitle: `Unlit Candles`, uniqueDesc: `1 of 2 candle racks that can be shot with Napalm burst to trigger a fire trap inside the main church building. Useful for the final battle.` }),
		new MiscMarker(`C0jxR`, markers.bonus, [181.73527564128713, 323.1526631072432], { uniqueTitle: `Pool of Blood`, uniqueDesc: `Spawns a loot orb and or power up when 3 semtex are thrown into it during a vermin round.` }),
	],
	[MapIds.terminusBiolabs]: [
		new MiscMarker(`24MSZ`, markers.culinaryDelightIngredient, [293.65625, 253.4375], { linkedItems: `N_OVB`, uniqueTitle: `Brain`, uniqueDesc: `On a scale.` }),
		new MiscMarker(`Xwbf2`, markers.mrPeeksHeadphones, [254.37898898728324, 291.83434043830323], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`mbyjQ`, markers.mrPeeksHeadphones, [328.84799887062195, 280.98342779446585], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`mP6tq`, markers.shovel, [271.4209361682479, 298.8296841956614]),
		new MiscMarker(`Vx0wi`, markers.shovel, [232.8970978462404, 266.30525532789403]),
		new MiscMarker(`0VwZX`, markers.shovel, [371.23351810209493, 193.45052613878218]),
		new MiscMarker(`sNuAP`, markers.shovel, [312.19225980747797, 420.56146341736144]),
		new MiscMarker(`aFker`, markers.freePerk, [322.50688078091434, 253.46419422564134], { uniqueTitle: `Free Perk - Prison Cages`, uniqueDesc: `Shoot all of the zombies in the cages to progress this egg. Come back each round and kill the next set of enemies in the cages. Do this for a total of 3 rounds in order to get a Random Perk powerup.` }),
		new MiscMarker(`e2wmE`, markers.sporesEgg, [245.29420895882905, 246.69189675916428]),
		new MiscMarker(`K1Qqi`, markers.sporesEggIsland, [320.37235194976347, 369.51501360577436], { linkedItems: `e2wmE` }),
		new MiscMarker(`Wwi1L`, markers.sporesEggIsland, [181.70559599805756, 292.15948970467394], { linkedItems: `e2wmE` }),
		new MiscMarker(`IrCcu`, markers.sporesEggIsland, [394.71637855757484, 331.71296617807366], { linkedItems: `e2wmE` }),
		new MiscMarker(`rVsH3`, markers.sporesEggIsland, [280.65565928903317, 202.6034936879411], { linkedItems: `e2wmE` }),
		new MiscMarker(`zp3ym`, markers.megaStuffyCollectible, [252.61507336172045, 307.0092031071911], { linkedItems: `gyHuC`, uniqueTitle: `Elephant` }),
		new MiscMarker(`jRnGe`, markers.megaStuffyCollectible, [196.82120749690176, 157.19676798949905], { linkedItems: `gyHuC`, uniqueTitle: `Duck`, uniqueDesc: `Well hidden inside the corner of the dumpster.`, }),
		new MiscMarker(`XjZgQ`, markers.megaStuffyCollectible, [124.32855827930155, 213.8187024856514], { linkedItems: `gyHuC`, uniqueTitle: `Giraffe`, uniqueDesc: `Behind the light on the right side.` }),
		new MiscMarker(`523nW`, markers.megaStuffyCollectible, [290.40625, 298.9375], { linkedItems: `gyHuC`, uniqueTitle: `Bear`, uniqueDesc: `Near the arsenal, on a medical table near the floor.` }),
		new MiscMarker(`3ZEt8`, markers.meteorMain, [292.60321553883165, 393.8504359712161]),
		new MiscMarker(`O7hw0`, markers.mrPeeksBoatRace, [293.2228119896759, 440.84162572153747]),
		new MiscMarker(`YqWno`, markers.whackACrab, [144.1335293480531, 244.13413732050765]),
		new MiscMarker(`BP6Xq`, markers.cursedTreasureHunt, [276.04996791307724, 234.638024611905], { linkedItems: `BO6S0TAr5` }),
		new MiscMarker(`3Ig9c`, markers.cursedTreasureHuntSkeleton, [383.0625, 191.78125], { linkedItems: `BP6Xq` }),
		new MiscMarker(`ZlkGz`, markers.cursedTreasureHuntSkeleton, [274.3935309560461, 425.7227774089735], { linkedItems: `BP6Xq` }),
		new MiscMarker(`nTqHJ`, markers.cursedTreasureHuntSkeleton, [189.625, 150.25], { linkedItems: `BP6Xq` }),
		new MiscMarker(`3LAwr`, markers.bonus, [394.47230643559845, 179.2489780265029], { uniqueTitle: `Sentinel Marking - Fast Travel`, uniqueDesc: `Shoot the marking on the rock with the alt fire of the beamsmasher, to be teleported back to the main island.` }),
		new MiscMarker(`qjQEz`, markers.bonus, [290.612569909373, 281.3581262851448], { uniqueTitle: `Oxygen Mask`, uniqueDesc: `Blow up a rock underneath PaP that gives off bubbles, to uncover an oxygen mask which will greatly increase your breathing time.` }),
		new MiscMarker(`Rih5O`, markers.bonusPoints, [226.7090285465238, 139.67940147050612], { uniqueDesc: `In the top right window of the bridge of the shipwreck.` }),
		new MiscMarker(`2GqLm`, markers.nuke, [133.88706403572309, 286.350442197677], { uniqueDesc: `In the bottom left corner of the spawn window.` }),
		new MiscMarker(`Re2c7`, markers.instaKill, [383.0952276129594, 185.65191122042563], { uniqueDesc: `Up on the ruins, left side.` }),
		new MiscMarker(`BnruQ`, markers.fullPower, [233.55369505082754, 325.4311732512999], { uniqueDesc: `In a hanging square beneath the south side of the unreachable sea tower.` }),
		new MiscMarker(`1aV73`, markers.doublePoints, [331.3125, 272.96875], { uniqueDesc: `Behind some boxes in the meeting room.` }),

	],
	[MapIds.terminusPrison]: [
		new MiscMarker(`cDHde`, markers.clue, [320.0708098674256, 302.4346663766197], { uniqueTitle: `Jumpscare`, uniqueDesc: `Jump continuously after activating the elevator to have a chance at activating an alternate elevator ride down to the biolabs.` }),
		new MiscMarker(`gyHuC`, markers.megaStuffyMain, [245.6052073558197, 281.6402480556143]),
		new MiscMarker(`gAmnT`, markers.armoury, [297.56070260000484, 297.0739620832109]),
		new MiscMarker(`PKXhh`, markers.mrPeeksHeadphones, [255.34375, 288], { uniqueDesc: `1 of 3 needed for the easter egg song.` }),
		new MiscMarker(`Rs0K4`, markers.bonus, [253.64108322189168, 279.26921133637927], { uniqueTitle: `Basketball Bonus Points`, uniqueDesc: `Shoot the ball with a pack-a-punched weapon, from the east side (near engineering) in order to make it land in the hoop on the other side of the building and drop 2000 essence.` }),
		new MiscMarker(`N_OVB`, markers.culinaryDelight, [241.46875, 249.53125]),
		new MiscMarker(`lZCQo`, markers.culinaryDelightIngredient, [256.96875, 249.5625], { linkedItems: `N_OVB`, uniqueTitle: `Beans`, uniqueDesc: `Between two crates.` }),
		new MiscMarker(`zQvyy`, markers.culinaryDelightIngredient, [246.13847407960418, 302.7807642719513], { linkedItems: `N_OVB`, uniqueTitle: `Battery`, uniqueDesc: `On the desk in the middle of the room.` }),
		new MiscMarker(`Ygw12`, markers.culinaryDelightIngredient, [278.7177567942043, 255.77817285834016], { linkedItems: `N_OVB`, uniqueTitle: `Mushroom`, uniqueDesc: `By the right of the stairs when looking up.` }),
		new MiscMarker(`kL_5g`, markers.culinaryDelightIngredient, [257.6907948564727, 271.995229023223], { linkedItems: `N_OVB`, uniqueTitle: `Snowball`, uniqueDesc: `On top of the fridge.` }),
		new MiscMarker(`0cv_q`, markers.megaStuffyCollectible, [295.40625, 304.625], { linkedItems: `gyHuC`, uniqueTitle: `Unicorn`, uniqueDesc: `In a slightly open locker in the corner of the armoury room.` }),
		new MiscMarker(`gmj3c`, markers.megaStuffyCollectible, [237.59375, 298.8125], { linkedItems: `gyHuC`, uniqueTitle: `Monkey`, uniqueDesc: `Outside the caged walkway in the corner by the brick wall.` }),
		new MiscMarker(`PvId2`, markers.meteorTower, [248.07976653247508, 308.22281601773426], { linkedItems: `3ZEt8`, uniqueDesc: `Visible from the stairs south of spawn, either side.` }),
		new MiscMarker(`sesSc`, markers.meteorTower, [313.01988207230005, 260.52399603518677], { linkedItems: `3ZEt8`, uniqueDesc: `Visible from the stairs south of spawn, either side.` }),
		new MiscMarker(`wer5F`, markers.maxArmour, [285.2117140929566, 261.9035177539375], { uniqueDesc: `In back left the corner of the interrogation room inside a bucket.` }),
		new MiscMarker(`jYMo6`, markers.maxAmmo, [280.5586664702618, 271.8260457258232], { uniqueDesc: `In the guard tower, can be shot from south side, or hit with explosives from spawn side.` }),
		new MiscMarker(`R2HHT`, markers.fireSale, [291.875, 281.8125], { uniqueDesc: `Only appears after shooting all 7 other power ups.\nInside the zombie spawn area, to the left hand side.` }),
	],
	[MapIds.citadelle]: [
		new MiscMarker(`doiWV`, markers.mrPeeksHeadphones, [124.18454730355482, 194.89700645145751]),
		new MiscMarker(`gb211`, markers.mrPeeksHeadphones, [249.83157921171673, 267.0733542845365]),
		new MiscMarker(`1OLl5`, markers.mrPeeksHeadphones, [356.8083933970118, 335.6863666985874]),
		new MiscMarker(`XfhFB`, markers.alcoholBottle, [390.2999582769362, 272.637598477095], { uniqueDesc: `In the corner of the dining hall.`, linkedItems: `NDa_G` }),
		new MiscMarker(`QG2Bi`, markers.alcoholBottle, [402.24816278849784, 179.36024659410995], { uniqueDesc: `On the shelf beside the sofa.`, linkedItems: `NDa_G` }),
		new MiscMarker(`YphwX`, markers.alcoholBottle, [352.90222177431343, 334.31000109077763], { uniqueDesc: `Underneath the chessboard table.`, linkedItems: `NDa_G` }),
		new MiscMarker(`NDa_G`, markers.barEgg, [143.4544739262676, 174.75649181149487], { uniqueDesc: `Interact with the silver tray at the end of the bar to activate. `, linkedItems: `XfhFB,QG2Bi,YphwX` }),
		new MiscMarker(`WAuh7`, markers.cannonPart, [55.356495828412775, 215.06621647574312], { uniqueTitle: `Cannon Part - Wheel`, uniqueDesc: `Inside a box of banana's at spawn, only appears after turning the cannon the first time.`, linkedItems: `8A54Q` }),
		new MiscMarker(`OQb8p`, markers.cannonPart, [452.7139095318371, 267.30296959540743], { uniqueTitle: `Cannon Part - Blowtorch`, uniqueDesc: `In the back right corner of the dining hall, beside the standing light.`, linkedItems: `8A54Q` }),
		new MiscMarker(`9PVYZ`, markers.cannonEgg, [50.716709743542346, 232.2881346817492], { uniqueDesc: `Requires a lot of patience and 50k essence. You must go through the cannon 100 times total, on the 100th firing you will fly into the bell and it will drop 2 monkey bombs and behave as a monkey bomb for a prolonged time.`, linkedItems: `8A54Q` }),
		new MiscMarker(`2hPGY`, markers.mrPeeksHideNSeek, [274.9339382527714, 175.17588285723193], { uniqueTitle: `Free Perk - Peeks #1`, uniqueDesc: `Can only be seen and shot through the window from inside, must be the first one shot.` }),
		new MiscMarker(`rsSfg`, markers.mrPeeksHideNSeek, [212.94478731131198, 211.63320047876994], { uniqueTitle: `Free Perk - Peeks #2`, uniqueDesc: `Can be seen from inside the barn, inside the castle wall, far away from the barn. A scope is recommended but not required, must be the second one shot. Listen for the audio queue and pink light.` }),
		new MiscMarker(`gzyWO`, markers.mrPeeksHideNSeek, [468.1521385344881, 217.2399669136197], { uniqueTitle: `Free Perk - Peeks #3`, uniqueDesc: `In the window of a tower far in the distance. Similar to #2, a scope is recommended but not required.` }),
		new MiscMarker(`aEKQ6`, markers.mrPeeksHideNSeek, [363.0794046143011, 467.78574547136486], { uniqueTitle: `Free Perk - Peeks #4`, uniqueDesc: `Final location, sat on the bench inside the cell.` }),
		new MiscMarker(`Dxa_p`, markers.maxAmmo, [194.21912956177317, 326.5493771655113], { uniqueDesc: `On a windowsill beneath the lighting rod antenna.` }),
		new MiscMarker(`0vAV9`, markers.maxArmour, [337.0669348876571, 219.78489385812136], { uniqueDesc: `High up in the rafters. Against a vertical beam.` }),
		new MiscMarker(`21_Yw`, markers.instaKill, [157.95748405308314, 238.17956014301313], { uniqueDesc: `Up on the scaffolding. Can be seen from the stairs.` }),
		new MiscMarker(`932Ke`, markers.doublePoints, [445.670754224332, 204.0609344031147], { uniqueDesc: `Low to the ground, on a shelf on the left side inside the zombie spawn.` }),
		new MiscMarker(`exYPu`, markers.fullPower, [397.7516315336668, 253.32894063964844], { uniqueDesc: `Up on the roof, balancing on a broken wooden beam.` }),
		new MiscMarker(`VY87x`, markers.nuke, [219.35233018019147, 136.03922734946804], { uniqueDesc: `Can be seen out in the distance against the castle walls when viewing from the barn gate next to the ammo box.` }),
		new MiscMarker(`t6inq`, markers.bonusPoints, [347.47224826471984, 338.68078174235944], { uniqueDesc: `Behind the back of the sofa.` }),
		new MiscMarker(`9ZtlS`, markers.fireSale, [153.85879467104604, 305.31552106045706], { uniqueDesc: `Only appears after shooting all 7 other power ups.\nInside the well.` }),
	],
	[MapIds.tomb]: [
		new MiscMarker(`dNdWq`, markers.mrPeeksHeadphones, [458.1253815969317, 230.47884344636978], { uniqueDesc: `Besides the statue.` }),
		new MiscMarker(`3cTsU`, markers.mrPeeksHeadphones, [321.15026131123483, 271.0065801134739], { uniqueDesc: `Next to the stairs, inside the alcove.` }),
		new MiscMarker(`QxSwa`, markers.mrPeeksHeadphones, [129.0912301010784, 414.1414585193946], { uniqueDesc: `On the floor by a plant.` }),
		new MiscMarker(`EebS9`, markers.maxAmmo, [408.13582523828796, 328.04940101732626], { img: `g7Eq31z`, uniqueDesc: `Up on a cliff edge.` }),
		new MiscMarker(`iO9Lu`, markers.maxArmour, [253.92185324162836, 278.09031879113274], { img: `pavRMVm`, uniqueDesc: `Inside a square hole in the wall close to the ceiling.` }),
		new MiscMarker(`jO5Mk`, markers.instaKill, [390.2136431442132, 446.6577177503342], { img: `AaUNzMn`, uniqueDesc: `Up on the rocks inside a hole, stand near the arsenal machine.` }),
		new MiscMarker(`3Bo51`, markers.doublePoints, [120.42157197552262, 320.82209956225785], { img: `gg0CEis`, uniqueDesc: `Up against the rock face.` }),
		new MiscMarker(`IQjN6`, markers.fullPower, [455.1475822130036, 278.5325955128256], { img: `2Aby0Mj`, uniqueDesc: `Behind the campfire.` }),
		new MiscMarker(`_r_Cw`, markers.nuke, [232.8490296578811, 155.51403249466094], { img: `MHkYqi9`, uniqueDesc: `Out in the distance on top of a stalagmite.` }),
		new MiscMarker(`PdHEG`, markers.bonusPoints, [266.4492028811934, 336.4167235840454], { img: `7jw8XCP`, uniqueDesc: `Down a zombie spawn hole.` }),
		new MiscMarker(`F3kdK`, markers.fireSale, [321.03075937868476, 29.83142970995522], { img: `6xOeUmj`, uniqueDesc: `Only appears after shooting all 7 other power ups.\nIn a fire above the wall.` }),
		new MiscMarker(`VVEzJ`, markers.goldArmour, [358.33289414137914, 154.09789069042847], { img: ``, uniqueDesc: `Only appears after completing the blood sacrifice. Provides armour regeneration.` }),

		new MiscMarker(`cfACw`, markers.shovel, [348.94636878925763, 461.0482070074297]),
		new MiscMarker(`Isy4y`, markers.shovel, [371.7782991256511, 353.9439157727601]),
		new MiscMarker(`XsUGD`, markers.shovel, [400.22064142917174, 148.69124492832142]),
		new MiscMarker(`jsDXJ`, markers.shovel, [289.0625, 240.15625]),
		new MiscMarker(`HFx9Q`, markers.digSite, [383.87000500126817, 149.35235920522422]),
		new MiscMarker(`WC4Ap`, markers.digSite, [368.4555116841055, 450.6056368057272]),
		new MiscMarker(`XNgr9`, markers.digSite, [293.75261603680326, 268.01207416479804]),
		new MiscMarker(`5SaPg`, markers.digSite, [290.4543073866913, 150.9035006506923]),
		new MiscMarker(`9qC45`, markers.digSite, [338.99548229579756, 46.0303651409175]),
		new MiscMarker(`VLvXV`, markers.digSite, [344.5897910655892, 92.15887604972609]),
		new MiscMarker(`q7MLM`, markers.digSite, [425.86395856637154, 151.52534532134177]),
		new MiscMarker(`NTdZI`, markers.digSite, [273.9785554486199, 209.2753041478195]),
		new MiscMarker(`dODpt`, markers.digSite, [340.59930407477145, 302.5081732833293]),
		new MiscMarker(`PzUsd`, markers.digSite, [385.4353212110028, 393.96759110376155]),
		new MiscMarker(`LW4ch`, markers.digSite, [312.48180180289756, 346.0844055966654]),
		new MiscMarker(`zqSw6`, markers.digSite, [363.1492798314233, 55.212717950211356]),
		new MiscMarker(`A6Uec`, markers.digSite, [448.00840830960124, 228.25089626421467]),
		new MiscMarker(`CJyS6`, markers.digSite, [399.37272870419775, 256.6261173054568]),

		new MiscMarker(`thyY2`, markers.statueHead, [197.54924602120346, 436.30162049825793], { uniqueDesc: `Next to Jugg.` }),
		new MiscMarker(`mGqQL`, markers.statueHead, [144.31276039740175, 260.2387250682816], { uniqueDesc: `Under a leafy bush.` }),

		new MiscMarker(`_husd`, markers.interactable, [211.6185981937529, 401.81299946293166], { uniqueTitle: `Spinning Rocks`, uniqueDesc: `Shoot the rocks in the air until they start spinning. Hit all of the moving rocks within quick succession to be rewarded with PaP tier 1 and cryofreeze (at the central altar).` }),

		new MiscMarker(`TcECm`, markers.interactable, [116.83626836111173, 290.397391651169], { uniqueTitle: `Waterfall`, uniqueDesc: `Freeze both waterfalls with cryofreeze or the ice staff to get a reward.` }),
		new MiscMarker(`V7HfA`, markers.interactable, [209.68441399107735, 277.41558405548994], { uniqueTitle: `Waterfall`, uniqueDesc: `Freeze both waterfalls with cryofreeze or the ice staff to get a reward.` }),
	],
	[MapIds.shatteredVeil]: [
		new MiscMarker(`YVtDC`, markers.mrPeeksHeadphones, [236.4240152904918, 199.14512216137794], { uniqueDesc: `On a box by the stairs in the conservatory.` }),
		new MiscMarker(`49HJa`, markers.mrPeeksHeadphones, [347.79364380362995, 345.19713079829694], { uniqueDesc: `Behind the elevator on a shelf in the corner.` }),
		new MiscMarker(`uZqcP`, markers.mrPeeksHeadphones, [354.54572287909696, 144.93529397523508], { uniqueDesc: `On a box behind a burnt body.` }),
		new MiscMarker(`lkr_A`, markers.maxAmmo, [128.34889880749935, 200.9309460601648], { uniqueDesc: `On the corner of a stone fence.` }),
		new MiscMarker(`2R6yv`, markers.maxArmour, [124.0118113214335, 381.12530495121183], { uniqueDesc: `Speared on the fence behind the burning building in the motor court.` }),
		new MiscMarker(`WEk4b`, markers.instaKill, [438.58747024196396, 175.7509866979347], { uniqueDesc: `Up on the eastern wall of the elevator shaft.` }),
		new MiscMarker(`V5qup`, markers.doublePoints, [463.2273736757784, 265.73558370368715], { uniqueDesc: `Off in the distance near a log.` }),
		new MiscMarker(`3B6Xv`, markers.fullPower, [404.4604699265468, 449.9485715578522], { uniqueDesc: `On the zombie windowframe, only visible if you go prone and look through the hole in the wall.` }),
		new MiscMarker(`3yA2m`, markers.nuke, [332.8224469369994, 74.58063978618736], { uniqueDesc: `On top of the white room, will need to climb on the box opposite to see.` }),
		new MiscMarker(`jAH6p`, markers.bonusPoints, [279.9040888460702, 422.994971978198], { uniqueDesc: `In a hole in the wall by the stairs.` }),
		new MiscMarker(`H5S9R`, markers.fireSale, [288.71161658427974, 354.9378194889196], { uniqueDesc: `Only appears after shooting all 7 other power ups. Hidden inside the chandelier.` }),
		new MiscMarker(`xfavY`, markers.interactable, [379.75, 420.8125], { uniqueTitle: `Sleep Walking Egg - Clock`, uniqueDesc: `Start here at the grandfather clock at round 11, interact with the clock, then go to the bed and progress the round to round 12.` }),
		new MiscMarker(`8blGa`, markers.interactable, [361.0413358881222, 301.0840268452299], { uniqueTitle: `Sleep Walking Egg - Bed`, uniqueDesc: `Go prone on this bed after interacting with the clock on round 11 and transition the round. When you wake up you'll need to follow the white footsteps to be led to the loot, including an intel document.` }),
		new MiscMarker(`FpF7V`, markers.interactable, [404.4192934137231, 339.93895053041376], { uniqueTitle: `Deer Head Shotgun Egg`, uniqueDesc: `You can start a soul box easter egg mini game after placing a blue or better rarity shotgun on the pedestal under the 3 deer heads. The can be done multiple times.` }),
		new MiscMarker(`nyVhH`, markers.interactable, [297.83350256900314, 289.0736936699148], { uniqueTitle: `Jumpscare Egg`, uniqueDesc: `Requires a thermal scope, progress to round 13 and look through the windows on the outside of the mansion until you spot a figure that will disappear when looked at. Do this 5 times to then be able to access this mirror and get your reward. Including a document intel item.` }),
		new MiscMarker(`Jn9Ol`, markers.wunderwaffeStart, [276.61616468742903, 291.0590773140725], { uniqueDesc: `Underneath the bed, first one to spawn.` }),
		new MiscMarker(`U2ogz`, markers.wunderwaffeStep, [405.6875, 428.34375], { uniqueDesc: `On a green chair opposite elemental pop, only spawns after shooting the glowing clothes.` }),
		new MiscMarker(`JAOpX`, markers.wunderwaffeStep, [65.73113275293765, 118.31603895528778], { uniqueDesc: `On top of some rocks by spawn.` }),
		new MiscMarker(`9Le70`, markers.wunderwaffeStep, [254.6317177712267, 334.6645172583519], { uniqueDesc: `Sat on a bench on the ground floor of the grand foyer.` }),
		new MiscMarker(`pBvk7`, markers.wunderwaffeComplete, [440.2799404621328, 170.11947055161315]),
		new MiscMarker(`8SwkB`, markers.evilSamComputer, [249.55501034107314, 324.41155911510066]),
		new MiscMarker(`X6B_L`, markers.evilSamComputer, [333.6498105413765, 330.9302282160714]),
		new MiscMarker(`8i9n_`, markers.evilSamComputer, [380.30967529375914, 438.4185709917439]),
		new MiscMarker(`jK_ol`, markers.evilSamTrapComplete, [378.7904086076896, 163.87104724768952]),
	],
	[MapIds.reckoning]: [

	]
};
















