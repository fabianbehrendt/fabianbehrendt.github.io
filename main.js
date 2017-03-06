/**
 * Created by Fabian Behrendt on 06.03.2017.
 */

var canvas;
var ctx;
var rect;

var button30;
var button60;

var loop;

var width;
var height;

var posX;
var speed;

window.onload = function () {

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    rect = canvas.getBoundingClientRect();

    button30 = document.getElementById("30fps");
    button60 = document.getElementById("60fps");

    width = 50;
    height = 50;

    posX = 0;
    speed = 1;

    init();
};

function init() {
    canvas.style.borderColor = "#000000";
    canvas.style.borderWidth = "1px";
    canvas.style.borderStyle = "solid";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    button30.addEventListener("click", click30);
    button60.addEventListener("click", click60);
}

function click30() {
    clearInterval(loop);
    loop = setInterval(render, 1000 / 30, 2);
}

function click60() {
    clearInterval(loop);
    loop = setInterval(render, 1000 / 60, 1);
}

function render(fps) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(posX, canvas.height / 2 - height / 2, width, height);

    posX += 5 * speed * fps;

    if (posX >= canvas.width - width || posX <= 0) {
        speed *= -1;
    }
}