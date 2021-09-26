const userPrefs = userPrefsStartup();
let { currentMap, disableMarkers, visibleMarkers, notificationEle, isMobile, submittingIntel, results } = StartupGlobals();

function StartupGlobals() {
    debugger
    var disableMarkers = [];
    var visibleMarkers = [];
    //Use default latest map otherwise use last selected map of user
    let currentMap = mapStrings.armada;
    if (localStorage.declassifiedPrefs != undefined && JSON.parse(localStorage.declassifiedPrefs).lastSelectedMap)
        currentMap = JSON.parse(localStorage.declassifiedPrefs).lastSelectedMap;
    var results = [];
    let isMobile = false;
    let submittingIntel = false;
    let notificationEle = document.getElementById("notification-popup");
    return { currentMap, disableMarkers, visibleMarkers, notificationEle, isMobile, submittingIntel, results };
}

var map = InitMap();

L.control.attribution({ prefix: 'DECLASSIFIED' })
document.getElementsByClassName("leaflet-control-attribution")[0].getElementsByTagName("a")[0].title = "Declassified An Interactive map By Odinn"
document.getElementsByClassName("leaflet-control-attribution")[0].getElementsByTagName("a")[0].innerHTML = "DECLASSIFIED"
L.control.attribution()

//loops through all types of intel and makes a marker
AddMapMarkersFromCache(intelCache);

map.on('popupopen', function () {
    $('.remove-button').click(function (e) {
        var itemId = $(e.target).data("item");
        if (disableMarkers.includes(itemId.toString())) {
            disableMarkers = $.grep(disableMarkers, function (value) {
                return value != itemId.toString();
            });
            visibleMarkers[itemId].setOpacity(1);
            removeCollectedIntel(itemId)
        } else {
            disableMarkers.push(itemId.toString());
            visibleMarkers[itemId].setOpacity(0.35);
            addCollectedIntel(itemId);
        }
    });
});

map.on("click", function (e) {
    var location = "[" + e.latlng.lat + ", " + e.latlng.lng + "]";
    if (debug) {
        copyToClipboard(location, "Location Copied to Clipboard")
    } else if (submittingIntel) {
        redirectToGithub(location);
    }
})

function onLoad() {
    document.getElementById(currentMap).classList.add("current-map")
    GenerateFullIntelList(intelCache);
    let urlId = (getUrlVars()["id"] === "" ? undefined : getUrlVars()["id"])
    if (urlId != undefined) {
        searchThroughPOI(urlId)
    }

    //Intel Search Listeners
    $('#intelFilter').find("input[type=checkbox]").change(function () {
        intelFiltered = TriggerSearch();
    });

    $('#searchTerm').keyup(function () {
        intelFiltered = TriggerSearch();
    });
}

if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
    let sidebar = document.getElementById("aside");
    let worldmap = document.getElementById("worldMap");
    sidebar.classList.add("mobile-view");
    worldmap.classList.add("mobile-view");
    isMobile = true
    toggleAside();
}