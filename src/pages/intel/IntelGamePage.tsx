import { Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import { Game, MapGroupings } from '../../components/MapControls/types';
import { getIntelRouteModel } from '../../data/intelSeo';
import '../../styles/intel-dossier.css';
import DossierCard from './components/DossierCard';
import DossierHeader from './components/DossierHeader';

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
				const maps = group.mapLayers
					.map(layer => (layer.id ? mapMetaById.get(layer.id) : undefined))
					.filter((entry): entry is { title: string; mapId: string; mapSlug: string } => !!entry);
				return { groupName: group.mapName, maps };
			})
			.filter(group => group.maps.length > 0)
		: [];

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader title="Intel Maps" subtitle={gameTitle} />
			<div className="intel-dossier-actions">
				<Link to="/">Back to homepage</Link>
			</div>
			<Typography className="rounded-box filled text-sm">
				Select a map hub to view intel dossiers. Open the map to jump into the interactive tracker.
			</Typography>
			{groupedMaps.map(group => (
				<div key={group.groupName} className="intel-group">
					<div className="intel-type-header rounded-box filled map-group-header">
						<Typography className="title text-md" variant="h5">
							{group.groupName}
						</Typography>
					</div>
					<div className="intel-dossier-grid map-group-grid">
						{group.maps.map(mapInfo => {
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
						})}
					</div>
				</div>
			))}
		</Container>
	);
}
