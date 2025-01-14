function isArray(input: unknown) {
    return Array.isArray(input) // Array.isArray
}

console.log(isArray([1,2,3,4]))
console.log(isArray(1234))
