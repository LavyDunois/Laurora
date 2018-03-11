//Menu Animation
$(window).scroll(function(event){
	var position = $(window).scrollTop();
	if(position > 0){
		$(".menu-item").addClass("menu-item-height");
		$(".menu-logo").addClass("menu-logo-small");
		$(".menu").addClass("menu-shadow");
	}else{
		$(".menu-item").removeClass("menu-item-height");
		$(".menu-logo").removeClass("menu-logo-small");
		$(".menu").removeClass("menu-shadow");
	};
});

//Contact Form Animation
name = false;
surname = false;
mail = false;
message = false;
$(document).ready(function(){
	$(".name").focusout(function(){
		if($(".name").val() != ''){
			$(".name").removeClass("input-is-empty");
			$(".name").addClass("input-is-full");
			name = true;
			enableSendMessage(name, surname, mail, message);
			console.log("2. "+name+" "+surname+" "+mail+" "+message);
		}else{
			$(".name").removeClass("input-is-full");
			$(".name").addClass("input-is-empty");
			name = false;
			enableSendMessage(name, surname, mail, message);
			console.log("2. "+name+" "+surname+" "+mail+" "+message);
		}
	});
});
$(document).ready(function(){
	$(".surname").focusout(function(){
		if($(".surname").val() != ''){
			$(".surname").removeClass("input-is-empty");
			$(".surname").addClass("input-is-full");
			surname = true;
			enableSendMessage(name, surname, mail, message);
			console.log("2. "+name+" "+surname+" "+mail+" "+message);
		}else{
			$(".surname").removeClass("input-is-full");
			$(".surname").addClass("input-is-empty");
			surname = false;
			enableSendMessage(name, surname, mail, message);
			console.log("2. "+name+" "+surname+" "+mail+" "+message);
		}
	});
});
$(document).ready(function(){
	$(".mail").focusout(function(){
		if($(".mail").val() != ''){
			$(".mail").removeClass("input-is-empty");
			$(".mail").addClass("input-is-full");
			mail = true;
			enableSendMessage(name, surname, mail, message);
			console.log("2. "+name+" "+surname+" "+mail+" "+message);
		}else{
			$(".mail").removeClass("input-is-full");
			$(".mail").addClass("input-is-empty");
			mail = false;
			enableSendMessage(name, surname, mail, message);
			console.log("2. "+name+" "+surname+" "+mail+" "+message);
		}
	});
});
$(document).ready(function(){
	$(".message").focusout(function(){
		if($(".message").val() != ''){
			$(".message").removeClass("input-is-empty");
			$(".message").addClass("input-is-full");
			message = true;
			enableSendMessage(name, surname, mail, message);
			console.log("2. "+name+" "+surname+" "+mail+" "+message);
		}else{
			$(".message").removeClass("input-is-full");
			$(".message").addClass("input-is-empty");
			message = false;
			enableSendMessage(name, surname, mail, message);
			console.log("2. "+name+" "+surname+" "+mail+" "+message);
		}
	});
});
$(document).ready(function(){
	$("#mail-send").click(function(){
		$(".contact-wrapper").addClass("contact-slide-left");
		$(window).scrollTop(0);
	});
});
function enableSendMessage(name, surname, mail, message){
	console.log("1. "+name+" "+surname+" "+mail+" "+message);
	if(name == true){
		alert("name");
		if(surname == true){
			alert("surname");
			if(mail == true){
				alert("mail");
				if(message == true){
					alert("message");
					$("#mail-send").removeAttr("disabled");
				}
			}
		}
	}else{
		/*alert(name);*/
	}
}