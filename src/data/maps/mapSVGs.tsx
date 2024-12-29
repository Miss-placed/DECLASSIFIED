import { blackOps6Maps } from './blackOps6Maps';
import { coldWarMaps } from './coldWarMaps';
import { coldWarOutbreakMaps } from './coldWarOutbreakMaps';

export const allGameMapSVGs = {
	...coldWarOutbreakMaps,
	...coldWarMaps,
	//#TODO: set up styling to use global colors instead of local colors.
	...blackOps6Maps
};
