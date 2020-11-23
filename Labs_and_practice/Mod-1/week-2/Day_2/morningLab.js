/* 
1. Using a while loop, print out all prime numbers between 0 - 20

4.While loops Fundamentals: https://csx.codesmith.io/units/precourse-part-2/challenge-while-loops-fundamentals
*/

/* let nums = 2;
let numberCheck = 20;
let numberCheck_2 = 20;

while (nums < 20) {
    // only prints numbers that can be made by nums * 1
    while (numberCheck < 20 && numberCheck > 0) {
        while (numberCheck_2 < 20 && numberCheck_2 > 0) {
            if (nums === numberCheck * numberCheck_2) {
            nums++;
            } else if (nums !== numberCheck * numberCheck_2 && nums === nums * 1) {
            console.log(nums);
            nums++;
            }
        numberCheck_2--;
        }
    numberCheck --;
    }
    nums++
} */

/* 2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end

3. Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.) */

let sum = 1;
let num = 1;
while(num <= 20) {
    sum += num;
    num++;
}
console.log(sum);

let number_2 = 1;

while (number_2 < 21) {
    if (number_2%2 === 0) {
        console.log(number_2)
    }
    number_2++;
}