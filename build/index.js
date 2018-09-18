(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@usertech/styled-utils", [], factory);
	else if(typeof exports === 'object')
		exports["@usertech/styled-utils"] = factory();
	else
		root["@usertech/styled-utils"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scomp", function() { return scomp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sget", function() { return sget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styledGet__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_compose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_compose__);



const sget = __WEBPACK_IMPORTED_MODULE_0__styledGet__["a" /* default */];
const scomp = __WEBPACK_IMPORTED_MODULE_1_ramda_compose___default.a;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_identity__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_identity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_identity__);



const prop = (path, modifierOrDefaultValue, modifierParam = __WEBPACK_IMPORTED_MODULE_1_lodash_identity___default.a) => {
	let modifier = modifierParam;
	let defaultValue = modifierOrDefaultValue;
	if (typeof modifierOrDefaultValue === 'function') {
		modifier = modifierOrDefaultValue;
		defaultValue = undefined;
	}
	return props => {
		const value = __WEBPACK_IMPORTED_MODULE_0_lodash_get___default()(props, path, defaultValue);
		if (!value) {
			return value;
		}
		return modifier(value);
	};
};

/* harmony default export */ __webpack_exports__["a"] = (prop);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash.get");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash.identity");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("ramda.compose");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map