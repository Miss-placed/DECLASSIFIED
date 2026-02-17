import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../../components/SocialIcons';
import '../../styles/intel-dossier.css';
import DossierHeader from '../intel/components/DossierHeader';
import IntelQuickLinks from '../intel/components/IntelQuickLinks';

export default function OperationsHomePage() {
	return (
		<Container className="intel-dossier-page link-reset">
			<DossierHeader
				title="Operations Dossier Archive"
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
						Operations Hub
					</>
				}
				actions={<IntelQuickLinks />}
			/>
			<Typography className="rounded-box filled text-sm">
				Browse map-based dossiers for Side Eggs and Main Quest steps. Every entry links
				back to the interactive map.
			</Typography>
			<div className="intel-type-header rounded-box filled map-group-header">
				<Typography className="title text-md" variant="h5">
					Operations Sections
				</Typography>
			</div>
			<Grid container spacing={2} className="map-group-grid">
				<Grid size={{ xs: 12, sm: 6 }} sx={{ height: '120px' }}>
					<Paper component={Link} to="/eggs">
						<Box className="homepage-box" p={2}>
							<Typography variant="h6">Side Eggs Dossier Hub</Typography>
							<Typography>Map-grouped side egg routes and related intel links.</Typography>
						</Box>
					</Paper>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }} sx={{ height: '120px' }}>
					<Paper component={Link} to="/quests">
						<Box className="homepage-box" p={2}>
							<Typography variant="h6">Main Quest Dossier Hub</Typography>
							<Typography>Ordered quest routes, boss steps, weapons, and spoilers.</Typography>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}
