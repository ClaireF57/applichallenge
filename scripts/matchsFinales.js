$(function() {
	MacthList(); 
});


function MacthList(){
	listSport='<ul data-role="listview">';
	$('#data').html(""); 
	listData=SelectResultatFinal();

	if (listData.length!=0)
	{
		for (var i=0;i<listData.length;i+=1)
		{
			obj=listData[i];
            if(obj.heures.split(":")[1]<10)
            {
            	obj.heures=obj.heures.split(":")[0]+':0'+obj.heures.split(":")[1];
            }
            
			if (obj.score1==-1)
            {
				listSport+='<li data-poule1="'+obj.poule1+'" data-poule2="'+obj.poule2+'" data-sport="'+obj.sport+'" data-poule="'+obj.phase+'" class="ullist" style="font-size: 13px;white-space: normal;"><p><strong>'+obj.phase+'<br/>'+obj.jour+' '+obj.heures+' '+obj.sport+'</strong> \340 '+ obj.lieu+'</p><div class="ui-grid-b"><div class="ui-block-a" style="text-align: right">'+obj.poule1+'</div><div class="ui-block-b" style="text-align: center;">-</div><div class="ui-block-c">'+obj.poule2+'</div></div></li>';	
			}
            
            else
            {
            	if(obj.score1>obj.score2)
                {
                	listSport+='<li data-poule1="'+obj.poule1+'" data-poule2="'+obj.poule2+'" data-sport="'+obj.sport+'" data-poule="'+obj.phase+'" class="ullist" style="font-size: 13px;white-space: normal;"><p><strong>'+obj.phase+'<br/>'+obj.jour+' '+obj.heures+' '+obj.sport+'</strong> \340 '+ obj.lieu+'</p><div class="ui-grid-b"><div class="ui-block-a" style="text-align: right"><strong>'+obj.poule1+'</strong></div><div class="ui-block-b" style="text-align: center;">'+obj.score1+' - '+obj.score2+'</div><div class="ui-block-c">'+obj.poule2+'</div></div></li>';			
		
                }
                else if(obj.score2>obj.score1)
                {
                	listSport+='<li data-poule1="'+obj.poule1+'" data-poule2="'+obj.poule2+'" data-sport="'+obj.sport+'" data-poule="'+obj.phase+'" class="ullist" style="font-size: 13px;white-space: normal;"><p><strong>'+obj.phase+'<br/>'+obj.jour+' '+obj.heures+' '+obj.sport+'</strong> \340 '+ obj.lieu+'</p><div class="ui-grid-b"><div class="ui-block-a" style="text-align: right">'+obj.poule1+'</div><div class="ui-block-b" style="text-align: center;">'+obj.score1+' - '+obj.score2+'</div><div class="ui-block-c"><strong>'+obj.poule2+'</strong></div></div></li>';			
                }
                else
                {
                	listSport+='<li data-poule1="'+obj.poule1+'" data-poule2="'+obj.poule2+'" data-sport="'+obj.sport+'" data-poule="'+obj.phase+'" class="ullist" style="font-size: 13px;white-space: normal;"><p><strong>'+obj.phase+'<br/>'+obj.jour+' '+obj.heures+' '+obj.sport+'</strong> \340 '+ obj.lieu+'</p><div class="ui-grid-b"><div class="ui-block-a" style="text-align: right">'+obj.poule1+'</div><div class="ui-block-b" style="text-align: center;">'+obj.score1+' - '+obj.score2+'</div><div class="ui-block-c">'+obj.poule2+'</div></div></li>';		
			
                }
			}
        }
    }
	else 
    {
		listSport+="<li>Aucun resultat a afficher</li>";
    }
    listSport+="</ul>";
	$('#dataFinales').html(listSport); 
	$('#contentPage').trigger('create') ;
}