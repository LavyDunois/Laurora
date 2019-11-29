<?php
	include('includes/head.html');
	$page = $_GET['page'];
	if($page != 'menu_mobile'){
		include('includes/menu.html');
	}
	switch($page){
		case 'menu_mobile':
			include('includes/menu_mobile.html');
			break;
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
		default:
			include('includes/home.html');
			break;
	}
	include("includes/footer.html");
?>