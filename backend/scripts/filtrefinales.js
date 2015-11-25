$('select').on('change', function () {
    var valSport = $('#sport').val();

    var dataSport = (valSport == '') ? '' : '[data-sport="' + valSport + '"]';
	
	$('.ullist').hide();
	$('.ullist' + dataSport ).show();
});