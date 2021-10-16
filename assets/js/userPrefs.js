// SHOULD BE VERY START OF APP JS THAT ISN'T MODELS/CONSTANTS
const app = StartupSettings();
const userPrefs = userPrefsStartup();

function StartupSettings() {
    let response;

    let disableMarkers = [],
        visibleMarkers = [];
    //Use default latest map otherwise use last selected map of user
    let currentMap = mapDetails.forsaken.id;
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
    var userPrefs = getUserPrefs();

    localStorage.setItem("declassifiedPrefs", JSON.stringify(userPrefs));
    return userPrefs;
}

function getUserPrefs() {
    //Additional logic can be added here for getting prefs
    return new UserPrefs(JSON.parse(localStorage.getItem("declassifiedPrefs")) ?? {});
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

function toggleDarkModeSetting() {
    let currentPrefs = getUserPrefs();
    currentPrefs.darkmode = !currentPrefs.darkmode
    setUserPrefs(currentPrefs);
}

function changePreferredMode() {
    let currentPrefs = getUserPrefs();
    // debugger
    const systemPrefersDarkmode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    currentPrefs.useSystemTheme = document.getElementById("system-theme").checked;
    setUserPrefs(currentPrefs);

    if (currentPrefs.useSystemTheme && ((currentPrefs.darkmode && !systemPrefersDarkmode) || (!currentPrefs.darkmode && systemPrefersDarkmode))) {
        setColorScheme();
    }
    initSystemThemeButton();
}

function initSystemThemeButton() {
    let currentPrefs = getUserPrefs();
    // Firstly hide the button depending on system theme setting
    if (currentPrefs.useSystemTheme) {
        hideDarkmodeButton();
        document.getElementById("system-theme").checked = true;
    }
    else {
        showDarkmodeButton();
        document.getElementById("system-theme").checked = false;
    }
}


function setColorScheme() {
    toggleDarkModeSetting();
    setThemeFromPrefs();
}

function hideDarkmodeButton() {
    document.getElementById("color-scheme-toggle").classList = "btn ui -hidden";
}

function showDarkmodeButton() {
    document.getElementById("color-scheme-toggle").classList = "btn ui";
}

function setThemeFromPrefs() {
    let currentPrefs = getUserPrefs();
    document.body.classList = currentPrefs.darkmode ? 'dark' : 'light';
}
