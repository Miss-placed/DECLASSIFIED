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
        duga.Layer
    ],
    tap: true,
    tapTolerance: 30,
    noWrap: true,
    doubleClickZoom: false,
});
var baseMaps = {
    "Die Maschine": dieMaschine.Layer,
    "Die Maschine Underground": dieMaschine_underground.Layer,
    "Firebase Z": firebaseZ.Layer,
    "Firebase Z Spawn": firebaseZ_spawn.Layer,
    "Duga": duga.Layer,
    "Ruka": ruka.Layer,
    "Alpine": alpine.Layer,
    "Golova": golova.Layer,
    "Sanatorium": sanatorium.Layer,
};

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
                        if (intel.map == "Sanatorium") {
                            L.marker(intel.loc, { icon: requiemIcon }).addTo(sanatorium.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                        if (intel.map == "Alpine") {
                            L.marker(intel.loc, { icon: requiemIcon }).addTo(alpine.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                        if (intel.map == "Golova") {
                            L.marker(intel.loc, { icon: requiemIcon }).addTo(golova.Markers)
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
                        if (intel.map == "Sanatorium") {
                            L.marker(intel.loc, { icon: omegaIcon }).addTo(sanatorium.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                        if (intel.map == "Alpine") {
                            L.marker(intel.loc, { icon: omegaIcon }).addTo(alpine.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                        if (intel.map == "Golova") {
                            L.marker(intel.loc, { icon: omegaIcon }).addTo(golova.Markers)
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
                        if (intel.map == "Sanatorium") {
                            L.marker(intel.loc, { icon: maxisIcon }).addTo(sanatorium.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                        if (intel.map == "Alpine") {
                            L.marker(intel.loc, { icon: maxisIcon }).addTo(alpine.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                        if (intel.map == "Golova") {
                            L.marker(intel.loc, { icon: maxisIcon }).addTo(golova.Markers)
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
                        if (intel.map == "Sanatorium") {
                            L.marker(intel.loc, { icon: darkAetherIcon }).addTo(sanatorium.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                        if (intel.map == "Alpine") {
                            L.marker(intel.loc, { icon: darkAetherIcon }).addTo(alpine.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }
                        if (intel.map == "Golova") {
                            L.marker(intel.loc, { icon: darkAetherIcon }).addTo(golova.Markers)
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
firebaseZ_spawn.Tiles.addTo(firebaseZ_spawn.Layer);
firebaseZ_spawn.Markers.addTo(firebaseZ_spawn.Layer);

sanatorium.Tiles.addTo(sanatorium.Layer);
sanatorium.Markers.addTo(sanatorium.Layer);

dieMaschine.Tiles.addTo(dieMaschine.Layer);
dieMaschine.Markers.addTo(dieMaschine.Layer);
dieMaschine_underground.Tiles.addTo(dieMaschine_underground.Layer);
dieMaschine_underground.Markers.addTo(dieMaschine_underground.Layer);

function setDefaultMap() {
    // map.removeLayer(ruka.Layer)
    // map.removeLayer(alpine.Layer)
    // map.removeLayer(golova.Layer)
    // map.removeLayer(firebaseZ.Layer)
    // map.removeLayer(firebaseZ_spawn.Layer)
    // map.removeLayer(sanatorium.Layer)
    // map.removeLayer(dieMaschine.Layer)
    // map.removeLayer(dieMaschine_underground.Layer)
}