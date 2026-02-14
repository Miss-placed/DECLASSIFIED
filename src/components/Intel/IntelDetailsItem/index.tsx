import styled from "@emotion/styled";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Accordion, AccordionDetails, AccordionSummary, Button, Tooltip, Typography } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { useContext, useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet";
import { Link } from "react-router-dom";
import { DeclassifiedContext } from "../../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { useUserContext } from "../../../contexts/UserContext/userContextProvider";
import { addCollectedIntel, deleteCollectedIntel } from "../../../data/dataAccessLayer";
import { db } from "../../../data/db";
import { gameForIntel, intelSlug, mapTitleFromId, slugifyIntel } from '../../../data/intelSeo';
import { DefaultPOIData, Faction, IIntelItem } from '../../../data/IntelTypes';
import { GetMapById } from "../../../data/maps/mapDetails";
import { toSnakeCase } from "../../../helpers/icons";
import { BugReportButton } from "../../ActionButtons/BugReportButton";
import { ShareButton } from "../../ActionButtons/ShareButton";
import { CustomImage } from "../../CustomImage";

export interface IIntelItemWithHandler extends IIntelItem {
	isMarker?: boolean;
	multiSelectState?: string;
	addRemoveItemMultiSelect?: (value: string) => void;
}

export const IntelDetailsItem = ({
	id,
	faction,
	season,
	typeDesc,
	loc,
	map,
	title,
	desc,
	img = undefined,
	isMarker = false,
	multiSelectState,
	addRemoveItemMultiSelect,
}: IIntelItemWithHandler) => {
	const { setSharedMapItemId } = useUserContext();
	const { setCurrentMapWithValidation: setCurrentMap, currentMap } = useContext(DeclassifiedContext);
	const mapInstance = useMapEvents({});
	const [expanded, setExpanded] = useState(false);
	const [isSelected, setIsSelected] = useState(multiSelectState?.includes(id) ?? false);
	const IntelHasLocation = loc !== DefaultPOIData.nullLoc;
	const IntelIsOnAnotherMap = map !== currentMap!.id;
	const isCollected = useLiveQuery(() => db.intelCollected.get(id));
	const mapItem = GetMapById(map!);
	const game = gameForIntel(id);
	const mapSlug = slugifyIntel(mapTitleFromId(map));
	const intelDossierUrl = `/intel/${game.slug}/${mapSlug}/${intelSlug(title, id)}`;

	function handleSelectIntel(event, isSelected: boolean): void {
		event.stopPropagation();
		setIsSelected(isSelected);
		addRemoveItemMultiSelect!(id);
	}

	useEffect(() => {
		const isCurrentlySelected = multiSelectState?.includes(id) ?? false;
		if (isSelected !== isCurrentlySelected) {
			setIsSelected(isCurrentlySelected);
		}
	}, [id, multiSelectState, isSelected]);

	return (
		<StyledAccordion
			defaultExpanded={isMarker}
			onChange={(event) => {
				setExpanded(!expanded)
			}}
		>
			<IntelSummary
				expandIcon={isMarker ? null : <ExpandMoreIcon />}
				aria-controls="intel-item"
				className={`intel-item-header ${isCollected ? 'collected' : ''}`}
				data-faction={faction}
				data-type={typeDesc}
			>
				<img
					className="icon"
					src={`/assets/img/markers/${toSnakeCase(typeDesc)}.svg`}
					alt="Icon"
				/>
				{!isMarker ? (isSelected ? (
					<Button
						title="selected"
						onClick={(event) => handleSelectIntel(event, false)}
					>
						<CheckBoxIcon htmlColor="var(--clr-blue)" />
					</Button>
				) : (
					<Button
						title="selected"
						onClick={(event) => handleSelectIntel(event, true)}>
						<CheckBoxOutlineBlankIcon htmlColor="var(--clr-blue)" />
					</Button>
				)) : null}
				<Typography variant="h2" className="intelTitle">
					{title}
				</Typography>
			</IntelSummary>
			{isMarker || expanded ? (
				<StyledAccordionDetails>
					<CustomImage src={img} altText="Placeholder" />
					<IntelDetails>
						<IntelSubheading variant="h3">
							{!isMarker ? `${mapItem?.title} - ` : ``}{season} - {typeDesc}{faction !== Faction.None ? ` - ${faction}` : ''}
						</IntelSubheading>
						<IntelDescription>
							{desc.trim()}
						</IntelDescription>
						<StyledIntelActionContainer>
							{isCollected ? (
								<Tooltip title="Classify">
									<Button
										title="classify"
										onClick={() => deleteCollectedIntel([id])}
									>
										<ClearIcon htmlColor="var(--clr-blue)" />
									</Button>
								</Tooltip>
							) : (
								<Tooltip title="Declassify">
									<Button title="declassify" onClick={() => addCollectedIntel([id])}>
										<DoneIcon htmlColor="var(--clr-blue)" />
									</Button>
								</Tooltip>
							)}
							<Tooltip title="View Dossier">
								<Button
									component={Link}
									to={intelDossierUrl}
									title="View Dossier"
								>
									<MenuBookIcon htmlColor="var(--clr-blue)" />
								</Button>
							</Tooltip>
							{IntelHasLocation && mapItem?.mapCanRender ? (
								<Tooltip title="Locate on Map">
									<Button
										onClick={async () => {
											if (IntelIsOnAnotherMap) {
												if (mapItem && mapItem.mapCanRender) {
													var mapSetResult = await setCurrentMap(mapItem);
													if (mapSetResult) {
														mapInstance.flyTo(loc, 4);
														setSharedMapItemId(id);
													}
												}
											} else {
												mapInstance.flyTo(loc, 4);
												setSharedMapItemId(id);
											}
										}}
									>
										<LocationOnIcon htmlColor="var(--clr-blue)" />
									</Button>
								</Tooltip>
							) : (
								<></>
							)}
							<ShareButton id={id} />
							<BugReportButton id={id} typeDesc={typeDesc} mapItem={mapItem} />
						</StyledIntelActionContainer>
					</IntelDetails>
				</StyledAccordionDetails>
			) : null}
		</StyledAccordion>
	);
};

const StyledAccordion = styled(Accordion)`
	background-color: var(--clr-bg-inverted);

	.collected {
		background: linear-gradient(
			245deg,
			rgba(255, 255, 255, 0) 0%,
			var(--clr-green) 0%,
			var(--clr-green) 15%,
			rgba(255, 255, 255, 0) 10%
		);
		svg[data-testid='ExpandMoreIcon'] {
			color: var(--clr-white);
		}
		border-top-right-radius: inherit;
	}

	.intel-item-header[data-faction='Requiem'] .icon {
		background-color: var(--clr-blue);
	}

	.intel-item-header[data-faction='Omega'] .icon {
		background-color: var(--clr-red);
	}

	.intel-item-header[data-faction='Maxis'] .icon {
		background-color: var(--clr-blue-d);
	}

	.intel-item-header[data-faction='Dark Aether'] .icon {
		background-color: var(--clr-purple);
	}

	.intel-item-header .icon {
		background-color: var(--clr-red);
	}

	.intelTitle {
		padding-left: 7px;
	}
`;
const IntelSummary = styled(AccordionSummary)`
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

	.intelTitle {
		margin: 0 auto;
		white-space: nowrap;
		overflow: hidden;
		text-wrap: pretty;
		text-align: center;
	}
`;

const StyledAccordionDetails = styled(AccordionDetails)`
	img {
		width: 100%;
	}
	padding: 0px;
`;

const IntelDetails = styled.div`
	h3 {
		font-size: 0.8rem;
	}
	p {
		font-size: 0.7rem;
	}
	svg {
		font-size: 1.2rem;
	}

	padding: 8px;
`;

const StyledIntelActionContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

const IntelSubheading = styled(Typography)`
	font-weight: bold;
	text-align: center;
`;

const IntelDescription = styled(Typography)`
	text-align: center;
	margin: 0px !important;
	font-size: 0.7rem;
	white-space: pre-wrap;
`;
