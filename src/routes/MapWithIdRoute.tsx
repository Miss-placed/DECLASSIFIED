import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MapProvider from '../components/Map';
import { IsValidMapId } from '../components/MapControls/MapIds';
import { useUserContext } from '../contexts/UserContext/userContextProvider';

export default function MapWithIdRoute() {
	const { id: mapUrlId } = useParams();
	const { setSharedMapItemId } = useUserContext();

	useEffect(() => {
		if (mapUrlId && !IsValidMapId(mapUrlId)) {
			setSharedMapItemId(mapUrlId);
		}
	}, [mapUrlId, setSharedMapItemId]);

	return <MapProvider />;
}
