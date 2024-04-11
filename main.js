/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Carousel.js":
/*!************************************!*\
  !*** ./src/components/Carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Carousel = /*#__PURE__*/function () {
  function Carousel(trackSelector, leftButtonSelector, rightButtonSelector, dotsContainerSelector) {
    var _this = this;
    _classCallCheck(this, Carousel);
    this.slideIndex = 0;
    this.track = document.querySelector(trackSelector);
    this.slides = Array.from(this.track.children);
    this.totalSlides = this.slides.length;
    this.leftButton = document.querySelector(leftButtonSelector);
    this.rightButton = document.querySelector(rightButtonSelector);
    this.dotsContainer = document.querySelector(dotsContainerSelector);
    this.leftButton.addEventListener('click', function () {
      _this.move(-1);
      _this.stopAutoSwipe();
    });
    this.rightButton.addEventListener('click', function () {
      _this.move(1);
      _this.stopAutoSwipe();
    });
    this.createDots();
    this.updateSlides();
  }
  _createClass(Carousel, [{
    key: "createDots",
    value: function createDots() {
      var _this2 = this;
      this.slides.forEach(function (_, i) {
        var dot = document.createElement('div');
        dot.classList.add('carousel__dot');
        if (i === _this2.slideIndex) {
          dot.classList.add('carousel__dot_type_active');
        }
        dot.addEventListener('click', function () {
          _this2.moveTo(i);
          _this2.stopAutoSwipe();
        });
        _this2.dotsContainer.appendChild(dot);
      });
    }
  }, {
    key: "moveTo",
    value: function moveTo(i) {
      this.slideIndex = i;
      this.updateSlides();
    }
  }, {
    key: "updateSlides",
    value: function updateSlides() {
      var _this3 = this;
      this.slides.forEach(function (slide, i) {
        slide.style.display = i === _this3.slideIndex ? 'block' : 'none';
      });
      Array.from(this.dotsContainer.children).forEach(function (dot, i) {
        dot.classList.toggle('carousel__dot_type_active', i === _this3.slideIndex);
        dot.classList.toggle('carousel__dot_type_near', Math.abs(i - _this3.slideIndex) === 1);
      });
    }
  }, {
    key: "move",
    value: function move(n) {
      this.slideIndex += n;
      if (this.slideIndex > this.slides.length - 1) {
        this.slideIndex = 0;
      }
      if (this.slideIndex < 0) {
        this.slideIndex = this.slides.length - 1;
      }
      this.updateSlides();
    }
  }, {
    key: "startAutoSwipe",
    value: function startAutoSwipe(interval) {
      var _this4 = this;
      this.autoSwipeInterval = setInterval(function () {
        _this4.move(1);
      }, interval);
    }
  }, {
    key: "stopAutoSwipe",
    value: function stopAutoSwipe() {
      clearInterval(this.autoSwipeInterval);
    }
  }]);
  return Carousel;
}();

/***/ }),

/***/ "./src/components/ResponsiveLink.js":
/*!******************************************!*\
  !*** ./src/components/ResponsiveLink.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveLink: () => (/* binding */ ResponsiveLink)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ResponsiveLink = /*#__PURE__*/function () {
  function ResponsiveLink(selector, mobileHref, desktopHref, breakpoint) {
    _classCallCheck(this, ResponsiveLink);
    this.link = document.querySelectorAll(selector);
    this.mobileHref = mobileHref;
    this.desktopHref = desktopHref;
    this.breakpoint = breakpoint;
    this.updateHref = this.updateHref.bind(this);
    window.addEventListener('resize', this.updateHref);
    this.updateHref();
  }
  _createClass(ResponsiveLink, [{
    key: "updateHref",
    value: function updateHref() {
      var _this = this;
      var width = window.innerWidth;
      this.link.forEach(function (link) {
        if (width < _this.breakpoint) {
          link.setAttribute('href', _this.mobileHref);
        } else {
          link.setAttribute('href', _this.desktopHref);
        }
      });
    }
  }]);
  return ResponsiveLink;
}();

/***/ }),

/***/ "./src/utils/analytics.js":
/*!********************************!*\
  !*** ./src/utils/analytics.js ***!
  \********************************/
/***/ (() => {

var script = document.createElement('script');
script.type = 'text/javascript';
script.innerHTML = "\n    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n    m[i].l=1*new Date();\n    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n    (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n\n    ym(96930213, \"init\", {\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true,\n        webvisor:true\n    });\n";
document.head.appendChild(script);
var noscript = document.createElement('noscript');
noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/96930213" style="position:absolute; left:-9999px;" alt="" /></div>';
document.head.appendChild(noscript);

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-fit-images/dist/ofi.common-js.js":
/*!**************************************************************!*\
  !*** ./node_modules/object-fit-images/dist/ofi.common-js.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
/*! npm.im/object-fit-images 3.2.4 */


var OFI = 'bfred-it:object-fit-images';
var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
var testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();
var supportsObjectFit = 'object-fit' in testImg.style;
var supportsObjectPosition = 'object-position' in testImg.style;
var supportsOFI = 'background-size' in testImg.style;
var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
var nativeGetAttribute = testImg.getAttribute;
var nativeSetAttribute = testImg.setAttribute;
var autoModeEnabled = false;

function createPlaceholder(w, h) {
	return ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E");
}

function polyfillCurrentSrc(el) {
	if (el.srcset && !supportsCurrentSrc && window.picturefill) {
		var pf = window.picturefill._;
		// parse srcset with picturefill where currentSrc isn't available
		if (!el[pf.ns] || !el[pf.ns].evaled) {
			// force synchronous srcset parsing
			pf.fillImg(el, {reselect: true});
		}

		if (!el[pf.ns].curSrc) {
			// force picturefill to parse srcset
			el[pf.ns].supported = false;
			pf.fillImg(el, {reselect: true});
		}

		// retrieve parsed currentSrc, if any
		el.currentSrc = el[pf.ns].curSrc || el.src;
	}
}

function getStyle(el) {
	var style = getComputedStyle(el).fontFamily;
	var parsed;
	var props = {};
	while ((parsed = propRegex.exec(style)) !== null) {
		props[parsed[1]] = parsed[2];
	}
	return props;
}

function setPlaceholder(img, width, height) {
	// Default: fill width, no height
	var placeholder = createPlaceholder(width || 1, height || 0);

	// Only set placeholder if it's different
	if (nativeGetAttribute.call(img, 'src') !== placeholder) {
		nativeSetAttribute.call(img, 'src', placeholder);
	}
}

function onImageReady(img, callback) {
	// naturalWidth is only available when the image headers are loaded,
	// this loop will poll it every 100ms.
	if (img.naturalWidth) {
		callback(img);
	} else {
		setTimeout(onImageReady, 100, img, callback);
	}
}

function fixOne(el) {
	var style = getStyle(el);
	var ofi = el[OFI];
	style['object-fit'] = style['object-fit'] || 'fill'; // default value

	// Avoid running where unnecessary, unless OFI had already done its deed
	if (!ofi.img) {
		// fill is the default behavior so no action is necessary
		if (style['object-fit'] === 'fill') {
			return;
		}

		// Where object-fit is supported and object-position isn't (Safari < 10)
		if (
			!ofi.skipTest && // unless user wants to apply regardless of browser support
			supportsObjectFit && // if browser already supports object-fit
			!style['object-position'] // unless object-position is used
		) {
			return;
		}
	}

	// keep a clone in memory while resetting the original to a blank
	if (!ofi.img) {
		ofi.img = new Image(el.width, el.height);
		ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
		ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

		// preserve for any future cloneNode calls
		// https://github.com/bfred-it/object-fit-images/issues/53
		nativeSetAttribute.call(el, "data-ofi-src", el.src);
		if (el.srcset) {
			nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
		}

		setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

		// remove srcset because it overrides src
		if (el.srcset) {
			el.srcset = '';
		}
		try {
			keepSrcUsable(el);
		} catch (err) {
			if (window.console) {
				console.warn('https://bit.ly/ofi-old-browser');
			}
		}
	}

	polyfillCurrentSrc(ofi.img);

	el.style.backgroundImage = "url(\"" + ((ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"')) + "\")";
	el.style.backgroundPosition = style['object-position'] || 'center';
	el.style.backgroundRepeat = 'no-repeat';
	el.style.backgroundOrigin = 'content-box';

	if (/scale-down/.test(style['object-fit'])) {
		onImageReady(ofi.img, function () {
			if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
				el.style.backgroundSize = 'contain';
			} else {
				el.style.backgroundSize = 'auto';
			}
		});
	} else {
		el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
	}

	onImageReady(ofi.img, function (img) {
		setPlaceholder(el, img.naturalWidth, img.naturalHeight);
	});
}

function keepSrcUsable(el) {
	var descriptors = {
		get: function get(prop) {
			return el[OFI].img[prop ? prop : 'src'];
		},
		set: function set(value, prop) {
			el[OFI].img[prop ? prop : 'src'] = value;
			nativeSetAttribute.call(el, ("data-ofi-" + prop), value); // preserve for any future cloneNode
			fixOne(el);
			return value;
		}
	};
	Object.defineProperty(el, 'src', descriptors);
	Object.defineProperty(el, 'currentSrc', {
		get: function () { return descriptors.get('currentSrc'); }
	});
	Object.defineProperty(el, 'srcset', {
		get: function () { return descriptors.get('srcset'); },
		set: function (ss) { return descriptors.set(ss, 'srcset'); }
	});
}

function hijackAttributes() {
	function getOfiImageMaybe(el, name) {
		return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
	}
	if (!supportsObjectPosition) {
		HTMLImageElement.prototype.getAttribute = function (name) {
			return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
		};

		HTMLImageElement.prototype.setAttribute = function (name, value) {
			return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
		};
	}
}

function fix(imgs, opts) {
	var startAutoMode = !autoModeEnabled && !imgs;
	opts = opts || {};
	imgs = imgs || 'img';

	if ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {
		return false;
	}

	// use imgs as a selector or just select all images
	if (imgs === 'img') {
		imgs = document.getElementsByTagName('img');
	} else if (typeof imgs === 'string') {
		imgs = document.querySelectorAll(imgs);
	} else if (!('length' in imgs)) {
		imgs = [imgs];
	}

	// apply fix to all
	for (var i = 0; i < imgs.length; i++) {
		imgs[i][OFI] = imgs[i][OFI] || {
			skipTest: opts.skipTest
		};
		fixOne(imgs[i]);
	}

	if (startAutoMode) {
		document.body.addEventListener('load', function (e) {
			if (e.target.tagName === 'IMG') {
				fix(e.target, {
					skipTest: opts.skipTest
				});
			}
		}, true);
		autoModeEnabled = true;
		imgs = 'img'; // reset to a generic selector for watchMQ
	}

	// if requested, watch media queries for object-fit change
	if (opts.watchMQ) {
		window.addEventListener('resize', fix.bind(null, imgs, {
			skipTest: opts.skipTest
		}));
	}
}

fix.supportsObjectFit = supportsObjectFit;
fix.supportsObjectPosition = supportsObjectPosition;

hijackAttributes();

module.exports = fix;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel.js */ "./src/components/Carousel.js");
/* harmony import */ var _components_ResponsiveLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ResponsiveLink.js */ "./src/components/ResponsiveLink.js");
/* harmony import */ var _utils_analytics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/analytics.js */ "./src/utils/analytics.js");
/* harmony import */ var _utils_analytics_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_analytics_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);





var carouselAbout = new _components_Carousel_js__WEBPACK_IMPORTED_MODULE_1__.Carousel('.carousel__track-about', '.carousel__button-about.carousel__button_type_left', '.carousel__button-about.carousel__button_type_right', '.carousel__dots-about');
var carouselPlans = new _components_Carousel_js__WEBPACK_IMPORTED_MODULE_1__.Carousel('.carousel__track-plans', '.carousel__button-plans.carousel__button_type_left', '.carousel__button-plans.carousel__button_type_right', '.carousel__dots-plans');
carouselAbout.startAutoSwipe(3000); // Auto-swipe every 3 seconds
carouselPlans.startAutoSwipe(3000);
new _components_ResponsiveLink_js__WEBPACK_IMPORTED_MODULE_2__.ResponsiveLink('.link__call', 'tel:+79184087741', '#contacts', 600);
window.addEventListener('load', function () {
  document.documentElement.style.setProperty('--vh', "".concat(window.innerHeight / 100, "px"));
});
object_fit_images__WEBPACK_IMPORTED_MODULE_4___default()('.cover__image');
})();

/******/ })()
;
//# sourceMappingURL=main.js.map