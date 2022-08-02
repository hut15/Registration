
// Validation of fields on registration form
function validateForm()
{
	//FirstName Validation
	var firstname= document.forms["myForm"]["fname"].value;
	var RegXfname = /^[A-Za-z]+$/;
	
	//LastName Validation
	var lastname= document.forms["myForm"]["lname"].value;
	var RegXlname = /^[A-Za-z]+$/;
	
	
	//Email Validation
	var emailadd= document.forms["myForm"]["email"].value;
	var RegXemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	//Phone Validation
	var phone=document.forms["myForm"]["phonenum"].value;
	var RegXphone=/\d{8}/;
	
	//Country Validation
	   var s1 = document.getElementById("country").value;
	   
	   //Password Validation
       var passwd = document.getElementById("pwd").value;
	  	   //Confirm Validation
       var cpasswd = document.getElementById("cpwd").value;
	  
	  if(firstname=='' || lastname=='')
         {
             alert('Fields cannot be blank');
			 return false;
         }
         else if(!RegXfname.test(firstname) || !RegXlname.test(lastname))
          {
             alert('Name should contains only characters');
			 return false;
         }
		 else if(emailadd== ''){
		alert('Email invalid');
			 return false;
	}
	
	else if (!RegXemail.test(emailadd)){
		alert('Email invalid format');
			 return false;
	}
	 else if(phone== ''){
		alert('Phone cannot be blank');
			 return false;
	}
	else if (!RegXphone.test(phone)){
		alert('phone invalid format');
			 return false;
	}  
	else if (s1== "select country") {
            alert("Please select a Country");
			 return false;
        }else if (passwd !== cpasswd) {
            alert("Password do not match");
			 return false;
        }
	
	else if(RegXfname.test(firstname) && RegXfname.test(firstname) && RegXfname.test(emailadd) && RegXfname.test(phone)){
	
	return true;
	}
	
 
}



