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
            app.disableMarkers = $.grep(app.disableMarkers, function (value) {
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
        copyToClipboard(`${window.location.origin}${window.location.pathname}?id=${itemId}`, "Link Copied To Clipboard");
    });
    $('.bugRep').click(function (e) {
        let itemId = $(e.target).closest(".buttonContainer").data("item");
        let type = $(e.target).closest(".buttonContainer").data("type");

        redirectToGithub({ itemType: type, issueType: "Fix", itemId: itemId })
    });
});

mapInstance.on("click", function (e) {
    let location = "[" + e.latlng.lat + ", " + e.latlng.lng + "]";
    if (debug) {
        copyToClipboard(location, "Location Copied to Clipboard")
    } else if (app.submittingLocation) {
        redirectToGithub({ itemType: app.currentContribType, issueType: "New", location: location });
    }
})

function onLoad() {
    //Set initial theme
    setThemeFromPrefs();
    initSystemThemeButton();

    // needs to be replaced with the new menu highlighter
    document.getElementById(app.currentMap).classList.add("current-map")
    GenerateFullIntelList(intelCache);
    CheckIfSharingURL();

    //Intel Search Listeners
    $('#intelFilter').find("input[type=checkbox]").change(function () {
        intelFiltered = TriggerSearchV1();
    });

    $('#searchTerm').keyup(function () {
        intelFiltered = TriggerSearchV1();
    });
    //Hide aside if toggled off
    if (!userPrefs.asideShow) toggleAside(false);
}



function onLoadV2() {
    //Set initial theme
    setThemeFromPrefs();
    initSystemThemeButton();
    
    setDebugButton();
    
    CheckIfSharingURL();

    //Intel Search Listeners
    $('#search-term').keyup(function () {
        TriggerSearch();
    });
    $('#intel-type-select input[type=checkbox]').click(function (params) {
        TriggerSearch();
    });

    TriggerSearch();
}

if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
    let sidebar = document.getElementById("aside");
    let worldmap = document.getElementById("worldMap");
    sidebar.classList.add("mobile-view");
    worldmap.classList.add("mobile-view");
    app.isMobile = true
    toggleAside(false);
}

