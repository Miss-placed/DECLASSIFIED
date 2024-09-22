import { Item, MiscMarker } from '../classes';
import { IconFileNames } from './icons';
import { MapIds } from './intel';
import { IMisc } from './types';

export enum EggType {
	dieMaschineEE = `Seal the Deal`, //https://callofduty.fandom.com/wiki/Seal_the_Deal
	dieMaschineWW = `D.I.E. Wonder Weapon`,
	dieMaschineBonusChest = `Coffin Dance`,
	dieMaschineRadioAlign = `Radio Alignment`,
	dieMaschineOrdaHand = `Orda Hand`,

	firebaseZEE = `Maxis Potential`, //https://callofduty.fandom.com/wiki/Maxis_Potential
	firebaseZWW = `Rai K-84`,
	firebaseZBonusChest = `Bunny Scare`,
	firebaseZSafe = `Sergei's Safe`,
	firebaseZMonkeyUpgrade = `Monkey bomb upgrade`,
	firebaseZFreeJump = `Free Jump pad`,

	mauerDerTotenEE = `Tin Man Heart`, //https://callofduty.fandom.com/wiki/Tin_Man_Heart
	mauerDerTotenWW = `CRBR-S`,
	mauerDerTotenBonusChest = `Hasenbau Club`,
	mauerDerTotenTargets = `Target Practice`,
	mauerDerTotenEssenceHarvester = `Essence Harvester`,
	mauerDerTotenKlaus = `Klaus`,

	outbreakEE1 = `Ravenov Implications`, //https://callofduty.fandom.com/wiki/Ravenov_Implications
	outbreakEE2 = `Entrapment`, //https://callofduty.fandom.com/wiki/Entrapment

	mainQuest = `Main Quest`,
	questCollectible = `Quest Collectible`,
	clue = `Visual Clue`,
	interactable = `Interactable Object`,
	secretArea = `Secret Area`,
	music = `Cassette Tape`,
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

const EETypes = {
	mainQuest: new Item({
		title: EggType.mainQuest, icon: IconFileNames.mainQuest,
	}),
	cassetteTape: new Item({
		title: EggType.music, icon: IconFileNames.cassette,
	}),
	clue: new Item({ title: EggType.clue, icon: IconFileNames.clue }),
	secretArea: new Item({
		title: EggType.secretArea, icon: IconFileNames.secretArea,
	}),
	interactable: new Item({
		title: EggType.interactable, icon: IconFileNames.interactable,
	}),
	questCollectible: new Item({
		title: EggType.questCollectible, icon: IconFileNames.mainQuest,
	}),
	essenceHarvester: new Item({
		title: EggType.mauerDerTotenEssenceHarvester, icon: IconFileNames.reactor,
	}),
	bonus: new Item({
		title: EggType.interactable, icon: IconFileNames.interactable,
	}),
	thermophasic: new Item({ title: `D.I.E. Thermophasic Upgrade`, icon: IconFileNames.upgrade, }),
	nova5: new Item({ title: `D.I.E. Nova-5 Upgrade`, icon: IconFileNames.upgrade, }),
	electrobolt: new Item({ title: `D.I.E. Electrobolt Upgrade`, icon: IconFileNames.upgrade, }),
	cryoemitter: new Item({ title: `D.I.E. Cryo-Emitter Upgrade`, icon: IconFileNames.upgrade, }),
	// Outbreak specific
	aetherialOrb: new Item({ title: `Aetherial Orb`, desc: `Possible location.\nCan be shot for essence, follow it to all locations in order to destroy it at the end to gain loot.`, icon: IconFileNames.orb, }),
	monkey: new Item({ title: 'Stone Monkey', desc: `Used in a portion of the main quest to obtain the microfilm, otherwise just drops minor loot.`, icon: IconFileNames.monkey }),
	projector: new Item({ title: 'Projector', desc: 'The projector for the Main Quest', icon: IconFileNames.projector, }), signal: new Item({ title: 'Signal' }),
	redRift: new Item({ title: 'Red Aether Rift', desc: 'Jump through all the rifts to continue the quest.', icon: IconFileNames.redRift, }),
	maxisQuestRadio: new Item({ title: 'Maxis Radio Signal', desc: 'Power on and then match the tone of the 3 surrounding amplifiers. Using subtitles is recommended.', icon: IconFileNames.mainQuest, }),
	maxisAmp: new Item({ title: 'Maxis Radio Amplifier', desc: 'Tune all of the 3 amplifiers to the same tone as the central radio in order to fix the radio and trigger the start of quest.', icon: IconFileNames.objective, }),
	bunny: new Item({ title: 'Mr Peeks', desc: 'Used in the quest, when picked up, provides a aetherium burst ability. Must be brought to the rover to continue the quest.', icon: IconFileNames.objective, }),
	unknownSignal: new Item({ title: 'Unknown Signal Radio', desc: 'Possible location, only one can spawn. Power on and then match the tone of the 3 surrounding amplifiers to be rewarded with an easter egg song and essence. Using subtitles is recommended.', icon: IconFileNames.cassette, }),
	unknownSignalAmp: new Item({ title: 'Unknown Signal Amplifier', desc: 'Tune all of the 3 amplifiers to the same tone as the central radio in order to fix the radio to be rewarded with an easter egg song and essence.', icon: IconFileNames.interactable, }),
	zooMask: new Item({ title: 'Tiger Mask', desc: `Part of the super easter egg, can be interacted with in order to make the next warp be guaranteed to be Zoo.`, icon: IconFileNames.secretArea }),
};

const OutbreakEE2Steps = {
	step2Helicopter: new Item({ title: 'Crashed Helicopter', desc: `The transport chopper that the Omega Eight were using is located in the "Carved Hills", located south of the lone shack, having crashed by unknown means. Nearing it will spawn a horde needs to be eliminated, as one of the corpses is holding a message from Hugo Jager about where the surviving members of the crash went.`, icon: IconFileNames.mainQuest }),
	step3Orb: new Item({ title: 'Red Aetherial Orb', desc: 'The Aetherium Orb can spawn within three places and is visually distinct, having a darker hue of red and will not produce Essence upon being damaged. When damaged, it will flee like the standard variant for a total of three times before it will flee to hover over the Recon Rover to where it will stay above, unwilling to enter it.', icon: IconFileNames.redOrb, }),
};

// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it`s very very unlikely but still possible).

export const StaticEggStore: IMisc = {
	[MapIds.dieMaschine]: [
		new MiscMarker(`w_xnt`, EETypes.thermophasic, [223.35366309316512, 223.1585943917737], `Unlocked after following the steps with the fuse in the Dark Aether.`),
		new MiscMarker(`9ySyg`, EETypes.nova5, [315.29654358848376, 295.69795800010473], `Unlocked after following the steps with the cannister in the Dark Aether.`),
		new MiscMarker(`XW3JZ`, EETypes.bonus, [174.74870507815817, 257.415635207116], `Crack in the wall where you can remotely activate the D.I.E Wonder Weapon after acquiring the D.I.E remote.`),
		new MiscMarker(`wgKEY`, EETypes.questCollectible, [196.29722988085663, 307.495182630813], `1 of 3 Aetherscope Parts, one will spawn randomly when entering the Dark Aether, dogs spawn after picking it up.`),
		new MiscMarker(`N29aN`, EETypes.questCollectible, [356.6938648779643, 343.9768501463755], `1 of 3 Aetherscope Parts, one will spawn randomly when entering the Dark Aether, dogs spawn after picking it up.`),
		new MiscMarker(`yLQtN`, EETypes.questCollectible, [133.03685434894203, 282.6545483161539], `Cannister used in nova 5 steps, can only be retrieved with the alt fire of the D.I.E.`),
		new MiscMarker(`3eput`, EETypes.questCollectible, [314.69833497058926, 344.089550203993], `Box containing a fuse used in the Thermophasic upgrade steps, hidden under the plane nose, inaccessible unless in the Dark Aether.`),
		new MiscMarker(`G7SE2`, EETypes.questCollectible, [242.97643511037063, 255.9881891661138], `Crate containing the vial used in the Cryo upgrade steps. Shoot the crate with the D.I.E to knock it down.`),
		new MiscMarker(`O0QxP`, EETypes.questCollectible, [256.63368476295705, 206.02147315077295], `Tree fungus used in the Cryo upgrade steps\nHave a Megaton shoot the fungus to activate it\nInteract whilst holding the vial to place it underneath the fungus and fill the vial.`),
		new MiscMarker(`nS4PT`, EETypes.questCollectible, [258.3778460127693, 335.23982709555946], `1 of 3 Crystals used in the Electrobolt upgrade steps, use the alt fire of the D.I.E to collect the energy, then run down to the upgrade box and shoot it to progress.`),
		new MiscMarker(`Vc_0w`, EETypes.questCollectible, [377.14480548250435, 224.28934027831147], `1 of 3 Crystals used in the Electrobolt upgrade steps, use the alt fire of the D.I.E to collect the energy, then run down to the upgrade box and shoot it to progress.`),
		new MiscMarker(`nhHde`, EETypes.questCollectible, [258.5949702531161, 173.9165165178388], `1 of 3 Crystals used in the Electrobolt upgrade steps, use the alt fire of the D.I.E to collect the energy, then run down to the upgrade box and shoot it to progress.`),
		new MiscMarker(`pfJ2L`, EETypes.mainQuest, [160.42537161357052, 375.00631403381794], `Broken tank that needs to be interacted with 3 times whilst holding the wrench\nShoot the zombie that pops out, then throw a lethal explosive into the now open hatch. This causes the gun to fire, dropping the Decontamination Agent from the tree it shoots.`),
		new MiscMarker(`TbPJZ`, EETypes.mainQuest, [257.59332755993654, 349.50282422284494], `Final ghostly dialogue anomaly before the boss fight\nInteract with it and the family portrait will spawn\nPicking up the photo will start the ending boss fight.`),
	],
	[MapIds.dieMaschineUnderground]: [
		new MiscMarker(`1m5tF`, EETypes.bonus, [147.39538299834174, 388.52809723485626], `Downstairs, hidden behind the top left of the zombie spawn window\n1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`PxlsM`, EETypes.bonus, [76.10682851697437, 358.63289696847636], `1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`ONsCv`, EETypes.bonus, [201.05343475851072, 301.68965836584806], `High up on the wall\n1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`RFgwR`, EETypes.bonus, [221.09307449751262, 347.24424924795073], `1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`7TACp`, EETypes.bonus, [134.79653471600014, 401.6474904867542], `Hidden behind the grating\n1 of 5 blue orbs that you can shoot for a bonus chest.`),
		new MiscMarker(`UTXXu`, EETypes.secretArea, [293.1716173546175, 370.9160154554998], `Only accessible after using the Aether Tunnel above ground. 1 of 2 places the PaP part can spawn.`),
		new MiscMarker(`6WnTv`, EETypes.secretArea, [206.2697306892794, 176.17280788708192], `Only accessible after using the Aether Tunnel above ground. 1 of 2 places the PaP part can spawn.`),
		new MiscMarker(`VpIJu`, EETypes.cryoemitter, [297.2665148522491, 349.81279151873895], `Unlocked after pouring the liquid gathered from the fungus near the lake, onto the crate.`),
		new MiscMarker(`VNWWl`, EETypes.electrobolt, [113.39539786187888, 353.078013760189], `Unlocked after gathering the energy from 3 crystals and shooting it at the box. The bulbs around the box indicate the progress.`),
		new MiscMarker(`5M9A0`, EETypes.mainQuest, [211.50810943751497, 233.52599646325353], `D.I.E upgrade chest, requires the fuse and can only be interacted with when in the Dark Aether. Re-appears as open, above ground, on the back of the truck.`),
		new MiscMarker(`5oG2A`, EETypes.interactable, [198.7906869627428, 178.82125886330365], `Plaguehound Gas condenser\nInteract whilst holding the canister to place it, then kill a Plaguehound near it to fill it with gas.`),
		new MiscMarker(`af5QE`, EETypes.questCollectible, [324.47444670325746, 318.8136922248336], `1 of 3 Orbs that spawn in the Dark Aether after acquiring the Aetherscope. Interact with it to trigger the ghostly figure dialogue.`),
		new MiscMarker(`xpxgz`, EETypes.questCollectible, [235.5479859749598, 273.1385305408606], `1 of 3 Orbs that spawn in the Dark Aether after acquiring the Aetherscope. Interact with it to trigger the ghostly figure dialogue.`),
		new MiscMarker(`rj9BH`, EETypes.questCollectible, [181.93046504375246, 348.6110192429405], `1 of 3 Orbs that spawn in the Dark Aether after acquiring the Aetherscope. Interact with it to trigger the ghostly figure dialogue.`),
		new MiscMarker(`Kgdjc`, EETypes.questCollectible, [215.23791437285269, 305.50159134986285], `1 of 3 Aetherscope Parts, one will spawn randomly when entering the Dark Aether, dogs spawn after picking it up.`),
		new MiscMarker(`JFz4Z`, EETypes.mainQuest, [339.1999615318702, 326.4211594207544], `Vogel's Computer\n After activating all 3 ghostly dialogues, interact with it 3 times to insert the password.`),
		new MiscMarker(`mR1Ye`, EETypes.interactable, [273.33595868320293, 353.86231995501794], `A portal that appears after shooting all 4 canisters of the containment device with the corresponding D.I.E upgrade.`),
		new MiscMarker(`fwG9Z`, EETypes.mainQuest, [329.39656431710233, 325.66999226629395], `Ghostly dialogue that appears after entering the portal that appears after shooting after shooting all 4 canisters of the containment device\nSpawns the Dark Aether Wrench.`),
		new MiscMarker(`UyMmA`, EETypes.mainQuest, [310.66531882982684, 339.46395788705297], `Containment device on the roof with four canisters pointing down. Shoot each one with the corresponding elemental version of the D.I.E\nAfter placing the decontamination agent, this will allow you to trap both halves of a Megaton. Furthering the main quest.`),
	],
	[MapIds.firebaseZSpawn]: [
		new MiscMarker(`Xst99`, EETypes.cassetteTape, [361.3527921527954, 188.83980649518872], `1 of 3 needed for the easter egg song\nUp the stairs on the book shelf.`),
		new MiscMarker(`ALMtJ`, EETypes.cassetteTape, [158.88932890084, 205.2850129398853], `1 of 3 needed for the easter egg song\nInside a pigeon hole next to the locker containing one of the compounds for the main quest.`),
		new MiscMarker(`tdq5M`, EETypes.bonus, [324.0469269977337, 242.0591502874637], `Mr Peeks\nStare at the bunny in outside of the map bounds in order to be teleported to the Dark Aether and obtain a bonus chest.`),
		new MiscMarker(`sDGIO`, EETypes.bonus, [370.180211499256, 197.93612737161737], `Dart Board / Aetherium Converter\nUsing a code found in the weapon lab PC, it can be shot in order (then the bullseye) to drop 1 of 3 parts used to create a free RAI K-84.`),
		new MiscMarker(`sdUX5`, EETypes.mainQuest, [382.9324256232408, 267.11524328413856], `Sergei Ravenov\nMust be interacted with to start the main quest.`),
		new MiscMarker(`xkABv`, EETypes.questCollectible, [164.40213154389374, 204.72718267730167], `Compound S16\n1 of 3 compounds required as part of the truth serum in the main quest.`),
	],
	[MapIds.firebaseZ]: [
		new MiscMarker(`_J2DT`, EETypes.cassetteTape, [254.14859342124302, 233.1454721757814], `1 of 3 needed for the easter egg song\nOn the floor resting against a filing cabinet in the motor pool office.`),
		new MiscMarker(`Spi3p`, EETypes.bonus, [343.34375, 447.84375], `Dimitri Kuhlklay\nBurnt body on the floor that must be interacted with in order to gain access to the PC in the weapons lab, to progress the free RAI K-84 quest. (Note: the blueprint in the weapon lab must be picked up before you can interact with the body.)`),
		new MiscMarker(`SWJb1`, EETypes.bonus, [158.77033215216278, 275.97284112275537], `Kuhlklay's Desk\nUsed in the free RAI K-84 side quest. There is a PC, which must be accessed using Kuhlklay's eye, found on a body in scorched defense, against a tank\nOnce activated it will display graphics of a dart board used to obtain a RAI K-84 part back in the spawn area. A drawer will also open, allowing you to pick up a key, used to unlock lockers in the barracks.`),
		new MiscMarker(`mwfRX`, EETypes.bonus, [271.687227595983, 315.28552532065964], `Lockers that will spawn Mimics when opened with the key obtained from the weapons lab\nOne of the mimics will drop the Barrel Stabiliser, 1 of 3 parts used to create a free RAI K-84.`),
		new MiscMarker(`50_41`, EETypes.bonus, [315.00241949127866, 323.7787002020902], `Lockers that will spawn Mimics when opened with the key obtained from the weapons lab\nOne of the mimics will drop the Barrel Stabiliser, 1 of 3 parts used to create a free RAI K-84.`),
		new MiscMarker(`vHAbq`, EETypes.bonus, [166.0783558425093, 265.6534721947788], `Computer\nUsed as a charging station to charge up the Overcharged Power Cell that is 1 of the 3 parts in the RAI K-84 side quest. You may need to wait a couple of rounds after placing the magazine in order to fully charge it.`),
		new MiscMarker(`4HGj2`, EETypes.mainQuest, [417.51780307656065, 318.2097920532709], `William Peck\nInteract with after activating power across the map, then head back to Ravenov to acquire his ID card.`),
		new MiscMarker(`dpWeL`, EETypes.questCollectible, [282.97038041254837, 215.9674819668458], `Compound P65\n1 of 3 compounds required as part of the truth serum in the main quest.`),
		new MiscMarker(`gafr1`, EETypes.questCollectible, [388.66573427994837, 281.72880422271794], `Compound 36\n1 of 3 compounds required as part of the truth serum in the main quest.`),
		new MiscMarker(`5PdCL`, EETypes.mainQuest, [284.4973798332315, 367.64687177418114], `Chemical Mixer\nFound in the field hospital, can be interacted with after obtaining all 3 compounds to drop the "Agent Delivery System" which will need to be placed on the air conditioning unit of Dr Peck's shelter.`),
		new MiscMarker(`eu2st`, EETypes.mainQuest, [395.8771012671762, 317.7078936762941], `Dr Peck's Air Conditioner\nUsed with the "Agent Delivery System" to deliver the truth serum to Dr Peck. Interact with him afterwards to progress the quest.`),
		new MiscMarker(`_56GU`, EETypes.mainQuest, [170.33779197818103, 352.0203144700901], `Memory Transference Station\nUnlocked after drugging Dr Peck with truth serum. Provides essence traps that are used to catch mimics\nYou can bring the captured mimics back in order to get some dialog from different characters containing codes, the ones we need for the quest are Sokolov, Brahms and Zabim. Once all 3 codes are obtained, the machine will spit out a floppy disk.`),
		new MiscMarker(`LX_RL`, EETypes.mainQuest, [401.70612515057087, 276.58454518563894], `Quantum Main Frame\nCan be interacted with after obtaining the floppy disk from the mimic step. Opens an anomaly in the large spherical chamber outside the window in front of you.`),
		new MiscMarker(`q_skj`, EETypes.secretArea, [383.4063466479532, 299.8771916373098], `OPC (Omega Portal Chamber)\nUsed as part of the main quest, after the mimic step, will open an anomaly and later after the satellite alignment step be must be interacted with in order to teleport to the boss fight.`),
		new MiscMarker(`8YQJG`, EETypes.mainQuest, [408.23933867814446, 321.5496210454767], `Aethermeter\nDrops from a locker next to Dr Peck's shelter after unlocking the Quantum Main Frame and talking to Peck who provides the code.`),
		new MiscMarker(`bWebw`, EETypes.questCollectible, [407.5156407861167, 391.44907135137566], `Shovel\n. Required to dig up Containers after acquiring the Aethermeter.`),
		new MiscMarker(`WkqxY`, EETypes.questCollectible, [240.21203547901894, 62.83786897191934], `Aether Crystal Container 1 of 3\n Can be dug up after acquiring the Shovel and Aethermeter. Triggers a lockdown event that will trap you in a yellow bubble, charging the crystal. Once complete, it can be picked up.`),
		new MiscMarker(`N7CSE`, EETypes.questCollectible, [376.6346016707385, 261.46768955182176], `Aether Crystal Container 1 of 3\n Can be dug up after acquiring the Shovel and Aethermeter. Spawns lots of identical containers in the vicinity, to progress you need to pick up the container that ONLY has a crystal and WHITE smoke. Any black smoke inside a container indicates it is the wrong one.`),
		new MiscMarker(`27K0v`, EETypes.questCollectible, [237.0421966518259, 369.7858267768484], `Aether Crystal Container 1 of 3\n Can be dug up after acquiring the Shovel and Aethermeter\nRequires the RAI K-84\nAfter being dug up, it will immediately teleport away from you, spawning back in a random location in the immediate vicinity. Once spotted, keep your distance and fire an alt fire grenade from the RAI K-84 at the container to keep it in place, then it can be collected.`),
		new MiscMarker(`dMdFW`, EETypes.mainQuest, [389.48725462947607, 253.659943176447], `Computer\n Used after placing all 3 Crystals in the reactors. Will display a world map to realign a satellite, each will have a flag in the bottom right corner. When you see a location with a question mark, align with that one to activate the OPC and allow you to begin the boss fight.`),
	],
	[MapIds.mauerDerToten]: [
		new MiscMarker(`_n0MB`, EETypes.bonus, [193.68010197590363, 264.8048544502154], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`2wAit`, EETypes.clue, [384.32068891654967, 272.1759937481422], `#0 Blacklight locker`),
		new MiscMarker(`G107e`, EETypes.clue, [181.79736917081456, 459.6975460903231], `#2 Blacklight numbers`),
		new MiscMarker(`I_o9o`, EETypes.mainQuest, [341.84342386218685, 203.37097788580076], `Klaus\nUsed at various points in the quest, must be activated with 2 parts, his hands, found in the hotel room and his battery, dropped by killing the first Krasny Soldat.\nAfter this he can be called in at various locations around the map. He can also be upgraded 2 times, once with a hacking helm to finish the main quest, and a second, optional time, to upgrade his firepower.`),
		new MiscMarker(`h8fAY`, EETypes.questCollectible, [258.4350330544544, 328.8458598698313], `Klaus Part, Electronic Chips, box with green light, shoot with CRBR-S.`),
		new MiscMarker(`GYRE6`, EETypes.interactable, [359.9483781264314, 284.16977220507744], `Train Line Controls, used to switch train tracks during the main quest.`),
		new MiscMarker(`drKer`, EETypes.interactable, [364.2365012890661, 214.16776152079905], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`eQXff`, EETypes.interactable, [206.05222014011366, 330.2612687292476], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`v9aLr`, EETypes.questCollectible, [168.93078742529096, 137.35493930841415], `Essence Canister Pickup and drop off. (Wait a round for the forcefield to disappear)`),
		new MiscMarker(`jOSoP`, EETypes.essenceHarvester, [151.62276338235262, 217.9029453522394], `Possible spawn location of essence harvester.\nUsed in the quest to charge soul canisters.`),
		new MiscMarker(`dgfYy`, EETypes.essenceHarvester, [258.13627287487003, 336.4144510859678], `Possible spawn location of essence harvester.\nUsed in the quest to charge soul canisters.`),
		new MiscMarker(`CWAYy`, EETypes.secretArea, [310.84582665268846, 317.22578660679153], `Train Carriage, use Klaus to stop the train, contains the Keycard and Warhead needed for the main quest.`),
		new MiscMarker(`4QpYx`, EETypes.secretArea, [168.43591618416733, 160.56583724877993],
			"Entrance to Valentina`s Lab. Klaus can knock the wall down. Then use the CRBR-S beam mod to open the metal door."
		),
		new MiscMarker(`xLLmm`, EETypes.mainQuest, [153.92452665732722, 149.36476379238186], `Endstation Lure Machine\nWhen shot, after placing the essence canisters, will provide endstation lures which are used at the essence charging stations to spawn tempests. When killed, the tempests charge the canister.`),
		new MiscMarker(`HxZ4L`, EETypes.mainQuest, [349.7773651391249, 186.89792418690953], `1 of 3 Computers used during main quest to spawn Megatons, requires keycard from the train. Player will be denied if they have not yet upgraded Klaus.`),
		new MiscMarker(`6Z0wX`, EETypes.mainQuest, [168.0886289452726, 81.37624099731451], `Bossfight initial spawn location.`),
		new MiscMarker(`BcQMe`, EETypes.mainQuest, [167.82182159774044, 39.754294782294636], `Klaus escort location.\nKlaus will still need to be escorted whilst carrying the warhead in order to successfully finish the bossfight.`),
	],
	[MapIds.mauerDerTotenStreets]: [
		new MiscMarker(`ook1f`, EETypes.cassetteTape, [364.594308702165, 411.59576707869667], `1 of 3 needed for the easter egg song.`),
		new MiscMarker(`YMZPe`, EETypes.cassetteTape, [175.42748080394747, 324.57693567676864], `1 of 3 needed for the easter egg song.`),
		new MiscMarker(`00CEF`, EETypes.cassetteTape, [185.86657193523203, 70.19853360643957], `1 of 3 needed for the easter egg song.`),
		new MiscMarker(`pufCN`, EETypes.bonus, [310.47106934268305, 281.8460771337832], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`9z8Uu`, EETypes.bonus, [315.8911862106404, 75.03474289078483], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`1uxx8`, EETypes.bonus, [317.22176766835554, 386.3680282265149], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`IC0Xq`, EETypes.bonus, [172.9720302577955, 466.15217502439106], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`r79fA`, EETypes.bonus, [152.2094092404965, 343.9680542153249], `1 of 6 Mr Peeks pieces used to access the bonus chest room.`),
		new MiscMarker(`PwmRS`, EETypes.clue, [110.80096229476811, 298.4347086625506], `#1 Blacklight numbers`),
		new MiscMarker(`muHxa`, EETypes.clue, [302.33874571909564, 311.0221039512368], `#3 Blacklight numbers`),
		new MiscMarker(`0ZFbr`, EETypes.secretArea, [118.31471157271051, 467.80515920170296], `Hotel Room 305 & Klaus Part\nUse a brain rot zombie to open door and get Klaus hands and the safe for CRBR-S.`),
		new MiscMarker(`p3Ots`, EETypes.questCollectible, [267.02354016528875, 171.06511860475285], `Klaus Part, battery, obtained from killing the first Krasny Soldat.`),
		new MiscMarker(`RC0It`, EETypes.interactable, [131.97446059908233, 383.233529816566], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`p0jy0`, EETypes.interactable, [296.2174019490392, 91.91078506007518], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`1Zm1y`, EETypes.interactable, [202.13121369227582, 53.47866191858418], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`1TKX2`, EETypes.interactable, [298.34930940180675, 420.2199816609127], `Klaus Part Box, use blacklight to check if it contains a disk, order Klaus to open if it does.`),
		new MiscMarker(`eOTNC`, EETypes.questCollectible, [373.50680516628154, 388.36535534693917], `Klaus Part, transistor, shoot radios in the room with CRBR-S until one of them drops the part.`),
		new MiscMarker(`DwMIE`, EETypes.questCollectible, [333.76018343302235, 467.30140318168293], `Klaus Part, antenna, shoot pylon with CRBR-S.`),
		new MiscMarker(`5pm__`, EETypes.questCollectible, [197.11229814842187, 196.7896920958058], `Klaus Part, microwave dish, dig piles of debris to find.`),
		new MiscMarker(`3S1gY`, EETypes.questCollectible, [301.6366591960302, 150.97963262432313], `Klaus Part, microwave dish, dig piles of debris to find.`),
		new MiscMarker(`WzV96`, EETypes.mainQuest, [144.5504050965535, 289.50012070442347], `Klaus Upgrade Station`),
		new MiscMarker(`aqK7n`, EETypes.mainQuest, [290.44881000922993, 44.59962748588934], `1 of 3 Computers used during main quest to spawn Megatons, requires keycard from the train. Player will be denied if they have not yet upgraded Klaus.`),
		new MiscMarker(`zq5i8`, EETypes.mainQuest, [377.5561578030767, 339.7506667046973], `1 of 3 Computers used during main quest to spawn Megatons, requires keycard from the train. Player will be denied if they have not yet upgraded Klaus.`),
		new MiscMarker(`YqN75`, EETypes.essenceHarvester, [181.1322876506002, 304.5979694369277], `Possible spawn location of essence harvester.\nUsed in the quest to charge soul canisters.`),
		new MiscMarker(`vgkPi`, EETypes.essenceHarvester, [173.4707721095559, 358.04367363412337], `Possible spawn location of essence harvester.\nUsed in the quest to charge soul canisters.`),
		new MiscMarker(`frfHo`, EETypes.essenceHarvester, [357.6295162672377, 389.7021367473598], `Possible spawn location of essence harvester.\nUsed in the quest to charge soul canisters.`),
		new MiscMarker(`BWQZ0`, EETypes.essenceHarvester, [365.3697268917473, 244.2640308995389], `Possible spawn location of essence harvester.\nUnder the roof in the destroyed penthouse. Used in the quest to charge soul canisters.`),
		new MiscMarker(`rsNWp`, EETypes.essenceHarvester, [276.8902900069504, 110.18445130029662], `Possible spawn location of essence harvester.\nUsed in the quest to charge soul canisters.`),
		new MiscMarker(`suL35`, EETypes.mainQuest, [199.8542173319167, 303.14278836890117], `Zipline used to place one of the uranium devices.`),
		new MiscMarker(`0vSdg`, EETypes.mainQuest, [292.27782488970274, 292.907055944363], `Zipline used to place one of the uranium devices.`),
		new MiscMarker(`guuWl`, EETypes.mainQuest, [251.03046990519945, 172.27978216881027], `Spawn location for the first HVT Megaton which drops the 2 pieces of uranium needed to craft the uranium devices. Can be taken to any workbench to craft.`),
		new MiscMarker(`pOuZZ`, EETypes.mainQuest, [327.83864123291437, 440.6007233273124], `Spawn location for the second HVT Megaton which drops the 2 pieces of uranium needed to craft the uranium devices. Can be taken to any workbench to craft.`),
		new MiscMarker(`yg8rq`, EETypes.mainQuest, [244.90656540916956, 296.09692296650684], `1 of 2 Cleansed Rocks\nUsed in the main quest to arm the warhead placed in the lab. They both require the same steps, with different Megaton spawn locations.`),
	],
	[MapIds.forsaken]: [

	],
	[MapIds.forsakenUnderground]: [

	],
	[MapIds.duga]: [
		new MiscMarker(`6IA1p`, EETypes.electrobolt, [218.94657303732083, 383.23711642835906]),
	],
	[MapIds.ruka]: [
		new MiscMarker(`YeH4n`, EETypes.thermophasic, [94.0042121017423, 334.3317226785948]),
	],
	[MapIds.alpine]: [
		new MiscMarker(`KfCN7`, EETypes.cryoemitter, [106.2932488669672, 313.34003330490333]),
	],
	[MapIds.golova]: [
		new MiscMarker(`jxkej`, EETypes.nova5, [197.8850734145944, 146.29544698855156]),
	],
};
