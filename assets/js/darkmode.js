let lightModeClass = "light-"
let systemDarkMode = false;

function darkmodeSetup() {
    if (getUserPrefs().darkmode) {
        document.getElementById("worldMap").classList.remove(lightModeClass)
        lightModeClass = ""
    } else {
        lightModeClass = "light-"
        document.getElementById("worldMap").classList.add(lightModeClass)
    }

    if (systemDarkMode == true) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("worldMap").classList.remove(lightModeClass)
            lightModeClass = ""
        } else {
            lightModeClass = "light-"
            document.getElementById("worldMap").classList.add(lightModeClass)
        }
    }
}

function toggleSystemDarkmode(x) {
    systemDarkMode != systemDarkMode
    darkmodeSetup()
}
darkmodeSetup()