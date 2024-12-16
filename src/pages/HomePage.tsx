import styled from '@emotion/styled';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Box, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePageContainer = styled(Container)`
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
    }

    .filled {
        background: var(--clr-bg);
        color: var(--clr-white-d);
    }

`

const HomePage: React.FC = () => {
    return (
        <HomePageContainer>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 8 }}>
                    <Typography color="text.secondary" variant="h4" gutterBottom>
                        Declassified
                    </Typography>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }} sx={{ display: 'flex', justifyContent: 'right' }}>

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
            <Grid container>
                <Typography color="text.secondary" gutterBottom>
                    The #1 interactive map for CoD Zombies.
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    Track Intel and Calling Cards. Discover Main Quest and side Easter Eggs and explore the maps.
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    Always free, no ads, totally open source. Now and forever.
                </Typography>
            </Grid>
            <Typography sx={{ mt: 3 }} color="text.secondary" variant="h5" gutterBottom>
                Call of Duty: Black Ops 6
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, sm: 4 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/libertyFalls">
                        <Box className='homepage-box' p={2}>
                            <Typography color="text.secondary" variant="h6">Liberty Falls</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 6, sm: 4 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/terminusBiolabs">
                        <Box className='homepage-box' p={2}>
                            <Typography color="text.secondary" variant="h6">Terminus</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/citadelle">
                        <Box className='homepage-box' p={2}>
                            <Typography color="text.secondary" variant="h6">Citadelle Des Morts</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '150px' }}>
                    <Paper component={Link} to="/challenge">
                        <Box className='homepage-box filled' p={2}>
                            <Typography color="text.secondary" variant="h6">Calling Cards</Typography>
                            <Typography color="text.secondary">New Version Coming Soon...</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '150px' }}>
                    <Paper component={Link} target='blank' to="https://nebula.emca.app/zombies">
                        <Box className='homepage-box filled' p={2}>
                            <Typography color="text.secondary" variant="h6">Camo Tracker</Typography>
                            <Typography color="text.secondary">Made by our friends ❤️</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Typography sx={{ mt: 3 }} color="text.secondary" variant="h5" gutterBottom>
                Call of Duty: Black Ops Cold War
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, sm: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/dieMaschine">
                        <Box className='homepage-box' p={2}>
                            <Typography color="text.secondary" variant="h6">Die Maschine</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/firebaseZ">
                        <Box className='homepage-box' p={2}>
                            <Typography color="text.secondary" variant="h6">Firebase Z</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/mauerDerTotenStreets">
                        <Box className='homepage-box' p={2}>
                            <Typography color="text.secondary" variant="h6">Mauer Der Toten</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }} sx={{ height: '100px' }}>
                    <Paper component={Link} to="/forsaken">
                        <Box className='homepage-box' p={2}>
                            <Typography color="text.secondary" variant="h6">Forsaken</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '150px' }}>
                    <Paper component={Link} to="/challenge">
                        <Box className='homepage-box filled' p={2}>
                            <Typography color="text.secondary" variant="h6">Calling Cards</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '150px' }}>
                    <Paper component={Link} target='blank' to="https://coldwar.vercel.app/aether">
                        <Box className='homepage-box filled' p={2}>
                            <Typography color="text.secondary" variant="h6">Camo Tracker</Typography>
                            <Typography color="text.secondary">Made by our friends ❤️️</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </HomePageContainer>
    );
};

export default HomePage;