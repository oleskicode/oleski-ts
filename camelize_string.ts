// Camelize String. Write function to convert a string into camel case.

function camelizeString(inputString: string) : string {
    
    if (inputString === "") {  // processing empty string
        return ""
    }

    const separators = ["-", "_", " ", "."]
    const inputArray = inputString.split("")
    let capitalizeNextItem: boolean = false

    let outputString = inputArray[0].toLowerCase() // first always lowercase

    for (let i=1; i < inputArray.length; i++) {
        let item = inputArray[i]

        if ( separators.includes(item) ) {  // processing separators
            capitalizeNextItem = true
        } else {
            if ( capitalizeNextItem ) {
                outputString += item.toUpperCase()
                capitalizeNextItem = false
            } else {
                outputString += item
            }
        }
    }
    return outputString;
}


// Test Data :
console.log(camelizeString("snake_case_string"));
console.log(camelizeString("kebab-case-string"));
console.log(camelizeString("just some string"));
console.log(camelizeString(""));
