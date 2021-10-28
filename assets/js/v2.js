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

const modalSet = {
    intelOverview: ["intel-type", "intel-list", "intel-stats"],
    intelDescription: ["intel-list", "intel-detail"],
    settingsMain: ["settings"],
    settingsDebug: ["settings", "settings-2"],
}
/////////////////////Header Menu/////////////////////////
function expandMenu(x) {
    x.parentElement.classList.toggle("visible");
}
function collapseMenu() {
    document.getElementsByTagName('header')[0].classList.remove('visible')

    document.getElementsByTagName('header')[0].querySelectorAll('.visible').forEach(ele => {
        ele.classList.remove('visible')
    })
}

function changeMapTo(mapId, targetElement) {
    const currentMap = FindMapById(mapId);
    document.querySelector("header").querySelector("h1").innerHTML = currentMap.title;
    setMap(mapId, targetElement)
    collapseMenu()
}

function renderHeader() {
    const header = document.querySelector("header")
    header.replaceChildren(); // Empty Out First
    const currentMap = FindMapById(app.currentMap);



    let navbarHtmlToAdd = htmlToElements(
        `<h1 onclick="expandMenu(this)">${currentMap.title}</h1>
    <ul>
        <li>
            <h2 onclick="expandMenu(this)">Die Maschine</h2>
            <ul>
                <li onclick="changeMapTo('dieMaschine',this)">Surface</li>
                <li onclick="changeMapTo('dieMaschine_underground',this)">Underground</li>
            </ul>
        </li>
        <li>
            <h2 onclick="expandMenu(this)">Firebase Z</h2>
            <ul>
                <li onclick="changeMapTo('firebaseZ_spawn',this)">Spawn</li>
                <li onclick="changeMapTo('firebaseZ',this)">Main Base</li>
            </ul>
        </li>
        <li>
            <h2 onclick="expandMenu(this)">Mauer Der Toten</h2>
            <ul>
                <li onclick="changeMapTo('mauerDerToten_streets',this)">Surface</li>
                <li onclick="changeMapTo('mauerDerToten',this)">Underground</li>
            </ul>
        </li>
        <li>
            <h2 onclick="expandMenu(this)">Forsaken</h2>
            <ul>
                <li onclick="changeMapTo('forsaken',this)">Surface</li>
                <li onclick="changeMapTo('forsaken_underground',this)">Underground</li>
            </ul>
        </li>
        <li>
            <h2 onclick="expandMenu(this)">Outbreak</h2>
            <ul>
                <li onclick="changeMapTo('zoo',this)">Zoo</li>
                <li onclick="changeMapTo('duga',this)">Duga</li>
                <li onclick="changeMapTo('ruka',this)">Ruka</li>
                <li onclick="changeMapTo('alpine',this)">Alpine</li>
                <li onclick="changeMapTo('armada',this)">Armada</li>
                <li onclick="changeMapTo('golova',this)">Golova</li>
                <li onclick="changeMapTo('collateral',this)">Collateral</li>
                <li onclick="changeMapTo('sanatorium',this)">Sanatorium</li>
            </ul>
        </li>
        <li>
            <h2 onclick="expandMenu(this)">Contribute</h2>
            <ul>
                <li id="newIntel" class="dropdown-item not-selectable" onClick="newIntelInit()">Submit New Intel</li>
                <li id="newMisc" class="dropdown-item not-selectable" onClick="newMiscInit()">Submit New Misc Marker</li>
            </ul>
        </li>
    </ul>`)
    navbarHtmlToAdd.forEach(element => {
        header.append(element);
    });
}

renderHeader();

/////////////////////Modal Functions/////////////////////////
function openModal(x) {
    document.getElementsByClassName("modal-bg")[0].classList.remove("-hidden")
    let modals = document.querySelectorAll(".modal")
    modals.forEach((modal) => {
        if (x.indexOf(modal.id) != -1) {
            modal.classList.remove("-hidden")
        } else {
            modal.classList.add("-hidden")
        }
    })
    // console.log(modals)
    fillTotals()
}

function closeModal() {
    document.getElementsByClassName("modal-bg")[0].classList.add("-hidden")
    let modals = document.querySelectorAll(".modal")
    modals.forEach((modal) => {
        modal.classList.add("-hidden")
    })
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
 * @param {object} intel Object of intel Details.
 */



function findInCollected(query) {
    let collectedIntel = getUserPrefs().collectedIntel
    let total = 0
    for (let i = 0; i < collectedIntel.length; i++) {
        total += findTotal(query, "id", collectedIntel[i]).length
    }
    return total;
}

document.addEventListener(
    "click",
    function (event) {
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

let collectedFaction = {
    darkAether: findInCollected(factionTotal.darkAether),
    requiem: findInCollected(factionTotal.requiem),
    omega: findInCollected(factionTotal.omega),
    maxis: findInCollected(factionTotal.maxis),
    all: 0,
    not: 0,
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
    all: 0,
    not: 0,
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
},]

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
    value: collectedSeason.not - 1,
    color: "--clr-grey "
},]


let factionDonut = new DonutChart(
    document.getElementById("faction-donut"), {
    r: 100,
    stroke: 25,
    scale: 100,
    total: factionTotal.all,
    collected: collectedFaction.all,
    items: factionItems
})
