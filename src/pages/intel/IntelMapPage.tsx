import { Link, useParams } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import '../../styles/intel-dossier.css';
import { getIntelRouteModel } from '../../data/intelSeo';

export default function IntelMapPage() {
	const { gameSlug, mapSlug } = useParams();
	const intel = getIntelRouteModel().filter(
		item => item.gameSlug === gameSlug && item.mapSlug === mapSlug
	);

	return (
		<section className="intel-dossier-page">
			<DossierHeader title="Intel List" subtitle={`${gameSlug} / ${mapSlug}`} />
			<ul>
				{intel.map(item => (
					<li key={item.id}>
						<Link to={`/intel/${gameSlug}/${mapSlug}/${item.intelSlug}`}>
							{item.title}
						</Link>{' '}
						({item.type})
					</li>
				))}
			</ul>
		</section>
	);
}
