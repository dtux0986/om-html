'use strict';

import $ from 'jquery';

import SmoothScroll from 'smoothscroll-for-websites';
import Carousel from './slick';
import SM from './scrollmagic';

const om = {};

om.smoothscroll = function () {
	new SmoothScroll;
};

om.carousel = function () {
	Carousel.testimonials();
};

om.parallax = function () {
	SM.parallax();
};

$(document).ready(function () {

	/**
	 * SmoothScroll
	 */

	om.smoothscroll();

	/**
	 * Parallax
	 */

	om.parallax();

	/**
	 * Carousel
	 */
	om.carousel();
});

export default om;