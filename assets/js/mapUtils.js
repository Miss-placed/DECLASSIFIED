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
        mapInstance.removeLayer(window[currentMap].Layer)
        mapInstance.addLayer(window[selectedMap].Layer)

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
    mapInstance.flyTo(location, 4)
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
            let currmap = miscPOI[maep];
            if (typeof (miscPOI[maep]) !== "undefined") {
                currmap.forEach(item => {
                    addMiscMarkerToMap(item.loc, item.icon, window[maep], item.title, item.desc)
                })
            }
        }
    }
}

function addMarkerToMap(loc, icon, maep, id, name, desc = ``) {
    if (loc != null && JSON.stringify([0, 0]) != JSON.stringify(loc)) { // don't add 0,0 markers to the map for cleanliness
        let snippet = $(`<div></div>`)
        let shareBtn = genShareButton(id).outerHTML;
        let bugBtn = genBugButton(id).outerHTML;
        if (desc !== '') {
            snippet = $(`
            <div>
            <p>${desc}</p>
            <div class="buttonContainer" data-item="${id}">
            <button type="button" class="btn btn-info mark-collected">Mark as collected</button>
            ${shareBtn}
            ${bugBtn}
            </div>
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
}

function addMiscMarkerToMap(loc, icon, maep, name, desc = ``) {
    if (loc != null && JSON.stringify([0, 0]) != JSON.stringify(loc)) { // don't add 0,0 markers to the map for cleanliness
        let snippet = $(`<div></div>`)
        if (desc !== '') {
            snippet = $(`<div>
        <p>${desc}</p></div>`);
        }
        var marker = L.marker(loc, { icon: icon }).addTo(maep.MiscMarkers)
            .bindPopup(`<h1>${name}</h1>${snippet.html()}`);
    }
}