// Work done through Khan Academy and screenshots of completed assignments sent trhough canvas. The following is test work. Thus, println has no output here. Use console.log instead or make println recognizable using node.js.

var temperature = 89;
// temperature = 72;
// temperature = 50;

var hotStuff = temperature > 80;
var warm = temperature < 80 && temperature > 60;
if (hotStuff) {
    /* println("Heck it's hot!");
    println("Summer time much?");
    println("Get the beach going?"); */
    console.log("Heck it's hot!");
    console.log("Summer time much?");
    console.log("Get the beach going?");
} else if (warm) {
   /*  println("we're in perfect weather now.");
    println("nice and warm."); */
    console.log("we're in perfect weather now.");
    console.log("nice and warm.");
} else {
    /* println("It's getting cooler.");
    println("Time for Autumn?"); */
    console.log("It's getting cooler.");
    console.log("Time for Autumn?");
}   

function rangeRandomNumber(a, b) {
    const RANGE = (b - a) + 1;
    return Math.floor(Math.random() * RANGE) + a;
}
console.log(rangeRandomNumber(2, 8));
console.log(rangeRandomNumber(2, 8));
console.log(rangeRandomNumber(2, 8));
console.log(rangeRandomNumber(2, 8));