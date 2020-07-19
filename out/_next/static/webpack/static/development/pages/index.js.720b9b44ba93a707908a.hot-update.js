webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Common/BlockTitle.tsx":
/*!******************************************!*\
  !*** ./components/Common/BlockTitle.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _PlxComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlxComponent */ "./components/Common/PlxComponent.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\Common\\BlockTitle.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _root, _main, _dotted;

  return {
    root: (_root = {
      composes: 'flexRow center stretchSelf flex1',
      textTransform: 'uppercase',
      fontFamily: 'Prequelrough, sans-serif',
      width: '100%',
      opacity: 0
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'flex-start',
      opacity: 1
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
      marginBottom: theme.spacing(4)
    }), _root),
    right: {
      composes: 'justifyEnd'
    },
    main: (_main = {
      composes: 'flexRow alignCenter'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_main, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      paddingLeft: 15
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_main, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      order: -1
    }), _main),
    icon: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexRow',
      marginRight: 10
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
      marginBottom: theme.spacing(1),
      '& img': {
        width: 25
      }
    }),
    titleContainer: {},
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontSize: 32,
      letterSpacing: ' 0.16em',
      color: '#fff',
      marginBottom: 10
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
      fontSize: 20
    }),
    dotted: (_dotted = {
      borderTop: '1px dotted white',
      textIndent: -9999
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_dotted, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdLg, {
      marginTop: theme.spacing(3)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_dotted, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
      marginTop: theme.spacing(1)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_dotted, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      width: 200
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_dotted, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      marginTop: theme.spacing(3),
      width: '30vw'
    }), _dotted),
    dottedRight: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      order: 1
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      width: '50vw'
    }),
    subtitle: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontSize: 22,
      letterSpacing: '0.16em',
      color: theme.color.subtitle
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
      fontSize: 18
    }),
    trigger: {
      marginTop: '20vh'
    }
  };
});

var BlockTitle = function BlockTitle(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subtitle = _ref.subtitle,
      right = _ref.right,
      icon = _ref.icon;
  var classes = useStyles();
  var triggerClass = title.split(' ').join('-') + '-titleTrigger';
  var parallaxData = [{
    start: ".".concat(triggerClass),
    duration: '50vh',
    properties: [{
      startValue: 20,
      endValue: 5,
      unit: 'vh',
      property: 'translateY'
    }, {
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }];
  return __jsx(_PlxComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    triggerClass: triggerClass,
    parallaxData: parallaxData,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, right ? classes.right : null),
    triggerlassName: classes.trigger,
    trigger: classes.trigger,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.dotted, right ? classes.dottedRight : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, icon && __jsx("div", {
    className: classes.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/icons/".concat(icon, ".svg"),
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: classes.titleContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, title), subtitle && __jsx("h6", {
    className: classes.subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 34
    }
  }, subtitle))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockTitle);

/***/ })

})
//# sourceMappingURL=index.js.720b9b44ba93a707908a.hot-update.js.map