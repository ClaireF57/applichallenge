$(document).ready(
	function() 
	{
		$('#resultat').hide()
		if (isLoggedIn())
			document.location.href="index.html";
		else
			$("#form").submit(function() {
				var password = md5($("input[name='password']").val());
				var username=md5($("input[name='username']").val());
				if (Login(username,password))
				{	
					var scadenza = new Date();
					var adesso = new Date();
					scadenza.setTime(adesso.getTime() + (120 * 60000));
					document.cookie = 'pss=' + escape(username) + '; expires=' + scadenza.toGMTString() + '; path=/';
					document.cookie = 'usn=' + escape(password) + '; expires=' + scadenza.toGMTString() + '; path=/';
					document.location.href="index.html";
				}
				else
				{
					$('#resultat').html('Login Incorrect');
					$('#resultat').show();
					}
			});
	});