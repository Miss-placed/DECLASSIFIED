// init map tiles
var duga = new L.LayerGroup();
var dugaMarkers = new L.LayerGroup();
var dugaTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'duga', tileSize: 512, zoomOffset: -1 })

var ruka = new L.LayerGroup();
var rukaMarkers = new L.LayerGroup();
var rukaTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'ruka', tileSize: 512, zoomOffset: -1 })

var alpine = new L.LayerGroup();
var alpineMarkers = new L.LayerGroup();
var alpineTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'alpine', tileSize: 512, zoomOffset: -1 })

var golova = new L.LayerGroup();
var golovaMarkers = new L.LayerGroup();
var golovaTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'golova', tileSize: 512, zoomOffset: -1 })

var firebaseZ = new L.LayerGroup();
var firebaseZMarkers = new L.LayerGroup();
var firebaseZTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'firebaseZ', tileSize: 512, zoomOffset: -1 })

var sanitorium = new L.LayerGroup();
var sanitoriumMarkers = new L.LayerGroup();
var sanitoriumTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'sanitorium', tileSize: 512, zoomOffset: -1 })

var dieMaschine = new L.LayerGroup();
var dieMaschineMarkers = new L.LayerGroup();
var dieMaschineTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'dieMaschine', tileSize: 512, zoomOffset: -1 })

var map = L.map('worldMap', {
    crs: L.CRS.Simple,
    center: [-(256 / 2), 256 / 2],
    zoom: 2,
    maxZoom: 5,
    layers: [
        duga,
        ruka,
        alpine,
        golova,
        firebaseZ,
        sanitorium,
        dieMaschine,
    ],
    tap: true,
    tapTolerance: 30,
    noWrap: true
});
var baseMaps = {
    "Die Maschine": dieMaschine,
    "firebase Z": firebaseZ,
    "Duga": duga,
    "Ruka": ruka,
    "Alpine": alpine,
    "golova": golova,
    "sanitorium": sanitorium,
};
L.control.layers(baseMaps, "", { collapsed: false }).addTo(map);

// do marker loop here
L.marker(poi.Requiem[3].Audio[1].loc, { icon: requiemIcon }).addTo(dugaMarkers)
    .bindPopup(` <h1>${poi.Requiem[3].Audio[1].name}</h1> ${poi.Requiem[3].Audio[1].desc}`);

L.marker([-10, 0], { icon: omegaIcon }).addTo(rukaMarkers)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);

dugaTiles.addTo(duga);
dugaMarkers.addTo(duga);
rukaTiles.addTo(ruka);
rukaMarkers.addTo(ruka);

alpineTiles.addTo(alpine);
alpineMarkers.addTo(alpine);
golovaTiles.addTo(golova);
golovaMarkers.addTo(golova);
firebaseZTiles.addTo(firebaseZ);
firebaseZMarkers.addTo(firebaseZ);

sanitoriumTiles.addTo(sanitorium);
sanitoriumMarkers.addTo(sanitorium);
dieMaschineTiles.addTo(dieMaschine);
dieMaschineMarkers.addTo(dieMaschine);