import { Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import { Game, MapGroupings } from '../../components/MapControls/types';
import { getIntelRouteModel, slugifyIntel } from '../../data/intelSeo';
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
				const mapIds = Array.from(mapIdSet);
				const primaryMapId = mapIds[0];
				return {
					groupName: group.mapName,
					mapSlug: slugifyIntel(group.mapName),
					mapCount: mapIds.length,
					primaryMapId,
					intelCount,
				};
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
						{gameTitle}
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<div className="dossier-game-groups-grid">
				{groupedMaps.map(group => {
					const wikiUrl = getWikiIntelUrlForMap(group.groupName);
					return (
						<div key={group.groupName} className="intel-group dossier-game-group">
						<div className="intel-type-header rounded-box filled map-group-header">
							<div className="map-group-title">
								<Typography className="title text-md" variant="h5">
									{group.groupName}
								</Typography>
								<div className="map-group-actions">
									{wikiUrl ? (
										<a
											className="map-group-action"
											href={wikiUrl}
											target="_blank"
											rel="noreferrer"
											aria-label={`Open ${group.groupName} wiki`}
										>
											<ExternalLinkIcon />
											Wiki
										</a>
									) : null}
									{group.primaryMapId && IsValidMapId(group.primaryMapId) ? (
										<Link
											className="map-group-action"
											to={`/${group.primaryMapId}`}
											target="_blank"
											rel="noreferrer"
										>
											Open map
										</Link>
									) : null}
								</div>
							</div>
							<span className="intel-group-count">{group.intelCount} Intel</span>
						</div>
						<div className="intel-dossier-grid map-group-grid">
							{group.intelCount > 0 ? (
								<div className="dossier-grid-item">
									<DossierCard
										title={group.groupName}
										subtitle={`${group.intelCount} Intel${
											group.mapCount > 1 ? ` • ${group.mapCount} Areas` : ''
										}`}
										href={`/intel/${gameSlug}/${group.mapSlug}`}
										hideTitle
									/>
								</div>
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
