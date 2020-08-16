webpackHotUpdate("static\\development\\pages\\project.js",{

/***/ "./animations/cards.ts":
false,

/***/ "./components/Common/BlockTitle.tsx":
false,

/***/ "./components/home/Competences.tsx":
false,

/***/ "./components/project/Content.tsx":
/*!****************************************!*\
  !*** ./components/project/Content.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\project\\Content.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    fullColumn: {
      composes: 'flexColumn stretchSelf'
    },
    root: {
      composes: '$fullColumn alignCenter',
      paddingBottom: theme.spacing(30)
    },
    content: {
      composes: '$fullColumn center'
    }
  };
});

var Content = function Content() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./node_modules/@popmotion/easing/dist/easing.es.js":
false,

/***/ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js":
false,

/***/ "./node_modules/framer-motion/dist/framer-motion.es.js":
false,

/***/ "./node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/framesync/dist/framesync.es.js":
false,

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
false,

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
false,

/***/ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js":
false,

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
false,

/***/ "./node_modules/stylefire/dist/stylefire.es.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./pages/project.tsx":
/*!***************************!*\
  !*** ./pages/project.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowSize */ "./hooks/useWindowSize.tsx");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _components_project_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/project/Header */ "./components/project/Header.tsx");
/* harmony import */ var _components_project_Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/project/Content */ "./components/project/Content.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\pages\\project.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  root: {
    composes: 'flexColumn flexCenter alignCenter stretchSelf flex1'
  },
  main: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    composes: 'flexColumn stretchSelf flex1',
    backgroundColor: '#000',
    color: '#fff'
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgDown, {
    flexDirection: 'column'
  })
});

var Project = function Project() {
  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__["useWindowSize"])();
  var classes = useStyles({
    size: size
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_5__["getScreen"])(size.width));
  }, []);
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_components_project_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_components_project_Content__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=project.js.d7eca2f234262446b797.hot-update.js.map