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
     * @param {string} img Image url to be used for the calling card.
     * @param {array} requiredChallenges An array of any challenge ids that must be completed in order to complete this challenge. 
     * (This is mainly used for "Master" challenges where all challenges inside a sub category need to be completed)
     */
    constructor(id, type, category, name, desc, img, requiredChallenges = null) {
        this.id = id;
        this.type = type;
        this.category = category;
        this.name = name;
        this.desc = desc;
        this.img = img ? `https://i.imgur.com/${img}` : `assets/img/cc/placeholder.jpg`;
        this.requiredChallenges = requiredChallenges;
    }
}

class Challenges {
    static challengeStore = [
        new Challenge(
            "CERFv",
            challengeTypes.zombies,
            challengeSubCategories.seasonal.season1,
            "Haymaker",
            "Earn 10 Butcher medals (Killed 5 or more enemies rapidly with a Melee Weapon).",
        ),
        new Challenge(
            "8zOLe",
            challengeTypes.zombies,
            challengeSubCategories.seasonal.season1,
            "Dead Air",
            "Kill 30 enemies that are slowed by a Plaguehound's toxic gas.",
        ),
        new Challenge(
            "DOFwv",
            challengeTypes.zombies,
            challengeSubCategories.seasonal.season1,
            "The Other Side",
            "Get 500 eliminations in the Dark Aether.",
        ),
//                     .aMMMb  dMMMMMMP     dMP dMP     dMMMMMP     dMMMMb        .aMMMb     dMP dMP     .aMMMb     dMP     dMP     dMMMMMP     dMMMMb    .aMMMMP     dMMMMMP    .dMMMb         dMMMMMP  dMMMMMMP    .aMMMb                   
//                     dMP"dMP    dMP       dMP dMP     dMP         dMP.dMP       dMP"VMP    dMP dMP     dMP"dMP    dMP     dMP     dMP         dMP dMP   dMP"        dMP        dMP" VP        dMP         dMP      dMP"VMP                   
//                     dMP dMP    dMP       dMMMMMP     dMMMP       dMMMMK"       dMP        dMMMMMP     dMMMMMP    dMP     dMP     dMMMP       dMP dMP   dMP MMP"    dMMMP       VMMMb         dMMMP       dMP      dMP                        
// amr   amr   amr     dMP.aMP    dMP       dMP dMP     dMP         dMP"AMF       dMP.aMP    dMP dMP     dMP dMP    dMP     dMP     dMP         dMP dMP   dMP.dMP     dMP        dP .dMP        dMP         dMP      dMP.aMP     amr   amr   amr 
// dMP   dMP   dMP      VMMMP"    dMP       dMP dMP     dMMMMMP     dMP dMP        VMMMP"    dMP dMP     dMP dMP    dMMMMMP dMMMMMP dMMMMMP     dMP dMP    VMMMP"     dMMMMMP     VMMMP"        dMMMMMP     dMP       VMMMP"     dMP   dMP   dMP  
//                                                                                                                                                                                                                                                                                                    |___/                                                
    ];

    static masterChallenges = [
        new Challenge(
            "cn3a5",
            challengeTypes.zombies,
            challengeSubCategories.seasonal.season1,
            "Season One Zombie Master",
            "Complete all Season One Challenges.",
            null,
            ["CERFv", "8zOLe", "DOFwv", "" /*...rest of ids...*/],
        ),
    ]
}


