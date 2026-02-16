import { Container, Typography } from '@mui/material';
import { useLiveQuery } from 'dexie-react-hooks';
import { Link, useParams } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import IntelQuickLinks from './components/IntelQuickLinks';
import '../../styles/intel-dossier.css';
import { getIntelRouteModel } from '../../data/intelSeo';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import DossierCard from './components/DossierCard';
import { IntelType } from '../../data/IntelTypes';
import { toSnakeCase } from '../../helpers/icons';
import { ExternalLinkIcon, HomeIcon } from '../../components/SocialIcons';
import { getMapGroupNameByMapId, getWikiIntelUrlForMap } from '../../helpers/wiki';
import { db } from '../../data/db';

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
	const collectedIntel = useLiveQuery(async () => db.intelCollected.toArray(), []);
	const collectedIntelSet = new Set(
		(collectedIntel ?? []).map(item => item.intelId)
	);
	const intelTypeOrder = Object.values(IntelType) as IntelType[];
	const intelGroups = intelTypeOrder
		.map(type => ({
			type,
			items: intel.filter(item => item.type === type),
		}))
		.filter(group => group.items.length > 0);

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Intel List"
				subtitle={
					<>
						<Link
							to="/"
							className="dossier-breadcrumb-home"
							aria-label="Home"
							title="Home"
						>
							<HomeIcon />
						</Link>
						{' / '}
						<Link to="/intel">Intel Hub</Link>
						{' / '}
						{gameSlug ? <Link to={`/intel/${gameSlug}`}>{gameTitle}</Link> : gameTitle}
						{' / '}
						{mapTitle}
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<div className="intel-dossier-actions">
				{mapRouteId ? (
					<Link to={`/${mapRouteId}`} target="_blank" rel="noreferrer">
						Open map
					</Link>
				) : null}
				{wikiIntelUrl ? (
					<a className="intel-action-with-icon" href={wikiIntelUrl} target="_blank" rel="noreferrer">
						<ExternalLinkIcon />
						Wiki
					</a>
				) : null}
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
						<span className="intel-group-count">{group.items.length} Intel</span>
					</div>
					<div className="intel-dossier-grid map-intel-grid">
						{group.items.map(item => (
							<div key={item.id} className="dossier-grid-item">
								<DossierCard
									title={item.title}
									href={`/intel/${gameSlug}/${mapSlug}/${item.intelSlug}`}
									actionHref={`/${item.id}`}
									actionLabel="Open on map"
									openInNewTab
									isCollected={collectedIntelSet.has(item.id)}
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</Container>
	);
}
