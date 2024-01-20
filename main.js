/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Carousel.js":
/*!************************************!*\
  !*** ./src/components/Carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel.js */ "./src/components/Carousel.js");
/* harmony import */ var _components_ResponsiveLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ResponsiveLink.js */ "./src/components/ResponsiveLink.js");



var carouselAbout = new _components_Carousel_js__WEBPACK_IMPORTED_MODULE_1__.Carousel('.carousel__track-about', '.carousel__button-about.carousel__button_type_left', '.carousel__button-about.carousel__button_type_right', '.carousel__dots-about');
var carouselPlans = new _components_Carousel_js__WEBPACK_IMPORTED_MODULE_1__.Carousel('.carousel__track-plans', '.carousel__button-plans.carousel__button_type_left', '.carousel__button-plans.carousel__button_type_right', '.carousel__dots-plans');
carouselAbout.startAutoSwipe(3000); // Auto-swipe every 3 seconds
carouselPlans.startAutoSwipe(3000);
new _components_ResponsiveLink_js__WEBPACK_IMPORTED_MODULE_2__.ResponsiveLink('.link__call', 'tel:+79184087741', '#contacts', 600);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map