// function to check if input string is int number

function isIntNumber(str: string): boolean {
    const converted = Number(str) // str to number
    const isInt = Number.isInteger(converted) // check if number is int
    
    console.log("converted: " + converted)
    return isInt
}
 
console.log(isIntNumber("1"))
console.log(isIntNumber("2.3"))
console.log(isIntNumber("04"))  
console.log(isIntNumber("-15"))
console.log(isIntNumber("123a"))
console.log(isIntNumber("b567"))
