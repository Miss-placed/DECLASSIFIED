// SHOULD BE VERY START OF APP JS THAT ISN'T MODELS/CONSTANTS
const app = StartupSettings();
const userPrefs = userPrefsStartup();

function StartupSettings() {
    let response;

    let disableMarkers = [],
        visibleMarkers = [];
    //Use default latest map otherwise use last selected map of user
    let currentMap;
    if (page == "map") {
        currentMap = mapDetails.forsaken.id;
    }
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

function changeMarkerVisibility(markerType) {
    let currentPrefs = getUserPrefs();

    switch (markerType) {
        case markerTypes.intel.id:
            currentPrefs.hideIntel = !document.getElementById("show-intel").checked;
            break;
        case markerTypes.misc.id:
            currentPrefs.hideMisc = !document.getElementById("show-misc").checked;
            break;
        case markerTypes.worldEvents.id:
        case markerTypes.easterEggs.id:
        default:
            break;
    }

    toggleMarkers(markerType);

    setUserPrefs(currentPrefs);
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

function setVisibilityFromPrefs() {
    let currentPrefs = getUserPrefs();
    if (currentPrefs.hideIntel) {
        toggleMarkers(markerTypes.intel.id, true);
    }
    if (currentPrefs.hideMisc) {
        toggleMarkers(markerTypes.misc.id, true);
    }
}

function toggleDebugButton() {
    let currentPrefs = getUserPrefs();
    currentPrefs.hideBugRepButton = !document.getElementById("debug-button-toggle").checked;
    setUserPrefs(currentPrefs);
    $('link[href="assets/style/hideDebugButton.css"]').prop('disabled', !currentPrefs.hideBugRepButton);
}

function toggleClickCoord() {
    
    debug = !debug;
}

function exportUserPrefs() {
    const currentPrefs = JSON.stringify(getUserPrefs());
    document.getElementById("import-export").value = currentPrefs;
    copyToClipboard(currentPrefs, "User Preferences Copied to Clipboard");
}

function importUserPrefs() {
    const importVal = document.getElementById("import-export")?.value;
    if (importVal && IsJsonString(importVal)) {
        const newPrefsImport = new UserPrefs(JSON.parse(importVal));
        if (confirm("This will override your settings with whatever is in the box. Be sure to back it up first if you're not sure what this does!!!") && newPrefsImport instanceof UserPrefs) {
            setUserPrefs(newPrefsImport);
            showNotification("Preferences Imported, Reloading...");
            setTimeout(function () {
                location.reload();
            }, 2000);
        } else {
            showNotification("Unable to import, there was an issue with the data format.");
        }
    } else {
        showNotification("Unable to import, bad/no data.");
    }
}