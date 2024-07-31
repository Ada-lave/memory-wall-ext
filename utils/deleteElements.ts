
import "../style.css"


export function deleteUnusedELements() {
    if (document.location.href.includes("https://pamyat-naroda.ru/heroes/")) {
        let headerBanner = document.querySelector("div.header__banner")
        let moreSeacrhButton = document.querySelector("div.button-more-search")
        let questionLink = document.querySelector("a.btn-how-search")

        let itemsForRemove = [headerBanner, moreSeacrhButton, questionLink]
        itemsForRemove.forEach((el) => {
            if (el) {
                el.remove()
            }
        })
    }
}

export function deleteUnusedNavagationLinks() {
    if (document.location.href.includes("https://pamyat-naroda.ru/")) {
        let links = document.querySelectorAll("li.prim-nav__item")
        for (let i = 0; i < links.length; i++) {
            if (!links[i].classList.contains("prim-nav__item_0")) {
                links[i].remove()
            }
        }
    }
}

export function deleteHeroCardActionPanel() {
    const actionPanel = document.querySelector("div.hero-card-panel-head__actions")

    if (actionPanel) {
        actionPanel.remove()
    }
}

export function deleteReportButton() {
    const errorReport = document.getElementById("reportErrorButton")
    if (errorReport) {
        errorReport.remove()
    }
}

export function deleteSidebar() {
    const sideBar = document.querySelector("div.sidebar-button")
    if (sideBar) {
        sideBar.remove()
    }
}

export function deleteHeader() {
    const header = document.querySelector("div.header")
    if(header) {
        header.remove()
    }
}

export default deleteUnusedELements