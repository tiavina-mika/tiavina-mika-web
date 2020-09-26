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


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var menus = [{
  url: '/',
  text: 'Services'
}, {
  url: '/',
  text: 'Projets'
}];
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    rowCenter: {
      composes: 'flexRow justifyCenter alignCenter'
    },
    headerRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn justifyCenter font-ProximaNova-regular',
      padding: theme.spacing(20),
      fontSize: 22,
      background: 'linear-gradient(top bottom, #CCC 0%, #F4F4F4 100%)'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      padding: [theme.spacing(1), theme.spacing(4)]
    }),
    menu: {
      composes: 'flexRow spaceBetween alignCenter stretchSelf'
    },
    leftMenu: {
      composes: 'flexRow center flex1'
    },
    logo: {
      composes: '$rowCenter',
      fontSize: 52,
      fontStyle: 'italic',
      padding: 0
    },
    description: {
      composes: '$rowCenter',
      paddingLeft: theme.spacing(6),
      fontSize: 16,
      color: '#666',
      '& span': {
        marginTop: 5
      }
    },
    rightMenu: {
      composes: 'flexRow alignCenter justifyEnd flex1'
    },
    item: {
      padding: [theme.spacing(3), theme.spacing(6)]
    },
    link: {
      color: theme.color.active,
      textDecoration: 'none'
    },

    /** Title */
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn',
      width: '75%',
      marginTop: theme.spacing(22)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      marginTop: theme.spacing(3)
    }),
    titleContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginBottom: theme.spacing(6)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdDown, {
      marginBottom: theme.spacing(3)
    }),
    descriptionContainer: {
      composes: 'flexRow stretchSelf font-ProximaNova-regular',
      lineHeight: '1.8em',
      color: theme.color.secondary
    }
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
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: description && subtitle ? classes.titleContainer : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }), subtitle && __jsx(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: subtitle,
    level: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 34
    }
  })), description && __jsx("div", {
    className: classes.descriptionContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: description,
    tagName: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/shared/Menu.tsx":
/*!************************************!*\
  !*** ./components/shared/Menu.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Menu.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var menus = [{
  url: '/',
  text: 'Services'
}, {
  url: '/',
  text: 'Projets'
}];
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    rowCenter: {
      composes: 'flexRow justifyCenter alignCenter'
    },
    menu: {
      composes: 'flexRow spaceBetween alignCenter stretchSelf'
    },
    leftMenu: {
      composes: 'flexRow center flex1'
    },
    logo: {
      composes: '$rowCenter',
      fontSize: 52,
      fontStyle: 'italic',
      padding: 0
    },
    description: {
      composes: '$rowCenter',
      paddingLeft: theme.spacing(6),
      fontSize: 16,
      color: '#666',
      '& span': {
        marginTop: 5
      }
    },
    rightMenu: {
      composes: 'flexRow alignCenter justifyEnd flex1'
    },
    item: {
      padding: [theme.spacing(3), theme.spacing(6)]
    },
    link: {
      color: theme.color.active,
      textDecoration: 'none'
    }
  };
});

var Menu = function Menu() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.leftMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Mika"), __jsx("div", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Some description about Mika"))), __jsx("div", {
    className: classes.rightMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, menus.map(function (_ref, index) {
    var text = _ref.text,
        url = _ref.url;
    return __jsx("div", {
      className: classes.item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: url,
      className: classes.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, text));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.b95459d2b0828d8c1652.hot-update.js.map