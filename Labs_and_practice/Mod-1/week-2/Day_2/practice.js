/* let number = 10;
while (number >= 0) {
    console.log(number);
    number--;
}

let i = 3
while (i < 35) {
    console.log(i);
    i += 3;
} */
/*
Also works for the above result:

let i = 1
while (i < 35) {
    if(i%3 === 0) {
        console.log(i)
    }
    i++
}

*/

/* let j = 1;
while (j < 100) {
    if (j%5 === 0) {
        console.log(j);
    }
    j++;
}

let k = 1;
while (k < 20) {
    if( k%2 === 0) {
    console.log( k * 3)
    }
    k++;
} */

// Cookie logic bonus

/* const CHANGE = 600
let changeInQuarters = 25;
let amountOfQuarters = 1;

while (changeInQuarters < CHANGE) {
    changeInQuarters += 25;
    amountOfQuarters++;
}
console.log(amountOfQuarters); */
function getChange (pay, product) {
    if(isNaN(pay.toString()[2]) || isNaN(product.toString()[2])) {
        return "please enter in number format 0000";
    } else {
        const CHANGE = pay - product
        let changeInQuarters = 25;
        let amountOfQuarters = 1;
        while (changeInQuarters < CHANGE) {
            changeInQuarters += 25;
            amountOfQuarters++;
        }
    return amountOfQuarters;
    }
}
console.log(getChange(1000, 400));
console.log(getChange(12, 33));

