var disableMarkers = [];
var visibleMarkers = [];
let currentMap = 'zoo'
var results = [];


function searchThroughPOI(query) {
    for (let faction in poi) {
        if (poi.hasOwnProperty(faction)) {
            let factionIcon = window[faction.toString() + "Icon"]
            for (let i = 0; i <= Object.keys(poi[faction]).length; i++) {
                let season = poi[faction][i];
                for (let typeOfIntel in season) {
                    if (season.hasOwnProperty(typeOfIntel)) {
                        for (let j = 0; j < Object.keys(season[typeOfIntel]).length; j++) {
                            let item = season[typeOfIntel][j + 1]
                            for (key in item) {
                                if (item[key].indexOf(query) != -1) {
                                    switchAndFly(item.loc, item.map)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
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
    for (let faction in poi) {
        if (poi.hasOwnProperty(faction)) {
            let factionIcon = window[faction.toString() + "Icon"]
            for (let i = 0; i <= Object.keys(poi[faction]).length; i++) {
                let season = poi[faction][i];
                for (let typeOfIntel in season) {
                    if (season.hasOwnProperty(typeOfIntel)) {
                        for (let j = 0; j < Object.keys(season[typeOfIntel]).length; j++) {
                            let intel = season[typeOfIntel][j + 1];
                            if (intel.map != mapStrings.allOutbreakMaps) {
                                mapLayer = window[intel.map]
                                addMarkerToMap(intel.loc, factionIcon, mapLayer, intel.id, intel.name, intel.desc)
                            }
                        }
                    }
                }
            }
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
    if (desc !== '') {
        snippet = $(`<div>
        <p>${desc}</p>
            <button type="button" class="btn btn-info remove-button" data-item="${id}">Mark as collected</button>
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