<?php
	include("includes/head.html");
	include("includes/menu.html");
	
	if(isset($_GET["page"])){
		include("includes/".$_GET["page"].".html");
	} else {
		include("includes/home.html");
	}
	
	include("includes/footer.html");
?>