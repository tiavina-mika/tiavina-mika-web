webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/ProgressiveBar.tsx":
/*!*******************************************************!*\
  !*** ./components/home/knowledges/ProgressiveBar.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\ProgressiveBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    progressiveBar: {
      composes: 'flexRow justifyCenter red',
      backgroundColor: '#F4F9FE',
      borderRadius: 15,
      overflow: 'hidden',
      width: function width(_ref) {
        var _width = _ref.width;
        return _width || '100%';
      },
      height: 10
    },
    color: {
      backgroundColor: function backgroundColor(_ref2) {
        var color = _ref2.color;
        return color;
      },
      width: function width(_ref3) {
        var percent = _ref3.percent;
        return 50 + '%';
      }
    }
  };
});

var ProgressiveBar = function ProgressiveBar(_ref4) {
  var color = _ref4.color,
      percent = _ref4.percent,
      width = _ref4.width,
      className = _ref4.className;
  var classes = useStyles({
    color: color,
    percent: percent,
    width: width
  });
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.progressiveBar, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressiveBar);

/***/ })

})
//# sourceMappingURL=index.js.f3ec71852ebf319a8157.hot-update.js.map