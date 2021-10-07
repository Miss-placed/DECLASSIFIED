//darkmode pref needs to go into declassifiedprefs 
let lightModeClass = "light-"
var test = getUserPrefs()
if (test.darkmode) {
    document.getElementById("worldMap").classList.remove(lightModeClass)
    lightModeClass = ""
} else {
    lightModeClass = "light-"
    document.getElementById("worldMap").classList.add(lightModeClass)
}