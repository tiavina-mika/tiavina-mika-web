webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Competences.tsx":
false,

/***/ "./components/home/Skills.tsx":
false,

/***/ "./components/home/about/About.tsx":
false,

/***/ "./components/home/about/DownloadButton.tsx":
false,

/***/ "./components/home/projects/DesktopProjects.tsx":
false,

/***/ "./components/home/projects/MobileProjects.tsx":
false,

/***/ "./components/home/projects/PlxLayout.tsx":
false,

/***/ "./components/home/projects/Projects.tsx":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
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
/* harmony import */ var _components_home_presentation_Presentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/presentation/Presentation */ "./components/home/presentation/Presentation.tsx");
/* harmony import */ var _components_home_Interests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/Interests */ "./components/home/Interests.tsx");
/* harmony import */ var _components_home_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/Contact */ "./components/home/Contact.tsx");
/* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/menu/Menu */ "./components/menu/Menu.tsx");


var _right,
    _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  window: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].mdDown, {
    paddingLeft: 15,
    paddingRight: 15
  }),
  root: {
    composes: 'flexColumn flexCenter alignCenter stretchSelf flex1'
  },
  main: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    composes: 'flexColumn stretchSelf flex1',
    backgroundColor: '#000',
    color: '#fff'
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgDown, {
    flexDirection: 'column'
  }),
  left: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    composes: 'flexColumn'
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgUp, {
    width: '80%'
  }),
  right: (_right = {
    composes: 'flexColumn'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgUp, {
    width: '20%'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgDown, {
    order: -1,
    alignSelf: 'stretch'
  }), _right)
});

var Home = function Home() {
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
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_components_menu_Menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(_components_home_presentation_Presentation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_components_home_Interests__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx(_components_home_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4ae887a76925ba5904b4.hot-update.js.map