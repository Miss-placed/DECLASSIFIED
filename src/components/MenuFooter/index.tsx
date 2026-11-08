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
	flex-wrap: wrap;
	/* 16px sides to line up with the search box and the filter rows above, and a
	   full 10px of top/bottom so the controls are not wedged against the row above
	   or the bottom edge of the drawer */
	padding: var(--radius) 16px;
	gap: var(--radius);
	justify-content: space-between;

	/* MUI pulls the label 11px left and pushes it 16px right to butt up against a
	   checkbox; with the panel inset that just breaks the alignment */
	.MuiFormControlLabel-root {
		margin: 0;
	}
	/* the root font size is x-large, which made this the largest text in the panel
	   and left it only 3px of room before wrapping */
	.MuiFormControlLabel-label {
		font-size: 0.8rem;
	}
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
