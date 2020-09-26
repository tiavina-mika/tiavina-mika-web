webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Title.tsx":
/*!*************************************!*\
  !*** ./components/shared/Title.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Title.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  title: {
    composes: 'flexRow stretchSelf font-DINCondensed-medium',
    lineHeight: '1.25em',
    letterSpacing: 4,
    textTransform: 'uppercase',
    webkitFontSmoothing: 'antialiased',
    fontWeight: 'bold'
  },
  h1: {
    fontSize: 75
  }
});

var Title = function Title(_ref) {
  var text = _ref.text,
      level = _ref.level,
      className = _ref.className;
  var classes = useStyles();
  var Component = level ? "h".concat(level) : 'h1';
  return __jsx(Component, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.title, className, level ? classes["h".concat(level)] : classes['h1']),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=index.js.4e1a2f42141d21d0b384.hot-update.js.map