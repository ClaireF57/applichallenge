visualizze=0;

$(function() {
	if (!isLoggedIn()) document.location="login.html";
	$("#popupLogin").on("popupafterclose", function () {
				$(this).remove();
				location.reload();
			});
	AfficherLesNews();
	
	$(document).on('click', '.news', function(){ 

		title = $(this).attr("data-title");
		subtitle = $(this).attr("data-subtitle");
		debut = $(this).attr("data-debut");
		fin = $(this).attr("data-fin");
		id=$(this).attr("data-id");
		
		header='<div data-role="header" style="text-align:center"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><h2>Editer l\'annonce</h2></div>';
		
		body='<div role="main" class="ui-content"><div><label>Titre:</label><input type="text" value="'+title+'" id="titlePopUp"  /><label>Contenu:</label><textarea type="text" id="subtitlePopUp">'+subtitle+'</textarea><label>Debut d\'affichage :</label><div class="ui-grid-b"><div class="ui-block-a"><select id="jourDebutPopUp"><option value="1">Vendredi</option><option value="2">Samedi</option><option value="3">Dimanche</option></select></div><div class="ui-block-b"><input type="text" id="heureDebutPopUp" value="'+debut.toString().substring(1,3)+'"/></div><div class="ui-block-c"><input type="text" id="minDebutPopUp"  value="'+debut.toString().substring(3,5)+'"/></div></div><label>Fin d\'affichage :</label><div class="ui-grid-b"><div class="ui-block-a"><select id="jourFinPopUp"><option value="1">Vendredi</option><option value="2">Samedi</option><option value="3">Dimanche</option></select></div><div class="ui-block-b"><input type="text" id="heureFinPopUp" value="'+fin.toString().substring(1,3)+'"/></div><div class="ui-block-c"><input type="text" id="minFinPopUp"  value="'+fin.toString().substring(3,5)+'"/></div></div></div><div style="text-align:center"><a onclick="javascript:DeleteNews('+id+');" class=" ui-btn ui-corner-all ui-shadow ui-btn-icon-left ui-btn-inline ui-btn-b ui-icon-delete" data-rel="back">Supprimer</a><a onclick="javascript:EditNw('+id+');" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-icon-left ui-icon-check ui-btn-b" data-rel="back" data-transition="flow">Enregistrer</a></div></div>';
		
		$('<div>').attr({'data-role':'popup','id':'popupBasic','data-dismissible':'false','style':'min-width:600px;','data-transition':'pop'}).appendTo('[data-role="content"]');
		
		$('<div>').attr({'data-role':'header','data-theme':'b','id':'popup-header'}).append(header).appendTo('#popupBasic');
		
		$('<div>').attr({'data-role':'form','id':'form-test','data-theme':'a'}).append(body).appendTo('#popupBasic');
		
		
		document.getElementById("jourDebutPopUp").options.selectedIndex = debut.toString().substring(0,1)*1-1;
		document.getElementById("jourFinPopUp").options.selectedIndex = fin.toString().substring(0,1)*1-1;
		
		$('#contentPage').trigger('create');

		
		var popup = setInterval(function(){
			$("#popupBasic").popup();
			$("#popupBasic").popup("open",{
				overlayTheme: "a"
			}).on("popupafterclose", function () {
				$(this).remove();
				location.reload();
			});
			clearInterval(popup);
		},1);      
	});  
});

function EditNw(ID)
{
	debutPopUp=$('#jourDebutPopUp').val()*10000+$('#heureDebutPopUp').val()*100+$('#minDebutPopUp').val()*1;
	finPopUp=$('#jourFinPopUp').val()*10000+$('#heureFinPopUp').val()*100+$('#minFinPopUp').val()*1;
	
	EditNews(ID,$('#titlePopUp').val(),$('#subtitlePopUp').val(), debutPopUp, finPopUp );
}
					
function SaveNw(ID)
{
	var dateDebutNews = 10000*$('#jourDebut').val()+100*$('#heureDebut').val()+1*$('#minDebut').val();
	var dateFinNews = 10000*$('#jourFin').val()+100*$('#heureFin').val()+1*$('#minFin').val();
	
	InsertNews($('#titleAjouter').val(),$('#subtitleAjouter').val(), dateDebutNews, dateFinNews);
}
					
function DeleteNw(ID)
{
	DeleteNw(ID);
}


function AffichageDate(x)
{
	date="" ;
	
	if(x[0]==1)
	{
		date+='vendredi'
	} 
	else if(x[0]==2)
	{
		date+='samedi'
	} 
	else
	{
		date+='dimanche'
	}
	date+=' '+x[1]+x[2]+':'+x[3]+x[4];
	
	return date
}

					
function AfficherLesNews(){
	
	newsEnHTML="";
	listData=SelectNews();
	
	var swapped;
	do {
		swapped = false;
		for (var i=0; i < listData.length-1; i++) {
			if (listData[i].debut > listData[i+1].debut) {
				var temp = listData[i];
				listData[i] = listData[i+1];
				listData[i+1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	
	if (listData.length!=0)
	{
		newsEnHTML='<ul data-role="listview">';
		for (var i=0;i<listData.length;i+=1)
		{
			newsEnHTML+='<li data-role="list-divider">'+listData[i].title+ ' <p class="ui-li-aside"> Date de debut : ' +AffichageDate(""+listData[i].debut)+'. Date de fin : '+AffichageDate(""+listData[i].fin)+ ' </p></li><li style="white-space: normal;"><a class="ui-btn ui-btn-icon-right ui-icon-edit news" data-id="'+listData[i].ID+'" data-title="'+listData[i].title+'" data-subtitle="'+listData[i].subtitle+'" data-debut="'+listData[i].debut+'" data-fin="'+listData[i].fin+'" style="font-weight: normal;">'+listData[i].subtitle+'</a></li>';
		}
		newsEnHTML+='</ul>';
	}
	else 
	{
		newsEnHTML='<ul data-role="listview"><li style="white-space: normal;"> Aucune news a afficher </li></ul>';
	}
	
	$('#dataInsertNews').html(newsEnHTML); 
	$('#contentPage').trigger('create') ;
}
