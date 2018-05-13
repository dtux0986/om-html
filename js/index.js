'use strict';

import 'bootstrap';

import SmoothScroll from 'smoothscroll-for-websites';
import Carousel from './slick';
import SM from './scrollmagic';

const OM = {};

OM.smoothscroll = function () {
	new SmoothScroll;
};

OM.parallax = function () {
	SM.parallax();
};

OM.showMobileNavigation = function () {

	const hamburgerIcon = "#hamburger-icon";

	if ($(hamburgerIcon)) {
		$(hamburgerIcon).on('click', function () {
			$(".o-mobile-navigation").toggleClass('active');
			return false;
		})
	}
};

$(document).ready(function () {

	/**
	 * SmoothScroll
	 */

	OM.smoothscroll();

	/**
	 * Parallax
	 */

	OM.parallax();


	/**
	 * Mobile Navigation
	 */

	OM.showMobileNavigation();
});

export default OM;