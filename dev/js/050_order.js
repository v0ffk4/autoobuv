function orderFrontend() {
	
	//order click
	$('.category-item button').click(function(){

		$('#order-background').addClass('active');

	});

	//close order-background
	$('#order-close-btn').click(function(){

		$('#order-background').removeClass('active');

	})

}