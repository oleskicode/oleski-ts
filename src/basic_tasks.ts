console.log("-- Task1 - isEven")
function isEven(inputNumber: number) : boolean {
    console.log(inputNumber)
    return inputNumber % 2 === 0;
}
console.log(isEven(1))
console.log(isEven(2))
console.log(isEven(3))

console.log("-- Task2 - hourCheck")
function hourCheck(hourInput: number) : string {
    if (hourInput >= 0 && hourInput < 12) return "Good Morning!"
    if (hourInput >= 12 && hourInput <18) return "Good Day!"
    if (hourInput >= 18) return "Good Evening!"
    return "Invalid Input"
}

console.log(hourCheck(1))
console.log(hourCheck(12))
console.log(hourCheck(18))
console.log(hourCheck(-5))

console.log("-- Task3 - Age Check")
function ageCheck(inputAge: number) : boolean {
    if (inputAge < 0) {
        console.log("Invalid input age")
    }
    return inputAge >= 18
}

console.log(ageCheck(-5))
console.log(ageCheck(15))
console.log(ageCheck(17))
console.log(ageCheck(18))
console.log(ageCheck(19))
