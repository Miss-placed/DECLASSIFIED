import { createContext, useContext, useEffect, useState } from 'react';
import { UserContextProps } from '../DeclassifiedContext/types';

const initialContextValues = {
	isMobile: window.innerWidth <= 768,
	setIsMobile: () => { },
	isDebugMode: false,
	setIsDebugMode: () => { },
	sharedMapItemId: null,
	updateMapItemId: () => { },
	contributionState: {
		isContributing: false,
		markerName: null,
		itemType: null,
	},
	setContributionState: () => { },
};

export const UserContext =
	createContext<UserContextProps>(initialContextValues);

export const UserContextProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);
	const [isDebugMode, setIsDebugMode] = useState(initialContextValues.isDebugMode);
	const [sharedMapItemId, setMapItemId] = useState<string | null>(null);
	const [contributionState, setContributionStateState] = useState<{
		isContributing: boolean;
		markerName: string | null;
		itemType: string | null;
	}>({
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

	const updateMapItemId = (id: string | undefined) => {
		if (id) {
			setMapItemId(id);
		}
	};

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<UserContext.Provider
			value={{
				isMobile,
				setIsMobile,
				isDebugMode,
				setIsDebugMode,
				sharedMapItemId,
				updateMapItemId,
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
