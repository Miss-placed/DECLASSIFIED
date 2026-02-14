import { Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import '../../styles/intel-dossier.css';
import { getIntelRouteModel } from '../../data/intelSeo';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import DossierCard from './components/DossierCard';
import { IntelType } from '../../data/IntelTypes';
import { toSnakeCase } from '../../helpers/icons';
import { getMapGroupNameByMapId, getWikiIntelUrlForMap } from '../../helpers/wiki';

export default function IntelMapPage() {
	const { gameSlug, mapSlug } = useParams();
	const intel = getIntelRouteModel().filter(
		item => item.gameSlug === gameSlug && item.mapSlug === mapSlug
	);
	const gameTitle = intel[0]?.gameTitle ?? gameSlug ?? 'Unknown Game';
	const mapTitle = intel[0]?.mapTitle ?? mapSlug ?? 'Unknown Map';
	const mapId = intel[0]?.mapId;
	const mapRouteId = mapId && IsValidMapId(mapId) ? mapId : undefined;
	const mapGroupName = getMapGroupNameByMapId(mapId) ?? mapTitle;
	const wikiIntelUrl = getWikiIntelUrlForMap(mapGroupName);
	const intelTypeOrder = Object.values(IntelType) as IntelType[];
	const intelGroups = intelTypeOrder
		.map(type => ({
			type,
			items: intel.filter(item => item.type === type),
		}))
		.filter(group => group.items.length > 0);

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader title="Intel List" subtitle={`${gameTitle} / ${mapTitle}`} />
			<div className="intel-dossier-actions">
				{mapRouteId ? (
					<Link to={`/${mapRouteId}`} target="_blank" rel="noreferrer">
						Open map
					</Link>
				) : null}
				{wikiIntelUrl ? (
					<a href={wikiIntelUrl} target="_blank" rel="noreferrer">
						View Intel on CoD Wiki
					</a>
				) : null}
				{gameSlug ? <Link to={`/intel/${gameSlug}`}>Back to game hub</Link> : null}
			</div>
			{intelGroups.map(group => (
				<div key={group.type} className="intel-group">
					<div className="intel-type-header rounded-box filled">
						<img
							className="intel-type-icon"
							src={`/assets/img/markers/${toSnakeCase(group.type)}.svg`}
							alt={`${group.type} icon`}
							loading="lazy"
						/>
						<Typography className="title text-md" variant="h5">
							{group.type}
						</Typography>
					</div>
					<div className="intel-dossier-grid">
						{group.items.map(item => (
							<div key={item.id} className="dossier-grid-item">
								<DossierCard
									title={item.title}
									href={`/intel/${gameSlug}/${mapSlug}/${item.intelSlug}`}
									actionHref={`/${item.id}`}
									actionLabel="Open on map"
									openInNewTab
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</Container>
	);
}
