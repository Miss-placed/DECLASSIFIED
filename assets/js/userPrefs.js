// SHOULD BE VERY START OF APP JS THAT ISN'T MODELS/CONSTANTS
const app = StartupSettings();
const userPrefs = userPrefsStartup();

function StartupSettings() {
    let response;

    let disableMarkers = [],
        visibleMarkers = [];
    //Use default latest map otherwise use last selected map of user
    let currentMap = mapDetails.armada.id;
    let currentContribType;
    if (localStorage.declassifiedPrefs != undefined && JSON.parse(localStorage.declassifiedPrefs).lastSelectedMap)
        currentMap = JSON.parse(localStorage.declassifiedPrefs).lastSelectedMap;

    let isMobile = false,
        submittingLocation = false,
        fixedNotification = false;
    let notificationEle = document.getElementById("notification-popup");
    return response = { currentMap, disableMarkers, visibleMarkers, notificationEle, isMobile, submittingLocation, currentContribType, fixedNotification };
}

//Store and Retrieve user preferences from localStorage
function userPrefsStartup() {
    var userPrefs = new UserPrefs(JSON.parse(localStorage.getItem("declassifiedPrefs")) ?? {});

    localStorage.setItem("declassifiedPrefs", JSON.stringify(userPrefs));
    return userPrefs;
}

function getUserPrefs() {
    //Additional logic can be added here for getting prefs
    return userPrefsStartup();
}

function setUserPrefs(prefsObj) {
    localStorage.setItem("declassifiedPrefs", JSON.stringify(prefsObj));
}

function hasUserCollected(intel, getIndex = false) {
    let currentPrefs = getUserPrefs();
    //Search all arrays of intel to see if the intel exists
    let indexOfIntel = currentPrefs.collectedIntel.indexOf(intel);
    if (indexOfIntel > -1 && getIndex) return indexOfIntel;
    if (indexOfIntel > -1 && !getIndex) return true;

    //Couldn't find the intel, assume they haven't collected
    return false;
}

function addCollectedIntel(intel) {
    let currentPrefs = getUserPrefs();

    if (hasUserCollected(intel)) {
        console.log("Already collected this intel.");
        return;
    }
    currentPrefs.collectedIntel.push(intel);
    setUserPrefs(currentPrefs);
}

function removeCollectedIntel(intel) {
    let currentPrefs = getUserPrefs();

    let indexOfIntel = hasUserCollected(intel, true);

    currentPrefs.collectedIntel.splice(indexOfIntel, 1);
    setUserPrefs(currentPrefs);
}

function setLastVisitedMap(selectedMap) {
    let currentPrefs = getUserPrefs();
    currentPrefs.lastSelectedMap = selectedMap
    setUserPrefs(currentPrefs);
}

//toggleDarkmode function to be depricated on v2 release
function toggleDarkMode() {
    //Getting
    let currentPrefs = getUserPrefs();
    //Updating
    currentPrefs.darkmode = !currentPrefs.darkmode
    //Setting/Saving
    setUserPrefs(currentPrefs);
    location.reload();
}

function changePreferedMode() {
    let currentPrefs = getUserPrefs();
    currentPrefs.osPreferedMode = document.getElementById("dark-mode").checked
    setColorScheme()
    setUserPrefs(currentPrefs);
}