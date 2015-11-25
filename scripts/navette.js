$('select').on('change', function () {
    var valEcole = $('#ecole').val();
    var valSport = $('#sport').val();
	
    var dataEcole = (valEcole == '') ? '' : '[data-ecole="' + valEcole + '"]';
    var dataSport = (valSport == '') ? '' : '[data-sport="' + valSport + '"]';
	
    $('li.ui-li-static').hide();
    $('li.ui-li-static' + dataEcole + dataSport).show();
});