'use strict'


let canvas;
let context;
let sirina;

window.addEventListener("resize", handleResize);
//window.addEventListener("keydown", tastatura);

if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", deviceOrientationListener);
      } else {
        alert("Sorry, your browser doesn't support Device Orientation");
      }

let ball = {position: {x: 20, y: 100},
            color: 'pink',};
canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
makeCanvas();
function makeCanvas() {
  context.fillStyle = 'black';
  sirina = window.innerWidth - 30;
  console.log(window.innerWidth);
  console.log(sirina);
  context.clearRect(10, 10, 1039, 640);
  context.fillRect(10, 10, sirina, sirina/3-10);

  makingBall();
}

function handleResize() {
  makeCanvas();
}

function tastatura() {
  if (event.keyCode == 39) {
   ball.position.x += 3;
   makeCanvas();
  }
  if (event.keyCode == 37) {
   ball.position.x -= 3;
   makeCanvas();
  }
  if (event.keyCode == 38) {
   ball.position.y -= 3;
   makeCanvas();
  }
  if (event.keyCode == 40) {
   ball.position.y += 3;
   makeCanvas();
  }

}

function deviceOrientationListener(event) {
  if (event.beta > 5 ) {
    ball.position.x += 2;
    makeCanvas();
  }
  if (event.beta < -5 ) {
    ball.position.x -= 2;
    makeCanvas();
  }
  if (event.gamma > 5 ) {
    ball.position.y -= 2;
    makeCanvas();
  }
  if (event.gamma < -5 ) {
    ball.position.y += 2;
    makeCanvas();
  }


}

function makingBall() {
  context.beginPath();
  context.fillStyle = ball.color;
  context.arc(ball.position.x, ball.position.y, sirina/200, 0, 10 * Math.PI);
  context.fill();
  context.fillStyle = "black"
}
