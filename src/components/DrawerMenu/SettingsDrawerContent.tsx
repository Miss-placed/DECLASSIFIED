import styled from "@emotion/styled";
import BugReportIcon from '@mui/icons-material/BugReport';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RateReviewIcon from '@mui/icons-material/RateReview';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Checkbox, Collapse, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext/userContextProvider";


const SettingsMenuBackground = styled.div`
        background-color: var(--clr-grey-d);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 10px;
    `;
const SettingsMenuContainer = styled(Paper)`
    padding: 10px;
`
export const SettingsDrawerContent = () => {
    const { isDebugMode, setIsDebugMode } = useUserContext();
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleIsDebugChange = () => {
        setIsDebugMode(!isDebugMode);
    };

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

                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <VolunteerActivismIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contribute" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/* <ListItemButton sx={{ pl: 4 }}> // TODO: Add these
                                <ListItemIcon>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add New Intel" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
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
                </List>


            </SettingsMenuContainer>
        </SettingsMenuBackground>
    )
}
