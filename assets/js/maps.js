var globalSettings = {
    prefix: false,
    attribution: 'Want to help out? <a href="https://github.com/Odinnh/DECLASSIFIED">Github</a>. ||  See all <a href="https://github.com/Odinnh/DECLASSIFIED#contributors">Contributors</a>',
    id: '',
    tileSize: 512,
    zoomOffset: -1,
    bounds: [
        [-256, 0],
        [768, 256]
    ],
}

var ruka, duga, alpine, golova, zoo, sanatorium, dieMaschine, dieMaschine_underground, firebaseZ, firebaseZ_spawn;
duga = generateLayers(
    "duga", globalSettings);
ruka = generateLayers(
    "ruka", globalSettings);
alpine = generateLayers(
    "alpine", globalSettings);
golova = generateLayers(
    "golova", globalSettings);
zoo = generateLayers(
    "zoo", globalSettings);
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

function generateLayers(name, settings) {
    settings.id = name
    let object = {
        Layer: new L.LayerGroup(),
        Markers: new L.LayerGroup(),
        MiscMarkers: new L.LayerGroup(),
        Tiles: L.tileLayer(`./maps/${name}/{z}/{x}_{y}.png`, settings)
    }
    object.Tiles.addTo(object.Layer);
    object.Markers.addTo(object.Layer);
    object.MiscMarkers.addTo(object.Layer);
    return object

}

function switchAndFly(location = [0, 0], selectedMap = "") {
    let ifSub = false
    document.getElementById(selectedMap)
    if (selectedMap == "firebaseZ" || selectedMap == "firebaseZ_spawn" ||
        selectedMap == "dieMaschine" || selectedMap == "dieMaschine_underground") ifSub = true
    setMap(eval(selectedMap), document.getElementById(selectedMap, ifSub))
    map.flyTo(location, 4)
}