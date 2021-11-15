// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it's very very unlikely but still possible).

//https://callofduty.fandom.com/wiki/Challenges/Call_of_Duty:_Black_Ops_Cold_War

class Challenge {
    /**
     * 
     * @param {number} id Integer id used to identify the challenge, must be unique.
     * @param {string} type Main type that challenge is represented as. e.g. Zombies, Multiplayer etc.
     * @param {string} category Category that the challenge falls under, this will be the tab that the
     * challenge can be found under. Note that there are main categories and sub categories, only Dark Ops 
     * challenges are directly related to a main category, other are all sub categories.
     * @param {string} name Main name/title of the challenge.
     * @param {string} desc Full description of the challenge, including completion criteria.
     * @param {string} img Image imgur id to be used for the calling card.
     * @param {array} requiredChallenges An array of any challenge ids that must be completed in order to complete this challenge. 
     * (This is mainly used for "Master" challenges where all challenges inside a sub category need to be completed)
     */
    constructor(id, type, category, name, desc, img, requiredChallenges = null, minimumRequired = null) {
        this.id = id;
        this.type = type;
        this.category = category;
        this.name = name;
        this.desc = desc;
        this.img = img ? `https://i.imgur.com/${img}.jpg` : `assets/img/cc/placeholder.jpg`;
        this.requiredChallenges = requiredChallenges;
        this.minimumRequired = minimumRequired
    }

    areAllChallengesCompleted() {
        const currentPrefs = getUserPrefs();
        return this.requiredChallenges.every(i => currentPrefs.completedChallenges.includes(i));
    }
}

class Challenges {
    static challengeStore = [

        // Zombies ==> Career ==> Die Maschine Report
        // https://imgur.com/a/c8gnBVn
        new Challenge(
            "EQolZ",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].dieMaschineReport,
            "Endstation Historian",
            "Collect 20 Requiem Intel.",
            "umHTjMD",
        ),
        new Challenge(
            "i6b8t",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].dieMaschineReport,
            "Conspiracy Theorist",
            "Collect 12 Maxis intel.",
            "FvTnb6l",
        ),
        new Challenge(
            "d3nJe",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].dieMaschineReport,
            "KGB Archivist",
            "Collect 13 Omega intel.",
            "P2dJEKW",
        ),
        new Challenge(
            "3CvGf",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].dieMaschineReport,
            "Interdimensional Broadcast",
            "Collect 32 Dark Aether intel.",
            "7Y3yYDr",
        ),
        new Challenge(
            "GJGwe",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].dieMaschineReport,
            "Seeing Ghosts",
            "View all Spectral Reflections.",
            "RBNMA02",
        ),
        new Challenge(
            "e4V27",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].dieMaschineReport,
            "No Stone Unturned",
            "Travel to every area in a single game.",
            "cEwSzfX",
        ),
        // end Zombies ==> Career ==> Die Maschine Report

        // Zombies ==> Career ==> Boot Camp
        // https://imgur.com/a/d4aWZ8y
        new Challenge(
            "t70li",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].bootCamp,
            "Showtime",
            "Turn on the power.",
            "dvZ9oKF",
        ),
        new Challenge(
            "MTOD3",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].bootCamp,
            "Perk Me Up",
            "Drink 6 different Perks.",
            "GMdTHTU",
        ),
        new Challenge(
            "1hen9",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].bootCamp,
            "Off The Shelf",
            "Kill 100 enemies with weapons bought off walls.",
            "u0KSpii",
        ),
        new Challenge(
            "wvKRb",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].bootCamp,
            "Gambler",
            "Kill 100 enemies with weapons from the Mystery Box.",
            "qHiGKYu",
        ),
        new Challenge(
            "d5rDf",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].bootCamp,
            "Scientific Advancements",
            "Kill 100 enemies with Field Upgrades.",
            "cvsK0Fu",
        ),
        new Challenge(
            "hbUea",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].bootCamp,
            "Scavenger",
            "Kill 100 enemies with Equipment.",
            "EuInbF9",
        ),
        // end Zombies ==> Career ==> Boot Camp

        // Zombies ==> Career ==> Grizzled Veteran
        // https://imgur.com/a/YKktetL
        new Challenge(
            "3bAdC",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].grizzledVeteran,
            "Zurvivor",
            "Reach 250 Round Milestones.",
            "jU4XO2c",
        ),
        new Challenge(
            "MlSB7",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].grizzledVeteran,
            "Get To The Chopper",
            "Successfully exfil 50 times.",
            "rL7wUwS",
        ),
        new Challenge(
            "9Yr1I",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].grizzledVeteran,
            "Stabtastic",
            "Get 1000 melee kills.",
            "dtvjzLB",
        ),
        new Challenge(
            "Y0OuH",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].grizzledVeteran,
            "Headhunter",
            "Get 5000 critical kills.",
            "z1921pI",
        ),
        new Challenge(
            "TFC49",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].grizzledVeteran,
            "Medic",
            "Heal self or other players for over 100 health 50 times.",
            "p1hsBDh",
        ),
        new Challenge(
            "IDhln",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].grizzledVeteran,
            "Power Killer",
            "Kill 5000 enemies using a Pack-A-Punched weapon.",
            "6miGplr",
        ),
        // end Zombies ==> Career ==> Grizzled Veteran

        // Zombies ==> Bttle Hardened ==> Zombie Hunter
        // https://imgur.com/a/y7We9yI
        new Challenge(
            "uH9ef",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].zombieHunter,
            "Trapper",
            "Kill 500 enemies with C4, Energy Mine, or Sentry Turret.",
            "NYmAIxG",
        ),
        new Challenge(
            "ZmWQa",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].zombieHunter,
            "Signature Slayer",
            "Kill 1000 enemies with Wonder Weapons.",
            "khvMbZR",
        ),
        new Challenge(
            "5liyT",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].zombieHunter,
            "Big Game",
            "Kill 50 Elite enemies",
            "GYhdh8o",
        ),
        new Challenge(
            "Zuvf3",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].zombieHunter,
            "Demolitionist",
            "Earn 100 multi-kills with Equipment: Frag, Semtex, Molotov, C4 or Cymbal Monkey.",
            "YfH2WG6",
        ),
        new Challenge(
            "37z6n",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].zombieHunter,
            "Clever Ruse",
            "Kill 100 distracted enemies.",
            "O6oEgwG",
        ),
        new Challenge(
            "4QaHw",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].zombieHunter,
            "Superior Ordnance",
            "Kill 30 enemies with a single Support. Sentry Turret does not count.",
            "zgBNTXS",
        ),
        // end Zombies ==> Bttle Hardened ==> Zombie Hunter

        // Zombies ==> Bttle Hardened ==> Elementalist
        // https://imgur.com/a/xOX9ILz
        new Challenge(
            "ZwMyC",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].elementalist,
            "Plaguebringer",
            "Kill 500 enemies using a zombie with brain rot.",
            "O4Kq0JO",
        ),
        new Challenge(
            "5M1p9",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].elementalist,
            "Electrician",
            "Kill 500 enemies that are stunned from electric damage.",
            "2aGvBrJ",
        ),
        new Challenge(
            "Ioxly",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].elementalist,
            "Blaster",
            "Kill 1000 enemies with explosive damage.",
            "Dyl1yA5",
        ),
        new Challenge(
            "CPC1w",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].elementalist,
            "Pyromaniac",
            "Kill 1000 enemies that are on fire.",
            "YqodsA2",
        ),
        new Challenge(
            "UBlDr",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].elementalist,
            "Coldfront",
            "Kill 1000 enemies while slowed or frozen from frost damage.",
            "venAjTc",
        ),
        new Challenge(
            "WKUZE",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].elementalist,
            "Zynergy",
            "Kill 500 enemies that have been damaged by two types of elemental damage.",
            "0pUv3n8",
        ),
        // end Zombies ==> Bttle Hardened ==> Elementalist


        // Zombies ==> Bttle Hardened ==> Tactician
        // https://imgur.com/a/D5hEJ99
        new Challenge(
            "zCEQG",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].tactician,
            "From The Shadows",
            "Earn 50 Hide and Seek Medals (kill 5 or more enemies while shrouded by Aether Shroud).",
            "P8GQOND",
        ),
        new Challenge(
            "CkgJr",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].tactician,
            "Wood Chipper",
            "Kill 5 enemies with a single Tomahawk 10 times.",
            "fnhqh1T",
        ),
        new Challenge(
            "_hAxI",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].tactician,
            "Stay Right There",
            "Kill 3 stunned enemies within 2 seconds of each other 50 times.",
            "YKXDOnq",
        ),
        new Challenge(
            "IhvRL",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].tactician,
            "Hands Off Help",
            "Revive yourself or other players with Self Revive or Healing Aura 50 times.",
            "nnu8aV2",
        ),
        new Challenge(
            "SpZB1",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].tactician,
            "Ringmaster",
            "Earn 50 Ringleader Medals (kill 10 or more enemies while staying inside your Ring of Fire).",
            "xqclKfy",
        ),
        new Challenge(
            "4eDxD",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].tactician,
            "Rampage",
            "Earn 10 Extermination Medals (kill 25 or more enemies rapidly).",
            "0kLzuW3",
        ),
        // end Zombies ==> Bttle Hardened ==> Tactician


        // Zombies ==> Bttle Hardened ==> Silverback Expedition
        // https://imgur.com/a/6jtGS9f
        new Challenge(
            "ZwMyC",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].silverbackExpedition,
            "Full Arsenal",
            "In a single Dead Ops Arcade game, reach maximum power for each of the 7 player weapons.",
            "shLJQaw",
        ),
        new Challenge(
            "5M1p9",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].silverbackExpedition,
            "Archaeologist",
            "In a single Dead Ops Arcade game, find and complete all 4 dungeons in the Wild.",
            "apsAyI0",
        ),
        new Challenge(
            "Ioxly",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].silverbackExpedition,
            "Moving On Up",
            "In Dead Ops Arcade, teleport away from 25 Arenas.",
            "UomVQ6y",
        ),
        new Challenge(
            "CPC1w",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].silverbackExpedition,
            "Bonus Round",
            "In Dead Ops Arcade, complete 10 bonus areas.",
            "6d36spJ",
        ),
        new Challenge(
            "UBlDr",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].silverbackExpedition,
            "Invictus",
            "In Dead Ops Arcade, be Fated 5 times.",
            "C174GHF",
        ),
        new Challenge(
            "WKUZE",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].silverbackExpedition,
            "Topple Mama",
            "In Dead Ops Arcade, defeat the Mamaback.",
            "kg1ncVI",
        ),
        // end Zombies ==> Bttle Hardened ==> Silverback Expedition


        // Zombies ==> Bttle Hardened ==> Gorilla Stalker
        // https://imgur.com/a/6jtGS9f
        new Challenge(
            "YNhXq",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].gorillaStalker,
            "Damage Delivery",
            "In Dead Ops Arcade, kill 750 zombies with the Mech, Tank, or Hind.",
            "i7XSo9y",
        ),
        new Challenge(
            "l0JNE",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].gorillaStalker,
            "New School",
            "In a Dead Ops Arcade, kill 3000 zombies in 1st person view.",
            "3l67LIE",
        ),
        new Challenge(
            "HdurP",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].gorillaStalker,
            "Tools Of The Trade",
            "In Dead Ops Arcade, kill 3000 zombies using Booster or Bombs.",
            "LA2yFZY",
        ),
        new Challenge(
            "k3BBG",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].gorillaStalker,
            "Can't Touch This",
            "In Dead Ops Arcade, reach a 7x score Multiplier.",
            "LzOrN9Y",
        ),
        new Challenge(
            "ISUok",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].gorillaStalker,
            "Exceptional Trophy Room",
            "In Dead Ops Arcade, Defeat the Mamaback and one of each type of the Mamaback's minions.",
            "4ppt9cF",
        ),
        new Challenge(
            "zbZWj",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].gorillaStalker,
            "Don't Call Me Chicken!",
            "In Dead Ops Arcade, kill 1000 zombies using chickens.",
            "WkFGfPZ",
        ),
        // end Zombies ==> Bttle Hardened ==> Gorilla Stalker

        // Zombies ==> Requiem Advancement ==> Forsaken Report
        // https://imgur.com/a/OpbBU7l
        new Challenge(
            "GSiVF",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].forsakenReport,
            "Coin Ops",
            "Play every game at the Arcade.",
            "J9VIlEe",
        ),
        new Challenge(
            "XUmkS",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].forsakenReport,
            "The Only Way",
            "Collect 8 maxis and Dark Aether intel.",
            "KRWxuQe",
        ),
        new Challenge(
            "Bx12d",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].forsakenReport,
            "First And The Last",
            "Collect 13 Omega intel.",
            "GJI9sL7",
        ),
        new Challenge(
            "sn5nW",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].forsakenReport,
            "Director's Pawn",
            "Collect 15 Requiem intel.",
            "wyzGhNo",
        ),
        new Challenge(
            "pSUE4",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].forsakenReport,
            "Road Trip",
            "Travel to every area in a single game.",
            "dkvVrhL",
        ),
        new Challenge(
            "LBGue",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].forsakenReport,
            "A Higher Place",
            "Unlock the Pack-A-Punch.",
            "p4BClpc",
        ),
        // end Zombies ==> Requiem Advancement ==> Forsaken Report

        // Zombies ==> Requiem Advancement ==> Mauer Der Toten Report
        // https://imgur.com/a/W9yOEcw
        new Challenge(
            "Juc14",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].mauerDerTotenReport,
            "Broken Seal",
            "Unlock the Pack-A-Punch.",
            "jWehX0k",
        ),
        new Challenge(
            "XEEn2",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].mauerDerTotenReport,
            "Tourist",
            "Travel to every area in a single game.",
            "T6MtNuT",
        ),
        new Challenge(
            "mzocc",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].mauerDerTotenReport,
            "Secret Agenda",
            "Collect 16 Omega intel.",
            "57yGoQd",
        ),
        new Challenge(
            "Rrqfp",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].mauerDerTotenReport,
            "Forsaken Harbinger",
            "Collect 11 Dark Aether intel.",
            "LfCDlur",
        ),
        new Challenge(
            "W3VcA",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].mauerDerTotenReport,
            "Unsafe House",
            "Collect 21 Requiem intel.",
            "V3cI3Pa",
        ),
        new Challenge(
            "S_FVf",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].mauerDerTotenReport,
            "Grand Prize",
            "Choose the door with the best prize.",
            "G15B1pB",
        ),
        // end Zombies ==> Requiem Advancement ==> Mauer Der Toten Report

        // Zombies ==> Requiem Advancement ==> Firebase Z Report
        // https://imgur.com/a/H9v37aa
        new Challenge(
            "5qkjP",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].firebaseZReport,
            "Requiem Reinforcements",
            "Take back all three Aether Reactors.",
            "y7gJ6XF",
        ),
        new Challenge(
            "cM_QM",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].firebaseZReport,
            "Undead Drop",
            "Collect 16 Dark Aether intel.",
            "UDC6a9K",
        ),
        new Challenge(
            "KoS90",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].firebaseZReport,
            "Protected Source",
            "Collect 14 Maxis intel.",
            "IaDzX3d",
        ),
        new Challenge(
            "JqmNC",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].firebaseZReport,
            "Omega Aethernaut",
            "Collect 23 Omega intel.",
            "aJwlwBl",
        ),
        new Challenge(
            "UXDeT",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].firebaseZReport,
            "Requiem Analyst",
            "Collect 23 Requiem intel.",
            "U1ggGOv",
        ),
        new Challenge(
            "LUVVN",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].firebaseZReport,
            "Full Tour",
            "Travel to every area in a single game.",
            "F9doQy5",
        ),
        // end Zombies ==> Requiem Advancement ==> Firebase Z Report

        // Zombies ==> Requiem Advancement ==> Field Researcher
        // https://imgur.com/a/H9v37aa
        new Challenge(
            "wJ8vM",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].fieldResearcher,
            "A Cut Above",
            "In Outbreak, earn 50 Perfect Signal, Loud and Clear, or First Class Medals (Complete objectives with the maschine in very good condition).",
            "zHAJz2Y",
        ),
        new Challenge(
            "wA3bR",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].fieldResearcher,
            "Desperate Measures",
            "In Outbreak, kill 10 or more enemies with a Support during any Objective 50 times.",
            "fhzRfO8",
        ),
        new Challenge(
            "1jnI2",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].fieldResearcher,
            "Efficient Hunt",
            "In Outbreak, kill the HVT in under 2 minutes in the Exterminate Objective 10 times.",
            "BL2A9Eh",
        ),
        new Challenge(
            "PoXXg",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].fieldResearcher,
            "Frontline Data",
            "In Outbreak, complete 100 Objectives.",
            "Jho0vU8",
        ),
        new Challenge(
            "M0bY9",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].fieldResearcher,
            "Get Off My Lawn",
            "In Outbreak, get 500 Baricade Defend kills during the Holdout Objective.",
            "SG1nNam",
        ),
        new Challenge(
            "lZ212",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].fieldResearcher,
            "Questionable Package",
            "In Outbreak, kill 500 enemies with the Aether Canister Field Upgrade during the Retrieve Objective.",
            "zpgNJNs",
        ),
        // end Zombies ==> Requiem Advancement ==> Field Researcher

        // Zombies ==> Requiem Advancement ==> Surveyor
        // https://imgur.com/a/ZVHzvo4
        new Challenge(
            "SGR6v",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].surveyor,
            "Bigger Board",
            "In Outbreak, do well enough on a Trial to earn an uncommon reward 25 times.",
            "rzpoM6B",
        ),
        new Challenge(
            "9kYDJ",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].surveyor,
            "Catching Air",
            "In Outbreak, collect 50 Essence Containers using Jump pads.",
            "DbaKKpQ",
        ),
        new Challenge(
            "K7oqu",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].surveyor,
            "Dragons In Space",
            "In Outbreak, launch 25 Dragons into portals with atleast half fuel earned.",
            "UvTZJ6O",
        ),
        new Challenge(
            "fHL9d",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].surveyor,
            "Miner",
            "In Outbreak, collect 100 Salvage or High-Grade Salvage from Dark Aether Crystals.",
            "qAQERwk",
        ),
        new Challenge(
            "h3JTF",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].surveyor,
            "Piñata Effect",
            "In Outbreak, collect 100 Essence Containers dropped from Aethereal Orbs.",
            "Ss7UT0h",
        ),
        new Challenge(
            "BaAl8",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].surveyor,
            "Treasured Weapons",
            "In Outbreak, get 5000 eliminations with weapons found in chests.",
            "E6ITPCp",
        ),
        // end Zombies ==> Requiem Advancement ==> Surveyor

        // Zombies ==> Requiem Advancement ==> Exterminator
        // https://imgur.com/a/RJn69aU
        new Challenge(
            "1wHi9",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].exterminator,
            "Avenger",
            "In Outbreak, take out 10 horde patrols.",
            "g3TzjPn",
        ),
        new Challenge(
            "3NLit",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].exterminator,
            "Full House",
            "In Outbreak, eliminate a Mimic, Megaton, Krasny Soldat, Mangler, and a Tempest in a single area.",
            "arsGBBI",
        ),
        new Challenge(
            "KoKSl",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].exterminator,
            "Most Worthy",
            "In Outbreak, earn the right to open 25 Gold Chests sent from portals.",
            "H1OWyaj",
        ),
        new Challenge(
            "VqvYx",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].exterminator,
            "Overwatch",
            "In Outbreak, get 250 Longshot Kills.",
            "Lt9rl4N",
        ),
        new Challenge(
            "DmiOk",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].exterminator,
            "Restful Spirit",
            "In Outbreak, kill 10 Demented Echoes before they alert the area.",
            "od4mlUf",
        ),
        new Challenge(
            "8Hf5S",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].exterminator,
            "Road Kill",
            "In Outbreak, Eliminate 1000 enemies while in vehicles.",
            "9TqImWe",
        ),
        // end Zombies ==> Requiem Advancement ==> Exterminator


        // Zombies ==> Dark Ops
        new Challenge(
            "G6Cc0",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Reaper Of The Undead",
            `Kill 1 Million enemies.`,
            "qhxP8xj",
        ),
        new Challenge(
            "QQSU_",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Armed To The Teeth",
            "Have 2 fully Packed Weapons with Ammo Mods equipped and 6 Perks active.",
            "aB15Q5D",
        ),
        new Challenge(
            "PisZV",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Social Distancing",
            "Reach Round 20 without being hit.",
            "MupEv9W",
        ),
        new Challenge(
            "UZWpO",
            challengeTypes.zombies,
            allCategories.darkOps,
            "The Anvil",
            "Exfil a game with only using melee attacks.",
            "Rx5UL1B",
        ),
        new Challenge(
            "OO7hk",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Another Round?",
            "Reach Round 100.",
            "FuqKYLf",
        ),
        new Challenge(
            "9_or5",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Good Enough",
            "Reach Round 20 with only your starting load out and no upgrades.",
            "FffjgEb",
        ),
        new Challenge(
            "TTkVh",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Invincible",
            "Reach Round 30 without going down.",
            "uZTdQ5I",
        ),
        new Challenge(
            "Wboko",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Checkmate",
            "Play every single Trial in Die Maschine in a single game.",
            "0CGDUW8",
        ),
        new Challenge(
            "7LQXS",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Harbinger Of Doom",
            "Kill 50 enemies with a single support.",
            "gagHsDH",
        ),
        new Challenge(
            "Pfx05",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Evil Unleashed",
            "Complete the Main Quest in Die Maschine.",
            "l18AHi9",
        ),
        new Challenge(
            "nrDVa",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Box Addict",
            "Buy every weapon from the Mystery Box in a single game.",
            "dMQ8H8X",
        ),
        new Challenge(
            "ilfAs",
            challengeTypes.zombies,
            allCategories.darkOps,
            "King of Silverbacks",
            "In Dead Ops Arcade, earn a cumulative high score of 999999999.",
            "nwtWLn7",
        ),
        new Challenge(
            "dRRVJ",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Pristine Pelt",
            "In Dead Ops Arcade, defeat Mamaback in the final round without ever dying.",
            "9eKyWIX",
        ),
        new Challenge(
            "JiOa9",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Maxis Potential",
            "Complete the Main Quest in Firebase Z.",
            "XGA6GSm",
        ),
        new Challenge(
            "S2los",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Breakthrough",
            "In Outbreak, complete 10 objectives and exfil in a single game.",
            "Xnmu7j1",
        ),
        new Challenge(
            "8Ub5c",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Ravenov Implications",
            "In Outbreak, rendezvous with Ravenov and obtain critical research.",
            "eR8wv2D",
        ),
        new Challenge(
            "6IHj2",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Entrapment",
            "In Outbreak, locate the defecting Omega scientists and Exfil.",
            "B64Y3Ll",
        ),
        new Challenge(
            "1zKaX",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Tin Man Heart",
            "Complete the Main Quest in Mauer der Toten.",
            "AUV5Miw",
        ),
        new Challenge(
            "o6uZp",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Pyrrhic Victory",
            "Complete the Main Quest in Forsaken.",
            "npv8mXx",
        ),
        // end Zombies ==> Dark Ops

        // Campaign ==> Story ==> Loyal agent
        // https://imgur.com/a/GH5x9m1
        new Challenge(
            "BxN1R",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].loyalAgent,
            "Big-Hearted",
            "Rescue Lukas Richter in Brick in the Wall.",
            "QM94UvG",
        ),
        new Challenge(
            "z8uLI",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].loyalAgent,
            "Dilemma Solved",
            "Choose differently on two separate playthroughs of End of the Line.",
            "G00MFWy",
        ),
        new Challenge(
            "WLFHN",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].loyalAgent,
            "Disciple",
            "Follow all of Adler's orders in Break on Through.",
            "FHFCWfk",
        ),
        new Challenge(
            "CizJj",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].loyalAgent,
            "By the Book",
            "Capture Qasim Javadi in Nowhere Left to Run.",
            "HMPRIAF",
        ),
        new Challenge(
            "a9heU",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].loyalAgent,
            "The Hunt for Red Circus",
            "Correctly identify all three of the Operation Red Circus spies.",
            "zCPBRkH",
        ),
        new Challenge(
            "wTk6v",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].loyalAgent,
            "Friend of the Crown",
            "Capture Anton Volkov in Brick in the Wall.",
            "vFkhPQj",
        ),
        // end Zombies ==> Story ==> Loyal Agent

        // Campaign ==> Story ==> Bloodthirsty
        // https://imgur.com/a/eelHPyP
        new Challenge(
            "PsIuj",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].bloodthirsty,
            "Guilty Bystander",
            "Give no assistance during exfil in End of the Line.",
            "8HL9OUJ",
        ),
        new Challenge(
            "7GWSG",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].bloodthirsty,
            "Volk You",
            "Kill Anton Volkov in Brick in the Wall.",
            "vAOH4kV",
        ),
        new Challenge(
            "f2JPl",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].bloodthirsty,
            "Unhappy Landing",
            "Throw Qasim Javadi off the roof in Nowhere Left to Run.",
            "xBOwBvb",
        ),
        new Challenge(
            "Jq1iy",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].bloodthirsty,
            "No Loose Ends",
            "Kill Lukas Richter.",
            "C2EvWYN",
        ),
        new Challenge(
            "HHf3d",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].bloodthirsty,
            "Kick the Habit",
            "Refuse to light Adler's cigarette in Ashes to Ashes.",
            "TmtARhH",
        ),
        new Challenge(
            "k0AUW",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].bloodthirsty,
            "Chark-Offed",
            "General Charkov is killed in Desperate Measures.",
            "OCwutpi",
        ),
        // end Zombies ==> Story ==> Bloodthirsty

        // Campaign ==> Story ==> Explorer
        // https://imgur.com/a/bPtJxHM
        new Challenge(
            "4dIYy",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].explorer,
            "Humint",
            "Speak to the team on each safehouse visit.",
            "QUPIeNx",
        ),
        new Challenge(
            "KfRHu",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].explorer,
            "Imint",
            "Photograph all six pieces of intel in Redlight, Greenlight.",
            "aucrz8Q",
        ),
        new Challenge(
            "cQhQu",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].explorer,
            "Your Worst Nightmare",
            "Unlock the Redeemer in Echoes of a Cold War.",
            "CJl8xza",
        ),
        new Challenge(
            "X1VG4",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].explorer,
            "Red Connection",
            "Read Lukas Richter's dossier in Brick in the Wall.",
            "yPDgtWU",
        ),
        new Challenge(
            "_8Px0",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].explorer,
            "A Long Trip",
            "Experience all four paths in Break on Through.",
            "djndZSi",
        ),
        new Challenge(
            "H03C3",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].explorer,
            "Let's Try this Way",
            "Complete all ways to get the bunker key in Desperate Measures.",
            "ckmWVMG",
        ),
        // end Zombies ==> Story ==> Explorer

        // Campaign ==> Story ==> Clandestine
        // https://imgur.com/a/Aizvq2u
        new Challenge(
            "EIBZ5",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].clandestine,
            "Silent but Deadly",
            "Perform five stealth kills.",
            "bjtGCJV",
        ),
        new Challenge(
            "sw6lG",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].clandestine,
            "Alley Cat",
            "Sneak undetected through the alleys in Brick in the Wall.",
            "Qw5Sb7B",
        ),
        new Challenge(
            "jt4kG",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].clandestine,
            "Hey, What's that Sound?",
            "Sneak undetected through the rice paddies at night in Break on Through.",
            "Nyc8q6g",
        ),
        new Challenge(
            "ZKYY1",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].clandestine,
            "Nightcrawlers",
            "Sneak undetected into the base in Redlight, Greenlight.",
            "mRyEMT9",
        ),
        new Challenge(
            "0qX_p",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].clandestine,
            "Edda-Fying",
            "Get to Franz Kraus' darkroom without knocking out his wife in Brick in the Wall.",
            "0cf8hid",
        ),
        new Challenge(
            "PASTd",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].clandestine,
            "Smooth Operator",
            "Acquire the bunker key in Desperate Measures without killing anyone.",
            "o3gi4gC",
        ),
        // end Zombies ==> Story ==> Clandestine

        // Campaign ==> Story ==> Highly Proficient
        // https://imgur.com/a/mTT5m8F
        new Challenge(
            "oJz4d",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].highlyProficient,
            "Burning Rubber",
            "Drive under three vehicles with the RC-XD in Nowhere Left to Run.",
            "1ggEMCp",
        ),
        new Challenge(
            "zYBxr",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].highlyProficient,
            "Back to Basics",
            "Clear the bunker without using weapons or grenades during Echoes of a Cold War.",
            "wYF8P1s",
        ),
        new Challenge(
            "HMp7M",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].highlyProficient,
            "Catastrophic",
            "Kill two enemies with the same Body Shield grenade toss.",
            "wkWTx4C",
        ),
        new Challenge(
            "IOFg2",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].highlyProficient,
            "Time to Spare",
            "Place the last C4 with 45 seconds or more remaining in the Final Countdown.",
            "g8wqMQK",
        ),
        new Challenge(
            "DQvNQ",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].highlyProficient,
            "Saving PhD Ryan",
            "Kill the sniper before he shoots the scientist in End of the Line.",
            "fq61ZCg",
        ),
        new Challenge(
            "Tbsha",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].highlyProficient,
            "Targeting Computer",
            "Destroy the enemy Hind with only rockets in Fracture Jaw.",
            "3WVPJqI",
        ),
        // end Zombies ==> Story ==> Highly Proficient


        // Campaign ==> Dark Ops
        // https://imgur.com/a/SqUYN6H
        new Challenge(
            "FLYJ3",
            challengeTypes.campaign,
            allCategories.darkOps,
            "Retro Gamer",
            `Unlock all arcade machines.`,
            "PFitFLb",
        ),
        new Challenge(
            "dyZar",
            challengeTypes.campaign,
            allCategories.darkOps,
            "What Do The Numbers Mean?",
            "Decrypt the Operation Chaos floppy disk.",
            "xWe9IMq",
        ),
        new Challenge(
            "ca4R3",
            challengeTypes.campaign,
            allCategories.darkOps,
            "Defiant",
            "Attempt to jump to your death in Break On Through.",
            "ld1LzEP",
        ),
        new Challenge(
            "CgCkq",
            challengeTypes.campaign,
            allCategories.darkOps,
            "Antihero",
            "Wipe out your former teammates using brute force in Ashes to Ashes.",
            "LQcVKkS",
        ),
        new Challenge(
            "zHjep",
            challengeTypes.campaign,
            allCategories.darkOps,
            "Cover Your Tracks",
            "Stash away five bodies as Belikov in Desperate Measures.",
            "3dlLqZ5",
        ),
        new Challenge(
            "HMzZ8",
            challengeTypes.campaign,
            allCategories.darkOps,
            "Awkward Chat",
            "Answer Imran Zakhaev's questions correctly in the elevator in Desperate Measures.",
            "LarPw0Z",
        ),
        // end Campaign ==> Dark Ops
    ];

    static masterChallenges = [
        //Zombies ==> Career ==> Die Maschine Report
        new Challenge(
            "mMTqi",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].dieMaschineReport,
            "Die Maschine Report Master",
            "Complete all Die Maschine Report Challenges.",
            "c0kH0zg",
            ["EQolZ", "i6b8t", "d3nJe", "3CvGf", "GJGwe", "e4V27"],
        ),
        //Zombies ==> Career ==> Boot Camp
        new Challenge(
            "DsOD5",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].bootCamp,
            "Boot Camp Master",
            "Complete all Boot Camp Challenges.",
            "VxUnfTY",
            ["t70li", "MTOD3", "1hen9", "wvKRb", "d5rDf", "hbUea"],
        ),
        //Zombies ==> Career ==> Grizzled Veteran
        new Challenge(
            "HWNm0",
            challengeTypes.zombies,
            allSubCategories[allCategories.career].grizzledVeteran,
            "Grizzled Veteran Master",
            "Complete all Grizzled Veteran Challenges.",
            "ynzLyfT",
            ["3bAdC", "MlSB7", "9Yr1I", "Y0OuH", "TFC49", "IDhln"],
        ),
        // Zombies ==> Bttle Hardened ==> Zombie Hunter
        new Challenge(
            "nYgXb",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].zombieHunter,
            "Zombie Hunter Master",
            "Complete all Hunter Challenges.",
            "g5LCmtD",
            ["uH9ef", "ZmWQa", "5liyT", "Zuvf3", "37z6n", "4QaHw"],
        ),
        // Zombies ==> Bttle Hardened ==> Elementalist
        new Challenge(
            "Qxe9A",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].elementalist,
            "Elementalist Master",
            "Complete all Elementalist Challenges.",
            "xGlPjDy",
            ["ZwMyC", "5M1p9", "Ioxly", "CPC1w", "UBlDr", "WKUZE"],
        ),
        // Zombies ==> Bttle Hardened ==> Tactician
        new Challenge(
            "DqHZu",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].tactician,
            "Tactician Master",
            "Complete all Tactician Challenges.",
            "C8rB9vM",
            ["zCEQG", "CkgJr", "_hAxI", "IhvRL", "SpZB1", "4eDxD"],
        ),
        // Zombies ==> Bttle Hardened ==> Silverback Expedition
        new Challenge(
            "DqHZu",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].silverbackExpedition,
            "Silverback Expedition Master",
            "Complete all Silverback Expedition Challenges.",
            "0Nb78yd",
            ["zCEQG", "CkgJr", "_hAxI", "IhvRL", "SpZB1", "4eDxD"],
        ),
        // Zombies ==> Bttle Hardened ==> Gorilla Stalker
        new Challenge(
            "FscZy",
            challengeTypes.zombies,
            allSubCategories[allCategories.battleHardened].gorillaStalker,
            "Gorilla Stalker Master",
            "Complete all Gorilla Stalker Challenges.",
            "UTNS3i8",
            ["YNhXq", "l0JNE", "HdurP", "k3BBG", "ISUok", "zbZWj"],
        ),
        // Zombies ==> Requiem Advancement ==> Forsaken Report
        new Challenge(
            "QNTVn",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].forsakenReport,
            "Forsaken Master",
            "Complete all Forsaken Challenges.",
            "Gv2rTX4",
            ["GSiVF", "XUmkS", "Bx12d", "sn5nW", "pSUE4", "LBGue"],
        ),
        // Zombies ==> Requiem Advancement ==> Mauer Der Toten Report
        new Challenge(
            "IrC5b",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].mauerDerTotenReport,
            "Mauer Der Toten Master",
            "Complete all Mauer Der Toten Challenges.",
            "8MfaTTf",
            ["Juc14", "XEEn2", "mzocc", "Rrqfp", "W3VcA", "S_FVf"]
        ),
        // Zombies ==> Requiem Advancement ==> Firebase Z Report
        new Challenge(
            "NNwDm",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].firebaseZReport,
            "Firebase Z Master",
            "Complete all Firebase Z Challenges.",
            "ZuDtpY1",
            ["5qkjP", "cM_QM", "KoS90", "JqmNC", "UXDeT", "LUVVN"]
        ),
        // Zombies ==> Requiem Advancement ==> Field Researcher
        new Challenge(
            "mJ7fv",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].fieldResearcher,
            "Field Researcher Master",
            "Complete all Field Researcher Challenges.",
            "rGdfNhQ",
            ["wJ8vM", "wA3bR", "1jnI2", "PoXXg", "M0bY9", "lZ212"]
        ),
        // Zombies ==> Requiem Advancement ==> Surveyor
        new Challenge(
            "Xx_PL",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].surveyor,
            "Surveyor Master",
            "Complete all Surveyor Challenges.",
            "0WS8sMz",
            ["SGR6v", "9kYDJ", "K7oqu", "fHL9d", "h3JTF", "BaAl8"]
        ),
        // Zombies ==> Requiem Advancement ==> Exterminator
        new Challenge(
            "sWK2X",
            challengeTypes.zombies,
            allSubCategories[allCategories.requiemAdvancement].exterminator,
            "Exterminator Master",
            "Complete all Exterminator Challenges.",
            "G6aGXFn",
            ["1wHi9", "3NLit", "KoKSl", "VqvYx", "DmiOk", "8Hf5S"]
        ),
        // Zombies ==> Dark Ops
        new Challenge(
            "76EI_",
            challengeTypes.zombies,
            allCategories.darkOps,
            "Dark Ops Master",
            "Complete 11 Dark Ops Challenges.",
            "xJQ4OWW",
            ["G6Cc0", "QQSU_", "PisZV", "UZWpO", "OO7hk", "9_or5", "TTkVh", "Wboko", "7LQXS", "Pfx05", "nrDVa", "ilfAs", "dRRVJ", "JiOa9", "8Ub5c", "S2los", "6IHj2", "1zKaX", "o6uZp"],
            11
        ),
        // Campaign ==> Loyal Agent
        new Challenge(
            "2CEQT",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].loyalAgent,
            "Loyal Agent Master",
            "Complete all Loyal Agent Challenges.",
            "0OVMorA",
            ["BxN1R", "z8uLI", "WLFHN", "CizJj", "a9heU", "wTk6v",],

        ),
        // Campaign ==> Bloodthirsty
        new Challenge(
            "z9_ji",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].bloodthirsty,
            "Bloodthirsty Master",
            "Complete all Bloodthirsty Challenges.",
            "j6idgdG",
            ["PsIuj", "7GWSG", "f2JPl", "Jq1iy", "HHf3d", "k0AUW",],

        ),
        // Campaign ==> Explorer
        new Challenge(
            "n8GC2",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].explorer,
            "Explorer Master",
            "Complete all Explorer Challenges.",
            "z7NaPRv",
            ["4dIYy", "KfRHu", "cQhQu", "X1VG4", "_8Px0", "H03C3",],

        ),
        // Campaign ==> Clandestine
        new Challenge(
            "RAYiU",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].clandestine,
            "Clandestine Master",
            "Complete all Clandestine Challenges.",
            "gvH6Wl1",
            ["EIBZ5", "sw6lG", "jt4kG", "ZKYY1", "0qX_p", "PASTd",],

        ),
        // Campaign ==> Highly Proficient
        new Challenge(
            "9e6ZH",
            challengeTypes.campaign,
            allSubCategories[allCategories.story].highlyProficient,
            "Highly Proficient Master",
            "Complete all Highly Proficient Challenges.",
            "bOTtgbS",
            ["oJz4d", "zYBxr", "HMp7M", "IOFg2", "DQvNQ", "Tbsha",],

        ),
        // Campaign ==> Dark Ops
        new Challenge(
            "OZglA",
            challengeTypes.campaign,
            allCategories.darkOps,
            "Dark Ops Master",
            "Complete all Dark Ops Challenges.",
            "tCstmXs",
            ["FLYJ3", "dyZar", "ca4R3", "CgCkq", "zHjep", "HMzZ8",],

        ),
    ]

    static getChallengeById(id, includeMastery = true) {
        const challenge = this.challengeStore.find(x => x.id == id);
        if (challenge) {
            return challenge;
        }
        if (includeMastery) {
            return this.getMasteryChallengeById(id);
        }

        return new Challenge();
    }

    static getMasteryChallengeById(id) {
        const challenge = this.masterChallenges.find(x => x.id == id);
        if (challenge) {
            return challenge;
        }

        return new Challenge();
    }

    static isChallengePinned(id) {
        const currentPrefs = getUserPrefs();
        const index = currentPrefs.pinnedChallenges.indexOf(id);
        if (index > -1) return true;
        return false;
    }

    static isChallengeCompleted(id) {
        const currentPrefs = getUserPrefs();
        const masteryIdArr = Challenges.masterChallenges.map(a => a.id);
        const isMastery = masteryIdArr.indexOf(id) > -1;
        if (isMastery) {
            const challenge = this.getMasteryChallengeById(id);
            return challenge.areAllChallengesCompleted();
        }
        // Checks if normal challenge is in the completed array
        const index = currentPrefs.completedChallenges.indexOf(id);
        if (index > -1) return true;
        return false;
    }
}


