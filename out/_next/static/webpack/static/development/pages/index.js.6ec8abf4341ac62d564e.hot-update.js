webpackHotUpdate("static\\development\\pages\\index.js",{

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
      flex: 2
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
      lineNumber: 37,
      columnNumber: 9
    }
  }, items.map(function (item, index) {
    return __jsx("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(classes.item, itemClassName),
      key: item.label + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: classes.texts,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: classes.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 29
      }
    }, item.label), __jsx("div", {
      className: classes.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, item.value, "%")), __jsx(_ProgressiveBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: item.color,
      percent: item.value,
      className: classes.progressiveBar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemsChart);

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
/* harmony import */ var _KnowledgeDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KnowledgeDescription */ "./components/home/knowledges/KnowledgeDescription.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _knowledgesProgressBa2;

  return {
    knowledgesRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn alignCenter justifyCenter flex1',
      fontFamily: 'font-ProximaNova-regular',
      paddingBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgDown, {
      paddingLeft: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["horizontalPaddingMobile"]),
      paddingRight: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["horizontalPaddingMobile"])
    }),
    overall: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf red'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgDown, {
      marginBottom: theme.spacing(4)
    }),
    progressiveContainer: {
      composes: 'flexColumn stretchSelf center',
      width: '100%',
      height: 200
    },
    knowledgesProgressBar: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginBottom: theme.spacing(16),
      composes: 'flexRow stretchSelf flex1'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdDown, {
      flexDirection: 'column'
    }),
    knowledgesProgressBarContent: (_knowledgesProgressBa2 = {
      composes: 'flexRow stretchSelf flex1'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa2, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgUp, {
      width: 1300
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa2, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdLg, {
      width: 1000
    }), _knowledgesProgressBa2)
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
      lineNumber: 293,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.overall,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  })), dataDescription.map(function (d, i) {
    return __jsx(_KnowledgeDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: d,
      key: i,
      reverse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isReverse"])(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 21
      }
    });
  }));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _ItemsChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemsChart */ "./components/home/knowledges/ItemsChart.tsx");
/* harmony import */ var _PieChartSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PieChartSvg */ "./components/home/knowledges/PieChartSvg.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\OveralCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    overallCard: {
      composes: 'flexColumn justifyCenter center font-ProximaNova-bold',
      // height: 370,
      paddingBottom: theme.spacing(4),
      width: 420,
      boxShadow: '1px 15px 10px 0 #C9D3DD',
      borderRadius: 20
    },
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
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Note G\xE9n\xE9rale"), __jsx("div", {
    className: classes.pieChart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_PieChartSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    total: total / itemsChart.length,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  })), __jsx(_ItemsChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: itemsChart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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

/***/ })

})
//# sourceMappingURL=index.js.6ec8abf4341ac62d564e.hot-update.js.map