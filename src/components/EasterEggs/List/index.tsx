import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { DeclassifiedContext } from "../../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { MiscDetailItem } from "../../MiscDetailsItem";


const StyledEggList = styled.div`
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

export const EggList = () => {
    const { currentMapGroup, filteredEggStore } =
        useContext(DeclassifiedContext);
    // const [loading, setLoading] = useState(true); // TODO - Implement loading spinner

    if (!currentMapGroup) {
        return null;
    }

    const RenderedEggList = filteredEggStore.map(egg => {
        return <MiscDetailItem
            key={egg.id}
            id={egg.id}
            title={egg.title}
            desc={egg.desc}
            typeDesc={egg.typeDesc}
            loc={egg.loc}
            icon={egg.icon}
        />;
    });
    if (RenderedEggList.length === 0) {
        return (
            <NoResults>
                <Paper>
                    <Typography variant="h2"> Nothing Found...</Typography>
                </Paper>
            </NoResults>
        );
    }
    return (
        <>
            <StyledEggList id="egg-list">{RenderedEggList}</StyledEggList>
        </>
    );
};