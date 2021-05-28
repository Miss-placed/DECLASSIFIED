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
        duga.Layer,
        ruka.Layer,
        alpine.Layer,
        golova.Layer,
        firebaseZ.Layer,
        sanitorium.Layer,
        dieMaschine.Layer,
    ],
    tap: true,
    tapTolerance: 30,
    noWrap: true,
    doubleClickZoom: false,
});
var baseMaps = {
    "Die Maschine": dieMaschine.Layer,
    "Firebase Z": firebaseZ.Layer,
    "Duga": duga.Layer,
    "Ruka": ruka.Layer,
    "Alpine": alpine.Layer,
    "Golova": golova.Layer,
    "Sanitorium": sanitorium.Layer,
};
L.control.layers(baseMaps, "", { collapsed: false }).addTo(map);

// do marker loop here
for (let key in poi) {
    if (poi.hasOwnProperty(key)) {
        if (key.toString() == "Requiem") {
            for (let i = 0; i <= Object.keys(poi[key]).length; i++) {
                let season = poi.Requiem[i];
                for (let key in season) {
                    for (let i = 0; i < Object.keys(season[key]).length; i++) {
                        let intel = season[key][i + 1];
                        if (intel.map == "Duga") {
                            L.marker(intel.loc, { icon: requiemIcon }).addTo(duga.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                    }

                }
            }
        }
        if (key.toString() == "Omega") {
            for (let i = 0; i <= Object.keys(poi[key]).length; i++) {
                let season = poi.Omega[i];
                for (let key in season) {
                    for (let i = 0; i < Object.keys(season[key]).length; i++) {
                        let intel = season[key][i + 1];
                        if (intel.map == "Duga") {
                            L.marker(intel.loc, { icon: omegaIcon }).addTo(duga.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                    }

                }
            }
        }
        if (key.toString() == "Maxis") {
            for (let i = 0; i <= Object.keys(poi[key]).length; i++) {
                let season = poi.Maxis[i];
                for (let key in season) {
                    for (let i = 0; i < Object.keys(season[key]).length; i++) {
                        let intel = season[key][i + 1];
                        if (intel.map == "Duga") {
                            L.marker(intel.loc, { icon: maxisIcon }).addTo(duga.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                    }

                }
            }
        }
        if (key.toString() == "DarkAether") {
            for (let i = 0; i <= Object.keys(poi[key]).length; i++) {
                let season = poi.DarkAether[i];
                for (let key in season) {
                    for (let i = 0; i < Object.keys(season[key]).length; i++) {
                        let intel = season[key][i + 1];
                        if (intel.map == "Duga") {
                            L.marker(intel.loc, { icon: darkAetherIcon }).addTo(duga.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                    }

                }
            }
        }
    }
}


duga.Tiles.addTo(duga.Layer);
duga.Markers.addTo(duga.Layer);
ruka.Tiles.addTo(ruka.Layer);
ruka.Markers.addTo(ruka.Layer);

alpine.Tiles.addTo(alpine.Layer);
alpine.Markers.addTo(alpine.Layer);
golova.Tiles.addTo(golova.Layer);
golova.Markers.addTo(golova.Layer);
firebaseZ.Tiles.addTo(firebaseZ.Layer);
firebaseZ.Markers.addTo(firebaseZ.Layer);

sanitorium.Tiles.addTo(sanitorium.Layer);
sanitorium.Markers.addTo(sanitorium.Layer);
dieMaschine.Tiles.addTo(dieMaschine.Layer);
dieMaschine.Markers.addTo(dieMaschine.Layer);

function setDefaultMap() {
    map.removeLayer(ruka.Layer)
    map.removeLayer(alpine.Layer)
    map.removeLayer(golova.Layer)
    map.removeLayer(firebaseZ.Layer)
    map.removeLayer(sanitorium.Layer)
    map.removeLayer(dieMaschine.Layer)
}