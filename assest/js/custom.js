
/*--------------Devices Setting------------------*/
$('.btn-ds').on('click', function () {
	$('.btn-ds').removeClass('active');
	$(this).addClass('active');
	var frameClasses = document.querySelectorAll('.btn-ds');
	frameClasses.forEach(setFrameAttr);
	function setFrameAttr(item, index) {
		var frClassAll = $(item).attr('data-frame');
		$('.phoneWrapper').removeClass(frClassAll);
	}
	var frameClass = $(this).attr('data-frame');
	$('.phoneWrapper').addClass(frameClass);
});

$('.btn-cs').on('click', function () {
	$('.btn-cs').removeClass('active');
	$(this).addClass('active');
	var frameClasses = document.querySelectorAll('.btn-cs');
	frameClasses.forEach(setFrameAttr);
	function setFrameAttr(item, index) {
		var frClassAll = $(item).attr('data-frame');
		$('.phoneWrapper').removeClass(frClassAll);
	}
	var frameClass = $(this).attr('data-frame');
	$('.phoneWrapper').addClass(frameClass);
});

$('.size-list li').on('click', function () {
	$('.size-list li').removeClass('active');
	$(this).addClass('active');
});

/*-------------Slider Section------------------*/
$(".inner-bottom-sec-full").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 1000,
	dots: false,
	arrows: true,
	nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
	prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
});