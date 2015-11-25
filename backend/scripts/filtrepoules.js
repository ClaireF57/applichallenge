$('select').on('change', function () {
    var valEcole1 = $('#ecole1').val();
    var valEcole2 = $('#ecole2').val();
    var valSport = $('#sport').val();
    var valPoule = $('#poule').val();

    var dataEcole1 = (valEcole1 == '') ? '' : '[data-ecole1="' + valEcole1 + '"]';
    var dataEcole1bis = (valEcole1 == '') ? '' : '[data-ecole2="' + valEcole1 + '"]';
    var dataEcole2 = (valEcole2 == '') ? '' : '[data-ecole1="' + valEcole2 + '"]';
    var dataEcole2bis = (valEcole2 == '') ? '' : '[data-ecole2="' + valEcole2 + '"]';
    var dataSport = (valSport == '') ? '' : '[data-sport="' + valSport + '"]';
    var dataPoule = (valPoule == '') ? '' : '[data-poule="' + valPoule + '"]';
	
    if(dataEcole1=="" && dataEcole2=="")
    {
    	$('.resultat').hide();
    	$('.resultat' + dataSport + dataPoule).show();
    }
    else if(dataEcole1!="" && dataEcole2=="")
    {
  		$('.resultat').hide();
    	$('.resultat'  + dataEcole1 + dataSport + dataPoule).show();
        $('.resultat'  + dataEcole1bis + dataSport + dataPoule).show();
        
    }
    else if(dataEcole1=="" && dataEcole2!="")
    {
  		$('.resultat').hide();
    	$('.resultat'  + dataEcole2 + dataSport + dataPoule).show();
        $('.resultat'  + dataEcole2bis + dataSport + dataPoule).show();
        
    }
    else
    {
    	$('.resultat').hide();
    	$('.resultat'  + dataEcole1 + dataEcole2bis + dataSport + dataPoule).show();
        $('.resultat'  + dataEcole2 + dataEcole1bis + dataSport + dataPoule).show();
    }

});