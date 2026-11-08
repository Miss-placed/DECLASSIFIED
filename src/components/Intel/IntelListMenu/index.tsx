import { TextField } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { DeclassifiedContext } from '../../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../../contexts/UserContext/userContextProvider';
import { Faction, IntelType, Season } from '../../../data/IntelTypes';
import {
	FilterAccordion,
	FilterAccordionDetails,
	FilterAccordionSummary,
	FilterExpandableForm,
	FilterToggle,
	shouldToggleFromSummary,
} from '../../FilterChrome';
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
			<FilterExpandableForm
				id="intel-expandable-menu"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FilterAccordion expanded={expand}>
					<FilterAccordionSummary
						aria-controls="intel-filter-panel"
						id="intel-filter-header"
						onClick={event => {
							if (shouldToggleFromSummary(event.target)) toggleAcordion();
						}}
					>
						<TextField
							id="intelSearch"
							label="Search Intel"
							variant="outlined"
							{...register('searchTerm')}
						/>
						<FilterToggle
							count={`${totalIntelCollectedOfType}/${totalIntelOfType}`}
							expanded={expand}
							panelId="intel-filter-panel"
							label="Toggle intel filters"
							onToggle={toggleAcordion}
						/>
					</FilterAccordionSummary>
					<FilterAccordionDetails id="intel-filter-panel">
						<IntelFilterMenu />
					</FilterAccordionDetails>
					<MenuFooter />
				</FilterAccordion>
			</FilterExpandableForm>
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
