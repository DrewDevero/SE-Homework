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
    constructor(diameter) {
        this.diameter = diameter,
        this.radius = diameter / 2,
        this.circumference = Math.PI * this.diameter;
        this.sides = "infinite"
    }
    circle_area() {
        console.log(Math.PI * Math.pow(this.radius,2));
    }
    total_sides() {
        console.log(`Any circle has ${this.sides} sides`);
    }
}

const Circle1 = new Circle(10);
const Circle2 = new Circle(7);
const Circle3 = new Circle(3);

class Rectangle {
    constructor(length, width) {
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

const Rectangle1 = new Rectangle(4,5);
const Rectangle2 = new Rectangle(10,7);
const Rectangle3 = new Rectangle(8,13);

class Square extends Rectangle {
    constructor(faces) {
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

const square1 = new Square(4);
const square2 = new Square(8);
const square3 = new Square(5);

square3.square_area();