const GREETING = document.getElementById("greeting");
const PARAGRAPHS = document.getElementsByClassName("paragraphs");
const ALERT_BUTTON = document.getElementById("alertButton");
const CHANGE_COLOR = document.getElementById("changeColor");

setTimeout(()=> GREETING.innerHTML = "And A Good Morning", 2000);

(function sizeChange(className) {
    for (let i = 0; i < className.length; i++) {
    className[i].style.fontSize = "2.5rem"; 
    console.log(className[i]);
    }
})(PARAGRAPHS)

function clickAlert() {
    window.alert("You pressed the button")
}
ALERT_BUTTON.onclick = clickAlert;



/* function openAndWrite() {
document.open();
document.write("<h1>New Message!</h1>")
document.close();
window.alert("You pressed the button!");
} */

function colorChange() {
    const COLORS = ["blue", "brown", "green", "red"];
    let current = Math.floor(Math.random() * 4);
    (function addColor(className) {
        for (let j = 0; j < className.length; j++) {
        className[j].style.color = COLORS[current]; 
        console.log(className[j]);
        }
    })(PARAGRAPHS);
}

CHANGE_COLOR.onclick = colorChange;

