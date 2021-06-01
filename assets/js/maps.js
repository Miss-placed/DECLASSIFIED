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
//TODO: need to do this in a smarter way!
duga = generateLayers(
    "duga", globalSettings);
ruka = generateLayers(
    "ruka", globalSettings);
alpine = generateLayers(
    "alpine", globalSettings);
golova = generateLayers(
    "golova", globalSettings);
sanatorium = generateLayers(
    "sanatorium", globalSettings);
dieMaschine = generateLayers(
    "dieMaschine", globalSettings);
dieMaschine_underground = generateLayers(
    "dieMaschine_underground", globalSettings);
firebaseZ = generateLayers(
    "firebaseZ", globalSettings);
firebaseZ_spawn = generateLayers(
    "firebaseZ_spawn", globalSettings);
outbreak = generateLayers(
    "outbreak", globalSettings);

function generateLayers(name, settings) {
    settings.id = name
    let object = {
        Layer: new L.LayerGroup(),
        Markers: new L.LayerGroup(),
        MiscMarkers: new L.LayerGroup(),
        MarkersVisible: true,
        Tiles: L.tileLayer(`./maps/${name}/{z}/{x}_{y}.png`, settings)
    }
    object.Tiles.addTo(object.Layer);
    object.Markers.addTo(object.Layer);
    object.MiscMarkers.addTo(object.Layer);
    return object

}