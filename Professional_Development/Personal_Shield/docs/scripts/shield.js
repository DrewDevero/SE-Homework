const SHIELD = document.getElementById("shieldSection");
const POINT1 = document.getElementById("pointOne");
const POINT2 = document.getElementById("pointTwo");
const POINT3 = document.getElementById("pointThree");
const POINT4 = document.getElementById("pointFour");
const POINT5 = document.getElementById("pointFive");

(function phase() {
        SHIELD.style.opacity = "1";
})();

// sizeShift function - makes each word located around the shield polygon re-size and change color, one at a time, in a clockwise sequence

(function sizeShift() {
    setTimeout(() => {POINT1.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 2000);
    setTimeout(() => {POINT2.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 4000);
    setTimeout(() => {POINT3.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 6000);
    setTimeout(() => {POINT4.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 8000);
    setTimeout(() => {POINT5.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 10000);
    setTimeout(() => {setInterval(() => {POINT1.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 10000)}, 2000);
    setTimeout(() => {setInterval(() => {POINT2.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 10000)}, 4000);
    setTimeout(() => {setInterval(() => {POINT3.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 10000)}, 6000);
    setTimeout(() => {setInterval(() => {POINT4.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 10000)}, 8000);
    setTimeout(() => {setInterval(() => {POINT5.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)}, 10000)}, 10000);
})();