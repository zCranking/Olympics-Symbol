canvas = document.getElementById("MyCanvas");
ctx =  canvas.getContext("2d");
color1 = "cornflowerblue"; 
color2 = "yellow";
color3 = "black";
color4 = "green";
color5 = "crimson";

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = 20;
ctx.arc(250, 200, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 20;
ctx.arc(500, 200, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = 20;
ctx.arc(750, 200, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 20;
ctx.arc(380, 280, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 20;
ctx.arc(630, 280, 100, 0, 2*Math.PI);
ctx.stroke();
