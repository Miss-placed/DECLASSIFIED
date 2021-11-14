/////////////////////Constants/////////////////////////
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
    [challengeTypes.zombies]: [/* allCategories.seasonal ,*/ allCategories.career, allCategories.battleHardened, allCategories.requiemAdvancement, allCategories.darkOps],
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
            [allCategories.seasonal]: [seasons.season1, seasons.season2, seasons.season3, seasons.season4, seasons.season5, seasons.season6],
            [allCategories.career]: [career.bootCamp, career.fieldSpecialist, career.eliteOperator, career.counterMeasures, career.grizzledVeteran],
            [allCategories.battleHardened]: [batHard.killer, batHard.goingHam, batHard.humiliation, batHard.precision, batHard.returnFire],
            [allCategories.darkOps]: [],
        },
        [challengeTypes.zombies]: {
            [allCategories.seasonal]: [seasons.season1, seasons.season2, seasons.season3, seasons.season4, seasons.season5, seasons.season6],
            [allCategories.career]: [career.dieMaschineReport, career.bootCamp, career.grizzledVeteran],
            [allCategories.battleHardened]: [batHard.zombieHunter, batHard.elementalist, batHard.tactician, batHard.silverbackExpedition, batHard.gorillaStalker],
            [allCategories.requiemAdvancement]: [reqAd.forsakenReport, reqAd.mauerDerTotenReport, reqAd.firebaseZReport, reqAd.fieldResearcher, reqAd.surveyor, reqAd.exterminator],
            [allCategories.darkOps]: [],
        },
        [challengeTypes.campaign]: {
            [allCategories.story]: [story.loyalAgent, story.bloodthirsty, story.explorer, story.clandestine, story.highlyProficient],
            [allCategories.darkOps]: [],
        },
    };
}

/////////////////////Cards/////////////////////////
function renderCards() {
    let filteredChallenges = Challenges.challengeStore;
    let filteredMasterChallenge = Challenges.masterChallenges;
    const cardCont = document.querySelector('#card-container');
    const masteryCont = document.querySelector('#mastery-progress');
    // const for completed challenges
    ({ filteredChallenges, filteredMasterChallenge } = filterChallenges(filteredChallenges, filteredMasterChallenge));

    addCardsToContainer(cardCont, filteredChallenges, getCardHtml);
    addCardsToContainer(masteryCont, filteredMasterChallenge, getMasteryHtml);
    /*masteryCont.replaceChildren();
    if (filteredMasterChallenge[0]) {
        let html = getMasteryHtml(filteredMasterChallenge[0]);
        let elementsToAdd = htmlToElements(html)
        elementsToAdd.forEach(element => {
            masteryCont.append(element);
        });
    } */

}

function addCardsToContainer(cardCont, filteredChallenges, htmlMethod) {
    cardCont.replaceChildren();
    filteredChallenges.forEach(card => {
        //If challenge is complete add the "complete" attribute to the card element
        let html = htmlMethod(card);
        let elementsToAdd = htmlToElements(html);
        elementsToAdd.forEach(element => {
            cardCont.append(element);
        });
    });
}

function filterChallenges(filteredChallenges, filteredMasterChallenge) {
    const type = getSelectedType();
    const category = getSelectedCategory();
    const subCategory = getSelectedSubCategory();

    filteredChallenges = filterList(filteredChallenges, "type", type);
    filteredMasterChallenge = filterList(filteredMasterChallenge, "type", type);
    if (subCategory) {
        filteredChallenges = filterList(filteredChallenges, "category", subCategory);
        filteredMasterChallenge = filterList(filteredMasterChallenge, "category", subCategory);
    } else if (category) {
        filteredChallenges = filterList(filteredChallenges, "category", category);
        filteredMasterChallenge = filterList(filteredMasterChallenge, "category", category);
    }
    return { filteredChallenges, filteredMasterChallenge };
}

function renderPinnedCards() {
    const pinContainer = document.querySelector('#pinned-container');
    let currentPrefs = getUserPrefs();
    const challengesToRender = [];
    currentPrefs.pinnedChallenges.forEach((challengeId) => {
        challengesToRender.push(Challenges.getChallengeById(challengeId));
    });
    addCardsToContainer(pinContainer, challengesToRender, getCardHtml);
}

function getCardHtml(card) {
    return `<card class="cc-card" id="${card.id}">
                <button class="pin ${Challenges.isChallngePinned(card.id) ? "rotate" : ""}" onclick="togglePinChallenge(this)"><i class="fas fa-thumbtack"></i></button>
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
                <button class="pin ${Challenges.isChallngePinned(card.id) ? "rotate" : ""}" onclick="togglePinChallenge(this)"><i class="fas fa-thumbtack"></i></button>
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

function expandCategory(x) {
    document.querySelectorAll('ul').forEach(function (ele) {
        if (ele != x.parentNode) {
            ele.classList.remove('-expanded');
        }
    });
    x.parentNode.classList.toggle('-expanded')
}


function togglePinChallenge(ele) {
    const cardEle = ele.closest('.cc-card');
    const challengeId = cardEle.id;
    // Update pin icon or remove card 
    //document.querySelector(`#${challengeId}`).toggleAttribute("complete"); // Use later for "Completed challenges"
    cardEle.querySelector('.pin').classList.toggle('rotate')
    // Push to prefs array
    let currentPrefs = getUserPrefs();

    const index = currentPrefs.pinnedChallenges.indexOf(challengeId);
    if (index > -1) {
        currentPrefs.pinnedChallenges.splice(index, 1); // Remove
    } else {
        currentPrefs.pinnedChallenges.push(challengeId); // Add
    }

    setUserPrefs(currentPrefs);
    // Move card to pinned area
    renderPinnedCards()
}

/////////////////////Menu Stuff/////////////////////////
function renderNav(selectedType, selectedCategory, selectedSubCategory) {
    const navbar = document.querySelector('#nav');
    navbar.replaceChildren();
    renderTypes(navbar, selectedType);
    renderCategories(navbar, selectedType, selectedCategory);
    renderSubCategories(navbar, selectedType, selectedCategory, selectedSubCategory);
}

function renderTypes(navbar, selectedType) {
    const optionArr = [/* challengeTypes.multiplayer, */ challengeTypes.zombies, challengeTypes.campaign];
    let options = ``;
    optionArr.forEach(option => {
        options += `<li onclick="changeTypeMenu(this)" ${selectedType == option ? "selected" : ""} value="${option}">
                        ${option}
                        <i class="fas fa-star complete"></i>
                    </li>`;
    });

    let html =
        `<ul name="type" class="filter" id="type" value="${selectedType}">
            <h2 onclick="expandCategory(this)">${selectedType}<i class="fas fa-caret-down"></i></h2>
            <div>
                ${options}
            </div>
        </ul>`

    appendToElement(html, navbar);
}

function renderCategories(navbar, selectedType = challengeTypes.zombies, selectedCategory) {
    if (!selectedCategory) selectedCategory = challengeCategories[selectedType][0];
    const optionArr = challengeCategories[selectedType] ?? [];
    let options = ``;
    optionArr.forEach(option => {
        options += `<li onclick="changeCategoryMenu(this)" ${selectedType == option ? "selected" : ""} value="${option}">
                        ${option}
                        <i class="fas fa-star complete"></i>
                    </li>`;
    });

    let html =
        `<ul name="category" class="filter" id="category" value="${selectedCategory}">
            <h2 onclick="expandCategory(this)">${selectedCategory}<i class="fas fa-caret-down"></i></h2>
            <div>
            ${options}
            </div>
        </ul>`

    appendToElement(html, navbar);
}

function renderSubCategories(navbar, selectedType = challengeTypes.zombies, selectedCategory, selectedSubCategory) {
    if (!selectedCategory) selectedCategory = challengeCategories[selectedType][0];
    if (!selectedSubCategory) selectedSubCategory = challengeSubCategories[selectedType][selectedCategory][0];
    const optionArr = challengeSubCategories[selectedType][selectedCategory] ?? [];
    if (optionArr.length > 0) {
        let options = ``;
        optionArr.forEach(option => {
            options += `<li onclick="changeSubCategoryMenu(this)" ${selectedType == option ? "selected" : ""} value="${option}">
                        ${option}
                        <i class="fas fa-star complete"></i>
                    </li>`;
        });

        let html =
            `<ul name="sub-category" class="filter" id="sub-category" value="${selectedSubCategory}">
            <h2 onclick="expandCategory(this)">${selectedSubCategory}<i class="fas fa-caret-down"></i></h2>
            <div>
            ${options}
            </div>
        </ul>`

        appendToElement(html, navbar);
    }
}

function setOption(x) {
    expandCategory(x);
    x.parentNode.parentNode.setAttribute('value', x.getAttribute('value'));
    // x.parentNode.querySelector('h2').querySelector('i').classList = "fas fa-caret-down"
}

function changeTypeMenu(x) {
    setOption(x)
    const selectedType = getSelectedType();
    renderNav(selectedType);
    renderCards();
}

function changeCategoryMenu(x) {
    setOption(x)
    const selectedType = getSelectedType();
    const selectedCategory = getSelectedCategory();
    renderNav(selectedType, selectedCategory);
    renderCards();
}

function changeSubCategoryMenu(x) {
    setOption(x)
    const selectedType = getSelectedType();
    const selectedCategory = getSelectedCategory();
    const selectedSubCategory = getSelectedSubCategory();
    renderNav(selectedType, selectedCategory, selectedSubCategory);
    renderCards();
}

/////////////////////Utils/////////////////////////
function getSelectedType() {
    return $("#type").attr('value');
}

function getSelectedCategory() {
    return $("#category").attr('value');
}

function getSelectedSubCategory() {
    return $("#sub-category").attr('value');
}

function onLoad() {
    renderNav(challengeTypes.zombies, allCategories.career, allSubCategories[allCategories.career].dieMaschineReport);
    renderCards();
    renderPinnedCards();
}