// "Write a function that returns Fibonacci numbers by their sequence number, where the sequence number is given as input. Input: 7 Result: 13"
// 1 1 2 3 5 8 13

function fibonacciFunction(inputNumber: number): number {
  if (inputNumber < 1) return -1;
  if (inputNumber == 1) return 1;
  if (inputNumber == 2) return 1;

  let fibonacciArray: number[] = [1, 1];

  for (let i = 2; i < inputNumber; i++) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
  }
  console.log(fibonacciArray);
  return fibonacciArray[inputNumber - 1];
}

console.log(fibonacciFunction(1));
console.log(fibonacciFunction(2));
console.log(fibonacciFunction(3));
console.log(fibonacciFunction(4));
console.log(fibonacciFunction(5));
console.log(fibonacciFunction(6));
console.log(fibonacciFunction(7));
