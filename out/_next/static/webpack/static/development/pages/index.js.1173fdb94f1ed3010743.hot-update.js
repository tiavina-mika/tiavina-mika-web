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
/* harmony import */ var _shared_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Text */ "./components/shared/Text.tsx");
/* harmony import */ var _shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Title */ "./components/shared/Title.tsx");
/* harmony import */ var _ProgressiveBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProgressiveBar */ "./components/home/knowledges/ProgressiveBar.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledge.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    knowledgeRoot: {
      composes: 'flexColumn center stretchSelf',
      fontFamily: 'font-ProximaNova-regular',
      marginTop: theme.spacing(20)
    },
    knowledgeContent: {
      composes: 'flexRow justifyCenter alignCenter',
      alignSelf: 'center',
      width: 1200
    },
    textContainer: {
      composes: 'flexColumn',
      flex: 1
    },
    imagesContainer: {
      composes: 'flexRow',
      flex: 1.2
    },
    card: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn spaceBetween center',
      width: 88,
      padding: theme.spacing(3),
      marginRight: theme.spacing(1),
      height: 83,
      backgroundColor: '#fff',
      boxShadow: '0 8px 10px 0 rgba(0,0,0,.08)',
      borderRadius: 10
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdUp, {
      position: 'relative'
    }),
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
    descriptionContainer: {
      width: 400,
      marginTop: theme.spacing(2)
    },
    description: {
      fontWeight: 300,
      lineHeight: '1.8em',
      fontSize: 17
    }
  };
});

var getColor = function getColor(percent) {
  var color;
  if (percent > 50) color = 'green';
  if (percent > 25 && percent <= 50) color = 'red';
  if (percent <= 25) color = 'blue';
  return color;
};

var getCardPosition = function getCardPosition(index) {
  var top;
  var left;

  switch (index) {
    case index = 0:
      top = 80;
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
      top = 270;
      left = -255;
      break;

    default:
      top = 210;
      left = -185;
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
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.knowledgeContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.textContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: data.title,
    level: 2,
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: classes.descriptionContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: data.description,
    tagName: "p",
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: classes.imagesContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, data.technos.map(function (d, index) {
    return __jsx("div", {
      className: classes.card,
      key: d.name,
      style: {
        top: getCardPosition(index).top,
        left: getCardPosition(index).left
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 29
      }
    }, __jsx("img", {
      alt: "react",
      src: "/images/technos/".concat(d.image, ".png"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: classes.cardBody,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 33
      }
    }, __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: d.name,
      className: classes.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 37
      }
    }), __jsx(_ProgressiveBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: getColor(d.value),
      percent: d.value,
      height: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 37
      }
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledge);

/***/ })

})
//# sourceMappingURL=index.js.1173fdb94f1ed3010743.hot-update.js.map