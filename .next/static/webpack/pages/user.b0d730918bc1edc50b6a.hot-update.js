"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _components_UI_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/UI/Header */ \"./components/UI/Header.js\");\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/data-grid */ \"./node_modules/@material-ui/data-grid/dist/index-esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/media/kumol/KUMOL/programe/expense/expense-site/pages/user.js\",\n    _this = undefined;\n\n //  import Button from '@mui/material/Button';\n\n\n\n\nvar columns = [{\n  field: 'id',\n  headerName: 'ID',\n  width: 90\n}, {\n  field: 'name',\n  headerName: 'Name',\n  width: 150\n}, {\n  field: 'group',\n  headerName: 'Deposite',\n  width: 150,\n  editable: true,\n  valueGetter: function valueGetter(params) {\n    console.log({\n      params: params\n    });\n    var result = [];\n\n    if (params.row.deposite) {\n      if (params.row.deposite) {\n        result.push(\"home: \" + params.row.deposite);\n      }\n\n      if (params.row.deposite) {\n        result.push(\"office: \" + params.row.deposite);\n      }\n    } else {\n      result = [\"Unknown\"];\n    }\n\n    return result.join(\", \");\n  }\n}];\n\nvar User = function User(_ref) {\n  var members = _ref.members;\n  return (\n    /*#__PURE__*/\n    // <Button variant=\"contained\" >\n    //   Go to the main page\n    // </Button>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n        children: \"User\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n        children: members.map(function (m) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n            children: m.group.id\n          }, m.group.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 22\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n          height: 400,\n          width: '100%'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {\n          rows: members,\n          columns: columns,\n          pageSize: 5,\n          rowsPerPageOptions: [5],\n          checkboxSelection: true,\n          disableSelectionOnClick: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true)\n  );\n};\n\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOzs7QUFFQSxJQUFNRSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxFQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxFQUFBQSxVQUFVLEVBQUUsSUFBM0I7QUFBaUNDLEVBQUFBLEtBQUssRUFBRTtBQUF4QyxDQURjLEVBRWQ7QUFDRUYsRUFBQUEsS0FBSyxFQUFFLE1BRFQ7QUFFRUMsRUFBQUEsVUFBVSxFQUFFLE1BRmQ7QUFHRUMsRUFBQUEsS0FBSyxFQUFFO0FBSFQsQ0FGYyxFQU9kO0FBQ0VGLEVBQUFBLEtBQUssRUFBRSxPQURUO0FBRUVDLEVBQUFBLFVBQVUsRUFBRSxVQUZkO0FBR0VDLEVBQUFBLEtBQUssRUFBRSxHQUhUO0FBSUVDLEVBQUFBLFFBQVEsRUFBRSxJQUpaO0FBS0VDLEVBQUFBLFdBQVcsRUFBRSxxQkFBQ0MsTUFBRCxFQUFZO0FBQ3ZCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixNQUFBQSxNQUFNLEVBQU5BO0FBQUYsS0FBWjtBQUNBLFFBQUlHLE1BQU0sR0FBRyxFQUFiOztBQUNBLFFBQUlILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXQyxRQUFmLEVBQXlCO0FBQ3ZCLFVBQUlMLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXQyxRQUFmLEVBQXlCO0FBQ3ZCRixRQUFBQSxNQUFNLENBQUNHLElBQVAsQ0FBWSxXQUFXTixNQUFNLENBQUNJLEdBQVAsQ0FBV0MsUUFBbEM7QUFDRDs7QUFDRCxVQUFJTCxNQUFNLENBQUNJLEdBQVAsQ0FBV0MsUUFBZixFQUF5QjtBQUN2QkYsUUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVksYUFBYU4sTUFBTSxDQUFDSSxHQUFQLENBQVdDLFFBQXBDO0FBQ0Q7QUFDRixLQVBELE1BT087QUFDTEYsTUFBQUEsTUFBTSxHQUFHLENBQUMsU0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsV0FBT0EsTUFBTSxDQUFDSSxJQUFQLENBQVksSUFBWixDQUFQO0FBQ0Q7QUFuQkgsQ0FQYyxDQUFoQjs7QUE2QkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBLE1BQVpDLE9BQVksUUFBWkEsT0FBWTtBQUN4QjtBQUFBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBTUE7QUFBQSxrQkFFSUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQUMsQ0FBQyxFQUFFO0FBQ2IsOEJBQU87QUFBQSxzQkFBc0JBLENBQUMsQ0FBQ0MsS0FBRixDQUFRQztBQUE5QixhQUFTRixDQUFDLENBQUNDLEtBQUYsQ0FBUUMsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNELFNBRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkEsZUFjQTtBQUFLLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlakIsVUFBQUEsS0FBSyxFQUFFO0FBQXRCLFNBQVo7QUFBQSwrQkFDRSw4REFBQyw0REFBRDtBQUNFLGNBQUksRUFBRVksT0FEUjtBQUVFLGlCQUFPLEVBQUVmLE9BRlg7QUFHRSxrQkFBUSxFQUFFLENBSFo7QUFJRSw0QkFBa0IsRUFBRSxDQUFDLENBQUQsQ0FKdEI7QUFLRSwyQkFBaUIsTUFMbkI7QUFNRSxpQ0FBdUI7QUFOekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkQTtBQUFBO0FBSko7QUE4QkgsQ0EvQkQ7O0tBQU1jOztBQThDTiwrREFBZ0JBLElBQWhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIuanM/NDc2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0hlYWRlclwiO1xuLy8gIGltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiA5MCB9LFxuICB7XG4gICAgZmllbGQ6ICduYW1lJyxcbiAgICBoZWFkZXJOYW1lOiAnTmFtZScsXG4gICAgd2lkdGg6IDE1MCxcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZ3JvdXAnLFxuICAgIGhlYWRlck5hbWU6ICdEZXBvc2l0ZScsXG4gICAgd2lkdGg6IDE1MCxcbiAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coeyBwYXJhbXMgfSk7XG4gICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICBpZiAocGFyYW1zLnJvdy5kZXBvc2l0ZSkge1xuICAgICAgICBpZiAocGFyYW1zLnJvdy5kZXBvc2l0ZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFwiaG9tZTogXCIgKyBwYXJhbXMucm93LmRlcG9zaXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLnJvdy5kZXBvc2l0ZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFwib2ZmaWNlOiBcIiArIHBhcmFtcy5yb3cuZGVwb3NpdGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBbXCJVbmtub3duXCJdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiLCBcIik7XG4gICAgfVxuICB9XG5dXG5jb25zdCBVc2VyID0gKHsgbWVtYmVycyB9KT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiID5cbiAgICAgICAgLy8gICBHbyB0byB0aGUgbWFpbiBwYWdlXG4gICAgICAgIC8vIDwvQnV0dG9uPlxuICAgICAgICA8PlxuICAgICAgICA8aDQ+XG5cbiAgICAgICAgICBVc2VyXG4gICAgICAgIDwvaDQ+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1lbWJlcnMubWFwKG09PntcbiAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e20uZ3JvdXAuaWR9PnttLmdyb3VwLmlkfTwvbGk+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNDAwLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgIDxEYXRhR3JpZFxuICAgICAgICAgICAgcm93cz17bWVtYmVyc31cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBwYWdlU2l6ZT17NX1cbiAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzVdfVxuICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgICAgICAgIGRpc2FibGVTZWxlY3Rpb25PbkNsaWNrXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgbGV0IGlkID0gMTtcbiAgY29uc29sZS5sb2coXCJsb2FkZWQgZm9yIFwiLGlkKTtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdXNlci9ncm91cC8ke2lkfWApO1xuICBsZXQgbWVtYmVycyA9IHJlc3BvbnNlLmRhdGEubWVtYmVycztcbiAgbWVtYmVycyA9IG1lbWJlcnMgPyBtZW1iZXJzIDogW11cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVtYmVycyxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICBVc2VyIl0sIm5hbWVzIjpbIkhlYWRlciIsIkRhdGFHcmlkIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwiZWRpdGFibGUiLCJ2YWx1ZUdldHRlciIsInBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJyb3ciLCJkZXBvc2l0ZSIsInB1c2giLCJqb2luIiwiVXNlciIsIm1lbWJlcnMiLCJtYXAiLCJtIiwiZ3JvdXAiLCJpZCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user.js\n");

/***/ })

});