/* Create an Animal class. 
The class will have name, age, color, legs, superPower attributes
Create two objects of this class - both with a unique superPower
create three methods for this class - include one method named userSuperPower()
Create two objects for this class */

class Animal {
    constructor(name, age, color, legs, superPower) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.superPower = superPower;
    }
    giveColor() {
        console.log(`${this.name}'s color is ${this.color}.`);
    }
    giveLegs() {
        console.log(`${this.name} has ${this.legs} legs.`);
    }
    useSuperPower() {
        console.log(`${this.name} uses its ${this.superPower} based super powers.`);
    }
}
const fireBreaker = new Animal("Fire Breaker", 23, "red", 6, "Fire");
const waterWader = new Animal("Water Wader", 34, "blue", 8, "water");

console.log(fireBreaker);
console.log(waterWader);
fireBreaker.giveLegs();
waterWader.useSuperPower();

/* Create a class name User
This class with have firstName, lastName, department attributes 
a method name changeDepartment()
Create three instances of this class
Change department for two of the instances
Create three objects for this class */

class User {
    constructor(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    changeDepartment(department) {
        return this.department = department;
    }
}

const user1 = new User("Buddy", "Solo", "Finance");
const user2 = new User("Sheryl", "Suzekie", "Logistics");
const user3 = new User("Carol", "Corgesky", "Analytics");
console.log(user1, user2, user3);
user2.changeDepartment("Finance");
user3.changeDepartment("Finance");
console.log(user1, user2, user3);