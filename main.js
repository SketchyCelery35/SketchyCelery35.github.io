let seconds = 0;
setInterval(() => {
    seconds++;
    document.getElementById("t").innerHTML = "Time spent watching the :O\n"+seconds
}, 1000)

setInterval(() => {
    if (seconds == 60) {
        document.getElementById("t").style.color="rgb(255, 0, 0)";
    }
    if (seconds == 240) {
        document.getElementById("t").style.color="rgb(255, 157, 0)";
    }
    if (seconds == 420) {
        document.getElementById("t").style.color="rgb(162, 255, 0)";
    }
    if (seconds == 600) {
        document.getElementById("t").style.color="rgb(162, 255, 0)";
    }
    if (seconds == 780) {
        document.getElementById("t").style.color="rgb(0, 255, 132)";
    }
    if (seconds == 960) {
        document.getElementById("t").style.color="rgb(0, 132, 255)";
    }
    if (seconds == 1140) {
        document.getElementById("t").style.color="rgb(179, 0, 255)";
    }
})