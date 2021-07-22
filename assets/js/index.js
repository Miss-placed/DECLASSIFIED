const userPrefs = userPrefsStartup();
var { currentMap, disableMarkers, visibleMarkers, copyNotif, isMobile } = StartupGlobals();

function StartupGlobals() {
    var disableMarkers = [];
    var visibleMarkers = [];
    let currentMap = 'zoo';
    var results = [];
    let isMobile = false;
    let copyNotif = document.getElementById("copy-notif");
    return { currentMap, disableMarkers, visibleMarkers, copyNotif, isMobile };
}

function searchThroughPOI(intelId) {
    let matchedIntel = intelCache.find((item) => {
        return item.id == intelId;
    })
    switchAndFly(matchedIntel.loc, matchedIntel.map);
}

if (localStorage.declassifiedPrefs != undefined)
    currentMap = JSON.parse(localStorage.declassifiedPrefs).lastSelectedMap;
    
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
    if (debug) {
        copyToClipboard("[" + e.latlng.lat + ", " + e.latlng.lng + "]", "Location Copied to Clipboard")
        showNotification("Location Added To Clipboard!");
    }
})

function toggleAside() {
    let sidebar = document.getElementById("aside")
    let worldmap = document.getElementById("worldMap")
    sidebar.classList.toggle("menu-closed")
    worldmap.classList.toggle("menu-closed")
    window.dispatchEvent(new Event('resize'));
}


copyNotif.onanimationend = () => {
    copyNotif.classList.remove("animated")
}

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

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
    let sidebar = document.getElementById("aside");
    let worldmap = document.getElementById("worldMap");
    sidebar.classList.add("mobile-view");
    worldmap.classList.add("mobile-view");
    isMobile = true
    toggleAside();
}

function showNotification(message) {
    copyNotif.classList.remove("animated");
    void copyNotif.offsetWidth; //https://css-tricks.com/restart-css-animation/
    copyNotif.innerHTML = message;
    copyNotif.classList.add("animated");
}

