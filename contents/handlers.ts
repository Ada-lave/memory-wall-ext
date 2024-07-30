import type { PlasmoCSConfig } from "plasmo"
import TimerSetting from "~config/timerSetting"
import deleteUnusedELements from "~utils/deleteElements"
import NavigationHandler from "~utils/navigationHandler"
import Timer from "~utils/timer"

export {}

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
  }

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
            console.log("timer end")
        }, await settings.getDuration())

        timer.start()
        document.addEventListener('click', () => {
            timer.restart()
        })  
        document.addEventListener('scroll', () => {
            timer.restart()
        })
    }
}

initTimer()
deleteUnusedELements()
