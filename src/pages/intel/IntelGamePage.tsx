import { Link, useParams } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import '../../styles/intel-dossier.css';
import { getIntelRouteModel } from '../../data/intelSeo';

export default function IntelGamePage() {
	const { gameSlug } = useParams();
	const intel = getIntelRouteModel().filter(item => item.gameSlug === gameSlug);
	const maps = Array.from(new Map(intel.map(item => [item.mapSlug, item.mapTitle])).entries());

	return (
		<section className="intel-dossier-page">
			<DossierHeader title="Intel Maps" subtitle={`Game: ${gameSlug}`} />
			<ul>
				{maps.map(([mapSlug, mapTitle]) => (
					<li key={mapSlug}>
						<Link to={`/intel/${gameSlug}/${mapSlug}`}>{mapTitle}</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
