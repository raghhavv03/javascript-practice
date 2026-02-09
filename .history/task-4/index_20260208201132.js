let firstNumber = document.getElementById("first-number")
let secondNumber = document.getElementById("second-number")
let result = document.getElementById("sum-result")

function sum() {
    let sum = Number(firstNumber.value) + Number(secondNumber.value)
    result.innerText = sum
}