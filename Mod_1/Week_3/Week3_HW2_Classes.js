/* OOP: Classes

Let's create shaped objects

Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
Write a function called circle_area that returns the area of the object. 
Write a function total_sides that returns the number of sides of the object.
Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
Write a function called rectangle_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object.
Define a new class called Square with appropriate attributes and instantiate a few Square objects.
Write a function called square_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object. */

class Circle {
    constructor(diameter = "please enter a number") {
        this.diameter = diameter,
        this.radius = diameter / 2,
        this.circumference = Math.PI * this.diameter;
        this.sides = "infinite"
    }
    circle_area() {
        console.log(Math.PI * Math.pow(this.radius, 2));
    }
    total_sides() {
        console.log(`Any circle has ${this.sides} sides`);
    }
}

const CIRCLE1 = new Circle(10);
const CIRCLE2 = new Circle(7);
const CIRCLE3 = new Circle(3);

CIRCLE1.circle_area();

class Rectangle {
    constructor(length = "please enter a number", width = "please enter a number") {
        this.length = length,
        this.width = width,
        this.sides = 4
    }
    rectangle_area() {
        console.log(this.length * this.width);
    }
    total_sides() {
        console.log(`All rectangles and squares have ${this.sides} sides`);
    }
}

const RECTANGLE1 = new Rectangle(4,5);
const RECTANGLE2 = new Rectangle(10,7);
const RECTANGLE3 = new Rectangle(8,13);

RECTANGLE2.rectangle_area();

class Square extends Rectangle {
    constructor(faces = "please enter a number") {
        super(faces, faces)
        this.faces = faces;
    }
    square_area() {
        this.rectangle_area();
    }
    square_sides() {
        this.total_sides();
    }
}

const SQUARE1 = new Square(4);
const SQUARE2 = new Square(8);
const SQUARE3 = new Square(5);

SQUARE3.square_area();
SQUARE1.square_sides();