// Basic Arrow Function: Square a number
const basicArrow = (num: number): number => {
  return num * num;
};
console.log(basicArrow(3));

// Filter even numbers from an array
const filterArrow = (numbers: number[]): number[] => {
  return numbers.filter((item) => item % 2 === 0);
};

console.log(filterArrow([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));

//  Double each number in an array
const doubleEachArrow = (numbers: number[]): number[] => {
  return numbers.map((item): number => item * 2);
};
console.log(doubleEachArrow([0, 1, 2]));
