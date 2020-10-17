var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");



function drawPoint(x,y,color) {
	ctx.fillStyle=color;
	ctx.fillRect(x,y,1,1);
}

function drawLine(x0,y0,x1,y1,color) {
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.moveTo(x0,y0);
	ctx.lineTo(x1,y1);
	ctx.stroke();
	ctx.closePath();
}

function drawCircle(x,y,r,color) {
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}

function fillCircle(x,y,r,color) {
	ctx.beginPath();
	ctx.fillStyle=color;
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
}

function drawRect(x,y,w,h,color) {
	ctx.strokeStyle=color;
	ctx.strokeRect(x,y,w,h);
}

function fillRect(x,y,w,h,color) {
	ctx.fillStyle=color;
	ctx.fillRect(x,y,w,h);
}

function drawText(text,x,y,color) {
	ctx.fillStyle=color;
	ctx.fillText(text,x,y);
}

function setFont(font) {
	ctx.font=font;
}

function setTextAlign(align) {
	ctx.textAlign=align;
}

function setTextBaseline(align) {
	ctx.textBaseline=align;
}

