function categorySubmenu() {

	//задаем маркер по-умолчанию
	var currentMenuMarker = '-1';

	//handles for GSAP
	var navBar = $('.sublevel-02')
	var navUl = $('.sublevel-02 ul');
	var navLi = $('.sublevel-02 li');

	//show / hide
	function showNavbar() {
			
		$(navBar).addClass('active');
		TweenLite.to(navBar, 1, {opacity: 1});

	}

	function showNavUl(current) {


		$(navUl)[current].show();

	}


	$('.sublevel-01 li').click(function(){

		showNavbar();
		
	}); 
	//end onclick

}