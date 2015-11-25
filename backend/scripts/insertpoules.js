$(function() {
	if (!isLoggedIn()) document.location="login.html";
	MacthList();
	$(document).on('click', '.resultat', function(){ 

		ecole1 = $(this).attr("data-ecole1");
		ecole2 = $(this).attr("data-ecole2");
		sport = $(this).attr("data-sport");
		score1 = $(this).attr("data-score1value");
		score2 = $(this).attr("data-score2value");
		if (score1!=undefined)score1='value="'+score1+'"';
		if (score2!=undefined)score2='value="'+score2+'"';
		id=$(this).attr("data-id");
		
		header='<div data-role="header" style="text-align:center"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><div class="ui-grid-a">Inserer les scores</div>';
		body='<div role="main" class="ui-content"><fieldset class="ui-grid-a"><div class="ui-block-a"><label for="text-13">'+ecole1+' :</label><input type="text" '+score1+' id="score1"/></div><div class="ui-block-a"><label>'+ecole2+' :</label><input type="text" '+score2+' id="score2"/></div></fieldset><filedset class="ui-grid-solo"><button type="submit" onclick="javascript:SaveRes('+id+');" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check save">Enregistrer</button></filedset></div>';
		
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
	InsertScore(ID,$('#score1').val(),$('#score2').val());                       
	$( "#popupBasic" ).popup( "close" );
}

function MacthList(){
	listSport='<ul data-role="listview" data-inset="true">';
	$('#data').html(""); 
	listData=SelctPouleResultat();
	if (listData.length!=0)
	{
		for (var i=0;i<listData.length;i+=1)
		{
			obj=listData[i];
            if(obj.heures.split(":")[1]<10)
            {
            	obj.heures+='0';
            }
			if (obj.score1==-1)
				listSport+='<li class="ullist"><a class="ui-btn ui-btn-icon-right ui-icon-edit resultat" data-poule="'+obj.poule+'" data-ecole1="'+obj.ecole1+'"  data-ecole2="'+obj.ecole2+'" data-id="'+obj.ID+'" data-sport="'+obj.sport+'" style="font-size: 13px;white-space: normal;"><strong>'+obj.heures+' '+obj.sport+' - Poule '+obj.poule+'</strong><br/>'+ obj.lieu+'<br/> '+obj.ecole1+' - '+obj.ecole2+' </a></li>';		
			else
				listSport+='<li class="ullist"><a class="ui-btn ui-btn-icon-right ui-icon-edit resultat" data-poule="'+obj.poule+'" data-id="'+obj.ID+'" data-ecole1="'+obj.ecole1+'" data-score1value="'+obj.score1+'" data-score2value="'+obj.score2+'" data-ecole2="'+obj.ecole2+'" data-sport="'+obj.sport+'" style="font-size: 13px;white-space: normal;"><strong>'+obj.heures+' '+obj.sport+' - Poule '+obj.poule+'</strong><br/>'+ obj.lieu+'<br/>'+obj.ecole1+' ('+obj.score1+') - '+obj.ecole2+' ('+obj.score2+')</a></li>';		
		}
    }
	else 
    {
		listSport='<ul data-role="listview" data-inset="true"><li>Aucun resultat<li></ul>';
    }
	$('#dataInsertPoules').html(listSport); 
	$('#contentPage').trigger('create') ;
}