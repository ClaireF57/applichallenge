<?php
if ($_GET["auth"]="FRANCElovePE25oupedelamour"){
$fh = fopen("./json/".$_GET['contet'].".json", 'w');
fwrite($fh,str_replace("\\", "", $_POST["array"]));
fclose($fh); }
?>