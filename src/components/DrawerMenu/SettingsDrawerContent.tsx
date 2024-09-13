import styled from "@emotion/styled";
import BugReportIcon from '@mui/icons-material/BugReport';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HistoryIcon from '@mui/icons-material/History';
import RateReviewIcon from '@mui/icons-material/RateReview';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Checkbox, Collapse, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DeclassifiedContext } from "../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { useNotification } from "../../contexts/NotificationContext/notificationContext";
import { useUserContext } from "../../contexts/UserContext/userContextProvider";


const SettingsMenuBackground = styled.div`
        background-color: var(--clr-grey-d);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 10px;
    `;

enum ContributionType {
    Intel,
    Misc
}

const SettingsMenuContainer = styled(Paper)`
    padding: 10px;
`
export const SettingsDrawerContent = () => {
    const { isDebugMode, setIsDebugMode } = useUserContext();
    const { toggleDrawer } = useContext(DeclassifiedContext);
    const { triggerDialog } = useNotification();
    const [contributeOpen, setContributeOpen] = useState(true);

    const handleExpandContribute = () => {
        setContributeOpen(!contributeOpen);
    };

    const handleIsDebugChange = () => {
        setIsDebugMode(!isDebugMode);
    };

    const handleContributeNewMarker = (contributionType: ContributionType): void => {

        triggerDialog("Click on the map to select the location of your contribution, after clicking you will be redirected to github. Thanks for helping out!", { trueText: 'I Understand', falseText: 'Nevermind' },
            (userAgreed) => {
                console.log(userAgreed);
                if (userAgreed) {
                    toggleDrawer({ isOpen: false });
                }
            });
    }

    return (
        <SettingsMenuBackground>
            <SettingsMenuContainer>
                <Typography variant="h5">Settings</Typography>
                <List>
                    <ListItemButton onClick={handleIsDebugChange}>
                        <ListItemIcon>
                            <BugReportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Debug Mode" />
                        <FormControlLabel control={
                            <Checkbox
                                checked={isDebugMode}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />} label="" />
                    </ListItemButton>
                    <ListItemButton onClick={handleExpandContribute}>
                        <ListItemIcon>
                            <VolunteerActivismIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contribute" />
                        {contributeOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={contributeOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/* <ListItemButton sx={{ pl: 4 }} onClick={() => handleContributeNewMarker(ContributionType.Intel)}>
                                <ListItemIcon>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add New Intel" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => handleContributeNewMarker(ContributionType.Misc)}>
                                <ListItemIcon>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add New Miscellaneous or Easter Egg Marker" />
                            </ListItemButton> */}
                            <ListItemButton sx={{ pl: 4 }} component="a" href="https://github.com/Miss-placed/DECLASSIFIED/issues/new/choose" target="_blank" rel="noopener noreferrer">
                                <ListItemIcon>
                                    <RateReviewIcon />
                                </ListItemIcon>
                                <ListItemText primary="Give Feedback" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} component="a" href="https://buymeacoffee.com/declassified.map" target="_blank" rel="noopener noreferrer">
                                <ListItemIcon>
                                    <CoffeeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Buy Us A Coffee!" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton component="a" href="/legacy">
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Legacy App" />
                    </ListItemButton>
                </List>


            </SettingsMenuContainer>
        </SettingsMenuBackground>
    )
}
