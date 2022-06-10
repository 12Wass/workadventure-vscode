/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)

WA.room.onEnterLayer('vscodeZone').subscribe(() => {
    WA.ui.displayActionMessage({
        message: "Ouais ouais ouais ouais ouais ouais ouais ouais le monde ou rien",
        callback: () => {
            WA.chat.sendChatMessage("confirmed", "trigger message logic");
        }
    })
});

const coWebsiteWorkAdventure = await WA.nav.openCoWebSite('http://vscode.dev/liveshare/4C044654ABA96A48B68689E3796F369942DD', true, "", 70, 1, true, true);

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
