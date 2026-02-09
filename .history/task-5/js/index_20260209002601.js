const addMoneyBtn = document.getElementById("add-money-btn")
const errorMsg = document.getElementById("error-msg")

addMoneyBtn.addEventListener("click", function() {
    const amount = document.getElementById("money-input").value
    if (amount <= 0) {
        errorMsg.textContent = "Please enter a valid amount"
        return
    }
    localStorage.setItem("balance", amount)
    window.location.href = "bet.html"
})

