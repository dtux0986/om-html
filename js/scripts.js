'use strict';

(function ($) {

	/**
	 * Add 'mobile' class on Responsive Mode
	 * @type {Window}
	 */
	$(window).on('load resize', function () {

		var viewportwidth = window.outerWidth;

		var siteHeader = $('.site-header');

		var isMobile = siteHeader.hasClass('mobile');

		if (viewportwidth < 1008) {
			if (!isMobile) {
				siteHeader.addClass('mobile');
			}
		} else {
			if (isMobile) {
				siteHeader.removeClass('mobile');
			}
		}
	});

	$(document).ready(function () {

		/**
		 * Custom ScrollBar in Mobile Navigation
		 * @type {Window}
		 */
		$(".c-mobile-navigation").mCustomScrollbar({
			mouseWheelPixels: 200,
			scrollInertia: 900
		});

		/**
		 * Sticky Menu
		 * @type {Window}
		 */
		var stickyNavigation = $('.c-main-navigation').offset().top;

		/**
		 * Compare scrollTop position to add .sticky class
		 */
		var buildmag_need_add_sticky = function(){
			var scrollTop = $(window).scrollTop();
			
			if (scrollTop - stickyNavigation > 750) {
				$('.c-main-navigation').addClass('sticky');
			} else {
				$('.c-main-navigation').removeClass('sticky');
			}
		}

		/**
		 * Detect scrolling up or down, to add .sticky class
		 */
		var stickyNav = function () {
			if ( typeof stickyNav.x == 'undefined' ) {
				stickyNav.x = window.pageXOffset;
				stickyNav.y = window.pageYOffset;
			};
			
			var diffX = stickyNav.x - window.pageXOffset;
			var diffY = stickyNav.y - window.pageYOffset;
			
		
			if(diffX < 0) {
				// Scroll right
			}else if( diffX > 0 ) {
				// Scroll left
			}else if( diffY < 0 ) {					
				// Scroll down
				if($('body').hasClass('sticky-style-2')){
					$('.c-main-navigation').removeClass('sticky');
				} else {
					buildmag_need_add_sticky();
				}
			}else if( diffY > 0 ) {					
				// Scroll up				

				buildmag_need_add_sticky();				
			}else {
				// First scroll event
			}

			stickyNav.x = window.pageXOffset;
			stickyNav.y = window.pageYOffset;
		};

		if($('body').hasClass('sticky-enabled')){
			$(window).on('scroll', function () {
				stickyNav();
			});
		}


		/**
		 * Off-Canvas Init
		 */
		var wrapperEl = $('.c-wrapper'),
				openbtn = $('#btn-open'),
				closebtn = $('#btn-close');

		openbtn.click(function () {
			wrapperEl.addClass('off-canvas');
		});

		closebtn.click(function () {
			wrapperEl.removeClass('off-canvas');
		});


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

		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'
		});

		$('.slider-nav').each(function(){
			$(this).slick({
				slidesToShow: $(this).attr('data-count') ? $(this).attr('data-count') - 1 : 3,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				variableWidth: true,
				dots: true,
				centerMode: true,
				focusOnSelect: true,
				lazyLoad: 'progressive'
			});
		});

		$('.c-testimonials').imagesLoaded(function () {
			$('.c-testimonials.style-1 .block-group').slick({
				autoplay: true,
				autoplaySpeed: 2000,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				dots: true,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});

		$('.c-testimonials').imagesLoaded(function () {
			$('.c-testimonials.style-2 .block-group').slick({
				autoplay: true,
				autoplaySpeed: 2000,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: true
			});
		});

		$('.c-testimonials').imagesLoaded(function () {
			$('.c-testimonials.style-3 .block-group').slick({
				autoplay: true,
				autoplaySpeed: 2000,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: true
			});
		});

		/**
		 * AOS Animate Init
		 */
		$(document).imagesLoaded(function () {
			AOS.init();
		});
	});

	/**
	 * Shuffle Init
	 */
	var Shuffle = window.shuffle;

	var Demo = function (element) {

		this.element = element;

		// Log out events.
		this.addShuffleEventListeners();

		var sizer = element.querySelector('.sizer');

		if (typeof sizer !== null) {
			this.shuffle = new Shuffle(element, {
				itemSelector: '.block',
				sizer: sizer
			});
		}

		this._activeFilters = [];

		this.addFilterButtons();
		this.addSorting();
		this.addSearchFilter();

		this.mode = 'exclusive';
	};

	Demo.prototype.toArray = function (arrayLike) {
		return Array.prototype.slice.call(arrayLike);
	};
	Demo.prototype.toggleMode = function () {
		if (this.mode === 'additive') {
			this.mode = 'exclusive';
		} else {
			this.mode = 'additive';
		}
	};
	Demo.prototype.addShuffleEventListeners = function () {
		var handler = function (event) {
			//console.log('type: %s', event.type, 'detail:', event.detail);
		};

		if (this.addEventListener) {
			this.element.addEventListener(Shuffle.EventType.LAYOUT, handler, false);
			this.element.addEventListener(Shuffle.EventType.REMOVED, handler, false);
		}
	};
	Demo.prototype.addFilterButtons = function () {
		var options = document.querySelector('.filter-options');

		if (!options) {
			return;
		}

		var filterButtons = this.toArray(
				options.children
		);

		filterButtons.forEach(function (button) {
			button.addEventListener('click', this._handleFilterClick.bind(this), false);
		}, this);
	};
	Demo.prototype._handleFilterClick = function (evt) {
		var btn = evt.currentTarget;
		var isActive = btn.classList.contains('active');
		var btnGroup = btn.getAttribute('data-group');

		// You don't need _both_ of these modes. This is only for the demo.

		// For this custom 'additive' mode in the demo, clicking on filter buttons
		// doesn't remove any other filters.
		if (this.mode === 'additive') {
			// If this button is already active, remove it from the list of filters.
			if (isActive) {
				this._activeFilters.splice(this._activeFilters.indexOf(btnGroup));
			} else {
				this._activeFilters.push(btnGroup);
			}

			btn.classList.toggle('active');

			// Filter elements
			this.shuffle.filter(this._activeFilters);

			// 'exclusive' mode lets only one filter button be active at a time.
		} else {
			this._removeActiveClassFromChildren(btn.parentNode);

			var filterGroup;
			if (isActive) {
				btn.classList.remove('active');
				filterGroup = Shuffle.ALL_ITEMS;
			} else {
				btn.classList.add('active');
				filterGroup = btnGroup;
			}

			this.shuffle.filter(filterGroup);
		}
	};
	Demo.prototype._removeActiveClassFromChildren = function (parent) {
		var children = parent.children;
		for (var i = children.length - 1; i >= 0; i--) {
			children[i].classList.remove('active');
		}
	};
	Demo.prototype.addSorting = function () {
		var menu = document.querySelector('.sort-options');

		if (!menu) {
			return;
		}

		menu.addEventListener('change', this._handleSortChange.bind(this));
	};
	Demo.prototype._handleSortChange = function (evt) {
		var value = evt.target.value;
		var options = {};

		function sortByDate(element) {
			return element.getAttribute('data-created');
		}

		function sortByTitle(element) {
			return element.getAttribute('data-title').toLowerCase();
		}

		if (value === 'date-created') {
			options = {
				reverse: true,
				by: sortByDate,
			};
		} else if (value === 'title') {
			options = {
				by: sortByTitle,
			};
		}

		this.shuffle.sort(options);
	};
	Demo.prototype.addSearchFilter = function () {
		var searchInput = document.querySelector('.js-shuffle-search');

		if (!searchInput) {
			return;
		}

		searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
	};
	Demo.prototype._handleSearchKeyup = function (evt) {
		var searchText = evt.target.value.toLowerCase();

		this.shuffle.filter(function (element, shuffle) {

			// If there is a current filter applied, ignore elements that don't match it.
			if (shuffle.group !== Shuffle.ALL_ITEMS) {
				// Get the item's groups.
				var groups = JSON.parse(element.getAttribute('data-groups'));
				var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;

				// Only search elements in the current group
				if (!isElementInCurrentGroup) {
					return false;
				}
			}

			var titleElement = element.querySelector('.item-title');
			var titleText = titleElement.textContent.toLowerCase().trim();

			return titleText.indexOf(searchText) !== -1;
		});
	};

	document.addEventListener('DOMContentLoaded', function () {

		var blockShuffle = document.getElementById('block-shuffle');

		if (blockShuffle != null) {
			window.demo = new Demo(blockShuffle);
		}
	});

	/**
	 * Progress Bar Init
	 */

	var ID1 = document.getElementById('round-1');
	var ID2 = document.getElementById('round-2');
	var ID3 = document.getElementById('round-3');
	var ID4 = document.getElementById('round-4');

	if (ID1 && ID2 && ID3 && ID4) {

		var round1 = new ProgressBar.Circle(ID1, {
			color: '#fff',
			strokeWidth: 8,
			trailWidth: 8,
			trailColor: '#32211c',
			easing: 'easeInOut',
			duration: 2000,
			text: {
				autoStyleContainer: false
			},
			from: {color: '#32211c', width: 8},
			to: {color: '#ffd417', width: 8},

			step: function (state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText(value);
				}

			}
		});

		var round2 = new ProgressBar.Circle(ID2, {
			color: '#fff',
			strokeWidth: 8,
			trailWidth: 8,
			trailColor: '#32211c',
			easing: 'easeInOut',
			duration: 2000,
			text: {
				autoStyleContainer: false
			},
			from: {color: '#32211c', width: 8},
			to: {color: '#ffd417', width: 8},

			step: function (state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText(value);
				}

			}
		});

		var round3 = new ProgressBar.Circle(ID3, {
			color: '#fff',
			strokeWidth: 8,
			trailWidth: 8,
			trailColor: '#32211c',
			easing: 'easeInOut',
			duration: 2000,
			text: {
				autoStyleContainer: false
			},
			from: {color: '#32211c', width: 8},
			to: {color: '#ffd417', width: 8},

			step: function (state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText(value);
				}

			}
		});

		var round4 = new ProgressBar.Circle(ID4, {
			color: '#fff',
			strokeWidth: 8,
			trailWidth: 8,
			trailColor: '#32211c',
			easing: 'easeInOut',
			duration: 2000,
			text: {
				autoStyleContainer: false
			},
			from: {color: '#32211c', width: 8},
			to: {color: '#ffd417', width: 8},

			step: function (state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText(value);
				}
			}

		});

		var fontFamily = '"Raleway", Helvetica, sans-serif';

		var fontSize = "36px";

		round1.text.style.fontFamily = fontFamily;
		round1.text.style.fontSize = fontSize;

		round2.text.style.fontFamily = fontFamily;
		round2.text.style.fontSize = fontSize;

		round3.text.style.fontFamily = fontFamily;
		round3.text.style.fontSize = fontSize;

		round4.text.style.fontFamily = fontFamily;
		round4.text.style.fontSize = fontSize;

		var section = $(ID1);

		$(document).bind('scroll', function (ev) {
			var scrollOffset = $(document).scrollTop();
			var containerOffset = section.offset().top - window.innerHeight;
			if (scrollOffset > containerOffset) {
				round1.animate(0.8);
				round2.animate(0.95);
				round3.animate(0.9);
				round4.animate(0.85);
				$(document).unbind('scroll');
			}
		});
	}

	var Line1 = document.getElementById('line-1');
	var Line2 = document.getElementById('line-2');
	var Line3 = document.getElementById('line-3');
	var Line4 = document.getElementById('line-4');

	if (Line1 && Line2 && Line3 && Line4) {

		var bar1 = new ProgressBar.Line(Line1, {
			strokeWidth: 2,
			easing: 'easeInOut',
			duration: 1400,
			color: '#DA5938',
			trailColor: '#eee',
			trailWidth: 0.1,

			svgStyle: {
				width: '100%',
				height: '100%'
			},

			text: {
				style: {
					color: '#DA5938',
					position: 'absolute',
					right: '0',
					top: '30px',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},

			step: function (state, bar1) {
				bar1.setText(Math.round(bar1.value() * 100));
			}
		});

		bar1.path.style.strokeLinecap = 'round';

		var bar2 = new ProgressBar.Line(Line2, {
			strokeWidth: 2,
			easing: 'easeInOut',
			duration: 1400,
			color: '#6BBA9D',
			trailColor: '#eee',
			trailWidth: 0.1,

			svgStyle: {
				width: '100%',
				height: '100%'
			},

			text: {
				style: {
					color: '#6BBA9D',
					position: 'absolute',
					right: '0',
					top: '30px',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},

			step: function (state, bar2) {
				bar2.setText(Math.round(bar2.value() * 100));
			}
		});


		bar2.path.style.strokeLinecap = 'round';

		var bar3 = new ProgressBar.Line(Line3, {
			strokeWidth: 2,
			easing: 'easeInOut',
			duration: 1400,
			color: '#137FA3',
			trailColor: '#eee',
			trailWidth: 0.1,

			svgStyle: {
				width: '100%',
				height: '100%'
			},

			text: {
				style: {
					color: '#137FA3',
					position: 'absolute',
					right: '0',
					top: '30px',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},

			step: function (state, bar3) {
				bar3.setText(Math.round(bar3.value() * 100));
			}
		});

		bar3.path.style.strokeLinecap = 'round';

		var bar4 = new ProgressBar.Line(Line4, {
			strokeWidth: 2,
			easing: 'easeInOut',
			duration: 1400,
			color: '#EBBD36',
			trailColor: '#eee',
			trailWidth: 0.1,

			svgStyle: {
				width: '100%',
				height: '100%'
			},

			text: {
				style: {
					color: '#EBBD36',
					position: 'absolute',
					right: '0',
					top: '30px',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},

			step: function (state, bar4) {
				bar4.setText(Math.round(bar4.value() * 100));
			}
		});

		bar4.path.style.strokeLinecap = 'round';

		var sectionLine = $(Line1);

		$(document).bind('scroll', function (ev) {
			var scrollOffset = $(document).scrollTop();
			var containerOffset = sectionLine.offset().top - window.innerHeight;
			if (scrollOffset > containerOffset) {
				bar1.animate(0.8);
				bar2.animate(0.9);
				bar3.animate(1.0);
				bar4.animate(0.9);
				$(document).unbind('scroll');
			}
		});
	}

})
(jQuery);