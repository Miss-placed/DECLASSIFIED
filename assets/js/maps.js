//Need to use var here because JS weirdness
var globalMapSettings = {
    prefix: false,
    attribution: `Want to help out? <a href="${repoDomain}">Github</a>. ||  See all <a href="${repoDomain}#contributors">Contributors</a>`,
    id: '',
    tileSize: 0,
    bounds: [
        [0, 0],
        [512, 512]
    ],
    padding: [1000, 1000],
    zoomSnap: 0.1
}

const mapLayers = generateMapLayers();

function generateMapLayers() {
    return {
        zoo: generateLayers(mapDetails.zoo.id, globalMapSettings),
        duga: generateLayers(mapDetails.duga.id, globalMapSettings),
        ruka: generateLayers(mapDetails.ruka.id, globalMapSettings),
        alpine: generateLayers(mapDetails.alpine.id, globalMapSettings),
        golova: generateLayers(mapDetails.golova.id, globalMapSettings),
        sanatorium: generateLayers(mapDetails.sanatorium.id, globalMapSettings),
        collateral: generateLayers(mapDetails.collateral.id, globalMapSettings),
        armada: generateLayers(mapDetails.armada.id, globalMapSettings),
        dieMaschine: generateLayers(mapDetails.dieMaschine.id, globalMapSettings),
        dieMaschine_underground: generateLayers(mapDetails.dieMaschineUnderground.id, globalMapSettings),
        firebaseZ: generateLayers(mapDetails.firebaseZ.id, globalMapSettings),
        firebaseZ_spawn: generateLayers(mapDetails.firebaseZSpawn.id, globalMapSettings),
        mauerDerToten: generateLayers(mapDetails.mauerDerToten.id, globalMapSettings),
        mauerDerToten_streets: generateLayers(mapDetails.mauerDerTotenStreets.id, globalMapSettings),
        forsaken: generateLayers(mapDetails.forsaken.id, globalMapSettings),
        forsaken_underground: generateLayers(mapDetails.forsakenUnderground.id, globalMapSettings),
    };
}

function generateLayers(name, settings) {
    settings.id = name

    let object = {
        Layer: new L.LayerGroup(),
        Markers: new L.LayerGroup(),
        MiscMarkers: new L.LayerGroup(),
        //Tiles: L.tileLayer(`./maps/${name}/${lightModeClass}{z}/{x}_{y}.png`, settings)
    }

    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    svgElement.setAttribute('viewBox', "0 0 512 512");

    //too slow...
    // let load = $.get(`http://127.0.0.1:5500/maps/firebaseZ_spawn/firebaseZ_spawn.svg`, function (data) {
    //     var svg = $(data).find('svg');
    //     svg.removeAttr('xmlns:a');
    // }, 'xml').then(() => {
    //     console.log(load.responseText)
    //     svgElement.innerHTML = load.responseText.slice('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">'.length, '</svg>'.length + load.responseText.length)
    // })

    svgElement.innerHTML = mapSVGs.globalStyle + mapSVGs[name]
    var imageBounds = [
        [0, 0],
        [512, 512]
    ];

    //object.Tiles.addTo(object.Layer);
    L.svgOverlay(svgElement, imageBounds).addTo(object.Layer);
    // L.imageOverlay(imageUrl, imageBounds).addTo(object.Layer);
    object.Markers.addTo(object.Layer);
    object.MiscMarkers.addTo(object.Layer);
    return object
}