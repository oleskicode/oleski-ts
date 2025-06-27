// capitalize the first letter of each word in a string.

function capitalizeEachWord(inputString: string): string {
  let outputString = "";
  let array1 = inputString.split(" ");

  array1.forEach((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    // console.log(word)
    outputString += word + " ";
  });

  return outputString.trim(); // trim last space
}

console.log(capitalizeEachWord("some string exercise"));
