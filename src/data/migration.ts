import { addCollectedIntel, addCompletedChallenges, addPinnedChallenges, getSetUserPreferences, updateUserPreferences } from "./dataAccessLayer";

// TODO - Use this interface to map old user preferences to new user preferences
class OldDeclassifiedUserPreferences {
    hasBeenMigrated: boolean | null;

    collectedIntel: string[] | null;
    asideShow: boolean | null;
    hideIntel: boolean | null;
    hideMisc: boolean | null;
    hideBugRepButton: boolean | null;
    pinnedChallenges: string[] | null;
    completedChallenges: string[] | null;
    challengeTrackerState: string | null;
    darkmode: boolean | null;
    useSystemTheme: boolean | null;
    constructor({ collectedIntel, asideShow, hideIntel, hideMisc, hideBugRepButton, pinnedChallenges, completedChallenges, challengeTrackerState, darkmode, useSystemTheme, hasBeenMigrated }) {
        // Interactive Map
        this.collectedIntel = collectedIntel;
        this.asideShow = asideShow;
        this.hideIntel = hideIntel;
        this.hideMisc = hideMisc;
        this.hideBugRepButton = hideBugRepButton;
        // Challenge Tracker 
        this.pinnedChallenges = pinnedChallenges;
        this.completedChallenges = completedChallenges;
        this.challengeTrackerState = challengeTrackerState;
        // Shared
        // If the user is using system theme then follow that, else set to previous setting else default to true. (because darkmode is best)
        this.darkmode = useSystemTheme ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) : darkmode;
        this.useSystemTheme = useSystemTheme;

        this.hasBeenMigrated = hasBeenMigrated ?? false;
    }
}

export const checkUserHasUnmigratedPreferences = (): boolean => {
    var localStorageResult = localStorage.getItem("declassifiedPrefs");
    if (!localStorageResult) return false;
    var parsedOldPrefs = new OldDeclassifiedUserPreferences(JSON.parse(localStorageResult) ?? {});
    if (parsedOldPrefs.hasBeenMigrated === undefined ||
        parsedOldPrefs.hasBeenMigrated === null ||
        parsedOldPrefs.hasBeenMigrated === false) {
        return true;
    }
    return false;
};

export const migrateOldUserPreferences = async () => {
    try {
        var localStorageResult = localStorage.getItem("declassifiedPrefs");
        if (!localStorageResult) {
            console.error("No preferences found to mark as migrated");
            return false;
        }
        var parsedOldPrefs = new OldDeclassifiedUserPreferences(JSON.parse(localStorageResult) ?? {});

        const updatedUserPreferences = await getSetUserPreferences();

        if (!updatedUserPreferences) {
            console.error("Failed to retrieve user preferences whilst migrating.");
            return false;
        }

        updatedUserPreferences.challengeTrackerState = parsedOldPrefs.challengeTrackerState ?? updatedUserPreferences.challengeTrackerState;
        updatedUserPreferences.darkMode = parsedOldPrefs.darkmode ?? updatedUserPreferences.darkMode;
        updatedUserPreferences.hideBugRepButton = parsedOldPrefs.hideBugRepButton ?? updatedUserPreferences.hideBugRepButton;
        updatedUserPreferences.hideIntel = parsedOldPrefs.hideIntel ?? updatedUserPreferences.hideIntel;
        updatedUserPreferences.hideMisc = parsedOldPrefs.hideMisc ?? updatedUserPreferences.hideMisc;
        updatedUserPreferences.useSystemTheme = parsedOldPrefs.useSystemTheme ?? updatedUserPreferences.useSystemTheme;

        await updateUserPreferences(updatedUserPreferences);

        if (parsedOldPrefs.collectedIntel) {
            await addCollectedIntel(parsedOldPrefs.collectedIntel);
        }

        if (parsedOldPrefs.pinnedChallenges) {
            await addPinnedChallenges(parsedOldPrefs.pinnedChallenges);
        }

        if (parsedOldPrefs.completedChallenges) {
            await addCompletedChallenges(parsedOldPrefs.completedChallenges);
        }
    }
    catch (error) {
        console.error("Failed to migrate old user preferences: ", error);
    }
};

export const markAsMigrated = () => {
    var localStorageResult = localStorage.getItem("declassifiedPrefs");
    if (!localStorageResult) {
        console.error("No preferences found to mark as migrated");
        return false;
    }
    var parsedOldPrefs = new OldDeclassifiedUserPreferences(JSON.parse(localStorageResult) ?? {});
    parsedOldPrefs.hasBeenMigrated = true;
    localStorage.setItem("declassifiedPrefs", JSON.stringify(parsedOldPrefs));
}