/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/basic.js":
/*!**********************!*\
  !*** ./src/basic.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Basic; });\nclass Basic {\r\n    constructor() {\r\n        this.colors = ['#00F7FF', '#FFFF00', '#FF0054'];\r\n        this.elements = {\r\n            backgroundContainer: '.background-container',\r\n            backgroundContainerUp: '.up',\r\n            backgroundContainerRight: '.right',\r\n            backgroundContainerDown: '.down',\r\n            backgroundContainerLeft: '.left',\r\n\r\n            hamburgerIcon: '.hamburger-icon',\r\n            hamburgerMenu: '.hamburger-menu',\r\n            hamburgerIconContainer: '.hamburger-icon-container',\r\n            hamburgerSearch: '.hamburger-search',\r\n\r\n            navIcon: '.nav-icon',\r\n            searchMenu: '.search-menu',\r\n            searchMenuClose: '.search-menu-close',\r\n            searchMenuCloseContainer: '.search-menu-close-container',\r\n            searchInput: '.search-input',\r\n\r\n            mainContainer: '.main-container'\r\n        };\r\n    }\r\n\r\n    getRandomColor() {\r\n        const randomNumber = Math.floor(Math.random() * 3);\r\n        return this.colors[randomNumber];\r\n    };\r\n\r\n    getRandomImage() {\r\n        const randomNumber = Math.floor(Math.random() * 6);\r\n        return `url(../src/assets/img/bg${randomNumber}.jpg)`;\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/basic.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _basic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic.js */ \"./src/basic.js\");\n/* harmony import */ var _visualController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualController.js */ \"./src/visualController.js\");\n/* harmony import */ var _uiController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiController.js */ \"./src/uiController.js\");\n/* harmony import */ var _omdbController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./omdbController.js */ \"./src/omdbController.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst basic = new _basic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst visual = new _visualController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst ui = new _uiController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nconst omdb = new _omdbController_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n\r\nconst onLoad = e => {\r\n    e.preventDefault();\r\n\r\n    //generate a random color to be applied in the border\r\n    const randomColor = basic.getRandomColor()\r\n\r\n    //apply the random color to the ui\r\n    visual.applyBorderColor(randomColor);\r\n\r\n    //generate random image for the background\r\n    const randomImage = basic.getRandomImage();\r\n\r\n    //apply the random image to te UI\r\n    visual.applyBackgroundImage(randomImage);\r\n\r\n};\r\n\r\nconst hamburgerClicked = e => {\r\n    e.preventDefault();\r\n\r\n    //change classes on menu and icon\r\n    visual.applyHamburgerClasses()\r\n};\r\n\r\nconst searchClicked = e => {\r\n    e.preventDefault();\r\n\r\n    visual.applySearchClasses();\r\n};\r\n\r\nconst searchCloseClicked = e => {\r\n    e.preventDefault();\r\n\r\n    visual.removeSearchClasses();\r\n};\r\n\r\n\r\n\r\nwindow.addEventListener('load', onLoad);\r\n\r\ndocument.querySelector(basic.elements.hamburgerIconContainer).addEventListener('click', hamburgerClicked);\r\n\r\n[basic.elements.navIcon, basic.elements.hamburgerSearch].forEach(current => document.querySelector(current).addEventListener('click', searchClicked));\r\n\r\ndocument.querySelector(basic.elements.searchMenuCloseContainer).addEventListener('click', searchCloseClicked);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/omdbController.js":
/*!*******************************!*\
  !*** ./src/omdbController.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Omdb; });\nclass Omdb {\r\n    constructor(){\r\n        this.key = '2744f713';\r\n    }\r\n\r\n     async searchOnOmdb(searchInput) {\r\n        const searchResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=${searchInput}`)\r\n        const parsedResponse = await searchResponse.json();\r\n        \r\n        return parsedResponse;\r\n    };\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/omdbController.js?");

/***/ }),

/***/ "./src/uiController.js":
/*!*****************************!*\
  !*** ./src/uiController.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UI; });\n/* harmony import */ var _basic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.js */ \"./src/basic.js\");\n\r\n\r\nconst basic = new _basic_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\n\r\n\r\nclass UI {\r\n    constructor() {\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/uiController.js?");

/***/ }),

/***/ "./src/visualController.js":
/*!*********************************!*\
  !*** ./src/visualController.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Visual; });\n/* harmony import */ var _basic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.js */ \"./src/basic.js\");\n\r\n\r\nconst basic = new _basic_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\nconst ease = (t, b, c, d) => {\r\n    return c*t/d + b;\r\n};\r\n\r\nclass Visual {\r\n    constructor() {\r\n        \r\n    }\r\n\r\n    applyBorderColor(color) {\r\n        document.querySelector(basic.elements.backgroundContainerUp).style.backgroundColor = color;\r\n        document.querySelector(basic.elements.backgroundContainerRight).style.backgroundColor = color;\r\n        document.querySelector(basic.elements.backgroundContainerDown).style.backgroundColor = color;\r\n        document.querySelector(basic.elements.backgroundContainerLeft).style.backgroundColor = color;\r\n    };\r\n\r\n    applyBackgroundImage(url) {\r\n        document.querySelector(basic.elements.backgroundContainer).style.backgroundImage = `${url}`;\r\n    };\r\n\r\n    applyHamburgerClasses() {\r\n        document.querySelector(basic.elements.hamburgerMenu).classList.toggle('open');\r\n        document.querySelector(basic.elements.hamburgerIconContainer).classList.toggle('open');\r\n    };\r\n\r\n    applySearchClasses() {\r\n        document.querySelector(basic.elements.searchMenu).classList.remove('open');\r\n        document.querySelector(basic.elements.searchMenu).classList.add('open');\r\n        document.querySelector(basic.elements.searchInput).focus();\r\n    };\r\n\r\n    removeSearchClasses() {\r\n        document.querySelector(basic.elements.searchMenu).classList.remove('open');\r\n    };\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/visualController.js?");

/***/ })

/******/ });