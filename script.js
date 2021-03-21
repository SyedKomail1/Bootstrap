function validation() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var confirmpass = document.getElementById("confirmpass").value;
  var condition = true;
  var emails = document.getElementById("emails").value;
  var condition = true;

  if (user == "" && pass == "" && confirmpass == "" && emails == "") {
    //document.getElementById('username').innerHTML =" ** Please fill the username field";
    //return false;

    //alert("Please fill the username field");
    // alert("Please fill the password field");
    // alert("Please fill the confirm password field");
    // alert("Please fill the email field");

    document.getElementById("user").style.borderColor = "red";
    document.getElementById("pass").style.borderColor = "green";
    document.getElementById("confirmpass").style.borderColor = "red";
    document.getElementById("emails").style.borderColor = "red";
    document.getElementById("username-error").innerHTML =
      " ** Please fill the username field";
    document.getElementById("passwords-error").innerHTML =
      " ** Please fill the password field";
    document.getElementById("confrmpass-error").innerHTML =
      " ** Please fill confirm password field";
    document.getElementById("email-error").innerHTML =
      " ** Please fill the email idx` field";

    condition = false;
  }

  if (user == "" && user.length <= 5) {
    //document.getElementById('username').innerHTML =" ** Please fill the username field";
    //return false;

    //alert("Please fill the username field");
    document.getElementById("user").style.borderColor = "red";
    document.getElementById("username-error").innerHTML =
      " ** Username lenght must atleast 5";
    condition = false;
  } else {
    $("#username-error").hide();
    $("#user").css("border", "1px solid #ced4da");
  }

  if (pass == "" && pass.length < 8) {
    // alert("Please fill the password field");

    document.getElementById("pass").style.borderColor = "red";
    document.getElementById("passwords-error").innerHTML =
      " ** Password must be atlest 5";
    condition = false;
  } else {
    $("#passwords-error").hide();
    $("#pass").css("border", "1px solid #ced4da");
  }
  if (pass != confirmpass) {
    //alert("Password Not Matched");

    document.getElementById("confirmpass").style.borderColor = "red";
    document.getElementById("confrmpass-error").innerHTML =
      " ** Password Not Matched";
    //document.getElementById('confrmpass').style.borderColor = "red";
    condition = false;
  } else {
    //$("#confrmpass-error").hide();
    $("#confirmpass").css("border", "1px solid #ced4da");
  }

  if (confirmpass == "") {
    //alert("Password Not Matched");

    document.getElementById("confirmpass").style.borderColor = "red";
    document.getElementById("confrmpass-error").innerHTML =
      " ** Fill the Confirm password field";
    //document.getElementById('confrmpass').style.borderColor = "red";
    condition = false;
  } else {
    $("#confrmpass-error").hide();
    $("#confirmpass").css("border", "1px solid #ced4da");
  }

  if (emails == "") {
    document.getElementById("emails").style.borderColor = "red";
    document.getElementById("email-error").innerHTML =
      " ** Please fill the email idx` field";
    condition = false;
  } else {
    $("#email-error").hide();
    $("#emails").css("border", "1px solid #ced4da");
  }
  return condition;
}
// $("#Submit_form").click(function () {
//   if (condition == true) {
//     alert("form submited");
//   }
// });
