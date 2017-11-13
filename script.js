$( document ).ready(function(){

	var headerHeight= $('header').outerHeight();

	$('.smooth-scroll').click(function(e){
		var linkHref = $(this).attr('href')
			
			$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		})
		e.preventDefault();


	})
});