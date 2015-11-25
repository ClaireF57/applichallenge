$('select').on('change', function () {
    var valEcole1 = $('#ecole1').val();
    var valSport = $('#sport').val();
    var valPoule = $('#poule').val();

    var dataEcole1 = (valEcole1 == '') ? '' : '[data-ecole1="' + valEcole1 + '"]';
	var dataEcole1bis = (valEcole1 == '') ? '' : '[data-ecole2="' + valEcole1 + '"]';
    var dataSport = (valSport == '') ? '' : '[data-sport="' + valSport + '"]';
    var dataPoule = (valPoule == '') ? '' : '[data-poule="' + valPoule + '"]';
	
	$('.ullist').hide();
	$('.ullist'  + dataEcole1 + dataSport + dataPoule).show();
	$('.ullist'  + dataEcole1bis + dataSport + dataPoule).show();
});