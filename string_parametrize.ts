// Write function to parameterize a string.
// console.log(string_parameterize("Robin from USA.")) // "robin-from-usa"

function string_parameterize(str: string): string {
    let inputArray = str.split(" ")
    inputArray = inputArray.map(item => item.toLowerCase())
    inputArray = inputArray.map(item => item.replace(/[.,?!:;]/g, '')) // cleanup

    let outputString = inputArray.join("-")
    // console.log(inputArray)

    return outputString
}

console.log(string_parameterize("Robin from USA.")) // "robin-from-usa"
console.log(string_parameterize("Apple!.. From the TREE?")) // "apple-from-the-tree"