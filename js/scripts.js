'use strict';

(function ($) {

	$(document).ready(function () {

		/**
		 * Parallax Init
		 */
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: "onEnter",
				duration: "200%"
			}
		});

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#parallaxDownloadParent"})
				.setTween("#parallaxDownloadParent > div", {y: "70%", ease: Linear.easeNone})
				.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#parallaxPageHeaderParent"})
				.setTween("#parallaxPageHeaderParent > div", {y: "100%", ease: Linear.easeNone})
				.addTo(controller);

		/**
		 * Slick Slider Init
		 */
		$('.c-post-slider').imagesLoaded(function () {
			$('.c-post-slider').slick({
				lazyLoad: 'ondemand'
			});
		});

	});

})
(jQuery);