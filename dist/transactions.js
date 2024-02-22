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

/***/ "./src/js/transactionList.js":
/*!***********************************!*\
  !*** ./src/js/transactionList.js ***!
  \***********************************/
/***/ (() => {

eval("transactions = [];\n\nconst updateTransactionsList = () => {\n  transactions = JSON.parse(localStorage.getItem(\"transactions\")) || [];\n\n  const ul = document.querySelector(\"#transactionsList\");\n  ul.innerHTML = \"\";\n\n  transactions.forEach((element) => {\n    const li = document.createElement(\"li\");\n    li.innerText = JSON.stringify(element);\n\n    ul.appendChild(li);\n  });\n};\n\nconst cleanTransactionList = () => {\n  transactions = [];\n\n  document.querySelector(\"#transactionsList\").innerHTML = \"\";\n  localStorage.removeItem(\"transactions\");\n};\n\ndocument\n  .querySelector(\"#refreshBtn\")\n  .addEventListener(\"click\", updateTransactionsList);\ndocument\n  .querySelector(\"#cleanBtn\")\n  .addEventListener(\"click\", cleanTransactionList);\n\nupdateTransactionsList();\n\n\n//# sourceURL=webpack://banco/./src/js/transactionList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/transactionList.js"]();
/******/ 	
/******/ })()
;