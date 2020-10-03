webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/KnowledgeProgressBar.tsx":
/*!*************************************************************!*\
  !*** ./components/home/knowledges/KnowledgeProgressBar.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _BlockTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockTitle */ "./components/home/knowledges/BlockTitle.tsx");
/* harmony import */ var _ItemsChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemsChart */ "./components/home/knowledges/ItemsChart.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\KnowledgeProgressBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _knowledgeProgressBar;

  return {
    knowledgeProgressBarRoot: (_knowledgeProgressBar = {
      composes: 'flexColumn center flex1',
      fontFamily: 'font-ProximaNova-regular',
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeProgressBar, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgDown, {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeProgressBar, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdDown, {
      alignSelf: 'stretch'
    }), _knowledgeProgressBar),
    knowledgeProgressBarContent: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf',
      alignSelf: 'center'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      alignSelf: 'stretch'
    }),
    cards: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginTop: theme.spacing(4),
      margin: -theme.spacing(1.8)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      alignItems: 'flex-start',
      justifyCenter: 'flex-start',
      margin: [theme.spacing(1), 0],
      padding: 0
    }),
    card: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: 300,
      padding: [theme.spacing(2.5), theme.spacing(5)],
      margin: theme.spacing(1.8),
      backgroundColor: '#fff',
      boxShadow: '0 8px 10px 0 rgba(0,0,0,.08)',
      borderRadius: 32,
      fontSize: 18
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      padding: [theme.spacing(3), theme.spacing(4)],
      margin: [theme.spacing(1), 0],
      fontSize: 14
    }),
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'justifyCenter',
      textAlign: 'center',
      fontSize: 22
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      justifyContent: 'flex-start'
    })
  };
});

var KnowledgeProgressBar = function KnowledgeProgressBar(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.knowledgeProgressBarRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.knowledgeProgressBarContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_BlockTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: data.title,
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx(_ItemsChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: data.items.sort(function (a, b) {
      return b.value - a.value;
    }),
    className: classes.cards,
    itemClassName: classes.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (KnowledgeProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.2d1d07576dc09b15b791.hot-update.js.map