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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n\n\n\nconst weather = new _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Harare');\nconst dom = new _views__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\ndocument.addEventListener('DOMContentLoaded', getWeather);\n\nfunction getWeather() {\n  weather.getWeather().then((results) => {\n    dom.show(results);\n  });\n}\n\ndocument.getElementById('w-change-btn').addEventListener('click', (e) => {\n  e.preventDefault();\n  const city = document.getElementById('city').value;\n\n  weather.changeLocation(city);\n\n  document.getElementById('city').value = '';\n\n  getWeather();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Dom {\n  constructor() {\n    this.location = document.getElementById('w-location');\n    this.desc = document.getElementById('w-desc');\n    this.tempc = document.getElementById('w-temp-c');\n    this.tempf = document.getElementById('w-temp-f');\n    this.icon = document.getElementById('w-icon');\n    this.humidity = document.getElementById('w-humidity');\n  }\n\n  show(weather) {\n    this.location.textContent = weather.location.name;\n    this.tempc.innerHTML = `${Math.floor(weather.current.temperature)}&deg`;\n    this.tempf.innerHTML = `${Math.floor((weather.current.temperature * 9) / 5 + 32)}&deg`;\n    this.desc.innerHTML = `${weather.current.weather_descriptions[0]}`;\n    this.icon.setAttribute('src', `${weather.current.weather_icons[0]}`);\n    this.humidity.innerHTML = `Humidity: ${weather.current.humidity}<span>%</span>`;\n    document.getElementById('w-temp-f').style.display = 'none';\n    document.getElementById('toggle').addEventListener('click', () => {\n      if (document.getElementById('switch').innerHTML === 'Celsius') {\n        document.getElementById('switch').innerHTML = 'Fahrenheit';\n        document.getElementById('w-temp-c').style.display = 'none';\n        document.getElementById('w-temp-f').style.display = 'block';\n      } else if (document.getElementById('switch').innerHTML === 'Fahrenheit') {\n        document.getElementById('switch').innerHTML = 'Celsius';\n        document.getElementById('w-temp-f').style.display = 'none';\n        document.getElementById('w-temp-c').style.display = 'block';\n      }\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dom);\n\n\n//# sourceURL=webpack:///./src/views.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Weather {\n  constructor(city) {\n    this.apiKey = 'd05c6d708985ea91c4e8f243752d95c0';\n    this.city = city;\n  }\n\n  async getWeather() {\n    const response = await fetch(\n      `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`,\n    );\n\n    const responseData = await response.json();\n\n    return responseData;\n  }\n\n  changeLocation(city) {\n    this.city = city;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });