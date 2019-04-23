
$(window).load(function() {
  $('.before-load').find('.spinner-img').fadeOut().end().delay(400).fadeOut('slow');
});

$(document).ready(function() {
	$(".js-banner-slider").slick({
		arrows: false,
		dots: true,
 		vertical:true,
 		customPaging: function () {
      return '<a class="banner-slider__dot"></a>';
    },
	});

	$('.my-works__content').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			// titleSrc: function(item) {
			// 	return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			// }
		},
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

	$(".my-works__item").slice(4).hide()
	$(".btn--loadmore").click(function(e) {
		e.preventDefault();
		$(".my-works__item:hidden").slideDown();
		$(this).hide()
	});

	$(".scroll").click(function (){
		var dest = $(this).attr("href");
          $('html, body').animate({
              scrollTop: $(dest).offset().top
          }, 1000);
      });

	new WOW().init();

	$('.header-main-nav .main-nav__btn').click(function() {
		$(this).closest('.main-nav').toggleClass('show')
		$(this).next().slideToggle();
	})

	$('.footer-main-nav .main-nav__btn').click(function() {
		$(this).closest('.main-nav').toggleClass('show')
		$(this).next().slideToggle();
	})

})