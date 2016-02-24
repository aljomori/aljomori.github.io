<?php

if($_POST["name"] && $_POST["email"] && $_POST["mensaje"]){

$para      = 'aljomori@gmail.com';
$titulo    = 'MENSAJE DESDE EL CURRICULUM ALJOMORI';
$mensaje   = 'Mensaje de :'.$_POST["name"].'<br><br>'.$_POST["mensaje"];
$cabeceras = 'From: '. $_POST["email"] . "\r\n" .
    'Reply-To: '. $_POST["email"] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);

}

?>