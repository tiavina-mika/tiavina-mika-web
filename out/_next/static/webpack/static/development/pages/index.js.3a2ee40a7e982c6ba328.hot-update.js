webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/ItemsChart.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/ItemsChart.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _ProgressiveBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressiveBar */ "./components/home/knowledges/ProgressiveBar.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\ItemsChart.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    items: {
      composes: 'flexColumn stretchSelf center font-ProximaNova-bold',
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      fontSize: 14
    },
    item: {
      composes: 'flexRow center stretchSelf',
      marginBottom: theme.spacing(2)
    },
    texts: {
      composes: 'flexColumn stretchSelf justifyCenter',
      flex: 1
    },
    label: {},
    value: {
      color: '#8693B5',
      marginTop: theme.spacing(0.7)
    },
    progressiveBar: {
      flex: 2
    }
  };
});

var ItemsChart = function ItemsChart(_ref) {
  var items = _ref.items,
      itemClassName = _ref.itemClassName,
      className = _ref.className;
  var classes = useStyles();
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.items, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, items.sort(function (_ref2) {
    var value = _ref2.value;
    return value;
  }).map(function (item, index) {
    return __jsx("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.item, itemClassName),
      key: item.label + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: classes.texts,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: classes.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 29
      }
    }, item.label), __jsx("div", {
      className: classes.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, item.value, "%")), __jsx(_ProgressiveBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: item.color,
      percent: item.value,
      className: classes.progressiveBar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemsChart);

/***/ })

})
//# sourceMappingURL=index.js.3a2ee40a7e982c6ba328.hot-update.js.map