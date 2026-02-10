let sentence = ["hello", ", ", "my ", "name ", "is ", "Raghav", "."]
let greetingEl = document.querySelector("#greeting-element")

for (let i=0; i<sentence.length(); i++) {
    greetingEl.textContent += sentence[i]
}