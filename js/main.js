(function($) {
	'use strict';
	jQuery(document).ready(function(){

	// Smooth Scroll
	$('a.smooth_scroll').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
		  scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
    });

	// Portfolio
	$('.portfolio-wrapper').mixItUp();

	// Magnific Popup
	$('.portfolio-popup').magnificPopup({
	  	type: 'image',
	  		gallery: {
	      		enabled: true
	  		},
	  	zoom: {
	      	enabled: true,
	      	duration: 300, // don't foget to change the duration also in CSS
	      	opener: function(element) {
	          return element.find('img');
	      	}
	  	}
	});


	});

})(jQuery);	
	


		