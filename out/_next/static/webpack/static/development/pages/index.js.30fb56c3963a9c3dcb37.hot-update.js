webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/ProjectLink.tsx":
/*!**************************************************!*\
  !*** ./components/home/projects/ProjectLink.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\ProjectLink.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  linkContainer: {
    composes: 'flexRow justifyCenter'
  },
  link: {
    composes: 'flexRow alignCenter justifyCenter',
    color: '#fff',
    textDecoration: 'none',
    width: 250
  },
  rightArrowIcon: {
    marginLeft: 10
  }
});

var ProjectLink = function ProjectLink(_ref) {
  var url = _ref.url,
      text = _ref.text,
      className = _ref.className;
  var classes = useStyles();
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.linkContainer),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: url || '#',
    className: classes.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, text || 'Voir le projet'), __jsx("img", {
    src: "/images/icons/enter.svg",
    alt: "",
    className: classes.rightArrowIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectLink);

/***/ })

})
//# sourceMappingURL=index.js.30fb56c3963a9c3dcb37.hot-update.js.map