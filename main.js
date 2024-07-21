let seconds = 0;
let count = 0;
var face = [
    ":O",
    ">:O",
    ":D",
    ":)",
    ":]",
    "(ง •_•)ง",
    "(⓿_⓿)",
    "(●'◡'●)",
    "┏ (゜ω゜)=👉",
    "༼ つ ◕_◕ ༽つ",
    "(⊙ˍ⊙)",
    "=]",
    "✍️(◔◡◔)",
    "(👉ﾟヮﾟ)👉",
    "(•_•)",
    "(⌐■_■)",
    "( •_•)>⌐■-■",
    ":[",
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "d=====(￣▽￣*)b",
    "(°ロ°)"
]
let num3 = Math.floor(Math.random()*face.length)

setInterval(() => {
    seconds++;
    document.getElementById("t").innerHTML = "Time spent watching the " + face[num3] + "\n"+seconds;
    document.getElementById("face").innerHTML = face[num3]
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

var image = [
    "images/aol-guy-dancing-aol.gif",
    "images/forg.jpg",
    "images/angy.jpg",
    "images/Been.jpg",
    "images/big floppa.png",
    "images/capisaur.jpg",
    "images/jumpscare.jpg",
    "images/ao-oni-dance.gif"
]

function changeImage() {
    let num = Math.floor(Math.random() * image.length);
    document.getElementById("images").src=image[num];
    count++;
    document.getElementById("imageCount").innerHTML="- " + count + " -";
    APPEAR()
}


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 73) {
        APPEAR();
    }
});

function APPEAR() {
    document.getElementById("images").style.opacity="1.0";
    document.getElementById("imageCount").style.opacity="1.0";
}