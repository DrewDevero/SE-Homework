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

let student = 78;
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