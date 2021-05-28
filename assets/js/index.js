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
L.marker(poi.Requiem[3].Audio[1].loc, { icon: requiemIcon }).addTo(duga.Markers)
    .bindPopup(` <h1>${poi.Requiem[3].Audio[1].name}</h1> ${poi.Requiem[3].Audio[1].desc}`);

L.marker([-10, 0], { icon: omegaIcon }).addTo(ruka.Markers)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);

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