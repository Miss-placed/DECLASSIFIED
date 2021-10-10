/////////////////////Classes/////////////////////////
class Item {
    constructor({ id, title, desc, icon }) {
        this.id = id;
        this.title = title ?? "";
        this.desc = desc ?? "";
        this.icon = icon ?? generalIcon;
    }
}

class Marker {
    constructor(id, item, loc, uniqueDesc) {
        this.id = id;
        if (item instanceof Item) {
            this.title = item.title ?? "";
            this.desc = item.desc ?? "";
            this.icon = item.icon ?? generalIcon;
        }
        //Override static description with unique description
        if (uniqueDesc) this.desc = uniqueDesc;
        // Could do map in the future depending on how the data structure needs to change
        /* this.map = map; */
        this.loc = loc ?? [0, 0];
    }
}

class UserPrefs {
    constructor({lastSelectedMap, collectedIntel, darkmode, asideShow}) {
        this.lastSelectedMap = lastSelectedMap ?? app.currentMap;
        this.collectedIntel = collectedIntel ?? [];
        this.darkmode = darkmode ?? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
        this.asideShow = asideShow ?? true;
    }
}

/////////////////////Maps/////////////////////////
const mapStrings = {
    zoo: "zoo",
    ruka: "ruka",
    duga: "duga",
    alpine: "alpine",
    golova: "golova",
    sanatorium: "sanatorium",
    collateral: "collateral",
    armada: "armada",

    allOutbreakMaps: "outbreak",

    dieMaschine: "dieMaschine",
    dieMaschineUnderground: "dieMaschine_underground",
    firebaseZ: "firebaseZ",
    firebaseZSpawn: "firebaseZ_spawn",
    mauerDerToten: "mauerDerToten",
    mauerDerTotenStreets: "mauerDerToten_streets",
    forsaken: "forsaken",
    forsakenUnderground: "forsaken_underground",
}

const allOutbreakMapsArr = [
    mapStrings.zoo,
    mapStrings.ruka,
    mapStrings.duga,
    mapStrings.alpine,
    mapStrings.golova,
    mapStrings.sanatorium,
    mapStrings.collateral,
    mapStrings.armada
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

const factions = {
    requiem: "Requiem",
    omega: "Omega",
    maxis: "Maxis",
    darkAether: "Dark Aether",
}

const seasons = {
    preseason: "Preseason",
    season1: "Season 1",
    season2: "Season 2",
    season3: "Season 3",
    season4: "Season 4",
    season5: "Season 5",
    season6: "Season 6",
}

/////////////////////Perks/////////////////////////
const perks = {
    staminup: new Item({ id: "staminUp", title: "Stamin-Up", icon: iconInit("staminUp", "perk")}),
    quick: new Item({ id: "quickRevive", title: "Quick Revive", icon: iconInit("quickRevive", "perk")}),
    jugg: new Item({ id: "juggernog", title: "Jugger-Nog", icon: iconInit("juggernog", "perk")}),
    speed: new Item({ id: "speedCola", title: "Speed Cola", icon: iconInit("speedCola", "perk")}),
    mule: new Item({ id: "muleKick", title: "Mule Kick", icon: iconInit("muleKick", "perk")}),
    elemental: new Item({ id: "elementalPop", title: "Elemental Pop", icon: iconInit("elementalPop", "perk")}),
    death: new Item({ id: "deathPerception", title: "Death Perception", icon: iconInit("deathPerception", "perk")}),
    tomb: new Item({ id: "tombstoneSoda", title: "Tombstone", icon: iconInit("tombstoneSoda", "perk")}),
    deadshot: new Item({ id: "deadshotDaiquiri", title: "Deadshot Daiquiri", icon: iconInit("deadshotDaiquiri", "perk")}),
}



/////////////////////Markers/////////////////////////
const markerTypes = {
    intel: new Item({ id: "intel", title: "Intel" }),
    misc: new Item({ id: "misc", title: "Misc" }),
    worldEvents: new Item({ id: "worldEvents", title: "World Events" }),
    easterEggs: new Item({ id: "easterEggs", title: "Easter Eggs" }),
}

const intelTypes = {
    audio: "Audio Logs",
    docs: "Documents",
    radio: "Radio Transmissions",
    artifact: "Artifacts",
}

const miscTypes = {
    dementedEcho: new Item({ title: "Demented Echo", desc: "Destroy it before it touches you to get a reward.", icon: dementedIcon}),
    rift: new Item({ title: "Aether Rift", desc:  "Jump through to teleport and gain a random powerup.", icon: riftIcon}),
    redRift: new Item({ title: "Red Aether Rift", desc:  "Jump through all the rifts to continue the Easter Egg", icon: redRiftIcon}),
    radio: new Item({ title: "Radio", icon: radioIcon}),
    monkey: new Item({ title: "Stone Monkey", icon: monkeyIcon}),
    projector: new Item({ title: "Projector", desc:  "The projector for the Main Quest"}),
    signal: new Item({ title: "Signal"}),
    fishing: new Item({ title: "Fishing", desc: "Fish up to 3 times for a small reward each time.", icon: fishingIcon}),
    essenceDrop: new Item({ title: "Essence Drop"}),
    scrapHeap: new Item({ title: "Scrap Heap"}),

    wunderFizz: new Item({ title: "Der Wunderfizz", icon: wunderFizzIcon}),
    trialComputer: new Item({ title: "Trial Computer"}),
    papMachine: new Item({ title: "Pack-a-Punch"}),
    mysteryBox: new Item({ title: "Mystery Box Location", icon: mysteryBoxIcon}),
    wallbuy: new Item({ title: "Wall Buy"}),
    power: new Item({ title: "Power Switch"}),
    jumpPad: new Item({ title: "Jump Pad"}),
    teleporter: new Item({ title: "Teleporter"}),
    collector: new Item({ title: "Collection Unit"}),
    craftingTable: new Item({ title: "Crafting Table"}),
    arsenal: new Item({ title: "Arsenal"}),
    ammoCrate: new Item({ title: "Ammo Crate"}),
    trap: new Item({ title: "Trap"}),
    zipline: new Item({ title: "Zipline"}),
    rampageInducer: new Item({ title: "Rampage Inducer"}),

    klausRadio: new Item({ title: "Klaus recall radio"}),
    aetherCrystal: new Item({ title: "Aether Crystal"}),
}

const worldEventTypes = {
    furyCrystal: new Item({ title: "Fury Crystal"}),
    escort: new Item({ title: "Escort"}),
    redChallengeChest: new Item({ title: "Red Challenge Chest"}),
    purpleChallengeChest: new Item({ title: "Purple Challenge Chest"}),
    dragonRocket: new Item({ title: "Dragon Rocket"}),
    orda: new Item({ title: "Orda"}),
    horde: new Item({ title: "Horde"}),
    orb: new Item({ title: "Aetherial orb", desc: "Damage it and chase it 3 times, you can also shoot it mid-air whilst moving to each location."}),
    musicRadio: new Item({ title: "Music radio"}),
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