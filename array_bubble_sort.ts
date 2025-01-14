const list1: number  []  = [1, 2, -5, 3, 2, 4, 0, -3, 5]

function bubbleSort(inputArray: number[]) {
    for (let i=0; i < inputArray.length; i++) {
        for (let j=1; j < inputArray.length; j++) {
            if (inputArray[j] < inputArray[j-1]) {
                let temp = inputArray[j]
                inputArray[j] = inputArray[j-1]
                inputArray[j-1] = temp
            }
        }
    }
    return inputArray;
}

console.log(bubbleSort(list1))

