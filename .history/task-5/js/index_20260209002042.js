const addMoneyBtn = document.getElementById('add-money-btn')
const errorMs
addMoneyBtn.addEventListener("click", function() {
    const amount = document.getElementById("money-input").value
    if (amount <= 0) {

    }
    localStorage.setItem("balance", amount)
    window.location.href = "bet.html"
})

