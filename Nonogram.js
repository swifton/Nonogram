function draw() {
	for (i = 0; i < width; i++) {
		for (j = 0; j < height; j++) {
			x = (i + 1/2) * diameter;
			y = (j + 1/2) * diameter;
			if (field[i][j] == 0) { drawCircle(x, y, diameter/2 - 1, "white"); }
			if (field[i][j] == 1) { drawCircle(x, y, diameter/2 - 1, "black"); }
			if (field[i][j] == 2) { drawCircle(x, y, diameter/2 - 1, "red"); }
		}
	}
}

function drawNonogram() {
	c.width = width*diameter + maxSize(nonH)*diameter;
	c.height = height*diameter + maxSize(nonW)*diameter;
	for (i = 0; i < width; i++) {
		for (j = 0; j < nonW[i].length; j++) {
			print(String(nonW[i][j]), i*diameter, (height + j + 1)*diameter + 2)
		}
	}
	for (i = 0; i < height; i++) {
		for (j = 0; j < nonH[i].length; j++) {
			print(String(nonH[i][j]), (width + j)*diameter, (i + 1)*diameter + 2)
		}
	}
	
}

function drawGrid() {
	p = maxSize(nonW);
	s = maxSize(nonH);
	for (i = 0; i <= width + s; i++) {
		drawLine(i*diameter, 0, i*diameter, (height + p)*diameter);
	}
	for (i = 0; i <= height + p; i++) {
		drawLine(0,i*diameter, (width + s)*diameter, i*diameter);
	}
}

function print(text, x, y) {
	ctx.fillStyle = '#000000';
	ctx.font = 'bold 20px sans-serif';
	ctx.textBaseline = 'bottom';
	ctx.fillText(text, x, y);
}

function maxSize(arr) {
	ans = 0;
	for (i = 0; i < arr.length; i++) { if (ans < arr[i].length) { ans = arr[i].length; } }
	return ans;
}

function mouse(x, y, button) {
	i = Math.floor(x/diameter);
	j = Math.floor(y/diameter);
	b = button/2 + 1;
	if (field[i][j] == b) {field[i][j] = 0; }
	else {field[i][j] = b;}
	draw();
}

function genNonogram() {
	for (i = 0; i < width; i++) {
		a = 0;
		nonW[i] = new Array;
		for (j = 0; j < height; j++) {
			if (answer[i][j] == 0 && a != 0) { 
				nonW[i].push(a); 
				a = 0;
			}
			if (answer[i][j] == 1) {a += 1;}
		}
		if (a != 0) {nonW[i].push(a);}
	}
	
	for (i = 0; i < height; i++) {
		a = 0;
		nonH[i] = new Array;
		for (j = 0; j < width; j++) {	
			if (answer[j][i] == 0 && a != 0) { 
				nonH[i].push(a); 
				a = 0;
			}
			if (answer[j][i] == 1) {a += 1;}
		}
		if (a != 0) {nonH[i].push(a); }
	}
}

function genAnswer() {
	for (i = 0; i < width; i++) {
		for (j = 0; j < height; j++) {
			answer[i][j] = Math.floor(Math.random()*2);
		}
	}
}

c.addEventListener('mousedown', clickReporter, false);

var field = new Array(width);
field[0] = new Array(height);
var answer = new Array(width);
answer[0] = new Array(height);
reset(field);
reset(answer);

var nonW = new Array(width);
var nonH = new Array(height);

genAnswer();
genNonogram();
drawNonogram();
drawGrid();
//field = answer;