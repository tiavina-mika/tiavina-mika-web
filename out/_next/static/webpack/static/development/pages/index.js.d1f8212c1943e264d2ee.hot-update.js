webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Title.tsx":
/*!*************************************!*\
  !*** ./components/shared/Title.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");


var _h2,
    _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Title.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
  title: {
    composes: 'font-Poppins-bold',
    lineHeight: '1.25em',
    webkitFontSmoothing: 'antialiased',
    fontWeight: 'bold',
    margin: 0,
    padding: 0
  },
  h1: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    letterSpacing: 4,
    fontSize: 75
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
    fontSize: 60,
    lineHeight: '1.1em'
  }),
  h2: (_h2 = {
    fontSize: 48
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h2, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
    fontSize: 22,
    lineHeight: '1.6em'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h2, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smMd, {
    fontSize: 42
  }), _h2),
  h3: {
    letterSpacing: 2
  },
  h4: {},
  h5: {}
}, "h4", {}));

var Title = function Title(_ref) {
  var text = _ref.text,
      level = _ref.level,
      className = _ref.className;
  var classes = useStyles();
  var Component = level ? "h".concat(level) : 'h1';
  return __jsx(Component, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(className, classes.title, level ? classes["h".concat(level)] : classes['h1']),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=index.js.d1f8212c1943e264d2ee.hot-update.js.map