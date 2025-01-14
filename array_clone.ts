const array11 = [1, 2, 3, 4, 5, 6]

function cloneArrayUsingSpread(inputArray: number[] ) : number[] {
    return [...inputArray]
}

function cloneArrayUsingSlice(inputArray: number[] ) : number[] {
    return inputArray.slice()
}

const array22 = cloneArrayUsingSpread(array11)
const array33 = cloneArrayUsingSpread(array11)

array22[0] = 22 // modifying array intentionally
array33[0] = 33 // same here

console.log(array11)
console.log(array22)
console.log(array33)
