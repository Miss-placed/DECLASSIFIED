import {
	Box,
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Faction, IntelType, Season } from '../../../data/IntelTypes';
import { CustomIntelFilterCheckbox } from '../../CustomIntelFilterCheckbox';
import { getStyles, MenuProps, StyledIntelFilterMenu } from './styles';

interface FilterState {
	searchText: string;
	seasons: Season[];
	factions: Faction[];
	intelTypes: IntelType[];
}

export const IntelFilterMenu = () => {
	const theme = useTheme();
	const { register, setValue, getValues } = useFormContext();
	const [season, setSeason] = useState<string[]>([]);
	const [faction, setFaction] = useState<string[]>([]);

	const handleSeasonChange = (event: SelectChangeEvent<typeof season>) => {
		const {
			target: { value },
		} = event;
		// On autofill we get a stringified value.
		const newArr = typeof value === 'string' ? value.split(',') : value;
		setValue('seasons', newArr);
		setSeason(newArr);
	};
	const handleFactionChange = (event: SelectChangeEvent<typeof faction>) => {
		const {
			target: { value },
		} = event;
		// On autofill we get a stringified value.
		const newArr = typeof value === 'string' ? value.split(',') : value;
		setValue('factions', newArr);
		setFaction(newArr);
	};
	const seasons = Object.values(Season);
	const factions = Object.values(Faction);
	const intelTypes = Object.keys(IntelType);
	const intelTypeState = getValues('intelTypes');

	return (
		<StyledIntelFilterMenu>
			<FormControl>
				<InputLabel id="season-filter-label">Seasons</InputLabel>
				<Select
					{...register('seasons')}
					label="Seasons"
					labelId="season-filter-label"
					id="season-filter"
					multiple
					value={getValues('seasons')}
					onChange={handleSeasonChange}
					input={<OutlinedInput id="select-season-filter" label="Chip" />}
					renderValue={selected => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{selected.map(value => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{seasons.map(seasonItem => (
						<MenuItem
							key={seasonItem}
							value={seasonItem}
							style={getStyles(seasonItem, season, theme)}
						>
							{seasonItem}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel id="faction-filter-label">Factions</InputLabel>
				<Select
					{...register('factions')}
					label="Factions But longer and lets see if it changes"
					labelId="faction-filter-label"
					id="faction-filter"
					multiple
					value={getValues('factions')}
					onChange={handleFactionChange}
					input={<OutlinedInput id="select-faction-filter" label="Chip" />}
					renderValue={selected => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{selected.map(value => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{factions.map(factionItem => (
						<MenuItem
							key={factionItem}
							value={factionItem}
							style={getStyles(factionItem, faction, theme)}
						>
							{factionItem}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			{intelTypes.map(intelTypeItem => (
				<CustomIntelFilterCheckbox
					key={intelTypeItem}
					name={intelTypeItem}
					defaultChecked={(intelTypeState && intelTypeState.includes(IntelType[intelTypeItem])) ? true : false}
				/>
			))}
		</StyledIntelFilterMenu>
	);
};
