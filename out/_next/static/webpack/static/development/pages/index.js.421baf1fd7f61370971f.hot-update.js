webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/competences/svg/CompetencesBlock.tsx":
/*!**************************************************************!*\
  !*** ./components/home/competences/svg/CompetencesBlock.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/utils */ "./utils/utils.ts");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\competences\\svg\\CompetencesBlock.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    dots: {
      fill: 'none',
      isolation: 'isolate',
      stroke: '#63bf91',
      strokeWidth: 3.39,
      strokeDasharray: 5.08,
      opacity: 0.4
    },
    dotsActive: {
      stroke: theme.colors.active,
      opacity: 1
    },
    dotsInactive: {
      stroke: '#63bf91',
      opacity: 0.4
    },
    rect: {
      fill: '#bdefd1'
    },
    text: {
      composes: 'font-ProximaNova-regular',
      fontSize: 18,
      fontWeight: 'bold'
    }
  };
});

var CompetencesBlock = function CompetencesBlock(_ref) {
  var id = _ref.id,
      x = _ref.x,
      dotsPath = _ref.dotsPath,
      icon = _ref.icon,
      label = _ref.label,
      isCurrent = _ref.isCurrent;
  var classes = useStyles();
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("g", {
    id: id + '-2',
    "data-name": id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("path", {
    id: id + '-p',
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.dots, isCurrent ? classes.dotsActive : classes.dotsInactive),
    d: dotsPath,
    transform: "translate(2.95 -0.55)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("g", {
    id: id + '-content',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, icon(isCurrent), __jsx("g", {
    id: "text-container",
    transform: "translate(2.95 -0.55)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("text", {
    fill: isCurrent ? '#fff' : theme.colors.secondary,
    className: classes.text,
    x: x,
    y: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isTop"])(id) ? _utils_constants__WEBPACK_IMPORTED_MODULE_3__["competenseSvgTopY"] : _utils_constants__WEBPACK_IMPORTED_MODULE_3__["competenseSvgBottomY"],
    id: 'text-path' + id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, label))));
};

/* harmony default export */ __webpack_exports__["default"] = (CompetencesBlock);

/***/ }),

/***/ "./components/home/competences/svg/RecShadow.tsx":
/*!*******************************************************!*\
  !*** ./components/home/competences/svg/RecShadow.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./utils/utils.ts");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\competences\\svg\\RecShadow.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  blendMode: {
    mixBlendMode: 'multiply'
  },
  shadow: {
    composes: '$blendMode',
    opacity: 0.1
  }
});

var RecShadow = function RecShadow(_ref) {
  var id = _ref.id,
      transform = _ref.transform,
      xlinkHref = _ref.xlinkHref,
      x = _ref.x,
      isCurrent = _ref.isCurrent;
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var classes = useStyles();
  return __jsx("g", {
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("image", {
    className: classes.shadow,
    width: "199",
    height: "168",
    transform: transform,
    xlinkHref: xlinkHref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("rect", {
    fill: isCurrent ? theme.colors.active : '#fff',
    x: x,
    y: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isTop"])(id) ? '14' : '537.78',
    width: "167.98",
    height: "137.12",
    rx: "8.8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RecShadow);

/***/ })

})
//# sourceMappingURL=index.js.421baf1fd7f61370971f.hot-update.js.map