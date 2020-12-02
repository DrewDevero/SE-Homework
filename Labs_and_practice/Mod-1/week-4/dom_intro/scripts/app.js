// with native javascript
// document.onloaf(() => {
    //i grab information
    //from a server
//})
// with jQuery
// $( */whatever I want to have work on load /*)

console.log("Stranger things are coming");

const addH2 = () => {
    let $h2 = $('<h2>').text("Just getting started");
    $('body').append($h2);
}
const changeH2 = () => {
    $('h2').text("Getting warmed up");
}

$(() => {
    addH2();
    setTimeout(() => changeH2(), 1500);
});

// making a quilt
const randColorsRGB = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let opacity = Math.random() * 1.1;
    return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
}
const generateSquares = (numberOfSquares) => {
    for (let i = 1; i <= numberOfSquares; i++) {
        console.log(i);
        const $square = $('<div>').addClass('square');
        $square.css('background-color', randColorsRGB());
        setTimeout(() => $square.css('border-radius', "30px"), 5000);
        $square.text(i);
        $square.attr('id', 'square' + i);
        $('body').append($square);
    }
}

$(() => {
    generateSquares(1000);
})