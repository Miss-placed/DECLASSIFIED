import { createContext, useContext, useEffect, useState } from 'react';
import { UserContextProps } from '../DeclassifiedContext/types';

const initialContextValues = {
	isOnStartup: true,
	setIsOnStartup: () => { },
	isMobile: window.innerWidth <= 768,
	setIsMobile: () => { },
	isDebugMode: false,
	setIsDebugMode: () => { },
	initiallySharedMapItemId: null,
	setInitiallySharedMapItemId: () => { },
	sharedMapItemId: null,
	setSharedMapItemId: () => { },
	contributionState: {
		isIntel: false,
		isContributing: false,
		markerName: null,
		itemType: null,
	},
	setContributionState: () => { },
};

export const UserContext =
	createContext<UserContextProps>(initialContextValues);

export const UserContextProvider = ({ children }) => {
	const [isOnStartup, setIsOnStartup] = useState(true);
	const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);
	const [isDebugMode, setIsDebugMode] = useState(initialContextValues.isDebugMode);
	const [initiallySharedMapItemId, setInitialSharedMapItemId] = useState<string | null>(initialContextValues.initiallySharedMapItemId);
	const [sharedMapItemId, setMapItemId] = useState<string | null>(null);
	const [contributionState, setContributionStateState] = useState<{
		isIntel: boolean;
		isContributing: boolean;
		markerName: string | null;
		itemType: string | null;
	}>({
		isIntel: initialContextValues.contributionState.isIntel,
		isContributing: initialContextValues.contributionState.isContributing,
		markerName: initialContextValues.contributionState.markerName,
		itemType: initialContextValues.contributionState.itemType,
	});

	const setContributionState = (
		newState: Partial<{
			isContributing: boolean;
			markerName: string | null;
			itemType: string | null;
		}>
	) => {
		setContributionStateState((prevState) => ({
			...prevState,
			...newState,
		}));
	};

	const setSharedMapItemId = (id: string | undefined) => {
		if (id) {
			window.history.replaceState(null, "", `/${id}`);
			if (isDebugMode) {
				console.log('Setting url to: ', id);
			}
			setMapItemId(id);
		}
	};

	const setInitiallySharedMapItemId = (id: string | undefined) => {
		if (isDebugMode) {
			console.log('Setting setInitiallySharedMapItemId to: ', id);
		}
		setInitialSharedMapItemId(id || null);
	}

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<UserContext.Provider
			value={{
				isOnStartup,
				setIsOnStartup,
				isMobile,
				setIsMobile,
				isDebugMode,
				setIsDebugMode,
				initiallySharedMapItemId,
				setInitiallySharedMapItemId,
				sharedMapItemId,
				setSharedMapItemId,
				contributionState,
				setContributionState,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUserContext must be used within a UserProvider');
	}
	return context;
};
