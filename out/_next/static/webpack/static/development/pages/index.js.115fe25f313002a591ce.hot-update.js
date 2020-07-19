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
    trigger: 20,
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
      lineNumber: 130,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, icon && __jsx("div", {
    className: classes.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/icons/".concat(icon, ".svg"),
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: classes.titleContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, title), subtitle && __jsx("h6", {
    className: classes.subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 34
    }
  }, subtitle))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockTitle);

/***/ }),

/***/ "./components/Common/PlxComponent.tsx":
/*!********************************************!*\
  !*** ./components/Common/PlxComponent.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\Common\\PlxComponent.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PlxComponent = function PlxComponent(_ref) {
  var _jsx;

  var className = _ref.className,
      parallaxData = _ref.parallaxData,
      triggerClass = _ref.triggerClass,
      children = _ref.children,
      triggerlassName = _ref.triggerlassName,
      id = _ref.id,
      trigger = _ref.trigger;
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__["screenState"]);
  var Component = !isMobile ? react_plx__WEBPACK_IMPORTED_MODULE_4___default.a : 'div';
  var otherProps = isMobile ? {} : {
    parallaxData: parallaxData
  };
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    className: className,
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), !isMobile && __jsx("div", (_jsx = {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(triggerClass, triggerlassName),
    style: {
      pointerEvents: 'none'
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "style", {
    marginTop: "".concat(trigger, "vh")
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 17
  }), _jsx)), children);
};

/* harmony default export */ __webpack_exports__["default"] = (PlxComponent);

/***/ }),

/***/ "./components/home/presentation/Presentation.tsx":
/*!*******************************************************!*\
  !*** ./components/home/presentation/Presentation.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About */ "./components/home/presentation/About.tsx");
/* harmony import */ var _Common_PlxComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/PlxComponent */ "./components/Common/PlxComponent.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\presentation\\Presentation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  presentation: {
    composes: 'flexRow flexEnd stretchSelf',
    height: '100vh' // background: `linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(0,0,0,0.2) 20.29%, rgba(0,0,0,0.1) 80.89%, rgba(0,0,0,0) 99.93%)`,
    // backgroundColor: '#171717',
    // backgroundColor: 'red',
    // background: `linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(7,17,35,0.4) 59.29%, rgba(6,15,31,0.6) 99.89%, rgba(6,15,31,0.8) 99.93%)`,
    // backgroundImage: `url(images/bg.svg)`,

  }
});

var Presentation = function Presentation() {
  var classes = useStyles();

  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useViewportScroll"])(),
      scrollYProgress = _useViewportScroll.scrollYProgress;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      bgOpacity = _useState[0],
      setBgOpacity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      opacity = _useState2[0],
      setOpacity = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      position = _useState3[0],
      setPosition = _useState3[1];

  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_4__["screenState"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return scrollYProgress.onChange(function (latest) {
      setOpacity(1 - latest * 3.5);
      setBgOpacity(latest * 15);
      setPosition(latest * 220);
    });
  }, []);
  var parallaxData = [// {
  //     start: "self",
  //     startOffset: "10vw",
  //     end: "self",
  //     endOffset: "50vh",
  //     easing: "easeInSine",
  //     properties: [
  //         {
  //             startValue: "#6b34c9",
  //             endValue: "#fead7b",
  //             property: "backgroundColor",
  //             unit: ""
  //         }
  //     ]
  // },
  {
    start: '.trigger-test',
    duration: '40vh',
    // startOffset: "60vh",
    // end: "self",
    // endOffset: "100vh",
    // easing: "easeInSine",
    properties: [{
      startValue: '#fff',
      endValue: '#000',
      property: 'backgroundColor' // unit: ""

    } // {
    //     startValue: 0,
    //     endValue: 1,
    //     property: 'opacity',
    // }
    ]
  }];
  var Div = isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div;
  var styles = isMobile ? {
    backgroundColor: 'rgb(23, 23, 23)'
  } : {
    background: "linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(0,0,0,".concat(bgOpacity - 0.2, ") 20.29%, rgba(0,0,0,").concat(bgOpacity - 0.1, ") 80.89%, rgba(0,0,0,").concat(bgOpacity, ") 99.93%)")
  };
  return __jsx(_Common_PlxComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.presentation,
    parallaxData: parallaxData,
    id: "presentation",
    triggerlassName: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "trigger-test",
    style: {
      marginTop: '20vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx(_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: isMobile ? 0 : position,
    opacity: opacity,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Presentation);

/***/ })

})
//# sourceMappingURL=index.js.115fe25f313002a591ce.hot-update.js.map