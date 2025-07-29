import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, ButtonGroup, Tooltip } from '@mui/material';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';

export const LayerToggleButtons = () => {
    const { showAllLayers, hideAllLayers, isMobile } = useUserContext();

    return (
        <div style={{
            position: 'absolute',
            top: isMobile ? '85px' : '20px',
            right: isMobile ? '10px' : '20px',
            zIndex: 1000,
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: '2px',
            boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
            border: '2px solid rgba(0,0,0,0.2)'
        }}>
            <ButtonGroup size="small" orientation={isMobile ? "vertical" : "horizontal"}>
                <Tooltip title="Show All" placement="left">
                    <Button
                        onClick={showAllLayers}
                        variant="text"
                        size="small"
                        sx={{
                            minWidth: '32px',
                            padding: '6px 8px',
                            color: '#666',
                            '&:hover': {
                                backgroundColor: '#f5f5f5'
                            }
                        }}
                    >
                        <VisibilityIcon fontSize="small" />
                    </Button>
                </Tooltip>
                <Tooltip title="Hide All" placement="left">
                    <Button
                        onClick={hideAllLayers}
                        variant="text"
                        size="small"
                        sx={{
                            minWidth: '32px',
                            padding: '6px 8px',
                            color: '#666',
                            '&:hover': {
                                backgroundColor: '#f5f5f5'
                            }
                        }}
                    >
                        <VisibilityOffIcon fontSize="small" />
                    </Button>
                </Tooltip>
            </ButtonGroup>
        </div>
    );
};
