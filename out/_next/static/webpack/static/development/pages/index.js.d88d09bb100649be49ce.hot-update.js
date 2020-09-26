webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/competences/cards/Card.tsx":
/*!****************************************************!*\
  !*** ./components/home/competences/cards/Card.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _shared_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/Divider */ "./components/shared/Divider.tsx");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\competences\\cards\\Card.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  var _divider;

  return {
    cardDesktop: {
      composes: 'flexColumn spaceBetween font-ProximaNova-regular',
      boxSizing: 'border-box',
      boxShadow: '0 6px 10px rgba(0,0,0,.08)',
      borderRadius: 10,
      height: 410,
      width: 543,
      backgroundColor: '#fff',
      position: 'absolute',
      padding: [60, 68],
      color: theme.color.secondary
    },
    cardMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexColumn spaceBetween font-ProximaNova-regular',
      marginTop: theme.spacing(2),
      padding: [theme.spacing(6), theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_8__["horizontalPaddingMobile"])],
      // boxSizing: 'border-box',
      // boxShadow: '0 6px 10px rgba(0,0,0,.08)',
      // borderRadius: 10,
      // height: 410,
      // width: 543,
      // backgroundColor: '#fff',
      // position: 'absolute',
      // padding: [60, 68],
      color: theme.color.secondary
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].smLg, {
      boxShadow: '0 6px 10px rgba(0,0,0,.08)',
      borderRadius: 10,
      height: 300,
      width: 440,
      marginBottom: theme.spacing(5)
    }),
    cardHead: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow spaceBetween center stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].lgDown, {
      marginBottom: theme.spacing(1.8)
    }),
    cardBody: {
      composes: 'flexColumn spaceBetween alignCenter'
    },
    cardFooter: {
      composes: 'flexColumn spaceBetween alignCenter stretchSelf'
    },
    image: {
      width: '8%'
    },
    description: {
      fontSize: 17,
      lineHeight: 1.72
    },
    title: {
      color: theme.color.primary,
      fontSize: 26
    },
    link: {
      color: theme.color.active,
      fontSize: 20,
      textDecoration: 'none',
      '&:hover': {
        color: theme.color.active,
        opacity: 0.8
      }
    },
    divider: (_divider = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_divider, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].smLg, {
      display: 'none'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_divider, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].xsDown, {
      display: 'none'
    }), _divider)
  };
});

var Card = function Card(_ref) {
  var className = _ref.className,
      parallaxData = _ref.parallaxData,
      data = _ref.data,
      _onPlxEnd = _ref.onPlxEnd;
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_7__["screenState"]);
  var Component = isMobile ? 'div' : react_plx__WEBPACK_IMPORTED_MODULE_4___default.a;
  var otherProps = isMobile ? {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.cardMobile, className)
  } : {
    parallaxData: parallaxData,
    onPlxEnd: function onPlxEnd() {
      return _onPlxEnd(data.name);
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.cardDesktop, className)
  };
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    id: data.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.cardHead,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: data.name,
    src: "/images/competences/".concat(data.name, ".svg"),
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, data.ranking)), __jsx("div", {
    className: classes.cardBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, data.title), __jsx("p", {
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, data.description)), __jsx("div", {
    className: classes.cardFooter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: classes.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, "See more")), isMobile && __jsx(_shared_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.divider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 26
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.d88d09bb100649be49ce.hot-update.js.map