import { useParams } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import '../../styles/intel-dossier.css';
import { getIntelRouteModel } from '../../data/intelSeo';
import { getIntelTranscript } from '../../data/intelTranscripts';

export default function IntelLeafPage() {
	const { gameSlug, mapSlug, intelSlug } = useParams();
	const intel = getIntelRouteModel().find(
		item =>
			item.gameSlug === gameSlug &&
			item.mapSlug === mapSlug &&
			item.intelSlug === intelSlug
	);

	if (!intel) return <p>Intel dossier unavailable.</p>;

	return (
		<section className="intel-dossier-page">
			<DossierHeader title={intel.title} subtitle={`${intel.mapTitle} • ${intel.type}`} />
			<p>{intel.desc}</p>
			<h2>Transcript</h2>
			<p>{getIntelTranscript(intel.id)}</p>
		</section>
	);
}
