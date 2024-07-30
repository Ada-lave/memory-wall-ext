
function deleteUnusedELements() {
    if (document.location.href.includes("https://pamyat-naroda.ru/heroes/")) {
        let headerBanner = document.querySelector("div.header__banner")
        headerBanner.remove()

        let moreSeacrhButton = document.querySelector("div.button-more-search")
        moreSeacrhButton.remove()

        let questionLink = document.querySelector("a.btn-how-search")
        questionLink.remove()
    }
}

export default deleteUnusedELements