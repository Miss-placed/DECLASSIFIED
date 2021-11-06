let mapInstance = InitMap();

L.control.attribution({ prefix: 'DECLASSIFIED' })
document.getElementsByClassName("leaflet-control-attribution")[0].getElementsByTagName("a")[0].title = "Declassified An Interactive map By Odinn"
document.getElementsByClassName("leaflet-control-attribution")[0].getElementsByTagName("a")[0].innerHTML = "DECLASSIFIED"
L.control.attribution()

//loops through all types of intel and makes a marker
AddMapMarkersFromCache(intelCache);

mapInstance.on('popupopen', function (e) {
    const popup = e.popup._source._popup._wrapper;
    const intelId = $(popup).find(".buttonContainer").first().data("item");
    const type = $(popup).find(".buttonContainer").first().data("type");
    const collectBtnSelector = `#${intelId}-popup-collect-btn`;
    const isCollected = hasUserCollected(intelId);
    if (isCollected)
        markButtonAsCollected(collectBtnSelector)
    else
        markButtonAsUnCollected(collectBtnSelector)

    $(collectBtnSelector).click(function (e) {
        markIntelCollected(intelId);
    });
    $('.share').click(function () {
        copyToClipboard(`${window.location.origin}${window.location.pathname}?id=${intelId}`, "Link Copied To Clipboard");
    });
    $('.bugRep').click(function () {
        redirectToGithub({ itemType: type, issueType: "Fix", itemId: intelId });
    });
    $('.moreInfo').click(function () {
        OpenIntelDetail(intelId);
    })
});

mapInstance.on("click", function (e) {
    let location = "[" + e.latlng.lat + ", " + e.latlng.lng + "]";
    if (debug) {
        copyToClipboard(location, "Location Copied to Clipboard")
    } else if (app.submittingLocation) {
        redirectToGithub({ itemType: app.currentContribType, issueType: "New", location: location });
    }
})


function onLoadV1() {
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


function onLoad() {
    renderSettingsModal();
    //Set initial theme
    setThemeFromPrefs();
    initSystemThemeButton();

    setVisibilityFromPrefs();
    
    CheckIfSharingURL();

    //Intel Search Listeners
    $('#search-term').on('search keyup', function () {
        TriggerSearch();
    });
    $('#intel-filters input[type=checkbox]').click(function (params) {
        TriggerSearch();
    });
    //Initialise bug rep buttons being hidden or not
    $('link[href="assets/style/hideDebugButton.css"]').prop('disabled', !userPrefs.hideBugRepButton);

    CalcStats();
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

