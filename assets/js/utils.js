function getNotificationTime() {
    return 2000;
}

function newIntelInit() {
    app.submittingLocation = true;
    app.currentContribType = markerTypes.intel.id;
    
    showNotification("Click exactly where the intel is located. Next time you click on the map you will be redirected to our new intel form.", true);
}

function newMiscInit() {
    app.submittingLocation = true;
    app.currentContribType = markerTypes.misc.id;
    
    showNotification("Click exactly where the marker is located. Next time you click on the map you will be redirected to our new icon form.", true);
}


function goToIntelById(intelId) {
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
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function notificationAnimationEnd() {
    //Check if supposed to be a fixed notification of not
    if (app.fixedNotification) {
        //Fixed notification, Keep fixed class after animation
        app.notificationEle.classList.remove("animated");
        app.notificationEle.classList.add("fixed");
    } else {
        //Normal notification behaviour
        app.notificationEle.classList.remove("animated", "fixed");
    }
}

function showNotification(message, isStatic = false) {
    app.fixedNotification = isStatic;
    //Notification end animation function
    setTimeout(() => {
        notificationAnimationEnd();
    }, getNotificationTime());
    app.notificationEle.classList.remove("animated", "fixed");
    void app.notificationEle.offsetWidth; //https://css-tricks.com/restart-css-animation/
    app.notificationEle.innerHTML = message;
    app.notificationEle.classList.add("animated");
}

function redirectToGithub({ itemId: id = "", itemType, issueType = "New", location }) {
    const domain = `${repoDomain}/issues/new`;
    let assignees = "Odinnh,sol3uk";

    const isIntel = (itemType == markerTypes.intel.id);
    const isMisc = (itemType == markerTypes.misc.id);
    let label = ""; issueTemplate = ""; entityName = ""; map = "";
    
    if (isIntel) {
        issueTemplate = issueType == "New" ? contribTemplates.intel.newId : contribTemplates.intel.editId;
        label = issueType == "New" ? contribTemplates.intel.newTitle : contribTemplates.intel.editTitle;
        let intel = getIntelById(id);
        entityName = intel ? intel.name : "";
        map = intel ? intel.map : "";
    } else if (isMisc) {
        issueTemplate = issueType == "New" ? contribTemplates.misc.newId : contribTemplates.misc.editId;
        label = issueType == "New" ? contribTemplates.misc.newTitle : contribTemplates.misc.editTitle;
        let miscItem = getMiscMarkerById(id);
        entityName = miscItem ? miscItem.title : "";
        // Don't yet keep map against misc markers, need to change this, this will do for now since miscs are only on the current map
        map = app.currentMap;
    }
    
    let labels = `${label},${map}`;

    let intelIdPlaceholder = id ? `[${id}]` : "";
    
    let issueTitle = `${label}: ${entityName} [${map}]${intelIdPlaceholder}`;
    let finalURL = `${domain}?assignees=${assignees}&labels=${labels}&template=${issueTemplate}.yml&title=${issueTitle}`
    
    if (isIntel) {
        let intelParams = `&intelId=${id}&intelName=${entityName}&intelLocation=${location}&intelMap=${map}`
        finalURL += intelParams;
    }
    if (isMisc) {
        let miscParams = `&markerId=${id}&markerName=${entityName}&markerLocation=${location}&markerMap=${map}`
        finalURL += miscParams;
    }
    window.open(encodeURI(finalURL));
    app.submittingLocation = false;
    setTimeout(() => {
        app.notificationEle.classList.remove("fixed");
    }, getNotificationTime());
}
