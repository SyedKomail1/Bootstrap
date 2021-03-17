function validation(){

	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	var confirmpass = document.getElementById('confirmpass').value;
	
	var emails = document.getElementById('emails').value;





	if(user == ""){
		//document.getElementById('username').innerHTML =" ** Please fill the username field";
		//return false;

		//alert('Please fill the username field');
		document.getElementById('user').style.borderColor = "red";
		document.getElementById('username-error').innerHTML =" ** Please fill the username field";
		return false;	
	}
	if((user.length <= 5)  ) {
		document.getElementById('username-error').innerHTML =" ** Username lenght must atleast 5";
		return false;	
	}
	if(!isNaN(user)){
		document.getElementById('username').innerHTML =" ** only characters are allowed";
		return false;
	}

	if(pass == ""){
		alert('Please fill the password field');
		//document.getElementById('passwords').innerHTML =" ** Please fill the password field";
		document.getElementById('pass').style.borderColor = "red";
		document.getElementById('passwords-error').innerHTML =" ** Please fill the password field";
		return false;
	}
	if((pass.length < 5) || (pass.length > 20)) {
		
		//alert('Password must be atlest 5');
		document.getElementById('pass').style.borderColor = "red";
		document.getElementById('passwords-error').innerHTML =" ** Password must be atlest 5";

		//document.getElementById('pass').style.borderColor = "red";
		return false;
	}


	if(pass!=confirmpass){
		alert('Password Not Matched');
		//issue
		//document.getElementById('confirmpass').style.borderColor = "red";
		document.getElementById('confrmpass-error').innerHTML =" ** Password Not Matched";
		//document.getElementById('confrmpass').style.borderColor = "red";
		return false;
	}



	if(confirmpass == ""){
		alert('Please fill the confirm password field');
		document.getElementById('confrmpass-error').innerHTML =" ** Please fill the confirm password field";
		return false;
	}


	if(emails == ""){
		document.getElementById('email-error').innerHTML =" ** Please fill the email idx` field";
		return false;
	}
	if(emails.indexOf('@') <= 0 ){
		document.getElementById('email-error').innerHTML =" ** @ Invalid Position";
		return false;
	}

	if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
		document.getElementById('email-error').innerHTML =" ** . Invalid Position";
		return false;
	}
	
}


