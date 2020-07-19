webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About */ "./components/home/presentation/About.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\presentation\\Presentation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  presentation: {
    composes: 'flexRow flexEnd stretchSelf',
    height: '100vh' // backgroundColor: '#171717',
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

  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_5__["screenState"]);
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
      startValue: "red",
      endValue: "green",
      property: "backgroundColor",
      unit: ""
    }, {
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }];
  var Div = isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div;
  var styles = isMobile ? {
    backgroundColor: 'rgb(23, 23, 23)'
  } : {
    background: "linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(0,0,0,".concat(bgOpacity - 0.2, ") 20.29%, rgba(0,0,0,").concat(bgOpacity - 0.1, ") 80.89%, rgba(0,0,0,").concat(bgOpacity, ") 99.93%)")
  };
  return __jsx(react_plx__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.presentation,
    parallaxData: parallaxData,
    id: "presentation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(_About__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: isMobile ? 0 : position,
    opacity: opacity,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Presentation);

/***/ })

})
//# sourceMappingURL=index.js.78e07eadef2123ad2bfa.hot-update.js.map