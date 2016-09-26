slideNum = 0;

next = function(){
	if(slideNum==4){
		slideNum=0;
	}else{
		slideNum++;
	}
	var slide = document.getElementById('slide');
	slide.src = slideNum+'.jpg';
}

previous = function(){
	if(slideNum==0){
		slideNum=4;
	}else{
		slideNum--;
	}
	var slide = document.getElementById('slide');
	slide.src = slideNum+'.jpg';
}
