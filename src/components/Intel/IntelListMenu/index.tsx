import styled from '@emotion/styled';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	TextField,
} from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
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

export const IntelListMenu = ({
	onClearFiltersReady,
}: {
	onClearFiltersReady?: (clearFilters: () => void) => void;
}) => {
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
	const { register, handleSubmit, watch, reset } = methods;
	const clearFilters = useCallback(() => {
		const defaults = getIntelFilterDefaults();
		reset(defaults);
		setCurrentIntelFilter(defaults);
	}, [reset, setCurrentIntelFilter]);

	useEffect(() => {
		onClearFiltersReady?.(() => clearFilters);
	}, [clearFilters, onClearFiltersReady]);
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
						aria-controls="intel-filter"
						id="intel-filter-header"
						onClick={event => {
							const target = event.target as HTMLElement;
							// keep typing in the search box and the explicit toggle button from
							// toggling the panel twice
							if (target.closest('#intelSearch')) return;
							if (target.closest('button[aria-label="Toggle intel filters"]'))
								return;
							toggleAcordion();
						}}
					>
						<TextField
							id="intelSearch"
							label="Search Intel"
							variant="outlined"
							{...register('searchTerm')}
						/>
						<StyledFilterToggle
							type="button"
							onClick={toggleAcordion}
							aria-expanded={expand}
							aria-controls="intel-filter"
							aria-label="Toggle intel filters"
						>
							<span>
								{totalIntelCollectedOfType}/{totalIntelOfType}
							</span>
							<FilterAltIcon />
						</StyledFilterToggle>
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
/* the count and funnel read as decoration on their own, so they are wrapped in a
   real button that also carries the expanded state */
const StyledFilterToggle = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-family: inherit;
	font-size: 0.8rem;
	line-height: 1;
	color: var(--clr-grey-d);
	background-color: var(--clr-white);
	border: 1px solid var(--clr-white-extra-dark);
	border-radius: var(--radius);
	padding: 8px 12px;
	cursor: pointer;
	transition: background-color 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		background-color: var(--clr-white-extra-dark);
	}

	&:focus-visible {
		outline: 2px solid var(--clr-orange);
		outline-offset: 2px;
	}

	svg {
		font-size: 1.1rem;
	}
`;
