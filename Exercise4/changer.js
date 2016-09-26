update = function(){
	var bdR = document.getElementById('bdR').value;
	var bdG = document.getElementById('bdG').value;
	var bdB = document.getElementById('bdB').value;
	var bdW = document.getElementById('bdW').value;
	var bgR = document.getElementById('bgR').value;
	var bgG = document.getElementById('bgG').value;
	var bgB = document.getElementById('bgB').value;

	var p = document.getElementById('p');
	p.style.background = 'rgb(' + bgR + ',' + bgG + ',' + bgB + ')';
	p.style.borderColor = 'rgb(' + bdR + ',' + bdG + ',' + bdB + ')';
	p.style.borderWidth = bdW + 'px';
}
