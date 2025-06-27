// 1. through string sing for-of
const greetingString = "Hi how are you?";

for (const char of greetingString) {
  console.log(char);
}

// 2. convert string to Array and forEach
Array.from(greetingString).forEach((char) => {
  console.log("---" + char);
});

// 3. through array using forEach
let fruits: string[] = ["apple", "banana", "coconut"];

fruits.forEach((fruit) => {
  // using forEach
  console.log("fruits.forEach: " + fruit);
});

// 4. through array using "for of"
for (let fruit of fruits) {
  // using for-of
  console.log("for-of: " + fruit);
}
