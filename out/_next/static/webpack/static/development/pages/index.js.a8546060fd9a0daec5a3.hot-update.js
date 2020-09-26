webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./animations/app.ts":
/*!***************************!*\
  !*** ./animations/app.ts ***!
  \***************************/
/*! exports provided: openMenuAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMenuAnimation", function() { return openMenuAnimation; });
var openMenuAnimation = {
  // initial: 'hidden',
  // animate: 'visible',
  variants: {
    visible: {
      y: 0,
      opacity: 1
    },
    hidden: {
      y: -30,
      opacity: 0
    }
  },
  transition: {
    duration: 0.8
  }
};

/***/ }),

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






var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    headerRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn justifyCenter font-ProximaNova-regular',
      fontSize: 22,
      background: 'linear-gradient(top bottom, #CCC 0%, #F4F4F4 100%)'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      padding: [theme.spacing(1), theme.spacing(4)]
    }),

    /** Title */
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn',
      width: '75%',
      marginTop: theme.spacing(22),
      padding: theme.spacing(20)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      marginTop: theme.spacing(3),
      padding: [theme.spacing(1), theme.spacing(4)]
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
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: description && subtitle ? classes.titleContainer : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), subtitle && __jsx(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: subtitle,
    level: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 34
    }
  })), description && __jsx("div", {
    className: classes.descriptionContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: description,
    tagName: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _animations_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations/app */ "./animations/app.ts");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Menu.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var menus = [{
  url: '/',
  text: 'Services'
}, {
  url: '/',
  text: 'Projets'
}];
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  var _description;

  return {
    rowCenter: {
      composes: 'flexRow justifyCenter alignCenter'
    },
    menu: {
      composes: 'flexColumn stretchSelf'
    },
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow spaceBetween center stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].lgDown, {
      padding: [theme.spacing(0), theme.spacing(4)]
    }),
    leftMenu: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow center flex1'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }),
    logo: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: '$rowCenter',
      fontSize: 52,
      fontStyle: 'italic',
      padding: 0
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].lgDown, {
      fontSize: 42
    }),
    description: (_description = {
      composes: '$rowCenter'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_description, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].lgUp, {
      paddingLeft: theme.spacing(6),
      '& span': {
        marginTop: 5
      }
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_description, "fontSize", 16), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_description, "color", '#666'), _description),
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
    menuMobile: {
      composes: 'flexColumn stretchSelf',
      backgroundColor: '#fff',
      height: '100%',
      flex: 1,
      paddingTop: 15,
      paddingBottom: 15,
      position: 'absolute',
      width: '100%',
      top: function top(_top) {
        return _top;
      }
    },
    menuIcon: {
      cursor: 'pointer'
    }
  };
});

var Menu = function Menu() {
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_7__["screenState"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      openMenu = _useState[0],
      setOpenMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      height = _useState2[0],
      setHeight = _useState2[1];

  var classes = useStyles(height);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setHeight(ref.current.clientHeight);
  }, []);

  var menuItem = function menuItem(_ref) {
    var url = _ref.url,
        text = _ref.text,
        index = _ref.index;
    return __jsx("div", {
      className: classes.item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: url,
      className: classes.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, text));
  };

  var menuDesktop = __jsx("div", {
    className: classes.rightMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, menus.map(function (_ref2, index) {
    var text = _ref2.text,
        url = _ref2.url;
    return menuItem({
      index: index,
      text: text,
      url: url
    });
  }));

  var handleOpen = function handleOpen() {
    return setOpenMenu(function (prev) {
      return !prev;
    });
  };

  var menuIconProps = {
    alt: 'menu-icon',
    onClick: handleOpen,
    className: classes.menuIcon
  };

  var menuIcon = __jsx("div", {
    className: classes.rightMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, !openMenu ? __jsx("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: "/images/icons/menu.svg"
  }, menuIconProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })) : __jsx("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: "/images/icons/menu-close.svg"
  }, menuIconProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  })));

  return __jsx("div", {
    className: classes.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.content,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.leftMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, "Mika"), __jsx("div", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, "Some description about Mika"))), isMobile ? menuIcon : menuDesktop), isMobile && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    animate: openMenu ? 'visible' : 'hidden',
    initial: 'hidden',
    className: classes.menuMobile
  }, _animations_app__WEBPACK_IMPORTED_MODULE_6__["openMenuAnimation"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), menus.map(function (_ref3, index) {
    var text = _ref3.text,
        url = _ref3.url;
    return menuItem({
      index: index,
      text: text,
      url: url
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.a8546060fd9a0daec5a3.hot-update.js.map