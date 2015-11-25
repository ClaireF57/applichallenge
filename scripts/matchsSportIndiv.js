$(function(){
	ResultatSportList();
});

function ResultatSportList()
{
	html='<ul data-role="listview">';
	listData=SelectSportIndividuel()
	for(var i=0;i<listData.length;i++)
	{
		html+='<li><h2 style=\"white-space: normal;font-size: 14px;">'+listData[i].sport+'</h2><p style=" font-size: 13px;white-space: normal;">'+listData[i].description+'<br/>'+listData[i].lieu+'</p><ol>';
		
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
		html+='</ol></li>';
	}
	
	html+='</ul>';
	
	$("#listSportIndiv").html(html);
	$('#contentPage').trigger('create');
}