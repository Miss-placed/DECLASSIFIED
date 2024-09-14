import { Paper, Typography } from '@mui/material';
import { useContext } from 'react';
import styled from 'styled-components';
import { DeclassifiedContext } from '../../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { IntelDetailsItem } from '../IntelDetailsItem';

const StyledIntelList = styled.div`
	background-color: var(--clr-grey-d);
	padding: 10px;
`;

const NoResults = styled.div`
    padding: 10px;

    .MuiPaper-root{
        background-color: var(--clr-bg-inverted);
    }
	h2 {
        display: flex;
		justify-content: center;
		font-size: 1.5rem;
        padding: 10px;
	}
`;

export const IntelList = ({ multiSelectState, addRemoveItemMultiSelect }) => {
	const { currentMapGroup, filteredIntelStore } =
		useContext(DeclassifiedContext);
	// const [loading, setLoading] = useState(true); // TODO - Implement loading spinner

	if (!currentMapGroup) {
		return null;
	}

	const RenderedIntelList = filteredIntelStore.map(intel => {
		return <IntelDetailsItem key={intel.id} {...intel} multiSelectState={multiSelectState} addRemoveItemMultiSelect={addRemoveItemMultiSelect} />;
	});
	if (RenderedIntelList.length === 0) {
		return (
			<NoResults>
				<Paper>
					<Typography variant="h2"> No Intel Found...</Typography>
				</Paper>
			</NoResults>
		);
	}
	return (
		<>
			<StyledIntelList id="intel-list">{RenderedIntelList}</StyledIntelList>
		</>
	);
};