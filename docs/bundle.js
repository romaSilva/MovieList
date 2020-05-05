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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Berthold Akzidenz Grotesk Extended.otf */ \"./src/assets/fonts/Berthold Akzidenz Grotesk Extended.otf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/fonts/Akzidenz-grotesk-light.ttf */ \"./src/assets/fonts/Akzidenz-grotesk-light.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Sawarabi+Gothic&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    font-family: atf;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    font-family: atf-main;\\r\\n}\\r\\n\\r\\n/* *******************************Animations********************************* */\\r\\n\\r\\n@keyframes width-fill{\\r\\n    0%{\\r\\n        width: 0%;\\r\\n        height: 6px;\\r\\n    }\\r\\n    75%{\\r\\n        width: 100%;\\r\\n        height: 6px;\\r\\n    }\\r\\n    100%{\\r\\n        width: 100%;\\r\\n        height: 0px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes height-fill{\\r\\n    0%{\\r\\n        height: 0%;\\r\\n        width: 6px;\\r\\n    }\\r\\n    75%{\\r\\n        height: 100%;\\r\\n        width: 6px;\\r\\n    }\\r\\n    100%{\\r\\n        height: 100%;\\r\\n        width: 0px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/* @keyframes loader {\\r\\n    0%{\\r\\n        transform: rotate(0deg);\\r\\n    }\\r\\n    100%{\\r\\n        transform: rotate(360deg);\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes appear {\\r\\n    0%{\\r\\n        opacity: 0;\\r\\n    }\\r\\n    100%{\\r\\n        opacity: 1;\\r\\n    }\\r\\n} */\\r\\n\\r\\n/* ******************************General********************************** */\\r\\n\\r\\n* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml, body {\\r\\n    margin: 0;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    scroll-behavior: smooth;\\r\\n  }\\r\\n\\r\\n/* ******************************Background********************************** */\\r\\n\\r\\n.background-container {\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: cover;\\r\\n    background-position: top;\\r\\n}\\r\\n\\r\\n.background-container .up {\\r\\n    /* height: 6px;\\r\\n    width: 0%; */\\r\\n    position: absolute;\\r\\n    top: 0em;\\r\\n    left: 0;\\r\\n    animation: width-fill 2s;\\r\\n    z-index: 90;\\r\\n}\\r\\n\\r\\n.background-container .right {\\r\\n    /* height: 0%;\\r\\n    width: 6px; */\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    animation: height-fill 2s;\\r\\n    z-index: 90;\\r\\n}\\r\\n\\r\\n.background-container .down {\\r\\n    /* height: 6px;\\r\\n    width: 0%; */\\r\\n    position: absolute;\\r\\n    bottom: 0em;\\r\\n    right: 0;\\r\\n    animation: width-fill 2s;\\r\\n    z-index: 90;\\r\\n}\\r\\n\\r\\n.background-container .left {\\r\\n    /* height: 0%;\\r\\n    width: 6px; */\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    animation: height-fill 2s;\\r\\n    z-index: 90;\\r\\n}\\r\\n\\r\\n/* ******************************Header********************************** */\\r\\n\\r\\n.header {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    flex-wrap: nowrap;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n    height: 75px;\\r\\n    background-color: transparent;\\r\\n    width: auto;\\r\\n    padding-top: 10px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    margin: 0 1em;\\r\\n    font-family: 'Abril Fatface', cursive;\\r\\n    font-size: 2.3em;\\r\\n    /* text-shadow: -.8px -.8px 0 cyan, .8px .8px 0 rgb(235, 55, 109),.8px -.8px 0 yellow; */\\r\\n    color: white;\\r\\n    text-decoration: none;\\r\\n    /* border: 1px solid blue; */\\r\\n}\\r\\n\\r\\n.nav {\\r\\n    display: flex;\\r\\n    flex-grow: 1;\\r\\n    justify-content: flex-end;\\r\\n    align-items: center;\\r\\n    margin: 0 2em 0 2em;\\r\\n}\\r\\n\\r\\n.nav-item {\\r\\n    margin: 0 1.35em;\\r\\n    width: auto;\\r\\n    text-align: center;\\r\\n    font-family: 'atf', sans-serif;\\r\\n    text-decoration: none;\\r\\n    color: white;\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n.nav-item:hover {\\r\\n    border-bottom: .8px solid white;\\r\\n}\\r\\n\\r\\n.nav-icon {\\r\\n    margin: 0 1.35em;\\r\\n    width: 16px;\\r\\n    height: 16px;\\r\\n    background-color: transparent;\\r\\n    border-radius: 50%;\\r\\n    border: 1.8px solid white;\\r\\n    position: relative;\\r\\n    transform: rotate(-50deg);\\r\\n    align-self: start;\\r\\n}\\r\\n\\r\\n.nav-icon::after {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    width: 20%;\\r\\n    height: 55%;\\r\\n    background-color: white;\\r\\n    top: 100%;\\r\\n    left: 40%;\\r\\n}\\r\\n\\r\\n\\r\\n.nav-icon:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.hamburger-icon, .hamburger-icon-container, .hamburger-big-container, .hamburger-menu {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.search-menu {\\r\\n    position: fixed;\\r\\n    top: -100%;\\r\\n    left: 0;\\r\\n    height: 40vh;\\r\\n    width: 100%;\\r\\n    background-color: rgba(0, 0, 0, .94);\\r\\n    transition: all .5s ease;\\r\\n}\\r\\n\\r\\n.search-menu.open {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100vh;\\r\\n    width: 100%;\\r\\n    background-color: rgba(0, 0, 0, .94);\\r\\n    transition: all .5s ease;\\r\\n    z-index: 99;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    align-items: flex-end;\\r\\n}\\r\\n\\r\\n.search-menu-close-container {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.search-menu-close {\\r\\n    margin-top: 70px;\\r\\n    margin-right: 10px;\\r\\n    display: inline-block;\\r\\n    width: 35px;\\r\\n    height: 2px;\\r\\n    background-color: transparent;\\r\\n    transition: all .5s ease-in-out;\\r\\n}\\r\\n\\r\\n.search-menu-close::before,\\r\\n.search-menu-close::after {\\r\\n    content: '';\\r\\n    width: 35px;\\r\\n    height: 2px;\\r\\n    background-color: white;\\r\\n    display: inline-block;\\r\\n    transition: all .5s ease-in-out;\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n.search-menu-close::before {\\r\\n    transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.search-menu-close::after {\\r\\n    transform: rotate(-45deg);\\r\\n}\\r\\n\\r\\n.search-field {\\r\\n    width: 90%;\\r\\n    align-self: center;\\r\\n    margin: 20vh 0;\\r\\n    background-color: transparent;\\r\\n    border-bottom: white .8px solid;\\r\\n    height: 50px;\\r\\n    display: flex;\\r\\n    align-items: stretch;\\r\\n}\\r\\n\\r\\n.search-input {\\r\\n    flex-grow: 1;\\r\\n    background-color: transparent;\\r\\n    outline: none;\\r\\n    border: none;\\r\\n    color: white;\\r\\n    font-size: 30px;\\r\\n}\\r\\n\\r\\n.search-go {\\r\\n    height: 20px;\\r\\n    width: 20px;\\r\\n    border: solid white;\\r\\n    border-width: 0 2.8px 2.8px 0;\\r\\n    display: inline-block;\\r\\n    padding: 3px;\\r\\n    align-self: center;\\r\\n    transform: rotate(-45deg);\\r\\n    -webkit-transform: rotate(-45deg);\\r\\n    cursor: pointer;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.search-go::after {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    width: 2.8px;\\r\\n    height: 36px;\\r\\n    background-color: white;\\r\\n    transform: rotate(-45deg) translateX(9.6px) translateY(-8px);\\r\\n}\\r\\n\\r\\n\\r\\n/* ******************************Main********************************** */\\r\\n\\r\\n.main-container {\\r\\n    height: calc(100vh - 75px);\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    color: white;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.main-container-title {\\r\\n    color: white;\\r\\n    margin: 0;\\r\\n    max-width: 1070px;\\r\\n    position: absolute;\\r\\n    bottom: 70px;\\r\\n    left: 50px;\\r\\n    font-family: 'atf-main', sans-serif;\\r\\n    font-size: 60px;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n/* *******************************Articles********************************* */\\r\\n\\r\\n.articles-container {\\r\\n    margin: 80px 80px;\\r\\n}\\r\\n\\r\\n.article {\\r\\n    display: flex;\\r\\n    margin-bottom: 70px;\\r\\n}\\r\\n\\r\\n.img-container {\\r\\n    max-width: 650px;\\r\\n    width: 100%\\r\\n}\\r\\n\\r\\n.img-container img {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.content {\\r\\n    flex-grow: 1;\\r\\n    color: black;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin: 0 50px;\\r\\n    justify-content: flex-start;\\r\\n    max-width: 346px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.article-type {\\r\\n    font-family: 'atf', sans-serif;\\r\\n    text-transform: uppercase;\\r\\n    font-size: 17px;\\r\\n    letter-spacing: 2px;\\r\\n\\r\\n}\\r\\n\\r\\n.article-title {\\r\\n    font-family: 'atf-main', sans-serif;\\r\\n    font-size: 3.5vw;\\r\\n    margin: 0;\\r\\n    margin-top: 10px;\\r\\n    letter-spacing: 2px;\\r\\n    font-weight: 600;\\r\\n    max-height: 405px;\\r\\n}\\r\\n\\r\\n.article-title:hover {\\r\\n    color: grey;\\r\\n    transition: all .15s linear;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.read-container:hover {\\r\\n    transition: all .15s linear;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.read-container {\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    font-family: 'atf-main', sans-serif;\\r\\n    text-transform: uppercase;\\r\\n    font-size: 20px;\\r\\n    display: flex;\\r\\n    transform: translateX(35px);\\r\\n}\\r\\n\\r\\n.read-arrow {\\r\\n    height: 13px;\\r\\n    width: 13px;\\r\\n    border: solid black;\\r\\n    border-width: 0 1.5px 1.5px 0;\\r\\n    display: inline-block;\\r\\n    padding: 3px;\\r\\n    align-self: center;\\r\\n    transform: rotate(-45deg);\\r\\n    -webkit-transform: rotate(-45deg);\\r\\n    cursor: pointer;\\r\\n    position: relative;\\r\\n    margin-right: 30px;\\r\\n}\\r\\n\\r\\n.read-arrow::after {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    width: 1.5px;\\r\\n    height: 45px;\\r\\n    background-color: black;\\r\\n    transform:  rotate(-45deg) translateX(13px) translateY(-24px)\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/* *******************************Footer********************************* */\\r\\n\\r\\n.footer {\\r\\n    background-color: black;\\r\\n}\\r\\n\\r\\n.footer-container {\\r\\n    margin: 0 45px;\\r\\n    padding: 50px 0 20px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.footer-info, .footer-social, .footer-email {\\r\\n    margin-right: 140px;\\r\\n    margin-top: 0px;\\r\\n    margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.footer-info {\\r\\n   display: flex;\\r\\n   flex-direction: column;\\r\\n   justify-content: flex-start;\\r\\n   align-items: flex-start;\\r\\n   height: 100px;\\r\\n}\\r\\n\\r\\n.footer-info-item {\\r\\n    font-family: 'atf', sans-serif;\\r\\n    font-size: 14px;\\r\\n    text-decoration: none;\\r\\n    color: white;\\r\\n    height: 18px;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.footer-info-item:hover {\\r\\n    border-bottom: solid .8px white;\\r\\n}\\r\\n\\r\\n.footer-social {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    align-items: flex-start;\\r\\n    height: 100px;\\r\\n}\\r\\n\\r\\n.footer-social-title {\\r\\n    margin-top: 0;\\r\\n    font-family: 'atf', sans-serif;\\r\\n    text-transform: uppercase;\\r\\n    font-size: 14px;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.footer-social-icons {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.footer-social-icons i {\\r\\n    margin: 0 10px;\\r\\n    font-size: 13px;\\r\\n}\\r\\n\\r\\n.footer-social-icons i:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.footer-social-icons i:nth-child(1) {\\r\\n    margin-left: 0;\\r\\n}\\r\\n\\r\\n.footer-email {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    align-items: flex-start;\\r\\n    height: 100px;\\r\\n}\\r\\n\\r\\n.footer-email-title {\\r\\n    margin-top: 0;\\r\\n    font-family: 'atf', sans-serif;\\r\\n    font-weight: 300;\\r\\n    font-size: 15px;\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.footer-email-field {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    height: 50px;\\r\\n    width: 100%;\\r\\n    max-width: 500px;\\r\\n    justify-content: flex-start;\\r\\n    align-items: stretch;\\r\\n}\\r\\n\\r\\n.footer-email-input {\\r\\n    width: 100%;\\r\\n    max-width: 310px;\\r\\n    min-width: 180px;\\r\\n    outline: none;\\r\\n    background-color: transparent;\\r\\n    font-family: 'atf', sans-serif;\\r\\n    padding: 15px;\\r\\n    color: gray;\\r\\n    border: .8px white solid;\\r\\n}\\r\\n\\r\\n.footer-sign-up {\\r\\n    flex-grow: 1;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: white;\\r\\n    color: black;\\r\\n    text-transform: uppercase;\\r\\n    font-family: 'atf', sans-serif;\\r\\n    font-size: 13px;\\r\\n    min-width: 110px;\\r\\n    letter-spacing: 1px;\\r\\n    height: 50px;\\r\\n}\\r\\n\\r\\n.footer-sign-up:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n/* *******************************New Query 750px********************************* */\\r\\n\\r\\n\\r\\n@media screen and (max-width: 750px){\\r\\n\\r\\n    \\r\\n    /* ******************************Header********************************** */\\r\\n\\r\\n    .header {\\r\\n        height: 60px;\\r\\n    }\\r\\n\\r\\n    .logo {\\r\\n        font-size: 1.9em;\\r\\n    }\\r\\n\\r\\n    .nav {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .hamburger-big-container {\\r\\n        flex-grow: 1;\\r\\n        height: 45px;\\r\\n        margin-right: 1.5em;\\r\\n        position: relative;\\r\\n        display: inline-block;\\r\\n    } \\r\\n\\r\\n    .hamburger-icon-container {\\r\\n        width: 45px;\\r\\n        height: 45px;\\r\\n        z-index: 98;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        cursor: pointer;\\r\\n        position: absolute;\\r\\n        right: 0;\\r\\n    }\\r\\n\\r\\n    .hamburger-icon {\\r\\n        display: inline-block;\\r\\n        width: 35px;\\r\\n        height: 2px;\\r\\n        background-color: white;\\r\\n        transition: all .5s ease-in-out;\\r\\n    }\\r\\n\\r\\n    .hamburger-icon::before,\\r\\n    .hamburger-icon::after {\\r\\n        content: '';\\r\\n        width: 35px;\\r\\n        height: 2px;\\r\\n        background-color: white;\\r\\n        display: inline-block;\\r\\n        transition: all .5s ease-in-out;\\r\\n        position: absolute;\\r\\n    }\\r\\n\\r\\n    .hamburger-icon::before {\\r\\n        transform: translateY(-10px);\\r\\n        \\r\\n    }\\r\\n    .hamburger-icon::after {\\r\\n        transform: translateY(10px);\\r\\n    }\\r\\n\\r\\n    .hamburger-icon-container.open .hamburger-icon {\\r\\n        transform: translateX(-50px);\\r\\n        background-color: transparent;\\r\\n    }\\r\\n\\r\\n    .hamburger-icon-container.open .hamburger-icon::before {\\r\\n        transform: rotate(45deg) translate(35px, -35px);\\r\\n    }\\r\\n\\r\\n    .hamburger-icon-container.open .hamburger-icon::after {\\r\\n        transform: rotate(-45deg) translate(35px, 35px);\\r\\n    }\\r\\n\\r\\n    .hamburger-menu {\\r\\n        position: fixed;\\r\\n        top: 0;\\r\\n        left: 100%;\\r\\n        width: 100%;\\r\\n        height: 100vh;\\r\\n        background-color: rgba(0, 0, 0, .94);\\r\\n        z-index: 98;\\r\\n        flex-direction: column;\\r\\n        align-content: flex-start;\\r\\n        justify-content: flex-start;\\r\\n        transition: all .25s ease-in-out;\\r\\n        display: block;\\r\\n    }\\r\\n    \\r\\n    .hamburger-menu.open{\\r\\n        position: fixed;\\r\\n        top: 0;\\r\\n        left: 0;\\r\\n        width: 100%;\\r\\n        height: 100vh;\\r\\n        background-color: rgba(0, 0, 0, .94);\\r\\n        z-index: 98;\\r\\n        flex-direction: column;\\r\\n        align-content: flex-start;\\r\\n        justify-content: flex-start;\\r\\n        display: flex;\\r\\n        transition: all .25s ease-in-out;\\r\\n    }\\r\\n\\r\\n    .hamburger-dropdown {\\r\\n        margin-left: 35px;\\r\\n        margin-top: 125px;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    \\r\\n    .hamburger-item {\\r\\n        text-decoration: none;\\r\\n        color: white;\\r\\n        font-family: atf, sans-serif;\\r\\n        font-size: 40px;\\r\\n        margin-bottom: 30px;\\r\\n    }\\r\\n    \\r\\n    /* ******************************Main********************************** */\\r\\n\\r\\n    .main-container {\\r\\n        height: calc(100vh - 60px);\\r\\n    }\\r\\n\\r\\n    .main-container-title {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n\\r\\n        /* ******************************Articles********************************** */\\r\\n\\r\\n    .articles-container {\\r\\n        margin: 100px 5% 50px;\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr;\\r\\n        grid-template-rows: repeat(2, minmax(300px, auto));\\r\\n        gap: 0;\\r\\n    }\\r\\n\\r\\n    .article {\\r\\n        display: grid;\\r\\n        grid-template-columns: 100%;\\r\\n        grid-template-rows: [img-start] auto [img-end content-start] auto [content-end];\\r\\n    }\\r\\n   \\r\\n    .img-container {\\r\\n        grid-row: img-start / img-end;\\r\\n        grid-column: 1 / 2;\\r\\n    }   \\r\\n\\r\\n    .content {\\r\\n        margin: 20px 0;\\r\\n        grid-row: content-start / content-end;\\r\\n        grid-column: 1 / 2;\\r\\n        max-width: none;    \\r\\n    }\\r\\n\\r\\n    .article-type {\\r\\n        font-size: 2.5vw;\\r\\n    }\\r\\n    \\r\\n\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n/* *******************************New Query 920px********************************* */\\r\\n\\r\\n\\r\\n@media screen and (max-width: 920px){\\r\\n\\r\\n    .read-container {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/fonts/Akzidenz-grotesk-light.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/Akzidenz-grotesk-light.ttf ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Akzidenz-grotesk-light.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Akzidenz-grotesk-light.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Berthold Akzidenz Grotesk Extended.otf":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/Berthold Akzidenz Grotesk Extended.otf ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Berthold Akzidenz Grotesk Extended.otf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Berthold_Akzidenz_Grotesk_Extended.otf?");

/***/ }),

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

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

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