import {
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import {
	UserContextProvider,
} from './contexts/UserContext/userContextProvider';
import { NotificationProvider } from './contexts/NotificationContext/notificationProvider';
import HomePage from './pages/HomePage';
import EggsMapPage from './pages/eggs/EggsMapPage';
import IntelGamePage from './pages/intel/IntelGamePage';
import IntelLeafPage from './pages/intel/IntelLeafPage';
import IntelMapPage from './pages/intel/IntelMapPage';
import OperationsGamePage from './pages/operations/OperationsGamePage';
import QuestsMapPage from './pages/quests/QuestsMapPage';
import { BaseLayout } from './pages/layouts/BaseLayout';
import {
	HashAnchorNavigator,
	LegacyChallengeRoute,
	LegacySiteRoute,
	MapWithIdRoute,
} from './routes';

function App() {
	document.body.classList.add('dark'); // TODO: remove this when re-working themes

	return (
		<Router>
			<HashAnchorNavigator />
			<BaseLayout>
				<NotificationProvider>
					<UserContextProvider>
						<Routes>
							<Route path="/" Component={HomePage} />
							<Route path="/intel/:gameSlug" Component={IntelGamePage} />
							<Route path="/intel/:gameSlug/:mapSlug" Component={IntelMapPage} />
							<Route
								path="/intel/:gameSlug/:mapSlug/:intelSlug"
								Component={IntelLeafPage}
							/>
							<Route path="/operations/:gameSlug" Component={OperationsGamePage} />
							<Route path="/eggs/:gameSlug/:mapSlug" Component={EggsMapPage} />
							<Route path="/quests/:gameSlug/:mapSlug" Component={QuestsMapPage} />
							<Route path="/:id" Component={MapWithIdRoute} />
							<Route path="/legacy" Component={LegacySiteRoute} />
							<Route path="/challenge" Component={LegacyChallengeRoute} />
						</Routes>
					</UserContextProvider>
				</NotificationProvider>
			</BaseLayout>
		</Router>
	);
}

export default App;
