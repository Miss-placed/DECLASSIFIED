const app = StartupSettings();
const userPrefs = userPrefsStartup();

function StartupSettings() {
    let response;
    const repoDomain = 'https://github.com/Miss-placed/DECLASSIFIED';
    const appDomain = 'https://miss-placed.github.io/DECLASSIFIED/';
    let disableMarkers = [], visibleMarkers = [];
    //Use default latest map otherwise use last selected map of user
    let currentMap = mapStrings.armada;
    let currentContribTemplate, currentContribLabel;
    if (localStorage.declassifiedPrefs != undefined && JSON.parse(localStorage.declassifiedPrefs).lastSelectedMap)
        currentMap = JSON.parse(localStorage.declassifiedPrefs).lastSelectedMap;

    let isMobile = false, submittingLocation = false, fixedNotification = false;
    let notificationEle = document.getElementById("notification-popup");
    return response = { appDomain, repoDomain, currentMap, disableMarkers, visibleMarkers, notificationEle, isMobile, submittingLocation, currentContribTemplate, currentContribLabel, fixedNotification };
}

let mapInstance = InitMap();

L.control.attribution({ prefix: 'DECLASSIFIED' })
document.getElementsByClassName("leaflet-control-attribution")[0].getElementsByTagName("a")[0].title = "Declassified An Interactive map By Odinn"
document.getElementsByClassName("leaflet-control-attribution")[0].getElementsByTagName("a")[0].innerHTML = "DECLASSIFIED"
L.control.attribution()

//loops through all types of intel and makes a marker
AddMapMarkersFromCache(intelCache);

mapInstance.on('popupopen', function () {
    $('.mark-collected').click(function (e) {
        let itemId = $(e.target).closest(".buttonContainer").data("item");
        if (app.disableMarkers.includes(itemId.toString())) {
            app.disableMarkers = $.grep(app.disableMarkers, function(value) {
                return value != itemId.toString();
            });
            app.visibleMarkers[itemId].setOpacity(1);
            removeCollectedIntel(itemId)
        } else {
            app.disableMarkers.push(itemId.toString());
            app.visibleMarkers[itemId].setOpacity(0.35);
            addCollectedIntel(itemId);
        }
    });
    $('.share').click(function (e) {
        let itemId = $(e.target).closest(".buttonContainer").data("item");
        console.log("share", itemId);
        copyToClipboard(`${window.location.origin}${window.location.pathname}?id=${itemId}`, "Link Copied To Clipboard");
    });
    $('.bugRep').click(function (e) {
        let itemId = $(e.target).closest(".buttonContainer").data("item");
        console.log("bugRep", itemId);
        redirectToGithub({label: "Intel Fix", issueTemplate: contribTemplates.intel.editId, intelId: itemId})
    });
});

mapInstance.on("click", function(e) {
    let location = "[" + e.latlng.lat + ", " + e.latlng.lng + "]";
    if (debug) {
        copyToClipboard(location, "Location Copied to Clipboard")
    } else if (app.submittingLocation) {
        redirectToGithub({label:app.currentContribLabel, issueTemplate:app.currentContribTemplate, location: location});
    }
})

function onLoad() {
    // needs to be replaced with the new menu highlighter
    //if (v2test == null) {
        document.getElementById(app.currentMap).classList.add("current-map")
        GenerateFullIntelList(intelCache);
    //}
    let urlId = (getUrlVars()["id"] === "" ? undefined : getUrlVars()["id"])
    if (urlId != undefined) {
        goToIntelById(urlId)
    }

    //Intel Search Listeners
    $('#intelFilter').find("input[type=checkbox]").change(function() {
        intelFiltered = TriggerSearch();
    });

    $('#searchTerm').keyup(function() {
        intelFiltered = TriggerSearch();
    });


}

if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
    let sidebar = document.getElementById("aside");
    let worldmap = document.getElementById("worldMap");
    sidebar.classList.add("mobile-view");
    worldmap.classList.add("mobile-view");
    app.isMobile = true
    toggleAside();
}
