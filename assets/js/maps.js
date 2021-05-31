var tileSize = 512,
    zoomOffset = -1;

var duga = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, { id: 'duga', tileSize: tileSize, zoomOffset: zoomOffset })
}
var ruka = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/ruka/{z}/{x}_{y}.png`, { id: 'ruka', tileSize: tileSize, zoomOffset: zoomOffset })
}
var alpine = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/alpine/{z}/{x}_{y}.png`, { id: 'alpine', tileSize: tileSize, zoomOffset: zoomOffset })
}
var golova = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/golova/{z}/{x}_{y}.png`, { id: 'golova', tileSize: tileSize, zoomOffset: zoomOffset })
}

var firebaseZ_spawn = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/firebaseZ_spawn/{z}/{x}_{y}.png`, { id: 'firebaseZ_spawn', tileSize: tileSize, zoomOffset: zoomOffset })
}

var firebaseZ = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/firebaseZ/{z}/{x}_{y}.png`, { id: 'firebaseZ', tileSize: tileSize, zoomOffset: zoomOffset })
}

var sanatorium = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/sanatorium/{z}/{x}_{y}.png`, { id: 'sanatorium', tileSize: tileSize, zoomOffset: zoomOffset })
}

var dieMaschine = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/Die Maschine/{z}/{x}_{y}.png`, { id: 'dieMaschine', tileSize: tileSize, zoomOffset: zoomOffset })
}

var dieMaschine_underground = {
    Layer: new L.LayerGroup(),
    Markers: new L.LayerGroup(),
    MarkersVisible: true,
    Tiles: L.tileLayer(`./maps/DieMaschine_underground/{z}/{x}_{y}.png`, { id: 'dieMaschine_underground', tileSize: tileSize, zoomOffset: zoomOffset })
}
