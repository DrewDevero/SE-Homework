const GREETING = document.getElementById("greeting");
const PARAGRAPHS = document.getElementsByClassName("paragraphs");
const ALERT_BUTTON = document.getElementById("alertButton");
const CHANGE_COLOR = document.getElementById("changeColor");
const CHANGE_IMAGE = document.getElementById("changeImage");
const IMAGE = document.getElementById("image");
const HEADING_BUTTON = document.getElementById("changeHeadings");
const HEADING_2 = document.getElementsByClassName("heading_2");
const HEADING_DISPLAY = document.getElementById("changeHeadingDisplay");
const HEADING_3 = document.getElementsByClassName("heading_3");


setTimeout(()=> GREETING.innerHTML = "And A Good Morning", 2000);

(function sizeChange(className) {
    setTimeout(() => {
        for (let i = 0; i < className.length; i++) {
    className[i].style.fontSize = "2.5rem"; 
    console.log(className[i]);
    }}, 2000);
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

function changeImage() {
    const IMAGE_SRC = ["pexels-lukas-296234.jpg", "pexels-sanaan-mazhar-3052361.jpg"]
    let current = Math.floor(Math.random() * IMAGE_SRC.length);
    IMAGE.src = IMAGE_SRC[current];
}

CHANGE_IMAGE.onclick = changeImage;

(function makePTags() {
    const pTags = document.querySelectorAll("#second > p")
    pTags[0].style.color = "green";
    pTags[1].style.color = "purple";
    pTags[2].style.color = "grey";
})()

HEADING_BUTTON.onclick = changeHeading;

let upperCase = false;

function changeHeading() {
    if(upperCase === false) {
        for(let i = 0; i < HEADING_2.length; i++) {
        HEADING_2[i].style.textTransform = "uppercase";
        }
    return upperCase = true;
    } else {
        for(let i = 0; i < HEADING_2.length; i++) {
        HEADING_2[i].style.textTransform = "capitalize";
        }
    return upperCase = false;
    }
}

/* 
function changeDisplay() {
    HEADING_3[0].style.display = "inline-block";
    HEADING_3[1].style.display = "none";
    HEADING_3[2].style.fontSize = "3rem";

HEADING_DISPLAY.onclick = changeDisplay;
} */

HEADING_DISPLAY.onclick = () => {
    HEADING_3[0].style.display = "inline-block";
    HEADING_3[1].style.display = "none";
    HEADING_3[2].style.fontSize = "3rem";
};