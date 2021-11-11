const gamemode = {
    campaign: "Campaign",
    multiplayer: "Muliplayer",
    zombies: "Zombies",
}
const challenges = [
    {
        id: "EghVb",
        name: "Big Hearted",
        desc: "rescue bla bla bla...",
        img: "placeholder.jpg",
        gamemode: gamemode.campaign
    },
    {
        id: "Y4yW3",
        name: "Dilema Solved",
        desc: "some other description...",
        img: "placeholder.jpg",
        gamemode: gamemode.campaign
    },
]

function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}


function renderCards() {
    challenges.forEach(card => {
        let html=
            `<card class="cc-card" id="${card.id}">
            <button class="pin" onclick="pinCard(this)"><i class="fas fa-thumbtack"></i></button>
            <img class="cc-img" alt="Calling card" src="assets/img/cc/${card.img}">
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