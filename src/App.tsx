import { useEffect } from 'react';
import {
	Route,
	BrowserRouter as Router,
	Routes,
	useParams
} from 'react-router-dom';
import MapProvider from './components/Map';
import { IsValidMapId } from './components/MapControls/MapIds';
import {
	UserContextProvider,
	useUserContext
} from './contexts/UserContext/userContextProvider';
import HomePage from './pages/HomePage';
import IntelGamePage from './pages/intel/IntelGamePage';
import IntelHomePage from './pages/intel/IntelHomePage';
import IntelLeafPage from './pages/intel/IntelLeafPage';
import IntelMapPage from './pages/intel/IntelMapPage';
import { BaseLayout } from './pages/layouts/BaseLayout';

function App() {
	document.body.classList.add('dark'); // TODO: remove this when re-working themes

	return (
		<Router>
			<BaseLayout>
				<UserContextProvider>
					<Routes>
						<Route path="/" Component={HomePage} />
						<Route path="/intel" Component={IntelHomePage} />
						<Route path="/intel/:gameSlug" Component={IntelGamePage} />
						<Route path="/intel/:gameSlug/:mapSlug" Component={IntelMapPage} />
						<Route
							path="/intel/:gameSlug/:mapSlug/:intelSlug"
							Component={IntelLeafPage}
						/>
						<Route path="/:id" Component={MapWithIdRoute} />
						<Route path="/legacy" Component={LegacySite} />
						<Route path="/challenge" Component={LegacyChallengeSite} />
					</Routes>
				</UserContextProvider>
			</BaseLayout>
		</Router>
	);
}

const MapWithIdRoute = () => {
	const { id: mapUrlId } = useParams();
	const { setSharedMapItemId } = useUserContext();
	useEffect(() => {
		if (mapUrlId && !IsValidMapId(mapUrlId)) {
			setSharedMapItemId(mapUrlId);
		}
	}, [mapUrlId, setSharedMapItemId]);

	return <MapProvider />;
};

const LegacySite = () => {
	// Redirects the user to the index file of your legacy site
	window.location.href = '/legacy/index.html'; // Or any starting page in your legacy folder
	return null;
};

const LegacyChallengeSite = () => {
	// Redirects the user to the index file of your legacy site
	window.location.href = '/legacy/challenge.html'; // Or any starting page in your legacy folder
	return null;
};

export default App;
