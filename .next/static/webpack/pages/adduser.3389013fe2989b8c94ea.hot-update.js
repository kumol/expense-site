"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/adduser",{

/***/ "./pages/adduser.js":
/*!**************************!*\
  !*** ./pages/adduser.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_kumol_KUMOL_programe_expense_expense_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _media_kumol_KUMOL_programe_expense_expense_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _media_kumol_KUMOL_programe_expense_expense_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_kumol_KUMOL_programe_expense_expense_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/media/kumol/KUMOL/programe/expense/expense-site/pages/adduser.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import { useForm } from 'react-hook-form';\n\n\n\nvar NewUser = function NewUser() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1]; //const { register, handleSubmit, reset, formState } = useForm(formOptions);\n\n\n  function onSubmitForm(_x) {\n    return _onSubmitForm.apply(this, arguments);\n  }\n\n  function _onSubmitForm() {\n    _onSubmitForm = (0,_media_kumol_KUMOL_programe_expense_expense_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_media_kumol_KUMOL_programe_expense_expense_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var value;\n      return _media_kumol_KUMOL_programe_expense_expense_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:5000/\", {\n                name: name,\n                password: password\n              });\n\n            case 3:\n              value = _context.sent;\n              alert(value.body);\n              console.log(value);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _onSubmitForm.apply(this, arguments);\n  }\n\n  function valueChanger(event) {\n    event.preventDefault;\n    event.target.name == \"password\" ? setPassword(event.target.value) : setName(event.target.value);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"b\", {\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: \"name\",\n        value: name,\n        onChange: valueChanger\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"b\", {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: \"password\",\n        value: password,\n        onChange: valueChanger\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        onClick: onSubmitForm,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(NewUser, \"Q3D0qnZ9tttG8x/WlHuqXUGjTo0=\");\n\n_c = NewUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewUser);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewUser\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGR1c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7Ozs7QUFDQSxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLGtCQUFzQkYsK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBS0csSUFBTDtBQUFBLE1BQVdDLE9BQVg7O0FBQ0EsbUJBQThCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFLSyxRQUFMO0FBQUEsTUFBZUMsV0FBZixpQkFGa0IsQ0FHbEI7OztBQUhrQixXQUlIQyxZQUpHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdUQUlsQixpQkFBNEJDLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFESjtBQUFBLHFCQUVzQlIsaURBQUEsQ0FBVyx3QkFBWCxFQUFvQztBQUFDRSxnQkFBQUEsSUFBSSxFQUFKQSxJQUFEO0FBQU1FLGdCQUFBQSxRQUFRLEVBQVJBO0FBQU4sZUFBcEMsQ0FGdEI7O0FBQUE7QUFFUU0sY0FBQUEsS0FGUjtBQUdJQyxjQUFBQSxLQUFLLENBQUNELEtBQUssQ0FBQ0UsSUFBUCxDQUFMO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaOztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSmtCO0FBQUE7QUFBQTs7QUFVbEIsV0FBU0ssWUFBVCxDQUFzQlIsS0FBdEIsRUFBNEI7QUFDeEJBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBRCxJQUFBQSxLQUFLLENBQUNTLE1BQU4sQ0FBYWQsSUFBYixJQUFxQixVQUFyQixHQUFrQ0csV0FBVyxDQUFDRSxLQUFLLENBQUNTLE1BQU4sQ0FBYU4sS0FBZCxDQUE3QyxHQUFvRVAsT0FBTyxDQUFDSSxLQUFLLENBQUNTLE1BQU4sQ0FBYU4sS0FBZCxDQUEzRTtBQUNIOztBQUNELHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFBLCtCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsTUFBeEI7QUFBK0IsYUFBSyxFQUFFUixJQUF0QztBQUE0QyxnQkFBUSxFQUFFYTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFBLCtCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBSUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsVUFBeEI7QUFBbUMsYUFBSyxFQUFFWCxRQUExQztBQUFvRCxnQkFBUSxFQUFFVztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRVQsWUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFhSCxDQTNCRDs7R0FBTUw7O0tBQUFBO0FBNkJOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkZHVzZXIuanM/OTUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5jb25zdCBOZXdVc2VyID0gKCkgPT4ge1xuICAgIGxldCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBsZXQgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICAvL2NvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgcmVzZXQsIGZvcm1TdGF0ZSB9ID0gdXNlRm9ybShmb3JtT3B0aW9ucyk7XG4gICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRGb3JtKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIse25hbWUscGFzc3dvcmR9KTtcbiAgICAgICAgYWxlcnQodmFsdWUuYm9keSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsdWVDaGFuZ2VyKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAgIGV2ZW50LnRhcmdldC5uYW1lID09IFwicGFzc3dvcmRcIiA/IHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSkgOiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA+PGI+TmFtZTwvYj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXt2YWx1ZUNoYW5nZXJ9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsID48Yj5QYXNzd29yZDwvYj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e3ZhbHVlQ2hhbmdlcn0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtvblN1Ym1pdEZvcm19PlxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdVc2VyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJOZXdVc2VyIiwibmFtZSIsInNldE5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ2YWx1ZSIsImFsZXJ0IiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZUNoYW5nZXIiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/adduser.js\n");

/***/ })

});