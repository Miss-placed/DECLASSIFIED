import styled from '@emotion/styled';
import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { Link } from 'react-router-dom';
import {
	CoffeeIcon,
	DiscordIcon,
	GithubIcon,
} from '../components/SocialIcons';
import { MapIds } from '../components/MapControls/MapIds';

const HomePageContainer = styled(Container)`
    /* background: var(--clr-bg-lighter); */
    padding: 20px;
    border-radius: 8px;

    .MuiTypography-h6 {
        font-size: var(--fs-base);
    }

    .MuiTypography-body1 {
        font-size: var(--fs-sm);
    }

    .MuiTypography-root {
        color: var(--clr-white-d);
    }

    .header-container {
        margin-bottom: 24px;
    }

    .socials {
        justify-content: right;
        align-items: center;
    }

    //media queries for smaller screens
    @media (max-width: 600px) {
        .socials {
            justify-content: center;
            align-items: top;
            margin-bottom: 10px;
        }

        .header-container {
            gap: 0;
        }

		.main-title {
			font-size: var(--fs-lg) !important;
			white-space: normal;
			overflow-wrap: anywhere;
		}
    }

`

const HomePage: React.FC = () => {
    return (
        <HomePageContainer className="link-reset homepage-font">
            <Grid className='header-container' container spacing={2}>
                <Grid size={{ xs: 12, sm: 8 }}>
                    <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ height: '50px', margin: '10px' }} src="/favicon120.png" alt="Declassified Logo" />
                        <Typography variant="h4" className='main-title text-xl'>
                            Declassified
                        </Typography>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }} className='socials' sx={{ display: 'flex', }}>

                    <a
                        title="Join us on discord!"
                        href="https://discord.gg/4Xqj8XntFe"
                        target="_blank"
                        className="btn ui"
                        id="discord"
                        rel="noreferrer"
                    >
                        <DiscordIcon />
                    </a>
                    <a
                        title="Help us out on Github!"
                        href="https://github.com/Miss-placed/DECLASSIFIED"
                        target="_blank"
                        className="btn ui"
                        id="github"
                        rel="noreferrer"
                        style={{ alignContent: 'center' }}
                    >
                        <GithubIcon />
                    </a>
                    <a
                        title="Buy us a coffee!"
                        href="https://buymeacoffee.com/declassified.map"
                        target="_blank"
                        className="btn ui"
                        id="coffee"
                        rel="noreferrer"
                    >
                        <CoffeeIcon />
                    </a>

                </Grid>

            </Grid>
            <Box className='rounded-box filled text-sm'>
                <Typography className='title text' variant="h5" gutterBottom>
                    The #1 interactive map for CoD Zombies.
                </Typography>
                - Track Intel and Calling Cards.<br />
                - Discover Main Quest and side Easter Eggs and explore the maps.<br />
                - Always free, no ads, open & community driven, now & forever.<br />
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid size={{ xs: 12 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/operations">
                        <Box className='homepage-box filled' p={2}>
                            <Typography variant="h6">Operations Dossier Hub</Typography>
                            <Typography>Browse Side Eggs and Main Quest dossiers with map-level guides.</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Typography sx={{ mt: 4 }} className='title text-md' variant="h5" gutterBottom>
                Call of Duty: Black Ops 6
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/intel/black-ops-6">
                        <Box className='homepage-box filled' p={2}>
                            <Typography variant="h6">Intel Dossier Hub</Typography>
                            <Typography>Browse every Black Ops 6 intel dossier.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/eggs/black-ops-6">
                        <Box className='homepage-box filled' p={2}>
                            <Typography variant="h6">Side Eggs Hub</Typography>
                            <Typography>Browse Black Ops 6 side egg dossiers by map.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/quests/black-ops-6">
                        <Box className='homepage-box filled' p={2}>
                            <Typography variant="h6">Main Quest Hub</Typography>
                            <Typography>Browse Black Ops 6 main quest dossiers by map.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.reckoning}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Reckoning</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.shatteredVeil}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Shattered Veil</Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.libertyFalls}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Liberty Falls</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.terminusPrison}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Terminus</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.citadelle}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Citadelle Des Morts</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.tomb}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">The Tomb</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '150px' }}>
                    <Paper component={Link} target='blank' to="/challenge">
                        <Box className='homepage-box filled-btn' p={2}>
                            <Typography variant="h6">Calling Cards</Typography>
                            <Typography >New Version Coming Soon...</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '150px' }}>
                    <Paper component={Link} target='blank' to="https://nebula.emca.app/zombies">
                        <Box className='homepage-box filled-btn' p={2}>
                            <Typography variant="h6">Nebula Camo Tracker</Typography>
                            <Typography >Made by our friends ❤️</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Typography sx={{ mt: 4 }} className='title text-md' variant="h5" gutterBottom>
                Call of Duty: Black Ops Cold War
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/intel/black-ops-cold-war">
                        <Box className='homepage-box filled' p={2}>
                            <Typography variant="h6">Intel Dossier Hub</Typography>
                            <Typography>Browse every Black Ops Cold War intel dossier.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/eggs/black-ops-cold-war">
                        <Box className='homepage-box filled' p={2}>
                            <Typography variant="h6">Side Eggs Hub</Typography>
                            <Typography>Browse Cold War side egg dossiers by map.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/quests/black-ops-cold-war">
                        <Box className='homepage-box filled' p={2}>
                            <Typography variant="h6">Main Quest Hub</Typography>
                            <Typography>Browse Cold War main quest dossiers by map.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.dieMaschine}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Die Maschine</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.firebaseZ}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Firebase Z</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.mauerDerTotenStreets}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Mauer Der Toten</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.forsaken}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Forsaken</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '150px' }}>
                    <Paper component={Link} target='blank' to="/challenge">
                        <Box className='homepage-box filled-btn' p={2}>
                            <Typography variant="h6">Calling Cards</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '150px' }}>
                    <Paper component={Link} target='blank' to="https://coldwar.vercel.app/aether">
                        <Box className='homepage-box filled-btn' p={2}>
                            <Typography variant="h6">Cold War Camo Tracker</Typography>
                            <Typography >Made by our friends ❤️️</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </HomePageContainer>
    );
};

export default HomePage;
