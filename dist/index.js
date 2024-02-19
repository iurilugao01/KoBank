/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_validateCurrentMoneyColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/validateCurrentMoneyColor.js */ \"./src/js/validateCurrentMoneyColor.js\");\n/* harmony import */ var _js_handleTransaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/handleTransaction.js */ \"./src/js/handleTransaction.js\");\n/* harmony import */ var _js_transactionList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/transactionList.js */ \"./src/js/transactionList.js\");\n/* harmony import */ var _js_transactionList_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_transactionList_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nif (localStorage.getItem(\"money\") != null) {\n  document.querySelector(\"#money\").innerText = localStorage.getItem(\"money\");\n}\n\ndocument\n  .querySelector(\"#pay\")\n  .addEventListener(\"click\", () => (0,_js_handleTransaction_js__WEBPACK_IMPORTED_MODULE_1__.handleTransaction)(\"pay\"));\ndocument\n  .querySelector(\"#receive\")\n  .addEventListener(\"click\", () => (0,_js_handleTransaction_js__WEBPACK_IMPORTED_MODULE_1__.handleTransaction)(\"receive\"));\n\n(0,_js_validateCurrentMoneyColor_js__WEBPACK_IMPORTED_MODULE_0__.validateCurrentMoneyColor)();\n\n\n//# sourceURL=webpack://banco/./src/index.js?");

/***/ }),

/***/ "./src/js/handleTransaction.js":
/*!*************************************!*\
  !*** ./src/js/handleTransaction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleTransaction: () => (/* binding */ handleTransaction)\n/* harmony export */ });\nlet transactions = [];\n\nconst handleTransaction = (type) => {\n  transactions = JSON.parse(localStorage.getItem(\"transactions\")) || [];\n\n  const money = document.querySelector(\"#money\");\n  const valueDig = document.querySelector(\"#value\");\n\n  let newMoney;\n\n  if (type === \"pay\") {\n    newMoney = parseFloat(money.innerText) - parseFloat(valueDig.value);\n    transactions.push(\"pagou \" + valueDig.value);\n  }\n\n  if (type === \"receive\") {\n    newMoney = parseFloat(money.innerText) + parseFloat(valueDig.value);\n    transactions.push(\"recebeu \" + valueDig.value);\n  }\n\n  if (typeof newMoney === \"number\") {\n    money.innerText = newMoney;\n    valueDig.value = null;\n\n    localStorage.setItem(\"money\", money.innerText);\n    localStorage.setItem(\"transactions\", JSON.stringify(transactions));\n  }\n\n  console.log(transactions);\n  verification();\n};\n\n\n//# sourceURL=webpack://banco/./src/js/handleTransaction.js?");

/***/ }),

/***/ "./src/js/transactionList.js":
/*!***********************************!*\
  !*** ./src/js/transactionList.js ***!
  \***********************************/
/***/ (() => {

eval("const transactions = [];\n\nconst updateTransactionsList = () => {\n  transactions = JSON.parse(localStorage.getItem(\"transactions\")) || [];\n\n  const ul = document.querySelector(\"#transactionsList\");\n  ul.innerHTML = \"\";\n\n  transactions.forEach((element) => {\n    const li = document.createElement(\"li\");\n    li.innerText = JSON.stringify(element);\n\n    ul.appendChild(li);\n  });\n};\n\nconst cleanTransactionList = () => {\n  transactions = [];\n\n  document.querySelector(\"#transactionsList\").innerHTML = \"\";\n  localStorage.removeItem(\"transactions\");\n};\n\ndocument\n  .querySelector(\"#refreshBtn\")\n  .addEventListener(\"click\", updateTransactionsList);\ndocument\n  .querySelector(\"#cleanBtn\")\n  .addEventListener(\"click\", cleanTransactionList);\n\nrefresh();\n\n\n//# sourceURL=webpack://banco/./src/js/transactionList.js?");

/***/ }),

/***/ "./src/js/validateCurrentMoneyColor.js":
/*!*********************************************!*\
  !*** ./src/js/validateCurrentMoneyColor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;