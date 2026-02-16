import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../../components/SocialIcons';
import '../../styles/intel-dossier.css';
import DossierHeader from './components/DossierHeader';
import IntelQuickLinks from './components/IntelQuickLinks';

const games = [
	{ slug: 'black-ops-6', title: 'Black Ops 6' },
	{ slug: 'black-ops-cold-war', title: 'Black Ops Cold War' }
];

export default function IntelHomePage() {
	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Intel Dossier Archive"
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
						Intel Hub
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<Typography className="rounded-box filled text-sm">
				Browse each game hub for map dossiers and individual intel pages. Each dossier links back to the interactive map.
			</Typography>
			<div className="intel-type-header rounded-box filled map-group-header">
				<Typography className="title text-md" variant="h5">
					Intel Hubs
				</Typography>
			</div>
			<Grid container spacing={2} className="map-group-grid">
				{games.map(game => (
					<Grid key={game.slug} size={{ xs: 12, sm: 6 }} sx={{ height: '120px' }}>
						<Paper component={Link} to={`/intel/${game.slug}`}>
							<Box className="homepage-box" p={2}>
								<Typography variant="h6">{game.title}</Typography>
								<Typography>Explore map hubs and dossiers.</Typography>
							</Box>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
