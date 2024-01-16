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
  function Carousel(trackSelector, leftButtonSelector, rightButtonSelector) {
    var _this = this;
    _classCallCheck(this, Carousel);
    this.slideIndex = 0;
    this.track = document.querySelector(trackSelector);
    this.slides = Array.from(this.track.children);
    this.totalSlides = this.slides.length;
    this.leftButton = document.querySelector(leftButtonSelector);
    this.rightButton = document.querySelector(rightButtonSelector);
    this.leftButton.addEventListener('click', function () {
      return _this.move(-1);
    });
    this.rightButton.addEventListener('click', function () {
      return _this.move(1);
    });
    this.startX = 0;
    this.track.addEventListener('touchstart', function (e) {
      return _this.startSwipe(e);
    });
    this.track.addEventListener('touchmove', function (e) {
      return _this.moveSwipe(e);
    });
    this.track.addEventListener('touchend', function () {
      return _this.endSwipe();
    });
    this.updateSlides();
  }
  _createClass(Carousel, [{
    key: "startSwipe",
    value: function startSwipe(e) {
      this.startX = e.touches[0].clientX;
    }
  }, {
    key: "moveSwipe",
    value: function moveSwipe(e) {
      var currentX = e.touches[0].clientX;
      var diffX = this.startX - currentX;
      if (diffX > 0) {
        // Swiped left
        this.move(1);
      } else if (diffX < 0) {
        // Swiped right
        this.move(-1);
      }
    }
  }, {
    key: "endSwipe",
    value: function endSwipe() {
      this.startX = 0;
    }
  }, {
    key: "move",
    value: function move(n) {
      this.slideIndex += n;
      if (this.slideIndex < 0) {
        this.slideIndex = this.totalSlides - 1;
      } else if (this.slideIndex >= this.totalSlides) {
        this.slideIndex = 0;
      }
      this.updateSlides();
    }
  }, {
    key: "updateSlides",
    value: function updateSlides() {
      var _this2 = this;
      this.slides.forEach(function (slide, index) {
        slide.style.display = index === _this2.slideIndex ? 'block' : 'none';
      });
    }
  }]);
  return Carousel;
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


var carouselAbout = new _components_Carousel_js__WEBPACK_IMPORTED_MODULE_1__.Carousel('.carousel__track-about', '.carousel__button-about.carousel__button_type_left', '.carousel__button-about.carousel__button_type_right');
var carouselPlans = new _components_Carousel_js__WEBPACK_IMPORTED_MODULE_1__.Carousel('.carousel__track-plans', '.carousel__button-plans.carousel__button_type_left', '.carousel__button-plans.carousel__button_type_right');
})();

/******/ })()
;
//# sourceMappingURL=main.js.map