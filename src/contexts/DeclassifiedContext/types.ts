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
	clickEvent?: React.SyntheticEvent<any, any> | React.KeyboardEvent | React.MouseEvent;
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

	currentEggFilter: EggFormInputs
	setCurrentEggFilter: Dispatch<SetStateAction<EggFormInputs>>;

	filteredEggStore: MiscMarker[],
}

export interface IntelContextProviderProps {
	children: React.ReactNode;
}

export interface DrawerMenuProps {
	isOpen: boolean,
	content: JSX.Element
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface UserContextProps {
	isMobile: boolean;
	setIsMobile: (state: boolean) => void;
	isDebugMode: boolean;
	setIsDebugMode: (state: boolean) => void;
	sharedMapItemId: string | null;
	updateMapItemId: (id: string) => void;
	contributionState: {
		isIntel: boolean;
		isContributing: boolean;
		markerName: string | null;
		itemType: string | null;
	}
	setContributionState: (
		newState: Partial<{
			isIntel: boolean;
			isContributing: boolean;
			markerName: string | null;
			itemType: string | null;
		}>
	) => void;
}