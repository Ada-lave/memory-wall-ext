import NavigationHandler from "~utils/navigationHandler"
import Timer from "~utils/timer"

export {}

console.log("timer init")


function initNavigationHandler() {
    let navigationHandler: NavigationHandler = new NavigationHandler
    navigationHandler.init()
}

function initTimer() {
    let curUrl: string = document.location.href

    if (curUrl.includes("https://pamyat-naroda.ru")) {
        let body: HTMLBodyElement = document.querySelector("body")
        const timer: Timer = new Timer(() => {
            console.log("timer end")
        }, 2000)

        timer.start()
        body.addEventListener("click" , () => {
            timer.restart()
        })  
    }
}
