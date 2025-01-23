// Count how many times symbol is present in string

function countSymbolInString(str: string, char: string): number {
    let timesMet = str.split(char).length - 1
    return timesMet
}

console.log(countSymbolInString("Abbey", "b"))
console.log(countSymbolInString("How, many, commas are, here?", ","))