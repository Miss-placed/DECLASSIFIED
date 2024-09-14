import { Faction } from '../data/intel';
import ReactDOMServer from 'react-dom/server';

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
				src={`/assets/img/markers/${faction.toLowerCase()}.png`}
				alt="Background"
			/>
		</div>
	);
};
