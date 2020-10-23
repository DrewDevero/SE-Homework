// This entire page is made as part of the Per Scholas, Software Engineering Course Pre-work.

const MAIN_HEADING = document.getElementById("mainHeading");
const TEXT_AREA = document.getElementById("textArea");

function constantPhase() {
    setTimeout( () => MAIN_HEADING.style.opacity = "0", 500);
    setInterval( () => MAIN_HEADING.style.opacity = "1", 2000);
    setTimeout( () => setInterval( () => MAIN_HEADING.style.opacity = "0", 2000), 1000);
}
constantPhase();

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