// This entire page is made as part of the Per Scholas, Software Engineering Course Pre-work.

const MAIN_HEADING = document.getElementById("mainHeading");

function constantPhase() {
    setTimeout( () => MAIN_HEADING.style.opacity = "0", 500);
    setInterval( () => MAIN_HEADING.style.opacity = "1", 2000);
    setTimeout( () => setInterval( () => MAIN_HEADING.style.opacity = "0", 2000), 1000);
}
constantPhase();