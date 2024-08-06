import type { PlasmoCSConfig } from "plasmo"

export function addOurLinkForGoHome() {
    const contentSection = document.querySelector("div.container")
    if (contentSection) {
        const backButton = document.createElement("div")
        backButton.addEventListener("click", () => {
            window.location.href = "https://mlcity.ru"
        })
        backButton.textContent = "Вернуться на стену памяти Заречного"
        backButton.style.width = "100%"
        let classList = "bg-red-600 text-2xl rounded-lg font-bold px-[16px] py-4 m-2 mb-4 text-white text-center hover:cursor-pointer".split(" ")
        classList.forEach(el => {
            backButton.classList.add(el)
        })
        contentSection.insertBefore(backButton, contentSection.firstChild)
    }
}

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
}
