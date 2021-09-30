function getNotificationTime() {
    return 2000;
}

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

function notificationAnimationEnd() {
    //Check if supposed to be a fixed notification of not
    if (fixedNotification) {
        //Fixed notification, Keep fixed class after animation
        notificationEle.classList.remove("animated");
        notificationEle.classList.add("fixed");
    } else {
        //Normal notification behaviour
        notificationEle.classList.remove("animated", "fixed");
    }
}

function showNotification(message, isStatic = false) {
    fixedNotification = isStatic;
    //Notification end animation function
    setTimeout(() => {
        notificationAnimationEnd();
    }, getNotificationTime());
    notificationEle.classList.remove("animated", "fixed");
    void notificationEle.offsetWidth; //https://css-tricks.com/restart-css-animation/
    notificationEle.innerHTML = message;
    notificationEle.classList.add("animated");
}

function redirectToGithub(location) {
    var labels = encodeURI(`New Intel,${currentMap}`);
    var issueTitle = encodeURI(`New Intel: INTEL NAME HERE [${currentMap}]`);
    window.open(`https://github.com/Odinnh/DECLASSIFIED/issues/new?assignees=Odinnh%2Csol3uk&labels=${labels}&template=newIntel.yml&title=${issueTitle}&intelLocation=${location}&intelMap=${currentMap}`);
    submittingIntel = false;
    setTimeout(() => {
        notificationEle.classList.remove("fixed");
    }, getNotificationTime());
}