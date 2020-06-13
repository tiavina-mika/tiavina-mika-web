webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/about/About.tsx":
/*!*****************************************!*\
  !*** ./components/home/about/About.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _animations_about__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../animations/about */ "./animations/about.ts");
/* harmony import */ var _animations_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../animations/app */ "./animations/app.ts");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _Common_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Common/Button */ "./components/Common/Button.tsx");




var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\about\\About.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])(function (theme) {
  var _content, _left, _right;

  return {
    rowStretch: {
      composes: 'flexRow justifyCenter stretchSelf'
    },
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow flex1 justifyCenter',
      fontFamily: 'Prequelrough, sans-serif',
      paddingBottom: theme.spacing(30)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginTop: theme.spacing(8)
    }, "marginTop", theme.spacing(8))),
    content: (_content = {
      composes: '$rowStretch'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_content, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(5)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_content, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_10__["lgScreenWidth"] - 400,
      marginTop: theme.spacing(20)
    }), _content),
    center: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: '$rowStretch'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].smLg, {
      width: '60%'
    }),
    left: (_left = {
      composes: 'flexColumn center flex1'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].smUp, {
      '& > img': {
        width: 300
      },
      flex: 1
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].xsSm, {
      '& > img': {
        width: '60%'
      }
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].xsDown, {
      '& > img': {
        width: '100%'
      }
    }), _left),
    right: (_right = {
      '& h3': {
        color: theme.color.grey,
        fontWeight: '400',
        lineHeight: 1.4,
        textTransform: 'uppercase',
        letterSpacing: 3.5
      },
      '& h2': Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
        color: '#fff',
        fontWeight: '400',
        lineHeight: 1.4,
        textTransform: 'uppercase',
        letterSpacing: 3.5,
        marginTop: 10
      }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
        width: 650
      })
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      flex: 2,
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, {
      marginTop: theme.spacing(8)
    }), _right),
    descriptionText: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      lineHeight: 1.8,
      marginTop: theme.spacing(3),
      fontSize: 20
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdDown, {
      fontSize: 16
    }),
    shortDescription: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      color: theme.color.subtitle,
      fontFamily: 'Montserrat, sans-serif'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      width: 650
    }),
    description: {
      fontFamily: 'Montserrat-Regular, sans-serif',
      color: '#fff'
    },
    buttonContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow justifyCenter stretchSelf',
      marginTop: theme.spacing(20)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdDown, {
      marginTop: theme.spacing(1.2)
    }),
    button: {
      flex: 1
    }
  };
});

var About = function About() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_13__["screenState"]);

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__["useInView"])({
    threshold: 0.1,
    triggerOnce: false
  }),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useViewportScroll"])(),
      scrollYProgress = _useViewportScroll.scrollYProgress;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    scrollYProgress.onChange(function (latest) {
      return setValue(latest);
    });
  }, []);
  /** Components */

  var H3 = isMobile ? 'h3' : framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].h3;
  var H2 = isMobile ? 'h2' : framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].h2;
  var Div = isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div;
  var Img = isMobile ? 'img' : framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].img;
  /** Animation */

  var h3Animation = isMobile ? {} : Object(_animations_about__WEBPACK_IMPORTED_MODULE_11__["animate"])(inView);
  var h2Animation = isMobile ? {} : Object(_animations_about__WEBPACK_IMPORTED_MODULE_11__["animate"])(inView, 2);
  var shortDescriptionAnimation = isMobile ? {} : Object(_animations_about__WEBPACK_IMPORTED_MODULE_11__["animate"])(inView, 3);
  var descriptionAnimation = isMobile ? {} : Object(_animations_about__WEBPACK_IMPORTED_MODULE_11__["animate"])(inView, 3);
  return __jsx("div", {
    className: classes.root,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "A propos de moi",
    subtitle: "Qui suis-je",
    right: true,
    animateIcon: true,
    startAnimation: inView,
    icon: "setting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.left,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, __jsx(Img, {
    alt: "",
    src: "/images/profile.jpg",
    style: inView ? {
      scale: 0.5 + value
    } : {} // style={inView ? { scale: value ? value : 1, rotate: `${value ? value * 10 : 0}deg` } : {}}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: classes.buttonContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }, __jsx(_Common_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    text: "T\xE9l\xE9charger mon CV",
    icon: "download",
    animation: Object(_animations_app__WEBPACK_IMPORTED_MODULE_12__["downloadButtonAnimation"])(inView),
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: classes.right,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx(H3, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, h3Animation, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }), "Tiavina Michael Ralainirina"), __jsx(H2, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, h2Animation, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }), "D\xE9veloppeur FullStack / Web Designer / Lead Developpeur"), __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shortDescriptionAnimation, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.shortDescription, classes.descriptionText),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam")), __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, descriptionAnimation, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.description, classes.descriptionText),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 29
    }
  }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=index.js.9624c51531784800ab4a.hot-update.js.map