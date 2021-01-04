<?php
$mailer="sumate@fundacionsolarsocial.cl"; // Direcci�n a la que se enviar� el correo

$cabeceras  = "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-type: text/html; charset=iso-8859-1\r\n";

$subject = "Nuevo mensaje desde la web - " . $_POST["name"];

// Enviamos el correo electr�nico
$res = mail($mailer, $subject, "Nombre: ".$_POST["name"]."\nE-Mail: ".$_POST["email"]."\nMensaje: ".$_POST["message"].", \n$cabeceras , \nDirecci�n IP: ".getenv("REMOTE_ADDR").", \nFecha: ".date("d/M/y h:i:s")." \n");

if($res) {
    echo "true";
} else {
    echo "false";
}

?>