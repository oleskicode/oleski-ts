// Join Array into string using join character
const myColor = ["Red", "Green", "White", "Black"];  
// "Red,Green,White,Black"  
// "Red+Green+White+Black"    

function joinArrayItems(array: string [], joinChar: string) : string {
    let outputString: string = array.join(joinChar)
    return outputString
}

console.log(joinArrayItems(myColor, ","))
console.log(joinArrayItems(myColor, "+"))
