// Javascript is a high-level programming language that conforms to ECMAScript (general purpose programming language - javascript stnadard that ensures interpolation across different web browsers ) specification and allows for functional programming and prototype-based-object-orientation

// Web accessibility is the principle of making content that lives on the web capable of being utilized by people who are differently abled

const GREETING = "Hello World";
console.log(GREETING);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('What is you name, friend?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});


let a = 5;
let b = 10;

const sum = a + b;
console.log(sum);

let c = 2;
let d = 3;
let e = 4;
let f = 5;
let g = 20;
let h = 24;
let i = 14;
let j = 8;
let k = 11;
let l = 15;

let sum1 = c + d + e + f + g;
let average1 = sum1 / 5;
console.log(average1);
let sum2 = h + i + j + k + l;
let average2 = sum2 / 5;
console.log(average2);
let sum3 = average1 + average2;
let average3 = sum3 / 10;
console.log(average3);