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
exports.id = "pages/group-expenses";
exports.ids = ["pages/group-expenses"];
exports.modules = {

/***/ "./pages/group-expenses.js":
/*!*********************************!*\
  !*** ./pages/group-expenses.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/data-grid */ \"@material-ui/data-grid\");\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/media/kumol/KUMOL/programe/expense/expense-site/pages/group-expenses.js\";\n\n\n\nconst columns = [{\n  field: 'id',\n  headerName: 'ID',\n  width: 90\n}, {\n  field: 'date',\n  headerName: 'Day',\n  width: 150\n}, {\n  field: 'spentMoney',\n  headerName: 'Cost',\n  width: 150\n}, {\n  field: 'details',\n  headerName: 'Details',\n  width: 150\n}];\n\nconst GroupExpenses = ({\n  expenses\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"row\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"col-md-2 pb_20px\",\n        children: \"Add area\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"col-md-8 pb_20px\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          style: {\n            height: 400,\n            width: '100%'\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_0__.DataGrid, {\n            rows: expenses,\n            columns: columns,\n            pageSize: 5,\n            rowsPerPageOptions: [5],\n            checkboxSelection: true,\n            disableSelectionOnClick: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 21\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"col-md-2 pb_20px\",\n        children: \"Add area\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 12\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, undefined);\n};\n\nasync function getServerSideProps() {\n  try {\n    let id = 1;\n    let response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://localhost:5000/group-expense/group/${id}`);\n    let expenses = response.data.expenses;\n    expenses = expenses ? expenses : [];\n    return {\n      props: {\n        expenses\n      }\n    };\n  } catch (err) {\n    console.log(err);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupExpenses);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncm91cC1leHBlbnNlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLE1BQU1FLE9BQU8sR0FBRyxDQUNaO0FBQUVDLEVBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLEVBQUFBLFVBQVUsRUFBRSxJQUEzQjtBQUFpQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQXhDLENBRFksRUFFWjtBQUNFRixFQUFBQSxLQUFLLEVBQUUsTUFEVDtBQUVFQyxFQUFBQSxVQUFVLEVBQUUsS0FGZDtBQUdFQyxFQUFBQSxLQUFLLEVBQUU7QUFIVCxDQUZZLEVBT1o7QUFDSUYsRUFBQUEsS0FBSyxFQUFFLFlBRFg7QUFFSUMsRUFBQUEsVUFBVSxFQUFFLE1BRmhCO0FBR0lDLEVBQUFBLEtBQUssRUFBRTtBQUhYLENBUFksRUFZWjtBQUNJRixFQUFBQSxLQUFLLEVBQUUsU0FEWDtBQUVJQyxFQUFBQSxVQUFVLEVBQUUsU0FGaEI7QUFHSUMsRUFBQUEsS0FBSyxFQUFFO0FBSFgsQ0FaWSxDQUFoQjs7QUFrQkEsTUFBTUMsYUFBYSxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWdCO0FBQ2xDLHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRztBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0s7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMLGVBSUs7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsK0JBRUE7QUFBSyxlQUFLLEVBQUU7QUFBRUMsWUFBQUEsTUFBTSxFQUFFLEdBQVY7QUFBZUgsWUFBQUEsS0FBSyxFQUFFO0FBQXRCLFdBQVo7QUFBQSxpQ0FDSSw4REFBQyw0REFBRDtBQUNJLGdCQUFJLEVBQUVFLFFBRFY7QUFFSSxtQkFBTyxFQUFFTCxPQUZiO0FBR0ksb0JBQVEsRUFBRSxDQUhkO0FBSUksOEJBQWtCLEVBQUUsQ0FBQyxDQUFELENBSnhCO0FBS0ksNkJBQWlCLE1BTHJCO0FBTUksbUNBQXVCO0FBTjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKTCxlQXlCSztBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWlDSCxDQWxDRDs7QUFvQ08sZUFBZU8sa0JBQWYsR0FBb0M7QUFDdkMsTUFBRztBQUNELFFBQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLE1BQU1WLGdEQUFBLENBQVcsNkNBQTRDUyxFQUFHLEVBQTFELENBQXJCO0FBQ0EsUUFBSUgsUUFBUSxHQUFHSSxRQUFRLENBQUNFLElBQVQsQ0FBY04sUUFBN0I7QUFDQUEsSUFBQUEsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxFQUFqQztBQUNBLFdBQU87QUFDTE8sTUFBQUEsS0FBSyxFQUFFO0FBQ0hQLFFBQUFBO0FBREc7QUFERixLQUFQO0FBS0QsR0FWRCxDQVVDLE9BQU1RLEdBQU4sRUFBVTtBQUNUQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0Y7QUFFSCxpRUFBZVQsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzb24tZHVtbXktZGF0YS1nZW5lcmF0b3IvLi9wYWdlcy9ncm91cC1leHBlbnNlcy5qcz81ZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY29uc3QgY29sdW1ucyA9IFtcbiAgICB7IGZpZWxkOiAnaWQnLCBoZWFkZXJOYW1lOiAnSUQnLCB3aWR0aDogOTAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogJ2RhdGUnLFxuICAgICAgaGVhZGVyTmFtZTogJ0RheScsXG4gICAgICB3aWR0aDogMTUwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBmaWVsZDogJ3NwZW50TW9uZXknLFxuICAgICAgICBoZWFkZXJOYW1lOiAnQ29zdCcsXG4gICAgICAgIHdpZHRoOiAxNTAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpZWxkOiAnZGV0YWlscycsXG4gICAgICAgIGhlYWRlck5hbWU6ICdEZXRhaWxzJyxcbiAgICAgICAgd2lkdGg6IDE1MCxcbiAgICB9XG5dXG5jb25zdCBHcm91cEV4cGVuc2VzID0gKHtleHBlbnNlc30pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBwYl8yMHB4XCIgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgYXJlYVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggcGJfMjBweFwiID5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA0MDAsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17ZXhwZW5zZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1s1XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlU2VsZWN0aW9uT25DbGlja1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggcGJfMjBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPm9zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHBiXzIwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5vczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBwYl8yMHB4XCIgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgYXJlYVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIHRyeXtcbiAgICAgIGxldCBpZCA9IDE7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ncm91cC1leHBlbnNlL2dyb3VwLyR7aWR9YCk7XG4gICAgICBsZXQgZXhwZW5zZXMgPSByZXNwb25zZS5kYXRhLmV4cGVuc2VzO1xuICAgICAgZXhwZW5zZXMgPSBleHBlbnNlcyA/IGV4cGVuc2VzIDogW107XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZXhwZW5zZXMsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cEV4cGVuc2VzOyJdLCJuYW1lcyI6WyJEYXRhR3JpZCIsImF4aW9zIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwiR3JvdXBFeHBlbnNlcyIsImV4cGVuc2VzIiwiaGVpZ2h0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiaWQiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJwcm9wcyIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/group-expenses.js\n");

/***/ }),

/***/ "@material-ui/data-grid":
/*!*****************************************!*\
  !*** external "@material-ui/data-grid" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/data-grid");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__("./pages/group-expenses.js"));
module.exports = __webpack_exports__;

})();