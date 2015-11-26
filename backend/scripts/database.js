//
//  database.js
//
//  Created by Francesco Zanoli 
//  
//
//General function of SELECT,UPDATE,DELETE We call their from all the function above
function Get(context)
	{
		data=null;
        $.ajax({
        	async :false,
  			dataType: "json",
  			url: "../json/"+context+".json",
  			data: data,
  			success:  function(dat) { 
				data = (dat);
			}});
		if(data==null)
			return new Array();
		return data;
		}
//Update, save the file .json on the server
function Save(context,data)
{
	link='../save.php?contet='+context+"&auth=FRANCElovePE25oupedelamour";
	$.ajax({
    	async :false,
		url: link,
		type: 'POST',
        data: {array:JSON.stringify(data)},
		success: function(data) {
        	
		},
        error: function(data){
        	alert(JSON.stringify(data));}
		});
}

//delete
function Remove(data,id)
{
	if (data==null)
		return;
	for(i=0;i<JSon.length;i++)
		if (JSon[i].ID>=id)
		{	
			JSon.splice(i,1);
			break;
		}
	}
//we find the same function of dataseul but they do different things
function GetNewID(data)
{
	if (data==null)
		return 0;
	max=-1;
	for(i=0;i<JSon.length;i++)
		if (JSon[i].ID>=max)
			max=JSon[i].ID;
	return max+1;
	}

//SELECT
function SelectNews()
{
	news= Get("news");
    return news;
	}

function SelectScores()
{
	match= Get("match");
	scores=new Array();
	for(i=0;i<match.length;i++)
		if (match[i].score1>-1)
			scores.push(match[i]);
    return scores;
	}

function SelectMatchs()
{
	menage= Get("match");
	matchs=new Array();
	for(i=0;i<menage.length;i++)
		if (menage[i].score1==-1)
			matchs.push(menage[i]);
    return matchs;
	}

function SelectMatchsResultat()
{
	matchs= Get("match");
    return matchs;
	}
	
function SelectEcoles()
{
	ecoles= Get("ecole");
    return ecoles;
	}
	
function SelectSports()
{
	sport=null;
        $.ajax({
        	async :false,
  			dataType: "json",
  			url: "../json/sport.json",
  			data: data,
			processData: false,
  			success:  function(dat) { 
				sport = (dat);
			}});
		if(sport==null)
			return new Array();
		return sport;
	}


function SelectParSport(ID)
{	
	data=SelectScores();
	sports=SelectSports();
	for (i=0;i<sports.length;i++)
		if (sports[i].ID==ID)
			break;
	nomsport=sports[i].nom;
	matchs=new Array();
	for(i=0;i<data.length;i++)
		if (data[i].sport==nomsport)
			matchs.push(data[i]);
	return matchs;
	}
	
function SelectLieus()
{
	lieu= Get("lieu");
    return lieu;
	}	
	
function SelectParEcole(ID)
{	
	nomecole="";
	datas=SelectScores();
	ecoles=SelectEcoles();
	for (i=0;i<ecoles.length;i++)
		if (ecoles[i].ID==ID)
		{nomecole=ecoles[i].nom;
			break;}
	
	matchs=new Array();
	for(i=0;i<data.length;i++)
		if (data[i].equipe1==nomecole || data[i].equipe2==nomecole)
			matchs.push(data[i]);
	return matchs;
	}


function SelectDernier()
{
	var now = new Date();  
    var valNow = now.getHours();
	data=SelectMatchs();
	matchs=new Array();
	for (i=0;i<data.length;i++)
		if (parseInt(data[i].heure.split(':')[0])==valNow || parseInt(data[i].heure.split(':')[0])==valNow+1 || parseInt(data[i].heure.split(':')[0])==valNow+2)
			for (j=0;j<=60;j++)
				if (parseInt(data[i].heure.split(':')[1])==j)
					matchs.push(data[i]);
	return matchs;
	}

function SelectSportIndividuel()
{
	sportInd= Get("indiv");
    return sportInd;
}

function SelctPouleResultat()
{
	sportInd= Get("poule");
    return sportInd;
}

function SelectResultatFinal()
{
	sportInd= Get("final");
    return sportInd;
}
	
//INSERT Every time we make a GET, then we edit the data and we make a Save
function InsertNews(title,subtitle,debut,fin)
{
	JSon=Get("news");
	ID=GetNewID(JSon);
	item={
		title:title,
		subtitle:subtitle,
		debut:debut,
		fin:fin,
		ID:ID};
	JSon.push(item);
	Save("news",JSon);
}


function InsertSport(title)
{
	JSon=Get("sport");
	ID=GetNewID(JSon);
	item={
		nom:title,
		ID:ID};
	JSon.push(item);
	Save("sport",JSon);
	}

function InsertScoreIndividuel(ID,ecole1,ecole2,ecole3)
{
	JSon=Get("indiv");
	for(i=0;i<JSon.length;i++)
		if (ID==JSon[i].ID)
		{
			JSon[i].ecole1=ecole1;
			JSon[i].ecole2=ecole2;
			JSon[i].ecole3=ecole3;
			break;
			}
	Save("indiv",JSon);
	}

	
function InsertScore(ID,score1,score2)
{
	JSon=Get("poule");
	for(i=0;i<JSon.length;i++)
		if (ID==JSon[i].ID)
		{
			JSon[i].score1=score1;
			JSon[i].score2=score2;
			break;
			}
	Save("poule",JSon);
	}
	
function InsertScoreFinal(ID,score1,score2,poule1,poule2)
{
	JSon=Get("final");
	for(i=0;i<JSon.length;i++)
		if (ID==JSon[i].ID)
		{
			JSon[i].score1=score1;
			JSon[i].score2=score2;
			JSon[i].poule1=poule1;
			JSon[i].poule2=poule2;
			break;
			}
	Save("final",JSon);
	}	

function InsertMatch(equipe1,equipe2,ecole1,ecole2,heure,lieu,sport)
{
	JSon=Get("match");
	ID=GetNewID(JSon);
	item={
		score1:-1,
		score2:-1,
		equipe1:equipe1,
		equipe2:equipe2,
		ecole1:ecole1,
		ecole2:ecole2,
		heure:heure,
		lieu:lieu,
		sport:sport,
		ID:ID};
	JSon.push(item);
	Save("match",JSon);
	}

function InsertEcole(nom)
{
	JSon=Get("ecole");
	ID=GetNewID(JSon);
	item={
		nom:nom,
        ID:ID};
	JSon.push(item);
	Save("ecole",JSon);
	}

function InsertLieu(nom)
{
	JSon=Get("lieu");
	ID=GetNewID(JSon);
	item={
		nom:nom,
        ID:ID};
	JSon.push(item);
	Save("lieu",JSon);
	}	
	
//DELETE	
function DeleteLieu(ID)
{
	JSon=Get("lieu");
	Remove(JSon,ID);
	Save("lieu",JSon);
	}
	
function DeleteNews(ID)
{
	JSon=Get("news");
	Remove(JSon,ID);
	Save("news",JSon);
	}

function DeleteScore(ID)
{
	JSon=Get("score");
	Remove(JSon,ID);
	Save("score",JSon);
	}

function DeleteMatch(ID)
{
	JSon=Get("match");
	Remove(JSon,ID);
	Save("match",JSon);
	}

function DeleteSport(ID)
{
	JSon=Get("sport");
	Remove(JSon,ID);
	Save("sport",JSon);
	}	
	
function DeleteEcole(ID)
{
	JSon=Get("ecole");
	Remove(JSon,ID);
	Save("ecole",JSon);
	}
	
function EditSport(ID,title)
{
	JSon=Get("sport");
	for(i=0;i<JSon.length;i++)
		if (ID==JSon[i].ID)
		{
			JSon[i].nom=title;
			break;
			}
	Save("sport",JSon);
	}

//UPDATE
function EditMatch(ID,equipe1,equipe2,ecole1,ecole2,heure,lieu,sport)
{
	JSon=Get("match");
	for(i=0;i<JSon.length;i++)
		if (ID==JSon[i].ID)
		{
			JSon[i].equipe1=equipe1;
			JSon[i].equipe2=equipe2;
			JSon[i].ecole1=ecole1;
			JSon[i].ecole2=ecole2;
			JSon[i].heure=heure;
			JSon[i].lieu=lieu;
			JSon[i].sport=sport;
			break;
			}
	Save("sport",JSon);
	}
	
function EditEcole(ID,title)
{
	JSon=Get("ecole");
	for(i=0;i<JSon.length;i++)
		if (ID==JSon[i].ID)
		{
			JSon[i].nom=title;
			break;
			}
	Save("ecole",JSon);
	}
	
function EditLieu(ID,title)
{
	JSon=Get("lieu");
	for(i=0;i<JSon.length;i++)
		if (ID==JSon[i].ID)
		{
			JSon[i].nom=title;
			break;
			}
	Save("lieu",JSon);
	}	
	
	function EditNews(ID,title,subtitle,debut,fin)
{
	JSon=Get("news");
	for(i=0;i<JSon.length;i++)
		if (ID==JSon[i].ID)
		{
			
				JSon[i].title=title; 
			
				JSon[i].subtitle=subtitle;
			
				JSon[i].debut=debut;
		
				JSon[i].fin=fin; 
		break;
		}
	Save("news",JSon);
}

