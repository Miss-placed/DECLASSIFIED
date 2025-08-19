import styled from '@emotion/styled';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	TextField,
} from '@mui/material';
import { useContext, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { DeclassifiedContext } from '../../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../../contexts/UserContext/userContextProvider';
import { Faction, IntelType, Season } from '../../../data/IntelTypes';
import { MenuFooter } from '../../MenuFooter';
import { IntelFilterMenu } from '../IntelFilterMenu';

export type IntelFormInputs = {
	searchTerm: string;
	seasons: Season[];
	factions: Faction[];
	intelTypes: IntelType[];
	currentMapOnly: boolean;
	collectedIntelFilter: string;
};

export const IntelListMenu = () => {
	const {
		currentIntelFilter,
		setCurrentIntelFilter,
		collectedIntel,
		filteredIntelStore,
	} = useContext(DeclassifiedContext);
	const { isDebugMode } = useUserContext();
	const [expand, setExpand] = useState(false);
	const toggleAcordion = () => {
		setExpand(prev => !prev);
	};
	const methods = useForm<IntelFormInputs>({
		defaultValues: currentIntelFilter,
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
	const onSubmit: SubmitHandler<IntelFormInputs> = data => {
		// TODO: set filter value in context
		setCurrentIntelFilter(data);
		if (isDebugMode) {
			console.log('INTEL FORM SUBMIT: ', data);
		}
	};
	const totalIntelOfType = filteredIntelStore.length;
	const totalIntelCollectedOfType = filteredIntelStore.filter(
		intel =>
			collectedIntel &&
			collectedIntel.find(({ intelId }) => intelId === intel.id)
	).length;

	watch((data, { name, type }) => handleSubmit(onSubmit)());

	// console.log(watch());

	// watch((data, { name, type }) => console.log(data, name, type))

	return (
		<FormProvider {...methods}>
			<StyledExpandableMenu
				id="intel-expandable-menu"
				onSubmit={handleSubmit(onSubmit)}
			>
				<StyledAccordion expanded={expand}>
					<StyledAccordionSummary
						expandIcon={<FilterAltIcon onClick={toggleAcordion} />}
						aria-controls="intel-filter"
						id="intel-filter-header"
					>
						<TextField
							id="intelSearch"
							label="Search Intel"
							variant="outlined"
							{...register('searchTerm')}
						/>
						<StyledResultsCounter>
							{totalIntelCollectedOfType}/{totalIntelOfType}
						</StyledResultsCounter>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<IntelFilterMenu />
					</StyledAccordionDetails>
					<MenuFooter />
				</StyledAccordion>
			</StyledExpandableMenu>
		</FormProvider>
	);
};

export function getIntelFilterDefaults(): IntelFormInputs {
	return {
		searchTerm: '',
		seasons: [],
		factions: [],
		intelTypes: [],
		currentMapOnly: true,
		collectedIntelFilter: 'all',
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
	}
	#intelSearch,
	#intelSearch input {
		background-color: var(--clr-white);
		border-radius: var(--radius);
		border: unset;
	}
`;

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
