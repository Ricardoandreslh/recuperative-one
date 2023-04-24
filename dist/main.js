/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://recuperative-one/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst toggleButton = document.getElementById('button-menu')\r\nconst navWrapper = document.getElementById('nav')\r\n\r\nconst slider = document.getElementById('slider');\r\nconst btnAtras = document.getElementById('atras');\r\nconst btnSiguiente = document.getElementById('siguiente');\r\nlet listaVideos = [1,2,3,4,5];\r\n\r\ntoggleButton.addEventListener('click',() => {\r\n  toggleButton.classList.toggle('close')\r\n  navWrapper.classList.toggle('show')\r\n})\r\n\r\nnavWrapper.addEventListener('click',e => {\r\n  if(e.target.id === 'nav'){\r\n    navWrapper.classList.remove('show')\r\n    toggleButton.classList.remove('close')\r\n  }\r\n})\r\n\r\nbtnAtras.addEventListener('click', () => {\r\n  let listanueva = [];\r\n  let ultLista = listaVideos.length - 1;\r\n  listanueva.push(listaVideos[ultLista])\r\n  for (let i = 0; i < ultLista; i++) {\r\n    listanueva.push(listaVideos[i]);\r\n  }\r\n  listaVideos = listanueva;\r\n  cambiarSlider()\r\n})\r\n\r\nbtnSiguiente.addEventListener('click', () => {\r\n  let listanueva = [];\r\n  let ultLista = listaVideos.length;\r\n  for (let i = 1; i < ultLista; i++) {\r\n    listanueva.push(listaVideos[i]);\r\n  }\r\n  listanueva.push(listaVideos[0]);\r\n  listaVideos = listanueva;\r\n  cambiarSlider()\r\n})\r\n\r\nfunction cambiarSlider() {\r\n  slider.innerHTML = \"<div class='videos'><video class='video-UP' src='public/\" + listaVideos[listaVideos.length-1] + \".mp4'></video><video class='video-PP' src='public/\" + listaVideos[0] + \".mp4' controls></video><video class='video-SP' src='public/\" + listaVideos[1] + \".mp4'></video></div>\"\r\n}\r\n\r\ncambiarSlider()\r\n\r\n;\n\n//# sourceURL=webpack://recuperative-one/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;