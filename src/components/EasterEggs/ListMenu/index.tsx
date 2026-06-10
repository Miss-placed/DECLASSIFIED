import styled from '@emotion/styled';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
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
	MenuProps,
	StyledIntelFilterMenu,
} from '../../Intel/IntelFilterMenu/styles';

export type EggFormInputs = {
	searchTerm: string;
	markerTypes: string[];
};

export const EggListMenu = () => {
	const {
		currentMapGroup,
		currentEggFilter,
		setCurrentEggFilter,
		filteredEggStore,
	} = useContext(DeclassifiedContext);
	const { isDebugMode } = useUserContext();
	const [expand, setExpand] = useState(false);
	const methods = useForm<EggFormInputs>({
		defaultValues: currentEggFilter,
		shouldUnregister: false,
	});
	const { control, handleSubmit, register, watch, getValues, setValue } =
		methods;

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

	const handleMarkerTypeChange = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value },
		} = event;
		const nextValue = typeof value === 'string' ? value.split(',') : value;
		setValue('markerTypes', nextValue, {
			shouldDirty: true,
			shouldValidate: false,
		});
		setCurrentEggFilter({ ...getValues(), markerTypes: nextValue });
	};

	const onModalClick = (event: MouseEvent) => {
		event.stopPropagation();
	};

	return (
		<FormProvider {...methods}>
			<StyledExpandableMenu
				id="easterEgg-expandable-menu"
				onSubmit={handleSubmit(onSubmit)}
			>
				<StyledAccordion expanded={expand} onClick={onModalClick}>
					<StyledAccordionSummary
						expandIcon={
							<FilterAltIcon onClick={() => setExpand(prev => !prev)} />
						}
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
							{filteredEggStore.length}
						</StyledResultsCounter>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<EggFilterMenuTitle variant="h6">Marker Types</EggFilterMenuTitle>
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
														sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
													>
														{selected.map(value => (
															<Chip key={value} label={value} />
														))}
													</Box>
												)}
												onChange={handleMarkerTypeChange}
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
	}

	#easterEggSearch,
	#easterEggSearch input {
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
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

const StyledResultsCounter = styled.div`
	color: var(--clr-white-d);
`;

const EggFilterMenuTitle = styled(Typography)`
	margin: 0;
	font-size: 0.95rem;
	text-transform: uppercase;
	letter-spacing: 0.06em;
`;

const StyledEggFilterMenu = styled(StyledIntelFilterMenu)`
	grid-template-columns: 1fr;
`;
