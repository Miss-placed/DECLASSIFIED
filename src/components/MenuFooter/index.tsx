import styled from '@emotion/styled';
import {
	FormControlLabel,
	FormGroup,
	Switch,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const StyledFormGroup = styled(FormGroup)`
	display: flex;
	flex-direction: row;
	padding: 5px;
	justify-content: space-evenly;
`;

export const MenuFooter = () => {
	const { control } = useFormContext();

	return (
		<StyledFormGroup>
			<Controller
				name="currentMapOnly"
				control={control}
				render={({ field }) => (
					<FormControlLabel
						control={
							<Switch
								{...field}
								checked={field.value}
								onChange={e => field.onChange(e.target.checked)}
							/>
						}
						label="Current Map Only"
					/>
				)}
			/>

			<Controller
				name="collectedIntelFilter"
				control={control}
				defaultValue="all"
				render={({ field }) => (
					<ToggleButtonGroup
						value={field.value}
						exclusive
						onChange={(e, newValue) => {
							if (newValue !== null) {
								field.onChange(newValue);
							}
						}}
					>
						<ToggleButton value="collected-only" aria-label="left aligned">
							<DoneAllIcon />
						</ToggleButton>
						<ToggleButton value="uncollected-only" aria-label="centered">
							<RemoveDoneIcon />
						</ToggleButton>
						<ToggleButton value="all" aria-label="right aligned">
							<FilterAltOffIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				)}
			/>
		</StyledFormGroup>
	);
};
