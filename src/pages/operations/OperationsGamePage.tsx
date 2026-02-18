import { Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import { ExternalLinkIcon, HomeIcon } from '../../components/SocialIcons';
import {
	getOperationsGames,
	getOperationsMapGroups,
} from '../../data/operationsSeo';
import { getWikiMapUrlForMap } from '../../helpers/wiki';
import '../../styles/intel-dossier.css';
import DossierHeader from '../intel/components/DossierHeader';
import IntelQuickLinks from '../intel/components/IntelQuickLinks';

interface CombinedMapGroup {
	groupName: string;
	mapSlug: string;
	primaryMapId?: string;
	sideEggCount: number;
	mainQuestCount: number;
}

export default function OperationsGamePage() {
	const { gameSlug } = useParams();
	const games = getOperationsGames();
	const game = games.find(current => current.slug === gameSlug);
	const gameTitle = game?.title ?? gameSlug ?? 'Unknown Game';

	const groups: CombinedMapGroup[] = gameSlug && game
		? (() => {
				const sideEggGroups = getOperationsMapGroups('sideEgg', gameSlug);
				const questGroupsBySlug = new Map(
					getOperationsMapGroups('mainQuest', gameSlug).map(group => [
						group.mapSlug,
						group,
					])
				);
				return sideEggGroups.map(group => ({
					groupName: group.groupName,
					mapSlug: group.mapSlug,
					primaryMapId: group.primaryMapId,
					sideEggCount: group.count,
					mainQuestCount: questGroupsBySlug.get(group.mapSlug)?.count ?? 0,
				}));
			})()
		: [];

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title={`${gameTitle} Operations`}
				kicker="DECLASSIFIED OPERATIONS DOSSIER"
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
						{gameTitle}
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<Typography className="rounded-box filled text-sm">
				Select a map group, then open either the Side Eggs or Main Quest dossier.
			</Typography>
			{game ? (
				<div className="dossier-game-groups-grid">
					{groups.map(group => {
						const wikiUrl = getWikiMapUrlForMap(group.groupName);
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
								</div>
								<div className="operation-map-group-links">
									{group.sideEggCount > 0 ? (
										<Link
											className="operation-map-group-link"
											to={`/eggs/${gameSlug}/${group.mapSlug}`}
										>
											Eggs ({group.sideEggCount})
										</Link>
									) : (
										<span className="operation-map-group-link operation-map-group-link-disabled">
											Eggs ({group.sideEggCount})
										</span>
									)}
									{group.mainQuestCount > 0 ? (
										<Link
											className="operation-map-group-link"
											to={`/quests/${gameSlug}/${group.mapSlug}`}
										>
											Quests ({group.mainQuestCount})
										</Link>
									) : (
										<span className="operation-map-group-link operation-map-group-link-disabled">
											Quests ({group.mainQuestCount})
										</span>
									)}
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<Typography className="rounded-box filled text-sm">
					No operations game was found for this route.
				</Typography>
			)}
		</Container>
	);
}
