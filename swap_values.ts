const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
[arr1[0], arr1[arr1.length - 1]] = [arr1[arr1.length - 1], arr1[0]];
console.log(arr1);
