import { createContext, useContext, useEffect, useState } from 'react';
import { MarkerLayerTypes } from '../../data/types';
import { UserContextProps } from '../DeclassifiedContext/types';

const initializeCheckboxStates = () => {
	const initialLayerCheckboxStates: { [key: string]: boolean; } = {};
	for (const key in MarkerLayerTypes) {
		if (Object.prototype.hasOwnProperty.call(MarkerLayerTypes, key)) {
			initialLayerCheckboxStates[MarkerLayerTypes[key].id] = true;
		}
	}
	return initialLayerCheckboxStates;
}

const initialContextValues = {
	isOnStartup: true,
	setIsOnStartup: () => { },
	isMobile: window.innerWidth <= 768,
	setIsMobile: () => { },
	isDebugMode: JSON.parse(localStorage.getItem('isDebugMode') || 'null') || false,
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
	//set default value from local storage or default value
	layerCheckboxStates: JSON.parse(localStorage.getItem('layerCheckboxStates') || 'null') || initializeCheckboxStates(), // Default value, if we add more than 20 layers we need to update this
	saveLayerCheckboxState: () => { },
};

export const UserContext =
	createContext<UserContextProps>(initialContextValues);

export const UserContextProvider = ({ children }) => {
	const [isOnStartup, setIsOnStartup] = useState(true);
	const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);
	const [isDebugMode, setIsDebugModeState] = useState(initialContextValues.isDebugMode);
	const [initiallySharedMapItemId, setInitialSharedMapItemId] = useState<string | null>(initialContextValues.initiallySharedMapItemId);
	const [sharedMapItemId, setMapItemId] = useState<string | null>(null);
	const [layerCheckboxStates, setLayerCheckboxState] = useState(initialContextValues.layerCheckboxStates ?? initialContextValues.layerCheckboxStates);

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

	const setIsDebugMode = (state: boolean) => {
		localStorage.setItem('isDebugMode', JSON.stringify(state));
		setIsDebugModeState(state);
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

	const saveLayerCheckboxState = (layer: string, state: boolean) => {
		const updatedLayerCheckboxStates = layerCheckboxStates;
		updatedLayerCheckboxStates[layer] = state;
		setLayerCheckboxState(updatedLayerCheckboxStates);
		localStorage.setItem('layerCheckboxStates', JSON.stringify(updatedLayerCheckboxStates));
		if (isDebugMode) {
			console.log('UPDATED layerCheckboxStates', updatedLayerCheckboxStates);
		}
	};

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
				layerCheckboxStates,
				saveLayerCheckboxState
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