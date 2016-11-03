function headerOpacity() {

	$(window).scroll(function(){
	    var fromtop = $(document).scrollTop();
	    opac = fromtop/200;
	    if(opac > 0.96){
	    	opac = 0.96;
	    }
	    $('.header-bcg').css({opacity: opac});
	    $('#subheader-category-bcg').css({opacity: opac});
	});

}

function categorySubmenuDisplay() {

	//скорость фейда
	var delay = 200;
	var fadeSpeed = 100;
	var thisDiv = $(this).children('div');


	$(".subheader-category-item").mouseenter(function(){

		var thisDiv = $(this).children('div');

		setTimeout(function(){
			thisDiv.fadeIn(fadeSpeed);
		}, delay)
	})

	$(".subheader-category-item").mouseleave(function(){

		var thisDiv = $(this).children('div');

		setTimeout(function(){
			thisDiv.fadeOut(fadeSpeed);
		}, delay)
	})

}