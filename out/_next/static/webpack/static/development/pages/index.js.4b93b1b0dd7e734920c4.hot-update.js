webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/Knowledges.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/Knowledges.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _Knowledge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Knowledge */ "./components/home/knowledges/Knowledge.tsx");
/* harmony import */ var _KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KnowledgeProgressBar */ "./components/home/knowledges/KnowledgeProgressBar.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;












var triggerClassName = 'knowledgeTrigger';
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_6__["createUseStyles"])(function (theme) {
  var _knowledgesProgressBa2, _sliderContainer;

  return {
    knowledgesRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexColumn alignCenter justifyCenter flex1',
      position: 'relative',
      fontFamily: 'font-ProximaNova-regular',
      paddingBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].lgDown, {
      paddingLeft: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_9__["horizontalPaddingMobile"]),
      paddingRight: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_9__["horizontalPaddingMobile"])
    }),
    overall: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexColumn center stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].lgDown, {
      marginBottom: theme.spacing(4)
    }),
    progressiveContainer: {
      composes: 'flexColumn stretchSelf center',
      width: '100%',
      height: 200
    },
    knowledgesProgressBar: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginBottom: theme.spacing(16),
      composes: 'flexRow stretchSelf justifyCenter flex1'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].mdLg, {
      marginTop: theme.spacing(6)
    }),
    knowledgesProgressBarContent: (_knowledgesProgressBa2 = {
      composes: 'flexRow stretchSelf flex1'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_knowledgesProgressBa2, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].lgUp, {
      width: 1300
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_knowledgesProgressBa2, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].mdLg, {
      width: 1000
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_knowledgesProgressBa2, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].mdDown, {
      flexDirection: 'column'
    }), _knowledgesProgressBa2),
    sliderContainer: (_sliderContainer = {
      position: 'relative',
      width: 1200
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].lgXl, {
      width: '90vw'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].mdLg, {
      width: 800
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].mdDown, {
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
    buttonBack: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      left: -60
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].xlDown, {
      left: -45
    }),
    buttonNext: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      right: -60
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_9__["media"].xlDown, {
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

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__["useWindowSize"])(),
      width = _useWindowSize.width;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isTablet = _useState[0],
      setIsTablet = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setIsTablet(width <= _utils_constants__WEBPACK_IMPORTED_MODULE_9__["sm"]);
  }, [width]);

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__["useInView"])({
    threshold: 0
  }),
      ref = _useInView.ref,
      inView = _useInView.inView;

  var carousel = __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselProvider"], {
    visibleSlides: 3,
    totalSlides: 6,
    step: 1,
    naturalSlideWidth: 500,
    naturalSlideHeight: 500,
    hasMasterSpinner: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.sliderContainer,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    className: classes.slider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 17
    }
  }, dataProgressBar.map(function (d, i) {
    return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["Slide"], {
      index: i,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 25
      }
    }, __jsx(_KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      data: d,
      key: i,
      startAnimation: inView,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 29
      }
    }));
  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["ButtonBack"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.buttonBack, classes.sildeButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 17
    }
  }, '<'), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["ButtonNext"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.buttonNext, classes.sildeButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 17
    }
  }, '>')));

  var mobile = __jsx("div", {
    className: classes.knowledgesProgressBarContent,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
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
        lineNumber: 396,
        columnNumber: 17
      }
    });
  }));

  var parallaxData = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return [
    /** animation in */
    {
      start: ".".concat(triggerClassName),
      duration: '150vh',
      properties: [{
        startValue: 'rgb(',
        endValue: 'rgb(0, 0, 0)',
        property: 'background-color'
      }]
    }];
  }, []);
  var Component = isTablet ? 'div' : react_plx__WEBPACK_IMPORTED_MODULE_7___default.a;
  var otherProps = isTablet ? {} : {
    parallaxData: parallaxData
  };
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.knowledgesRoot, triggerClassName),
    id: "knowledges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.overall,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 13
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 17
    }
  })), dataDescription.map(function (d, i) {
    return __jsx(_Knowledge__WEBPACK_IMPORTED_MODULE_11__["default"], {
      data: d,
      key: i,
      reverse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["isReverse"])(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 21
      }
    });
  }), __jsx("div", {
    className: classes.knowledgesProgressBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }
  }, isTablet ? mobile : carousel));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledges);

/***/ })

})
//# sourceMappingURL=index.js.4b93b1b0dd7e734920c4.hot-update.js.map