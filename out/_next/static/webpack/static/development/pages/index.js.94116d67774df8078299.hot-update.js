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



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  progressiveBar: {
    composes: 'flexRow',
    backgroundColor: '#F4F9FE',
    borderRadius: 15,
    overflow: 'hidden',
    width: function width(_ref) {
      var _width = _ref.width;
      return _width || '100%';
    },
    height: function height(_ref2) {
      var width = _ref2.width;
      return width || 13;
    }
  },
  color: {
    backgroundColor: function backgroundColor(_ref3) {
      var color = _ref3.color;
      return color;
    },
    width: function width(_ref4) {
      var percent = _ref4.percent;
      return percent + '%';
    },
    borderRadius: 15,
    height: '100%'
  }
});

var ProgressiveBar = function ProgressiveBar(_ref5) {
  var color = _ref5.color,
      percent = _ref5.percent,
      width = _ref5.width,
      className = _ref5.className,
      height = _ref5.height;
  var classes = useStyles({
    color: color,
    percent: percent,
    width: width,
    height: height
  });
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.progressiveBar, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressiveBar);

/***/ })

})
//# sourceMappingURL=index.js.94116d67774df8078299.hot-update.js.map