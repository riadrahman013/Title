(function ($) {
  $(document).ready(function(){
      
    //return;
	// hide .navbar first
	$(".navbar").hide();
	
	
	// fade in .navbar
	$(function () {
		var timeoutId = 0;

		$(window).scroll(function () {
			if (timeoutId > 0)
			{
				clearTimeout(timeoutId);
			}

			timeoutId = setTimeout(function()
			{
				if ($(this).scrollTop() < 10) {
					$('.navbar').fadeOut();
				} else {
					$('.navbar').fadeIn();
				}
			}, 200);

            // set distance user needs to scroll before we fadeIn navbar
			
		});

	
	});

});
  }(jQuery));

jQuery(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()
})
