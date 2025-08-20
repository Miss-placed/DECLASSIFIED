import styled from '@emotion/styled';
import { useLiveQuery } from 'dexie-react-hooks';
import L, { DivIconOptions } from 'leaflet';
import { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useUserContext } from '../../../contexts/UserContext/userContextProvider';
import { db, DeclassifiedIntelCollected } from '../../../data/db';
import { DefaultPOIData, Faction, IntelItem } from '../../../data/IntelTypes';
import { intelIconInit } from '../../../helpers/icons';
import { IntelDetailsItem } from '../IntelDetailsItem';

const StyledPopup = styled(Popup)`
	background-color: var(--clr-bg-inverted);
	border-radius: 12px !important;
	box-shadow: unset !important;
	margin: 0 !important;
	.leaflet-popup-content-wrapper {
		.leaflet-popup-content {
			padding: 0 !important;
			margin: 0 !important;
		}
	}
	.leaflet-popup-close-button {
		display: none !important;
	}
`;

export const IntelMapMarker = ({
	id,
	title,
	desc,
	typeDesc,
	loc,
	faction,
	season,
	img,
	map,
}: IntelItem) => {
	const { sharedMapItemId } = useUserContext();
	const mapInstance = useMapEvents({});
	const [markerInstance, setPopupInstance] = useState<L.Marker | null>(null); // State to hold the Popup instance
	const isCollected = useLiveQuery(() => db.intelCollected.get(id ?? ''));
	const markerIcon = renderLeafletIcon(isCollected, faction, typeDesc);

	useEffect(() => {
		if (sharedMapItemId === id && markerInstance) {
			markerInstance.openPopup();
		}
	}, [sharedMapItemId, id, markerInstance, mapInstance]);

	return loc !== null && loc.toString() === DefaultPOIData.nullLoc.toString() ? (
		<></>
	) : (
		<>
			<Marker position={loc} icon={markerIcon} ref={setPopupInstance}>
				<StyledPopup>
					<IntelDetailsItem
						key={id}
						id={id!}
						faction={faction}
						season={season}
						typeDesc={typeDesc}
						loc={loc}
						map={map}
						title={title}
						desc={desc ?? ''}
						img={img}
						isMarker={true}
					/>
				</StyledPopup>
			</Marker>
		</>
	);
};

const renderLeafletIcon = (
	isCollected: DeclassifiedIntelCollected | undefined,
	faction: Faction,
	type: string
) => {
	var markerIcons: DivIconOptions = {
		html: intelIconInit(faction, type),
		className: `intel-icon ${isCollected ? 'collected-marker' : ''}`,
		iconSize: [25, 25],
		iconAnchor: [12.5, 40],
		shadowSize: [33, 44],
		shadowAnchor: [33 / 2, 44],
		popupAnchor: [0, -25],
	};

	return L.divIcon(markerIcons);
};
