// Write a function that takes an array of strings and returns a plain object where:
// Each key is a stringified number representing the word length.
// Each value is an array of words of that length.

const words = ["hi", "hello", "world", "a", "typescript", "is", "fun"];

function groupWordsByLength(words: string[]) {
  const result: { [key: string]: string[] } = {};

  words.forEach((word) => {
    if (!result[word.length]) {
      result[word.length] = [];
    }
    result[word.length].push(word);
  });

  return result;
}

// Output: {
//   "1": ["a"],
//   "2": ["hi", "is"],
//   "3": ["fun"],
//   "5": ["hello", "world"],
//   "10": ["typescript"]
// }

console.log(groupWordsByLength(words));
