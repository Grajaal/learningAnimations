function changeColorCircle(){
    circle.style.background = "red";
}

function displacementCircle(){  
    pos += 1;

    circle.style.left = pos+"px";
    if(circle.style.left == "400px") clearInterval(intervalo);
}

function interval(){
    intervalo = setInterval(displacementCircle, 5);
}

function restartCircle(){
    circle.style.left = "8px";
    pos = 8;
}

let pos = 8, intervalo;

const circle = document.getElementById("circle");
const button = document.getElementById("button");
const restart = document.getElementById("restart");

button.addEventListener("click", changeColorCircle);
button.addEventListener("click", interval);
restart.addEventListener("click", restartCircle);
