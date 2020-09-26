webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/competences/cards/Card.tsx":
/*!****************************************************!*\
  !*** ./components/home/competences/cards/Card.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../reducers/appReducer */ "./reducers/appReducer.ts");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\competences\\cards\\Card.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  var _ref;

  return _ref = {
    card: {
      composes: 'flexColumn spaceBetween font-ProximaNova-regular',
      boxSizing: 'border-box',
      boxShadow: '0 6px 10px rgba(0,0,0,.08)',
      borderRadius: 10,
      height: 410,
      width: 543,
      backgroundColor: '#fff',
      position: 'absolute',
      padding: [60, 68],
      color: theme.color.secondary
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "card", {
    composes: 'flexColumn spaceBetween font-ProximaNova-regular',
    boxSizing: 'border-box',
    boxShadow: '0 6px 10px rgba(0,0,0,.08)',
    borderRadius: 10,
    height: 410,
    width: 543,
    backgroundColor: '#fff',
    position: 'absolute',
    padding: [60, 68],
    color: theme.color.secondary
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "cardHead", {
    composes: 'flexRow spaceBetween center stretchSelf'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "cardBody", {
    composes: 'flexColumn spaceBetween alignCenter'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "cardFooter", {
    composes: 'flexColumn spaceBetween alignCenter stretchSelf'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "description", {
    fontSize: 17,
    lineHeight: 1.72
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "title", {
    color: theme.color.primary,
    fontSize: 26
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "link", {
    color: theme.color.active,
    fontSize: 20,
    textDecoration: 'none',
    '&:hover': {
      color: theme.color.active,
      opacity: 0.8
    }
  }), _ref;
});

var Card = function Card(_ref2) {
  var className = _ref2.className,
      parallaxData = _ref2.parallaxData,
      data = _ref2.data,
      _onPlxEnd = _ref2.onPlxEnd;
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_7__["screenState"]);
  var Component = isMobile ? 'div' : react_plx__WEBPACK_IMPORTED_MODULE_4___default.a;
  var otherProps = isMobile ? {} : {
    parallaxData: parallaxData,
    onPlxEnd: function onPlxEnd() {
      return _onPlxEnd(data.name);
    }
  };
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.card, className),
    id: data.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.cardHead,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: data.name,
    src: "/images/competences/".concat(data.name, ".svg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, data.ranking)), __jsx("div", {
    className: classes.cardBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, data.title), __jsx("p", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, data.description)), __jsx("div", {
    className: classes.cardFooter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: classes.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "See more")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.a9447267f26b1b8b7b86.hot-update.js.map