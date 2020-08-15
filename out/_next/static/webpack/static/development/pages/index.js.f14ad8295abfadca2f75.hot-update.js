webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/PlxLayout.tsx":
/*!************************************************!*\
  !*** ./components/home/projects/PlxLayout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\PlxLayout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var SYSTEM_CONTENT_BLOCK_WIDTH = 380;
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  root: {
    composes: 'flexRow justifyCenter',
    height: '280vh',
    width: '100%'
  },
  textBlockRoot: {
    composes: 'textBlock',
    maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH
  },
  textPlx: {
    maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
    top: '20%',
    opacity: 0,
    position: 'fixed',
    transform: 'translateX(-20vw)'
  },
  reverseTextPlx: {
    transform: 'translateX(0vw)'
  },
  imageBlockRoot: {
    composes: 'flexColumn alignCenter justifyCenter'
  },
  imageBlockReverse: {
    order: -1
  },
  img: {
    width: '100%',
    margin: 0,
    transform: 'translateY(50%)'
  },
  imagePlx: {
    pointerEvents: 'none',
    bottom: 0,
    opacity: 0,
    position: 'fixed',
    left: '13vw'
  },
  textTrigger: {
    marginTop: '120vh'
  },
  imageTrigger: {
    marginTop: '50vh'
  },
  scrollY: {
    height: '200vh'
  },
  description: {
    composes: 'font-Montserrat-regular',
    lineHeight: 1.6
  },
  subtitle: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    fontSize: 22,
    letterSpacing: '0.16em',
    color: theme.color.subtitle
  }, media.mdDown, {
    fontSize: 18
  })
});

var PlxLayout = function PlxLayout(_ref) {
  var image = _ref.image,
      reverse = _ref.reverse,
      title = _ref.title,
      description = _ref.description,
      subtitle = _ref.subtitle;
  var classes = useStyles();
  var triggerClass = title.split(' ').join('-') + '-trigger';
  var textTriggerClass = 'text' + triggerClass;
  var imageTriggerClass = 'image' + triggerClass;
  var textParallaxData = [{
    start: ".".concat(textTriggerClass),
    duration: '30vh',
    properties: [{
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }, {
    start: ".".concat(textTriggerClass),
    startOffset: '10vh',
    duration: '30vh',
    properties: [{
      startValue: reverse ? 0 : -20,
      endValue: reverse ? 16 : -38,
      unit: 'vw',
      property: 'translateX'
    }]
  }, {
    start: ".".concat(textTriggerClass),
    startOffset: '90vh',
    duration: '50vh',
    properties: [{
      startValue: 1,
      endValue: 0,
      property: 'opacity'
    }]
  }];
  var imageParallaxData = [{
    start: ".".concat(imageTriggerClass),
    duration: '50vh',
    properties: [{
      startValue: 0,
      endValue: -40,
      unit: 'vh',
      property: 'translateY'
    }, {
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }, {
    start: ".".concat(imageTriggerClass),
    startOffset: '60vh',
    duration: '30vh',
    properties: [{
      startValue: 0,
      endValue: reverse ? -13 : 15,
      unit: 'vw',
      property: 'translateX'
    }]
  }, {
    start: ".".concat(imageTriggerClass),
    startOffset: '190vh',
    duration: '20vh',
    properties: [{
      startValue: 1,
      endValue: 0,
      property: 'opacity'
    }]
  }];
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.textBlockRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(textTriggerClass, classes.textTrigger),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }), __jsx(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
    parallaxData: textParallaxData,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.textPlx, reverse ? classes.reverseTextPlx : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, title), __jsx("h3", {
    className: classes.subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, subtitle), __jsx("div", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, description))), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.imageBlockRoot, reverse ? classes.imageBlockReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(imageTriggerClass, classes.imageTrigger),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }), __jsx(react_plx__WEBPACK_IMPORTED_MODULE_3___default.a, {
    parallaxData: imageParallaxData,
    className: classes.imagePlx,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/".concat(image),
    alt: image,
    className: classes.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: classes.scrollY,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PlxLayout);

/***/ })

})
//# sourceMappingURL=index.js.f14ad8295abfadca2f75.hot-update.js.map