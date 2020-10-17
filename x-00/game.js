var fps=60;



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function radians(degrees) {
	return degrees*Math.PI/180;
}



function draw() {

	fillRect(0,0,canvas.width,canvas.height,palette[0]);

}



function main() {
	document.body.style.backgroundColor="#000000";

	canvas.width=240;
	canvas.height=320;

	canvas.style.position="absolute";
	canvas.style.left=((window.innerWidth-canvas.width)/2)+"px";
	canvas.style.top=((window.innerHeight-canvas.height)/2)+"px";

	setInterval(draw,1000/fps);
}



main();
