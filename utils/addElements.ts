import type { PlasmoCSConfig } from "plasmo"

export function addOurLinkForGoHome() {
    const contentSection = document.querySelector("div.container")
    if (contentSection) {
        // const textDiv = document.createElement("div")
        // textDiv.textContent = "Никто не забыт, ничто не забыто"
        // textDiv.style.width = "100%"
        // let textClassList = "bg-red-600 text-white text-3xl mt-[30%] p-4 text-center mb-12 rounded-lg font-bold".split(" ")
        // textClassList.forEach(el => {
        //     textDiv.classList.add(el)
        // })
        let backButton1 = makeBackButton()
        let backButton2 = makeBackButton()
        contentSection.insertBefore(backButton1, contentSection.firstChild)
        contentSection.appendChild(backButton2)
        // contentSection.insertBefore(textDiv, contentSection.firstChild)
    }
}

function makeBackButton() {
    const backButton = document.createElement("div")
    backButton.addEventListener("click", () => {
        window.location.href = "https://mlcity.ru"
    })
    backButton.textContent = "Вернуться на стену памяти Заречного"
    backButton.style.width = "100%"
    let classList = "bg-red-600 text-2xl rounded-lg font-bold px-[16px] py-6 mt-[35%] mb-4 text-white text-center hover:cursor-pointer".split(" ")
    classList.forEach(el => {
        backButton.classList.add(el)
    })

    return backButton
}

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
}
