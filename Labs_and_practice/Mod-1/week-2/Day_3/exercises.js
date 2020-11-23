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

// partial test case below:
function bigestDenomChange(pay, price) {
denom_100 = 100.00;
denom_50 = 50.00;
denom_20 = 20.00;
denom_10 = 10.00;
denom_5 = 5.00;
denom_1 = 1.00;
const CHANGE = pay - price;
}