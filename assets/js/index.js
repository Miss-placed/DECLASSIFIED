let mapID = "duga";
let duga = L.map("duga").setView([1, 1], 3);
L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    maxZoom: 3,
    minZoom: 0,
    tileSize: 512,
    zoomOffset: -1,
    noWrap: true
}).addTo(duga);
let ruka = L.map("ruka").setView([51.505, -0.09], 1);

var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.tileLayer(`./maps/ruka/{z}/{y}_{x}.png`, {
    maxZoom: 3,
    minZoom: 0,
    tileSize: (1024, 512),
    zoomOffset: -1,
    noWrap: true
}).addTo(ruka);

L.marker([10, 0], { icon: maxisIcon }).addTo(duga)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);
L.marker([-10, 0], { icon: omegaIcon }).addTo(duga)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);
L.marker([0, 10], { icon: darkAetherIcon }).addTo(duga)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);
L.marker([0, -10], { icon: requiemIcon }).addTo(duga)
    .bindPopup(` <h1>${poi.REDACTED[0].Audio[1].name}</h1> ${poi.REDACTED[0].Audio[1].desc}`);