// init map tiles
var dugaTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'MapID', tileSize: 512, zoomOffset: -1 }),
    rukaTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'MapID', tileSize: 512, zoomOffset: -1 });


//init layers
var duga = new L.LayerGroup();
var dugaMarkers = new L.LayerGroup();


var ruka = new L.LayerGroup();
var rukaMarkers = new L.LayerGroup();


var map = L.map('worldMap', {
    center: [1, 1],
    zoom: 3,
    layers: [duga, ruka],
    tap: true,
    tapTolerance: 30
});
var baseMaps = {
    "Duga": duga,
    "Ruka": ruka,
};



L.control.layers(baseMaps).addTo(map);
// marker loop
L.marker([10, 0], { icon: maxisIcon }).addTo(dugaMarkers)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);

L.marker([-10, 0], { icon: omegaIcon }).addTo(rukaMarkers)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);

dugaTiles.addTo(duga);
dugaMarkers.addTo(duga);

rukaTiles.addTo(ruka);
rukaMarkers.addTo(ruka);