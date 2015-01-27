var c = document.getElementById('c'),
	ctx = c.getContext('2d');	

var width = 10, height = 10;
	
var diameter = 20,
	canvasWidth = width*diameter,
	canvasHeight = height*diameter;

c.width = canvasWidth;
c.height = canvasHeight;
	
function drawCircle(x, y, r, color) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawRectangle(x1, y1, dx, dy) {
	ctx.beginPath();
	ctx.fillStyle="#FF00ff";
	ctx.fillRect(x1, y1, dx, dy);
	ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}
	
function clear() {
	ctx.fillStyle = '#ffffff';
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.rect(0, 0, c.width, c.height);
	ctx.closePath();
	ctx.fill();
}
