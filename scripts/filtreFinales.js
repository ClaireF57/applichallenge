//
//  filtreFinales.js
//
//  Created by Francesco Zanoli 
//  
//if the value change
$('select').on('change', function () {
    var valSport = $('#sport').val();

	//and the value is ok					//then use data-sport to show the correct list
    var dataSport = (valSport == '') ? '' : '[data-sport="' + valSport + '"]';
	
	$('.ullist').hide();
	$('.ullist' + dataSport ).show();
});