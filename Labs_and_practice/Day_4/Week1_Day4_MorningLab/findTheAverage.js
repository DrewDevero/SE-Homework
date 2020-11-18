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

console.log(findAverage(arr1));
console.log(findAverage(arr2));