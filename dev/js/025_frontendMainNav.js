function mainNav() {
	var mainNav = $('.nav-main');
	var mainMenuOpen = $('.main-menu-open');


	function mainNavOpen() {
		alert('clicked');
	}

	$(mainMenuOpen).click(function(){
		alert("click");
	});

}