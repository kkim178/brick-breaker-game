import "./style.css";
import Block from "./model/block.js"

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const redBlock = new Block(20, 40, 50, 50, "#FF0000");
redBlock.draw(ctx);


let x = canvas.width / 2;
let y = canvas.height - 30;
const dx = 2;
const dy = -2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(x, y, 10, 10);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;

  window.requestAnimationFrame(draw);
}

//draw();