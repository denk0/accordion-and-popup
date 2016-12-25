;(function($) {
	"use strict";

	$('.ba-accordion__heading').on('click', function() {

		if ( $(this).parent().hasClass('active') ) {

			$(this).parent().removeClass('active');
			$(this).siblings('.ba-accordion__body').slideUp();

		} else {

			$('.ba-accordion__body').parent().removeClass('active');
			$(this).parent().addClass('active');
			$('.ba-accordion__body').slideUp();
			$(this).siblings('.ba-accordion__body').slideDown();

		}
	});

	$('.open-popup').on('click', function() {
		$('.ba-popup').fadeIn(400);
	});

	$('.ba-popup .close').on('click', function() {
		$(this).parent().fadeOut(400);
	});

})(jQuery);  