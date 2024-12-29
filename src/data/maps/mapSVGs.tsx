import { LatLngBoundsExpression } from 'leaflet';
import { blackOps6Maps } from './blackOps6Maps';
import { coldWarMaps } from './coldWarMaps';
import { coldWarOutbreakMaps } from './coldWarOutbreakMaps';

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

export const allGameMapSVGs = {
	...coldWarOutbreakMaps,
	...coldWarMaps,
	//#TODO: set up styling to use global colors instead of local colors.
	...blackOps6Maps
};
