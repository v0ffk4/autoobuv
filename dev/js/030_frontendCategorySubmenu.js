function categorySubmenu() {

	//задаем маркер по-умолчанию
	var currentMenuMarker = -1;

	//handles for GSAP
	var navBar = $('.sublevel-02')
	var navUl = $('.sublevel-02 ul');
	var navLi = $('.sublevel-02 li');

	//show / hide
	function showNavbar() {

		if (!$(navBar).hasClass('active')) {

			$(navBar).addClass('active');
			TweenLite.to(navBar, 1, {opacity: 1});

		}

	} //end shownavbar


	function hideNavbar() {

			$(navBar).removeClass('active');
			TweenLite.to(navBar, 0.5, {opacity: 0});

	} //end shownavbar


	function showNavUl(current) {

		$(navUl).hide();
		$(navUl[current]).addClass('active');
		$(navUl[current]).show();

	} //end showUl


	function hideNavUl() {

		$(navUl).hide();
		$(navUl).removeClass('active');
		$(navUl).hide();

	} //end showUl


	$('.sublevel-01 li').click(function(){

		//если кликнутый пункт равен текущему, то закрываем нафик субменю
		if( $(this).index() == currentMenuMarker ) {

			//сбрасываем маркер
			currentMenuMarker = -1;

			hideNavUl();
			hideNavbar();
			

		} else {

			//меняем маркер на кликнутый
			currentMenuMarker = $(this).index();

			showNavbar();
			showNavUl($(this).index());
			

		}

		
	}); 
	//end onclick

}