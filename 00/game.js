var fps=60;



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function radians(degrees) {
	return degrees*Math.PI/180;
}



function draw() {

	fillRect(0,0,canvas.width,canvas.height,palette[0]);

	var size=32;
	for(var i=0;i<palette.length;i++) {
		var x=(i%4)*size;
		var y=Math.floor(i/4)*size+canvas.height-size*4;
		fillRect(x,y,size,size,palette[i]);
	}

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

