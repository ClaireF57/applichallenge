<?php
	//  Created by Francesco Zanoli 
	foreach($_POST as $key => $val) {
		${$key} = htmlentities($val); //take variable from POST
	}
	$return = array(
		"message" => "",
		"error" => false
	);

	$dati = array("dog","cat","mouse"); //to get back

	if(!isset($isajax)) exit(); //stop script if it doesn't existe

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