function orderFrontend() {

	//basic frames
	var categoryItemButton = $('.category-item button');
	var orderBackground = $('#order-background');
	var orderCloseButton = $('#order-close-btn');

	//qty buttons
	var orderIncrementButton = $('#order-increment-btn');
	var orderDecrementButton = $('#order-decrement-btn');



	//show order window
	function showOrderWindow(){

		$(orderBackground).addClass('active');

	}

	//hideOrderWindow
	function hideOrderWindow(){

		$(orderBackground).removeClass('active');

	}

	//incrementQuantity
	function incrementQuantity() {

		var orderValue = $('.order-count').val();
		$(orderDecrementButton).removeClass('button-inactive');

		if(orderValue < 12){
			orderValue++;
			$('.order-count').val(orderValue);
		} else {
			$('.order-count').val(12);
			$(orderIncrementButton).addClass('button-inactive');

		}

		return orderValue;

	} /* increment */

	function decrementQuantity() {

		var orderValue = $('.order-count').val();
		$(orderIncrementButton).removeClass('button-inactive');

		if(orderValue > 0){
			orderValue--;
			$('.order-count').val(orderValue);
		} else {
			$('.order-count').val(0);
			$(orderDecrementButton).addClass('button-inactive');
		}

		return orderValue;

	} /* decrement */

	
	//order click
	$(categoryItemButton).click(function(){
		showOrderWindow();
	});

	//close order-background
	$('#order-close-btn').click(function(){
		hideOrderWindow();
	})

	//increment
	$(orderIncrementButton).click(function(){
		incrementQuantity();
	});

	//decrement
	$(orderDecrementButton).click(function(){
		decrementQuantity();
	});

}