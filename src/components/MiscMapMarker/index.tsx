import styled from '@emotion/styled';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { MiscMarker } from '../../classes';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { customMiscIconBounds, getMiscIconUri } from '../../data/icons';
import { MiscDetailItem } from '../MiscDetailsItem';

export const MiscMapMarker = ({
	id,
	title,
	desc,
	icon,
	typeDesc,
	loc,
	img,
	linkedItem,
}: MiscMarker) => {
	const mapInstance = useMapEvents({});
	const renderedIcon = miscIconInit(icon);
	const [markerInstance, setPopupInstance] = useState<L.Marker | null>(null); // State to hold the Popup instance
	const { initiallySharedMapItemId } = useUserContext();

	useEffect(() => {
		if (initiallySharedMapItemId === id && markerInstance) {
			markerInstance.openPopup();
		}
	}, [initiallySharedMapItemId, id, markerInstance, mapInstance]);

	return (
		<Marker position={loc} icon={renderedIcon} ref={setPopupInstance}>
			<StyledPopup>
				<MiscDetailItem
					id={id}
					title={title}
					desc={desc}
					typeDesc={typeDesc}
					loc={loc}
					icon={icon}
					img={img}
					isMarker={true}
					linkedItem={linkedItem} />
			</StyledPopup>
		</Marker>
	);
};

export const miscIconInit = (iconFileName?: string) => {
	const { iconSize, iconAnchor, popupAnchor } =
		(iconFileName && customMiscIconBounds[iconFileName]) ?? {};
	return L.icon({
		iconUrl: getMiscIconUri(iconFileName),
		iconSize: iconSize ?? [40, 40],
		iconAnchor: iconAnchor ?? [20, 20],
		popupAnchor: popupAnchor ?? [0, -30],
		className: 'misc-icon',
	});
};



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


