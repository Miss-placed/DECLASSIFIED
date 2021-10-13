let userColorScheme = false;
function startupDarkMode(){
    let currentPrefs = getUserPrefs(); 
    document.getElementById("dark-mode").checked = currentPrefs.osPreferedMode
}
startupDarkMode()
function setColorScheme() {
    let currentPrefs = getUserPrefs();
    let osPreferedMode = JSON.parse(currentPrefs.osPreferedMode)
    let osColorScheme = window.matchMedia('(prefers-color-scheme: light)').matches
    document.getElementById("color-scheme-toggle").classList = "btn ui"
    if (osPreferedMode) {
        userColorScheme = osColorScheme
        document.getElementById("color-scheme-toggle").classList = "btn ui -hidden"
    }
    document.body.classList = userColorScheme ? 'light' : 'dark';
    userColorScheme = !userColorScheme
}
setColorScheme()
