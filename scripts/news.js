$(function() 
{
	afficherLesNews(); 
});

function afficherLesNews()
{
	newsEnHTML='<ul data-role="listview">';
	listData=SelectNews();
	//trier toutes les news dans l'ordre de date de début
	var swapped;
	do 
	{
		swapped = false;
		for (var i=0; i < listData.length-1; i++)
		{
			if (listData[i].debut < listData[i+1].debut) 
			{
				var temp = listData[i];
				listData[i] = listData[i+1];
				listData[i+1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	
	//récuperer la date, l'heure et les minutes d'aujourd'hui
	var d = new Date();
	day=d.getDay();
	hour=d.getHours();
	min=d.getMinutes();
	var codeMaintenant = 0;
	
	//création de la variable codeMaintenant, qui contient toutes les infos sur le moment présent: jour,heure,minute
	if(day==5){
		codeMaintenant+=10000;
	}
	else if(day==6){
		codeMaintenant+=20000;
	}
	else if(day==0){
		codeMaintenant+=30000;
	}
	
	codeMaintenant+=hour*100;
	codeMaintenant+=min;
	
	//stockage des news dans la variable listeDesNews, sous forme d'HTML
	
	var affichageDateNews='';
	var jourNews
	var minutesNews = 0;
	var heureNews = 0;

	
	var auMoinsUneNews = 0;
	if (listData.length!=0)
	{
		// on affche les 100 premières news
		for (var i=0;i<listData.length&&i<100;i+=1)
		{
			//si l'intant présent est compri entre la date de début d'affichage et la date de fin, on ajoute la news à la liste
			if(listData[i].debut<=codeMaintenant && listData[i].fin>=codeMaintenant)
			{
				auMoinsUneNews =1;
				jourNews = listData[i].debut.toString().substring(0,1);
				heureNews = listData[i].debut.toString().substring(1,3);
				minutesNews = listData[i].debut.toString().substring(3,5);
				if(jourNews==1)
				{
					affichageDateNews='Vendredi \340 ';
				}
				else if(jourNews==2)
				{
					affichageDateNews='Samedi \340 ';
				}
				else if(jourNews==3)
				{
					affichageDateNews='Dimanche \340 ';
				}

				affichageDateNews += heureNews +':'+minutesNews;
				
				newsEnHTML+='<li><h2 style="font-size: 14px">'+listData[i].title+ '<h2><p class="ui-li-aside">'+affichageDateNews+'</p><p style=" font-size: 13px;white-space: normal;">'+listData[i].subtitle+'</p></li>';
			}	
		}
		newsEnHTML+='</ul>';
	}

	newsEnHTML+='<ul data-role="listview"><li><h2 style="font-size: 14px">Appli Challenge<h2><p style=" font-size: 13px;white-space: normal;">Bienvenue sur l\'Appli Challenge ! Tu trouveras ici toutes les infos dont tu as besoin pour le Week End.<br/><br/> La liste compl\350te des matchs est disponible et les scores sont mis \340 jour en temps r\351el. Tu pourras aussi trouver tes horaires de navettes, le programme du Week End, les plans des diff\351rents sites et bien d\'autres choses encore !</p></li></ul>';
	
	
	$('#newsData').html(newsEnHTML); 
	$('#contentPage').trigger('create');
}		
