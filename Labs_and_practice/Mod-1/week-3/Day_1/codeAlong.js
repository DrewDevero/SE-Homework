const favFood = ["Pizza", "Donuts"];
console.log(favFood);
console.log(favFood.shift());
console.log(favFood.length);
favFood.push("Cookies", "Cake");
console.log(favFood);

favFood.forEach(food => {
    console.log(food);
})
favFood.forEach((food, index) => {
    console.log(food, index);
})
for (const element of favFood) {
    console.log(element);
}

const newFood = favFood.map(value => {value + " great"});
console.log(newFood);
