webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/Project.tsx":
/*!**********************************************!*\
  !*** ./components/home/projects/Project.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Project.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



// import ProjectLink from './ProjectLink';
var SYSTEM_CONTENT_BLOCK_WIDTH = 380;
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _ref;

  return _ref = {
    root: {
      composes: 'flexRow justifyCenter flex1' // height: '280vh',
      // width: '100%',

    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "root", {
    composes: 'flexRow justifyCenter flex1' // height: '280vh',
    // width: '100%',

  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "textBlockRoot", {
    composes: 'flexRow',
    flex: 1 // maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,

  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "textPlx", {
    maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
    padding: [theme.spacing(8), theme.spacing(6)] // top: '20%',
    // opacity: 0,
    // position: 'fixed',
    // transform: 'translateX(-20vw)',

  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "reverseTextPlx", {
    transform: 'translateX(0vw)'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "imageBlockRoot", {
    composes: 'flexColumn center',
    flex: 1.3
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "imageBlockReverse", {
    order: -1
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "img", {
    width: '100%',
    margin: 0 // transform: 'translateY(50%)',

  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "imagePlx", {
    composes: 'flexRow justifyEnd stretchSelf blue',
    width: '100%'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "imageContainer", {
    composes: 'flexRow justifyEnd stretchSelf red',
    paddingRight: theme.spacing(6),
    transform: 'translate(0%, 0px) rotate(-4e-05deg) rotateY(15deg) rotateX(9.99994deg)',
    transformOrigin: 'center top',
    pointerEvents: 'none'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "textTrigger", {// marginTop: '120vh',
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "imageTrigger", {// marginTop: '50vh',
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "scrollY", {
    height: '200vh'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "description", {
    composes: 'font-Montserrat-regular',
    lineHeight: 1.6
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "subtitle", {
    composes: 'font-tungsten-regular',
    fontSize: 32,
    letterSpacing: '0.16em',
    color: theme.color.subtitle,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "link", {
    marginTop: theme.spacing(6),
    justifyContent: 'flex-start !important'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "linkText", {
    justifyContent: 'flex-start !important'
  }), _ref;
});

var Project = function Project(_ref2) {
  var image = _ref2.image,
      reverse = _ref2.reverse,
      title = _ref2.title,
      description = _ref2.description,
      subtitle = _ref2.subtitle;
  var classes = useStyles();
  var triggerClass = title.split(' ').join('-') + '-trigger';
  var textTriggerClass = 'text' + triggerClass;
  var imageTriggerClass = 'image' + triggerClass;
  var imageParallaxData = [{
    start: ".".concat(imageTriggerClass),
    duration: '50vh',
    properties: [{
      startValue: 0,
      endValue: -10,
      unit: 'vh',
      property: 'translateY'
    }, {
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }, {
    start: ".".concat(imageTriggerClass),
    duration: '50vh',
    properties: [{
      startValue: 10,
      endValue: 0,
      unit: 'vh',
      property: 'translateY'
    }]
  } // {
  //     start: `.${imageTriggerClass}`,
  //     startOffset: '60vh',
  //     duration: '30vh',
  //     properties: [
  //         {
  //             startValue: 0,
  //             endValue: reverse ? -13 : 15,
  //             unit: 'vw',
  //             property: 'translateX',
  //         },
  //     ],
  // },
  // {
  //     start: `.${imageTriggerClass}`,
  //     startOffset: '190vh',
  //     duration: '20vh',
  //     properties: [
  //         {
  //             startValue: 1,
  //             endValue: 0,
  //             property: 'opacity',
  //         },
  //     ],
  // },
  ];
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.imageBlockRoot, reverse ? classes.imageBlockReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.imageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/images/".concat(image),
    alt: image,
    className: classes.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: classes.textBlockRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.textPlx, reverse ? classes.reverseTextPlx : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, title), __jsx("h3", {
    className: classes.subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, subtitle), __jsx("div", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 25
    }
  }, description)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.939c6a693b179ec4564e.hot-update.js.map