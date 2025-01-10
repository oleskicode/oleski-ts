// get second numbers from the end
const someArray =  [213, 12323, 4536, 67849, 7859]
// output: [1, 2, 3, 4, 5]

// using Math.floor and / %
function secondFromEndArray(inputArray: number[]) {
    let outPutArray: number [] = []

    inputArray.forEach((number) => {
        // console.log (Math.floor(number / 10 ) % 10)
        outPutArray.push(Math.floor(number / 10 ) % 10)
    })
    return outPutArray
}
console.log(secondFromEndArray(someArray))

// using toString and slice
function getSecondNumberFromEnd(inputArray: number[]) {
    let outputArray: number [] = []    
    inputArray.forEach((item) => {
        outputArray.push(Number(item.toString().slice(0,-1).slice(-1)))
    })
    return outputArray
}

console.log(getSecondNumberFromEnd(someArray))
