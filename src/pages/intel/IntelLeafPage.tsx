import { Container, Typography } from '@mui/material';
import { useLiveQuery } from 'dexie-react-hooks';
import { Link, useParams } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import '../../styles/intel-dossier.css';
import { getIntelRouteModel } from '../../data/intelSeo';
import { getIntelTranscript } from '../../data/intelTranscripts';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import { getMapGroupNameByMapId, getWikiIntelUrlForMap } from '../../helpers/wiki';
import { addCollectedIntel, deleteCollectedIntel } from '../../data/dataAccessLayer';
import { db } from '../../data/db';

export default function IntelLeafPage() {
	const { gameSlug, mapSlug, intelSlug } = useParams();
	const intel = getIntelRouteModel().find(
		item =>
			item.gameSlug === gameSlug &&
			item.mapSlug === mapSlug &&
			item.intelSlug === intelSlug
	);
	const intelId = intel?.id;
	const collectedEntry = useLiveQuery(
		() => (intelId ? db.intelCollected.get(intelId) : undefined),
		[intelId]
	);
	const isCollected = !!collectedEntry;

	if (!intel) return <p>Intel dossier unavailable.</p>;
	const mapRouteId = intel.mapId && IsValidMapId(intel.mapId) ? intel.mapId : undefined;
	const mapGroupName = getMapGroupNameByMapId(intel.mapId) ?? intel.mapTitle;
	const wikiIntelUrl = getWikiIntelUrlForMap(mapGroupName);

	return (
		<Container className={`intel-dossier-page link-reset ${isCollected ? 'intel-collected' : ''}`}>
			<DossierHeader title={intel.title} subtitle={`${intel.mapTitle} • ${intel.type}`} />
			<div className="intel-dossier-actions">
				<Link to={`/intel/${intel.gameSlug}/${intel.mapSlug}`}>Back to map dossier</Link>
			</div>
			<Typography className="rounded-box filled text-sm">{intel.desc}</Typography>
			<Typography sx={{ mt: 4 }} className="title text-md" variant="h5" gutterBottom>
				Transcript
			</Typography>
			<div className="intel-dossier-actions">
				<Link to={`/${intel.id}`} target="_blank" rel="noreferrer">
					Open intel on map
				</Link>
				<button
					type="button"
					onClick={() =>
						isCollected
							? deleteCollectedIntel([intel.id])
							: addCollectedIntel([intel.id])
					}
				>
					{isCollected ? 'Classify' : 'Declassify'}
				</button>
				{wikiIntelUrl ? (
					<a href={wikiIntelUrl} target="_blank" rel="noreferrer">
						View Intel on CoD Wiki
					</a>
				) : null}
			</div>
			<Typography className="rounded-box text-sm">{getIntelTranscript(intel.id)}</Typography>
		</Container>
	);
}
