webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Button.tsx":
/*!**************************************!*\
  !*** ./components/shared/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  button: {
    composes: 'flexRow center spaceBetween font-Montserrat-medium',
    // lineHeight: '1.25em',
    // letterSpacing: 4,
    // textTransform: 'uppercase',
    // webkitFontSmoothing: 'antialiased',
    // fontWeight: 'bold',
    boxShadow: '0 1px 4px rgba(26,26,67,.1)',
    borderRadius: 8,
    padding: '12px 16px',
    width: 180,
    fontSize: 13
  },
  link: {
    textDecoration: 'none'
  },
  icon: {
    transform: 'rotate(-90deg)'
  }
});

var Button = function Button(_ref) {
  var text = _ref.text,
      url = _ref.url,
      className = _ref.className;
  var classes = useStyles();
  var Component = url ? framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a : framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].button;
  var otherProps = url ? {
    href: url
  } : {};
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.button, className, url ? classes.link : null),
    whileHover: {
      // scale: 1.2,
      paddingTop: 15,
      paddingBottom: 15,
      width: 180,
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 100
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, text), __jsx("img", {
    src: "/images/icons/caret.svg",
    alt: "icon",
    className: classes.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.210c6ebdc220cf8981da.hot-update.js.map