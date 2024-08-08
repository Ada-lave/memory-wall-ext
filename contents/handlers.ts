import type { PlasmoCSConfig } from "plasmo"
import TimerSetting from "~config/timerSetting"
import { addOurLinkForGoHome } from "~utils/addElements"
import deleteUnusedELements, { deleteFavoriteButton, deleteFavoriteLinks, deleteFooter, deleteHeader, deleteHeroCardActionPanel, deleteReportButton, deleteSidebar, deleteUnusedNavagationLinks, deleteVideoBanner, waitAndDeleteElement } from "~utils/deleteElements"
import Timer from "~utils/timer"

export {}

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
}

async function initTimer() {
    let curUrl: string = document.location.href
    let settings = new TimerSetting()
    console.log("Initial timer time: ", await settings.getDuration())
    if (curUrl.includes("https://pamyat-naroda.ru")) {
        const timer: Timer = new Timer(() => {
            document.location.href = "https://mlcity.ru"
            timer.timerEnd = true
        }, await settings.getDuration())

        timer.start()

        document.addEventListener('click', () => {
            if (!timer.timerEnd) {
                timer.restart()
            }
        })  
        document.addEventListener('scroll', () => {
            if (!timer.timerEnd) {
                timer.restart()
            }
        })
    }
}

// Инициализация скриптов
initTimer()

// Удаление элементов которые не нужны на странице
deleteUnusedELements()
deleteUnusedNavagationLinks()
deleteHeroCardActionPanel()
deleteReportButton()
deleteHeader()
deleteFavoriteButton()
deleteVideoBanner()
deleteSidebar()
deleteFooter()
deleteFavoriteLinks()
waitAndDeleteElement("img.keyboardInputInitiator")

// Добавление собственных элементов
addOurLinkForGoHome()
