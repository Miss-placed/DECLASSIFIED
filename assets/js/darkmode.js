let lightModeClass = "light-"
if (getUserPrefs().darkmode) {
    document.getElementById("worldMap").classList.remove(lightModeClass)
    lightModeClass = ""
} else {
    lightModeClass = "light-"
    document.getElementById("worldMap").classList.add(lightModeClass)
}