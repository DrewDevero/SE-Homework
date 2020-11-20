const SHIELD = document.getElementById("shieldSection");
const POINTS = document.getElementsByClassName("points");

(function phase() {
        SHIELD.style.opacity = "1";
})();

function pointAnimation(point) { 
    point.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)
}

// sizeShift function - makes each word located around the shield(id="shield") re-size and change color, one at a time, in a clockwise sequence

(function sizeShift(time) {
for (let i = 0; i < POINTS.length; i++) {
    setTimeout(() => pointAnimation(POINTS[i]), time);
    setTimeout(() => {setInterval(() => pointAnimation(POINTS[i]), 10000)}, time);
    time += 2000;
    }
})(2000);