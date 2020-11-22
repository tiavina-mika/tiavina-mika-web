webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/BlockTitle.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/BlockTitle.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _shared_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Title */ "./components/shared/Title.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\BlockTitle.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  title: {
    fontSize: 33
  }
});

var BlockTitle = function BlockTitle(_ref) {
  var text = _ref.text,
      className = _ref.className;
  var classes = useStyles();
  return __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: text,
    level: 2,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.title, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlockTitle);

/***/ }),

/***/ "./components/home/knowledges/ItemsChart.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/ItemsChart.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _ProgressiveBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressiveBar */ "./components/home/knowledges/ProgressiveBar.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\ItemsChart.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    items: {
      composes: 'flexColumn stretchSelf center font-ProximaNova-bold',
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      fontSize: 14
    },
    item: {
      composes: 'flexRow center stretchSelf',
      marginBottom: theme.spacing(2)
    },
    texts: {
      composes: 'flexColumn stretchSelf justifyCenter',
      flex: 1
    },
    label: {},
    value: {
      color: '#8693B5',
      marginTop: theme.spacing(0.7)
    },
    progressiveBar: {
      flex: 2,
      alignSelf: 'center'
    }
  };
});

var ItemsChart = function ItemsChart(_ref) {
  var items = _ref.items,
      itemClassName = _ref.itemClassName,
      className = _ref.className;
  var classes = useStyles();
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.items, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, items.map(function (item, index) {
    return __jsx("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.item, itemClassName),
      key: item.label + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: classes.texts,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: classes.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, item.label), __jsx("div", {
      className: classes.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }
    }, item.value, "%")), __jsx(_ProgressiveBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: item.color,
      percent: item.value,
      className: classes.progressiveBar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemsChart);

/***/ }),

/***/ "./components/home/knowledges/KnowledgeDescription.tsx":
/*!*************************************************************!*\
  !*** ./components/home/knowledges/KnowledgeDescription.tsx ***!
  \*************************************************************/
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
/* harmony import */ var _BlockTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BlockTitle */ "./components/home/knowledges/BlockTitle.tsx");
/* harmony import */ var _ProgressiveBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProgressiveBar */ "./components/home/knowledges/ProgressiveBar.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\KnowledgeDescription.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  var _knowledgeContent, _cards, _card, _descriptionContainer;

  return {
    knowledgeRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf',
      fontFamily: 'font-ProximaNova-regular',
      marginTop: theme.spacing(25),
      marginBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    }),
    knowledgeContent: (_knowledgeContent = {
      composes: 'flexRow justifyCenter alignCenter',
      alignSelf: 'center'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeContent, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      width: 1200
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeContent, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'center'
    }), _knowledgeContent),
    textContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn',
      flex: 1
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      marginTop: theme.spacing(12)
    }),
    blockReverse: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      marginLeft: theme.spacing(40)
    }),
    cards: (_cards = {
      composes: 'flexRow'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      flex: 1.2
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smLg, {
      marginTop: theme.spacing(6)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cards, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smDown, {
      marginTop: theme.spacing(2)
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
    descriptionContainer: (_descriptionContainer = {
      marginTop: theme.spacing(2)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      width: 400
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginTop: theme.spacing(0)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].smLg, {
      width: 600
    }), _descriptionContainer),
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

var getCardPosition = function getCardPosition(index, cardPositions) {
  var positions = cardPositions || [[0, 100, 0], [1, 0, 95], [2, 100, 240], [3, 250, -80], [4, 210, 120]];
  var top;
  var left;
  positions.map(function (item) {
    if (index !== item[0]) return false;
    top = item[1];
    left = item[2];
  });
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
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.knowledgeContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.textContainer, reverse ? classes.reverse : null, reverse ? classes.blockReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx(_BlockTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: data.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: classes.descriptionContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: data.description,
    tagName: "p",
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: classes.cards,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, data.technos.map(function (d, index) {
    return __jsx("div", {
      className: classes.card,
      key: d.name,
      style: {
        top: getCardPosition(index, data.cardPositions).top,
        left: getCardPosition(index, data.cardPositions).left
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 29
      }
    }, __jsx("img", {
      alt: "react",
      src: "/images/technos/".concat(d.image, ".png"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: classes.cardBody,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 33
      }
    }, __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: d.name,
      className: classes.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 37
      }
    }), __jsx(_ProgressiveBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: getColor(d.value),
      percent: d.value,
      height: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
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
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _KnowledgeDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KnowledgeDescription */ "./components/home/knowledges/KnowledgeDescription.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  var _knowledgesProgressBa;

  return {
    knowledgesRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn alignCenter justifyCenter flex1',
      fontFamily: 'font-ProximaNova-regular',
      paddingBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      paddingLeft: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["horizontalPaddingMobile"]),
      paddingRight: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["horizontalPaddingMobile"])
    }),
    overall: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
      marginBottom: theme.spacing(4)
    }),
    progressiveContainer: {
      composes: 'flexColumn stretchSelf center',
      width: '100%',
      height: 200
    },
    knowledgesProgressBar: {
      marginBottom: theme.spacing(16),
      composes: 'flexRow stretchSelf flex1'
    },
    knowledgesProgressBarContent: (_knowledgesProgressBa = {
      composes: 'flexRow stretchSelf flex1'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgUp, {
      width: 1300
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdLg, {
      width: 1000
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
      flexDirection: 'column'
    }), _knowledgesProgressBa),
    sliderContainer: {
      position: 'relative',
      maxWidth: 1200,
      margin: 'auto'
    },
    buttonBack: {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)'
    },
    buttonNext: {
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)'
    }
  };
});
var dataDescription = [{
  title: 'Frontend',
  description: "Lorem Ipsum is simply dummy text of the printing and \n        typesetting industry. Lorem Ipsum has been the industry's \n        standard dummy text ever since the 1500s, when an unknown \n        printer took a galley of type and scrambled it to make a \n        type specimen book. It has survived not only five centuries, \n        but also the leap into electronic typesetting, remaining \n        essentially unchanged.",
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
  cardPositions: [[0, 100, 0], [1, 0, 95], [2, 150, 230], [3, 100, 180], [4, 210, 120]],
  technos: [{
    name: 'Node',
    image: 'node',
    value: 95
  }, {
    name: 'Symfony',
    image: 'symfony',
    value: 95
  }, {
    name: 'Flask',
    image: 'flask',
    value: 80
  }, {
    name: 'Rails',
    image: 'rails',
    value: 45
  }]
}];
var dataProgressBar = [{
  title: 'Language de programmation',
  items: [{
    label: 'Javascript',
    value: 95,
    color: '#956FFF'
  }, {
    label: 'TypeScript',
    value: 95,
    color: '#FEE895'
  }, {
    label: 'Python',
    value: 80,
    color: '#FD7A8C'
  }, {
    label: 'PHP',
    value: 95,
    color: '#95BF46'
  }, {
    label: 'Ruby',
    value: 40,
    color: '#00D8FF'
  }]
}, {
  title: 'Base de données',
  items: [{
    label: 'MySQL',
    value: 96,
    color: '#956FFF'
  }, {
    label: 'MongoDB',
    value: 98,
    color: '#FEE895'
  }, {
    label: 'ElasticSearch',
    value: 75,
    color: '#FD7A8C'
  }, {
    label: 'PostgreSQL',
    value: 88,
    color: '#95BF46'
  }]
}, {
  title: 'Design',
  items: [{
    label: 'Photoshop',
    value: 96,
    color: '#956FFF'
  }, {
    label: 'Illustrator',
    value: 96,
    color: '#FEE895'
  }, {
    label: 'InVision',
    value: 80,
    color: '#FD7A8C'
  }, {
    label: 'Zepplin',
    value: 55,
    color: '#95BF46'
  }]
}, {
  title: 'Webservice',
  items: [{
    label: 'REST',
    value: 96,
    color: '#956FFF'
  }, {
    label: 'GraphQL',
    value: 96,
    color: '#FEE895'
  }, {
    label: 'Parse Server',
    value: 92,
    color: '#FD7A8C'
  }, {
    label: 'Firebase',
    value: 55,
    color: '#95BF46'
  }]
}, {
  title: 'Gestion de code source',
  items: [{
    label: 'GitHub',
    value: 99,
    color: '#956FFF'
  }, {
    label: 'GitLab',
    value: 90,
    color: '#FEE895'
  }, {
    label: 'BitBucket',
    value: 95,
    color: '#FD7A8C'
  }]
}, {
  title: 'Gestion de projet',
  items: [{
    label: 'Trello',
    value: 95,
    color: '#956FFF'
  }, {
    label: 'Asana',
    value: 80,
    color: '#FEE895'
  }, {
    label: 'Jira',
    value: 90,
    color: '#FD7A8C'
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
      lineNumber: 311,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.overall,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  })), dataDescription.map(function (d, i) {
    return __jsx(_KnowledgeDescription__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: d,
      key: i,
      reverse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["isReverse"])(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 21
      }
    });
  }), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselProvider"], {
    visibleSlides: 3,
    totalSlides: 6,
    step: 3,
    naturalSlideWidth: 500,
    naturalSlideHeight: 500,
    hasMasterSpinner: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.sliderContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 21
    }
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  }, dataProgressBar.map(function (d, i) {
    return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Slide"], {
      index: i,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 33
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 37
      }
    }, "Slide"));
  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["ButtonBack"], {
    className: classes.buttonBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 25
    }
  }, "Back"), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["ButtonNext"], {
    className: classes.buttonNext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 25
    }
  }, "Next"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledges);

/***/ }),

/***/ "./components/home/knowledges/OveralCard.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/OveralCard.tsx ***!
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
/* harmony import */ var _ItemsChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemsChart */ "./components/home/knowledges/ItemsChart.tsx");
/* harmony import */ var _PieChartSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PieChartSvg */ "./components/home/knowledges/PieChartSvg.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\OveralCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    overallCard: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn justifyCenter center font-ProximaNova-bold',
      paddingBottom: theme.spacing(4),
      width: 420,
      boxShadow: '1px 15px 10px 0 #C9D3DD',
      borderRadius: 20
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].xsDown, {
      width: '100%'
    }),
    header: {
      composes: 'flexColumn justifyCenter stretchSelf',
      backgroundColor: '#F1FDFF',
      padding: [theme.spacing(4), theme.spacing(4)]
    },
    pieChart: {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(5)
    }
  };
});
var itemsChart = [{
  label: 'Frontend',
  value: 95,
  color: '#956FFF'
}, {
  label: 'Backend',
  value: 90,
  color: '#FEE895'
}, {
  label: 'Database',
  value: 90,
  color: '#FD7A8C'
}, {
  label: 'Design',
  value: 75,
  color: '#95BF46'
}, {
  label: 'Ops',
  value: 50,
  color: '#00D8FF'
}];

var OveralCard = function OveralCard() {
  var classes = useStyles();
  var total = itemsChart.reduce(function (acc, curr) {
    return acc + curr.value;
  }, 0);
  return __jsx("div", {
    className: classes.overallCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Note G\xE9n\xE9rale"), __jsx("div", {
    className: classes.pieChart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_PieChartSvg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    total: total / itemsChart.length,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })), __jsx(_ItemsChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: itemsChart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OveralCard);

/***/ }),

/***/ "./components/home/knowledges/PieChartSvg.tsx":
/*!****************************************************!*\
  !*** ./components/home/knowledges/PieChartSvg.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\PieChartSvg.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  cls1: {
    fill: '#fff',
    stroke: '#eff4f9',
    strokeWidth: 20
  },
  cls2: {
    strokeWidth: 20,
    fill: 'none',
    stroke: '#80ebff',
    strokeLinecap: 'round'
  },
  cls3: {
    fill: 'none',
    stroke: '#e7edf1',
    strokeWidth: 2
  },
  text: {
    fontSize: 30,
    composes: 'font-ProximaNova-bold'
  }
});

var PieChartSvg = function PieChartSvg(_ref) {
  var total = _ref.total;
  var classes = useStyles();
  return __jsx("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "193",
    height: "196.02",
    viewBox: "0 0 193 196.02",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("path", {
    id: "inactive-bar",
    className: classes.cls1,
    d: "M183,98c0,48.75-38.87,88-86.5,88S10,146.76,10,98,48.87,10,96.5,10,183,49.25,183,98Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("path", {
    id: "active-bar",
    className: classes.cls2,
    d: "M96,12c46.39,0,84,38.28,84,85.5S142.39,183,96,183,12,144.72,12,97.5A86.41,86.41,0,0,1,22.33,56.38",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx("path", {
    id: "divider",
    className: classes.cls3,
    d: "M61,100h69",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("text", {
    id: "value",
    className: classes.text,
    transform: "translate(82.79 85.21)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, total), __jsx("text", {
    id: "unit",
    className: classes.text,
    transform: "translate(68.49 136)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "100"));
};

/* harmony default export */ __webpack_exports__["default"] = (PieChartSvg);

/***/ }),

/***/ "./components/home/knowledges/ProgressiveBar.tsx":
/*!*******************************************************!*\
  !*** ./components/home/knowledges/ProgressiveBar.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\ProgressiveBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  progressiveBar: {
    composes: 'flexRow',
    backgroundColor: '#F4F9FE',
    borderRadius: 15,
    overflow: 'hidden',
    width: function width(_ref) {
      var _width = _ref.width;
      return _width || '100%';
    },
    height: function height(_ref2) {
      var _height = _ref2.height;
      return _height || 13;
    }
  },
  color: {
    backgroundColor: function backgroundColor(_ref3) {
      var color = _ref3.color;
      return color;
    },
    width: function width(_ref4) {
      var percent = _ref4.percent;
      return percent + '%';
    },
    borderRadius: 15,
    height: '100%'
  }
});

var ProgressiveBar = function ProgressiveBar(_ref5) {
  var color = _ref5.color,
      percent = _ref5.percent,
      width = _ref5.width,
      className = _ref5.className,
      height = _ref5.height;
  var classes = useStyles({
    color: color,
    percent: percent,
    width: width,
    height: height
  });
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.progressiveBar, className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressiveBar);

/***/ })

})
//# sourceMappingURL=index.js.14a75229dce82d2aa4a5.hot-update.js.map