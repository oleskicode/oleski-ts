// Find the First Unique Character
// Find the first non-repeating character in a string - return its index.
// If no unique characters found, return -1.

function firstUniqueCharacter(s: string): number {
  for (let i = 0; i < s.length; i++) {
    // console.log(`s[i]: ${s[i]}`)
    // console.log(`s.slice(i+1): ${s.slice(i+1)}`)

    //  check whether char is unique (not repeated) in PRE- and AFTER-string
    if (
      s.slice(0, i).includes(s[i]) === false &&
      s.slice(i + 1).includes(s[i]) === false
    ) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqueCharacter("apple")); // Output: 0
console.log(firstUniqueCharacter("loveleetcode")); // Output: 2
console.log(firstUniqueCharacter("aabbcc")); // Output: -1
