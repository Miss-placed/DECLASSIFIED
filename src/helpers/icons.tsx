import ReactDOMServer from 'react-dom/server';
import { Faction } from '../data/IntelTypes';

export const intelIconInit = (faction: Faction, type: string) => {
	return ReactDOMServer.renderToString(
		<div>
			<img
				className="icon"
				src={`/assets/img/markers/${toSnakeCase(type)}.svg`}
				alt="Icon"
			/>
			<img
				className="background"
				src={`/assets/img/markers/${faction !== Faction.None ? faction.toLowerCase() : 'omega'}.png`}
				alt="Background"
			/>
		</div>
	);
};

export function toSnakeCase(str: string): string {
	return str.toLowerCase().replace(/\s+/g, '_');
}
