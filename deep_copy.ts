let obj1 = { a: 1, b: 2, c: 3 };

let obj2 = JSON.parse(JSON.stringify(obj1));
let obj3 = structuredClone(obj1);

console.log(obj1);
console.log(obj2);
console.log(obj3);
