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

export default function QuestsGamePage() {
	const { gameSlug } = useParams();
	const games = getOperationsGames('mainQuest');
	const gameTitle = games.find(game => game.slug === gameSlug)?.title ?? gameSlug ?? 'Unknown';
	const groups = gameSlug ? getOperationsMapGroups('mainQuest', gameSlug) : [];

	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Main Quest Maps"
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
						<Link to="/quests">Main Quest</Link>
						{' / '}
						{gameTitle}
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<Typography className="rounded-box filled text-sm">
				Choose a map dossier to view ordered quest steps, supplemental tasks, and spoilers.
			</Typography>
			{groups.map(group => (
				<div key={group.groupName} className="intel-group">
					<div className="intel-type-header rounded-box filled map-group-header">
						<Typography className="title text-md" variant="h5">
							{group.groupName}
						</Typography>
						<span className="intel-group-count">{group.count} Steps</span>
					</div>
					<div className="intel-dossier-grid map-group-grid">
						<div className="dossier-grid-item">
							<DossierCard
								title={group.groupName}
								subtitle={`${group.count} Steps${
									group.maps.length > 1
										? ` • ${group.maps.length} Areas`
										: ''
								}`}
								href={`/quests/${gameSlug}/${group.mapSlug}`}
								actionHref={`/${group.primaryMapId ?? group.maps[0]?.mapId ?? ''}`}
								actionLabel="Open map"
								openInNewTab
							/>
						</div>
					</div>
				</div>
			))}
		</Container>
	);
}
