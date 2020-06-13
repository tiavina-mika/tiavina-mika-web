webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Common/BlockTitle.tsx":
/*!******************************************!*\
  !*** ./components/Common/BlockTitle.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _animations_onEnter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/onEnter */ "./animations/onEnter.ts");
/* harmony import */ var _animations_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../animations/app */ "./animations/app.ts");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\Common\\BlockTitle.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  var _root, _main, _icon, _dotted;

  return {
    root: (_root = {
      composes: 'flexRow center stretchSelf flex1',
      textTransform: 'uppercase',
      fontFamily: 'Prequelrough, sans-serif',
      width: '100%'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_root, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_root, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
      marginBottom: theme.spacing(4)
    }), _root),
    right: {
      composes: 'justifyEnd'
    },
    main: (_main = {
      composes: 'flexRow alignCenter'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_main, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgUp, {
      paddingLeft: 15
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_main, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgDown, {
      order: -1
    }), _main),
    icon: (_icon = {
      composes: 'flexRow',
      marginRight: 10
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_icon, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
      marginBottom: theme.spacing(1)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_icon, '& img', {
      width: 10
    }), _icon),
    titleContainer: {},
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      fontSize: 32,
      letterSpacing: ' 0.16em',
      color: '#fff',
      marginBottom: 10
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
      fontSize: 20
    }),
    dotted: (_dotted = {
      borderTop: '1px dotted white',
      textIndent: -9999
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_dotted, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdLg, {
      marginTop: theme.spacing(3)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_dotted, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
      marginTop: theme.spacing(1)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_dotted, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgDown, {
      width: 200
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_dotted, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgUp, {
      marginTop: theme.spacing(3),
      width: '30vw'
    }), _dotted),
    dottedRight: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      order: 1
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgUp, {
      width: '50vw'
    }),
    subtitle: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      fontSize: 22,
      letterSpacing: '0.16em',
      color: theme.color.subtitle
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
      fontSize: 18
    })
  };
});

var BlockTitle = function BlockTitle(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subtitle = _ref.subtitle,
      right = _ref.right,
      startAnimation = _ref.startAnimation,
      icon = _ref.icon,
      animateIcon = _ref.animateIcon;
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_10__["screenState"]);
  var Img = isMobile ? 'img' : framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].img;
  var Div = isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div;

  var iconAnimationProps = function iconAnimationProps(startAnimation) {
    return isMobile ? {} : animateIcon ? Object(_animations_app__WEBPACK_IMPORTED_MODULE_9__["turnIndefinetily"])(startAnimation) : {};
  };

  var onEnterAnimationProps = function onEnterAnimationProps(startAnimation) {
    return isMobile ? {} : Object(_animations_onEnter__WEBPACK_IMPORTED_MODULE_8__["onEnterAnimation"])(startAnimation);
  };

  return __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, onEnterAnimationProps(startAnimation), {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, right ? classes.right : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.dotted, right ? classes.dottedRight : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, icon && __jsx("div", {
    className: classes.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx(Img, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: "/images/icons/".concat(icon, ".svg"),
    alt: ""
  }, iconAnimationProps(startAnimation), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: classes.titleContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, title), subtitle && __jsx("h6", {
    className: classes.subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 34
    }
  }, subtitle))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockTitle);

/***/ })

})
//# sourceMappingURL=index.js.6116624cb6f295d98955.hot-update.js.map