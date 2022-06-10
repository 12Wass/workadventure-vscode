/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();


/* Tutoriel 1 */
WA.room.onEnterZone('tuto-1', () => {
    currentPopup =  WA.ui.openPopup("tuto1Popup","Bienvenue sur notre map !",[]);
})

WA.room.onLeaveZone('tuto-1', closePopUp)

/* Tutoriel 2 */
WA.room.onEnterZone('tuto-2', () => {
    currentPopup =  WA.ui.openPopup("tuto2Popup","Un espace créatif pour coder " +
        "ensemble sur VSCode est née.",[]);
})

WA.room.onLeaveZone('tuto-2', closePopUp)

/* Tutoriel 3 */
WA.room.onEnterZone('tuto-3', () => {
    currentPopup =  WA.ui.openPopup("tuto3Popup","Il suffit de se placer dans un pupitre pour créer l'environnement collaboratif",[]);
})

WA.room.onLeaveZone('tuto-3', closePopUp)
/*
const vsCode = await WA.ui.website.open({
    url: "https://vscode.dev",
    position: {
        vertical: "middle",
        horizontal: "middle",
    },
    size: {
        height: '50vh',
        width: "50vw",
    },
});

vsCode.position.vertical = "top";
*/
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
