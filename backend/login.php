<?php

	foreach($_POST as $key => $val) {
		${$key} = htmlentities($val); //creiamo le variabili prendendo i valori e i nomi delle variabili POST
	}
	$return = array(
		"message" => "",
		"error" => false
	);

	$dati = array("cane","gatto","topo"); //dati da restituire

	if(!isset($isajax)) exit(); //terminiamo lo script se la variabile isajax non esiste

	if($username=="b5f5623b6137a89a1dadf079a5e92266" && $password == "100cf8286e5506f0a0fa060aa74bb54d") {
		$return['message'] = "ok";
		$return['message'] = false;
		$return['donne'] = $dati;
		echo json_encode($return);
	} else {
		$return['error'] = true;
		$return['message'] = "Mot de pass incorrect";
		echo json_encode($return);
	}

?>