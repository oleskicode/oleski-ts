// function to replace specific char in string

function replaceChar(inputString: string, index: number, newChar: string) {
  let outputString = inputString;

  outputString =
    inputString.slice(0, index) + newChar + inputString.slice(index + 1);

  return outputString;
}

console.log(replaceChar("epple", 0, "a"));
console.log(replaceChar("bonana", 1, "a"));
console.log(replaceChar("coconud", 6, "t"));
