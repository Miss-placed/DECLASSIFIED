// init map tiles
var dieMaschineTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    id: 'dieMaschine',
    bounds: [
        [-512, -512],
        [512, 512]
    ],
    noWrap: true
})
var firebaseZTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    id: 'firebaseZ',
    bounds: [
        [-512, -512],
        [512, 512]
    ],
    noWrap: true
})
var dugaTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    id: 'duga',

    // tileSize: 512,
    // bounds: [
    //     [-256, -256],
    //     [256, 256]
    // ],
    noWrap: true
})
var rukaTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    id: 'ruka',
    bounds: [
        [-512, -512],
        [512, 512]
    ],
    noWrap: true
})
var golovaTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    id: 'golova',
    bounds: [
        [-512, -512],
        [512, 512]
    ],
    noWrap: true
})
var alpineTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    id: 'alpine',
    bounds: [
        [-512, -512],
        [512, 512]
    ],
    noWrap: true
})
var sanitoriumTiles = L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    id: 'sanitorium',
    bounds: [
        [-512, -512],
        [512, 512]
    ],
    noWrap: true
});


//init layers
var dieMaschine = new L.LayerGroup();
var dieMaschineMarkers = new L.LayerGroup();


var firebaseZ = new L.LayerGroup();
var firebaseZMarkers = new L.LayerGroup();

var duga = new L.LayerGroup();
var dugaMarkers = new L.LayerGroup();
var ruka = new L.LayerGroup();
var rukaMarkers = new L.LayerGroup();
var golova = new L.LayerGroup();
var golovaMarkers = new L.LayerGroup();
var alpine = new L.LayerGroup();
var alpineMarkers = new L.LayerGroup();
var sanitorium = new L.LayerGroup();
var sanitoriumMarkers = new L.LayerGroup();

dieMaschineTiles.addTo(dieMaschine);
firebaseZTiles.addTo(firebaseZ);

dugaTiles.addTo(duga);
rukaTiles.addTo(ruka);
golovaTiles.addTo(golova);
alpineTiles.addTo(alpine);
sanitoriumTiles.addTo(sanitorium);


var map = L.map('worldMap', {
    crs: L.CRS.Simple,
    center: [-512, 512],
    zoom: 1,
    minZoom: 0,
    maxZoom: 4,
    maxBounds: [
        [-512, -512],
        [512, 512]
    ],
    layers: [
        dieMaschine,
        firebaseZ,
        duga,
        ruka,
        golova,
        alpine,
        sanitorium
    ],
    tap: true,
    tapTolerance: 30
});
var baseMaps = {
    "Die Maschine": dieMaschine,
    "Firebase Z": firebaseZ,
    "Duga": duga,
    "Ruka": ruka,
    "Golova": golova,
    "Alpine": alpine,
    "Sanitorium": sanitorium
};



// marker loop
L.marker(poi.Requiem[3].Audio[1].loc, { icon: requiemIcon }).addTo(dugaMarkers)
    .bindPopup(` <h1>${poi.Requiem[3].Audio[1].name}</h1> ${poi.Requiem[3].Audio[1].desc}`);

L.marker([-10, 0], { icon: omegaIcon }).addTo(rukaMarkers)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);



dieMaschineMarkers.addTo(dieMaschine);
firebaseZMarkers.addTo(firebaseZ);

dugaMarkers.addTo(duga);
rukaMarkers.addTo(ruka);
golovaMarkers.addTo(golova);
alpineMarkers.addTo(alpine);
sanitoriumMarkers.addTo(sanitorium);
L.control.layers(baseMaps, "", { collapsed: false }).addTo(map);

// map.fitBounds([
//     [-512, -512],
//     [512, 512]
// ])