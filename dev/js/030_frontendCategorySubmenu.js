function categorySubmenu() {

	//задаем маркер по-умолчанию
	var currentMenuMarker = '-1';

	//handles for GSAP
	var navUl = $('.sublevel-02 ul');
	var navLi = $('.sublevel-02 li');

	$('.sublevel-01 li').click(function(){

		//если кликнутый пункт равен текущему, то закрываем нафик субменю
		if( $(this).index() == currentMenuMarker ) {

			//закрываем
			$(navUl).removeClass("active");

			//сбрасываем маркер
			currentMenuMarker = -1;

		} else {

			//меняем маркер на кликнутый
			currentMenuMarker = $(this).index();
			//ловим нужный подпункт
			var currentMenu = $('.sublevel-02 ul')[currentMenuMarker];

			$('.sublevel-02 ul').removeClass("active");
			$(currentMenu).addClass("active");
			var currentMenuListItems = $('.active li');

			//GSAP

			tl = new TimelineMax();

			tl
				.to( currentMenuListItems, 0.25, { opacity: 0 } )
				.to( currentMenuListItems, 0.5, { opacity: 1 } );


		}

		
	}); 
	//end onclick

}