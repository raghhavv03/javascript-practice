const bet = Number(localStorage.getItem("bet"))
document.getElementById("bet").textContent = bet

let sum = 0

const sumEl = document.getElementById("sum")
const cardsEl = document.getElementById("cards")
const resultEl = document.getElementById("result")

const cards = [
    { value: 2, image: "images/card-2.png" },
    { value: 3, image: "images/card-3.png" },
    { value: 4, image: "images/card-4.png" },
    { value: 5, image: "images/card-5.png" },
    { value: 6, image: "images/card-6.png" },
    { value: 7, image: "images/card-7.png" },
    { value: 8, image: "images/card-8.png" },
    { value: 9, image: "images/card-9.png" },
    { value: 10, image: "images/card-10.png" },
    { value: 11, image: "images/card-a.png" }
]

