import styled from "@emotion/styled";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { DeclassifiedContext } from "../../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { useUserContext } from "../../../contexts/UserContext/userContextProvider";
import { StaticEggStore } from "../../../data/easterEggs";
import { StaticQuestStore } from "../../../data/mainQuest";


export type EggFormInputs = {
    searchTerm: string;
    markerTypes: string[];
};

export const EggListMenu = () => {
    const { currentMapGroup, currentEggFilter, setCurrentEggFilter, filteredEggStore } =
        useContext(DeclassifiedContext);
    const { isDebugMode } = useUserContext();
    const [expand, setExpand] = useState(false);
    const methods = useForm<EggFormInputs>({
        defaultValues: currentEggFilter,
        shouldUnregister: false,
    });
    const {
        register,
        handleSubmit,
        watch,
    } = methods;
    const markerTypes = useMemo(() => {
        if (!currentMapGroup) return [];
        const types = new Set<string>();
        currentMapGroup.mapLayers.forEach(map => {
            if (map.id && StaticEggStore[map.id]) {
                StaticEggStore[map.id].forEach(marker => types.add(marker.typeDesc));
            }
            if (map.id && StaticQuestStore[map.id]) {
                StaticQuestStore[map.id].forEach(marker => types.add(marker.typeDesc));
            }
        });
        return Array.from(types).sort((a, b) => a.localeCompare(b));
    }, [currentMapGroup]);
    const onSubmit: SubmitHandler<EggFormInputs> = data => {
        setCurrentEggFilter(data);
        if (isDebugMode) {
            console.log('EGG FORM SUBMIT: ', data);
        }
    };
    const totalEggOfType = filteredEggStore.length;

    watch(() => handleSubmit(onSubmit)());

    const onModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <FormProvider {...methods}>
            <StyledExpandableMenu
                id="easterEgg-expandable-menu"
                onSubmit={handleSubmit(onSubmit)}
            >
                <StyledAccordion expanded={expand}
                    onClick={onModalClick}>
                    <StyledAccordionSummary
                        expandIcon={<FilterAltIcon
                        onClick={() => setExpand(prev => !prev)}
                        />}
                        aria-controls="easterEgg-filter"
                        id="easterEgg-filter-header"
                    >
                        <TextField
                            id="easterEggSearch"
                            label="Search"
                            variant="outlined"
                            {...register('searchTerm')}
                        />
                        <StyledResultsCounter>
                            {totalEggOfType}
                        </StyledResultsCounter>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        <EggFilterMenuTitle variant="h6">Marker Types</EggFilterMenuTitle>
                        <EggFilterMenuBody>
                            {markerTypes.length > 0 ? (
                                <FormControl component="fieldset" variant="standard">
                                    <FormGroup>
                                        {markerTypes.map(markerType => (
                                            <FormControlLabel
                                                key={markerType}
                                                control={
                                                    <Checkbox
                                                        size="small"
                                                        {...register('markerTypes')}
                                                        value={markerType}
                                                    />
                                                }
                                                label={markerType}
                                            />
                                        ))}
                                    </FormGroup>
                                </FormControl>
                            ) : (
                                <Typography variant="body2">
                                    No marker types available for this map.
                                </Typography>
                            )}
                        </EggFilterMenuBody>
                    </StyledAccordionDetails>
                </StyledAccordion>
            </StyledExpandableMenu>
        </FormProvider>
    );
};
export function getEggFilterDefaults(): EggFormInputs {
    return {
        searchTerm: '',
        markerTypes: [],
    };
}

const StyledExpandableMenu = styled.form`
	display: grid;
	justify-items: center;
	background-color: var(--clr-grey-d);
	position: sticky;
	bottom: 0;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
background-color: var(--clr-grey-l);

.MuiAccordionSummary-content {
	display: flex;
	justify-content: space-between;
    align-items: center;

    #easterEggSearch,
    #easterEggSearch input {
		background-color: var(--clr-white);
		border-radius: var(--radius);
		border: unset;
	}
}
`

const StyledAccordion = styled(Accordion)`
	width: 100%;
	margin: 0;
	box-shadow: none;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
	background: var(--clr-grey-l);
`;

const StyledResultsCounter = styled.div`
	color: var(--clr-white-d);
`;

const EggFilterMenuTitle = styled(Typography)`
	margin: 0 0 0.5rem;
	font-size: 0.95rem;
	text-transform: uppercase;
	letter-spacing: 0.06em;
`;

const EggFilterMenuBody = styled.div`
	.MuiFormControlLabel-root {
	    margin-right: 1rem;
	}
`;