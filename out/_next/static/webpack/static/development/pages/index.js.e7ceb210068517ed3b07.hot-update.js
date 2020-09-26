webpackHotUpdate("static\\development\\pages\\index.js",{

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
    content: {
      composes: 'flexRow spaceBetween center stretchSelf'
    },
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
      composes: 'flexColumn red stretchSelf',
      flex: 1,
      paddingTop: 15,
      paddingBottom: 15
    }
  };
});

var Menu = function Menu() {
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_7__["screenState"]);

  var menuItem = function menuItem(_ref) {
    var item = _ref.item,
        url = _ref.url,
        text = _ref.text,
        index = _ref.index;
    return __jsx("div", {
      className: classes.item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: url,
      className: classes.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, text));
  };

  var menuDesktop = __jsx("div", {
    className: classes.rightMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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

  var menuIcon = __jsx("div", {
    className: classes.rightMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/icons/menu.svg",
    alt: "menu-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }));

  return __jsx("div", {
    className: classes.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.leftMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "Mika"), __jsx("div", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, "Some description about Mika"))), isMobile ? menuIcon : menuDesktop), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.menuMobile
  }, _animations_app__WEBPACK_IMPORTED_MODULE_6__["openMenuAnimation"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), "x"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.e7ceb210068517ed3b07.hot-update.js.map