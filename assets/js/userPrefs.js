//Store and Retrieve user preferences from localStorage

function userPrefsStartup() {
    let existingPrefs = localStorage.getItem("declassifiedPrefs");

    if (existingPrefs) return JSON.parse(existingPrefs);

    let newPrefs = {
        lastSelectedMap: mapStrings.zoo,
        collectedIntel: [],
    }

    localStorage.setItem("declassifiedPrefs", JSON.stringify(newPrefs));
    return newPrefs;
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
    
    if(hasUserCollected(intel)) {
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
function setLastVisitedMap(selectedMap){
    let currentPrefs = getUserPrefs();
    currentPrefs.lastSelectedMap = selectedMap
    setUserPrefs(currentPrefs);
}