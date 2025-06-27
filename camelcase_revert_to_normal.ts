// Uncamelize a string. Separator is optional.
// console.log(uncamelizeString('helloWorld'));
// console.log(uncamelizeString('helloWorld','-'));
// console.log(uncamelizeString('helloWorld','_'));

function uncamelizeString(str: string, separator?: string): string {
  if (separator === undefined) {
    separator = " ";
  }
  let output = "";
  const inputArray = str.split("");
  // console.log(inputArray)

  inputArray.forEach((item) => {
    if (item === item.toUpperCase()) {
      // when symbols is Uppercase
      output += separator + item.toLowerCase();
    } else {
      output += item;
    }
  });

  return output;
}

console.log(uncamelizeString("helloWorld"));
console.log(uncamelizeString("helloWorld", "_"));
console.log(uncamelizeString("startNewFunction"));
console.log(uncamelizeString("startNewFunction", "-"));
