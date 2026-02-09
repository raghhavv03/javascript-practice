const bet = Number(localStorage.getItem("bet"))
document.getElementById("bet").textContent = bet

let sum = 0

const sumEl = document.getElementById("sum")
const cardsEl = document.getElementById("cards")
const resultEl = document.getElementById("result")

const cards = [
    { value: 1, image: "images/card-2.png" },
    { value: 2, image: "images/card-3.png" },
    { value: 3, image: "images/card-3.png" },
    { value: 4, image: "images/cards/4.png" },
    { value: 5, image: "images/cards/5.png" },
    { value: 6, image: "images/cards/6.png" },
    { value: 7, image: "images/cards/7.png" },
    { value: 8, image: "images/cards/8.png" },
    { value: 9, image: "images/cards/9.png" },
    { value: 10, image: "images/cards/10.png" }
]

