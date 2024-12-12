import { Dispatch, SetStateAction } from 'react';
import { MapItem, MiscMarker } from '../../classes';
import { EggFormInputs } from '../../components/EasterEggs/ListMenu';
import { IntelFormInputs } from '../../components/Intel/IntelListMenu';
import { MapGroupItem } from '../../components/MapControls/types';
import { DeclassifiedIntelCollected } from '../../data/db';
import { IntelItem } from '../../data/intel';

export interface ToggleDrawerOptions {
	isOpen: boolean;
	content?: JSX.Element;
	clickEvent?:
	| React.SyntheticEvent<any, any>
	| React.KeyboardEvent
	| React.MouseEvent;
}

export interface DeclassifiedContextProps {
	currentMap: MapItem | null;
	setCurrentMapWithValidation: (newMap: MapItem) => Promise<boolean>;

	currentMapGroup: MapGroupItem | null;
	setCurrentMapGroup: Dispatch<SetStateAction<MapGroupItem | null>>;

	filteredIntelStore: IntelItem[];

	currentIntelFilter: IntelFormInputs;
	setCurrentIntelFilter: Dispatch<SetStateAction<IntelFormInputs>>;

	drawerState: DrawerMenuProps;
	toggleDrawer: ({ isOpen, content, clickEvent }: ToggleDrawerOptions) => void;
	collectedIntel: DeclassifiedIntelCollected[] | undefined;

	currentEggFilter: EggFormInputs;
	setCurrentEggFilter: Dispatch<SetStateAction<EggFormInputs>>;

	filteredEggStore: MiscMarker[];
}

export interface IntelContextProviderProps {
	children: React.ReactNode;
}

export interface DrawerMenuProps {
	isOpen: boolean;
	content: JSX.Element;
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface UserContextProps {
	isOnStartup: boolean;
	setIsOnStartup: (state: boolean) => void;
	isMobile: boolean;
	setIsMobile: (state: boolean) => void;
	isDebugMode: boolean;
	setIsDebugMode: (state: boolean) => void;
	initiallySharedMapItemId: string | null;
	setInitiallySharedMapItemId: (state: string | undefined) => void;
	sharedMapItemId: string | null;
	setSharedMapItemId: (id: string | undefined) => void;
	contributionState: {
		isIntel: boolean;
		isContributing: boolean;
		markerName: string | null;
		itemType: string | null;
	};
	setContributionState: (
		newState: Partial<{
			isIntel: boolean;
			isContributing: boolean;
			markerName: string | null;
			itemType: string | null;
		}>
	) => void;
	layerCheckboxStates: { [key: string]: boolean };
	saveLayerCheckboxState: (layer: string, state: boolean) => void;
}
