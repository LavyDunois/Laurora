<?php
	//Setup Website
	include('includes/head.html');
	include('includes/menu.html');
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
		case 'workshops':
			include('includes/workshops.html');
			break;
		case 'contact':
			include('includes/contact.html');
			break;
		case 'contact_worked':
			include('includes/contact_worked.html');
			break;
		case 'contact_failed':
			include('includes/contact_failed.html');
			break;
		case 'contact_bad_email':
			include('includes/contact_bad_email.html');
			break;
		default:
			include('includes/home.html');
			break;
	}
	include('includes/footer.html');
?>