'use strict';

import $ from 'jquery';

const om = {};

om.parallax = function () {
	let controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onEnter",
			duration: "200%"
		}
	});

	new ScrollMagic.Scene({triggerElement: "#o-parallax"})
			.setTween("#o-parallax > div", {y: "70%", ease: Linear.easeNone})
			.addTo(controller);
};

$(document).ready(function () {
	om.parallax();
});