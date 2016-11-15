function orderFrontend() {

	var categoryItemButton = $('.category-item button');
	var orderBackground = $('#order-background');
	var orderCloseButton = $('#order-close-btn');

	//show order window
	function showOrderWindow(){

		$(orderBackground).addClass('active');

	}

	//hideOrderWindow
	function hideOrderWindow(){

		$(orderBackground).removeClass('active');

	}

	//incrementQuantity
	
	//order click
	$(categoryItemButton).click(function(){
		showOrderWindow();
	});

	//close order-background
	$('#order-close-btn').click(function(){
		hideOrderWindow();
	})

}