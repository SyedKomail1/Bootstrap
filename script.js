$(function () {
    if( document.myForm.name.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.name.focus() ;
        return false;
     }
     if( document.myForm.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return false;
     }
     
     
     return( true );
  }
//-->
</script>
    
    $("#myForm").submit(handleFormSubmit);

  });
  
  function handleFormSubmit(e) {
    alert("Form is being submitted");
  
    e.preventDefault();
  }