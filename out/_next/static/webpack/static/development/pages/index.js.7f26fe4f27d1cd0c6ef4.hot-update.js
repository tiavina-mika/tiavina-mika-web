webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Header.tsx":
/*!**************************************!*\
  !*** ./components/shared/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ "./components/shared/Title.tsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./components/shared/Text.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./components/shared/Menu.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    headerRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn justifyCenter font-ProximaNova-regular',
      fontSize: 22,
      background: 'linear-gradient(top bottom, #CCC 0%, #F4F4F4 100%)'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      padding: theme.spacing(20)
    }),

    /** Title */
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn',
      width: '75%',
      marginTop: theme.spacing(22)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      marginTop: theme.spacing(3),
      padding: [theme.spacing(1), theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_5__["horizontalPaddingMobile"])]
    }),
    titleContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginBottom: theme.spacing(6)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdDown, {
      marginBottom: theme.spacing(3)
    }),
    title: {
      textTransform: 'uppercase',
      fontFamily: 'DINCondensed !important'
    },
    subtitle: {
      fontSize: 32
    },
    descriptionContainer: {
      composes: 'flexRow stretchSelf font-ProximaNova-regular',
      lineHeight: '1.8em',
      color: theme.color.secondary
    },
    description: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontSize: 24
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdDown, {
      marginBottom: theme.spacing(3)
    })
  };
});

var Header = function Header(_ref) {
  var title = _ref.title,
      description = _ref.description,
      subtitle = _ref.subtitle;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.headerRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: description && subtitle ? classes.titleContainer : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: title,
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), subtitle && __jsx(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: subtitle,
    level: 2,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.title, classes.subtitle),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 34
    }
  })), description && __jsx("div", {
    className: classes.descriptionContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: description,
    tagName: "p",
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.7f26fe4f27d1cd0c6ef4.hot-update.js.map