import { useEffect } from 'react';
import {
	Route,
	BrowserRouter as Router,
	Routes,
	useParams,
} from 'react-router-dom';
import MapProvider from './components/Map';
import {
	UserContextProvider,
	useUserContext,
} from './contexts/UserContext/userContextProvider';
import { BaseLayout } from './pages/layouts/BaseLayout';

function App() {
	document.body.classList.add('dark'); // TODO: remove this when re-working themes

	return (
		<Router>
			<BaseLayout>
				<UserContextProvider>
					<Routes>
						<Route path="/:id" Component={MapWithItemId} />
						<Route path="/" Component={MapProvider} />
						<Route path="/legacy" Component={LegacySite} />
						<Route path="/challenge" Component={LegacyChallengeSite} />
					</Routes>
				</UserContextProvider>
			</BaseLayout>
		</Router>
	);
}

const MapWithItemId = () => {
	const { id } = useParams();
	const { setSharedMapItemId, isDebugMode } = useUserContext();

	// Update the global state with the 'id' parameter
	useEffect(() => {
		if (isDebugMode) {
			console.log('setSharedMapItemId: ', id);
		}
		setSharedMapItemId(id);
	}, [id, isDebugMode, setSharedMapItemId]);

	return <MapProvider />;
};

const LegacySite = () => {
	// Redirects the user to the index file of your legacy site
	window.location.href = '/legacy/index.html'; // Or any starting page in your legacy folder
	return null;
}

const LegacyChallengeSite = () => {
	// Redirects the user to the index file of your legacy site
	window.location.href = '/legacy/challenge.html'; // Or any starting page in your legacy folder
	return null;
}

export default App;
