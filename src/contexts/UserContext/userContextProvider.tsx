import { createContext, useContext, useEffect, useState } from 'react';
import { UserContextProps } from '../DeclassifiedContext/types';

const initialContextValues = {
	isMobile: window.innerWidth <= 768,
	setIsMobile: () => { },
	isDebugMode: false,
	setIsDebugMode: () => { },
	sharedMapItemId: null,
	updateMapItemId: () => { },
};

export const UserContext =
	createContext<UserContextProps>(initialContextValues);

export const UserContextProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);
	const [isDebugMode, setIsDebugMode] = useState(
		initialContextValues.isDebugMode
	);
	const [sharedMapItemId, setMapItemId] = useState<string | null>(null);

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
