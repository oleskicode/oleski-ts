// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str: string): string {
    let finalString: string [] = []
    let nextItemMustBeCapitalized = false

    let inputArray = str.split("")
    // console.log(inputArray)
    inputArray.forEach((char) => {
        if (nextItemMustBeCapitalized === true) {
            char = char.toUpperCase()
            nextItemMustBeCapitalized = false
        }
        if ( char === "-" || char === "_") {
            nextItemMustBeCapitalized = true
            // console.log("nextItemMustBeCapitalized = true")
        } else {
            finalString.push(char)
        }
    })

    return finalString.join("")
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))
