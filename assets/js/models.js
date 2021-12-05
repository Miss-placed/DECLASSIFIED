/////////////////////Classes/////////////////////////
class Item {
    constructor({ id, title, desc, icon, layer }) {
        this.id = id;
        this.title = title ?? "";
        this.desc = desc ?? "";
        this.icon = icon ?? generalIcon;
        this.layer = layer ?? "MiscMarkers"
    }
}

class Marker {
    constructor(id, item, loc, uniqueDesc, layer) {
        this.id = id;
        if (item instanceof Item) {
            this.title = item.title ?? "";
            this.desc = item.desc ?? "";
            this.icon = item.icon ?? generalIcon;
    // TODO STANDARDISE STRING
            this.layer = item.layer ?? "MiscMarkers"
        }
        //Override static description with unique description
        if (uniqueDesc) this.desc = uniqueDesc;
        // Could do map in the future depending on how the data structure needs to change
        /* this.map = map; */
        this.loc = loc ?? [0, 0];
    }
}


/////////////////////Maps/////////////////////////

const mapDetails = {
    allOutbreakMaps: new Item({ id: "outbreak", title: "All Outbreak Maps" }),
//outbreak
    zoo: new Item({ id: "zoo", title: "Zoo" }),
    ruka: new Item({ id: "ruka", title: "Ruka" }),
    duga: new Item({ id: "duga", title: "Duga" }),
    alpine: new Item({ id: "alpine", title: "Alpine" }),
    golova: new Item({ id: "golova", title: "Golova" }),
    sanatorium: new Item({ id: "sanatorium", title: "Sanatorium" }),
    collateral: new Item({ id: "collateral", title: "Collateral" }),
    armada: new Item({ id: "armada", title: "Armada" }),
//roundbased
    dieMaschine: new Item({ id: "dieMaschine", title: "Die Maschine" }),
    dieMaschineUnderground: new Item({ id: "dieMaschine_underground", title: "Die Maschine" }),
    firebaseZ: new Item({ id: "firebaseZ", title: "Firebase Z" }),
    firebaseZSpawn: new Item({ id: "firebaseZ_spawn", title: "Firebase Z" }),
    mauerDerToten: new Item({ id: "mauerDerToten", title: "Mauer Der Toten" }),
    mauerDerTotenStreets: new Item({ id: "mauerDerToten_streets", title: "Mauer Der Toten" }),
    forsaken: new Item({ id: "forsaken", title: "Forsaken" }),
    forsakenUnderground: new Item({ id: "forsaken_underground", title: "Forsaken" }),
//onslaught
    miami: new Item({id: "miami", title:"Miami"}),
    satellite: new Item({id: "satellite", title:"Satellite"}),
    moscow: new Item({id: "moscow", title:"Moscow"}),
    nuketown: new Item({id: "nuketown", title:"Nuketown"}),
    thePines: new Item({id: "thePines", title:"The Pines"}),
    express: new Item({id: "express", title:"Express"}),
    rush: new Item({id: "rush", title:"Rush"}),
    echelon: new Item({id: "echelon", title:"Echelon"}),
    driveIn: new Item({id: "driveIn", title:"Drive-In"}),
    cartel: new Item({id: "cartel", title:"Cartel"}),
    crossroads: new Item({id: "crossroads", title:"Crossroads"}),
    raid: new Item({id: "raid", title:"Raid"}),
    apocalypse: new Item({id: "apocalypse", title:"Apocalypse"}),
    yamantau: new Item({id: "yamantau", title:"Yamantau"}),
    standoff: new Item({id: "standoff", title:"Standoff"}),
    collateralOn: new Item({id: "collateralOn", title:"Collateral (Onslaught)"}),
    checkmate: new Item({id: "checkmate", title:"Checkmate"}),
    garrison: new Item({id: "garrison", title:"Garrison"}),
    deprogram: new Item({id: "deprogram", title:"Deprogram"}),



};

function findMapById(mapId) {
    const maps = Object.values(mapDetails);
    const foundMap = maps.find(map => map.id === mapId);
    return foundMap;
}

const allOutbreakMapsArr = [
    mapDetails.zoo.id,
    mapDetails.ruka.id,
    mapDetails.duga.id,
    mapDetails.alpine.id,
    mapDetails.golova.id,
    mapDetails.sanatorium.id,
    mapDetails.collateral.id,
    mapDetails.armada.id
]

/////////////////////Metadata/////////////////////////
const repoDomain = 'https://github.com/Miss-placed/DECLASSIFIED';
const appDomain = 'https://declassified.netlify.app/';

const contribTemplates = {
    intel: {
        newId: "newIntel",
        newTitle: "New Intel",
        editId: "editIntel",
        editTitle: "Intel Fix",
    },
    misc: {
        newId: "newMisc",
        newTitle: "New Misc Marker",
        editId: "editMisc",
        editTitle: "Misc Marker Fix",
    }
}

const modalSet = {
    intelOverview: ["intel-filters", "intel-list", "intel-stats"],
    intelDescription: ["intel-list", "intel-detail"],
    settingsMain: ["settings"],
    settingsDetail: ["settings", "settings-detail"],
}

/////////////////////Core Categories/////////////////////////
const factions = {
    requiem: "Requiem",
    omega: "Omega",
    maxis: "Maxis",
    darkAether: "Dark Aether",
}

const intelTypes = {
    audio: "Audio Logs",
    docs: "Documents",
    radio: "Radio Transmissions",
    artifact: "Artifacts",
}


/////////////////////Perks/////////////////////////
const perks = {
    staminup: new Item({ id: "staminUp", title: "Stamin-Up", icon: miscIconInit("staminUp", "perk") }),
    quick: new Item({ id: "quickRevive", title: "Quick Revive", icon: miscIconInit("quickRevive", "perk") }),
    jugg: new Item({ id: "juggernog", title: "Jugger-Nog", icon: miscIconInit("juggernog", "perk") }),
    speed: new Item({ id: "speedCola", title: "Speed Cola", icon: miscIconInit("speedCola", "perk") }),
    mule: new Item({ id: "muleKick", title: "Mule Kick", icon: miscIconInit("muleKick", "perk") }),
    elemental: new Item({ id: "elementalPop", title: "Elemental Pop", icon: miscIconInit("elementalPop", "perk") }),
    death: new Item({ id: "deathPerception", title: "Death Perception", icon: miscIconInit("deathPerception", "perk") }),
    tomb: new Item({ id: "tombstoneSoda", title: "Tombstone", icon: miscIconInit("tombstoneSoda", "perk") }),
    deadshot: new Item({ id: "deadshotDaiquiri", title: "Deadshot Daiquiri", icon: miscIconInit("deadshotDaiquiri", "perk") }),
    phd: new Item({ id: "PHDSlider", title: "PHD Slider", icon: miscIconInit("PHDSlider", "perk") }),
}

/////////////////////Markers/////////////////////////
const markerTypes = {
    intel: new Item({ id: "intel", title: "Intel" }),
    misc: new Item({ id: "misc", title: "Misc" }),
    worldEvents: new Item({ id: "worldEvents", title: "World Events" }),
    easterEggs: new Item({ id: "easterEggs", title: "Easter Eggs" }),
}

const defaultPOIData = {
    challenge: "Obtained through the Challenge Machine",
    special: "Dropped from Special/Elite kills",
    chests: "Dropped from Special/Elite kills or golden chests",
    onslaught: "Dropped during the onslaught gamemode.",
    nullLoc: "[0,0]"
}

/////////////////////Misc/////////////////////////
const miscTypes = {
    dementedEcho: new Item({ title: "Demented Echo", desc: "Destroy it before it touches you to get a reward.", icon: dementedIcon }),
    rift: new Item({ title: "Aether Rift", desc: "Jump through to teleport and gain a random powerup.", icon: riftIcon }),
    redRift: new Item({ title: "Red Aether Rift", desc: "Jump through all the rifts to continue the Easter Egg", icon: redRiftIcon }),
    radio: new Item({ title: "Radio", icon: radioIcon }),
    //TODO STANDARDISE STRING
    requiemRadio: new Item({ title: "Requiem Radio", icon: radioIcon, layer: "Markers" }),
    omegaRadio: new Item({ title: "Omega Radio", icon: radioIcon }),
    maxisRadio: new Item({ title: "Maxis Radio", icon: radioIcon }),
    monkey: new Item({ title: "Stone Monkey", icon: monkeyIcon }),
    projector: new Item({ title: "Projector", desc: "The projector for the Main Quest" }),
    signal: new Item({ title: "Signal" }),
    fishing: new Item({ title: "Fishing", desc: "Fish up to 3 times for a small reward each time.", icon: fishingIcon }),
    essenceDrop: new Item({ title: "Essence Drop" }),
    scrapHeap: new Item({ title: "Scrap Heap" }),
    thermophasic: new Item({ title: "D.I.E. Thermophasic Upgrade" }),

    wunderFizz: new Item({ title: "Der Wunderfizz", icon: wunderFizzIcon }),
    trialComputer: new Item({ title: "Trial Computer", icon: trialComputerIcon }),
    papMachine: new Item({ title: "Pack-a-Punch", icon: papMachineIcon }),
    mysteryBox: new Item({ title: "Mystery Box Location", icon: mysteryBoxIcon }),
    wallbuy: new Item({ title: "Wall Buy", icon: wallbuyIcon }),
    power: new Item({ title: "Power Switch" }),
    jumpPad: new Item({ title: "Jump Pad" }),
    landingPad: new Item({ title: "Landing Pad" }),
    airSupport: new Item({ title: "Air Support Console" }),
    teleporter: new Item({ title: "Teleporter" }),
    collector: new Item({ title: "Collection Unit" }),
    reactor: new Item({ title: "Aether Reactor" }),
    craftingTable: new Item({ title: "Crafting Table", icon: craftingTableIcon }),
    arsenal: new Item({ title: "Arsenal", icon: arsenalIcon }),
    ammoCrate: new Item({ title: "Ammo Crate", icon: ammoCrateIcon }),
    trap: new Item({ title: "Trap" }),
    zipline: new Item({ title: "Zipline", icon: ziplineIcon }),
    rampageInducer: new Item({ title: "Rampage Inducer",icon: dementedIcon }),

    klausRadio: new Item({ title: "Klaus recall radio", icon: radioIcon }),
    aetherTunnel: new Item({ title: "Aether Tunnel", icon: ziplineIcon }),
    aetherCrystal: new Item({ title: "Aether Crystal" }),
}

const worldEventTypes = {
    furyCrystal: new Item({ title: "Fury Crystal" }),
    escort: new Item({ title: "Escort" }),
    redChallengeChest: new Item({ title: "Red Challenge Chest" }),
    purpleChallengeChest: new Item({ title: "Purple Challenge Chest" }),
    dragonRocket: new Item({ title: "Dragon Rocket" }),
    orda: new Item({ title: "Orda" }),
    horde: new Item({ title: "Horde" }),
    orb: new Item({ title: "Aetherial orb", desc: "Damage it and chase it 3 times, you can also shoot it mid-air whilst moving to each location." }),
    musicRadio: new Item({ title: "Music radio" }),
}

//TODO: Decide the structure for how we store and retrieve EE steps (maybe new datastore)
/*  
    These are just the initial labels for the easter eggs.
    We will need to break these down further and make step-by-step markers 
*/
const easterEggTypes = {
    dieMaschineEE: "Seal the Deal", //https://callofduty.fandom.com/wiki/Seal_the_Deal
    dieMaschineWW: "D.I.E. Wonder Weapon",
    dieMaschineBonusChest: "Coffin Dance",
    dieMaschineRadioAlign: "Radio Alignment",
    dieMaschineOrdaHand: "Orda Hand",

    firebaseZEE: "Maxis Potential", //https://callofduty.fandom.com/wiki/Maxis_Potential
    firebaseZWW: "Rai K-84",
    firebaseZBonusChest: "Bunny Scare",
    firebaseZSafe: "Sergei's Safe",
    firebaseZMonkeyUpgrade: "Monkey bomb upgrade",
    firebaseZFreeJump: "Free Jump pad",

    mauerDerTotenEE: "Tin Man Heart", //https://callofduty.fandom.com/wiki/Tin_Man_Heart
    mauerDerTotenWW: "CRBR-S",
    mauerDerTotenBonusChest: "Hasenbau Club",
    mauerDerTotenTargets: "Target Practice",
    mauerDerTotenKlaus: "Klaus",

    outbreakEE1: "Ravenov Implications", //https://callofduty.fandom.com/wiki/Ravenov_Implications
    outbreakEE2: "Entrapment", //https://callofduty.fandom.com/wiki/Entrapment

    music: "Cassette Tapes",
}

// Gonna have to add a way to bring through the full description along with the unique description from the misc markers
const outbreakEE2Steps = {
    step2Helicopter: new Item({ title: "Crashed Helicopter", desc: `The transport chopper that the Omega Eight were using is located in the "Carved Hills", located south of the lone shack, having crashed by unknown means. Nearing it will spawn a horde needs to be eliminated, as one of the corpses is holding a message from Hugo Jager about where the surviving members of the crash went.`}),
    step3Orb: new Item({ title: "Red Aetherial Orb", desc: "The Aetherium Orb can spawn within three places and is visually distinct, having a darker hue of red and will not produce Essence upon being damaged. When damaged, it will flee like the standard variant for a total of three times before it will flee to hover over the Recon Rover to where it will stay above, unwilling to enter it."}),
}