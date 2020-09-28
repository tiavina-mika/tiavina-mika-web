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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _shared_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Text */ "./components/shared/Text.tsx");
/* harmony import */ var _shared_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/Title */ "./components/shared/Title.tsx");
/* harmony import */ var _ProgressiveBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProgressiveBar */ "./components/home/knowledges/ProgressiveBar.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledge.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  var _knowledgeContent, _cards, _card, _descriptionContainer;

  return {
    knowledgeRoot: {
      composes: 'flexColumn center stretchSelf',
      fontFamily: 'font-ProximaNova-regular',
      marginTop: theme.spacing(20)
    },
    knowledgeContent: (_knowledgeContent = {
      composes: 'flexRow justifyCenter alignCenter',
      alignSelf: 'center'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeContent, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      width: 1200
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeContent, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'center'
    }), _knowledgeContent),
    textContainer: {
      composes: 'flexColumn',
      flex: 1
    },
    blockReverse: {
      composes: 'flexEnd'
    },
    cards: (_cards = {
      composes: 'flexRow'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      flex: 1.2
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smLg, {
      marginTop: theme.spacing(8)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smDown, {
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
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_card, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      position: 'relative'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_card, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
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
    descriptionContainer: (_descriptionContainer = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      width: 400
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smLg, {
      width: 600
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, "marginTop", theme.spacing(2)), _descriptionContainer),
    description: {
      fontWeight: 300,
      lineHeight: '1.8em',
      fontSize: 17
    },
    reverse: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      order: 1
    })
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
  var data = _ref.data,
      reverse = _ref.reverse;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.knowledgeRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.knowledgeContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.textContainer, reverse ? classes.reverse : null, reverse ? classes.blockReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: data.title,
    level: 2,
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: classes.descriptionContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: data.description,
    tagName: "p",
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: classes.cards,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
        lineNumber: 153,
        columnNumber: 29
      }
    }, __jsx("img", {
      alt: "react",
      src: "/images/technos/".concat(d.image, ".png"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: classes.cardBody,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 33
      }
    }, __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: d.name,
      className: classes.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 37
      }
    }), __jsx(_ProgressiveBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: getColor(d.value),
      percent: d.value,
      height: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 37
      }
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledge);

/***/ }),

/***/ "./components/home/knowledges/Knowledges.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/Knowledges.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _Knowledge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Knowledge */ "./components/home/knowledges/Knowledge.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    knowledgesRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf',
      fontFamily: 'font-ProximaNova-regular',
      paddingBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgDown, {
      paddingLeft: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["horizontalPaddingMobile"]),
      paddingRight: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["horizontalPaddingMobile"])
    }),
    progressiveContainer: {
      composes: 'flexColumn stretchSelf center',
      width: '100%',
      height: 200
    }
  };
});
var data = [{
  title: 'Frontend',
  description: "Lorem Ipsum is simply dummy text of the printing and \n        typesetting industry. Lorem Ipsum has been the industry's \n        standard dummy text ever since the 1500s, when an unknown \n        printer took a galley of type and scrambled it to make a \n        type specimen book. It has survived not only five centuries, \n        but also the leap into electronic typesetting, remaining \n        essentially unchanged. It was popularised in the 1960s \n        with the release of Letraset sheets containing Lorem Ipsum \n        passages, and more recently with desktop publishing software \n        like Aldus PageMaker including versions of Lorem Ipsum.",
  technos: [{
    name: 'React',
    image: 'react',
    value: 98
  }, {
    name: 'HTML',
    image: 'html',
    value: 100
  }, {
    name: 'CSS',
    image: 'css',
    value: 100
  }, {
    name: 'JQuery',
    image: 'jquery',
    value: 98
  }, {
    name: 'Angular',
    image: 'angular',
    value: 50
  }]
}, {
  title: 'Backend',
  description: "Lorem Ipsum is simply dummy text of the printing and \n        typesetting industry. Lorem Ipsum has been the industry's \n        standard dummy text ever since the 1500s, when an unknown \n        printer took a galley of type and scrambled it to make a \n        type specimen book. It has survived not only five centuries.",
  technos: [{
    name: 'React',
    image: 'react',
    value: 98
  }, {
    name: 'HTML',
    image: 'html',
    value: 100
  }, {
    name: 'CSS',
    image: 'css',
    value: 100
  }, {
    name: 'JQuery',
    image: 'jquery',
    value: 98
  }, {
    name: 'Angular',
    image: 'angular',
    value: 50
  }]
}];

var Knowledges = function Knowledges() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.knowledgesRoot,
    id: "knowledges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), data.map(function (d, i) {
    return __jsx(_Knowledge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: d,
      key: i,
      reverse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isReverse"])(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledges);

/***/ })

})
//# sourceMappingURL=index.js.c3ec67442103d0298c05.hot-update.js.map