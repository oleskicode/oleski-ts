// The task is to return an array with "female"/"male" based on whether the second-to-last (!) digit of each number in the array is even or odd.
// Input: (1234, 12345)
// Result: ("female", "male")

const inputArray = [1234, 12345, 57, 67]
console.log(inputArray)

// using forEach
let resultArray: string [] = []
inputArray.forEach((number) => {
    if (Math.floor(number / 10) % 2 === 0) {
        resultArray.push("male")
    } else {
        resultArray.push("female")
    }
})
console.log(resultArray)

// using map
let mappedArray = inputArray.map((number) => {
    if ( Math.floor(number / 10) % 2 === 0) {
        return "male"
    } else {
        return "female"
    }
})
console.log(mappedArray)
