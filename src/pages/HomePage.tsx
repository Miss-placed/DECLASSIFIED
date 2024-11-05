import { Box, Container, Grid, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePageContainer = styled(Container)`
    background: var(--clr-bg);
`

const HomePage: React.FC = () => {
    return (
        <HomePageContainer>
            <Typography variant="h4" gutterBottom>
                Declassified.app
            </Typography>
            <Typography variant="h5" gutterBottom>
                some blurb SEO text to get the point acrost that we are THE
                authority on COD Interactive maps
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                    <Paper component={Link} to="/terminusBiolabs">
                        <Box p={2}>
                            <Typography variant="h6">Interactive Map</Typography>
                            <Typography>Interactive Map box placeholder text</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Paper component={Link} to="/challenge">
                        <Box p={2}>
                            <Typography variant="h6">Legacy Challenge Tracker</Typography>
                            <Typography>New Version Coming Soon...</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Paper component={Link} target='blank' to="https://nebula.emca.app/">
                        <Box p={2}>
                            <Typography variant="h6">Camo Tracker</Typography>
                            <Typography>A camo tracker we highly endorse!</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Paper component={Link} to="https://discord.gg/4Xqj8XntFe">
                        <Box p={2}>
                            <Typography variant="h6">Github/Discord</Typography>
                            <Typography>Socials go here</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </HomePageContainer>
    );
};

export default HomePage;