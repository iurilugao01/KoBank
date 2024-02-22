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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_validateCurrentMoneyColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/validateCurrentMoneyColor.js */ \"./src/js/validateCurrentMoneyColor.js\");\n/* harmony import */ var _js_handleTransaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/handleTransaction.js */ \"./src/js/handleTransaction.js\");\n\n\n\nif (localStorage.getItem(\"money\") != null) {\n  document.querySelector(\"#money\").innerText = localStorage.getItem(\"money\");\n}\n\nconst executeFunctions = (type) => {\n  (0,_js_handleTransaction_js__WEBPACK_IMPORTED_MODULE_1__.handleTransaction)(type);\n  (0,_js_validateCurrentMoneyColor_js__WEBPACK_IMPORTED_MODULE_0__.validateCurrentMoneyColor)();\n};\n\ndocument\n  .querySelector(\"#pay\")\n  .addEventListener(\"click\", () => executeFunctions(\"pay\"));\ndocument\n  .querySelector(\"#receive\")\n  .addEventListener(\"click\", () => executeFunctions(\"receive\"));\n\n(0,_js_validateCurrentMoneyColor_js__WEBPACK_IMPORTED_MODULE_0__.validateCurrentMoneyColor)();\n\n\n//# sourceURL=webpack://banco/./src/index.js?");

/***/ }),

/***/ "./src/js/getFormatedDate.js":
/*!***********************************!*\
  !*** ./src/js/getFormatedDate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFormatedDate: () => (/* binding */ getFormatedDate)\n/* harmony export */ });\nconst getFormatedDate = () => {\n  const atualDate = new Date();\n  const options = {\n    weekday: \"long\",\n    year: \"numeric\",\n    month: \"long\",\n    day: \"numeric\",\n    hour: \"numeric\",\n    minute: \"numeric\",\n    second: \"numeric\",\n    hour12: false,\n    timeZone: \"America/Sao_Paulo\", // Fuso horário de Brasília\n  };\n  return atualDate.toLocaleString(\"pt-BR\", options);\n};\n\n\n//# sourceURL=webpack://banco/./src/js/getFormatedDate.js?");

/***/ }),

/***/ "./src/js/handleTransaction.js":
/*!*************************************!*\
  !*** ./src/js/handleTransaction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleTransaction: () => (/* binding */ handleTransaction)\n/* harmony export */ });\n/* harmony import */ var _getFormatedDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFormatedDate.js */ \"./src/js/getFormatedDate.js\");\n\nlet transactions = [];\n\nconst handleTransaction = (type) => {\n  transactions = JSON.parse(localStorage.getItem(\"transactions\")) || [];\n\n  const money = document.querySelector(\"#money\");\n  const valueDig = document.querySelector(\"#value\");\n\n  let newMoney;\n\n  if (type === \"pay\") {\n    newMoney = parseFloat(money.innerText) - parseFloat(valueDig.value);\n    transactions.push(\n      \"pagou \" + valueDig.value + \" reais\" + \" na \" + (0,_getFormatedDate_js__WEBPACK_IMPORTED_MODULE_0__.getFormatedDate)()\n    );\n  }\n\n  if (type === \"receive\") {\n    newMoney = parseFloat(money.innerText) + parseFloat(valueDig.value);\n    transactions.push(\n      \"recebeu \" + valueDig.value + \" reais\" + \" na \" + (0,_getFormatedDate_js__WEBPACK_IMPORTED_MODULE_0__.getFormatedDate)()\n    );\n  }\n\n  if (typeof newMoney === \"number\") {\n    money.innerText = newMoney;\n    valueDig.value = null;\n\n    localStorage.setItem(\"money\", money.innerText);\n    localStorage.setItem(\"transactions\", JSON.stringify(transactions));\n  }\n};\n\n\n//# sourceURL=webpack://banco/./src/js/handleTransaction.js?");

/***/ }),

/***/ "./src/js/validateCurrentMoneyColor.js":
/*!*********************************************!*\
  !*** ./src/js/validateCurrentMoneyColor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateCurrentMoneyColor: () => (/* binding */ validateCurrentMoneyColor)\n/* harmony export */ });\nconst validateCurrentMoneyColor = () => {\n  const currentMoney = document.querySelector(\"#money\");\n  const isNegative = parseFloat(currentMoney.innerText) < 0;\n  const color = isNegative ? \"red\" : \"white\";\n\n  currentMoney.style.color = color;\n};\n\n\n//# sourceURL=webpack://banco/./src/js/validateCurrentMoneyColor.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;