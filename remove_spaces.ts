// function that removes the spaces from the string

const stringToClean1: string = "  1 2 3 4 cs    ds   sdf kk o k   "
const stringToClean2: string = "   1   2 3   4     5     "

function removeSpaces(inputString: string) : string {
    let outputString = ""
    outputString = inputString.replace(/ /g, "")
    return outputString
}

console.log(removeSpaces(stringToClean1))
console.log(removeSpaces(stringToClean2))
