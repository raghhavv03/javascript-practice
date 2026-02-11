let person = {
    name: "Raghav",
    age: 22,
    country: "India"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()

let countries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log(countries.length)

console.log("The 5 largest countries in the world: ")
for (let i = 0; i < countries.length; i++) {
    console.log("- " + countries[i])
}