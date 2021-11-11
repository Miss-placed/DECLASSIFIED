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
    career: {
        bootCamp: "Boot Camp",
        fieldSpecialist: "Field Specialist",
        eliteOperator: "Elite Operator",
        counterMeasures: "Counter Measures",
        dieMaschineReport: "Die Maschine Report",
        grizzledVeteran: "Grizzled Veteran",
    },
    battleHardened: {
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
    requiemAdvancement: {
        forsakenReport: "Forsaken Report",
        mauerDerTotenReport: "Mauer der Toten Report",
        firebaseZReport: "Firebase Z Report",
        fieldResearcher: "Field Researcher",
        surveyor: "Surveyor",
        exterminator: "Exterminator",
    },
    story: {
        loyalAgent: "Loyal Agent",
        bloodthirsty: "Bloodthirsty",
        explorer: "Explorer",
        clandestine: "Clandestine",
        highlyProficient: "Highly Proficient",
    },
    seasonal: seasons
}

let challengeCategories = {};
challengeCategories[challengeTypes.multiplayer] = [allCategories.seasonal, allCategories.career, allCategories.battleHardened, allCategories.darkOps];
challengeCategories[challengeTypes.zombies] = [allCategories.seasonal, allCategories.career, allCategories.battleHardened, allCategories.requiemAdvancement, allCategories.darkOps];
challengeCategories[challengeTypes.campaign] = [allCategories.story, allCategories.darkOps];

let challengeSubCategories = {};
challengeSubCategories[challengeTypes.multiplayer][allCategories.career] = [allSubCategories.bootCamp, allSubCategories.fieldSpecialist, allSubCategories.eliteOperator, allSubCategories.counterMeasures, allSubCategories.grizzledVeteran];
challengeSubCategories[challengeTypes.multiplayer][allCategories.battleHardened] = [allSubCategories.killer, allSubCategories.goingHam, allSubCategories.humiliation, allSubCategories.precision, allSubCategories.returnFire];

challengeSubCategories[challengeTypes.zombies][allCategories.career] = [allSubCategories.dieMaschineReport, allSubCategories.bootCamp, allSubCategories.grizzledVeteran];
challengeSubCategories[challengeTypes.zombies][allCategories.battleHardened] = [allSubCategories.zombieHunter, allSubCategories.elementalist, allSubCategories.tactician, allSubCategories.silverbackExpedition, allSubCategories.gorillaStalker];
challengeSubCategories[challengeTypes.zombies][allCategories.requiemAdvancement] = [allSubCategories.forsakenReport, allSubCategories.mauerDerTotenReport, allSubCategories.firebaseZReport, allSubCategories.fieldResearcher, allSubCategories.surveyor, allSubCategories.exterminator];

challengeSubCategories[challengeTypes.campaign][allCategories.story] = [allSubCategories.loyalAgent, allSubCategories.bloodthirsty, allSubCategories.explorer, allSubCategories.clandestine, allSubCategories.highlyProficient];

function renderNav(params) {

}

function renderTypes() {
    let html = `
    <select name="type">
        <option>${challengeTypes.multiplayer}</option>
        <option>${challengeTypes.zombies}</option>
        <option>${challengeTypes.campaign}</option>
    </select>`

    
}

function renderCategories(selectedType) {
    let options;
    switch (challengeTypes) {
        case challengeTypes.multiplayer:
            array.forEach(element => {
                
            });
        options += `<option>${challengeTypes.multiplayer}</option>`;
            break;
        case challengeTypes.campaign:

            break;
        case challengeTypes.zombies:
        default:
            break;
    }
    let html = `
    <select name="category" id="">
        
    </select>`
}

function renderSubCategories(selectedType, selectedCategory) {
    let html = `
    <select name="sub-category" id="">
        
    </select>`
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
    renderCards()
}