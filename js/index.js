'use strict';

(function($){

	$(document).ready(function () {
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: "onEnter",
				duration: "200%"
			}
		});

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#o-parallax"})
				.setTween("#o-parallax > div", {y: "70%", ease: Linear.easeNone})
				.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#o-parallax"})
				.setTween("#o-parallax > div", {y: "100%", ease: Linear.easeNone})
				.addTo(controller);
	});

})(jQuery);