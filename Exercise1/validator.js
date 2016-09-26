validate = function(){
	var pass1 = document.getElementById("password1").value;
	var pass2 = document.getElementById("password2").value;
	if(pass1==pass2){
		if(pass1.length>=8){
			alert('You have valid matching passwords!');
		}else{
			alert('Your password must be at least 8 characters long.');
		}
	}else{
		alert('Your passwords do not match.');
	}
}
