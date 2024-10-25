import ReactDOMServer from 'react-dom/server';
import { Faction } from '../data/intel';

export const intelIconInit = (faction: Faction, type: string) => {
	return ReactDOMServer.renderToString(
		<div>
			<img
				className="icon"
				src={`/assets/img/markers/${type.toLowerCase()}.png`}
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
