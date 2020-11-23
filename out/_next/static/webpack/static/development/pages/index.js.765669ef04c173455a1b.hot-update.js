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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _shared_BackgroundPlx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/BackgroundPlx */ "./components/shared/BackgroundPlx.tsx");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/Layout */ "./components/shared/Layout.tsx");
/* harmony import */ var _Knowledge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Knowledge */ "./components/home/knowledges/Knowledge.tsx");
/* harmony import */ var _KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KnowledgeProgressBar */ "./components/home/knowledges/KnowledgeProgressBar.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













var triggerClassName = 'knowledgeTrigger';
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_5__["createUseStyles"])(function (theme) {
  var _knowledgesProgressBa2, _sliderContainer;

  return {
    knowledgesRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn alignCenter justifyCenter flex1',
      position: 'relative',
      fontFamily: 'font-ProximaNova-regular',
      paddingBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgDown, {
      paddingLeft: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_7__["horizontalPaddingMobile"]),
      paddingRight: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_7__["horizontalPaddingMobile"])
    }),
    plx: {
      composes: 'flexColumn flex1 stretchSelf'
    },
    overall: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgDown, {
      marginBottom: theme.spacing(4)
    }),
    progressiveContainer: {
      composes: 'flexColumn stretchSelf center',
      width: '100%',
      height: 200
    },
    knowledgesProgressBar: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginBottom: theme.spacing(16),
      composes: 'flexRow stretchSelf justifyCenter flex1'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdLg, {
      marginTop: theme.spacing(6)
    }),
    knowledgesProgressBarContent: (_knowledgesProgressBa2 = {
      composes: 'flexRow stretchSelf flex1'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa2, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgUp, {
      width: 1300
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa2, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdLg, {
      width: 1000
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa2, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
      flexDirection: 'column'
    }), _knowledgesProgressBa2),
    sliderContainer: (_sliderContainer = {
      position: 'relative',
      width: 1200
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgXl, {
      width: '90vw'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdLg, {
      width: 800
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdDown, {
      width: '85vw'
    }), _sliderContainer),
    slider: {
      overflow: 'hidden',
      padding: 0,
      '& ul': {
        display: 'flex',
        padding: 0,
        margin: 0
      },
      '& li': {
        listStyle: 'none',
        padding: '0 !important',
        width: [400, '!important']
      }
    },
    sildeButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: '50%',
      width: 62,
      height: 62,
      backgroundColor: '#000',
      boxShadow: '0 1px 5px 1px #C9D3DD',
      color: '#fff',
      cursor: 'pointer',
      border: 'none',
      fontSize: 22,
      '&:disabled': {
        opacity: 0.2
      },
      '&:focus': {
        outline: 'none'
      }
    },
    buttonBack: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      left: -60
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].xlDown, {
      left: -45
    }),
    buttonNext: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      right: -60
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].xlDown, {
      right: -45
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

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["useWindowSize"])(),
      width = _useWindowSize.width;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isTablet = _useState[0],
      setIsTablet = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setIsTablet(width <= _utils_constants__WEBPACK_IMPORTED_MODULE_7__["sm"]);
  }, [width]);

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__["useInView"])({
    threshold: 0
  }),
      ref = _useInView.ref,
      inView = _useInView.inView;

  var carousel = __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselProvider"], {
    visibleSlides: 3,
    totalSlides: 6,
    step: 1,
    naturalSlideWidth: 500,
    naturalSlideHeight: 500,
    hasMasterSpinner: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.sliderContainer,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 13
    }
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    className: classes.slider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, dataProgressBar.map(function (d, i) {
    return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
      index: i,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 25
      }
    }, __jsx(_KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      data: d,
      key: i,
      startAnimation: inView,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 29
      }
    }));
  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonBack"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.buttonBack, classes.sildeButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 17
    }
  }, '<'), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonNext"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.buttonNext, classes.sildeButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 17
    }
  }, '>')));

  var mobile = __jsx("div", {
    className: classes.knowledgesProgressBarContent,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 9
    }
  }, dataProgressBar.map(function (d, i) {
    return __jsx(_KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      data: d,
      key: i,
      startAnimation: inView,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 17
      }
    });
  }));

  return __jsx(_shared_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.knowledgesRoot,
    id: "knowledges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 9
    }
  }, __jsx(_shared_BackgroundPlx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "knowledges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.overall,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 17
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 21
    }
  })), dataDescription.map(function (d, i) {
    return __jsx(_Knowledge__WEBPACK_IMPORTED_MODULE_11__["default"], {
      data: d,
      key: i,
      reverse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["isReverse"])(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 25
      }
    });
  }), __jsx("div", {
    className: classes.knowledgesProgressBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 17
    }
  }, isTablet ? mobile : carousel)));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledges);

/***/ })

})
//# sourceMappingURL=index.js.765669ef04c173455a1b.hot-update.js.map