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
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About */ "./components/home/presentation/About.tsx");
/* harmony import */ var _Common_PlxComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/PlxComponent */ "./components/Common/PlxComponent.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\presentation\\Presentation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  presentation: {
    composes: 'flexRow flexEnd stretchSelf',
    height: '100vh' // background: `linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(0,0,0,0.2) 20.29%, rgba(0,0,0,0.1) 80.89%, rgba(0,0,0,0) 99.93%)`,
    // backgroundColor: '#171717',
    // backgroundImage: `url(images/bg.svg)`,

  }
});
var triggerClass = 'presentationHeader-trigger';

var Presentation = function Presentation() {
  var classes = useStyles();
  var parallaxData = [{
    start: ".".concat(triggerClass),
    duration: '40vh',
    easing: 'easeInSine',
    properties: [{
      startValue: '#fff',
      endValue: '#000',
      property: 'backgroundColor'
    }]
  }];
  return __jsx(_Common_PlxComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.presentation,
    parallaxData: parallaxData,
    triggerClass: triggerClass,
    id: "presentation",
    trigger: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Presentation);

/***/ })

})
//# sourceMappingURL=index.js.8c75338d9088273c28f3.hot-update.js.map