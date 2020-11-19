// Find the average of ( 4, 10, 22, -30, 55); Print in console
// Find the average of ( 68, 7, -22, 9, 100); Print in console

let arr1 = [4, 10, 22, -30, 55];
let arr2 = [68, 7, -22, 9, 100];
let average;

function findAverage (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;
    return average;
}

console.log(findAverage(arr1)); // logs 12.2
console.log(findAverage(arr2)); // logs 32.4

// cleaner solution below - getting better at using forEach method over using loops.

function testAverage (arr) {
    let sum = 0;
    arr.forEach((item) => 
        sum += item);
    average = sum / arr.length;
    return average;
}
console.log(testAverage(arr1)); // logs 12.2
console.log(testAverage(arr2)); // logs 32.4