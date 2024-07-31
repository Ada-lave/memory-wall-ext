export function addOurLinkForGoHome() {
    const contentSection = document.querySelector("div.heroes-list-wrap")
    if (contentSection) {
        const backButton = document.createElement("div")
        backButton.addEventListener("click", () => {
            window.location.href = "https://mlcity.ru"
        })
        backButton.textContent = "Вернуться назад"
        let classList = "bg-red-600 text-2xl rounded-lg p-4 text-white text-center hover:cursor-pointer m-4".split(" ")
        classList.forEach(el => {
            backButton.classList.add(el)
        })
        contentSection.insertBefore(backButton, contentSection.childNodes[2])
    }
}