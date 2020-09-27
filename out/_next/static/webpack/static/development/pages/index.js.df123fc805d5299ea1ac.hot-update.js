webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/OveralCard.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/OveralCard.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _ItemsChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemsChart */ "./components/home/knowledges/ItemsChart.tsx");
/* harmony import */ var _PieChartSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PieChartSvg */ "./components/home/knowledges/PieChartSvg.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\OveralCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    overallCard: {
      composes: 'flexColumn justifyCenter center font-ProximaNova-regular',
      // paddingBottom: theme.spacing(15),
      // height: 370,
      paddingBottom: theme.spacing(4),
      width: 420,
      boxShadow: '1px 15px 10px 0 #C9D3DD',
      borderRadius: 20
    },
    header: {
      composes: 'flexColumn justifyCenter stretchSelf',
      backgroundColor: '#F1FDFF',
      padding: [theme.spacing(4), theme.spacing(4)]
    },
    pieChart: {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(5)
    }
  };
});
var itemsChart = [{
  label: 'Frontend',
  value: 95,
  color: '#956FFF'
}, {
  label: 'Backend',
  value: 90,
  color: '#FEE895'
}, {
  label: 'Database',
  value: 90,
  color: '#FD7A8C'
}, {
  label: 'Design',
  value: 75,
  color: '#95BF46'
}, {
  label: 'Ops',
  value: 50,
  color: '#00D8FF'
}];

var OveralCard = function OveralCard() {
  var classes = useStyles();
  var total = items.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return __jsx("div", {
    className: classes.overallCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Note G\xE9n\xE9rale"), __jsx("div", {
    className: classes.pieChart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(_PieChartSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    total: 96,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx(_ItemsChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: itemsChart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OveralCard);

/***/ })

})
//# sourceMappingURL=index.js.df123fc805d5299ea1ac.hot-update.js.map