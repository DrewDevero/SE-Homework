/* When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack */

let vendingMachine = {
    snacks: [
        Snack1 = {
            name: "Snickers",
            price: "$2.00"
        }, 
        Snack2 = {
            name: "Baby Ruth",
            price: "$1.00"
        },
        Snack3 = {
            name: "Reese's Pieces",
            price: "$3.00"
        }
    ],
    vend: (snackPosition) => console.log(vendingMachine.snacks[snackPosition])
}
console.log(vendingMachine);
vendingMachine.vend(1);
vendingMachine.vend(2);
vendingMachine.vend(0);