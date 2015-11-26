//
//  controlLogin.js
//
//  Created by Francesco Zanoli 
//  
//
function isLoggedIn()
{
	if (document.cookie.length > 0)
	{
		var start = document.cookie.indexOf("pss=");
		//Check if the user got some valid cookies
		if (start != -1)
		{
			start = start + 4;
			var end = document.cookie.indexOf(";",inizio);
			if (end == -1) fine = document.cookie.length;
			username=unescape(document.cookie.substring(start,end));
			
			start = document.cookie.indexOf("usn=");
			if (start != -1)
			{
			  start = inizio + 4;
			  var end = document.cookie.indexOf(";",start);
			  if (end == -1) end = document.cookie.length;
			  password=unescape(document.cookie.substring(start,end));
			  return Login(username,password);
			}
			else
				return false;
		}
		else
		   return false
  }
  return false
}			
			
function Login(username,password)
{
//ask to php page if the login it's ok or not
	var ret=false;
	$.ajax({
		async :false,
		type : "POST", 
		url : "./login.php", 
		dataType : "json", 
		data : { 
			username: username,
			isajax : true,    
			password : password 
		},
		success : function(data) { 
			var message = data.message;
			var error = data.error;
			var dati = data.donne;
			if(error) {
				ret=false;
			} else {
				ret=true;
			}
		}
	});
	return ret;
}

function Logout()
{
//delete cookies because if it's logged we write cookies to let the user log in
	document.cookie = 'pss=' + escape('') + '; expires=-1; path=/';
	document.cookie = 'usn=' + escape('') + '; expires=-1; path=/';
	document.location.href="login.html";
}

