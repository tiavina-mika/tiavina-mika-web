webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/Knowledge.tsx":
/*!**************************************************!*\
  !*** ./components/home/knowledges/Knowledge.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _shared_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Title */ "./components/shared/Title.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledge.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _knowledgeContent, _cards, _card, _descriptionContainer;

  return {
    knowledgeRoot: {
      composes: 'flexColumn center stretchSelf',
      fontFamily: 'font-ProximaNova-regular',
      marginTop: theme.spacing(20)
    },
    knowledgeContent: (_knowledgeContent = {
      composes: 'flexColumn justifyCenter alignCenter',
      // composes: 'flexRow justifyCenter alignCenter',
      alignSelf: 'center'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeContent, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgUp, {// width: 1000,
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeContent, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'center'
    }), _knowledgeContent),
    textContainer: {
      composes: 'flexColumn',
      flex: 1
    },
    cards: (_cards = {
      composes: 'flexRow'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgUp, {
      flex: 1.2
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smLg, {
      marginTop: theme.spacing(8)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      marginTop: theme.spacing(5)
    }), _cards),
    card: (_card = {
      composes: 'flexColumn spaceBetween center',
      width: 98,
      padding: theme.spacing(3),
      marginRight: theme.spacing(1),
      height: 93,
      backgroundColor: '#fff',
      boxShadow: '0 8px 10px 0 rgba(0,0,0,.08)',
      borderRadius: 10
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_card, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgUp, {
      position: 'relative'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_card, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgDown, {
      margin: theme.spacing(2)
    }), _card),
    cardBody: {
      composes: 'flexColumn spaceBetween stretchSelf center'
    },
    label: {
      composes: 'font-ProximaNova-bold',
      fontSize: 16,
      marginBottom: theme.spacing(1)
    },
    title: {
      fontSize: 33
    },
    descriptionContainer: (_descriptionContainer = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgUp, {
      width: 400
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smLg, {
      width: 600
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, "marginTop", theme.spacing(2)), _descriptionContainer),
    description: {
      fontWeight: 300,
      lineHeight: '1.8em',
      fontSize: 17
    }
  };
});

var getColor = function getColor(percent) {
  var color;
  if (percent > 50) color = '#13BB70';
  if (percent > 25 && percent <= 50) color = '#FEE895';
  if (percent <= 25) color = '#F4B63E';
  return color;
};

var getCardPosition = function getCardPosition(index) {
  var top;
  var left;

  switch (index) {
    case index = 0:
      top = 100;
      left = 0;
      break;

    case index = 1:
      left = 95;
      break;

    case index = 2:
      top = 100;
      left = 275;
      break;

    case index = 3:
      top = 250;
      left = -80;
      break;

    default:
      top = 210;
      left = 120;
  }

  return {
    top: top,
    left: left
  };
};

var Knowledge = function Knowledge(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.knowledgeRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.knowledgeContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: data.title,
    level: 2,
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: classes.cards,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledge);

/***/ })

})
//# sourceMappingURL=index.js.7e184d25415db1b2287c.hot-update.js.map