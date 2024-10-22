import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const StyledIntelFilterMenu = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: 50% 50%;
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
