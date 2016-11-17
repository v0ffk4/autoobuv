function categorySubmenu() {

	//задаем маркер по-умолчанию
	var currentMenuMarker = -1;

	var subheaderMainSpan = $('.subheader-main span');
	var subBackground = $('.sublevel-background')
	var subUl = $('.submenu');
	var subLi = $('.submenu li')


//declaring functions
//show background
	function showSubBackground() {
		if (!$(subBackground).hasClass('active')) {

			$(subBackground).addClass('active');
			TweenLite.to(subBackground, 1, {opacity: 1});

		}

	}

//hide background
	function hideSubBackground() {

			TweenLite.to(subBackground, 0.5, {opacity: 0, onComplete:function(){
					$(subBackground).removeClass('active');
				}});

	}

//show hilite
	function hiliteShow(current){
		$(subheaderMainSpan).closest('li').removeClass('active');
		$(current).addClass('active');
	}

//hide hilite
	function hiliteHide(){
		$(subheaderMainSpan).closest('li').removeClass('active');
	}

//show NavUl
	function showNavUl(current) {

		$(subUl).hide();
		$(current).children('ul').addClass('active');
		$(current).children('ul').show();

	} 

//hide NavUl
	function hideNavUl() {

		$(subUl).hide();
		$(subUl).removeClass('active');

	}

//show subLi
	function showSubLi(){

		tlShowSubLi = new TimelineMax();

		tlShowSubLi
				.set( subLi, { opacity: 0 } )
				.set( subLi, { x: '+=40' } )
				.to( subLi, 1, { opacity: 1 } )
				.to( subLi, 0.5, { x: '-=40', ease: Power1.easeOut }, '-=1' );


	}


//потому что через CSS дергается
	function hoverLi(){

		$(subLi).mouseenter(function(){

			hoverTarget = $(this);
			TweenLite.to(hoverTarget, 0.5, {className:"+=hover", ease: Power1.easeOut });

		});

		$(subLi).mouseleave(function(){

			hoverTarget = $(this);
			TweenLite.to(hoverTarget, 0.5, {className:"-=hover", ease: Power1.easeIn });

		});

	}

	hoverLi();


//on click
	subheaderMainSpan.click(function() {
		//если кликнутый пункт равен текущему, то закрываем нафик субменю
		if( $(this).closest('li').index() == currentMenuMarker ) {

			hiliteHide();
			hideNavUl();
			hideSubBackground();

			//сбрасываем маркер
			currentMenuMarker = -1;
			
		} else {
			//меняем маркер на кликнутый
			currentMenuMarker = $(this).closest('li').index();

			hiliteShow($(this).closest('li'));
			showSubBackground();
			showNavUl($(this).closest('li'));
			showSubLi();
		}
	});

}