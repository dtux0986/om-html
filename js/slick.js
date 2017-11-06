'use strict';

import $ from 'jquery';

import 'slick-carousel';

const Carousel = {};

Carousel.testimonials = function () {

	const slider = '.o-testimonials__slider';

	$(slider).slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});
};

export default Carousel;