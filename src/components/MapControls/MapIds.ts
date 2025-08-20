
export const MapIds = {
    allOutbreakMaps: `outbreak`,
    zoo: `zoo`,
    ruka: `ruka`,
    duga: `duga`,
    alpine: `alpine`,
    golova: `golova`,
    sanatorium: `sanatorium`,
    collateral: `collateral`,
    armada: `armada`,
    dieMaschine: `dieMaschine`,
    dieMaschineUnderground: `dieMaschineUnderground`,
    firebaseZ: `firebaseZ`,
    firebaseZSpawn: `firebaseZSpawn`,
    mauerDerToten: `mauerDerToten`,
    mauerDerTotenStreets: `mauerDerTotenStreets`,
    forsaken: `forsaken`,
    forsakenUnderground: `forsakenUnderground`,
    miami: `miami`,
    satellite: `satellite`,
    moscow: `moscow`,
    nuketown: `nuketown`,
    thePines: `thePines`,
    express: `express`,
    rush: `rush`,
    echelon: `echelon`,
    driveIn: `driveIn`,
    cartel: `cartel`,
    crossroads: `crossroads`,
    raid: `raid`,
    apocalypse: `apocalypse`,
    yamantau: `yamantau`,
    standoff: `standoff`,
    collateralOn: `collateralOn`,
    checkmate: `checkmate`,
    garrison: `garrison`,
    deprogram: `deprogram`,
    //b06
    libertyFalls: `libertyFalls`,
    terminusBiolabs: `terminusBiolabs`,
    terminusPrison: `terminusPrison`,
    terminusIslands: `terminusBiolabs`, // TODO: change thisto be unique when the refactoring for multiple layer markers is done 
    citadelle: `citadelle`,
    tomb: `tomb`,
    shatteredVeil: `shatteredVeil`,
    reckoning: `reckoning`,
    reckoningBossArena: `reckoningBossArena`,
} as const;

export type MapId = (typeof MapIds)[keyof typeof MapIds];

export const IsValidMapId = (value: string | undefined | null): boolean => {
    if (!value) return false;
    var validatedMap = MapIds[value];
    return validatedMap !== undefined;
};
