// through string
const greetingString = "Hi how are you?"
for (const char of greetingString) {
    console.log(char)
}

// through array
let fruits: string[] = ["apple", "banana", "coconut"]

fruits.forEach( (fruit) => { // using forEach
    console.log("fruits.forEach: " + fruit)
})


for (let fruit of fruits) { // using for-of
    console.log(fruit + "🍏 FOR-OF ")
}
