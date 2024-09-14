import styled from "@emotion/styled";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Accordion, AccordionDetails, AccordionSummary, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { DeclassifiedContext } from "../../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { useUserContext } from "../../../contexts/UserContext/userContextProvider";
import { EggType } from "../../../data/easterEggs";


export type EggFormInputs = {
    searchTerm: string;
    easterEggTypes: EggType[];
};

export const EggListMenu = () => {
    const { currentEggFilter, setCurrentEggFilter, filteredEggStore } = useContext(DeclassifiedContext);
    const { isDebugMode } = useUserContext();
    const [expand, setExpand] = useState(false);
    const toggleAcordion = () => {
        setExpand(prev => !prev);
    };
    const methods = useForm<EggFormInputs>({
        defaultValues: currentEggFilter,
        shouldUnregister: false,
    });
    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState,
        formState: { isValidating },
    } = methods;
    const onSubmit: SubmitHandler<EggFormInputs> = data => {
        // TODO: set filter value in context
        setCurrentEggFilter(data);
        if (isDebugMode) {
            console.log('EGG FORM SUBMIT: ', data);
        }
    };
    const totalEggOfType = filteredEggStore.length;

    watch((data, { name, type }) => handleSubmit(onSubmit)());

    // console.log(watch());

    // watch((data, { name, type }) => console.log(data, name, type))

    return (
        <FormProvider {...methods}>
            <StyledExpandableMenu
                id="easterEgg-expandable-menu"
                onSubmit={handleSubmit(onSubmit)}
            >
                <StyledAccordion expanded={expand}>
                    <StyledAccordionSummary
                        expandIcon={<FilterAltIcon onClick={toggleAcordion} />}
                        aria-controls="easterEgg-filter"
                        id="easterEgg-filter-header"
                    >
                        <TextField
                            id="easterEggSearch"
                            label="Search"
                            variant="outlined"
                            {...register('searchTerm')}
                        />
                        {totalEggOfType}
                    </StyledAccordionSummary>
                    <AccordionDetails>
                        {/* <EggFilterMenu /> */}
                        Filter Easter Eggs Here
                    </AccordionDetails>
                </StyledAccordion>
            </StyledExpandableMenu>
        </FormProvider>
    );
};
export function getEggFilterDefaults(): EggFormInputs {
    return {
        searchTerm: '',
        easterEggTypes: [],
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
.MuiAccordionSummary-content {
	display: flex;
	justify-content: space-between;
    align-items: center;
}
`

const StyledAccordion = styled(Accordion)`
	width: 100%;
	margin: 0;
	box-shadow: none;
`;