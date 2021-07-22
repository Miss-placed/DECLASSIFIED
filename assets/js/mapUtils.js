function InitMap() {
    return L.map('worldMap', {
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
}

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

function switchAndFly(location = [0, 0], selectedMap = "") {
    let ifSub = false
    if (selectedMap == mapStrings.firebaseZ || selectedMap == mapStrings.firebaseZSpawn ||
        selectedMap == mapStrings.dieMaschine || selectedMap == mapStrings.dieMaschineUnderground) ifSub = true
    setMap(selectedMap, document.getElementById(selectedMap), ifSub)
    setLastVisitedMap(selectedMap)
    map.flyTo(location, 4)
}

function AddMapMarkersFromCache(intelArr) {
    if (!debug) {
        for (intel of intelArr) {
            if (intel.map != mapStrings.allOutbreakMaps) {
                let factionIcon = getIconByFaction(intel.faction);
                mapLayer = window[intel.map];
                addMarkerToMap(intel.loc, factionIcon, mapLayer, intel.id, intel.name, intel.desc);
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
            };
            let currmap = miscPOI[maep];
            if (typeof (miscPOI[maep]) !== "undefined") {
                for (type in currmap) {
                    for (item in currmap[type]) {
                        var item = currmap[type][item];
                        let icon = iconlib[type];
                        if (typeof iconlib[type] == "undefined")
                            icon = generalIcon;
                        addMiscMarkerToMap(item.loc, icon, window[maep], item.name, item.desc);

                    }
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