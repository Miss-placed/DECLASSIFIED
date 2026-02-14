import { Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import '../../styles/intel-dossier.css';
import { getIntelRouteModel } from '../../data/intelSeo';
import { getIntelTranscript } from '../../data/intelTranscripts';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import { getMapGroupNameByMapId, getWikiIntelUrlForMap } from '../../helpers/wiki';

export default function IntelLeafPage() {
	const { gameSlug, mapSlug, intelSlug } = useParams();
	const intel = getIntelRouteModel().find(
		item =>
			item.gameSlug === gameSlug &&
			item.mapSlug === mapSlug &&
			item.intelSlug === intelSlug
	);

	if (!intel) return <p>Intel dossier unavailable.</p>;
	const mapRouteId = intel.mapId && IsValidMapId(intel.mapId) ? intel.mapId : undefined;
	const mapGroupName = getMapGroupNameByMapId(intel.mapId) ?? intel.mapTitle;
	const wikiIntelUrl = getWikiIntelUrlForMap(mapGroupName);

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader title={intel.title} subtitle={`${intel.mapTitle} • ${intel.type}`} />
			<div className="intel-dossier-actions">
				<Link to={`/${intel.id}`} target="_blank" rel="noreferrer">
					Open intel on map
				</Link>
				{mapRouteId ? (
					<Link to={`/${mapRouteId}`} target="_blank" rel="noreferrer">
						Open map
					</Link>
				) : null}
				<Link to={`/intel/${intel.gameSlug}/${intel.mapSlug}`}>Back to map dossier</Link>
			</div>
			<Typography className="rounded-box filled text-sm">{intel.desc}</Typography>
			<Typography sx={{ mt: 4 }} className="title text-md" variant="h5" gutterBottom>
				Transcript
			</Typography>
			{wikiIntelUrl ? (
				<div className="intel-dossier-actions">
					<a href={wikiIntelUrl} target="_blank" rel="noreferrer">
						View Intel on CoD Wiki
					</a>
				</div>
			) : null}
			<Typography className="rounded-box text-sm">{getIntelTranscript(intel.id)}</Typography>
		</Container>
	);
}
