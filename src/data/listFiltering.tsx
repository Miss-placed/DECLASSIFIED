import { MiscMarker } from "../classes";
import { MapGroupItem } from "../components/MapControls/types";
import { EggType } from "./easterEggs";
import { Faction, IntelItem, IntelType, MapIds, Season } from "./intel";
import { allOutbreakMapsArr } from "./maps/mapDetails";
import { IMisc } from "./types";

export function filterIntel(
    collectedIntel,
    currentMapGroup: MapGroupItem,
    intelCache: IntelItem[],
    searchTermDirty: string,
    factionsArr: Faction[] = [],
    seasonsArr: Season[] = [],
    intelTypeArr: IntelType[] = [],
    currentMapOnly: boolean,
    collectedIntelFilter: string
) {
    let results = intelCache;

    let searchTerm = searchTermDirty.trim().toLowerCase();
    results = results.filter(intel => {
        return (
            intel.title.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) !== -1
        );
    });

    if (factionsArr.some(item => item)) {
        results = results.filter(intel => {
            return factionsArr.includes(intel.faction);
        });
    }

    if (seasonsArr.some(item => item)) {
        results = results.filter(intel => {
            return seasonsArr.includes(intel.season);
        });
    }

    if (intelTypeArr.some(item => item)) {
        results = results.filter(intel => {
            return intelTypeArr.includes(intel.typeDesc);
        });
    }

    // if currentMapOnly then get current map ids and filter
    if (currentMapOnly) {
        results = results.filter(intel => {
            return (
                currentMapGroup.mapLayers.filter(map => map.id === intel.map || // if map is in current map group
                    (map.id && intel.map === MapIds.allOutbreakMaps && allOutbreakMapsArr.includes(map.id))).length > 0 // or if map is an outbreak map and intel could be found in any outbreak map
            );
        });
    }
    // if (mapArr.some(item => item)) {
    //     results = results.filter((intel) => {
    //         return mapArr.includes(intel.map) || intel.map == mapDetails.allOutbreakMaps.id && mapArr.some((e) => { return allOutbreakMapsArr.includes(e) });
    //     });
    // }

    if (collectedIntel) {
        if (collectedIntelFilter === 'uncollected-only') {
            results = results.filter(intel => {
                return !(
                    intel.id ===
                    collectedIntel.find(collected => collected.intelId === intel.id)
                        ?.intelId
                );
            });
        } else if (collectedIntelFilter === 'collected-only') {
            results = results.filter(intel => {
                return (
                    intel.id ===
                    collectedIntel.find(collected => collected.intelId === intel.id)
                        ?.intelId
                );
            });
        }
    }
    return results;
}

export function filterMisc(
    currentMapGroup: MapGroupItem,
    miscStore: IMisc,
    searchTermDirty: string,
    eggTypeArr: EggType[] = [],
) {
    let results: MiscMarker[] = [];

    currentMapGroup.mapLayers.forEach(map => {
        if (map.id && miscStore[map.id]) {
            results.push(...miscStore[map.id]);
        };
    });

    let searchTerm = searchTermDirty.trim().toLowerCase();
    results = results.filter(intel => {
        return (
            intel.title.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) !== -1
        );
    });

    return results;
}