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

$(document).ready(function () {

	/**
	 * SmoothScroll
	 */

	OM.smoothscroll();

	/**
	 * Parallax
	 */

	OM.parallax();
});

export default OM;