$(document).ready(function() {
    /*Меню*/
	$('ul.menu a[href^="#"').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
		$('ul.menu a[href^="#"').css({'color':'#212121'});
		$(this).css({'color': '#004bee'});
		return false;
    });
    /*Выпадющее меню*/
	$('.menu-icon').click(function() {
		$('nav').slideToggle(500);
		$('ul').css({
			'display':'flex', 'flex-direction':'column'
		})
	})
})