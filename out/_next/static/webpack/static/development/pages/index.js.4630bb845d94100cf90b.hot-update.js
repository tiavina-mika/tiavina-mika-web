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
/* harmony import */ var _shared_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/Text */ "./components/shared/Text.tsx");
/* harmony import */ var _shared_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/Title */ "./components/shared/Title.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Project.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var SYSTEM_CONTENT_BLOCK_WIDTH = 380;
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _textBlockRoot, _img;

  return {
    projectRoot: {
      composes: 'flexColumn justifyCenter stretchSelf',
      marginBottom: theme.spacing(15),
      letterSpacing: '0.1em'
    },
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexRow justifyCenter stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'center',
      padding: [0, theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["horizontalPaddingMobile"])]
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
      lineHeight: '1.2em'
    },
    description: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'font-Montserrat-medium',
      lineHeight: 1.8
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginBottom: theme.spacing(5)
    }),
    subtitle: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // composes: 'font-Montserrat-regular',
      fontSize: 26,
      color: theme.color.subtitle,
      textTransform: 'initial'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      fontSize: 22,
      letterSpacing: 1
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
    className: classes.projectRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.imageBlockRoot, reverse ? classes.reverseImage : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.imageContainer, reverse ? classes.imageContainerReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/".concat(image),
    alt: image,
    className: classes.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.textBlockRoot, reverse ? classes.textBlockRootReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.textContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.number, classes.textSpaceBottom),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, "Projet. ", reverseIndex), __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: title,
    level: 2,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.title, classes.textSpaceBottom),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }), __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: subtitle,
    level: 3,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.subtitle, classes.textSpaceBottom),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }), __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: description,
    tagName: "p",
    className: classes.textSpaceBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }), __jsx(_shared_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: link,
    text: "Voir plus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.4630bb845d94100cf90b.hot-update.js.map