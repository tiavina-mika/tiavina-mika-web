webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/ProgressiveBar.tsx":
/*!*******************************************************!*\
  !*** ./components/home/knowledges/ProgressiveBar.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\ProgressiveBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    progressiveBar: {
      composes: 'flexRow justifyCenter',
      backgroundColor: '#F4F9FE',
      borderRadius: 15,
      overflow: 'hidden'
    },
    color: {
      backgroundColor: function backgroundColor(color) {
        return color;
      },
      width: function width(percent) {
        return percent + '%';
      }
    }
  };
});

var ProgressiveBar = function ProgressiveBar(_ref) {
  var color = _ref.color,
      percent = _ref.percent;
  var classes = useStyles({
    color: color,
    percent: percent
  });
  return __jsx("div", {
    className: classes.progressiveBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressiveBar);

/***/ })

})
//# sourceMappingURL=index.js.4ef7e8f9d34d212695de.hot-update.js.map