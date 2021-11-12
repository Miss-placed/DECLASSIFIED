
class UserPrefs {
    constructor({ lastSelectedMap, collectedIntel, darkmode, asideShow, useSystemTheme, hideIntel, hideMisc, hideBugRepButton }) {
        this.lastSelectedMap = lastSelectedMap ?? app.currentMap;
        this.collectedIntel = collectedIntel ?? [];
        this.useSystemTheme = useSystemTheme ?? false;
        // If the user is using system theme then follow that, else set to previous setting else default to true. (because darkmode is best)
        this.darkmode = useSystemTheme ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) : darkmode ?? true;
        this.asideShow = asideShow ?? true;
        this.hideIntel = hideIntel ?? false;
        this.hideMisc = hideMisc ?? false;
        this.hideBugRepButton = hideBugRepButton ?? false;
    }
}

const seasons = {
    preseason: "Preseason",
    onslaught: "Onslaught",
    season1: "Season 1",
    season2: "Season 2",
    season3: "Season 3",
    season4: "Season 4",
    season5: "Season 5",
    season6: "Season 6",
}
