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
		var inizio = document.cookie.indexOf("pss=");
		if (inizio != -1)
		{
			inizio = inizio + 4;
			var fine = document.cookie.indexOf(";",inizio);
			if (fine == -1) fine = document.cookie.length;
			username=unescape(document.cookie.substring(inizio,fine));
			
			inizio = document.cookie.indexOf("usn=");
			if (inizio != -1)
			{
			  inizio = inizio + 4;
			  var fine = document.cookie.indexOf(";",inizio);
			  if (fine == -1) fine = document.cookie.length;
			  password=unescape(document.cookie.substring(inizio,fine));
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
	document.cookie = 'pss=' + escape('') + '; expires=-1; path=/';
	document.cookie = 'usn=' + escape('') + '; expires=-1; path=/';
	document.location.href="login.html";
}

