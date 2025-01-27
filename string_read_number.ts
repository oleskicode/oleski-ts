// function to extract int number which may be within string:
// "abc3sdfs" >> 3
// "c10sdfs" >> 10

function getNumberWithinString(str: string) {
    const match = str.match(/\d+/)
    if ( match != null) {
        // console.log(Number(match[0]))
        return match[0]
    } else {
        console.log("No number found in string")
        return null
    }
}

console.log(getNumberWithinString("abc3sdfs"))
console.log(getNumberWithinString("c10sdfs"))
console.log(getNumberWithinString("ccc"))
