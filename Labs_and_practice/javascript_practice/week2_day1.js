const { debug } = require("console");
const { debuglog } = require("util");

let arr1 = [1, 2];
let arr2 = [1 ,2];
if(arr1 === arr2) {
    console.log("Hello, World");
} else {
    console.log("Not Equal");
}

(arr1 === arr2) ? "Hello, World" : "Not Equal";

const AGE = 18;

if(AGE >= 21) {
    console.log("You're in the club!");
} else {
    if(AGE <= 6 && AGE > 0) {
        console.log("Where are your parents?!");
    } else if (AGE >= 7 && AGE <= 17) {
        console.log("Come on you can wait a few years!");
    } else if (AGE >= 18 && AGE < 21) {
        console.log("So close. . . but no!");
    } else {
        console.log("You don't exist negative age implosion person!");
    }
}

/* 
// number tests

let num;
num = 150;
num = 53;
num = -3;
num = 100;
num = 0;
num = "eref"; */

const number = 0;
let num = 53;
if (num > 0 && num > 100) {
    console.log("Positive Number and greater than 100.");
} else if (num > 0 && num < 100) {
    console.log("Still positive, but less than 100.");
} else if (num < 0) {
    console.log("This is a negative number")
} else if (num === 100) {
    console.log(`Keep it ${num}`);
} else if (num === 0) {
    console.log (`Your number, "${num}," should be 0`);
} else if (typeof(num) !== typeof(number)) {
    console.log(`You submitted "${num}," please submit a number.`);
}

// 1. Write a JavaScript display the larger of two integers

const INT_1 = 10
const INT_2 = 12

INT_1 > INT_2 ? 
    console.log(`${INT_1} is greater than ${INT_2}`) 
    : 
    INT_1 === INT_2 ? 
        console.log(`${INT_1} is equal to ${INT_2}`) 
        : 
        console.log(`${INT_2} is greater than ${INT_1}`);

/* 
2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F
*/

let student = 74;
if(student >= 90) {
    console.log("A");
} else if(student >= 80) {
    console.log("B");
} else if(student >= 70) {
    console.log("C");
} else if(student >= 55) {
    console.log("D");
} else {
    console.log("F");
}

(function trail() {
    for (let i = 0; i < 200; i++) {
        console.log(i);
    }
})();

/*
3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
*/
const DATE = new Date();
let time = DATE.getHours();

if(time >= 5 && time < 12) {
    console.log("Good Morning");
} else if(time > 12 && time < 16)  {
    console.log("Good Afternoon");
} else {
    console.log("Hey There");
}

//Code Along

let tag = "";
for (let i = 0; i < 7; i++) {  
    tag += "#";
    console.log(tag);
}

for(let i = 10; i > 0; i--) {
    console.log(i);
}

for(let i = 6; i <= 60; i+= 3) {
    console.log(i);
}
