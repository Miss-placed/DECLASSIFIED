//darkmode pref needs to go into declassifiedprefs 
let darkmode = false;
let lightModeClass = "light-"
if ("darkmode" in localStorage) {
    darkmode = JSON.parse(localStorage.darkmode)
} else {
    if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkmode = true;
    }
    localStorage.darkmode = darkmode
}
if (darkmode == false) {
    document.getElementById("worldMap").classList.remove(lightModeClass)
    lightModeClass = ""
} else {
    lightModeClass = "light-"
    document.getElementById("worldMap").classList.add(lightModeClass)
}