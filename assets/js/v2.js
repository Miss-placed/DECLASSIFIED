document.getElementsByClassName('leaflet-control-attribution')[0].style.display = 'none';


const modalSet = {
    intelOverview: ["intel-filters", "intel-list", "intel-stats"],
    intelDescription: ["intel-list", "intel-detail"],
    settingsMain: ["settings"],
    settingsDebug: ["settings","settings-2"],
}

/////////////////////Header Menu/////////////////////////
function expandMenu() {
    document.querySelector("header").classList.toggle("visible");
}

function changeMapTo(mapId, targetElement) {
    const currentMap = FindMapById(mapId);
    document.querySelector("header").querySelector("h1").innerHTML = currentMap.title;
    setMap(mapId, targetElement)
    expandMenu();
    TriggerSearch();
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



/* <img class="leaflet-image-layer leaflet-zoom-animated" src="./maps/forsaken/forsaken.svg" alt="" style="z-index: 1; transform: translate3d(-256px, -584px, 0px); width: 2048px; height: 2048px;"> */

function interceptMapLoad() {
    var el = document.querySelector("img.leaflet-image-layer.leaflet-zoom-animated");
}

function switchmodal() {
    // need to make a proper open and close function for modal switching
    closeSubModal("intel-detail")
    openSubModal("intel-stats")
    openSubModal("intel-filters")
}


