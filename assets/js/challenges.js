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
    seasonal: seasons
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
        },
        [challengeTypes.zombies]: {
            [allCategories.career]: [career.dieMaschineReport, career.bootCamp, career.grizzledVeteran],
            [allCategories.battleHardened]: [batHard.zombieHunter, batHard.elementalist, batHard.tactician, batHard.silverbackExpedition, batHard.gorillaStalker],
            [allCategories.requiemAdvancement]: [reqAd.forsakenReport, reqAd.mauerDerTotenReport, reqAd.firebaseZReport, reqAd.fieldResearcher, reqAd.surveyor, reqAd.exterminator],
        },
        [challengeTypes.campaign]: {
            [allCategories.story]: [story.loyalAgent, story.bloodthirsty, story.explorer, story.clandestine, story.highlyProficient],
        }
    };
}

function renderNav() {
    const navbar = document.querySelector('#nav');
    navbar.replaceChildren();
    renderTypes(navbar);
    renderCategories(navbar);
    renderSubCategories(navbar);
}

function renderTypes(navbar) {
    let html =
        `<select name="type" id="type">
        <option>${challengeTypes.multiplayer}</option>
        <option selected>${challengeTypes.zombies}</option>
        <option>${challengeTypes.campaign}</option>
    </select>`

    appendToElement(html, navbar);

    $("#type").change(function (e) {
        //trigger challenge filter
    });
}

function renderCategories(navbar, selectedType = challengeTypes.zombies) {
    const optionArr = challengeCategories[selectedType] ?? [];
    let options;
    optionArr.forEach(option => {
        options += `<option>${option}</option>`;
    });

    let html =
        `<select name="category" id="category">
        ${options}
    </select>`

    appendToElement(html, navbar);

    $("#category").change(function (e) {
        //trigger challenge filter
    });
}

function renderSubCategories(navbar, selectedType = challengeTypes.zombies, selectedCategory = "") {
    const optionArr = challengeSubCategories[selectedType][selectedCategory] ?? [];
    let options;
    optionArr.forEach(option => {
        options += `<option>${option}</option>`;
    });

    let html = `
    <select name="sub-category" id="sub-category">
        ${options}
    </select>`

    appendToElement(html, navbar);

    $("#sub-category").change(function (e) {
        //trigger challenge filter
    });
}

function renderCards() {
    Challenges.challengeStore.forEach(card => {
        let html =
            `<card class="cc-card" id="${card.id}">
            <button class="pin" onclick="pinCard(this)"><i class="fas fa-thumbtack"></i></button>
            <img class="cc-img" alt="Calling card" src="${card.img}">
            <h2 class="cc-title">${card.name}</h2>
            <p class="cc-desc">${card.desc}</p>
        </card>`
        let cardsToAdd = htmlToElements(html)
        cardsToAdd.forEach(element => {
            document.querySelector('#card-container').append(element);
        });
    })

}
function onLoad() {
    renderNav();
    renderCards();
}