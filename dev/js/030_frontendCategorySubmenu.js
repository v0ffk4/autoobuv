function categorySubmenu() {

	//задаем маркер по-умолчанию
	var currentMenuMarker = '-1';

	//handles for GSAP
	var navBar = $('.sublevel-02')
	var navUl = $('.sublevel-02 ul');
	var navLi = $('.sublevel-02 li');

	$('.sublevel-01 li').click(function(){

		//если кликнутый пункт равен текущему, то закрываем нафик субменю
		if( $(this).index() == currentMenuMarker ) {

			//закрываем
			$(navUl).removeClass("active");

			//
			tlHide = new TimelineMax();

			tlHide
				.to( navLi, 0.25, { opacity: 0 } )

			//сбрасываем маркер
			currentMenuMarker = -1;

		} else {

			//меняем маркер на кликнутый
			currentMenuMarker = $(this).index();

			//ловим нужный подпункт
			var currentUl = $('.sublevel-02 ul')[currentMenuMarker];

			//активируем класс
			$(navUl).removeClass("active");
			$(currentUl).addClass("active");

			var currentLi = $('.active li');


			//GSAP

			tlShow = new TimelineMax();

			tlShow
				.to( currentLi, 0, { opacity: 0 } )
				.to( currentLi, 0, { x: '+=25' } )
				.to( currentLi, 0.75, { x: '-=25' } )
				.to( currentLi, 0.75, { opacity: 1 }, -0.75 );

		}

		
	}); 
	//end onclick

}