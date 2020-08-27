webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/competences/cards/Card.tsx":
/*!****************************************************!*\
  !*** ./components/home/competences/cards/Card.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\competences\\cards\\Card.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  card: {
    boxSizing: 'border-box',
    boxShadow: '0 6px 10px rgba(0,0,0,.08)',
    borderRadius: 10,
    // backgroundColor: 'red',
    // padding: '60px 68px',
    height: 410,
    width: 543,
    // marginBottom: theme.spacing(10),
    backgroundColor: '#fff',
    position: 'absolute',
    padding: [60, 68]
  },
  cardHead: {
    composes: 'flexRow spaceBetween alignCenter'
  },
  cardBody: {
    composes: 'flexColumn spaceBetween alignCenter'
  }
});

var Card = function Card(_ref) {
  var className = _ref.className,
      parallaxData = _ref.parallaxData,
      data = _ref.data,
      _onPlxEnd = _ref.onPlxEnd;
  var classes = useStyles();
  return __jsx(react_plx__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.card, className),
    parallaxData: parallaxData,
    id: data.color,
    onPlxEnd: function onPlxEnd() {
      return _onPlxEnd(data.name);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.cardHead,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: data.name,
    src: "/images/competences/".concat(data.name, ".svg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "2")), __jsx("div", {
    className: classes.cardBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Some title here"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Component definition is missing display name react/display-name")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.28f547d7a6b3750c767e.hot-update.js.map