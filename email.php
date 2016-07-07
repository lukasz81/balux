<?php
	if($_POST){
	  $name = $_REQUEST['name'];
	  $email = $_REQUEST['email'];
	  $message = $_REQUEST['message'];
	  //send email
	  mail("zbiszcz1@wp.pl,info@designmasters.co.uk", $name , $email , $message);
	}
?>
