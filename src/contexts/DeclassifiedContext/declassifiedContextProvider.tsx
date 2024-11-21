import { useLiveQuery } from 'dexie-react-hooks';
import {
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { useMapEvent, useMapEvents } from 'react-leaflet';
import { MapItem, MiscMarker } from '../../classes';
import { EggFormInputs, getEggFilterDefaults } from '../../components/EasterEggs/ListMenu';
import {
	getIntelFilterDefaults,
	IntelFormInputs,
} from '../../components/Intel/IntelListMenu';
import { MapGroupings, MapGroupItem } from '../../components/MapControls/types';
import {
	getSetUserPreferences,
	updateUserPreferences,
} from '../../data/dataAccessLayer';
import { db, DeclassifiedUserPreferences } from '../../data/db';
import { StaticEggStore } from '../../data/easterEggs';
import { DefaultPOIData, IntelItem, IntelStore } from '../../data/intel';
import { filterIntel, filterMisc } from '../../data/listFiltering';
import { StaticQuestStore } from '../../data/mainQuest';
import { GetMapById, GetMapByTitle, MapDetails } from '../../data/maps/mapDetails';
import { checkUserHasUnmigratedPreferences, markAsMigrated, migrateOldUserPreferences } from '../../data/migration';
import { getIntelById, getMiscMarkerById } from '../../helpers/github';
import { useNotification } from '../NotificationContext/notificationContext';
import {
	useUserContext,
} from '../UserContext/userContextProvider';
import { DeclassifiedContextProps, ToggleDrawerOptions } from './types';

let timeoutId: ReturnType<typeof setTimeout> | null = null;

const initialContextValues = {
	userPrefs: {},
	currentMap: null,
	setCurrentMapWithValidation: async () => false,
	currentMapGroup: null,
	setCurrentMapGroup: () => { },
	filteredIntelStore: [],
	setFilteredIntelStore: () => { },
	currentIntelFilter: getIntelFilterDefaults(),
	setCurrentIntelFilter: () => { },
	drawerState: { isOpen: false, content: <></> },
	toggleDrawer: () => () => { },
	collectedIntel: undefined,

	currentEggFilter: getEggFilterDefaults(),
	setCurrentEggFilter: () => { },
	filteredEggStore: [],
};

async function updateUserPreferencesInDB(
	updates: Partial<Omit<DeclassifiedUserPreferences, 'username'>>
): Promise<DeclassifiedUserPreferences | undefined> {
	return await updateUserPreferences(updates);
}

export const DeclassifiedContext = createContext<DeclassifiedContextProps>(initialContextValues);

export const DeclassifiedContextProvider = ({ children }) => {
	const mapInstance = useMapEvents({});
	const { isOnStartup, isDebugMode, setSharedMapItemId } = useUserContext();
	const [userPrefs, setUserPreferences] =
		useState<DeclassifiedUserPreferences | null>(null);
	const [currentMap, setCurrentMap] = useState<MapItem | null>(null);
	const [currentMapGroup, setCurrentMapGroup] = useState<MapGroupItem | null>(
		null
	);
	const [isLoading, setIsLoading] = useState(true); // Add loading state
	const [filteredIntelStore, setFilteredIntelStore] = useState<IntelItem[]>([]);
	const [currentIntelFilter, setCurrentIntelFilter] = useState<IntelFormInputs>(
		getIntelFilterDefaults()
	);
	const [currentEggFilter, setCurrentEggFilter] = useState<EggFormInputs>(
		getEggFilterDefaults()
	);
	const [filteredEggStore, setFilteredEggStore] = useState<MiscMarker[]>([]);
	const [drawerState, setDrawerState] = useState(
		initialContextValues.drawerState
	);
	const { initiallySharedMapItemId, setInitiallySharedMapItemId, setIsOnStartup } = useUserContext();
	const { triggerDialog } = useNotification();
	const [isMapLoaded, setIsMapLoaded] = useState(false);

	const setCurrentMapWithValidation = useCallback(async (newMap: MapItem) => {
		if (isDebugMode) {
			console.log('Setting current map to: ', newMap);
		}
		if (newMap.mapOverlay !== null && newMap.mapOverlay !== undefined) {
			setCurrentMap(newMap);
			Object.entries(MapGroupings).forEach(([key, mapItem]) => {
				if (newMap && mapItem.mapLayers.includes(newMap)) {
					if (isDebugMode) {
						console.log('Setting current map GROUP to: ', mapItem);
					}
					setCurrentMapGroup(mapItem);
					setSharedMapItemId(newMap.id);
				}
			});
			await updateUserPreferencesInDB({ currentMap: newMap.id });

			return true;
		} else {
			console.error("Cannot set a map that doesn't exist.");
			return false;
		}
	}, [isDebugMode, setSharedMapItemId]);

	const toggleDrawer = ({ isOpen, content, clickEvent }: ToggleDrawerOptions) => {
		if (isDebugMode) {
			console.log('toggleDrawer: ', isOpen, content);
		}
		if (
			clickEvent &&
			clickEvent.type === 'keydown' &&
			((clickEvent as React.KeyboardEvent).key === 'Tab' ||
				(clickEvent as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}
		setDrawerState({ isOpen, content: content ?? <></> });
	};

	useMapEvent('baselayerchange', props => {
		let currentMapKey = GetMapByTitle(props.name);
		if (currentMapKey) {
			if (isDebugMode) {
				console.log('setCurrentMapWithValidation with baselayerchange: ', currentMapKey);
			}
			setCurrentMapWithValidation(MapDetails[currentMapKey]);
		}
	});

	const focusOnSharedItem = useCallback(async (sharedMapItemId) => {
		if (isMapLoaded) {
			if (sharedMapItemId) {
				const sharedMapItem = GetMapById(sharedMapItemId)
				if (sharedMapItem) {
					setCurrentMapWithValidation(sharedMapItem);

					return;
				}
				if (isDebugMode) {
					console.log('Focus on shared item: ', sharedMapItemId);
				}
				let intelItem = getIntelById(sharedMapItemId);
				if (intelItem && intelItem.map) {
					const IntelHasLocation = intelItem.loc !== DefaultPOIData.nullLoc;
					if (IntelHasLocation) {
						const intelItemMap = GetMapById(intelItem.map)!;
						if (isDebugMode) {
							console.log('setCurrentMapWithValidation with INTEL: ', intelItem);
							console.log('intelItemMap: ', intelItemMap);
						}
						await setCurrentMapWithValidation(intelItemMap);
						mapInstance.flyTo(intelItem.loc, 4);
						return;
					}

					return;
				} else {
					let miscItemResult = getMiscMarkerById(sharedMapItemId);
					if (miscItemResult) {
						const [miscMapId, miscItem] = miscItemResult;
						if (miscItem && miscMapId) {
							const MiscHasLocation = miscItem.loc !== DefaultPOIData.nullLoc;
							if (MiscHasLocation) {
								const miscItemMap = GetMapById(miscMapId)!;
								if (isDebugMode) {
									console.log('setCurrentMapWithValidation with MISC: ', miscItem);
									console.log('miscItemMap: ', miscItemMap);
								}
								await setCurrentMapWithValidation(miscItemMap);
								mapInstance.flyTo(miscItem.loc, 4);
								return;
							}
						}
					}
					return;
				}
			}
		}
	}, [isDebugMode, isMapLoaded, mapInstance, setCurrentMapWithValidation]);

	const collectedIntel = useLiveQuery(async () => {
		return await db.intelCollected.toArray();
	});

	useEffect(() => {
		if (currentMapGroup) {
			var filteredIntel = filterIntel(
				collectedIntel,
				currentMapGroup,
				IntelStore,
				currentIntelFilter.searchTerm,
				currentIntelFilter.factions,
				currentIntelFilter.seasons,
				currentIntelFilter.intelTypes,
				currentIntelFilter.currentMapOnly,
				currentIntelFilter.collectedIntelFilter
			);
			setFilteredIntelStore(filteredIntel);
		}
	}, [collectedIntel, currentIntelFilter, currentMapGroup])

	useEffect(() => {
		if (currentMapGroup && StaticEggStore && StaticQuestStore) {
			var filteredMisc = filterMisc(
				currentMapGroup,
				StaticEggStore,
				StaticQuestStore,
				currentEggFilter.searchTerm,
				currentEggFilter.easterEggTypes,
			);
			filteredMisc = filteredMisc.sort((a, b) => a.title.localeCompare(b.title));
			setFilteredEggStore(filteredMisc);
		}
	}, [collectedIntel, currentEggFilter.easterEggTypes, currentEggFilter.searchTerm, currentIntelFilter, currentMapGroup])

	useEffect(() => {
		const fetchPreferences = async () => {
			try {
				const data = await getSetUserPreferences();
				setUserPreferences(data!);

				if (checkUserHasUnmigratedPreferences()) {
					var dialogMessage = `Looks like you're a returning user! Would you like us to migrate your old settings & progress?`;
					triggerDialog(dialogMessage, { trueText: 'Yes', falseText: 'No' }, (result) => {
						if (result) {
							migrateOldUserPreferences();
						}
						markAsMigrated();
					});
				}

				if (!initiallySharedMapItemId && isOnStartup && data!.currentMap !== initiallySharedMapItemId) {
					const userPrefsCurrentMap = GetMapById(data!.currentMap);
					if (userPrefsCurrentMap) {
						if (isDebugMode) {
							console.log('Setting current map from user preferences: ', userPrefsCurrentMap);
						}
						setCurrentMapWithValidation(userPrefsCurrentMap);
					}
				}

				setIsMapLoaded(true);
				setIsOnStartup(false);
			} catch (error) {
				console.error('Failed to fetch user preferences: ', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPreferences();

		if (initiallySharedMapItemId) {
			if (isDebugMode) {
				console.log('isMapLoaded && initiallySharedMapItemId: ', isMapLoaded, initiallySharedMapItemId);
			}

			if (timeoutId) {
				clearTimeout(timeoutId); // Clear the previous timeout if any
			}

			timeoutId = setTimeout(() => {
				setIsOnStartup(false);
				focusOnSharedItem(initiallySharedMapItemId);
			}, 200);
			setInitiallySharedMapItemId(undefined);
		}
	}, [focusOnSharedItem, initiallySharedMapItemId, isDebugMode, isMapLoaded, isOnStartup, setCurrentMapWithValidation, setInitiallySharedMapItemId, setIsOnStartup, triggerDialog]);


	if (isLoading) {
		return null;
	}

	return (
		<DeclassifiedContext.Provider
			value={{
				currentMap,
				setCurrentMapWithValidation,

				currentMapGroup,
				setCurrentMapGroup,

				filteredIntelStore,

				currentIntelFilter,
				setCurrentIntelFilter,

				drawerState,
				toggleDrawer,
				collectedIntel,

				currentEggFilter,
				setCurrentEggFilter,

				filteredEggStore,
			}}>
			{children}
		</DeclassifiedContext.Provider>
	);
};
