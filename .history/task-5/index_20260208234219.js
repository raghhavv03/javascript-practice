const cards = [
  { img: "./images/card-a.png", value: 11 },
  { img: "./images/card-2.png", value: 2 },
  { img: "./images/card-3.png", value: 3 },
  { img: "./images/card-4.png", value: 4 },
  { img: "./images/card-5.png", value: 5 },
  { img: "./images/card-6.png", value: 6 },
  { img: "./images/card-7.png", value: 7 },
  { img: "./images/card-8.png", value: 8 },
  { img: "./images/card-9.png", value: 9 },
  { img: "./images/card-10.png", value: 10 },
  { img: "./images/card-j.png", value: 10 },
  { img: "./images/card-q.png", value: 10 },
  { img: "./images/card-k.png", value: 10 }
]

let playerMoney = 100
let currentBet = 0
let sum = 0
let isAlive = false

const moneyEl = document.getElementById("money")
const betEl = document.getElementById("bet")
const messageEl = document.getElementById("message")
const sumEl = document.getElementById("sum")
const cardsEl = document.getElementById("cards-container")

const startBtn = document.getElementById("start-btn")
const hitBtn = document.getElementById("hit-btn")
const standBtn = document.getElementById("cashout-btn")

function getRandomCard() {
    const index = Math.floor(Math.random()*cards.lenght)
    return cards[index]
}


