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
    intelDescription: ["intel-list", "intel-desc"],
    settingsMain: ["settings"],
}
/////////////////////Header Menu/////////////////////////
function expandMenu() {
    document.querySelector("header").classList.toggle("visible");
}

function changeMapTo(mapId, targetElement) {
    const currentMap = FindMapById(mapId);
    document.querySelector("header").querySelector("h1").innerHTML = currentMap.title;
    setMap(mapId, targetElement)
    expandMenu()
}

function renderHeader() {
    const header = document.querySelector("header")
    header.replaceChildren(); // Empty Out First
    const currentMap = FindMapById(app.currentMap);



    let navbarHtmlToAdd = htmlToElements(
        `<h1 onclick="expandMenu()">${currentMap.title}</h1>
    <ul>
        <li>
            <h2>Die Maschine</h2>
            <ul>
                <li onclick="changeMapTo('dieMaschine',this)">Surface</li>
                <li onclick="changeMapTo('dieMaschine_underground',this)">Underground</li>
            </ul>
        </li>
        <li>
            <h2>Firebase Z</h2>
            <ul>
                <li onclick="changeMapTo('firebaseZ_spawn',this)">Spawn</li>
                <li onclick="changeMapTo('firebaseZ',this)">Main Base</li>
            </ul>
        </li>
        <li>
            <h2>Mauer Der Toten</h2>
            <ul>
                <li onclick="changeMapTo('mauerDerToten_streets',this)">Surface</li>
                <li onclick="changeMapTo('mauerDerToten',this)">Underground</li>
            </ul>
        </li>
        <li>
            <h2>Forsaken</h2>
            <ul>
                <li onclick="changeMapTo('forsaken',this)">Surface</li>
                <li onclick="changeMapTo('forsaken_underground',this)">Underground</li>
            </ul>
        </li>
        <li>
            <h2>Outbreak</h2>
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
            <h2>Contribute</h2>
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
function GenerateDetailModal(intel) {
    let detailModal = document.getElementById("description");
    detailModal.replaceChildren();
    if (!intel) {
        intel.name = "Intel Not Found";
        intel.desc = "If you see this please report an issue on the github page."
    }
    var elementsToAdd = htmlToElements(
        `<button class="close-submodal btn inverted" onclick="switchmodal()"><i class="bi bi-x"></i></button>
    
        <h2>${intel.name}</h2>
        <p>${intel.desc}</p>`
    );


    elementsToAdd.forEach(element => {
        detailModal.append(element);
    });



    let btnContainer = document.createElement("div");
    btnContainer.className = "buttonContainer";

    //Only Generate locate and share buttons if intel has location
    if (intel.loc[0] != 0 && intel.loc[1] != 0) {
        let location = createElement("button", ["btn", "inverted", "locate-intel"], "Locate Intel", "locate-intel");
        location.onclick = goToIntel(intel);
        location.appendChild(htmlToElement(`<i class="fas fa-map-marker-alt" aria-hidden="true" style="margin-left: 5px;"></i>`));
        btnContainer.appendChild(location);
        btnContainer.appendChild(genShareButton(intel.id));
    }

    //Always add bug button and button container
    btnContainer.appendChild(genBugButton(intel.id));
    detailModal.appendChild(btnContainer);


    /*     detailModal.querySelector("p").innerHTML = `
        "id": ${intel.id}<br>
        "faction": ${intel.faction}<br>
        "season": ${intel.season}<br>
        "intelType": ${intel.intelType}<br>
        "loc": ${intel.loc}<br>
        "map": ${intel.map}<br>
        "name": ${intel.name}<br>
        "desc": ${intel.desc}
    ` */
}


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





/* <img class="leaflet-image-layer leaflet-zoom-animated" src="./maps/forsaken/forsaken.svg" alt="" style="z-index: 1; transform: translate3d(-256px, -584px, 0px); width: 2048px; height: 2048px;"> */

function interceptMapLoad() {
    var el = document.querySelector("img.leaflet-image-layer.leaflet-zoom-animated");
}

function switchmodal() {

    // need to make a proper open and close function for modal switching
    closeSubModal("intel-detail")
    openSubModal("intel-stats")
    openSubModal("intel-type")
}
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
