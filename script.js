function validation(){

	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	var confirmpass = document.getElementById('conpass').value;
	var mobileNumber = document.getElementById('mobileNumber').value;
	var emails = document.getElementById('emails').value;





	if(user == ""){
		//document.getElementById('username').innerHTML =" ** Please fill the username field";
		//return false;

		alert('Please fill the username field');
document.getElementById('passwords');
document.getElementById('pass').style.borderColor = "red";
	}
	if((user.length <= 5) ) {
		document.getElementById('username').innerHTML =" ** Username lenght must atleast 5";
		return false;	
	}
	if(!isNaN(user)){
		document.getElementById('username').innerHTML =" ** only characters are allowed";
		return false;
	}







	if(pass == ""){
		alert('Please fill the password field');
		//document.getElementById('passwords').innerHTML =" ** Please fill the password field";
		document.getElementById('passwords');
document.getElementById('pass').style.borderColor = "red";
		return false;
	}
	if((pass.length < 5) || (pass.length > 20)) {
		
		
		
	
		
		alert('Password must be atlest 5');
document.getElementById('passwords');
document.getElementById('pass').style.borderColor = "red";
return false;
	}


	if(pass!=confirmpass){
		alert('Not Matched');
		document.getElementById('confrmpass')
		document.getElementById('confirmpass').style.borderColor = "red";
		return false;
	}



	if(confirmpass == ""){
		document.getElementById('confrmpass').innerHTML =" ** Please fill the confirm password field";
		return false;
	}








	if(emails == ""){
		document.getElementById('emailids').innerHTML =" ** Please fill the email idx` field";
		return false;
	}
	if(emails.indexOf('@') <= 0 ){
		document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
		return false;
	}

	if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
		document.getElementById('emailids').innerHTML =" ** . Invalid Position";
		return false;
	}
}


