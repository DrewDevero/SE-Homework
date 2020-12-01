/* OOP - Inheritance 

Create a class called Fish 
Define a method Swim( )
Create a class Nemo that inherits from Fish
Define an attribute color
Create a Nemo object. Can it swim? 
Find the difference between abstract class and an interface
Which of the two can have implementation of a method in the class? */

class Fish {
    constructor(name, color) {
        this.name = name,
        this.color = color
    }
    swim() {
        console.log(`${this.name} can swim!`);
    }
}
const CARL = new Fish("Carl", "brown");
console.log(CARL);
CARL.swim();

class Nemo extends Fish {
    constructor(name, color) {
        super(name, color)
        this.name = name,
        this.color = color
    }
    canSwim() {
        this.swim();
    }
}

const NEMO = new Nemo("Nemo", "green");
console.log(NEMO);
NEMO.canSwim();