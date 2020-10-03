webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KnowledgeProgressBar */ "./components/home/knowledges/KnowledgeProgressBar.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
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
      composes: 'flexColumn center stretchSelf'
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
    knowledgesProgressBarContent: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexRow stretchSelf flex1'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgUp, {
      width: 1300
    })
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
      lineNumber: 290,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.overall,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
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
        lineNumber: 296,
        columnNumber: 21
      }
    });
  }), __jsx("div", {
    className: classes.knowledgesProgressBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.knowledgesProgressBarContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 17
    }
  }, dataProgressBar.map(function (d, i) {
    return __jsx(_KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: d,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 25
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledges);

/***/ })

})
//# sourceMappingURL=index.js.7a502b13df691770cb10.hot-update.js.map