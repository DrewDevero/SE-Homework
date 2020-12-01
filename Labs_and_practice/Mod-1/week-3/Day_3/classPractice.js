class Person {
    constructor(name, age) {
        if(typeof name !== "string") {
            throw new Error("You didn't provide a string");
        }
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    greetPeople() {
        console.log(`Hello, I am ${this.name}.`);
    }
    setName(name) {
        this.name = name;
    }
}

const DREW = new Person("Drew", 29);
const ANGEL = new Person("Angel", 22);
/* const TESTERROR = new Person(45, 34); */
console.log(DREW);
console.log(ANGEL);
console.log(DREW.getName());
DREW.greetPeople();
DREW.setName("Alston");
console.log(DREW.name); 

// Person (parent, super) -> Superhero (child)
class Superhero extends Person {
    constructor(name, age, superpower) {
        super(name, age, superpower)
        this.superpower = superpower;
    }
    describePower() {
        console.log(`my superpower is ${this.superpower}`);
    }
}

const spidey = new Superhero("Miles Morales", 16, "web swing");
spidey.greetPeople();
spidey.describePower();

class SayHello {
    hello() {
        console.log("Hello");
    }
}
const HELLO = new SayHello;
HELLO.hello();

class Dog {
    constructor(name, age = 6, color, breed) {
        this.name = name;
        this.age = `${age} months`;
        this.color = color;
        this.breed = breed;
    }
    running() {
        console.log(`${this.name} is running`);
    }
    singing() {
        console.log(`${this.name} is singing`);
    }
    barking() {
        console.log(`${this.name} is running`);
    }
    eating() {
        console.log(`${this.name} is running`);
    }
}

const WOOFIE = new Dog("Woofie", 15, "brown", "Tamaranean");
const BARKIE = new Dog("Barkie", 5, "black", "Corgi");
const SNARKIE = new Dog("Snarkie", undefined,"green", "Pomeranian")
console.log(WOOFIE.name, WOOFIE.color,'\n',BARKIE.name, BARKIE.color,'\n',SNARKIE.name, SNARKIE.age);
WOOFIE.running();
BARKIE.singing();
SNARKIE.eating();