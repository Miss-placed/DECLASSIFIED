let v2test = true

function openModal() {
    document.getElementsByClassName("modal-bg")[0].classList.remove("-hidden")
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
function propigateIntelDetails(obj) {
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
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
document.querySelectorAll(".to-intel").forEach(element => {
    element.addEventListener('click', () => {
        let target = element.getAttribute('target')
        let intelID = element.getAttribute('id')
        openSubModal("intel-desc")

        //use target to get intel instead of predefined obj

        let obj = findObjectByKey(intelStoreV2, "id", intelID);
        propigateIntelDetails(obj)
        closeSubModal("intel-stats")
        closeSubModal("intel-type")

    })
})

function switchmodal() {

    // need to make a proper open and close function for modal switching
    closeSubModal("intel-desc")
    openSubModal("intel-stats")
    openSubModal("intel-type")
}

// basic sum function for totals calculation
function sum(obj) {
    return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
}


// #TODO: values need to be calculated maybe by lenght or whatever!
let factionTotal = {
    Requiem: 135,
    Omega: 108,
    Maxis: 62,
    DarkAether: 106,
}
factionTotal.All = sum(factionTotal);
let seasonTotal = {
    PreSeason: 59,
    Season1: 97,
    Season2: 71,
    Season3: 85,
    Season4: 99,
    Season5: 0,
}
seasonTotal.All = sum(seasonTotal);

let collectedFaction = {
    Requiem: 126,
    Omega: 104,
    Maxis: 62,
    DarkAether: 91,
}
collectedFaction.All = sum(collectedFaction)
collectedFaction.Not = factionTotal.All - collectedFaction.All;

let collectedSeason = {
    PreSeason: 56,
    Season1: 87,
    Season2: 71,
    Season3: 85,
    Season4: 84,
    Season5: 0,
}
collectedSeason.All = sum(collectedSeason)
collectedSeason.Not = factionTotal.All - collectedSeason.All;

var factionDonut = new DonutChart(
    document.getElementById("faction-donut"), {
        r: 100,
        stroke: 25,
        scale: 100,
        total: factionTotal.All,
        collected: collectedFaction.All,
        items: [{
            label: "Requiem ",
            value: collectedFaction.Requiem,
            color: "--clr-blue "
        }, {
            label: "Omega ",
            value: collectedFaction.Omega,
            color: "--clr-red "
        }, {
            label: "Maxis ",
            value: collectedFaction.Maxis,
            color: "--clr-blue-d "
        }, {
            label: "DarkAether ",
            value: collectedFaction.DarkAether,
            color: "--clr-purple "
        }, {
            label: "NotCollected ",
            value: collectedFaction.Not,
            color: "--clr-grey "
        }, ]

    })

// #TODO: uncomment once we have the season chart in place
//         var seasonDonut = new DonutChart(
//             document.getElementById("season-donut "), {
//     r: 90,
//         stroke: 30,
//         scale: 100,
//         total: seasonTotal.All,
//         collected: collectedSeason.All,
//         items: [{
//             label: "PreSeason ",
//             value: collectedSeason.PreSeason,
//             color: "--clr-blue-d "
//         }, {
//             label: "Season1 ",
//             value: collectedSeason.Season1,
//             color: "--clr-green "
//         }, {
//             label: "Season2 ",
//             value: collectedSeason.Season2,
//             color: "--clr-red "
//         }, {
//             label: "Season3 ",
//             value: collectedSeason.Season3,
//             color: "--clr-purple "
//         }, {
//             label: "Season4 ",
//             value: collectedSeason.Season4,
//             color: "--clr-yellow "
//         }, {
//             label: "Season5 ",
//             value: collectedSeason.Season5,
//             color: "--clr-orange "
//         }, {
//             label: "NotCollected ",
//             value: collectedSeason.Not,
//             color: "--clr-grey "
//         }, ]

//     })
//