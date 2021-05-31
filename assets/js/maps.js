var globalSettings = {
    id: '',
    tileSize: 512,
    zoomOffset: -1,
    bounds: [
        [-256, 0],
        [768, 256]
    ],
}


var ruka, duga, alpine, golova, sanatorium, dieMaschine, dieMaschine_underground, firebaseZ, firebaseZ_spawn;

function generateLayers(name, settings) {
    settings.id = name
    return {
        Layer: new L.LayerGroup(),
        Markers: new L.LayerGroup(),
        MarkersVisible: true,
        Tiles: L.tileLayer(`./maps/${name}/{z}/{x}_{y}.png`, settings)
    }
}

duga = generateLayers(
    "duga", globalSettings)
ruka = generateLayers(
    "ruka", globalSettings)
alpine = generateLayers(
    "alpine", globalSettings)
golova = generateLayers(
    "golova", globalSettings)
sanatorium = generateLayers(
    "sanatorium", globalSettings)
dieMaschine = generateLayers(
    "dieMaschine", globalSettings)
dieMaschine_underground = generateLayers(
    "dieMaschine_underground", globalSettings)
firebaseZ = generateLayers(
    "firebaseZ", globalSettings)
firebaseZ_spawn = generateLayers(
    "firebaseZ_spawn", globalSettings)