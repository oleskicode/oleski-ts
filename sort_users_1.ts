// There is an array of random numbers. The task is to return an array with gender ("female"/"male") based on whether the second-to-last digit of each number in the array is even or odd.
// Input: (1234, 12345)
// Result: ("female", "male")

const inputArray = [1234, 12345, 55, 66, 7, 0]
console.log(inputArray)

// using forEach
let resultArray: string [] = []
inputArray.forEach((number) => {
    if (number % 2 === 0) {
        resultArray.push("male")
    } else {
        resultArray.push("female")
    }
})
console.log(resultArray)

// using map
let mappedArray = inputArray.map((number) => {
    if ( number % 2 === 0) {
        return "male"
    } else {
        return "female"
    }
})
console.log(mappedArray)
