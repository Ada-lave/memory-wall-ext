import type { PlasmoCSConfig } from "plasmo"
import TimerSetting from "~config/timerSetting"
import { addOurLinkForGoHome } from "~utils/addElements"
import deleteUnusedELements, { deleteHeader, deleteHeroCardActionPanel, deleteReportButton, deleteSidebar, deleteUnusedNavagationLinks } from "~utils/deleteElements"
import NavigationHandler from "~utils/navigationHandler"
import Timer from "~utils/timer"

export {}


function initNavigationHandler() {
    let navigationHandler: NavigationHandler = new NavigationHandler
    navigationHandler.init()
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
initNavigationHandler()

// Удаление элементов которые не нужны на странице
deleteUnusedELements()
deleteUnusedNavagationLinks()
deleteHeroCardActionPanel()
deleteReportButton()
deleteHeader()
deleteSidebar()

// Добавление собственных элементов
addOurLinkForGoHome()
