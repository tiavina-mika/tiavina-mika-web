webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Menu.tsx":
/*!************************************!*\
  !*** ./components/shared/Menu.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\Menu.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var menus = [{
  url: '/',
  text: 'Services'
}, {
  url: '/',
  text: 'Projets'
}];
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _ref;

  return _ref = {
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
    rightMenuDesktop: {
      composes: 'flexRow alignCenter justifyEnd flex1'
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "rightMenuDesktop", {
    composes: 'flexRow alignCenter justifyEnd flex1'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "item", {
    padding: [theme.spacing(3), theme.spacing(6)]
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "link", {
    color: theme.color.active,
    textDecoration: 'none'
  }), _ref;
});

var Menu = function Menu() {
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_4__["screenState"]);

  var menuDesktop = __jsx("div", {
    className: classes.rightMenuDesktop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, menus.map(function (_ref2, index) {
    var text = _ref2.text,
        url = _ref2.url;
    return __jsx("div", {
      className: classes.item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: url,
      className: classes.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, text));
  }));

  var menuIcon = __jsx("div", {
    className: classes.rightMenuMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/icons/menu.svg",
    alt: "menu-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }));

  return __jsx("div", {
    className: classes.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.leftMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "Mika"), __jsx("div", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "Some description about Mika"))), isMobile ? menuIcon : menuDesktop);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.3319fb663b5da2e099ce.hot-update.js.map