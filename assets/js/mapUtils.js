function InitMap() {
    return L.map('worldMap', {
        crs: L.CRS.Simple,
        center: [256, 256],
        maxBounds: [
            [0, 0],
            [512, 512]
        ],
        zoom: 2,
        maxZoom: 5,
        minZoom: 1,
        layers: [
            mapLayers[app.currentMap].Layer
        ],
        tap: true,
        tapTolerance: 30,
        noWrap: true,
        doubleClickZoom: false,
    });
}

function setMap(selectedMap, navHtml) {
    const { id: mapId } = mapDetails[selectedMap];
    if (app.currentMap != mapId) {
        mapInstance.removeLayer(mapLayers[app.currentMap].Layer)
        mapInstance.addLayer(mapLayers[mapId].Layer)

        app.currentMap = mapId
        setLastVisitedMap(mapId)

        Array.from(document.getElementsByClassName('current-map'))
            .forEach((element) => {
                element.classList.toggle("current-map");
            })
        
        navHtml.classList.toggle("current-map")
        if (navHtml.closest(".dropdown.dropbtn")) {
            
        }
    }
}

function switchAndFly(location = [0, 0], selectedMap = "") {
    setMap(selectedMap, document.getElementById(selectedMap))
    setLastVisitedMap(selectedMap)
    mapInstance.flyTo(location, 4)
}

function AddMapMarkersFromCache(intelArr) {
    if (!debug) {
        for (intel of intelArr) {
            if (intel.map != mapDetails.allOutbreakMaps.id) {
                let factionIcon = getIconByFaction(intel.faction);
                mapLayer = mapLayers[intel.map];
                addMarkerToMap(intel.loc, factionIcon, mapLayer, intel.id, intel.name, intel.desc);
            }
        }

        for (maep in miscPOI) {
            let currmap = miscPOI[maep];
            if (typeof(miscPOI[maep]) !== "undefined") {
                currmap.forEach(item => {
                    addMiscMarkerToMap(item.loc, item.icon, mapLayers[maep], item.id, item.title, item.desc)
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
            <div class="buttonContainer" data-item="${id}" data-type="${markerTypes.intel.id}">
            <button type="button" class="btn btn-info inverted mark-collected">Mark as collected</button>
            ${shareBtn}
            ${bugBtn}
            </div>
            </div>`);
        }
        var marker = L.marker(loc, { icon: icon }).addTo(maep.Markers)
            .bindPopup(`<h1>${name}</h1>${snippet.html()}`);

        if (hasUserCollected(id)) {
            marker.setOpacity(0.35);
            app.disableMarkers.push(id);
        }
        app.visibleMarkers[id] = marker;
    }
}

function addMiscMarkerToMap(loc, icon, maep, id, name, desc = ``) {
    if (loc != null && JSON.stringify([0, 0]) != JSON.stringify(loc)) { // don't add 0,0 markers to the map for cleanliness
        let bugBtn = genBugButton(id).outerHTML;
        let snippet = $(`<div></div>`)
        snippet = $(`<div>
        <p>${desc}</p>
        <div class="buttonContainer" data-item="${id}" data-type="${markerTypes.misc.id}">
        ${bugBtn}
        </div>
        </div>`);
        var marker = L.marker(loc, { icon: icon }).addTo(maep.MiscMarkers)
            .bindPopup(`<h1>${name}</h1>${snippet.html()}`);
    }
}