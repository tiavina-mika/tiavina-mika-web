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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Button */ "./components/shared/Button.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Project.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var SYSTEM_CONTENT_BLOCK_WIDTH = 380;
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _textBlockRoot, _img;

  return {
    root: {
      composes: 'flexColumn justifyCenter stretchSelf',
      marginBottom: theme.spacing(15),
      letterSpacing: '0.1em'
    },
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexRow justifyCenter stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'center',
      padding: [0, theme.spacing(2)]
    }),
    imageBlockRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      flex: 1.3
    }),
    textBlockRoot: (_textBlockRoot = {
      composes: 'flexRow'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_textBlockRoot, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      flex: 1
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_textBlockRoot, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginTop: theme.spacing(4)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_textBlockRoot, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smLg, {
      maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH
    }), _textBlockRoot),
    textBlockRootReverse: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      justifyContent: 'flex-end'
    }),
    textContent: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
      padding: [theme.spacing(8), theme.spacing(6)]
    }),
    reverseImage: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      order: 1
    }),
    imageContainer: {
      composes: 'flexRow justifyEnd stretchSelf',
      paddingRight: theme.spacing(6),
      transform: 'translate(0%, 0px) rotate(-4e-05deg) rotateY(15deg) rotateX(9.99994deg)',
      transformOrigin: 'center top',
      pointerEvents: 'none'
    },
    imageContainerReverse: {
      transform: 'translate(0%, 0px) rotate(-4e-05deg) rotateY(-15deg) rotateX(9.99994deg)'
    },
    img: (_img = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_img, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      width: '90%'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_img, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smLg, {
      width: '95%'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_img, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smDown, {
      width: '100%'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_img, "margin", 0), _img),
    textSpaceBottom: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      marginBottom: theme.spacing(6)
    }),
    number: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'font-Montserrat-bold',
      color: '#F8C462'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginBottom: theme.spacing(5)
    }),
    title: {
      lineHeight: '1em'
    },
    description: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'font-Montserrat-medium',
      lineHeight: 1.8
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginBottom: theme.spacing(5)
    }),
    subtitle: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'font-Montserrat-regular',
      fontSize: 32,
      color: theme.color.subtitle,
      textTransform: 'initial'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      fontSize: 15
    }),
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
      link = _ref.link,
      description = _ref.description,
      subtitle = _ref.subtitle,
      reverseIndex = _ref.reverseIndex;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.imageBlockRoot, reverse ? classes.reverseImage : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.imageContainer, reverse ? classes.imageContainerReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/".concat(image),
    alt: image,
    className: classes.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.textBlockRoot, reverse ? classes.textBlockRootReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.textContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.number, classes.textSpaceBottom),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, "Projet. ", reverseIndex), __jsx("h2", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.title, classes.textSpaceBottom),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, title), __jsx("h3", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.textSpaceBottom, classes.subtitle),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, subtitle), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.textSpaceBottom, classes.description),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, description), __jsx(_shared_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: link,
    text: "Voir plus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.8fe6168c98445c0d0ec2.hot-update.js.map