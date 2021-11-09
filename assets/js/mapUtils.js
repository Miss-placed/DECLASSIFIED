function InitMap() {
    return L.map('worldMap', {
        crs: L.CRS.Simple,
        center: [256, 256],
        maxBounds: [
            [-256, -256],
            [768, 768]
        ],
        zoom: 0.8,
        maxZoom: 5,
        minZoom: 0.1,
        layers: [
            mapLayers[app.currentMap].Layer
        ],
        tap: true,
        tapTolerance: 30,
        noWrap: true,
        doubleClickZoom: false,
        zoomDelta: 0.5,
        wheelPxPerZoomLevel: 80,
        zoomSnap: 0,
        maxBoundsViscosity: 1.0,
    });
}

function setMap(selectedMapId, navHtml) {
    const { id: mapId } = findMapById(selectedMapId);
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

function changeMapTo(mapId, targetElement) {
    const currentMap = findMapById(mapId);
    document.querySelector("header").querySelector("h1").innerHTML = currentMap.title;
    setMap(mapId, targetElement);
    setVisibilityFromPrefs();
    collapseMenu();
    TriggerSearch();
}

function switchAndFly(location = [0, 0], selectedMap = "") {
    changeMapTo(selectedMap, document.getElementById(selectedMap))
    setLastVisitedMap(selectedMap)
    mapInstance.flyTo(location, 4)
}

function AddMapMarkersFromCache(intelArr) {
    for (intel of intelArr) {
        if (intel.map != mapDetails.allOutbreakMaps.id) {
            let factionIcon = intelIconInit(intel.faction, intel.intelType);
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

function addMarkerToMap(intel, icon, maep) {
    if (intel.loc != null && JSON.stringify([0, 0]) != JSON.stringify(intel.loc)) { // don't add 0,0 markers to the map for cleanliness
        let snippet = '';
        let shareBtn = genShareButton(intel.id).outerHTML;
        let bugBtn = !userPrefs.hideBugRepButton ? genBugButton(intel.id).outerHTML : '';
        let moreBtn = genMoreButton(intel).outerHTML;
        let collectedBtn = genCollectedButton(intel.id, true).outerHTML;
        let imgSrc = 'assets/img/intelScreenshot/placeholder.png';
        let imgEle = ''

        if (intel.img !== undefined) {
            imgSrc = `https://i.imgur.com/${intel.img}.jpg`
        }

        imgEle = `<img src="${imgSrc}" onclick="expandImage(this)"></img>`

        if (intel.desc !== '') {
            snippet = `
            <h1>${intel.name}</h1>
                        
            <div class="intel-content">
                <div>
                    <p>${intel.desc}</p>
                    <div class="buttonContainer" data-item="${intel.id}" data-type="${markerTypes.intel.id}">
                        ${collectedBtn}
                        ${shareBtn}
                        ${bugBtn}
                        ${moreBtn}
                    </div>
                </div>
                ${imgEle}
            </div>
            `;

        }


        var marker = L.marker(intel.loc, { icon: icon })
            .addTo(maep.Markers)
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
        let descriptionEle = desc ? `<p>${desc}</p>` : '';
        let snippet = $(`<div></div>`)
        snippet = `
        <div class="misc-content">
            <h1>${name}</h1>
            <div class="buttonContainer noselect" data-item="${id}" data-type="${markerTypes.misc.id}">
                ${descriptionEle}
                ${bugBtn}
            </div>
        </div>`;
        var marker = L.marker(loc, { icon: icon })
            .addTo(maep.MiscMarkers)
            .bindPopup(snippet);
    }
}

function toggleMarkers(markerType = markerTypes.intel.id, forceHide = false) {
    let elementsToHide;
    switch (markerType) {
        case markerTypes.intel.id:
            elementsToHide = $(".intel-icon");
            break;
        case markerTypes.misc.id:
            elementsToHide = $(".misc-icon");
            break;
        case markerTypes.worldEvents.id:
        case markerTypes.easterEggs.id:
        default:
            break;
    }

    if (forceHide) {
        elementsToHide.fadeOut();
    } else {
        elementsToHide.fadeToggle();
    }
}

