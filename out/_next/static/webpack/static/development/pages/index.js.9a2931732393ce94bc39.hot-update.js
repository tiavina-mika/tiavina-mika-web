webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/MobileProjects.tsx":
/*!*****************************************************!*\
  !*** ./components/home/projects/MobileProjects.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\MobileProjects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  return {
    rowCenter: {
      composes: 'flexRow stretchSelf center',
      padding: [0, 10]
    },
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow flex1 justifyCenter',
      fontFamily: 'Prequelrough, sans-serif',
      paddingBottom: theme.spacing(30)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(0)
    }),
    center: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow justifyCenter'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_5__["lgScreenWidth"],
      marginTop: theme.spacing(4)
    }),
    items: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      marginTop: theme.spacing(12)
    }),
    item: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexColumn alignCenter',
      marginBottom: theme.spacing(10)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].smUp, {
      margin: theme.spacing(2)
    }),
    body: {
      composes: 'flexColumn'
    },
    content: {
      padding: 10,
      '& > img': {
        width: '100%'
      }
    },
    title: {
      composes: 'flexRow center spaceBetween stretchSelf',
      marginBottom: 20,
      '& span': {
        color: '#fff'
      }
    },
    action: {
      composes: '$rowCenter flex1',
      borderTop: "1px solid ".concat(theme.color.subtitle),
      '& a': {
        '&:hover': {
          color: theme.color.primary
        }
      }
    },
    button: {
      composes: 'flexRow stretchSelf',
      marginTop: 5,
      marginBottom: -5,
      height: 8,
      paddingLeft: 12,
      '& div': {
        height: 8,
        width: 8,
        borderRadius: '50%',
        marginRight: 8
      }
    },
    linkContainer: {
      composes: 'flexRow justifyCenter'
    },
    link: {
      composes: 'flexRow alignCenter justifyCenter',
      color: '#fff',
      textDecoration: 'none',
      width: 250
    },
    rightArrowIcon: {
      marginLeft: 10
    }
  };
});

var MobileProjects = function MobileProjects(_ref) {
  var data = _ref.data,
      pageInfo = _ref.pageInfo;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    id: "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, data.map(function (item, index) {
    return __jsx("div", {
      className: classes.item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: classes.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: classes.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 41
      }
    }, item.title)), __jsx("div", {
      className: classes.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "/images/".concat(item.image),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: classes.linkContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 37
      }
    }, __jsx("a", {
      href: "#",
      className: classes.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 45
      }
    }, "Voir le projet"), __jsx("img", {
      src: "/images/icons/enter.svg",
      alt: "",
      className: classes.rightArrowIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 45
      }
    })))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileProjects);

/***/ })

})
//# sourceMappingURL=index.js.9a2931732393ce94bc39.hot-update.js.map