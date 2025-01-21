// Swap the case of each character. 
// For example: if str is "Hello World" the output should be hELLO WORLD. 
// Additionally replace every fourth character with *.

// Examples
// Input: "Hello World!""
// Output: "hEL*O W*RLD*"

function swapCaseAndReplace(str: string): string {
    let swapped = ""
    for (let char of str) {
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase()
        } else {
            swapped += char.toUpperCase()
        }
    }

    // now lets mask-replace every 4th element
    const array = swapped.split("")

    for (let i = 0; i < array.length; i++) {
        if ( ( i +1 ) % 4 === 0) {
            array[i] = "*"
        }
    }

    swapped = array.join("")
    return swapped
}

console.log(swapCaseAndReplace("Hello World!"))
