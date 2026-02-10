const bet = Number(localStorage.getItem("bet"))
document.getElementById("bet").textContent = bet
const cashoutBtn = document.getElementById("cashout-btn")
cashoutBtn.disabled = true

let sum = 0
let cardsDrawn = 0
let aceCount = 0

const sumEl = document.getElementById("sum")
const cardsEl = document.getElementById("cards")
const resultEl = document.getElementById("result")

const cards = [
    { value: 11, image: "images/card-a.png" },
    { value: 2, image: "images/card-2.png" },
    { value: 3, image: "images/card-3.png" },
    { value: 4, image: "images/card-4.png" },
    { value: 5, image: "images/card-5.png" },
    { value: 6, image: "images/card-6.png" },
    { value: 7, image: "images/card-7.png" },
    { value: 8, image: "images/card-8.png" },
    { value: 9, image: "images/card-9.png" },
    { value: 10, image: "images/card-10.png" },
    { value: 10, image: "images/card-j.png" },
    { value: 10, image: "images/card-q.png" },
    { value: 10, image: "images/card-k.png" }
]

function drawCard() {
    if (sum >= 21) return; 

    const randomIndex = Math.floor(Math.random() * cards.length)
    const card = cards[randomIndex]

    if (card.value === 11) {
        aceCount++
    }

    cardsDrawn++
    sum += card.value

    while (sum > 21 && aceCount > 0) {
        sum -= 10
        aceCount--
    }

    sumEl.textContent = sum

    if (cardsDrawn >= 2) {
        cashoutBtn.disabled = false;
    }

    const img = document.createElement("img")
    img.src = card.image
    img.classList.add("card-img")
    cardsEl.appendChild(img)

    if (sum > 21) {
        resultEl.textContent = "You Lose 😢!"
        disableButtons()
    }

    if (sum === 21) {
        const risk = sum / 21
        const multiplier = Math.min(2, 1 + Math.pow(risk, 4))
        const winnings = Math.floor(bet * multiplier)
        resultEl.textContent = `BlackJack 🎉! You won $${winnings} (x${multiplier.toFixed(2)})`
        disableButtons()
    }
}

window.onload = function () {
    drawCard()
}

document.getElementById("hit-btn").addEventListener("click", drawCard)

document.getElementById("cashout-btn").addEventListener("click", function() {
    if (sum >= 21) return

    const risk = sum / 21
const multiplier = Math.min(2, 1 + Math.pow(risk, 4))
    const winnings = Math.floor(bet * multiplier)

    resultEl.textContent = `You won $${winnings} (x${multiplier.toFixed(2)})`
    disableButtons()
})

function disableButtons() {
    document.getElementById("hit-btn").disabled = true
    document.getElementById("cashout-btn").disabled = true
}





