/* 
1. Using a while loop, print out all prime numbers between 0 - 20

4.While loops Fundamentals: https://csx.codesmith.io/units/precourse-part-2/challenge-while-loops-fundamentals
*/



// Angel's Code example below:
// 2, 3, 5, 7, 11, 13, 17, 19
let i = 0;
while(i < 20) {
  if(i === 0) { // this is here because 0 is not prime or composite
    console.log('the number 0 is neither prime or composite');  
  } else if(i === 1) {
    // do nothing lol
  } else if(i === 2 || i === 3) { // this is here because 2 and 3 are both prime
    console.log(i);
  } else {
    // current iteration : 4 = i
    //   if number is divisible by any num
    //    1 - 4
    //    2 - 3 (inclusive)
    //    we set isevenlydivisible to true
    let isevenlydivisible = false;
    // loop it starts from 2 goes up to i
    //  and at every step divides i by j (j being the iteration)
    for(let j = 2; j < i; j++) { // we start from 2 because every num is divisible by 1
      const hasdecimal = i % j !== 0; // this returns true if the number after dividing by j is whole
      if(!hasdecimal) { // we're checking if it's not a fraction
        isevenlydivisible = true; // if it's a whole number then that means at some point it was a whole number when divided
        // so we say it was at some point evenly divisible
      }
    }
    if(!isevenlydivisible /* if it is prime */) {
      console.log(i);
    } // why do we have !isevendivisible?
        // because if at some point it was evenly divisible it was not a prime
          // so we do nothing
    // but when it is a prime
        // we want to print it
  }
  i++;
}
// End of Angel's code

/* 2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end
*/

let sum = 1;
let num = 1;
while(num <= 20) {
    sum += num;
    num++;
}
console.log(sum);

/* 3. Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.) */
let number_2 = 1;

while (number_2 < 21) {
    if (number_2%2 === 0) {
        console.log(number_2)
    }
    number_2++;
}
let nums = 2;
let numberCheck = 2;

while (nums < 20) {
    // only prints numbers that can be made by nums * 1 and is not divisible by any prime less than or equal to the square root of nums
    }
    nums++;