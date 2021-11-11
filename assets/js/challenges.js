/////////////////////Challenges/////////////////////////
const challengeTypes = {
    multiplayer: "Multiplayer",
    zombies: "Zombies",
    campaign: "Campaign",
}

const challengeCategories = {
    seasonal: "Seasonal",
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


function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}


function renderCards() {
    Challenges.challengeStore.forEach(card => {
        let html=
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
function onLoad(){
    renderCards()
}