"use strict";
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
exports.id = "pages/adduser";
exports.ids = ["pages/adduser"];
exports.modules = {

/***/ "./pages/adduser.js":
/*!**************************!*\
  !*** ./pages/adduser.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/media/kumol/KUMOL/programe/expense/expense-site/pages/adduser.js\";\n\n // import { useForm } from 'react-hook-form';\n\n\n\nconst NewUser = () => {\n  let {\n    0: name,\n    1: setName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  let {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"); //const { register, handleSubmit, reset, formState } = useForm(formOptions);\n\n  async function onSubmitForm(event) {\n    event.preventDefault();\n    let response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:5000/\", {\n      name,\n      password\n    });\n    alert(response.data.body);\n    console.log(response.data);\n  }\n\n  function valueChanger(event) {\n    event.preventDefault();\n    event.target.name == \"password\" ? setPassword(event.target.value) : setName(event.target.value);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"b\", {\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 25\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: \"name\",\n        value: name,\n        onChange: valueChanger\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"b\", {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 25\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: \"password\",\n        value: password,\n        onChange: valueChanger\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        onClick: onSubmitForm,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewUser);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGR1c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7OztBQUNBLE1BQU1JLE9BQU8sR0FBRyxNQUFNO0FBQ2xCLE1BQUk7QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkosK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQ0EsTUFBSTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEMsQ0FGa0IsQ0FHbEI7O0FBQ0EsaUJBQWVPLFlBQWYsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQy9CQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxRQUFJQyxRQUFRLEdBQUcsTUFBTVQsaURBQUEsQ0FBVyx3QkFBWCxFQUFvQztBQUFDRSxNQUFBQSxJQUFEO0FBQU1FLE1BQUFBO0FBQU4sS0FBcEMsQ0FBckI7QUFDQU8sSUFBQUEsS0FBSyxDQUFDRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsSUFBZixDQUFMO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFRLENBQUNHLElBQXJCO0FBQ0g7O0FBQ0QsV0FBU0ksWUFBVCxDQUFzQlQsS0FBdEIsRUFBNEI7QUFDeEJBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBRCxJQUFBQSxLQUFLLENBQUNVLE1BQU4sQ0FBYWYsSUFBYixJQUFxQixVQUFyQixHQUFrQ0csV0FBVyxDQUFDRSxLQUFLLENBQUNVLE1BQU4sQ0FBYUMsS0FBZCxDQUE3QyxHQUFvRWYsT0FBTyxDQUFDSSxLQUFLLENBQUNVLE1BQU4sQ0FBYUMsS0FBZCxDQUEzRTtBQUNIOztBQUNELHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFBLCtCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLE1BQXhCO0FBQStCLGFBQUssRUFBRWhCLElBQXRDO0FBQTRDLGdCQUFRLEVBQUVjO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLCtCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLFVBQXhCO0FBQW1DLGFBQUssRUFBRVosUUFBMUM7QUFBb0QsZ0JBQVEsRUFBRVk7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFVixZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFhSCxDQTNCRDs7QUE2QkEsaUVBQWVMLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLWR1bW15LWRhdGEtZ2VuZXJhdG9yLy4vcGFnZXMvYWRkdXNlci5qcz85NTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmNvbnN0IE5ld1VzZXIgPSAoKSA9PiB7XG4gICAgbGV0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGxldCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIC8vY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKGZvcm1PcHRpb25zKTtcbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdEZvcm0oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9cIix7bmFtZSxwYXNzd29yZH0pO1xuICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLmJvZHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsdWVDaGFuZ2VyKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJwYXNzd29yZFwiID8gc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKSA6IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGxhYmVsID48Yj5OYW1lPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e3ZhbHVlQ2hhbmdlcn0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgPjxiPlBhc3N3b3JkPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17dmFsdWVDaGFuZ2VyfT48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e29uU3VibWl0Rm9ybX0+XG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1VzZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIk5ld1VzZXIiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvblN1Ym1pdEZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiYWxlcnQiLCJkYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZUNoYW5nZXIiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/adduser.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/adduser.js"));
module.exports = __webpack_exports__;

})();