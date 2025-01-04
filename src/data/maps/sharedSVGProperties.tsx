import { LatLngBoundsExpression } from "leaflet";


export const ImageBounds: LatLngBoundsExpression = [
    [0, 0],
    [512, 512],
];

export const globalStyle = `  
.no-fill{fill:none;}
.no-stroke{stroke:none;}

.border-fill{fill:var(--svg-border);}
.road-fill{fill:var(--svg-roads);}
.background-fill{fill:var(--svg-background);}
.field-fill{fill:var(--svg-field)}
.feature-fill{fill:var(--svg-features);}
.building-fill{fill:var(--svg-buildings);}

.border-stroke{stroke:var(--svg-border);}
.road-stroke{stroke:var(--svg-roads);}
.background-stroke{stroke:var(--svg-background);}
.field-stroke{stroke:var(--svg-field)}
.feature-stroke{stroke:var(--svg-features);}
.building-stroke{stroke:var(--svg-buildings);}
`;
