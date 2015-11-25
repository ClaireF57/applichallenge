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
		body='<div role="main" class="ui-content"><fieldset class="ui-grid-a"><div class="ui-block-a"><label for="text-13">Poule 1 :</label><select id="poule1" data-mini="true"><option value="'+ecole1+'" style="font-size: 14px;">'+ecole1+'</option><option value="Agro Paris Tech">Agro Paris Tech</option><option value="Centrale Lille">Centrale Lille</option><option value="Centrale Lyon">Centrale Lyon</option><option value="Centrale Marseille">Centrale Marseille</option><option value="Centrale Nantes">Centrale Nantes</option><option value="Centrale Paris">Centrale Paris</option><option value="CESI">CESI</option><option value="CPE Lyon">CPE Lyon</option><option value="EM Lyon">EM Lyon</option><option value="ENS Lyon">ENS Lyon</option><option value="ENS Ulm">ENS Ulm</option><option value="ENSEA">ENSEA</option><option value="ENSICA">ENSICA</option><option value="ENSIIE">ENSIIE</option><option value="EPFL">EPFL</option><option value="ESPCI">ESPCI</option><option value="ESTP">ESTP</option><option value="ETSII Madrid">ETSII Madrid</option><option value="Mines d’Alès">Mines d’Alès</option><option value="Mines de Nancy">Mines de Nancy</option><option value="Mines de Paris">Mines de Paris</option><option value="Mines de Saint-Étienne">Mines de Saint-Étienne</option><option value="Ponts et Chaussées">Ponts et Chaussées</option><option value="SupAéro">SupAéro</option><option value="Supélec">Supélec</option><option value="Supoptique">Supoptique</option><option value="Télécom Bretagne">Télécom Bretagne</option><option value="Vieux Cons 1">Vieux Cons 1</option><option value="Vieux Cons 2">Vieux Cons 2</option><option value="Centrale Lyon 1">Centrale Lyon 1</option><option value="Centrale Lyon 2">Centrale Lyon 2</option><option value="Centrale Lyon 3">Centrale Lyon 3</option><option value="Centrale Lyon 4">Centrale Lyon 4</option><option value="Centrale Lyon 5">Centrale Lyon 5</option></select><label for="text-13">Score Ecole 1 :</label><input type="text" '+score1+' id="score1"/></div><div class="ui-block-a"><label for="text-13">Poule 2 :</label><select id="poule2" data-mini="true"><option value="'+ecole2+'" style="font-size: 14px;">'+ecole2+'</option><option value="Agro Paris Tech">Agro Paris Tech</option><option value="Centrale Lille">Centrale Lille</option><option value="Centrale Lyon">Centrale Lyon</option><option value="Centrale Marseille">Centrale Marseille</option><option value="Centrale Nantes">Centrale Nantes</option><option value="Centrale Paris">Centrale Paris</option><option value="CESI">CESI</option><option value="CPE Lyon">CPE Lyon</option><option value="EM Lyon">EM Lyon</option><option value="ENS Lyon">ENS Lyon</option><option value="ENS Ulm">ENS Ulm</option><option value="ENSEA">ENSEA</option><option value="ENSICA">ENSICA</option><option value="ENSIIE">ENSIIE</option><option value="EPFL">EPFL</option><option value="ESPCI">ESPCI</option><option value="ESTP">ESTP</option><option value="ETSII Madrid">ETSII Madrid</option><option value="Mines d’Alès">Mines d’Alès</option><option value="Mines de Nancy">Mines de Nancy</option><option value="Mines de Paris">Mines de Paris</option><option value="Mines de Saint-Étienne">Mines de Saint-Étienne</option><option value="Ponts et Chaussées">Ponts et Chaussées</option><option value="SupAéro">SupAéro</option><option value="Supélec">Supélec</option><option value="Supoptique">Supoptique</option><option value="Télécom Bretagne">Télécom Bretagne</option><option value="Vieux Cons 1">Vieux Cons 1</option><option value="Vieux Cons 2">Vieux Cons 2</option><option value="Centrale Lyon 1">Centrale Lyon 1</option><option value="Centrale Lyon 2">Centrale Lyon 2</option><option value="Centrale Lyon 3">Centrale Lyon 3</option><option value="Centrale Lyon 4">Centrale Lyon 4</option><option value="Centrale Lyon 5">Centrale Lyon 5</option></select><label>Score Ecole 2 :</label><input type="text" '+score2+' id="score2"/></div></fieldset><filedset class="ui-grid-solo"><button type="submit" onclick="javascript:SaveRes('+id+');" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check save">Enregistrer</button></filedset></div>';
		
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
	score1=$('#score1').val();
	score2=$('#score2').val();
	if (score1=="")
		score1=-1;
	if (score2=="")
		score2=-1;
	InsertScoreFinal(ID,score1,score2,$('#poule1').val(),$('#poule2').val());                       
	$( "#popupBasic" ).popup( "close" );
}

function MacthList(){
	listSport='<ul data-role="listview" data-inset="true">';
	$('#data').html(""); 
	listData=SelectResultatFinal();
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
				listSport+='<li class="ullist" data-sport="'+obj.sport+'"><a class="ui-btn ui-btn-icon-right ui-icon-edit resultat" data-phase="'+obj.phase+'" data-ecole1="'+obj.poule1+'"  data-ecole2="'+obj.poule2+'" data-id="'+obj.ID+'" data-sport="'+obj.sport+'" style="font-size: 13px;white-space: normal;"><strong>'+obj.heures+' '+obj.sport+' - '+obj.phase+'</strong><br/>'+ obj.lieu+'<br/> '+obj.poule1+' - '+obj.poule2+' </a></li>';		
			else
				listSport+='<li class="ullist" data-sport="'+obj.sport+'"><a class="ui-btn ui-btn-icon-right ui-icon-edit resultat" data-score2value="'+obj.score2+'" data-score1value="'+obj.score1+'" data-phase="'+obj.phase+'" data-ecole1="'+obj.poule1+'"  data-ecole2="'+obj.poule2+'" data-id="'+obj.ID+'" data-sport="'+obj.sport+'" style="font-size: 13px;white-space: normal;"><strong>'+obj.heures+' '+obj.sport+' - '+obj.phase+'</strong><br/>'+ obj.lieu+'<br/> '+obj.poule1+' ('+obj.score1+') - '+obj.poule2+'('+obj.score2+') </a></li>';	
		}
    }
	else 
    {
		listSport='<ul data-role="listview" data-inset="true"><li>Aucun resultat<li></ul>';
    }
	$('#dataInsertFinales').html(listSport); 
	$('#contentPage').trigger('create') ;
}