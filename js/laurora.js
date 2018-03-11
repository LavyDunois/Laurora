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