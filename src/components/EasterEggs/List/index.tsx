import styled from '@emotion/styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, Typography } from '@mui/material';
import { useContext, useMemo, useState } from 'react';
import { MiscMarker } from '../../../classes';
import { DeclassifiedContext } from '../../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { getEggMarkerTypeLabel } from '../../../data/listFiltering';
import { MiscDetailItem } from '../../MiscDetailsItem';

const StyledEggList = styled.div`
	background-color: var(--clr-grey-d);
	padding: 10px;
`;

const NoResults = styled.div`
	padding: 10px;

	.MuiPaper-root {
		background-color: var(--clr-bg-inverted);
	}
	h2 {
		display: flex;
		justify-content: center;
		font-size: 1.5rem;
		padding: 10px;
	}
`;

const NoResultsActions = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 0 0.75rem;
`;

const EggSectionAccordion = styled(Accordion)`
	margin: 0 0 0.75rem;
	box-shadow: none;
	background: transparent;

	&:before {
		display: none;
	}
`;

const EggSectionSummary = styled(AccordionSummary)`
	background-color: var(--clr-grey-l);

	.MuiAccordionSummary-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.35rem 0;
	}
`;

const EggSectionTitle = styled(Typography)`
	font-size: 0.95rem;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: var(--clr-white-d);
`;

const EggSectionCount = styled(Typography)`
	color: var(--clr-white-d);
	opacity: 0.9;
	font-size: 0.85rem;
`;

const EggSectionDetails = styled(AccordionDetails)`
	background: transparent;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	padding-top: 0.5rem;
`;

type EggSectionGroup = {
	key: string;
	title: string;
	items: MiscMarker[];
};

const sortEggItems = (items: MiscMarker[]) =>
	[...items].sort(
		(a, b) =>
			(a.stepNumber ?? Number.MAX_SAFE_INTEGER) -
				(b.stepNumber ?? Number.MAX_SAFE_INTEGER) || a.title.localeCompare(b.title)
	);

export const EggList = ({
	onClearFilters,
}: {
	onClearFilters?: () => void;
}) => {
	const { currentMapGroup, filteredEggStore } = useContext(DeclassifiedContext);
	const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

	const toggleSection = (key: string, defaultExpanded: boolean) => {
		setExpandedSections(prev => ({ ...prev, [key]: !((prev[key] ?? defaultExpanded) === true) }));
	};

	const groupedSections = useMemo(() => {
		const stepEggs = sortEggItems(
			filteredEggStore.filter(egg => typeof egg.stepNumber === 'number')
		);
		const nonStepEggs = filteredEggStore.filter(egg => typeof egg.stepNumber !== 'number');
		const typeMap = new Map<string, typeof nonStepEggs>();
		nonStepEggs.forEach(egg => {
			const label = getEggMarkerTypeLabel(egg);
			const current = typeMap.get(label) ?? [];
			current.push(egg);
			typeMap.set(label, current);
		});

		const sharedTypeGroups: EggSectionGroup[] = [];
		const singletonEggs: typeof nonStepEggs = [];

		Array.from(typeMap.entries())
			.sort((a, b) => a[0].localeCompare(b[0]))
			.forEach(([label, items]) => {
				if (items.length > 1) {
					sharedTypeGroups.push({
						key: `type-${label}`,
						title: label,
						items: sortEggItems(items),
					});
				} else {
					singletonEggs.push(...items);
				}
			});

		const sections: EggSectionGroup[] = [];
		if (stepEggs.length > 0) {
			sections.push({ key: 'steps', title: 'Steps', items: stepEggs });
		}
		sections.push(...sharedTypeGroups);
		if (singletonEggs.length > 0) {
			sections.push({
				key: 'other-items',
				title: 'Other Items',
				items: sortEggItems(singletonEggs),
			});
		}
		return sections;
	}, [filteredEggStore]);

	const renderEgg = (egg: MiscMarker) => (
		<MiscDetailItem
			key={egg.id}
			id={egg.id}
			title={egg.title}
			desc={egg.desc}
			typeDesc={egg.typeDesc}
			loc={egg.loc}
			icon={egg.icon}
			img={egg.img}
			stepNumber={egg.stepNumber}
			linkedItems={egg.linkedItems}
			externalLinks={egg.externalLinks}
		/>
	);

	if (!currentMapGroup) {
		return null;
	}

	if (filteredEggStore.length === 0) {
		return (
			<NoResults>
				<Paper>
					<Typography variant="h2">No Markers Found...</Typography>
					<NoResultsActions>
						<Button onClick={onClearFilters}>
							Clear Filters
						</Button>
					</NoResultsActions>
				</Paper>
			</NoResults>
		);
	}

	return (
		<StyledEggList id="egg-list">
			{groupedSections.map(section => {
				const isExpanded = expandedSections[section.key] ?? true;
				return (
					<EggSectionAccordion
						key={section.key}
						expanded={isExpanded}
						onChange={() => toggleSection(section.key, true)}
					>
						<EggSectionSummary expandIcon={<ExpandMoreIcon />}>
							<EggSectionTitle variant="h3">{section.title}</EggSectionTitle>
							<EggSectionCount>{section.items.length}</EggSectionCount>
						</EggSectionSummary>
						<EggSectionDetails>{section.items.map(renderEgg)}</EggSectionDetails>
					</EggSectionAccordion>
				);
			})}
		</StyledEggList>
	);
};
