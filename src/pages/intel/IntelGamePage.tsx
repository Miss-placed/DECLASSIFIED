import { Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import { Game, MapGroupings } from '../../components/MapControls/types';
import { getIntelRouteModel } from '../../data/intelSeo';
import '../../styles/intel-dossier.css';
import { getWikiIntelUrlForMap } from '../../helpers/wiki';
import { ExternalLinkIcon, HomeIcon } from '../../components/SocialIcons';
import DossierCard from './components/DossierCard';
import DossierHeader from './components/DossierHeader';
import IntelQuickLinks from './components/IntelQuickLinks';

const githubHelpLinkForMapGroup = (
	section: string,
	gameTitle: string,
	mapGroupTitle: string
) =>
	`https://github.com/Miss-placed/DECLASSIFIED/issues/new?title=${encodeURIComponent(
		`[${section}] ${gameTitle} - ${mapGroupTitle} dossier missing data`
	)}`;

export default function IntelGamePage() {
	const { gameSlug } = useParams();
	const intel = getIntelRouteModel().filter(item => item.gameSlug === gameSlug);
	const gameTitle = intel[0]?.gameTitle ?? gameSlug ?? 'Unknown Game';
	const gameKey =
		gameSlug === 'black-ops-6'
			? Game.bo6
			: gameSlug === 'black-ops-cold-war'
				? Game.coldWar
				: undefined;
	const mapMetaById = new Map<
		string,
		{ title: string; mapId: string; mapSlug: string }
	>();
	intel.forEach(item => {
		if (item.mapId) {
			mapMetaById.set(item.mapId, {
				title: item.mapTitle,
				mapId: item.mapId,
				mapSlug: item.mapSlug,
			});
		}
	});
	const groupedMaps = gameKey
		? Object.values(MapGroupings)
			.filter(group => group.game === gameKey)
			.map(group => {
				const mapIdSet = new Set(
					group.mapLayers
						.map(layer => layer.id)
						.filter((id): id is string => !!id)
				);
				const intelCount = intel.filter(item => item.mapId && mapIdSet.has(item.mapId))
					.length;
				const maps = group.mapLayers
					.map(layer => (layer.id ? mapMetaById.get(layer.id) : undefined))
					.filter((entry): entry is { title: string; mapId: string; mapSlug: string } => !!entry);
				return { groupName: group.mapName, maps, intelCount };
			})
		: [];

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Intel Maps"
				subtitle={
					<>
						<Link
							to="/"
							className="dossier-breadcrumb-home"
							aria-label="Intel hubs"
							title="Home"
						>
							<HomeIcon />
						</Link>
						{' / '}
						<Link to="/intel">Intel Hub</Link>
						{' / '}
						{gameTitle}
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<Typography className="rounded-box filled text-sm">
				Select a map hub to view intel dossiers. Open the map to jump into the interactive tracker.
			</Typography>
			<div className="dossier-game-groups-grid">
				{groupedMaps.map(group => {
					const wikiUrl = getWikiIntelUrlForMap(group.groupName);
					return (
						<div key={group.groupName} className="intel-group dossier-game-group">
							<div className="intel-type-header rounded-box filled map-group-header">
								<Typography className="title text-md" variant="h5">
									{group.groupName}
								</Typography>
								{wikiUrl ? (
									<a
										className="map-group-wiki-link"
										href={wikiUrl}
										target="_blank"
										rel="noreferrer"
										aria-label={`Open ${group.groupName} wiki`}
									>
										<ExternalLinkIcon />
										Wiki
									</a>
								) : null}
							<span className="intel-group-count">{group.intelCount} Intel</span>
						</div>
						<div className="intel-dossier-grid map-group-grid">
							{group.intelCount > 0 ? (
								group.maps.map(mapInfo => {
									const mapRouteId =
										mapInfo.mapId && IsValidMapId(mapInfo.mapId) ? mapInfo.mapId : undefined;
									return (
										<div key={mapInfo.mapSlug} className="dossier-grid-item">
											<DossierCard
												title={mapInfo.title}
												href={`/intel/${gameSlug}/${mapInfo.mapSlug}`}
												actionHref={mapRouteId ? `/${mapRouteId}` : undefined}
												actionLabel="Open map"
												openInNewTab
											/>
										</div>
									);
								})
							) : (
								<div className="dossier-grid-item">
									<div className="dossier-card dossier-placeholder-card">
										<div className="homepage-box" style={{ padding: '16px' }}>
											<Typography variant="h6">Coming Soon</Typography>
											<Typography>
												No intel dossier items yet for {group.groupName}.
											</Typography>
										</div>
										<div className="intel-dossier-actions">
											<a
												href={githubHelpLinkForMapGroup(
													'Intel',
													gameTitle,
													group.groupName
												)}
												target="_blank"
												rel="noreferrer"
											>
												Help on GitHub
											</a>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				);
				})}
			</div>
		</Container>
	);
}
