import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import DossierHeader from './components/DossierHeader';
import '../../styles/intel-dossier.css';

const games = [
	{ slug: 'black-ops-6', title: 'Black Ops 6' },
	{ slug: 'black-ops-cold-war', title: 'Black Ops Cold War' }
];

export default function IntelHomePage() {
	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Intel Dossier Archive"
				subtitle="Static SEO pages are generated under /public/intel for crawler-friendly previews."
			/>
			<Typography className="rounded-box filled text-sm">
				Browse each game hub for map dossiers and individual intel pages. Each dossier links back to the interactive map.
			</Typography>
			<Typography sx={{ mt: 4 }} className="title text-md" variant="h5" gutterBottom>
				Intel Hubs
			</Typography>
			<Grid container spacing={2}>
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
