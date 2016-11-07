function categorySubmenu() {

	//задаем маркер по-умолчанию
	var currentMenuMarker = '-1';

	$('.sublevel-01 li').click(function(){

		//если кликнутый пункт равен текущему, то закрываем нафик субменю
		if( $(this).index() == currentMenuMarker ) {

			//закрываем
			$('.sublevel-02 ul').removeClass("active");

			//сбрасываем маркер
			currentMenuMarker = -1;

		} else {

			//меняем маркер на кликнутый
			currentMenuMarker = $(this).index();
			//ловим нужный подпункт
			var target = $('.sublevel-02 ul')[currentMenuMarker];

			$('.sublevel-02 ul').removeClass("active");
			$(target).addClass("active");


		}

		
	}); 
	//end onclick

}