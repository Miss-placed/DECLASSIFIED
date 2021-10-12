let userColorScheme = false;

function setColorScheme() {
    let osPreferedMode = JSON.parse(localStorage.osPreferedMode)
    let osColorScheme = window.matchMedia('(prefers-color-scheme: light)').matches
    document.getElementById("dark-mode").checked = osPreferedMode
    document.getElementById("color-scheme-toggle").classList = "btn ui"
    if (osPreferedMode) {
        userColorScheme = osColorScheme
        document.getElementById("color-scheme-toggle").classList = "btn ui -hidden"
    }
    document.body.classList = userColorScheme ? 'light' : 'dark';
    userColorScheme = !userColorScheme
}

function changePreferedMode() {
    localStorage.osPreferedMode = document.getElementById("dark-mode").checked
    setColorScheme()
}

setColorScheme()