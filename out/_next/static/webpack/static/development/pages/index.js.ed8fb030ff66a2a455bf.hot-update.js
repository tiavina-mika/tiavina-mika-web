webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/Knowledge.tsx":
/*!**************************************************!*\
  !*** ./components/home/knowledges/Knowledge.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _shared_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Text */ "./components/shared/Text.tsx");
/* harmony import */ var _shared_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Title */ "./components/shared/Title.tsx");
/* harmony import */ var _ProgressiveBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressiveBar */ "./components/home/knowledges/ProgressiveBar.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledge.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    knowledgeRoot: {
      composes: 'flexColumn center stretchSelf',
      fontFamily: 'font-ProximaNova-regular' // paddingBottom: theme.spacing(15),

    },
    knowledgeContent: {
      composes: 'flexRow justifyCenter alignCenter',
      alignSelf: 'center',
      width: 1200
    },
    textContainer: {
      composes: 'flexColumn',
      flex: 1
    },
    imagesContainer: {
      composes: 'flexColumn',
      flex: 1.2
    },
    card: {
      composes: 'flexColumn spaceBetween center',
      width: 118,
      padding: theme.spacing(3),
      height: 98,
      backgroundColor: '#fff',
      boxShadow: '0 6px 10px rgba(0,0,0,.08)',
      borderRadius: 10
    },
    cardBody: {},
    label: {
      composes: 'font-ProximaNova-bold',
      fontSize: 18
    }
  };
});

var Knowledge = function Knowledge() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.knowledgeRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.knowledgeContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.textContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Fontend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: classes.imagesContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: "react",
    src: "/images/technos/react.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: classes.cardBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx(_ProgressiveBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: item.color,
    percent: item.value,
    className: classes.progressiveBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }), __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "React",
    className: classes.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledge);

/***/ }),

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
    height: 13
  },
  color: {
    backgroundColor: function backgroundColor(_ref2) {
      var color = _ref2.color;
      return color;
    },
    width: function width(_ref3) {
      var percent = _ref3.percent;
      return percent + '%';
    },
    borderRadius: 15,
    height: '100%'
  }
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
//# sourceMappingURL=index.js.ed8fb030ff66a2a455bf.hot-update.js.map