const array2: number [] = [1, 2, 3, 4, 5, 6, 7]

function getFirstNElements(arrayInput: number[], n: number): number[] {
    return arrayInput.slice(0, n)
}

console.log(`Original array: ${array2}`)
console.log(getFirstNElements(array2, 1))
console.log(getFirstNElements(array2, 3))

function getLastNElements(arrayInput: number[], n: number) {
    let resultOutput = arrayInput.slice(-n)
    return resultOutput
}

console.log(`Original array: ${array2}`)
console.log(getLastNElements(array2, 2))
console.log(getLastNElements(array2, 4))
