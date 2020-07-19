webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/presentation/About.tsx":
/*!************************************************!*\
  !*** ./components/home/presentation/About.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ "./components/home/presentation/Title.tsx");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post */ "./components/home/presentation/Post.tsx");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _Common_PlxComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Common/PlxComponent */ "./components/Common/PlxComponent.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\presentation\\About.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _h;

  return {
    about: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      margin: 50,
      fontFamily: 'Prequel, sans-serif',
      letterSpacing: '0.6vw',
      color: '#fff'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smDown, {
      marginLeft: 10
    }),
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      margin: [10, 0, 0, 0],
      position: 'relative',
      fontSize: '3.8vw',
      textShadow: '0px 0px 25px rgba(0,0,0,0.2)'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
      fontSize: 22
    }),
    name: {},
    hello: {
      '& h6': (_h = {
        fontSize: 24
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
        fontSize: 14
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, "letterSpacing", '0.2vw'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, "margin", 0), _h)
    },
    post: {
      textShadow: '0px 0px 2px rgba(0,0,0,0.5)',
      color: theme.color.primary,
      fontSize: 20
    }
  };
});
var textName = 'Tiavina Michael';
var textFirstName = 'Ralainirina';
var textPost = 'Developpeur Full-Stack / Web Designer';

var About = function About() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      firstName = _useState[0],
      setFirstName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      lastName = _useState2[0],
      setLastName = _useState2[1];

  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__["screenState"]);
  var parallaxData = [{
    start: "self",
    duration: '70vh',
    easing: 'easeInSine',
    properties: [{
      startValue: 1,
      endValue: 0,
      property: 'opacity'
    }]
  }];
  return __jsx(_Common_PlxComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.about,
    parallaxData: parallaxData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.hello,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Hello! Je suis")), __jsx("div", {
    className: classes.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: textName,
    onComplete: function onComplete() {
      return setFirstName(true);
    },
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: textFirstName,
    onComplete: function onComplete() {
      return setLastName(true);
    },
    className: classes.title,
    display: isMobile ? true : firstName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), __jsx(_Post__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: textPost,
    className: classes.post,
    display: isMobile ? true : lastName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=index.js.36da2699939fc9a9c026.hot-update.js.map