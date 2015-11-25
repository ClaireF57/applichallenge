$(function() {
	if (!isLoggedIn()) document.location="login.html";
	ResIndiv();
	$(document).on('click', '.resultatIndiv', function(){ 

		ecole1 = 'value="'+$(this).attr("data-ecole1")+'"';
		ecole2 = 'value="'+$(this).attr("data-ecole2")+'"';
		ecole3 = 'value="'+$(this).attr("data-ecole3")+'"';
		sport = 'value="'+$(this).attr("data-sport")+'"';
		id=$(this).attr("data-id");
		
		header='<div data-role="header" style="text-align:center"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><div>'+$(this).attr("data-sport")+'</div></div>';
		body='<div role="main" class="ui-content"><p>Ce formulaire permet d\'entrer les 3 premiers vainqueurs des sports individuels.<br/> Les résultats s\'affichent dans matchs > sport individuels.<br/> Entrer l\'ecole et si possible le nom du gagnant, son score ou temps mis.<br/> Ex: Ecole Centrale Lyon - Francois Paugam (8:00) </p><fieldset><div><label for="text-13">Medaille d\'or:</label><input type="text" '+ecole1+' id="ecole1Edit"/></div><div><label>Medaille d\'argent:</label><input type="text" '+ecole2+' id="ecole2Edit"/></div><div><label> Medaille de bronzee:</label><input type="text" '+ecole3+' id="ecole3Edit"/></div></fieldset><filedset><button type="submit" onclick="javascript:SaveRes('+id+');" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check save">Enregistrer</button></filedset></div>';
		
		$('<div>').attr({'data-role':'popup','id':'popupBasic','data-dismissible':'false','style':'min-width:600px;','data-transition':'pop'}).appendTo('[data-role="content"]');
		$('<div>').attr({'data-role':'header','data-theme':'b','id':'popup-header'}).append(header).appendTo('#popupBasic');
		$('<div>').attr({'data-role':'form','id':'form-test','data-theme':'a'}).append(body).appendTo('#popupBasic');
		$('#contentPage').trigger('create');
		var popup = setInterval(function(){
			 $("#popupBasic").popup();
			$("#popupBasic").popup("open",{
				overlyaTheme: "a"
			}).on("popupafterclose", function () {
				$(this).remove();
				location.reload();
			});
			clearInterval(popup);
		},1);      
	});  
});

function SaveRes(ID)
{
	$(".save").off().click(function(){});
	InsertScoreIndividuel(ID,$('#ecole1Edit').val(),$('#ecole2Edit').val(),$('#ecole3Edit').val());                       
	$( "#popupBasic" ).popup( "close" );
}


function ResIndiv()
{
	html='<ul data-role="listview" data-inset="true">';
	listData=SelectSportIndividuel()
	for(var i=0;i<listData.length;i++)
	{
		html+='<li data-icon="edit" class="resultatIndiv" data-id="'+listData[i].ID+'" data-sport="'+listData[i].sport+'" data-ecole1="'+listData[i].ecole1+'" data-ecole2="'+listData[i].ecole2+'" data-ecole3="'+listData[i].ecole3+'" style=\"white-space: normal;font-size: 13px;"><a href=""><strong>'+listData[i].sport+'</strong><br/>'+listData[i].description+'<br/>'+listData[i].lieu+'<br/><ol>';
		
		if(listData[i].ecole1!="")
		{
			html+='<li>'+listData[i].ecole1+'</li>';
		}
		if(listData[i].ecole2!="")
		{
			html+='<li>'+listData[i].ecole2+'</li>';
		}
		if(listData[i].ecole3!="")
		{
			html+='<li>'+listData[i].ecole3+'</li>';
		}
		html+='</ol></a></li>';
	}
	
	html+='</ul>';
	$("#dataInsertIndiv").html(html);
	$('#contentPage').trigger('create') ;
}
