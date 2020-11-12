// This entire page is made as part of the Per Scholas, Software Engineering Course Pre-work.

const MAIN_HEADING = document.getElementById("mainHeading");
const TEXT_AREA = document.getElementById("textArea");
const INPUTS = document.getElementsByName("power");
const POWERS = document.getElementsByClassName("powers");

(function constantPhase() {
    setTimeout( () => MAIN_HEADING.style.opacity = "0", 500);
    setInterval( () => MAIN_HEADING.style.opacity = "1", 2000);
    setTimeout( () => setInterval( () => MAIN_HEADING.style.opacity = "0", 2000), 1000);
}
)();

function textAreaSize() {
    if(window.screen.width < 1200 && window.screen.width > 700 || document.body.clientWidth < 1200 && document.body.clientWidth > 700) {
        TEXT_AREA.attributes[2].value = "20";
    } else if (window.screen.width < 700 || document.body.clientWidth < 700) {
        TEXT_AREA.attributes[2].value = "10";
    } else {
        TEXT_AREA.attributes[2].value = "40";
    }
}
setInterval( () => textAreaSize(), 300);

(function powerColors() {
    INPUTS[0].addEventListener("mouseover", () => {POWERS[0].style.fontWeight = "bolder"; POWERS[0].style.color = "red";});
    INPUTS[0].addEventListener("mouseout", () => {POWERS[0].style.fontWeight = "initial"; POWERS[0].style.color = "initial";});
    INPUTS[1].addEventListener("mouseover", () => {POWERS[1].style.fontWeight = "bolder"; POWERS[1].style.color = "blue";});
    INPUTS[1].addEventListener("mouseout", () => {POWERS[1].style.fontWeight = "initial"; POWERS[1].style.color = "initial";});
    INPUTS[2].addEventListener("mouseover", () => {POWERS[2].style.fontWeight = "bolder"; POWERS[2].style.color = "lightgreen;"});
    INPUTS[2].addEventListener("mouseout", () => {POWERS[2].style.fontWeight = "initial"; POWERS[2].style.color = "initial";});
    INPUTS[3].addEventListener("mouseover", () => {POWERS[3].style.fontWeight = "bolder"; POWERS[3].style.color = "brown";});
    INPUTS[3].addEventListener("mouseout", () => {POWERS[3].style.fontWeight = "initial"; POWERS[3].style.color = "initial";});
    INPUTS[4].addEventListener("mouseover", () => {POWERS[4].style.fontWeight = "bolder"; POWERS[4].style.color = "white";});
    INPUTS[4].addEventListener("mouseout", () => {POWERS[4].style.fontWeight = "initial"; POWERS[4].style.color = "initial";});
    INPUTS[5].addEventListener("mouseover", () => POWERS[5].style.fontWeight = "bolder");
    INPUTS[5].addEventListener("mouseout", () => POWERS[5].style.fontWeight = "initial");
})();