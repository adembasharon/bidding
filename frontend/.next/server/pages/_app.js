/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ \"./state.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/myc/Documents/bidding/frontend/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/myc/Documents/bidding/frontend/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ0c7QUFFakMsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBRUUsOERBQUNILDhDQUFVO2tCQUNiLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2YsQ0FFWjtBQUNILENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZGRpbmcvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgQXBwV3JhcHBlciBmcm9tIFwiLi4vc3RhdGVcIlxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8QXBwV3JhcHBlcj5cbiAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L0FwcFdyYXBwZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkFwcFdyYXBwZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./state.js":
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BidContext\": () => (/* binding */ BidContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst BidContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AppWrapper({ children  }) {\n    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: currentPost , 1: setCurrentPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BidContext.Provider, {\n        value: {\n            posts: [\n                post,\n                setPost\n            ],\n            editPost: [\n                currentPost,\n                setCurrentPost\n            ]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/myc/Documents/bidding/frontend/state.js\",\n        lineNumber: 9,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppWrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUVwRCxNQUFNRyxVQUFVLGlCQUFHRixvREFBYSxFQUFFLENBQUM7QUFDMUMsU0FBU0csVUFBVSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQ2hDLE1BQU0sS0FBQ0MsSUFBSSxNQUFDQyxPQUFPLE1BQUdMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sS0FBQ00sV0FBVyxNQUFDQyxjQUFjLE1BQUVQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRy9DLHFCQUFPLDhEQUFDQyxVQUFVLENBQUNPLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUNDLEtBQUssRUFBQztnQkFBQ04sSUFBSTtnQkFBQ0MsT0FBTzthQUFDO1lBQUNNLFFBQVEsRUFBQztnQkFBQ0wsV0FBVztnQkFBQ0MsY0FBYzthQUFDO1NBQUM7a0JBQzVGSixRQUFROzs7OztZQUNhLENBQUM7QUFDM0IsQ0FBQztBQUVELGlFQUFnQkQsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZGRpbmcvLi9zdGF0ZS5qcz9mNzM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEJpZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5mdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbcG9zdCxzZXRQb3N0XT0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjdXJyZW50UG9zdCxzZXRDdXJyZW50UG9zdF09dXNlU3RhdGUoXCJcIilcblxuXG4gIHJldHVybiA8QmlkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3Bvc3RzOltwb3N0LHNldFBvc3RdLGVkaXRQb3N0OltjdXJyZW50UG9zdCxzZXRDdXJyZW50UG9zdF19fT5cbiAgICB7Y2hpbGRyZW59XG4gICAgPC9CaWRDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0ICBkZWZhdWx0IEFwcFdyYXBwZXIiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkJpZENvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJwb3N0Iiwic2V0UG9zdCIsImN1cnJlbnRQb3N0Iiwic2V0Q3VycmVudFBvc3QiLCJQcm92aWRlciIsInZhbHVlIiwicG9zdHMiLCJlZGl0UG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./state.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();