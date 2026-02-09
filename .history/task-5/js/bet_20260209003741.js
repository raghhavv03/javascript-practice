const balance = localStorage.getItem("balance")
document.getElementById("balance").textContent = balance

const startGameBtn = document.getElementById("start-game-btn")
const ErrorMsg = document.getElementById("bet-error-msg")

startGameBtn.addEventListener("click", function() {
    const bet = document.getElementById("bet-input").value

    if (bet <= 0 || bet > balance) {
        ErrorMsg.textContent = "Please enter a valid bet amount"
        return
    }

    
})