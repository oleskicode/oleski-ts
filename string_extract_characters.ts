// Write function to extract a specified number of characters from a string.

function truncate_string(str: string, truncateNumber?: number): string {
  if (truncateNumber === undefined) {
    truncateNumber = 1;
  }

  let outputString = str.slice(0, truncateNumber);

  return outputString;
}

console.log(truncate_string("Apple")); // "A"
console.log(truncate_string("Robin Hood", 5)); // "Robi"

// same but using array and for
function truncate_string2(str: string, truncateNumber?: number): string {
  if (truncateNumber === undefined) {
    truncateNumber = 1;
  }

  const inputArray = str.split("");
  let outputString = "";

  for (let i = 0; i < truncateNumber; i++) {
    outputString += inputArray[i];
  }

  return outputString;
}

console.log(truncate_string2("Apple")); // "A"
console.log(truncate_string2("Robin Hood", 5)); // "Robi"
