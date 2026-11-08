import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const StyledIntelFilterMenu = styled.div`
	display: grid;
	justify-items: center;
	/* 50% + 50% + a 10px gap is 10px wider than the panel, which pushed the right
	   column past the 16px inset and flush against the drawer edge. fr units
	   include the gap in their share, so both columns stay inside the inset. */
	grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
	gap: var(--radius);
	.MuiFormControl-root {
		width: 100%;
	}
	.MuiFormControl-root {
		background-color: var(--clr-white-d);
		border-radius: var(--radius);
	}
	.MuiOutlinedInput-notchedOutline {
		border-width: 0px;
	}
`;
export function getStyles(
	name: string,
	personName: readonly string[],
	theme: Theme
) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};
