// This entire page is made as part of the Per Scholas, Software Engineering Course Pre-work. This is my javascript library when running on the server side with Node.js for the profile project.

let mainHeading = document.getElementById("mainHeading");
let textArea = document.getElementById("textArea");

function constantPhase() {
    setTimeout( () => mainHeading.style.opacity = "0", 500);
    setInterval( () => mainHeading.style.opacity = "1", 2000);
    setTimeout( () => setInterval( () => mainHeading.style.opacity = "0", 2000), 1000);
}

function textAreaSize() {
    if(window.screen.width < 1200 && window.screen.width > 700 || document.body.clientWidth < 1200 && document.body.clientWidth > 700) {
        textArea.attributes[2].value = "20";
    } else if (window.screen.width < 700 || document.body.clientWidth < 700) {
        textArea.attributes[2].value = "10";
    } else {
        textArea.attributes[2].value = "40";
    }
}
const TEXT_AREA_SIZE = setInterval( () => textAreaSize(), 300);

module.exports = {
    constantPhase,
    TEXT_AREA_SIZE
}

// For server side running with Node.js delete all code within moreAboutMe.js and replace with the following from preWorkLibrary.js library:

    /* const {constantPhase} = require("./preWorkLibrary.js");

    constantPhase(); */

// For server side running with Node.js delete all code within index.js and replace with the following from preWorkLibrary.js library:

    /* const {constantPhase, TEXT_AREA_SIZE} = require("./preWorkLibrary.js");

    constantPhase();
    TEXT_AREA_SIZE; */