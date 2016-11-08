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

	} //end showNavUl


	function hideNavUl() {

		$(navUl).hide();
		$(navUl).removeClass('active');
		$(navUl).hide();

	} //end hideNavUl


	function showNavLi(){

		tlShowNavLi = new TimelineMax();

		tlShowNavLi
				.set( navLi, { opacity: 0 } )
				.set( navLi, { x: '+=40' } )
				.to( navLi, 1, { opacity: 1 } )
				.to( navLi, 0.5, { x: '-=40', ease: Power1.easeOut }, '-=1' );


	}


	function hiliteShow(current){

		$('.sublevel-01 li').removeClass('active');
		$(current).addClass('active');

	} //end hiliteShow


	function hiliteHide(){

		$('.sublevel-01 li').removeClass('active');

	} //end hiliteHide

	//потому что через CSS дергается
	function hoverLi(){

		$(navLi).mouseenter(function(){

			hoverTarget = $(this);
			TweenLite.to(hoverTarget, 0.5, {className:"+=hover", ease: Power1.easeOut });

		});

		$(navLi).mouseleave(function(){

			hoverTarget = $(this);
			TweenLite.to(hoverTarget, 0.5, {className:"-=hover", ease: Power1.easeIn });

		});

	}

	hoverLi();

	$('.sublevel-01 li').click(function(){

		//если кликнутый пункт равен текущему, то закрываем нафик субменю
		if( $(this).index() == currentMenuMarker ) {

			hiliteHide();
			hideNavUl();
			hideNavbar();

			//сбрасываем маркер
			currentMenuMarker = -1;
			

		} else {

			//меняем маркер на кликнутый
			currentMenuMarker = $(this).index();

			hiliteShow($(this));
			showNavbar();
			showNavUl($(this).index());
			showNavLi();

		}

		
	}); 
	//end onclick

}