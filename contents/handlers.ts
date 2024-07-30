import type { PlasmoCSConfig } from "plasmo"
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

function initTimer() {
    let curUrl: string = document.location.href

    if (curUrl.includes("https://pamyat-naroda.ru")) {
        const timer: Timer = new Timer(() => {
            console.log("timer end")
        }, 4000)

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
