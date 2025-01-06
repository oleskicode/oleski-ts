function isPalindrome(inputString: string) : boolean {
    const revertedString: string = inputString.split("").reverse().join("") // get reverse string
    const answer = (inputString === revertedString)
    console.log(inputString + " - " + revertedString)
    return answer
}

console.log(isPalindrome("abccba"))
console.log(isPalindrome("abcdcba"))
console.log(isPalindrome(""))

console.log(isPalindrome("1234"))
console.log(isPalindrome("apple"))
console.log(isPalindrome("banana"))
