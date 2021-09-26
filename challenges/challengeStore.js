class Challenges {
    static challengeStore = [
        new Challenge(
            1,
            challengeTypes.zombies,
            challengeSubCategories.seasonal.season1,
            "Haymaker",
            "Earn 10 Butcher medals (Killed 5 or more enemies rapidly with a Melee Weapon)."
        ),
        new Challenge(
            2,
            challengeTypes.zombies,
            challengeSubCategories.seasonal.season1,
            "Dead Air",
            "Kill 30 enemies that are slowed by a Plaguehound's toxic gas."
        ),
        new Challenge(
            3,
            challengeTypes.zombies,
            challengeSubCategories.seasonal.season1,
            "The Other Side",
            "Get 500 eliminations in the Dark Aether."
        ),
        //... other challenges etc 
        new Challenge(
            21,
            challengeTypes.zombies,
            challengeSubCategories.seasonal.season1,
            "Season One Zombie Master",
            "Complete all Season One Challenges.",
            [1,2,3,4,5,6,7,8,9/*...rest of ids...*/]
        ),
    ];
}

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
     * @param {array} requiredChallenges An array of any challenge ids that must be completed in order to complete this challenge. 
     * (This is mainly used for "Master" challenges where all challenges inside a sub category need to be completed)
     */
    constructor(id, type, category, name, desc, requiredChallenges = null) {
        this.id = id;
        this.type = type;
        this.category = category;
        this.name = name;
        this.desc = desc;
        this.requiredChallenges = requiredChallenges;
    }
}
