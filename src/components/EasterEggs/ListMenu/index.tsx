import styled from '@emotion/styled';
import {
	Box,
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
} from '@mui/material';
import {
	MouseEvent,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	Controller,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form';
import { DeclassifiedContext } from '../../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../../contexts/UserContext/userContextProvider';
import { StaticEggStore } from '../../../data/easterEggs';
import { StaticQuestStore } from '../../../data/mainQuest';
import { getEggMarkerTypeLabel } from '../../../data/listFiltering';
import {
	FilterAccordion,
	FilterAccordionDetails,
	FilterAccordionSummary,
	FilterExpandableForm,
	FilterToggle,
	shouldToggleFromSummary,
} from '../../FilterChrome';
import {
	MenuProps,
	StyledIntelFilterMenu,
} from '../../Intel/IntelFilterMenu/styles';

export type EggFormInputs = {
	searchTerm: string;
	markerTypes: string[];
};

export const EggListMenu = ({
	onClearFiltersReady,
}: {
	onClearFiltersReady?: (clearFilters: () => void) => void;
}) => {
	const {
		currentMapGroup,
		currentEggFilter,
		setCurrentEggFilter,
		filteredEggStore,
	} = useContext(DeclassifiedContext);
	const { isDebugMode } = useUserContext();
	const [expand, setExpand] = useState(false);
	const toggleAccordion = () => setExpand(prev => !prev);
	const methods = useForm<EggFormInputs>({
		defaultValues: currentEggFilter,
		shouldUnregister: false,
	});
	const { control, handleSubmit, register, watch, getValues, setValue, reset } =
		methods;
	const clearFilters = useCallback(() => {
		const defaults = getEggFilterDefaults();
		reset(defaults);
		setCurrentEggFilter(defaults);
	}, [reset, setCurrentEggFilter]);

	useEffect(() => {
		onClearFiltersReady?.(() => clearFilters);
	}, [clearFilters, onClearFiltersReady]);

	const markerTypes = useMemo(() => {
		if (!currentMapGroup) return [];
		const types = new Set<string>();
		currentMapGroup.mapLayers.forEach(map => {
			if (map.id && StaticEggStore[map.id]) {
				StaticEggStore[map.id].forEach(marker => {
					types.add(getEggMarkerTypeLabel(marker));
				});
			}
			if (map.id && StaticQuestStore[map.id]) {
				StaticQuestStore[map.id].forEach(marker => {
					types.add(getEggMarkerTypeLabel(marker));
				});
			}
		});
		return Array.from(types).sort((a, b) => a.localeCompare(b));
	}, [currentMapGroup]);

	const onSubmit = useCallback<SubmitHandler<EggFormInputs>>(
		data => {
			setCurrentEggFilter(data);
			if (isDebugMode) {
				console.log('EGG FORM SUBMIT: ', data);
			}
		},
		[isDebugMode, setCurrentEggFilter]
	);

	useEffect(() => {
		const subscription = watch(() => handleSubmit(onSubmit)());
		return () => subscription.unsubscribe();
	}, [handleSubmit, onSubmit, watch]);

	const handleMarkerTypeChange = (
		event: SelectChangeEvent<string[]>,
		onChange: (value: string[]) => void
	) => {
		const {
			target: { value },
		} = event;
		const nextValue = typeof value === 'string' ? value.split(',') : value;
		setValue('markerTypes', nextValue, {
			shouldDirty: true,
			shouldValidate: false,
		});
		onChange(nextValue);
		setCurrentEggFilter({ ...getValues(), markerTypes: nextValue });
	};

	const onModalClick = (event: MouseEvent) => {
		event.stopPropagation();
	};

	return (
		<FormProvider {...methods}>
			<FilterExpandableForm
				id="easterEgg-expandable-menu"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FilterAccordion expanded={expand} onClick={onModalClick}>
					<FilterAccordionSummary
						aria-controls="easterEgg-filter-panel"
						id="easterEgg-filter-header"
						onClick={event => {
							if (shouldToggleFromSummary(event.target)) toggleAccordion();
						}}
					>
						<TextField
							id="easterEggSearch"
							label="Search Easter Eggs"
							variant="outlined"
							{...register('searchTerm')}
						/>
						<FilterToggle
							count={filteredEggStore.length}
							expanded={expand}
							panelId="easterEgg-filter-panel"
							label="Toggle easter egg filters"
							onToggle={toggleAccordion}
						/>
					</FilterAccordionSummary>
					<FilterAccordionDetails id="easterEgg-filter-panel">
						{markerTypes.length > 0 ? (
							<StyledEggFilterMenu>
								<FormControl>
									<InputLabel id="egg-marker-type-label">
										Marker Types
									</InputLabel>
									<Controller
										name="markerTypes"
										control={control}
										render={({ field }) => (
											<Select
												{...field}
												multiple
												labelId="egg-marker-type-label"
												input={<OutlinedInput label="Marker Types" />}
												MenuProps={MenuProps}
												renderValue={selected => (
													<Box
														sx={{
															display: 'flex',
															flexWrap: 'wrap',
															gap: 0.5,
														}}
													>
														{selected.map(value => (
															<Chip key={value} label={value} />
														))}
													</Box>
												)}
												onChange={event => {
													handleMarkerTypeChange(event, field.onChange);
												}}
												value={field.value ?? []}
											>
												{markerTypes.map(markerType => (
													<MenuItem key={markerType} value={markerType}>
														{markerType}
													</MenuItem>
												))}
											</Select>
										)}
									/>
								</FormControl>
							</StyledEggFilterMenu>
						) : (
							<Typography variant="body2">
								No marker types available for this map.
							</Typography>
						)}
					</FilterAccordionDetails>
				</FilterAccordion>
			</FilterExpandableForm>
		</FormProvider>
	);
};

export function getEggFilterDefaults(): EggFormInputs {
	return {
		searchTerm: '',
		markerTypes: [],
	};
}

/* one column instead of the intel menu's two: there is only the marker type select */
const StyledEggFilterMenu = styled(StyledIntelFilterMenu)`
	grid-template-columns: minmax(0, 1fr);
`;
