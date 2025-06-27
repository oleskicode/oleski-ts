/* Find the Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Input: s1 = "abcabcbb"
Output: The answer is "abc", with the length of 3.

Input: s2 = "bbbbb"
Output: The answer is "b", with the length of 1. */

const s1 = "abcabcbb";
const s2 = "bbbbb";
const s3 = "1234123451234";

function findLongestSubstring(str: string): string {
  const arrayFromStr = Array.from(str);
  let longestSubstring = "";
  let currentSubstring = "";

  arrayFromStr.forEach((char) => {
    if (currentSubstring.includes(char)) {
      if (currentSubstring.length > longestSubstring.length) {
        const temp = currentSubstring;
        currentSubstring = longestSubstring;
        longestSubstring = temp;
      }
    } else {
      currentSubstring += char;
    }
  });

  // console.log(`The answer is: ${longestSubstring}, with the length of ${longestSubstring.length}`)
  return longestSubstring;
}

console.log(findLongestSubstring(s1));
console.log(findLongestSubstring(s2));
console.log(findLongestSubstring(s3));
