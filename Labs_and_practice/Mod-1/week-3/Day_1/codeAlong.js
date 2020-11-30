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
console.log(favFood);
const newFood = favFood.map(value => {return value + ", mmmm, delicious."});
console.log(newFood);

const arr = [1, 2, 3];
console.log(...arr);
const secondArr = [...arr];
console.log(secondArr);
