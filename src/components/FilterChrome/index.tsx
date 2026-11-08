import styled from '@emotion/styled';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

/**
 * The intel drawer and the Easter egg drawer are two modes of the same panel, so
 * their filter chrome has to be the same. Everything they share lives here
 * instead of being copied into each menu, otherwise the two drift apart.
 */

export const FilterExpandableForm = styled.form`
	display: grid;
	justify-items: center;
	background-color: var(--clr-grey-d);
	position: sticky;
	bottom: 0;
`;

export const FilterAccordion = styled(Accordion)`
	width: 100%;
	margin: 0;
	box-shadow: none;
`;

export const FilterAccordionSummary = styled(AccordionSummary)`
	background-color: var(--clr-grey-l);
	/* MUI defaults to no vertical padding with a content margin, which leaves a
	   wider gap above the filters than between them */
	padding: var(--radius) 16px;

	.MuiAccordionSummary-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--radius);
		margin: 0;
	}
	/* both menus use a bare TextField for the search box */
	.MuiTextField-root,
	.MuiTextField-root input {
		background-color: var(--clr-white);
		border-radius: var(--radius);
		border: unset;
	}
`;

export const FilterAccordionDetails = styled(AccordionDetails)`
	background: var(--clr-grey-l);
	/* the filter grid carries its own 10px gap, so no extra top padding. The bottom
	   padding repeats that gap so the last row is not sitting on the seam where the
	   footer band starts. */
	padding: 0 16px var(--radius);
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

export const FilterToggle = ({
	count,
	expanded,
	panelId,
	label,
	onToggle,
}: {
	count: string | number;
	expanded: boolean;
	panelId: string;
	label: string;
	onToggle: () => void;
}) => (
	<StyledFilterToggle
		type="button"
		aria-expanded={expanded}
		aria-controls={panelId}
		aria-label={label}
		onClick={event => {
			// the whole summary toggles too, so keep this click from reaching it
			event.stopPropagation();
			onToggle();
		}}
	>
		<span>{count}</span>
		<FilterAltIcon />
	</StyledFilterToggle>
);

/**
 * Clicking the search box must not collapse the panel the user is typing into.
 */
export const shouldToggleFromSummary = (target: EventTarget | null) =>
	!(target instanceof HTMLElement && target.closest('.MuiTextField-root'));
