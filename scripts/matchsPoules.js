$(function() {
	MacthList(); 
});


function MacthList(){
	listSport='<ul data-role="listview">';
	$('#data').html(""); 
	listData=SelctPouleResultat();

    
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
				listSport+='<li data-ecole1="'+obj.ecole1+'" data-ecole2="'+obj.ecole2+'" data-sport="'+obj.sport+'" data-poule="'+obj.poule+'" class="ullist" style="font-size: 13px;white-space: normal;"><p><strong>'+obj.heures+' '+obj.sport+' - Poule '+obj.poule+'</strong> \340 '+ obj.lieu+'</p><div class="ui-grid-b"><div class="ui-block-a" style="text-align: right">'+obj.ecole1+'</div><div class="ui-block-b" style="text-align: center;">-</div><div class="ui-block-c">'+obj.ecole2+'</div></div></li>';	
			}
            
            else
            {
            	if(obj.score1>obj.score2)
                {
                	listSport+='<li data-ecole1="'+obj.ecole1+'" data-ecole2="'+obj.ecole2+'" data-sport="'+obj.sport+'" data-poule="'+obj.poule+'" class="ullist" style="font-size: 13px;white-space: normal;"><p><strong>'+obj.heures+' '+obj.sport+' - Poule '+obj.poule+'</strong> \340 '+ obj.lieu+'</p><div class="ui-grid-b"><div class="ui-block-a" style="text-align: right"><strong>'+obj.ecole1+'</strong></div><div class="ui-block-b" style="text-align: center;">'+obj.score1+' - '+obj.score2+'</div><div class="ui-block-c">'+obj.ecole2+'</div></div></li>';			
		
                }
                else if(obj.score2>obj.score1)
                {
                	listSport+='<li data-ecole1="'+obj.ecole1+'" data-ecole2="'+obj.ecole2+'" data-sport="'+obj.sport+'" data-poule="'+obj.poule+'" class="ullist" style="font-size: 13px;white-space: normal;"><p><strong>'+obj.heures+' '+obj.sport+' - Poule '+obj.poule+'</strong> \340 '+ obj.lieu+'</p><div class="ui-grid-b"><div class="ui-block-a" style="text-align: right">'+obj.ecole1+'</div><div class="ui-block-b" style="text-align: center;">'+obj.score1+' - '+obj.score2+'</div><div class="ui-block-c"><strong>'+obj.ecole2+'</strong></div></div></li>';			
                }
                else
                {
                	listSport+='<li data-ecole1="'+obj.ecole1+'" data-ecole2="'+obj.ecole2+'" data-sport="'+obj.sport+'" data-poule="'+obj.poule+'" class="ullist" style="font-size: 13px;white-space: normal;"><p><strong>'+obj.heures+' '+obj.sport+' - Poule '+obj.poule+'</strong> \340 '+ obj.lieu+'</p><div class="ui-grid-b"><div class="ui-block-a" style="text-align: right">'+obj.ecole1+'</div><div class="ui-block-b" style="text-align: center;">'+obj.score1+' - '+obj.score2+'</div><div class="ui-block-c">'+obj.ecole2+'</div></div></li>';		
			
                }
			}
        }
    }
	else 
    {
		listSport+="<li>Aucun resultat a afficher</li>";
    }
    listSport+="</ul>";
	$('#dataPoules').html(listSport); 
	$('#contentPage').trigger('create') ;
}