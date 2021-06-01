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
        golova.Layer
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
for (let faction in poi) {
    if (poi.hasOwnProperty(faction)) {
        let factionIcon = window[faction.toString() + "Icon"]
        for (let i = 0; i <= Object.keys(poi[faction]).length; i++) {
            let season = poi[faction][i];
            for (let typeOfIntel in season) {
                if (season.hasOwnProperty(typeOfIntel)) {
                    for (let j = 0; j < Object.keys(season[typeOfIntel]).length; j++) {
                        let intel = season[typeOfIntel][j + 1];
                        if (intel.map != "outbreak") {
                            mapLayer = window[intel.map]
                            L.marker(intel.loc, { icon: factionIcon }).addTo(mapLayer.Markers)
                                .bindPopup(` <h1>${intel.name}</h1> ${intel.desc}`);
                        }



                    }
                }
            }
        }
    }
}

for (type in miscGolova) {
    for (item in miscGolova[type]) {
        var item = miscGolova[type][item]
        var desc = ((item.desc != "") ? item.desc : '');

        L.marker(item.loc, { icon: generalIcon }).addTo(golova.MiscMarkers)
            .bindPopup(` <h1>${item.name}</h1> ${desc}`);

    }
}
for (type in miscAlpine) {
    for (item in miscAlpine[type]) {
        var item = miscAlpine[type][item]
        var desc = ((item.desc != "") ? item.desc : '');

        L.marker(item.loc, { icon: generalIcon }).addTo(alpine.MiscMarkers)
            .bindPopup(` <h1>${item.name}</h1> ${desc}`);

    }
}
for (type in miscRuka) {
    for (item in miscRuka[type]) {
        var item = miscRuka[type][item]
        var desc = ((item.desc != "") ? item.desc : '');

        L.marker(item.loc, { icon: generalIcon }).addTo(ruka.MiscMarkers)
            .bindPopup(` <h1>${item.name}</h1> ${desc}`);

    }
}
for (type in miscDuga) {
    for (item in miscDuga[type]) {
        var item = miscDuga[type][item]
        var desc = ((item.desc != "") ? item.desc : '');

        L.marker(item.loc, { icon: generalIcon }).addTo(duga.MiscMarkers)
            .bindPopup(` <h1>${item.name}</h1> ${desc}`);

    }
}

for (type in miscSanatorium) {
    for (item in miscSanatorium[type]) {
        var item = miscSanatorium[type][item]
        var desc = ((item.desc != "") ? item.desc : '');

        L.marker(item.loc, { icon: generalIcon }).addTo(sanatorium.MiscMarkers)
            .bindPopup(` <h1>${item.name}</h1> ${desc}`);

    }
}