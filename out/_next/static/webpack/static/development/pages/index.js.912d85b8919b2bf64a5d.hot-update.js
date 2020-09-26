webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/Project.tsx":
/*!**********************************************!*\
  !*** ./components/home/projects/Project.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Project.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




// import ProjectLink from './ProjectLink';
var SYSTEM_CONTENT_BLOCK_WIDTH = 380;
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    root: {
      composes: 'flexRow justifyCenter flex1' // height: '280vh',
      // width: '100%',

    },
    textBlockRoot: {
      composes: 'flexRow',
      flex: 1 // maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,

    },
    textPlx: {
      maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
      padding: [theme.spacing(8), theme.spacing(6)] // top: '20%',
      // opacity: 0,
      // position: 'fixed',
      // transform: 'translateX(-20vw)',

    },
    reverseTextPlx: {
      transform: 'translateX(0vw)'
    },
    imageBlockRoot: {
      composes: 'flexColumn center',
      flex: 1.3
    },
    imageBlockReverse: {
      order: -1
    },
    img: {
      width: '100%',
      margin: 0 // transform: 'translateY(50%)',

    },
    imagePlx: {
      composes: 'flexRow justifyEnd stretchSelf blue'
    },
    imageContainer: {
      composes: 'flexRow justifyEnd stretchSelf red',
      paddingRight: theme.spacing(6),
      transform: 'translate(0%, 0px) rotate(-4e-05deg) rotateY(15deg) rotateX(9.99994deg)',
      transformOrigin: 'center top',
      pointerEvents: 'none'
    },
    textTrigger: {// marginTop: '120vh',
    },
    imageTrigger: {// marginTop: '50vh',
    },
    scrollY: {
      height: '200vh'
    },
    description: {
      composes: 'font-Montserrat-regular',
      lineHeight: 1.6
    },
    subtitle: {
      composes: 'font-tungsten-regular',
      fontSize: 32,
      letterSpacing: '0.16em',
      color: theme.color.subtitle,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    link: {
      marginTop: theme.spacing(6),
      justifyContent: 'flex-start !important'
    },
    linkText: {
      justifyContent: 'flex-start !important'
    }
  };
});

var Project = function Project(_ref) {
  var image = _ref.image,
      reverse = _ref.reverse,
      title = _ref.title,
      description = _ref.description,
      subtitle = _ref.subtitle;
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, imageTriggerClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.imageBlockRoot, reverse ? classes.imageBlockReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx(react_plx__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.imagePlx,
    parallaxData: imageParallaxData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.imageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/".concat(image),
    alt: image,
    className: classes.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: classes.scrollY,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: classes.textBlockRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.textPlx, reverse ? classes.reverseTextPlx : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, title), __jsx("h3", {
    className: classes.subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, subtitle), __jsx("div", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.912d85b8919b2bf64a5d.hot-update.js.map