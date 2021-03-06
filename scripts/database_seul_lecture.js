//
//  database_seul_lecture.js
//
//  Created by Francesco Zanoli 
// 
//

//take the data from the file context+".json"
//Every function that needs data call this function 
function Get(context)
	{
		data=null;
        $.ajax({
        	async :false,
			cache: false,
  			dataType: "json",
  			url: "./json/"+context+".json",
  			data: data,
  			success:  function(dat) { 
				data = (dat);
			}});
		if(data==null)
			return new Array();
		return data;
		}
//Find which is the first ID dispo
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


//SELECT, we don't have UPDATE AND DELETE because we are in frontend
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

function SelectNavettes()
{
	ecoles= Get("navettes");
    return ecoles;
	}

function SelectProgramme()
{
	ecoles= Get("programme");
    return ecoles;
	}	
	
function SelectEcoles()
{
	ecoles= Get("ecole");
    return ecoles;
	}
	
function SelectLieus()
{
	lieu= Get("lieu");
    return lieu;
	}
	
function SelectSports()
{
	sportInd= Get("sport");
    return sportInd;
	}

function SelectParSport(ID)
{	
	nomsport="";
	data=SelectScores();
	sports=SelectSports();
	//Create the object because we don't use a entity framework so this js need to fill the obj from the Json
	for (i=0;i<sports.length;i++)
		if (sports[i].ID==ID)
		{	
			nomsport=sports[i].nom;
			break;
			}
	matchs=new Array();
	for(i=0;i<data.length;i++)
		if (data[i].sport==nomsport)
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