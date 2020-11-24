function addThreeNumbers(firstNumberToAdd, secondNumberToAdd, thirdNumberToAdd) {
    const SUM = firstNumberToAdd + secondNumberToAdd + thirdNumberToAdd;
    console.log(SUM);
}
addThreeNumbers(3, 2, 5);

const ADD_THEN_DIVIDE = (firstNumberToAdd, secondNumberToAdd, thirdNumberToAdd) => {
    const DIVIDED_SUM = (firstNumberToAdd + secondNumberToAdd + thirdNumberToAdd) / 3
    console.log(DIVIDED_SUM);
}
ADD_THEN_DIVIDE(1, 5, 9);

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
console.log(getChange(2000, 200));

//Nando purchase $27.83. Paid with $100. Change given to Nando in largest possible denominations.

// everything is a loop 
// we use a while loop because we want to continue the process
// should takin in params for payment and price to make it scalable for different denominations

// partial test case below:
function bigestDenomChange(payment, price) {
// Keep track of the folllowing
// how many bills we're receiving
// remember denominations
// find difference and keep track of it
// keep track of which bills we're giving as change
    if (isNaN(payment) || isNaN(price)) {
        console.log(`Entered ${payment} and ${price}. Please enter numbers in 00.00 format for pay and price`);
    } else {
let change = payment - price;
let changeDue = 0;
let hundredReceived = 0;
let fiftyReceived = 0;
let twentyReceived = 0;
let tenReceived = 0;
let fiveReceived = 0;
let oneReceived = 0;
let quarterReceived = 0;
let dimeReceived = 0;
let nickleReceived = 0;
let pennieReceived = 0;
const denom_100 = 100.00;
const denom_50 = 50.00;
const denom_20 = 20.00;
const denom_10 = 10.00;
const denom_5 = 5.00;
const denom_1 = 1.00;
const quarter = 0.25;
const dime = 0.10;
const nickle = 0.05;
const pennie = 0.01;

        while (change > 0) {
            if(change >= denom_100) {
                change -= denom_100;
                hundredReceived ++; 
            } else if (change >= denom_50) {
                change -= denom_50;
                fiftyReceived ++;
            } else if (change >= denom_20) {
                change -= denom_20;
                twentyReceived ++;
            } else if (change >= denom_10) {
                change -= denom_10;
                tenReceived ++;
            } else if (change >= denom_5) {
                change -= denom_5;
                fiveReceived ++;
            } else if (change >= denom_1) {
                change -= denom_1;
                oneReceived ++;
            } else if (change >= quarter) {
                change -= quarter;
                quarterReceived ++;
            } else if (change >= dime) {
                change -= dime;
                dimeReceived ++;
            } else if (change >= nickle) {
                change -= nickle;
                nickleReceived ++;
            } else if (change >= pennie) {
                change -= pennie;
                pennieReceived ++;
            }
            changeDue = [`${hundredReceived} hundreds`, `${fiftyReceived} fifties`, `${twentyReceived} twenties`, `${tenReceived} tens`, `${fiveReceived} fives`, `${oneReceived} ones`, `${quarterReceived} quarters`, `${dimeReceived} dimes`, `${nickleReceived} nickles`, `${pennieReceived} pennies`]
        }
        return changeDue;
    } 
}
console.log(bigestDenomChange(100, 27.83));