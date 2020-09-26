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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");


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
  return {
    rowCenter: {
      composes: 'flexRow justifyCenter alignCenter'
    },
    menu: {
      composes: 'flexRow spaceBetween alignCenter stretchSelf blue'
    },
    leftMenu: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexRow center flex1'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      flexDirection: 'column'
    }),
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
    },
    rightMenuMobile: {
      composes: 'flexRow alignCenter justifyEnd flex1 red'
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
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_4__["screenState"]);

  var menuDesktop = __jsx("div", {
    className: classes.rightMenuDesktop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
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
        columnNumber: 17
      }
    }, __jsx("a", {
      href: url,
      className: classes.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, text));
  }));

  var menuIcon = __jsx("div", {
    className: classes.rightMenuMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/icons/menu.svg",
    alt: "menu-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }));

  return __jsx("div", {
    className: classes.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.leftMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Mika"), __jsx("div", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, "Some description about Mika"))), isMobile ? menuIcon : menuDesktop);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.af29076af03828fe699b.hot-update.js.map