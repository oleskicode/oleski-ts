// Get list of symbols and how often they are met in string
const testString = "abcaba"

type KeyValuePair = Record<string, number> // Custom Record<string, number> 

function countStringSymbols(inputString: string): KeyValuePair {
    let result: KeyValuePair = {}  // Initialize right away as an empty object
    const inputArray = inputString.split("")
    inputArray.forEach(char => {
        if (result[char]) {
            result[char]++
        } else {
            result[char] = 1
        }
    })
    return result
}

console.log(countStringSymbols(testString))
