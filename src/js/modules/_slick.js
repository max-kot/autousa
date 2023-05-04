import "../../../node_modules/slick-carousel/slick/slick.js";
import $ from "../../../node_modules/jquery/dist/jquery.js";
$(function () {
	$('.gallery__slider').slick({
		slidesToShow: 3,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
})