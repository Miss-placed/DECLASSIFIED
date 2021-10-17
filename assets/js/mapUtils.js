function InitMap() {
    return L.map('worldMap', {
        crs: L.CRS.Simple,
        center: [256, 256],
        maxBounds: [
            [0, 0],
            [512, 512]
        ],
        zoom: 1,
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

function setMap(selectedMapId, navHtml) {
    const { id: mapId } = FindMapById(selectedMapId);
    if (app.currentMap != mapId) {
        mapInstance.removeLayer(mapLayers[app.currentMap].Layer)
        mapInstance.addLayer(mapLayers[mapId].Layer)

        app.currentMap = mapId
        setLastVisitedMap(mapId)

        Array.from(document.getElementsByClassName('current-map'))
            .forEach((element) => {
                element.classList.toggle("current-map");
            })
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
                addMarkerToMap(intel, factionIcon, mapLayer);
            }
        }

        for (maep in miscPOI) {
            let currmap = miscPOI[maep];
            if (typeof (miscPOI[maep]) !== "undefined") {
                currmap.forEach(item => {
                    addMiscMarkerToMap(item.loc, item.icon, mapLayers[maep], item.id, item.title, item.desc)
                })
            }
        }
    }
}

function addMarkerToMap(intel, icon, maep) {
    if (intel.loc != null && JSON.stringify([0, 0]) != JSON.stringify(intel.loc)) { // don't add 0,0 markers to the map for cleanliness
        let snippet = '';
        let shareBtn = genShareButton(intel.id).outerHTML;
        let bugBtn = genBugButton(intel.id).outerHTML;
        let moreBtn = genMoreButton(intel).outerHTML;
        let tempBtn = bugBtn
        let imgSrc = 'assets/img/intelScreenshot/placeholder.png';
        let imgEle = ''

        if (intel.img !== undefined) {
            imgSrc = `https://i.imgur.com/${intel.img}.jpg`
        }

        if (typeof v2Test == 'string') {
            imgEle = `<img src="${imgSrc}" onclick="expandImage(this)"></img>`
            tempBtn = moreBtn
        }

        if (intel.desc !== '') {
            snippet = `
            <h1>${intel.name}</h1>
                        
            <div>
                <div>
                    <p>${intel.desc}</p>
                    <div class="buttonContainer" data-item="${intel.id}" data-type="${markerTypes.intel.id}">
                        <button type="button" class="btn btn-info inverted mark-collected">Mark as collected</button>
                        ${shareBtn}
                        ${tempBtn}
                    </div>
                </div>
                ${imgEle}
            </div>
            `;

        }


        var marker = L.marker(intel.loc, { icon: icon }).addTo(maep.Markers)
            .bindPopup(snippet);

        if (hasUserCollected(intel.id)) {
            marker.setOpacity(0.35);
            app.disableMarkers.push(intel.id);
        }
        app.visibleMarkers[intel.id] = marker;
    }
}
function expandImage(ele) {
    document.getElementById('lightbox-container').classList.toggle('-hidden')
    document.getElementById('lightbox').setAttribute('src', ele.getAttribute('src'))
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