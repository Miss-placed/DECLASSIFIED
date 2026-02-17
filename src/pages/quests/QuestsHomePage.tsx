import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../../components/SocialIcons';
import { getOperationsGames } from '../../data/operationsSeo';
import '../../styles/intel-dossier.css';
import DossierHeader from '../intel/components/DossierHeader';
import IntelQuickLinks from '../intel/components/IntelQuickLinks';

export default function QuestsHomePage() {
	const games = getOperationsGames('mainQuest');
	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Main Quest Dossiers"
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
						Main Quest
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<Typography className="rounded-box filled text-sm">
				Select a game hub to browse Main Quest routes grouped by map and step ordering.
			</Typography>
			<div className="intel-type-header rounded-box filled map-group-header">
				<Typography className="title text-md" variant="h5">
					Game Hubs
				</Typography>
			</div>
			<Grid container spacing={2} className="map-group-grid">
				{games.map(game => (
					<Grid key={game.slug} size={{ xs: 12, sm: 6 }} sx={{ height: '120px' }}>
						<Paper component={Link} to={`/quests/${game.slug}`}>
							<Box className="homepage-box" p={2}>
								<Typography variant="h6">{game.title}</Typography>
								<Typography>{game.count} main quest markers indexed.</Typography>
							</Box>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
