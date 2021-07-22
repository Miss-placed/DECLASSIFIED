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

var zoo, ruka, duga, alpine, golova, sanatorium, dieMaschine, dieMaschine_underground, firebaseZ, firebaseZ_spawn;
zoo = generateLayers(
    mapStrings.zoo, globalSettings);
duga = generateLayers(
    mapStrings.duga, globalSettings);
ruka = generateLayers(
    mapStrings.ruka, globalSettings);
alpine = generateLayers(
    mapStrings.alpine, globalSettings);
golova = generateLayers(
    mapStrings.golova, globalSettings);
sanatorium = generateLayers(
    mapStrings.sanatorium, globalSettings);
dieMaschine = generateLayers(
    mapStrings.dieMaschine, globalSettings);
dieMaschine_underground = generateLayers(
    mapStrings.dieMaschineUnderground, globalSettings);
firebaseZ = generateLayers(
    mapStrings.firebaseZ, globalSettings);
firebaseZ_spawn = generateLayers(
    mapStrings.firebaseZSpawn, globalSettings);

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
    if (selectedMap == mapStrings.firebaseZ || selectedMap == mapStrings.firebaseZSpawn ||
        selectedMap == mapStrings.dieMaschine || selectedMap == mapStrings.dieMaschineUnderground) ifSub = true
    setMap(selectedMap, document.getElementById(selectedMap), ifSub)
    setLastVisitedMap(selectedMap)
    map.flyTo(location, 4)
}