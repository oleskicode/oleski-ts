// write function to revert input string
// Input: "Hello World!" OutPut: "!dlroW olleH"

function reverseString(str: string): string {
  let output = "";

  for (let i = 0; i < str.length; i++) {
    output += str[str.length - i - 1];
  }

  return output;
}

console.log(reverseString("abc123")); // Output: "321cba"
console.log(reverseString("Hello World!")); // OutPut: "!dlroW olleH"
