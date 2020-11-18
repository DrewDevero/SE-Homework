const SHIELD = document.getElementById("shieldSection");
const POINTS = document.getElementsByClassName("points");

/* (function pointAnimation(points) {
for (let i = 0; i < POINTS.length; i++) {
    let time = 2000;
    setTimeout(() => points[i].animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000), time);
    setTimeout(() => {setInterval(() => points[i].animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000), 10000)}, time);
    time++;
}
})(POINTS); */

(function phase() {
        SHIELD.style.opacity = "1";
})();

// sizeShift function - makes each word located around the shield polygon re-size and change color, one at a time, in a clockwise sequence
function pointAnimation(point) { 
    point.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)
}
(function sizeShift() {
    setTimeout(() => pointAnimation(POINTS[0]), 2000);
    setTimeout(() => pointAnimation(POINTS[1]), 4000);
    setTimeout(() => pointAnimation(POINTS[2]), 6000);
    setTimeout(() => pointAnimation(POINTS[3]), 8000);
    setTimeout(() => pointAnimation(POINTS[4]), 10000);
    setTimeout(() => {setInterval(() => pointAnimation(POINTS[0]), 10000)}, 2000);
    setTimeout(() => {setInterval(() => pointAnimation(POINTS[1]), 10000)}, 4000);
    setTimeout(() => {setInterval(() => pointAnimation(POINTS[2]), 10000)}, 6000);
    setTimeout(() => {setInterval(() => pointAnimation(POINTS[3]), 10000)}, 8000);
    setTimeout(() => {setInterval(() => pointAnimation(POINTS[4]), 10000)}, 10000);
})();