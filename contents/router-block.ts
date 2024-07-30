export {}

let currPath = document.location.href

if (!currPath.includes("https://pamyat-naroda.ru/heroes/") && !currPath.includes("https://mlcity.ru")) {
    document.location.href = "https://pamyat-naroda.ru/heroes/"
}   