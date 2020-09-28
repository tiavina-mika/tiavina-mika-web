webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Text.tsx":
/*!************************************!*\
  !*** ./components/shared/Text.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Text.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    text: {
      composes: 'font-ProximaNova-regular',
      lineHeight: '1.2em',
      fontSize: 18,
      color: theme.color.secondary
    }
  };
});

var Text = function Text(_ref) {
  var text = _ref.text,
      tagName = _ref.tagName,
      className = _ref.className;
  var classes = useStyles();
  var Component = tagName ? tagName : 'span';
  return __jsx(Component, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.text, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.665bf2dd3254e9f61bfa.hot-update.js.map