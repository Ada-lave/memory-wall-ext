import type { PlasmoCSConfig } from "plasmo"
import { RedirectSetting } from "~config/RedirectSetting"

class NavigationHandler {
    private redirectSetting: RedirectSetting = new RedirectSetting()
    async init() {
        let currPath = document.location.href
        let state = await this.redirectSetting.getState()
        if (!currPath.includes("https://pamyat-naroda.ru/heroes/") && !currPath.includes("https://mlcity.ru") && state) {
            document.location.href = "https://pamyat-naroda.ru/heroes/"
        } 
    }
}  

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
}

export default NavigationHandler