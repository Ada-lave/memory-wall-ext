import type { PlasmoCSConfig } from "plasmo"

class NavigationHandler {
    init() {
        let currPath = document.location.href
        if (!currPath.includes("https://pamyat-naroda.ru/heroes/") && !currPath.includes("https://mlcity.ru")) {
            document.location.href = "https://pamyat-naroda.ru/heroes/"
        } 
    }
}  

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
}

export default NavigationHandler