// Create Function which inputs string with a single asterisk character splitting the string evenly into two separate substrings. Return a new string by pairing up the characters in the corresponding locations in both substrings.
// Input: "aaa*bbb" >> // Output: ababab
// Input: "123*abc" >> // Output: 1a2b3c

function stringExercise(str: string): string {
  let result = "";

  const splittedStr: string[] = str.split("*");
  console.log(splittedStr);

  const array1 = splittedStr[0].split("");
  const array2 = splittedStr[1].split("");
  console.log(array1 + " - " + array2);

  // inter-merging into a result string
  for (let i = 0; i < array1.length; i++) {
    result += array1[i] + array2[i];
  }

  return result;
}

console.log(stringExercise("aaa*bbb")); // ababab
console.log(stringExercise("123*abc")); // 1a2b3c
