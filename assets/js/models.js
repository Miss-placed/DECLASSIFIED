class Item {
    constructor(title, desc, icon) {
        this.title = title ?? "";
        this.desc = desc ?? "";
        this.icon = icon ?? generalIcon;
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

const challengeTypes = {
    multiplayer: "Multiplayer",
    zombies: "Zombies",
    campaign: "Campaign",
}

const challengeCategories = {
    career: "Career",
    battleHardened: "Battle Hardened",
    requiemAdvancement: "Requiem Advancement",
    darkOps: "Dark Ops",
}

const challengeSubCategories = {
    career: {
        dieMaschineReport: "",
        bootCamp: "",
        grizzledVeteran: "",
    },
    battleHardened: {
        zombieHunter: "",
        elementalist: "",
        tactician: "",
        silverbackExpedition: "",
        gorillaStalker: "",
    },
    requiemAdvancement: {
        mauerDerTotenReport: "",
        firebaseZReport: "",
        fieldResearcher: "",
        surveyor: "",
        exterminator: "",
    },
    seasonal: seasons
}

const miscTypes = {
    dementedEcho: new Item("Demented Echo", "Destroy it before it touches you to get a reward.", dementedIcon),
    rift: new Item("Aether Rift", "Jump through to teleport and gain a random powerup.", riftIcon),
    redRift: new Item("Red Aether Rift", "Jump through all the rifts to continue the Easter Egg", redRiftIcon),
    radio: new Item("Radio", null, radioIcon),
    monkey: new Item("Stone Monkey", null, monkeyIcon),
    projector: new Item("Projector", "The projector for the Main Quest"),
    signal: new Item("Signal"),
    fishing: new Item("Fishing", null, fishingIcon),
    essenceDrop: new Item("Essence Drop"),
    scrapHeap: new Item("Scrap Heap"),

    perkMachine: new Item("Perk Machine"),
    papMachine: new Item("Pack-a-Punch"),
    mysteryBox: new Item("Mystery box"),
    wallbuy: new Item("Wall Buy"),
    jumpPad: new Item("Jump Pad"),
    craftingTable: new Item("Crafting Table"),
    ammoCrate: new Item("Ammo Crate"),
    trap: new Item("Trap"),
    klausRadio: new Item("Klaus recall radio"),
    aetherCrystal: new Item("Aether Crystal"),
}

const worldEventTypes = {
    furyCrystal: new Item("Fury Crystal"),
    escort: new Item("Escort"),
    redChallengeChest: new Item("Red Challenge Chest"),
    purpleChallengeChest: new Item("Purple Challenge Chest"),
    dragonRocket: new Item("Dragon Rocket"),
    orda: new Item("Orda"),
    horde: new Item("Horde"),
    orb: new Item("Aetherial orb", "Damage it and chase it 3 times, you can also shoot it mid-air whilst moving to each location."),
    musicRadio: new Item("Music radio"),
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
