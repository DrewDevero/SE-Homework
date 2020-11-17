// This is a simple comment
console.log("Hello, World" /* This is a valid javascript comment that doesn't mess with the console output */); // This comment is at the end of the line
let greeting = "Hello, ";
const MY_NAME = "Alston Drew Devero-Belfon";

console.log(greeting + MY_NAME);

// Javascript is a high-level programming language that conforms to ECMAScript (general purpose programming language - javascript stnadard that ensures interpolation across different web browsers ) specification and allows for functional programming and prototype-based-object-orientation

// Web accessibility is the principle of making content that lives on the web capable of being utilized by people who are differently abled

const GREETING = "Hello World";
console.log(GREETING);

let a = 5;
let b = 10;

let sum = a + b;
console.log(sum);

let c = 30;
let d = 12;
let e = 2;
let f = 17;

let subtraction = d - e;
let multiplication = c * d;
let division = f / e;

console.log(subtraction);
console.log(multiplication);
console.log(division);

let g = 2;
let h = 3;
let i = 4;
let j = 5;
let k = 20;
let l = 24;
let m = 14;
let n = 8;
let o = 11;
let p = 15;

let sum1 = g + h + i + j + k;
let average1 = sum1 / 5;
console.log(average1);
let sum2 = l + m + n + o + p;
let average2 = sum2 / 5;
console.log(average2);
let sum3 = average1 + average2;
let average3 = sum3 / 10;
console.log(average3);

let totalSum = (a,b) => a + b;
let nums = [g, h, i, j, k];
console.log(nums);
console.log(nums.reduce(totalSum));