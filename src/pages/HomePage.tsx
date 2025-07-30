import styled from '@emotion/styled';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { Link } from 'react-router-dom';
import { MapIds } from '../components/MapControls/MapIds';

const HomePageContainer = styled(Container)`
    .text-sm {
        font-size: var(--fs-sm) !important;
    }
    .text-base {
        font-size: var(--fs-base) !important;
    }
    .text-md {
        font-size: var(--fs-md) !important;
    }
    .text-lg {
        font-size: var(--fs-lg) !important;
    }
    .text-xl {
        font-size: var(--fs-xl) !important;
    }
    .text-xxl {
        font-size: var(--fs-xxl) !important;
    }
    /* background: var(--clr-bg-lighter); */
    padding: 20px;
    border-radius: 8px;
    
    a {
        text-decoration: none;
    }
    .homepage-box {
        border-radius: 8px;
        border: 1px solid;
        border-color: var(--clr-grey-d);
        padding: 10px;
        height: 100%;
        text-align: center;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &:hover {
            background: var(--clr-bg);
            color: var(--clr-white-d);
        }
    }

    .filled {
        background: var(--clr-bg);
        color: var(--clr-white-d);
    }

    .filled-btn {
        background: var(--clr-bg);
        color: var(--clr-white-d);
        &:hover {
            background: none;
            color: var(--clr-white-d);
        }
    }

    .MuiTypography-h6 {
        font-size: var(--fs-base);
    }

    .MuiTypography-body1 {
        font-size: var(--fs-sm);
    }

    .MuiTypography-root {
        color: var(--clr-white-d);
    }

    .rounded-box {
        border-radius: 8px;
        border: 1px solid;
        border-color: var(--clr-grey-d);
        padding: 10px;
        height: 100%;
        width: 100%;
    }

    .header-container {
        margin-bottom: 24px;
    }

    .title,.main-title {
        font-weight: 700;
        align-content: center;
        text-wrap: pretty;
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
    }

`

const HomePage: React.FC = () => {
    return (
        <HomePageContainer>
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
                        <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>{' '}
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
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{' '}
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
            <Typography className='rounded-box filled text-sm'>
                The #1 interactive map for CoD Zombies. <br />
                Track Intel and Calling Cards. Discover Main Quest and side Easter Eggs and explore the maps.<br />
                Always free, no ads, totally open source. Now and forever.
            </Typography>
            <Typography sx={{ mt: 4 }} className='title text-md' variant="h5" gutterBottom>
                Call of Duty: Black Ops 6
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/${MapIds.shatteredVeil}`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Shattered Veil</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to={`/`}>
                        <Box className='homepage-box' p={2}>
                            <Typography variant="h6">Reckoning (Janus Towers)</Typography>
                            <Typography >Coming Soon...</Typography>
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