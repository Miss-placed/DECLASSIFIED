import { useLiveQuery } from 'dexie-react-hooks';
import {
	createContext,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { useMapEvents } from 'react-leaflet';
import { useNavigate, useParams } from 'react-router-dom';
import { MapItem, MiscMarker } from '../../classes';
import { EggFormInputs, getEggFilterDefaults } from '../../components/EasterEggs/ListMenu';
import {
	getIntelFilterDefaults,
	IntelFormInputs,
} from '../../components/Intel/IntelListMenu';
import { IsValidMapId } from '../../components/MapControls/MapIds';
import { MapGroupings, MapGroupItem } from '../../components/MapControls/types';
import {
	getSetUserPreferences
} from '../../data/dataAccessLayer';
import { db, DeclassifiedUserPreferences } from '../../data/db';
import { StaticEggStore } from '../../data/easterEggs';
import { IntelStore } from '../../data/intel';
import { DefaultPOIData, IntelItem } from '../../data/IntelTypes';
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

export const DeclassifiedContext = createContext<DeclassifiedContextProps>(initialContextValues);

export const DeclassifiedContextProvider = ({ children }) => {
	const { id: mapUrlId } = useParams();
	const mapInstance = useMapEvents({});
	const { isDebugMode, setSharedMapItemId, saveLayerCheckboxState } = useUserContext();
	const [userPrefs, setUserPreferences] = useState<DeclassifiedUserPreferences | null>(null);

	var initialMap: MapItem | null = MapDetails.reckoning;
	var initialMapGroupItem: MapGroupItem | null = MapGroupings.tomb_Group;
	if (mapUrlId && IsValidMapId(mapUrlId)) {
		initialMap = GetMapById(mapUrlId) ?? null;
		Object.entries(MapGroupings).forEach(([key, mapGroupItem]) => {
			if (initialMap && mapGroupItem.mapLayers.includes(initialMap)) {
				if (isDebugMode) {
					console.log('Setting current map GROUP to: ', mapGroupItem);
				}
				initialMapGroupItem = mapGroupItem;
			}
		});
	}

	const [currentMap, setCurrentMap] = useState<MapItem | null>(initialMap);
	const [currentMapGroup, setCurrentMapGroup] = useState<MapGroupItem | null>(
		initialMapGroupItem
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
	const { setIsOnStartup } = useUserContext();
	const { triggerDialog } = useNotification();
	const [isMapLoaded, setIsMapLoaded] = useState(false);
	const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
	const navigate = useNavigate();

	const setCurrentMapWithValidation = useCallback(async (newMap: MapItem) => {
		if (isDebugMode) {
			console.log('Setting current map to: ', newMap);
		}
		if (newMap.mapOverlay !== null && newMap.mapOverlay !== undefined) {
			setCurrentMap(newMap);
			Object.entries(MapGroupings).forEach(([key, mapGroupItem]) => {
				if (newMap && mapGroupItem.mapLayers.includes(newMap)) {
					if (isDebugMode) {
						console.log('Setting current map GROUP to: ', mapGroupItem);
					}
					setCurrentMapGroup(mapGroupItem);
					navigate(`/${newMap.id}`);
				}
			});

			return true;
		} else {
			console.error("Cannot set a map that doesn't exist.");
			return false;
		}
	}, [isDebugMode, navigate]);

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

	useMapEvents({
		baselayerchange: (props) => {
			let currentMapKey = GetMapByTitle(props.name);
			if (currentMapKey) {
				if (isDebugMode) {
					console.log('setCurrentMapWithValidation with baselayerchange: ', currentMapKey);
				}
				setCurrentMapWithValidation(MapDetails[currentMapKey]);
			}
		},
		overlayadd: (props) => {
			if (isDebugMode) {
				console.log('overlayadd: ', props);
			}
			saveLayerCheckboxState(props.name, true);
		},
		overlayremove: (props) => {
			if (isDebugMode) {
				console.log('overlayremove: ', props);
			}
			saveLayerCheckboxState(props.name, false);
		}
	});

	const focusOnSharedItem = useCallback(async (sharedMapItemId) => {
		if (isMapLoaded) {
			if (sharedMapItemId) {
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
		if (mapUrlId) {
			const checkMapLoaded = () => {
				if (isDebugMode) {
					console.log('isMapLoaded && sharedMapItemId: ', isMapLoaded, mapUrlId);
				}

				if (timeoutIdRef.current) {
					clearTimeout(timeoutIdRef.current); // Clear the previous timeout if any
				}

				timeoutIdRef.current = setTimeout(() => {
					if (isMapLoaded) {
						setIsOnStartup(false);
						focusOnSharedItem(mapUrlId);
					} else {
						if (isDebugMode) {
							console.log('RETRYING FOCUS: ', isMapLoaded, mapUrlId);
						}
						timeoutIdRef.current = setTimeout(checkMapLoaded, 50);
					}
				}, 50);
			};

			checkMapLoaded();
		}
	}, [focusOnSharedItem, isDebugMode, isMapLoaded, setIsOnStartup, mapUrlId])

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

				setIsMapLoaded(true);
				setIsOnStartup(false);
			} catch (error) {
				console.error('Failed to fetch user preferences: ', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPreferences();
	}, [setIsOnStartup, triggerDialog]);


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
