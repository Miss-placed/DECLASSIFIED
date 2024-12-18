import styled from '@emotion/styled';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { MiscMarker } from '../../classes';
import { customMiscIconBounds, getMiscIconUri } from '../../data/icons';
import { DefaultPOIData } from '../../data/intel';
import { MiscDetailItem } from '../MiscDetailsItem';

export const MiscMapMarker = ({
	id,
	title,
	desc,
	icon,
	typeDesc,
	loc,
	img,
	linkedItems,
	externalLinks,
}: MiscMarker) => {
	const { id: sharedMapItemId } = useParams();
	const mapInstance = useMapEvents({});
	const renderedIcon = miscIconInit(icon);
	const [markerInstance, setPopupInstance] = useState<L.Marker | null>(null); // State to hold the Popup instance

	useEffect(() => {
		if (sharedMapItemId === id && markerInstance) {
			markerInstance.openPopup();
		}
	}, [sharedMapItemId, id, markerInstance, mapInstance]);

	return loc !== null && loc.toString() === DefaultPOIData.nullLoc.toString() ? (
		<></>
	) : (
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
					linkedItems={linkedItems}
					externalLinks={externalLinks} />
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


