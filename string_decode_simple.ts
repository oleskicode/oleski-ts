// Write function which decodes string
// "2[ab]" -> "abab"
// "3[c]ker" -> "cccker"
// "abcdef" -> "abcdef"

function decodeString(str: string) : string {
    let outputString = ""

    // validation 1 - no set of brackets
    if ((!str.includes("[")) || (!str.includes("]"))) {
        return str
    }

    // validation 2 - incorrect brackets arrangement
    let regex = /\[[^\]]+\]/; 
    // console.log(regex.test(str)) // boolean
    if (!regex.test(str)) { // must have this pattern [ab], [c]
        return str
    }

    const splitted = str.split(/[\[\]]/) // split by [ ]
    console.log("str.split(): " + splitted)

    outputString = splitted[1].repeat(Number.parseInt(splitted[0]))+splitted[2]

    return outputString
}

console.log(decodeString("2[ab]cc"))
console.log(decodeString("3[c]ker"))
console.log(decodeString("abcdef"))
console.log(decodeString("incorrect]b[rackets"))
