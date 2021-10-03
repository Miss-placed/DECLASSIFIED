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
    mauerDerTotenStreets: "mauerDerToten_streets"
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

/////////////////////Markers/////////////////////////
const markerTypes = {
    intel: "Intel",
    misc: "Misc",
    worldEvents: "World Events",
    easterEggs: "Easter Eggs",
}

const intelTypes = {
    audio: "Audio Logs",
    docs: "Documents",
    radio: "Radio Transmissions",
    artifact: "Artifacts",
}

const miscTypes = {
    dementedEcho: "Demented Echo",
    rift: "Aether Rift",
    redRift: "Red Aether Rift",
    radio: "Radio",
    monkey: "Monkey",
    projector: "Projector",
    signal: "Signal",
    fishing: "Fishing",
    essenceDrop: "Essence Drop",
    scrapHeap: "Scrap Heap",

    perkMachine: "Perk Machine",
    papMachine: "Pack-a-Punch",
    mysteryBox: "Mystery box",
    wallbuy: "Wall Buy",
    jumpPad: "Jump Pad",
    craftingTable: "Crafting Table",
    ammoCrate: "Ammo Crate",
    trap: "Trap",
    klausRadio: "Klaus recall radio",
    aetherCrystal: "Aether Crystal",
}

const worldEventTypes = {
    furyCrystal: "Fury Crystal",
    escort: "Escort",
    redChallengeChest: "Red Challenge Chest",
    purpleChallengeChest: "Purple Challenge Chest",
    dragonRocket: "Dragon Rocket",
    orda: "Orda",
    horde: "Horde",
    orb: "Orb",
    musicRadio: "Music radio",
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

/////////////////////Marker Icons (images)/////////////////////////
let miscTypeIcons = {
    "Demented": dementedIcon,
    "Rift": riftIcon,
    "RedRift": redRiftIcon,
    "Radio": radioIcon,
    "Monkey": monkeyIcon,
    "Projector": generalIcon,
    "Signal": generalIcon,
    "Fishing": fishingIcon,
};