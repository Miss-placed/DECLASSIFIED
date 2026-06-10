import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { useContext } from 'react';
import { DeclassifiedContext } from '../../../contexts/DeclassifiedContext/declassifiedContextProvider';
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

export const EggList = () => {
	const { currentMapGroup, filteredEggStore } = useContext(DeclassifiedContext);
	// const [loading, setLoading] = useState(true); // TODO - Implement loading spinner

	if (!currentMapGroup) {
		return null;
	}

	const stepEggs = filteredEggStore
		.filter(egg => typeof egg.stepNumber === 'number')
		.sort(
			(a, b) =>
				(a.stepNumber ?? Number.MAX_SAFE_INTEGER) -
					(b.stepNumber ?? Number.MAX_SAFE_INTEGER) ||
				a.title.localeCompare(b.title)
		);
	const normalEggs = filteredEggStore.filter(
		egg => typeof egg.stepNumber !== 'number'
	);
	const renderEgg = egg => (
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
	if (filteredEggStore.length === 0) {
		return (
			<NoResults>
				<Paper>
					<Typography variant="h2"> Nothing Found...</Typography>
				</Paper>
			</NoResults>
		);
	}

	if (stepEggs.length === 0) {
		return (
			<StyledEggList id="egg-list">
				{filteredEggStore.map(renderEgg)}
			</StyledEggList>
		);
	}

	return (
		<>
			<StyledEggList id="egg-list">
				<EggSection>
					<EggSectionTitle variant="h3">Steps</EggSectionTitle>
					<EggSectionList>{stepEggs.map(renderEgg)}</EggSectionList>
				</EggSection>
				{normalEggs.length > 0 ? (
					<EggSection>
						<EggSectionTitle variant="h3">Other Items</EggSectionTitle>
						<EggSectionList>{normalEggs.map(renderEgg)}</EggSectionList>
					</EggSection>
				) : null}
			</StyledEggList>
		</>
	);
};

const EggSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const EggSectionTitle = styled(Typography)`
	padding: 0 0.25rem;
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: var(--clr-white-d);
`;

const EggSectionList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;
