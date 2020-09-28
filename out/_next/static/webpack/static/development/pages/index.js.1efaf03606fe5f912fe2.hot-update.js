webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/Knowledges.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/Knowledges.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _Knowledge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Knowledge */ "./components/home/knowledges/Knowledge.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    knowledgesRoot: {
      composes: 'flexColumn center stretchSelf',
      fontFamily: 'font-ProximaNova-regular',
      paddingBottom: theme.spacing(15)
    },
    progressiveContainer: {
      composes: 'flexColumn stretchSelf center',
      width: '100%',
      height: 200
    }
  };
});
var data = [{
  title: 'Frontend',
  technos: [{
    name: 'react',
    value: 98
  }]
}];

var Knowledges = function Knowledges() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.knowledgesRoot,
    id: "knowledges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(_Knowledge__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledges);

/***/ })

})
//# sourceMappingURL=index.js.1efaf03606fe5f912fe2.hot-update.js.map