// Put separators between even numbers
// Input: 025468 // Output: 0-254-6-8  

function separateEven(inputString: string) : string {
    console.log(inputString)
    
    let outputString = inputString[0]
    const numArray: number [] = []

    inputString.split("").forEach(element => {
        const number = Number(element)
        numArray.push(number)
    });

    // console.log(numArray)
    
    for (let i = 1; i < numArray.length; i++) {
        if ((numArray[i-1] % 2 === 0) && (numArray[i] % 2 === 0)) {
            outputString += "-"
        }
        outputString += numArray[i]
    }

    return outputString
}

console.log(separateEven("025468"))
