function newIntelInit() {
    submittingIntel = true;
    showNotification("Click exactly where the intel is located! Next time you click on the map you will be redirected to our new intel form.", true);
}


function searchThroughPOI(intelId) {
    let matchedIntel = intelCache.find((item) => {
        return item.id == intelId;
    })
    switchAndFly(matchedIntel.loc, matchedIntel.map);
}

function toggleAside() {
    let sidebar = document.getElementById("aside")
    let worldmap = document.getElementById("worldMap")
    sidebar.classList.toggle("menu-closed")
    worldmap.classList.toggle("menu-closed")
    window.dispatchEvent(new Event('resize'));
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function showNotification(message, isStatic = false) {
    notificationEle.onanimationend = () => {
        notificationEle.classList.remove("animated", "fixed");
    }
    notificationEle.classList.remove("animated", "fixed");
    void notificationEle.offsetWidth; //https://css-tricks.com/restart-css-animation/
    notificationEle.innerHTML = message;
    notificationEle.classList.add("animated");
    if (isStatic) {
        notificationEle.onanimationend = () => {
            notificationEle.classList.remove("animated");
            notificationEle.classList.add("fixed");
        }
    }
}

function redirectToGithub(location) {
    var labels = `New+Intel,${currentMap}`;
    window.open(`https://github.com/Odinnh/DECLASSIFIED/issues/new?assignees=Odinnh%2Csol3uk&labels=${labels}&template=newIntel.yml&title=New+Intel%3A+&intelLocation=${location}&intelMap=${currentMap}`);
    submittingIntel = false;
    notificationEle.classList.remove("fixed");
}