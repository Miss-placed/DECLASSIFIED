function getNotificationTime() {
    return 2000;
}

function newIntelInit() {
    app.submittingLocation = true;
    app.currentContribTemplate = contribTemplates.intel.newId;
    app.currentContribLabel = contribTemplates.intel.newTitle;
    showNotification("Click exactly where the intel is located. Next time you click on the map you will be redirected to our new intel form.", true);
}

function newMiscInit() {
    app.submittingLocation = true;
    app.currentContribTemplate = contribTemplates.misc.newId;
    app.currentContribLabel = contribTemplates.misc.newTitle;
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

function redirectToGithub({label = contribTemplates.intel.newTitle, issueTemplate = contribTemplates.intel.newId, intelId: id = "", location}) {
    const domain = `${repoDomain}/issues/new`;
    let isIntel = (issueTemplate == contribTemplates.intel.newId || issueTemplate == contribTemplates.intel.editId);
    let isMisc = (issueTemplate == contribTemplates.misc.newId || issueTemplate == contribTemplates.misc.editId);
    let assignees = "Odinnh,sol3uk";
    let labels = `${label},${app.currentMap}`;
    let entityName = "";

    if (isIntel){
        let intel = getIntelById(id);
        entityName = intel ? intel.name : "";
    }
    /* if (isMisc){
        let miscItem = getMiscMarkerById(id);
        entityName = miscItem ? miscItem.title : "";
    } */

    let intelIdPlaceholder = id ? `[${id}]` : "";
    
    let issueTitle = `${label}: ${entityName} [${app.currentMap}]${intelIdPlaceholder}`;
    let finalURL = `${domain}?assignees=${assignees}&labels=${labels}&template=${issueTemplate}.yml&title=${issueTitle}`
    
    if (isIntel) {
        let intelParams = `&intelId=${id}&intelName=${entityName}&intelLocation=${location}&intelMap=${app.currentMap}`
        finalURL += intelParams;
    }
    if (isMisc) {
        let miscParams = `&markerId=${id}&markerName=${entityName}&markerLocation=${location}&markerMap=${app.currentMap}`
        finalURL += miscParams;
    }
    window.open(encodeURI(finalURL));
    app.submittingLocation = false;
    setTimeout(() => {
        app.notificationEle.classList.remove("fixed");
    }, getNotificationTime());
}
