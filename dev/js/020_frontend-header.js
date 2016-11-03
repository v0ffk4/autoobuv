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
	var delay = 100;
	var fadeSpeed = 100;


	$('.subheader-category-item').mouseenter(function(){

		$('.subheader-category-item div').hide();
		var thisDiv = $(this).children('div');

		setTimeout(function(){
			thisDiv.fadeIn(fadeSpeed);
		}, delay)
	})

	$('.subheader-category-item').mouseleave(function(){

		var thisDiv = $(this).children('div');

		setTimeout(function(){
			thisDiv.fadeOut(fadeSpeed);
		}, 0)
	})

}