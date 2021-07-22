const userPrefs = userPrefsStartup();
var disableMarkers = [];
var visibleMarkers = [];
let currentMap = 'zoo'
var results = [];
let isMobile = false
let copyNotif = document.getElementById("copy-notif")

function searchThroughPOI(intelId) {
    let matchedIntel = intelCache.find((item) => {
        return item.id == intelId;
    })
    switchAndFly(matchedIntel.loc, matchedIntel.map);
}

if (localStorage.declassifiedPrefs != undefined)
    currentMap = JSON.parse(localStorage.declassifiedPrefs).lastSelectedMap;
var map = L.map('worldMap', {
    crs: L.CRS.Simple,
    center: [-(256 / 2), 256 / 2],
    maxBounds: [
        [0, 0],
        [-512 / 2, 512 / 2]
    ],
    zoom: 2,
    maxZoom: 5,
    minZoom: 1,
    layers: [
        window[currentMap].Layer
    ],
    tap: true,
    tapTolerance: 30,
    noWrap: true,
    doubleClickZoom: false,
});

L.control.attribution({ prefix: 'DECLASSIFIED' })
document.getElementsByClassName("leaflet-control-attribution")[0].getElementsByTagName("a")[0].title = "Declassified An Interactive map By Odinn"
document.getElementsByClassName("leaflet-control-attribution")[0].getElementsByTagName("a")[0].innerHTML = "DECLASSIFIED"
L.control.attribution()

// TODO: improve this to not represent a staircade :@
//##########################################################3
//loops through requiem, omega, maxis and darkAether
//checks if it's actually set
//set factionIcon to the facion + "Icon"
//a.e. var omega from poi.omega turns into => "omega" and adds "Icon"
//than uses the string "omegaIcon" as key for a window variable
//loops through all the seasons within a faction
//sets season for ease of access than loops through the types of intel within ( Audio, Document etc...)
//checks if typeOfIntel is actually set
//loops through all types of intel and makes a marker
if (!debug) {
    for (intel of intelCache) {
        if (intel.map != mapStrings.allOutbreakMaps) {
            let factionIcon = getIconByFaction(intel.faction);
            mapLayer = window[intel.map]
            addMarkerToMap(intel.loc, factionIcon, mapLayer, intel.id, intel.name, intel.desc)
        }
    }


    for (maep in miscPOI) {
        let iconlib = {
            "Demented": dementedIcon,
            "Rift": riftIcon,
            "RedRift": redRiftIcon,
            "Radio": radioIcon,
            "Monkey": monkeyIcon,
            "Projector": generalIcon,
            "Signal": generalIcon,
            "Fishing": fishingIcon,
        }
        let currmap = miscPOI[maep]
        if (typeof(miscPOI[maep]) !== "undefined") {
            for (type in currmap) {
                for (item in currmap[type]) {
                    var item = currmap[type][item]
                    let icon = iconlib[type]
                    if (typeof iconlib[type] == "undefined") icon = generalIcon
                    addMiscMarkerToMap(item.loc, icon, window[maep], item.name, item.desc)

                }
            }
        }
    }
}


function addMarkerToMap(loc, icon, maep, id, name, desc = ``) {
    let snippet = $(`<div></div>`)
    let shareBtn = genShareButton(id).outerHTML;
    if (desc !== '') {
        snippet = $(`<div>
        <p>${desc}</p>
            <button type="button" class="btn btn-info remove-button" data-item="${id}">Mark as collected</button>
            ${shareBtn}
        </div>`);
    }
    var marker = L.marker(loc, { icon: icon }).addTo(maep.Markers)
        .bindPopup(`<h1>${name}</h1>${snippet.html()}`);

    if (hasUserCollected(id)) {
        marker.setOpacity(0.35);
        disableMarkers.push(id);
    }
    visibleMarkers[id] = marker;
}

function addMiscMarkerToMap(loc, icon, maep, name, desc = ``) {
    let snippet = $(`<div></div>`)
    if (desc !== '') {
        snippet = $(`<div>
        <p>${desc}</p></div>`);
    }
    var marker = L.marker(loc, { icon: icon }).addTo(maep.MiscMarkers)
        .bindPopup(`<h1>${name}</h1>${snippet.html()}`);

}

map.on('popupopen', function() {
    $('.remove-button').click(function(e) {
        var itemId = $(e.target).data("item");
        if (disableMarkers.includes(itemId.toString())) {
            disableMarkers = $.grep(disableMarkers, function(value) {
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

map.on("click", function(e) {
    if (debug) {
        copyToClipboard("[" + e.latlng.lat + ", " + e.latlng.lng + "]", "Location Copied to Clipboard")
        showNotification("Location Added To Clipboard!");
    }
})

function setMap(selectedMap, htmlElement, ifSub = false) {
    if (currentMap != selectedMap) {
        map.removeLayer(window[currentMap].Layer)
        map.addLayer(window[selectedMap].Layer)

        currentMap = selectedMap
        setLastVisitedMap(selectedMap)

        Array.from(document.getElementsByClassName('current-map'))
            .forEach((element) => {
                element.classList.toggle("current-map");
            })
        if (ifSub) htmlElement.parentNode.parentNode.classList.toggle("current-map")
        htmlElement.classList.toggle("current-map")
    }
}

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
    generateList(intelCache);
    let urlId = (getUrlVars()["id"] === "" ? undefined : getUrlVars()["id"])
    if (urlId != undefined) {
        searchThroughPOI(urlId)
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
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

/* function hideCategoryIfEmpty(category) {
    if (category) {
        category.each(function() {
            var category = $(this);
            var anyVisibleItems = category.find(".searchable").is(":visible");
            if (!anyVisibleItems) category.hide();
        });
    }
} */

function filterIntel(searchTerm, factionsArr, seasonsArr, intelTypeArr, mapArr) {
    var results = intelCache;
    results = results.filter((intel) => {
        return intel.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    })

    results = results.filter((intel) => {
        return factionsArr.includes(intel.faction)
    })

    return results;
}

var filterCheckboxes = $('#intelFilter').find("input[type=checkbox]");

filterCheckboxes.change(function () {
/*     var currentCheck = $(this);
    if(currentCheck.is(':checked')){
        console.log(currentCheck, "Checked", currentCheck.val());
    }
    else
    {
        console.log(currentCheck, "Unchecked", currentCheck.val());
    }    */
    var factionFilters = $('#factionFilterCollapse').find("input[type=checkbox]:checked");
    let factionsArr = [];
    /* console.log(factionFilters); */
    $.each(factionFilters, function(){
        factionsArr.push(factions[$(this).val()]);
    });
    /* console.log(factionsArr); */

    var seasonsFilters = $('#seasonFilterCollapse').find("input[type=checkbox]:checked");
    let seasonsArr = [];
    /* console.log(seasonsFilters); */
    $.each(seasonsFilters, function(){
        seasonsArr.push(seasons[$(this).val()]);
    });
    /* console.log(seasonsArr); */

    var intelTypeFilters = $('#intelTypeFilterCollapse').find("input[type=checkbox]:checked");
    let intelTypeArr = [];
    /* console.log(intelTypeFilters); */
    $.each(intelTypeFilters, function(){
        intelTypeArr.push(intelTypes[$(this).val()]);
    });
    /* console.log(intelTypeArr); */

    var mapFilters = $('#mapFilterCollapse').find("input[type=checkbox]:checked");
    let mapArr = [];
    /* console.log(mapFilters); */
    $.each(mapFilters, function(){
        mapArr.push(mapStrings[$(this).val()]);
    });
    /* console.log(mapArr); */

    var filteredIntel = filterIntel($('#searchTerm').val().toLowerCase(), factionsArr, seasonsArr, intelTypeArr, mapArr);
    generateList(filteredIntel);
});

$('#searchTerm').keyup(function() {
    var searchTerm = $(this).val().toLowerCase();
    
    
    var filteredIntel = filterIntel(searchTerm);

    generateList(filteredIntel);

});
//Intel Search
document.getElementById("intelFilter").addEventListener("focus", function(e) {

})