'use strict';

import 'bootstrap';

import SmoothScroll from 'smoothscroll-for-websites';

import SM from './scrollmagic';

const OM = {};

OM.smoothscroll = function () {
	new SmoothScroll;
};

OM.parallax = function () {
	SM.parallax();
};

OM.activeMobileNavigation = function () {

	const getBody = $('body');
	const getHamburgerIcon = $('#hamburger-icon');
	const getMobileNavigation = $('#o-mobile-navigation');

	if (getHamburgerIcon) {
		getHamburgerIcon.on('click', function () {

			getMobileNavigation.toggleClass('active');
			getBody.toggleClass('mobile-navigation');

			return false;
		});
	}
};

OM.activeStickyNavigation = function () {

	const getSiteHeader = $("#masthead");
	const getSiteContent = $("#content");

	let lastScrollTop = 0;

	let delta = 1;

	$(document).scroll(function () {

		const nowScrollTop = $(document).scrollTop();

		if (getSiteHeader && getSiteContent) {

			const getSiteHeaderHeight = getSiteHeader.innerHeight();

			if (nowScrollTop - getSiteHeaderHeight > 1) {
				getSiteHeader.addClass("sticky").css("top", -getSiteHeaderHeight);
				getSiteContent.css("margin-top", getSiteHeaderHeight);

			} else if (nowScrollTop === 0) {
				getSiteHeader.removeClass("sticky");
				getSiteContent.css("margin-top", "");
			}

			if (nowScrollTop > 1 && Math.abs(lastScrollTop - nowScrollTop) >= delta) {

				if (nowScrollTop > lastScrollTop) {
					getSiteHeader.css("top", -getSiteHeaderHeight);

				} else {
					getSiteHeader.css("top", 0);
				}

				lastScrollTop = nowScrollTop;
			}
		}
	});
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
	OM.activeMobileNavigation();


	/**
	 * Sticky Navigation
	 */
	OM.activeStickyNavigation();
});

export default OM;