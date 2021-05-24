let mapID = "duga";
let duga = L.map("duga").setView([51.505, -0.09], 1);


L.tileLayer(`./maps/duga/{z}/{x}_{y}.png`, {
    maxZoom: 3,
    minZoom: 0,
    tileSize: (1024, 512),
    zoomOffset: -1,
    noWrap: true
}).addTo(duga);
let ruka = L.map("ruka").setView([51.505, -0.09], 1);


L.tileLayer(`./maps/ruka/{z}/{y}_{x}.png`, {
    maxZoom: 3,
    minZoom: 0,
    tileSize: (1024, 512),
    zoomOffset: -1,
    noWrap: true
}).addTo(ruka);