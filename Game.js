function reset(data){
	wid = data.length;
	hei = data[0].length;
	for (var i = 0; i < wid; i++){
		data[i] = new Array(hei);
		for (var j = 0; j < hei; j++){
			data[i][j] = 0;
		}
	}
	linesDeleted = 0;
	figuresReceived = 0;
}
