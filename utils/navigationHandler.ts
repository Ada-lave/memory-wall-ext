import type { PlasmoCSConfig } from "plasmo"
import { RedirectSetting } from "~config/RedirectSetting"

class NavigationHandler {
    private redirectSetting: RedirectSetting = new RedirectSetting()
    async init() {
        let currPath = document.location.href
        let state = await this.redirectSetting.getState()
        if (
            !currPath.includes("https://pamyat-naroda.ru/heroes/") && 
            !currPath.includes("https://pamyat-naroda.ru/documents/") && 
            !currPath.includes("https://pamyat-naroda.ru/warunit/") &&
            !currPath.includes("https://mlcity.ru") && 
            state
        ) {
            document.location.href = "https://pamyat-naroda.ru/heroes/"
        } 
    }
}  

export default NavigationHandler