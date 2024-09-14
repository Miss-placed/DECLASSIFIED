import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useMapEvents } from "react-leaflet";
import { DeclassifiedContext } from "../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { SvgIcons } from "../../data/icons";
import { DefaultPOIData } from "../../data/intel";
import { GetMapById } from "../../data/mapDetails";
import { getMiscMarkerById } from "../../helpers/github";
import { BugReportButton } from "../ActionButtons/BugReportButton";
import { ShareButton } from "../ActionButtons/ShareButton";

export const MiscDetailItem = ({
	id,
	title,
	desc,
	typeDesc,
	loc,
	icon,
	img = undefined,
	isMarker = false, }) => {
	const { setCurrentMapWithValidation: setCurrentMap, currentMap } = useContext(DeclassifiedContext);
	const mapInstance = useMapEvents({});
	const [expanded, setExpanded] = useState(false);
	let miscItemResult = getMiscMarkerById(id!);
	let miscItemMap, miscMapId, miscItem;
	if (miscItemResult) {
		[miscMapId, miscItem] = miscItemResult;
		const MiscHasLocation = miscItem.loc !== DefaultPOIData.nullLoc;
		if (MiscHasLocation) {
			miscItemMap = GetMapById(miscMapId)!;
		}
	}
	const iconSource = `assets/img/markers/${(icon ?? '').toLowerCase()}.${SvgIcons[icon ?? ''] ? 'svg' : 'png'}`;
	const ItemHasLocation = loc !== DefaultPOIData.nullLoc;
	const ItemIsOnAnotherMap = miscMapId !== currentMap!.id;

	return (


		<StyledAccordion
			defaultExpanded={isMarker}
			onChange={() => setExpanded(!expanded)}
		>
			<MiscItemSummary
				expandIcon={isMarker ? null : <ExpandMoreIcon />}
				aria-controls="misc-item"
				className={`misc-item-header`}
				data-type={typeDesc}
			>
				<img
					className="icon"
					src={iconSource}
					alt="Icon"
				/>
				<Typography variant="h2" className="miscItemTitle">
					{title}
				</Typography>
			</MiscItemSummary>
			{isMarker || expanded ? (
				<StyledAccordionDetails>
					{/* <CustomImage src={img} altText="Placeholder" /> */}
					<MiscDetailItemContainer>
						{/* <PopupTitle variant="h2">{title}</PopupTitle> */}
						<MiscDescription>{desc}</MiscDescription>
						<ActionContainer>
							{ItemHasLocation && miscItemMap?.mapCanRender ? <Button onClick={async () => {
								if (ItemIsOnAnotherMap) {
									if (miscItemMap && miscItemMap.mapCanRender) {
										var mapSetResult = await setCurrentMap(miscItemMap);

										if (mapSetResult) {
											mapInstance.flyTo(loc, 4);
										}
									}
								} else {
									mapInstance.flyTo(loc, 4);
								}
							}}>
								<LocationOnIcon htmlColor="var(--clr-blue)" />
							</Button> : <Button disabled>
								<LocationOnIcon htmlColor="var(--clr-blue)" />
							</Button>}
							<ShareButton id={id} />
							<BugReportButton id={id} typeDesc={icon} mapItem={miscItemMap} /> {/* TODO: standardise the typeDesc to all come from the same icon id store */}
						</ActionContainer>
					</MiscDetailItemContainer>
				</StyledAccordionDetails>
			) : null}
		</StyledAccordion>
	);
}

const MiscDetailItemContainer = styled(Paper)`
	background-color: unset;
	border-radius: unset;
	padding: 8px;
	/* width:300px; */
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
const PopupTitle = styled(Typography)`
	font-size: 1.1rem;
	margin: 0 auto;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
`;

const MiscDescription = styled(Typography)`
	text-align: center;
	margin: 0px !important;
	font-size: 0.7rem;
	white-space: pre-wrap;
	/* width: 10rem; */
`;

const ActionContainer = styled.div`
	svg {
		font-size: 1.2rem;
	}
	display: flex;
	justify-content: space-evenly;
`;

const StyledAccordion = styled(Accordion)`
	background-color: var(--clr-bg-inverted);

	.misc-item-header .icon {
		background-color: var(--clr-grey-l);
	}

	.miscItemTitle {
		padding-left: 7px;
	}
`;

const StyledAccordionDetails = styled(AccordionDetails)`
	img {
		width: 100%;
	}
	padding: 0px;
`;

const MiscItemSummary = styled(AccordionSummary)`
	padding-left: 0px;
	min-height: unset;
	width: 100%;

	.MuiTypography-h2 {
		font-size: 1.1rem;
	}

	.Mui-expanded &&& {
		min-height: unset;
		margin: unset;
	}

	.MuiAccordionSummary-content,
	.MuiAccordionSummary-content.MuiAccordionSummary-contentGutters {
		align-items: center;
		margin: 0px;
		width: 100%;
		overflow: hidden;
	}

	.icon {
		height: 100%;
		padding: 10px;
		align-self: stretch;
		object-fit: contain;
		height: unset;
	}

	.miscItemTitle {
		margin: 0 auto;
		white-space: nowrap;
		overflow: hidden;
		text-wrap: pretty;
		text-align: center;
	}
`;