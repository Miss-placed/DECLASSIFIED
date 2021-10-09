var globalMapSettings = {
    prefix: false,
    attribution: `Want to help out? <a href="${repoDomain}">Github</a>. ||  See all <a href="${repoDomain}#contributors">Contributors</a>`,
    id: '',
    tileSize: 0,
    zoomOffset: -1,
    bounds: [
        [0, 0],
        [512, 512]
    ],
}

//Need to use var here because JS weirdness
var zoo = generateLayers(mapStrings.zoo, globalMapSettings);
var duga = generateLayers(mapStrings.duga, globalMapSettings);
var ruka = generateLayers(mapStrings.ruka, globalMapSettings);
var alpine = generateLayers(mapStrings.alpine, globalMapSettings);
var golova = generateLayers(mapStrings.golova, globalMapSettings);
var sanatorium = generateLayers(mapStrings.sanatorium, globalMapSettings);
var collateral = generateLayers(mapStrings.collateral, globalMapSettings);
var armada = generateLayers(mapStrings.armada, globalMapSettings);

var dieMaschine = generateLayers(mapStrings.dieMaschine, globalMapSettings);
var dieMaschine_underground = generateLayers(mapStrings.dieMaschineUnderground, globalMapSettings);
var firebaseZ = generateLayers(mapStrings.firebaseZ, globalMapSettings);
var firebaseZ_spawn = generateLayers(mapStrings.firebaseZSpawn, globalMapSettings);
var mauerDerToten = generateLayers(mapStrings.mauerDerToten, globalMapSettings);
var mauerDerToten_streets = generateLayers(mapStrings.mauerDerTotenStreets, globalMapSettings);
var forsaken = generateLayers(mapStrings.forsaken, globalMapSettings);
var forsaken_underground = generateLayers(mapStrings.forsakenUnderground, globalMapSettings);

function generateLayers(name, settings) {
    settings.id = name

    let object = {
        Layer: new L.LayerGroup(),
        Markers: new L.LayerGroup(),
        MiscMarkers: new L.LayerGroup(),
        //Tiles: L.tileLayer(`./maps/${name}/${lightModeClass}{z}/{x}_{y}.png`, settings)
    }
    var imageUrl = `./maps/${name}/${name}.svg`,
    imageBounds = [
      [0, 0],
      [512, 512]
    ];
    //object.Tiles.addTo(object.Layer);
    L.imageOverlay(imageUrl, imageBounds).addTo(object.Layer);
    object.Markers.addTo(object.Layer);
    object.MiscMarkers.addTo(object.Layer);
    return object
}