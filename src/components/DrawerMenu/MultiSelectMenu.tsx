import styled from '@emotion/styled';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Button, ButtonGroup } from '@mui/material';
import { useContext, useMemo } from 'react';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { addCollectedIntel, deleteCollectedIntel } from '../../data/dataAccessLayer';

export const MultiSelectMenu = ({ multiSelectState: selectedIntel, setMultiSelectState }) => {
    const { filteredIntelStore } = useContext(DeclassifiedContext);

    // Memoize for performance
    const { visibleSelectedIntel, visibleSelectedCount, filteredIntelIds } = useMemo(() => {
        const filteredIdSet = new Set(filteredIntelStore.map(intel => intel.id));
        const visibleSelected = selectedIntel.filter(id => filteredIdSet.has(id));
        
        return {
            visibleSelectedIntel: visibleSelected,
            visibleSelectedCount: visibleSelected.length,
            filteredIntelIds: Array.from(filteredIdSet)
        };
    }, [selectedIntel, filteredIntelStore]);

    // Function to handle select/deselect all
    function handleSelectAll(event, selectAll: boolean): void {
        const intelToSelect = selectAll ? filteredIntelIds : [];
        setMultiSelectState(intelToSelect);
    }

    // Determine the state of the checkbox based on selection
    const renderCheckBoxIcon = () => {
        if (visibleSelectedCount === 0) {
            return (
                <Button
                    title="Select all"
                    onClick={(event) => handleSelectAll(event, true)}
                >
                    <CheckBoxOutlineBlankIcon htmlColor="var(--clr-blue)" />
                </Button>
            );
        } else if (visibleSelectedCount !== filteredIntelStore.length) {
            return (
                <Button
                    title="Deselect all"
                    onClick={(event) => handleSelectAll(event, false)}
                >
                    <IndeterminateCheckBoxIcon htmlColor="var(--clr-blue)" />
                </Button>
            );
        } else {
            return (
                <Button
                    title="Deselect all"
                    onClick={(event) => handleSelectAll(event, false)}
                >
                    <CheckBoxIcon htmlColor="var(--clr-blue)" />
                </Button>
            );
        }
    };

    const handleButtonAction = (actionType) => {
        if (actionType === "collect") {
            addCollectedIntel([...visibleSelectedIntel])
        } else if (actionType === "un-collect") {
            deleteCollectedIntel([...visibleSelectedIntel])
        }
    };

    return (
        <MultiSelectMenuContent>
            {renderCheckBoxIcon()}
            <ButtonGroup disabled={visibleSelectedCount === 0} fullWidth variant="contained">
                <Button
                    title="DECLASSIFY"
                    onClick={() => handleButtonAction("collect")}
                >
                    DECLASSIFY ✅
                </Button>
                <Button
                    title="CLASSIFY"
                    onClick={() => handleButtonAction("un-collect")}
                >
                    CLASSIFY ❌
                </Button>
            </ButtonGroup>
        </MultiSelectMenuContent>
    );
};

const MultiSelectMenuContent = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding: 10px 10px 0 10px;
justify-content: space-between;
.MuiButtonGroup-root{
    max-width: 80%;
}
button{
    text-wrap: nowrap;
    font-size: initial;
}
`
