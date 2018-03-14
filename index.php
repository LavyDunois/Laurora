<?php
	include("includes/head.html");
	include("includes/menu.html");
	$page = $_GET['page'];
	switch($page){
		case '':
			include('includes/home.html');
			break;
		case 'home':
			include('includes/home.html');
			break;
		case 'collectie':
			include('includes/collectie.html');
			break;
		case 'contact':
			include('includes/contact.html');
			break;
		default:
			include('includes/home.html');
			break;
	}
	include("includes/footer.html");
?>