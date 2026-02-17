import { Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { HomeIcon } from '../../components/SocialIcons';
import {
	getOperationsGames,
	getOperationsMapGroups,
} from '../../data/operationsSeo';
import '../../styles/intel-dossier.css';
import DossierCard from '../intel/components/DossierCard';
import DossierHeader from '../intel/components/DossierHeader';
import IntelQuickLinks from '../intel/components/IntelQuickLinks';

const githubHelpLinkForMapGroup = (gameTitle: string, mapGroupTitle: string) =>
	`https://github.com/Miss-placed/DECLASSIFIED/issues/new?title=${encodeURIComponent(
		`[Side Eggs] ${gameTitle} - ${mapGroupTitle} dossier missing data`
	)}`;

export default function EggsGamePage() {
	const { gameSlug } = useParams();
	const games = getOperationsGames('sideEgg');
	const gameTitle = games.find(game => game.slug === gameSlug)?.title ?? gameSlug ?? 'Unknown';
	const groups = gameSlug ? getOperationsMapGroups('sideEgg', gameSlug) : [];

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Side Eggs Maps"
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
						<Link to="/operations">Operations Hub</Link>
						{' / '}
						<Link to="/eggs">Side Eggs</Link>
						{' / '}
						{gameTitle}
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<Typography className="rounded-box filled text-sm">
				Choose a map dossier to view grouped Side Egg steps and cross-links into Main Quest.
			</Typography>
			<div className="dossier-game-groups-grid">
				{groups.map(group => (
					<div key={group.groupName} className="intel-group dossier-game-group">
						<div className="intel-type-header rounded-box filled map-group-header">
							<Typography className="title text-md" variant="h5">
								{group.groupName}
							</Typography>
							<span className="intel-group-count">{group.count} Steps</span>
						</div>
						<div className="intel-dossier-grid map-group-grid">
							{group.count > 0 ? (
								<div className="dossier-grid-item">
									<DossierCard
										title={group.groupName}
										subtitle={`${group.count} Steps${
											group.maps.length > 1
												? ` • ${group.maps.length} Areas`
												: ''
										}`}
										href={`/eggs/${gameSlug}/${group.mapSlug}`}
										actionHref={`/${group.primaryMapId ?? group.maps[0]?.mapId ?? ''}`}
										actionLabel="Open map"
										openInNewTab
									/>
								</div>
							) : (
								<div className="dossier-grid-item">
									<div className="dossier-card dossier-placeholder-card">
										<div className="homepage-box" style={{ padding: '16px' }}>
											<Typography variant="h6">Coming Soon</Typography>
											<Typography>
												No side egg dossier items yet for {group.groupName}.
											</Typography>
										</div>
										<div className="intel-dossier-actions">
											<a
												href={githubHelpLinkForMapGroup(
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
				))}
			</div>
		</Container>
	);
}
