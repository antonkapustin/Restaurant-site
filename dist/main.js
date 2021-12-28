"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 257:
/*!*********************!*\
  !*** ./main/app.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ 502);\n\nvar pictures = [\"assets/restaurant.png\", \"assets/restaurant_servers.jpeg\", \"assets/hi.jpeg\", \"assets/eat.jpeg\"];\nvar slider = new _slider__WEBPACK_IMPORTED_MODULE_0__.BackgroundSlider(pictures);\n\n//# sourceURL=webpack:///./main/app.ts?");

/***/ }),

/***/ 502:
/*!************************!*\
  !*** ./main/slider.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BackgroundSlider\": () => (/* binding */ BackgroundSlider)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar BackgroundSlider = /*#__PURE__*/function () {\n  function BackgroundSlider(data) {\n    _classCallCheck(this, BackgroundSlider);\n\n    this.data = data;\n    this.render();\n  }\n\n  _createClass(BackgroundSlider, [{\n    key: \"render\",\n    value: function render() {\n      document.body.style.backgroundImage = \"url(\".concat(this.data[0], \")\");\n      this.onTimeOut();\n    }\n  }, {\n    key: \"onTimeOut\",\n    value: function onTimeOut() {\n      var _this = this;\n\n      var num = 0;\n      setInterval(function () {\n        if (num === _this.data.length - 1) {\n          num = 0;\n          document.body.style.backgroundImage = \"url(\".concat(_this.data[num], \")\");\n        } else {\n          num++;\n          document.body.style.backgroundImage = \"url(\".concat(_this.data[num], \")\");\n          console.log(num);\n        }\n      }, 5000);\n    }\n  }]);\n\n  return BackgroundSlider;\n}();\n\n//# sourceURL=webpack:///./main/slider.ts?");

/***/ }),

/***/ 130:
/*!**************************!*\
  !*** ./main/styles.less ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./main/styles.less?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(257), __webpack_exec__(130));
/******/ }
]);