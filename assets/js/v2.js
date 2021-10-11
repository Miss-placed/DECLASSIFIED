document.getElementsByClassName('leaflet-control-attribution')[0].style.display = 'none';

const factionTotal = {
    requiem: findTotal(intelStoreV2, "faction", factions.requiem),
    omega: findTotal(intelStoreV2, "faction", factions.omega),
    maxis: findTotal(intelStoreV2, "faction", factions.maxis),
    darkAether: findTotal(intelStoreV2, "faction", factions.darkAether),
    all: intelStoreV2.length
}
const seasonTotal = {
    preSeason: findTotal(intelStoreV2, "season", seasons.preSeason),
    season1: findTotal(intelStoreV2, "season", seasons.season1),
    season2: findTotal(intelStoreV2, "season", seasons.season2),
    season3: findTotal(intelStoreV2, "season", seasons.season3),
    season4: findTotal(intelStoreV2, "season", seasons.season4),
    season5: findTotal(intelStoreV2, "season", seasons.season5),
    season6: findTotal(intelStoreV2, "season", seasons.season6),
    all: intelStoreV2.length
}

function expandMenu() {
    document.querySelector("header").classList.toggle("visible");
}

function changeMapTo(x, y, z) {
    document.querySelector("header").querySelector("h1").innerHTML = x
    setMap(y, z, true)
    expandMenu()
}


function openModal() {
    document.getElementsByClassName("modal-bg")[0].classList.remove("-hidden")
    fillTotals()
}

function closeModal() {
    document.getElementsByClassName("modal-bg")[0].classList.add("-hidden")
}

/**
 *  
 * @param {string} target Class of the targeted submodal that you want to open.
 */
function openSubModal(target) {
    document.getElementById(target).classList.remove("-hidden")

}

function closeSubModal(target) {
    document.getElementById(target).classList.add("-hidden")
}
/**
 *  
 * @param {object} obj Object of intel Details.
 */
function propagateIntelDetails(obj) {
    let descBox = document.getElementById("intel-desc")
    descBox.querySelector("h2").innerHTML = obj.name
    descBox.querySelector("p").innerHTML = `
        "id": ${obj.id}<br>
        "faction": ${obj.faction}<br>
        "season": ${obj.season}<br>
        "intelType": ${obj.intelType}<br>
        "loc": ${obj.loc}<br>
        "map": ${obj.map}<br>
        "name": ${obj.name}<br>
        "desc": ${obj.desc}
    `

}


function findInCollected(query) {
    let collectedIntel = getUserPrefs().collectedIntel
    let total = 0
    for (let i = 0; i < collectedIntel.length; i++) {
        total += findTotal(query, "id", collectedIntel[i]).length
    }
    console.log(toString(query), total)
    return total;
}

document.addEventListener(
    "click",
    function(event) {
        // If user clicks outside the modal window, then close modal by calling closeModal()
        if (
            event.target.matches(".modal-bg") &&
            !event.target.closest(".modal")
        ) {
            closeModal()
        }
    },
    false
)

function findObjectByKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

function findTotal(array, key, value) {
    let total = []
    for (let i = 0; i < array.length; i++) {

        if (array[i][key] === value) {
            total.push(array[i])
        }
    }
    return total;
}

/////////////////////List Generation/////////////////////////
GenerateList();


function switchmodal() {

    // need to make a proper open and close function for modal switching
    closeSubModal("intel-desc")
    openSubModal("intel-stats")
    openSubModal("intel-type")
}
let collectedFaction = {
    darkAether: findInCollected(factionTotal.darkAether),
    requiem: findInCollected(factionTotal.requiem),
    omega: findInCollected(factionTotal.omega),
    maxis: findInCollected(factionTotal.maxis),
}
collectedFaction.all = getUserPrefs().collectedIntel.length
collectedFaction.not = factionTotal.all - collectedFaction.all;

let collectedSeason = {
    preSeason: findInCollected(seasonTotal.preSeason),
    season1: findInCollected(seasonTotal.season1),
    season2: findInCollected(seasonTotal.season2),
    season3: findInCollected(seasonTotal.season2),
    season4: findInCollected(seasonTotal.season3),
    season5: findInCollected(seasonTotal.season4),
    season5: findInCollected(seasonTotal.season5),
}

collectedSeason.all = getUserPrefs().collectedIntel.length
collectedSeason.not = seasonTotal.all - collectedSeason.all;

function fillTotals() {
    let requiemTotalEle = document.getElementById("requiem-totals");
    let omegaTotalEle = document.getElementById("omega-totals");
    let maxisTotalEle = document.getElementById("maxis-totals");
    let darkTotalEle = document.getElementById("dark-aether-totals");
    // console.log(findObjectByKey(intelStoreV2, "faction", factions.requiem))
    requiemTotalEle.innerHTML = `${collectedFaction.requiem} / ${factionTotal.requiem.length}`
    omegaTotalEle.innerHTML = `${collectedFaction.omega} / ${factionTotal.omega.length}`
    maxisTotalEle.innerHTML = `${collectedFaction.maxis} / ${factionTotal.maxis.length}`
    darkTotalEle.innerHTML = `${collectedFaction.darkAether} / ${factionTotal.darkAether.length}`
}

fillTotals()
    // basic sum function for totals calculation
function sum(obj) {
    return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
}

let factionItems = [{
    label: "Requiem ",
    value: collectedFaction.requiem,
    color: "--clr-blue "
}, {
    label: "Omega ",
    value: collectedFaction.omega,
    color: "--clr-red "
}, {
    label: "Maxis ",
    value: collectedFaction.maxis,
    color: "--clr-blue-d "
}, {
    label: "DarkAether ",
    value: collectedFaction.darkAether,
    color: "--clr-purple "
}, {
    label: "NotCollected ",
    value: collectedFaction.not,
    color: "--clr-grey "
}, ]

seasonItems = [{
    label: "PreSeason ",
    value: collectedSeason.preSeason,
    color: "--clr-blue-d "
}, {
    label: "Season1 ",
    value: collectedSeason.season1,
    color: "--clr-green "
}, {
    label: "Season2 ",
    value: collectedSeason.season2,
    color: "--clr-red "
}, {
    label: "Season3 ",
    value: collectedSeason.season3,
    color: "--clr-purple "
}, {
    label: "Season4 ",
    value: collectedSeason.season4,
    color: "--clr-yellow "
}, {
    label: "Season5 ",
    value: collectedSeason.season5,
    color: "--clr-orange "
}, {
    label: "NotCollected ",
    value: collectedSeason.not,
    color: "--clr-grey "
}, ]


let factionDonut = new DonutChart(
    document.getElementById("faction-donut"), {
        r: 100,
        stroke: 25,
        scale: 100,
        total: factionTotal.all,
        collected: collectedFaction.all,
        items: factionItems

    }
)