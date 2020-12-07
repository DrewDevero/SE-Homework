/* When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack */

class CreateVendingMachine {
    constructor(name1 = "Snickers", price1 = "$2.00", name2 = "Baby Ruth", price2 = "$1.00", name3 = "Reese's Pieces", price3 = "$3.00") {
    this.snacks = [
        {
            name: name1,
            price: price1
        }, 
        {
            name: name2,
            price: price2
        },
        {
            name: name3,
            price: price3
        }
    ]
    }
    vend(snackPosition) {
        console.log(vendingMachine.snacks[snackPosition])
    }
}
vendingMachine = new CreateVendingMachine;
console.log(vendingMachine);
vendingMachine.vend(1);
vendingMachine.vend(2);
vendingMachine.vend(0);