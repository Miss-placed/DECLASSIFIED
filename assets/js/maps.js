var globalMapSettings = {
    prefix: false,
    attribution: `Want to help out? <a href="${app.repoDomain}">Github</a>. ||  See all <a href="${app.repoDomain}#contributors">Contributors</a>`,
    id: '',
    tileSize: 512,
    zoomOffset: -1,
    bounds: [
        [-256, 0],
        [768, 256]
    ],
}

var zoo, ruka, duga, alpine, golova, sanatorium, dieMaschine, dieMaschine_underground, firebaseZ, firebaseZ_spawn;
zoo = generateLayers(mapStrings.zoo, globalMapSettings);
duga = generateLayers(mapStrings.duga, globalMapSettings);
ruka = generateLayers(mapStrings.ruka, globalMapSettings);
alpine = generateLayers(mapStrings.alpine, globalMapSettings);
golova = generateLayers(mapStrings.golova, globalMapSettings);
sanatorium = generateLayers(mapStrings.sanatorium, globalMapSettings);
collateral = generateLayers(mapStrings.collateral, globalMapSettings);
armada = generateLayers(mapStrings.armada, globalMapSettings);

dieMaschine = generateLayers(mapStrings.dieMaschine, globalMapSettings);
dieMaschine_underground = generateLayers(mapStrings.dieMaschineUnderground, globalMapSettings);
firebaseZ = generateLayers(mapStrings.firebaseZ, globalMapSettings);
firebaseZ_spawn = generateLayers(mapStrings.firebaseZSpawn, globalMapSettings);
mauerDerToten = generateLayers(mapStrings.mauerDerToten, globalMapSettings);
mauerDerToten_streets = generateLayers(mapStrings.mauerDerTotenStreets, globalMapSettings);

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