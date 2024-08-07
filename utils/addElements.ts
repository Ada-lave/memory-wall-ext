import type { PlasmoCSConfig } from "plasmo"

export function addOurLinkForGoHome() {
    const contentSection = document.querySelector("div.container")
    if (contentSection) {
        const textDiv = document.createElement("div")
        textDiv.textContent = "Никто не забыт, ничто не забыто"
        textDiv.style.width = "100%"
        let textClassList = "bg-red-600 text-white text-3xl mt-4 p-4 text-center mb-12 rounded-lg font-bold".split(" ")
        textClassList.forEach(el => {
            textDiv.classList.add(el)
        })

        const backButton = document.createElement("div")
        backButton.addEventListener("click", () => {
            window.location.href = "https://mlcity.ru"
        })
        backButton.textContent = "Вернуться на стену памяти Заречного"
        backButton.style.width = "100%"
        let classList = "bg-red-600 text-2xl rounded-lg font-bold px-[16px] py-6 mt-6 mb-4 text-white text-center hover:cursor-pointer".split(" ")
        classList.forEach(el => {
            backButton.classList.add(el)
        })
        contentSection.insertBefore(backButton, contentSection.firstChild)
        contentSection.insertBefore(textDiv, contentSection.firstChild)
    }
}

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
}
