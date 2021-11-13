/////////////////////Challenges/////////////////////////
const challengeTypes = {
    multiplayer: "Multiplayer",
    zombies: "Zombies",
    campaign: "Campaign",
}

const allCategories = {
    career: "Career",
    battleHardened: "Battle Hardened",
    requiemAdvancement: "Requiem Advancement",
    story: "Story",
    darkOps: "Dark Ops",
    seasonal: "Seasonal",
};

const allSubCategories = {
    [allCategories.career]: {
        bootCamp: "Boot Camp",
        fieldSpecialist: "Field Specialist",
        eliteOperator: "Elite Operator",
        counterMeasures: "Counter Measures",
        dieMaschineReport: "Die Maschine Report",
        grizzledVeteran: "Grizzled Veteran",
    },
    [allCategories.battleHardened]: {
        killer: "Killer",
        goingHam: "Going Ham",
        humiliation: "Humiliation",
        precision: "Precision",
        returnFire: "Return Fire",
        zombieHunter: "Zombie Hunter",
        elementalist: "Elementalist",
        tactician: "Tactician",
        silverbackExpedition: "Silverback Expedition",
        gorillaStalker: "Gorilla Stalker",
    },
    [allCategories.requiemAdvancement]: {
        forsakenReport: "Forsaken Report",
        mauerDerTotenReport: "Mauer der Toten Report",
        firebaseZReport: "Firebase Z Report",
        fieldResearcher: "Field Researcher",
        surveyor: "Surveyor",
        exterminator: "Exterminator",
    },
    [allCategories.story]: {
        loyalAgent: "Loyal Agent",
        bloodthirsty: "Bloodthirsty",
        explorer: "Explorer",
        clandestine: "Clandestine",
        highlyProficient: "Highly Proficient",
    },
    [allCategories.seasonal]: {
        [seasons.season1]: seasons.season1,
        [seasons.season2]: seasons.season2,
        [seasons.season3]: seasons.season3,
        [seasons.season4]: seasons.season4,
        [seasons.season5]: seasons.season5,
        [seasons.season6]: seasons.season6
    }
}

let challengeCategories = {
    [challengeTypes.multiplayer]: [allCategories.seasonal, allCategories.career, allCategories.battleHardened, allCategories.darkOps],
    [challengeTypes.zombies]: [allCategories.seasonal, allCategories.career, allCategories.battleHardened, allCategories.requiemAdvancement, allCategories.darkOps],
    [challengeTypes.campaign]: [allCategories.story, allCategories.darkOps],
};
let challengeSubCategories = initSubCategories();
function initSubCategories() {
    const career = allSubCategories[allCategories.career];
    const batHard = allSubCategories[allCategories.battleHardened];
    const reqAd = allSubCategories[allCategories.requiemAdvancement];
    const story = allSubCategories[allCategories.story];

    return {
        [challengeTypes.multiplayer]: {
            [allCategories.career]: [career.bootCamp, career.fieldSpecialist, career.eliteOperator, career.counterMeasures, career.grizzledVeteran],
            [allCategories.battleHardened]: [batHard.killer, batHard.goingHam, batHard.humiliation, batHard.precision, batHard.returnFire],
            [allCategories.seasonal]: [seasons.season1, seasons.season2, seasons.season3, seasons.season4, seasons.season5, seasons.season6],
        },
        [challengeTypes.zombies]: {
            [allCategories.career]: [career.dieMaschineReport, career.bootCamp, career.grizzledVeteran],
            [allCategories.battleHardened]: [batHard.zombieHunter, batHard.elementalist, batHard.tactician, batHard.silverbackExpedition, batHard.gorillaStalker],
            [allCategories.requiemAdvancement]: [reqAd.forsakenReport, reqAd.mauerDerTotenReport, reqAd.firebaseZReport, reqAd.fieldResearcher, reqAd.surveyor, reqAd.exterminator],
            [allCategories.seasonal]: [seasons.season1, seasons.season2, seasons.season3, seasons.season4, seasons.season5, seasons.season6],
        },
        [challengeTypes.campaign]: {
            [allCategories.story]: [story.loyalAgent, story.bloodthirsty, story.explorer, story.clandestine, story.highlyProficient],
            [allCategories.seasonal]: [],
        },
    };
}

function renderNav(selectedType = challengeTypes.zombies, selectedCategory = allCategories.career, selectedSubCategory = allSubCategories[allCategories.career].dieMaschineReport) {
    const navbar = document.querySelector('#nav');
    navbar.replaceChildren();
    renderTypes(navbar, selectedType);
    renderCategories(navbar, selectedType, selectedCategory);
    renderSubCategories(navbar, selectedType, selectedCategory, selectedSubCategory);
}

function renderTypes(navbar, selectedType) {
    const optionArr = [challengeTypes.multiplayer, challengeTypes.zombies, challengeTypes.campaign];
    let options;
    optionArr.forEach(option => {
        options += `<option ${selectedType == option ? "selected" : ""}>${option}</option>`;
    });

    let html =
        `<select name="type" id="type">
            ${options}
        </select>`

    appendToElement(html, navbar);

    $("#type").change(function (e) {
        const selectedType = $("#type").val();
        renderNav(selectedType);
        renderCards();
    });
}

function renderCategories(navbar, selectedType, selectedCategory) {
    const optionArr = challengeCategories[selectedType] ?? [];
    let options;
    optionArr.forEach(option => {
        options += `<option ${selectedCategory == option ? "selected" : ""}>${option}</option>`;
    });

    let html =
        `<select name="category" id="category">
            ${options}
        </select>`

    appendToElement(html, navbar);

    $("#category").change(function (e) {
        const selectedType = $("#type").val();
        const selectedCategory = $("#category").val();
        renderNav(selectedType, selectedCategory);
        renderCards();
    });
}

function renderSubCategories(navbar, selectedType, selectedCategory, selectedSubCategory) {
    const optionArr = challengeSubCategories[selectedType][selectedCategory] ?? [];
    if (optionArr.length > 0) {
        let options;
        optionArr.forEach(option => {
            options += `<option ${selectedSubCategory == option ? "selected" : ""}>${option}</option>`;
        });

        let html =
            `<select name="sub-category" id="sub-category">
        ${options}
        </select>`

        appendToElement(html, navbar);

        $("#sub-category").change(function (e) {
            const selectedType = $("#type").val();
            const selectedCategory = $("#category").val();
            const selectedSubCategory = $("#sub-category").val();
            renderNav(selectedType, selectedCategory, selectedSubCategory);
            renderCards();
        });
    }
}

function renderCards() {
    let filteredChallenges = Challenges.challengeStore;
    let filteredMasterChallenge = Challenges.masterChallenges;
    const cardCont = document.querySelector('#card-container');
    const masteryCont = document.querySelector('#mastery-progress');
    // const for completed challenges
    const type = $("#type").val();
    const category = $("#category").val();
    const subCategory = $("#sub-category").val();
    
    filteredChallenges = filterList(filteredChallenges, "type", type);
    filteredMasterChallenge = filterList(filteredMasterChallenge, "type", type);
    if (subCategory) {
        filteredChallenges = filterList(filteredChallenges, "category", subCategory);
        filteredMasterChallenge = filterList(filteredMasterChallenge, "category", subCategory);
    } else if (category) {
        filteredChallenges = filterList(filteredChallenges, "category", category);
        filteredMasterChallenge = filterList(filteredMasterChallenge, "category", category);
    }
    cardCont.replaceChildren();
    filteredChallenges.forEach(card => {
        //If challenge is complete add the "complete" attribute to the card element
        let html = getCardHtml(card);
        let elementsToAdd = htmlToElements(html)
        elementsToAdd.forEach(element => {
            cardCont.append(element);
        });
    })

    masteryCont.replaceChildren();
    if (filteredMasterChallenge[0]) {
        let html = getMasteryHtml(filteredMasterChallenge[0]);
        let elementsToAdd = htmlToElements(html)
        elementsToAdd.forEach(element => {
            masteryCont.append(element);
        });
    }

}
function getCardHtml(card) {
    return `<card class="cc-card" id="${card.id}">
                <button class="pin" onclick="pinCard(this)"><i class="fas fa-thumbtack"></i></button>
                <img class="cc-img" alt="Calling card" src="${card.img}">
                <h2 class="cc-title">${card.name}</h2>
                <p class="cc-desc">${card.desc}</p>
            </card>`;
}

function getMasteryHtml(card) {
    return `<div>
                <h2>${card.name}</h2>
                <p>${card.desc}</p>
            </div>
            <article class="cc-card" id="${card.id}">
                <button class="pin" onclick="pinCard(this)"><i class="fas fa-thumbtack"></i></button>
                <img class="cc-img" alt="Calling card" src="${card.img}">
                <div class="cc-progress"></div>
            </article>`;
}

function filterList(arrayToFilter, propToFilter, filterVal) {
    arrayToFilter = arrayToFilter.filter((item) => {
        return item[propToFilter] == filterVal;
    });
    return arrayToFilter;
}

function onLoad() {
    renderNav();
    renderCards();
}