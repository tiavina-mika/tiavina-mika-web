webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/KnowledgeProgressBar.tsx":
/*!*************************************************************!*\
  !*** ./components/home/knowledges/KnowledgeProgressBar.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _BlockTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockTitle */ "./components/home/knowledges/BlockTitle.tsx");
/* harmony import */ var _ItemsChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemsChart */ "./components/home/knowledges/ItemsChart.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\KnowledgeProgressBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _knowledgeProgressBar;

  return {
    knowledgeProgressBarRoot: (_knowledgeProgressBar = {
      composes: 'flexColumn center flex1',
      fontFamily: 'font-ProximaNova-regular',
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeProgressBar, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgDown, {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgeProgressBar, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdDown, {
      alignSelf: 'stretch'
    }), _knowledgeProgressBar),
    knowledgeProgressBarContent: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf',
      width: 400,
      alignSelf: 'center'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      alignSelf: 'stretch'
    }),
    cards: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginTop: theme.spacing(4),
      margin: -theme.spacing(1.8)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      alignItems: 'flex-start',
      justifyCenter: 'flex-start',
      margin: [theme.spacing(1), 0],
      marginTop: theme.spacing(1.3),
      padding: 0
    }),
    card: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: 300,
      padding: [theme.spacing(2.5), theme.spacing(5)],
      margin: theme.spacing(1.8),
      backgroundColor: '#fff',
      boxShadow: '0 8px 10px 0 rgba(0,0,0,.08)',
      borderRadius: 32,
      fontSize: 18
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      padding: [theme.spacing(3), theme.spacing(4)],
      margin: [theme.spacing(1), 0],
      fontSize: 14
    }),
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'justifyCenter',
      textAlign: 'center',
      fontSize: 22
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      justifyContent: 'flex-start',
      fontSize: 18
    })
  };
});

var KnowledgeProgressBar = function KnowledgeProgressBar(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.knowledgeProgressBarRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.knowledgeProgressBarContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(_BlockTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: data.title,
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx(_ItemsChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: data.items.sort(function (a, b) {
      return b.value - a.value;
    }),
    className: classes.cards,
    itemClassName: classes.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (KnowledgeProgressBar);

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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _KnowledgeDescription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KnowledgeDescription */ "./components/home/knowledges/KnowledgeDescription.tsx");
/* harmony import */ var _KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KnowledgeProgressBar */ "./components/home/knowledges/KnowledgeProgressBar.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])(function (theme) {
  var _knowledgesProgressBa, _sliderContainer;

  return {
    knowledgesRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn alignCenter justifyCenter flex1 red',
      position: 'relative',
      fontFamily: 'font-ProximaNova-regular',
      paddingBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      paddingLeft: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_5__["horizontalPaddingMobile"]),
      paddingRight: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_5__["horizontalPaddingMobile"])
    }),
    overall: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      marginBottom: theme.spacing(4)
    }),
    progressiveContainer: {
      composes: 'flexColumn stretchSelf center',
      width: '100%',
      height: 200
    },
    knowledgesProgressBar: {
      marginBottom: theme.spacing(16),
      composes: 'flexRow stretchSelf justifyCenter flex1'
    },
    knowledgesProgressBarContent: (_knowledgesProgressBa = {
      composes: 'flexRow stretchSelf flex1'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      width: 1300
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdLg, {
      width: 1000
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_knowledgesProgressBa, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdDown, {
      flexDirection: 'column'
    }), _knowledgesProgressBa),
    sliderContainer: (_sliderContainer = {
      position: 'relative',
      width: 1200
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgXl, {
      width: 1000
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdLg, {
      width: 800
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sliderContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdDown, {
      width: '85vw'
    }), _sliderContainer),
    slider: {
      // position: 'relative',
      overflow: 'hidden',
      padding: 0,
      // width: 900,
      '& ul': {
        display: 'flex',
        padding: 0,
        margin: 0
      },
      '& li': {
        listStyle: 'none',
        padding: '0 !important',
        width: [400, '!important'],
        backgroundColor: 'blue'
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
      pointer: 'cursor',
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
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].xlDown, {
      left: -20
    }),
    buttonNext: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      right: -60
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].xlDown, {
      right: -20
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
      lineNumber: 359,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.sliderContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 9
    }
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    className: classes.slider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }
  }, dataProgressBar.map(function (d, i) {
    return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
      index: i,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 21
      }
    }, __jsx(_KnowledgeProgressBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: d,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 25
      }
    }));
  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonBack"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.buttonBack, classes.sildeButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }, '<'), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["ButtonNext"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.buttonNext, classes.sildeButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, '>')));

  return __jsx("div", {
    className: classes.knowledgesRoot,
    id: "knowledges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.overall,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 13
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  })), dataDescription.map(function (d, i) {
    return __jsx(_KnowledgeDescription__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: d,
      key: i,
      reverse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["isReverse"])(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 21
      }
    });
  }), __jsx("div", {
    className: classes.knowledgesProgressBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledges);

/***/ }),

/***/ "./node_modules/pure-react-carousel/dist/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/pure-react-carousel/dist/index.es.js ***!
  \***********************************************************/
/*! exports provided: ButtonBack, ButtonFirst, ButtonLast, ButtonNext, ButtonPlay, CarouselContext, CarouselProvider, Dot, DotGroup, Image, ImageWithZoom, Slide, Slider, Spinner, Store, WithStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBack", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFirst", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLast", function() { return index$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonNext", function() { return index$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPlay", function() { return index$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselContext", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselProvider", function() { return CarouselProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dot", function() { return Dot$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotGroup", function() { return index$5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWithZoom", function() { return index$6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return index$7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return index$8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithStore", function() { return WithStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}function _objectWithoutProperties(e,t){if(null==e)return{};var r,i,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,i=_getPrototypeOf(e);if(t){var n=_getPrototypeOf(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}function emptyFunction(){}function emptyFunctionWithReset(){}function cn(e){return e.map(function(e){return!1===e?null:e}).join(" ").replace(/\s+/g," ").trim()}function slideSize(e,t){return 100/e*t/t}function slideTraySize(e,t){return 100*e/t}function pct(e){return"".concat(e,"%")}function equal(e,t,r){if(e===t)return!0;var i=types[jkrosoType(e)],n=types[jkrosoType(t)];return!(!i||i!==n)&&i(e,t,r)}function memoGaurd(e){return function(t,r,i){if(!i)return e(t,r,[]);for(var n,s=i.length;n=i[--s];)if(n[0]===t&&n[1]===r)return!0;return e(t,r,i)}}function arrayEqual(e,t,r){var i=e.length;if(i!==t.length)return!1;for(r.push([e,t]);i--;)if(!equal(e[i],t[i],r))return!1;return!0}function objectEqual(e,t,r){if("function"==typeof e.equal)return r.push([e,t]),e.equal(t,r);var i=getEnumerableProperties(e),n=getEnumerableProperties(t),s=i.length;if(s!==n.length)return!1;for(i.sort(),n.sort();s--;)if(i[s]!==n[s])return!1;for(r.push([e,t]),s=i.length;s--;){var a=i[s];if(!equal(e[a],t[a],r))return!1}return!0}function getEnumerableProperties(e){var t=[];for(var r in e)"constructor"!==r&&t.push(r);return t}function isNonNullObject(e){return!!e&&"object"==typeof e}function isSpecial(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||isReactElement(e)}function isReactElement(e){return e.$$typeof===REACT_ELEMENT_TYPE}function emptyTarget(e){return Array.isArray(e)?[]:{}}function cloneUnlessOtherwiseSpecified(e,t){return!1!==t.clone&&t.isMergeableObject(e)?deepmerge(emptyTarget(e),e,t):e}function defaultArrayMerge(e,t,r){return e.concat(t).map(function(e){return cloneUnlessOtherwiseSpecified(e,r)})}function mergeObject(e,t,r){var i={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(t){i[t]=cloneUnlessOtherwiseSpecified(e[t],r)}),Object.keys(t).forEach(function(n){r.isMergeableObject(t[n])&&e[n]?i[n]=deepmerge(e[n],t[n],r):i[n]=cloneUnlessOtherwiseSpecified(t[n],r)}),i}function deepmerge(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||defaultArrayMerge,r.isMergeableObject=r.isMergeableObject||isMergeableObject;var i=Array.isArray(t);return i===Array.isArray(e)?i?r.arrayMerge(e,t,r):mergeObject(e,t,r):cloneUnlessOtherwiseSpecified(t,r)}function WithStore(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return{}},r=function(r){function i(e,r){var s;return _classCallCheck(this,i),s=n.call(this,e,r),s.state=t(_objectSpread2({},r.state)),s.updateStateProps=s.updateStateProps.bind(_assertThisInitialized(s)),s}_inherits(i,r);var n=_createSuper(i);return _createClass(i,[{key:"componentDidMount",value:function(){this.context.subscribe(this.updateStateProps)}},{key:"shouldComponentUpdate",value:function(e,t){return!equals(t,this.state)||!equals(e,this.props)}},{key:"componentWillUnmount",value:function(){this.context.unsubscribe(this.updateStateProps)}},{key:"updateStateProps",value:function(){this.setState(t(_objectSpread2({},this.context.state)))}},{key:"render",value:function(){var t=this,r=deepmerge_1(this.state,this.props);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(e,_extends({ref:function(e){t.instance=e}},r,{carouselStore:{getStoreState:this.context.getStoreState,masterSpinnerError:this.context.masterSpinnerError,masterSpinnerSuccess:this.context.masterSpinnerSuccess,setStoreState:this.context.setStoreState,subscribeMasterSpinner:this.context.subscribeMasterSpinner,unsubscribeAllMasterSpinner:this.context.unsubscribeAllMasterSpinner,unsubscribeMasterSpinner:this.context.unsubscribeMasterSpinner}}),this.props.children)}}]),i}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);return _defineProperty(r,"contextType",Context),_defineProperty(r,"propTypes",{children:CarouselPropTypes.children}),_defineProperty(r,"defaultProps",{children:null}),r}var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret;emptyFunctionWithReset.resetWarningCache=emptyFunction;var factoryWithThrowingShims=function(){function e(e,t,r,i,n,s){if(s!==ReactPropTypesSecret_1){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return r.PropTypes=r,r},propTypes=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),LOADING="loading",SUCCESS="success",ERROR="error",CarouselPropTypes={children:propTypes.oneOfType([propTypes.arrayOf(propTypes.node),propTypes.node]),direction:propTypes.oneOf(["forward","backward"]),height:function(e,t){var r=e[t];return"vertical"!==e.orientation||null!==r&&"number"==typeof r?null:new Error("Missing required property '".concat(t,"' when orientation is vertical.  You must supply a number representing the height in pixels"))},orientation:propTypes.oneOf(["horizontal","vertical"]),isBgImage:function(e,t){return!0===e[t]&&"img"===e.tag?new Error("HTML img elements should not have a backgroundImage.  Please use ".concat(t," for other block-level HTML tags, like div, a, section, etc...")):null}},boundedRange=function(e){var t=e.min,r=e.max,i=e.x;return Math.min(r,Math.max(t,i))},s={buttonBack:"buttonBack___1mlaL"},ButtonBack=function(e){function t(e){var i;return _classCallCheck(this,t),i=r.call(this,e),i.handleOnClick=i.handleOnClick.bind(_assertThisInitialized(i)),i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,null,[{key:"setDisabled",value:function(e,t,r){return null!==e?e:0===t&&!r}}]),_createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props,r=t.carouselStore,i=t.currentSlide,n=t.onClick,s=t.step,a=t.infinite,o=t.visibleSlides,l=t.totalSlides-o,c=Math.max(i-s,0);a&&(c=0===i?l:c),r.setStoreState({currentSlide:c,isPlaying:!1},null!==n&&n.call(this,e))}},{key:"render",value:function(){var e=this.props,r=(e.carouselStore,e.className),i=(e.currentSlide,e.disabled,e.onClick,e.step,e.totalSlides,e.visibleSlides,e.infinite),n=_objectWithoutProperties(e,["carouselStore","className","currentSlide","disabled","onClick","step","totalSlides","visibleSlides","infinite"]),a=cn([s.buttonBack,"carousel__back-button",r]),o=t.setDisabled(this.props.disabled,this.props.currentSlide,i);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",_extends({type:"button","aria-label":"previous",className:a,onClick:this.handleOnClick,disabled:o},n),this.props.children)}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);_defineProperty(ButtonBack,"propTypes",{carouselStore:propTypes.object.isRequired,children:CarouselPropTypes.children.isRequired,className:propTypes.string,currentSlide:propTypes.number.isRequired,disabled:propTypes.bool,onClick:propTypes.func,step:propTypes.number.isRequired,totalSlides:propTypes.number.isRequired,visibleSlides:propTypes.number.isRequired,infinite:propTypes.bool}),_defineProperty(ButtonBack,"defaultProps",{className:null,disabled:null,onClick:null,infinite:!1});var jkrosoType=createCommonjsModule(function(e,t){var r={}.toString,i="undefined"!=typeof window?window.Node:Function;e.exports=t=function(e){var t=typeof e;if("object"!=t)return t;if(t=n[r.call(e)],"object"==t)return e instanceof Map?"map":e instanceof Set?"set":"object";if(t)return t;if(e instanceof i)switch(e.nodeType){case 1:return"element";case 3:return"text-node";case 9:return"document";case 11:return"document-fragment";default:return"dom-node"}};var n=t.types={"[object Function]":"function","[object Date]":"date","[object RegExp]":"regexp","[object Arguments]":"arguments","[object Array]":"array","[object Set]":"set","[object String]":"string","[object Null]":"null","[object Undefined]":"undefined","[object Number]":"number","[object Boolean]":"boolean","[object Object]":"object","[object Map]":"map","[object Text]":"text-node","[object Uint8Array]":"bit-array","[object Uint16Array]":"bit-array","[object Uint32Array]":"bit-array","[object Uint8ClampedArray]":"bit-array","[object Error]":"error","[object FormData]":"form-data","[object File]":"file","[object Blob]":"blob"}}),jkrosoType_1=jkrosoType.types,types={};types.number=function(e,t){return e!==e&&t!==t},types.function=function(e,t,r){return e.toString()===t.toString()&&types.object(e,t,r)&&equal(e.prototype,t.prototype)},types.date=function(e,t){return+e==+t},types.regexp=function(e,t){return e.toString()===t.toString()},types.element=function(e,t){return e.outerHTML===t.outerHTML},types.textnode=function(e,t){return e.textContent===t.textContent},types.arguments=types["bit-array"]=types.array=memoGaurd(arrayEqual),types.object=memoGaurd(objectEqual);var equals=equal,isMergeableObject=function(e){return isNonNullObject(e)&&!isSpecial(e)},canUseSymbol="function"==typeof Symbol&&Symbol.for,REACT_ELEMENT_TYPE=canUseSymbol?Symbol.for("react.element"):60103;deepmerge.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return deepmerge(e,r,t)},{})};var deepmerge_1=deepmerge,Context=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),deepFreeze=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(r){!t.hasOwnProperty(r)||null===t[r]||"object"!=typeof t[r]&&"function"!=typeof t[r]||Object.isFrozen(t[r])||e(t[r])}),t},DEFAULT_STATE={masterSpinnerFinished:!1},Store=function(){function e(t){_classCallCheck(this,e),this.state=deepFreeze(deepmerge_1(DEFAULT_STATE,t)),this.subscriptions=[],this.masterSpinnerSubscriptions={},this.setStoreState=this.setStoreState.bind(this),this.getStoreState=this.getStoreState.bind(this),this.subscribe=this.subscribe.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.updateSubscribers=this.updateSubscribers.bind(this),this.subscribeMasterSpinner=this.subscribeMasterSpinner.bind(this),this.unsubscribeMasterSpinner=this.unsubscribeMasterSpinner.bind(this),this.unsubscribeAllMasterSpinner=this.unsubscribeAllMasterSpinner.bind(this),this.masterSpinnerSuccess=this.masterSpinnerSuccess.bind(this),this.masterSpinnerError=this.masterSpinnerError.bind(this)}return _createClass(e,[{key:"setStoreState",value:function(e,t){this.state=deepFreeze(deepmerge_1(this.state,e)),this.updateSubscribers(t)}},{key:"getStoreState",value:function(){return deepmerge_1({},this.state)}},{key:"subscribe",value:function(e){this.subscriptions.push(e)}},{key:"unsubscribe",value:function(e){var t=this.subscriptions.indexOf(e);-1!==t&&this.subscriptions.splice(t,1)}},{key:"updateSubscribers",value:function(e){this.subscriptions.forEach(function(e){return e()}),"function"==typeof e&&e(this.getStoreState())}},{key:"subscribeMasterSpinner",value:function(e){-1===Object.keys(this.masterSpinnerSubscriptions).indexOf(e)&&(this.masterSpinnerSubscriptions[e]={success:!1,error:!1,complete:!1})}},{key:"unsubscribeMasterSpinner",value:function(e){return-1!==Object.keys(this.masterSpinnerSubscriptions).indexOf(e)&&(this.setMasterSpinnerFinished(),delete this.masterSpinnerSubscriptions[e])}},{key:"unsubscribeAllMasterSpinner",value:function(){this.masterSpinnerSubscriptions={},this.setMasterSpinnerFinished()}},{key:"masterSpinnerSuccess",value:function(e){this.masterSpinnerSubscriptions[e].success=!0,this.masterSpinnerSubscriptions[e].complete=!0,this.setMasterSpinnerFinished()}},{key:"masterSpinnerError",value:function(e){this.masterSpinnerSubscriptions[e].error=!0,this.masterSpinnerSubscriptions[e].complete=!0,this.setMasterSpinnerFinished()}},{key:"setMasterSpinnerFinished",value:function(){this.setStoreState({masterSpinnerFinished:this.isMasterSpinnerFinished()})}},{key:"isMasterSpinnerFinished",value:function(){var e=this;return 0===Object.keys(this.masterSpinnerSubscriptions).filter(function(t){return!0!==e.masterSpinnerSubscriptions[t].complete}).length}}]),e}(),_class,_temp,CarouselProvider=(_temp=_class=function(e){function t(e){var i;if(_classCallCheck(this,t),i=r.call(this,e),e.isIntrinsicHeight&&"horizontal"!==e.orientation)throw Error('isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.');var n={currentSlide:e.currentSlide,disableAnimation:e.disableAnimation,disableKeyboard:e.disableKeyboard,hasMasterSpinner:e.hasMasterSpinner,imageErrorCount:0,imageSuccessCount:0,interval:e.interval,isPageScrollLocked:e.isPageScrollLocked,isPlaying:e.isPlaying,lockOnWindowScroll:e.lockOnWindowScroll,masterSpinnerThreshold:0,naturalSlideHeight:e.naturalSlideHeight,naturalSlideWidth:e.naturalSlideWidth,orientation:e.orientation,playDirection:e.playDirection,privateUnDisableAnimation:!1,slideSize:slideSize(e.totalSlides,e.visibleSlides),slideTraySize:slideTraySize(e.totalSlides,e.visibleSlides),step:e.step,dragStep:e.dragStep,totalSlides:e.totalSlides,touchEnabled:e.touchEnabled,dragEnabled:e.dragEnabled,visibleSlides:e.visibleSlides,infinite:e.infinite,isIntrinsicHeight:e.isIntrinsicHeight};return i.carouselStore=new Store(n),i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,[{key:"componentDidUpdate",value:function(e){var t=this,r={};["currentSlide","disableAnimation","disableKeyboard","hasMasterSpinner","interval","isPlaying","naturalSlideHeight","naturalSlideWidth","lockOnWindowScroll","orientation","playDirection","step","dragStep","totalSlides","touchEnabled","dragEnabled","visibleSlides"].forEach(function(i){e[i]!==t.props[i]&&(r[i]=t.props[i])}),this.props.currentSlide!==e.currentSlide&&!this.props.disableAnimation&&(r.disableAnimation=!0,r.privateUnDisableAnimation=!0),this.props.totalSlides===e.totalSlides&&this.props.visibleSlides===e.visibleSlides||(r.slideSize=slideSize(this.props.totalSlides,this.props.visibleSlides),r.slideTraySize=slideTraySize(this.props.totalSlides,this.props.visibleSlides)),this.carouselStore.state.currentSlide>=this.props.totalSlides&&(r.currentSlide=Math.max(this.props.totalSlides-1,0)),Object.keys(r).length>0&&this.carouselStore.setStoreState(r)}},{key:"componentWillUnmount",value:function(){this.carouselStore.unsubscribeAllMasterSpinner()}},{key:"getStore",value:function(){return this.carouselStore}},{key:"render",value:function(){var e=this.props,t=(e.children,e.className,e.currentSlide,e.disableAnimation,e.disableKeyboard,e.hasMasterSpinner,e.interval,e.isPageScrollLocked,e.isPlaying,e.lockOnWindowScroll,e.naturalSlideHeight,e.naturalSlideWidth,e.orientation,e.playDirection,e.step,e.dragStep,e.tag),r=(e.totalSlides,e.touchEnabled,e.dragEnabled,e.visibleSlides,e.infinite,e.isIntrinsicHeight,_objectWithoutProperties(e,["children","className","currentSlide","disableAnimation","disableKeyboard","hasMasterSpinner","interval","isPageScrollLocked","isPlaying","lockOnWindowScroll","naturalSlideHeight","naturalSlideWidth","orientation","playDirection","step","dragStep","tag","totalSlides","touchEnabled","dragEnabled","visibleSlides","infinite","isIntrinsicHeight"])),i=cn(["carousel",this.props.className]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(t,_extends({className:i},r),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider,{value:this.carouselStore},this.props.children))}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_defineProperty(_class,"propTypes",{children:CarouselPropTypes.children.isRequired,className:propTypes.string,currentSlide:propTypes.number,disableAnimation:propTypes.bool,disableKeyboard:propTypes.bool,hasMasterSpinner:propTypes.bool,interval:propTypes.number,isPageScrollLocked:propTypes.bool,isPlaying:propTypes.bool,lockOnWindowScroll:propTypes.bool,naturalSlideHeight:propTypes.number.isRequired,naturalSlideWidth:propTypes.number.isRequired,orientation:CarouselPropTypes.orientation,playDirection:CarouselPropTypes.direction,step:propTypes.number,dragStep:propTypes.number,tag:propTypes.string,totalSlides:propTypes.number.isRequired,touchEnabled:propTypes.bool,dragEnabled:propTypes.bool,visibleSlides:propTypes.number,infinite:propTypes.bool,isIntrinsicHeight:propTypes.bool}),_defineProperty(_class,"defaultProps",{className:null,currentSlide:0,disableAnimation:!1,disableKeyboard:!1,hasMasterSpinner:!1,interval:5e3,isPageScrollLocked:!1,isPlaying:!1,lockOnWindowScroll:!1,orientation:"horizontal",playDirection:"forward",step:1,dragStep:1,tag:"div",touchEnabled:!0,dragEnabled:!0,visibleSlides:1,infinite:!1,isIntrinsicHeight:!1}),_temp);Context.Consumer;var index=WithStore(ButtonBack,function(e){return{currentSlide:e.currentSlide,step:e.step,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides,infinite:e.infinite}}),s$1={buttonFirst:"buttonFirst___2rhFr"},_class$1,_temp$1,ButtonFirst=(_temp$1=_class$1=function(e){function t(){var e;return _classCallCheck(this,t),e=r.call(this),e.handleOnClick=e.handleOnClick.bind(_assertThisInitialized(e)),e}_inherits(t,e);var r=_createSuper(t);return _createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props,r=t.carouselStore,i=t.onClick;r.setStoreState({currentSlide:0,isPlaying:!1},null!==i&&i.call(this,e))}},{key:"render",value:function(){var e=this.props,t=(e.carouselStore,e.className),r=e.currentSlide,i=e.disabled,n=(e.onClick,e.totalSlides,_objectWithoutProperties(e,["carouselStore","className","currentSlide","disabled","onClick","totalSlides"])),s=cn([s$1.buttonFirst,"carousel__first-button",t]),a=null!==i?i:0===r;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",_extends({type:"button","aria-label":"first",className:s,onClick:this.handleOnClick,disabled:a},n),this.props.children)}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_defineProperty(_class$1,"propTypes",{carouselStore:propTypes.object.isRequired,children:CarouselPropTypes.children.isRequired,className:propTypes.string,currentSlide:propTypes.number.isRequired,disabled:propTypes.bool,onClick:propTypes.func,totalSlides:propTypes.number.isRequired}),_defineProperty(_class$1,"defaultProps",{className:null,disabled:null,onClick:null}),_temp$1),index$1=WithStore(ButtonFirst,function(e){return{currentSlide:e.currentSlide,totalSlides:e.totalSlides}}),s$2={buttonNext:"buttonNext___2mOCa"},_class$2,_temp$2,ButtonNext=(_temp$2=_class$2=function(e){function t(e){var i;return _classCallCheck(this,t),i=r.call(this,e),i.handleOnClick=i.handleOnClick.bind(_assertThisInitialized(i)),i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,null,[{key:"setDisabled",value:function(e,t,r,i,n){return null!==e?e:t>=i-r&&!n}}]),_createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props,r=t.currentSlide,i=t.onClick,n=t.step,s=t.carouselStore,a=t.infinite,o=t.totalSlides-t.visibleSlides,l=n+r,c=Math.min(l,o);a&&(c=o===r?0:c),s.setStoreState({currentSlide:c,isPlaying:!1},null!==i&&i.call(this,e))}},{key:"render",value:function(){var e=this.props,r=(e.carouselStore,e.className),i=e.currentSlide,n=e.disabled,s=(e.onClick,e.step,e.totalSlides),a=e.visibleSlides,o=e.infinite,l=_objectWithoutProperties(e,["carouselStore","className","currentSlide","disabled","onClick","step","totalSlides","visibleSlides","infinite"]),c=cn([s$2.buttonNext,"carousel__next-button",r]),u=t.setDisabled(n,i,a,s,o);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",_extends({type:"button","aria-label":"next",className:c,onClick:this.handleOnClick,disabled:u},l),this.props.children)}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),_defineProperty(_class$2,"propTypes",{carouselStore:propTypes.object.isRequired,children:CarouselPropTypes.children.isRequired,className:propTypes.string,currentSlide:propTypes.number.isRequired,disabled:propTypes.bool,onClick:propTypes.func,step:propTypes.number.isRequired,totalSlides:propTypes.number.isRequired,visibleSlides:propTypes.number.isRequired,infinite:propTypes.bool}),_defineProperty(_class$2,"defaultProps",{className:null,disabled:null,onClick:null,infinite:!1}),_temp$2),index$2=WithStore(ButtonNext,function(e){return{currentSlide:e.currentSlide,step:e.step,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides,infinite:e.infinite}}),s$3={buttonLast:"buttonLast___2yuh0"},_class$3,_temp$3,ButtonLast=(_temp$3=_class$3=function(e){function t(){var e;return _classCallCheck(this,t),e=r.call(this),e.handleOnClick=e.handleOnClick.bind(_assertThisInitialized(e)),e}_inherits(t,e);var r=_createSuper(t);return _createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props,r=t.carouselStore,i=t.onClick,n=t.totalSlides,s=t.visibleSlides;r.setStoreState({currentSlide:n-s,isPlaying:!1},null!==i&&i.call(this,e))}},{key:"render",value:function(){var e=this.props,t=(e.carouselStore,e.className),r=e.currentSlide,i=e.disabled,n=(e.onClick,e.totalSlides),s=e.visibleSlides,a=_objectWithoutProperties(e,["carouselStore","className","currentSlide","disabled","onClick","totalSlides","visibleSlides"]),o=cn([s$3.buttonLast,"carousel__last-button",t]),l=null!==i?i:r>=n-s;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",_extends({type:"button","aria-label":"last",className:o,onClick:this.handleOnClick,disabled:l},a),this.props.children)}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_defineProperty(_class$3,"propTypes",{carouselStore:propTypes.object.isRequired,children:CarouselPropTypes.children.isRequired,className:propTypes.string,currentSlide:propTypes.number.isRequired,disabled:propTypes.bool,onClick:propTypes.func,totalSlides:propTypes.number.isRequired,visibleSlides:propTypes.number.isRequired}),_defineProperty(_class$3,"defaultProps",{className:null,disabled:null,onClick:null}),_temp$3),index$3=WithStore(ButtonLast,function(e){return{currentSlide:e.currentSlide,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides}}),s$4={buttonNext:"buttonNext___3Lm3s"},_class$4,_temp$4,ButtonPlay=(_temp$4=_class$4=function(e){function t(e){var i;return _classCallCheck(this,t),i=r.call(this,e),i.handleOnClick=i.handleOnClick.bind(_assertThisInitialized(i)),i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props.onClick;this.props.carouselStore.setStoreState({isPlaying:!this.props.isPlaying},null!==t&&t.call(this,e))}},{key:"render",value:function(){var e=this.props,t=(e.carouselStore,e.children,e.childrenPaused),r=e.childrenPlaying,i=e.className,n=e.isPlaying,s=(e.onClick,_objectWithoutProperties(e,["carouselStore","children","childrenPaused","childrenPlaying","className","isPlaying","onClick"])),a=cn([s$4.buttonNext,"carousel__play-button",i]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",_extends({type:"button","aria-label":"play",className:a,onClick:this.handleOnClick},s),n&&r,!n&&t,this.props.children)}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),_defineProperty(_class$4,"propTypes",{carouselStore:propTypes.object.isRequired,children:propTypes.node,childrenPaused:propTypes.node,childrenPlaying:propTypes.node,className:propTypes.string,isPlaying:propTypes.bool.isRequired,onClick:propTypes.func}),_defineProperty(_class$4,"defaultProps",{children:null,childrenPaused:null,childrenPlaying:null,className:null,onClick:null}),_temp$4),index$4=WithStore(ButtonPlay,function(e){return{isPlaying:e.isPlaying}}),s$5={dot:"dot___3c3SI"},_class$5,_temp$5,Dot=(_temp$5=_class$5=function(e){function t(e){var i;return _classCallCheck(this,t),i=r.call(this,e),i.handleOnClick=i.handleOnClick.bind(_assertThisInitialized(i)),i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props,r=t.carouselStore,i=t.onClick,n=t.slide,s=t.totalSlides,a=t.visibleSlides,o=n>=s-a?s-a:n;r.setStoreState({currentSlide:o,isPlaying:!1},null!==i&&i.call(this,e))}},{key:"render",value:function(){var e=this.props,t=(e.carouselStore,e.children,e.className),r=e.currentSlide,i=e.disabled,n=(e.onClick,e.selected),s=e.slide,a=(e.totalSlides,e.visibleSlides),o=_objectWithoutProperties(e,["carouselStore","children","className","currentSlide","disabled","onClick","selected","slide","totalSlides","visibleSlides"]),l=s>=r&&s<r+a,c="boolean"==typeof n?n:l,u=!0===l,p="boolean"==typeof i?i:u,d=cn([s$5.dot,c&&s$5.dotSelected,"carousel__dot","carousel__dot--".concat(s),c&&"carousel__dot--selected",t]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",_extends({"aria-label":"slide dot",type:"button",onClick:this.handleOnClick,className:d,disabled:p},o),this.props.children)}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_defineProperty(_class$5,"propTypes",{carouselStore:propTypes.object.isRequired,children:CarouselPropTypes.children,className:propTypes.string,currentSlide:propTypes.number.isRequired,disabled:propTypes.bool,onClick:propTypes.func,selected:propTypes.bool,slide:propTypes.number.isRequired,totalSlides:propTypes.number.isRequired,visibleSlides:propTypes.number.isRequired}),_defineProperty(_class$5,"defaultProps",{children:null,className:null,disabled:null,onClick:null,selected:null}),_temp$5),Dot$1=WithStore(Dot,function(e){return{currentSlide:e.currentSlide,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides}}),s$6={},_class$6,_temp$6,DotGroup=(_temp$6=_class$6=function(e){function t(){return _classCallCheck(this,t),r.apply(this,arguments)}_inherits(t,e);var r=_createSuper(t);return _createClass(t,[{key:"renderDots",value:function(){var e=this.props,t=e.currentSlide,r=e.totalSlides,i=e.visibleSlides,n=e.disableActiveDots,s=e.showAsSelectedForCurrentSlideOnly,a=e.renderDots;if(a){var o=this.props;o.renderDots;return a(_objectWithoutProperties(o,["renderDots"]))}for(var l=[],c=0;c<r;c+=1){var u=c>=t&&c<t+i,p=c===t,d=s?p:u,h=c>=r-i?r-i:c;l.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dot$1,{key:c,slide:h,selected:d,disabled:!!n&&d},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:cn["carousel__dot-group-dot"]},this.props.dotNumbers&&c+1)))}return l}},{key:"render",value:function(){var e=this.props,t=(e.carouselStore,e.children),r=e.className,i=(e.currentSlide,e.dotNumbers,e.totalSlides,e.visibleSlides,e.disableActiveDots,e.showAsSelectedForCurrentSlideOnly,e.renderDots,_objectWithoutProperties(e,["carouselStore","children","className","currentSlide","dotNumbers","totalSlides","visibleSlides","disableActiveDots","showAsSelectedForCurrentSlideOnly","renderDots"])),n=cn([s$6.DotGroup,"carousel__dot-group",r]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",_extends({className:n},i),this.renderDots(),t)}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_defineProperty(_class$6,"propTypes",{children:CarouselPropTypes.children,className:propTypes.string,currentSlide:propTypes.number.isRequired,carouselStore:propTypes.object.isRequired,totalSlides:propTypes.number.isRequired,visibleSlides:propTypes.number.isRequired,dotNumbers:propTypes.bool,disableActiveDots:propTypes.bool,showAsSelectedForCurrentSlideOnly:propTypes.bool,renderDots:propTypes.func}),_defineProperty(_class$6,"defaultProps",{children:null,className:null,dotNumbers:!1,disableActiveDots:!0,showAsSelectedForCurrentSlideOnly:!1,renderDots:null}),_temp$6),index$5=WithStore(DotGroup,function(e){return{currentSlide:e.currentSlide,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides}}),s$7={image:"image___xtQGH"},Image=function(e){function t(e){var i;return _classCallCheck(this,t),i=r.call(this,e),i.state={imageStatus:LOADING},i.handleImageLoad=i.handleImageLoad.bind(_assertThisInitialized(i)),i.handleImageError=i.handleImageError.bind(_assertThisInitialized(i)),i.image=null,i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,null,[{key:"subscribeMasterSpinner",value:function(e){e.hasMasterSpinner&&e.carouselStore.subscribeMasterSpinner(e.src)}},{key:"unsubscribeMasterSpinner",value:function(e){e.hasMasterSpinner&&e.carouselStore.unsubscribeMasterSpinner(e.src)}}]),_createClass(t,[{key:"componentDidMount",value:function(){t.subscribeMasterSpinner(this.props),this.initImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(t.unsubscribeMasterSpinner(e),t.subscribeMasterSpinner(this.props),this.initImage())}},{key:"componentWillUnmount",value:function(){t.unsubscribeMasterSpinner(this.props),this.image.removeEventListener("load",this.handleImageLoad),this.image.removeEventListener("error",this.handleImageError),this.image=null}},{key:"initImage",value:function(){if(this.setState({imageStatus:LOADING}),this.image=document.createElement("img"),this.image.addEventListener("load",this.handleImageLoad,!1),this.image.addEventListener("error",this.handleImageError,!1),this.image.src=this.props.src,this.image.readyState||this.image.complete){var e=this.image.src;this.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",this.image.src=e}}},{key:"handleImageLoad",value:function(e){this.setState({imageStatus:SUCCESS}),this.props.hasMasterSpinner&&this.props.carouselStore.masterSpinnerSuccess(this.props.src),this.props.onLoad&&this.props.onLoad(e)}},{key:"handleImageError",value:function(e){this.setState({imageStatus:ERROR}),this.props.hasMasterSpinner&&this.props.carouselStore.masterSpinnerError(this.props.src),this.props.onError&&this.props.onError(e)}},{key:"tempTag",value:function(){return"img"===this.props.tag?"div":this.props.tag}},{key:"customRender",value:function(e){return"function"==typeof this.props[e]?this.props[e]():this.props.children}},{key:"renderLoading",value:function(e){var t=this.tempTag(),r=cn([s$7.image,s$7.imageLoading,"carousel__image",this.props.isBgImage&&"carousel__image--with-background","carousel__image--loading",this.props.className]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(t,_extends({className:r},e),this.customRender("renderLoading"))}},{key:"renderError",value:function(e){var t=this.tempTag(),r=cn([s$7.image,s$7.imageError,"carousel__image",this.props.isBgImage&&"carousel__image--with-background","carousel__image--error",this.props.className]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(t,_extends({className:r},e),this.customRender("renderError"))}},{key:"renderSuccess",value:function(e){var t=this.props,r=t.style,i=t.tag,n=cn([s$7.image,"carousel__image",this.props.isBgImage&&"carousel__image--with-background","carousel__image--success",this.props.className]),s=_extends({},r),a=e;if("img"!==i){var o=e.src;e.alt;a=_objectWithoutProperties(e,["src","alt"]),s=_extends({},r,{backgroundImage:'url("'.concat(o,'")'),backgroundSize:"cover"})}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i,_extends({className:n,style:s},a),this.props.children)}},{key:"render",value:function(){var e=this.props,t=(e.carouselStore,e.children,e.className,e.hasMasterSpinner,e.isBgImage,e.onError,e.onLoad,e.renderError,e.renderLoading,e.style,e.tag,_objectWithoutProperties(e,["carouselStore","children","className","hasMasterSpinner","isBgImage","onError","onLoad","renderError","renderLoading","style","tag"]));switch(this.state.imageStatus){case LOADING:return this.renderLoading(t);case SUCCESS:return this.renderSuccess(t);case ERROR:return this.renderError(t);default:throw new Error("unknown value for this.state.imageStatus")}}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);_defineProperty(Image,"propTypes",{alt:propTypes.string,carouselStore:propTypes.object.isRequired,children:CarouselPropTypes.children,className:propTypes.string,hasMasterSpinner:propTypes.bool.isRequired,isBgImage:CarouselPropTypes.isBgImage,onError:propTypes.func,onLoad:propTypes.func,renderError:propTypes.func,renderLoading:propTypes.func,src:propTypes.string.isRequired,style:propTypes.object,tag:propTypes.string}),_defineProperty(Image,"defaultProps",{alt:"",children:null,className:null,isBgImage:!1,onError:null,onLoad:null,renderError:null,renderLoading:null,style:null,tag:"img"});var Image$1=WithStore(Image,function(e){return{hasMasterSpinner:e.hasMasterSpinner,orientation:e.orientation}}),s$8={spinner:"spinner___27VUp",spin:"spin___S3UuE"},_class$7,_temp$7,Spinner=(_temp$7=_class$7=function(e){function t(){return _classCallCheck(this,t),r.apply(this,arguments)}_inherits(t,e);var r=_createSuper(t);return _createClass(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=_objectWithoutProperties(e,["className"]),i=cn([s$8.spinner,"carousel__spinner",t]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",_extends({className:i},r))}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),_defineProperty(_class$7,"propTypes",{className:propTypes.string}),_defineProperty(_class$7,"defaultProps",{className:null}),_temp$7),s$9={container:"container___2O72F",overlay:"overlay___IV4qY",hover:"hover___MYy31",zoom:"zoom___3kqYk",loading:"loading___1pvNI",imageLoadingSpinnerContainer:"imageLoadingSpinnerContainer___3UIPD"},_class$8,_temp$8,MOUSE_SCALE=2,MAX_TOUCH_SCALE=3,ImageWithZoom=(_temp$8=_class$8=function(e){function t(e){var i;return _classCallCheck(this,t),i=r.call(this,e),i.state={isImageLoading:!0,isHovering:!1,isZooming:!1,x:null,y:null,scale:1},i.tpCache={},i.handleImageComplete=i.handleImageComplete.bind(_assertThisInitialized(i)),i.handleOnMouseMove=i.handleOnMouseMove.bind(_assertThisInitialized(i)),i.handleOnMouseOut=i.handleOnMouseOut.bind(_assertThisInitialized(i)),i.handleOnMouseOver=i.handleOnMouseOver.bind(_assertThisInitialized(i)),i.handleOnTouchEnd=i.handleOnTouchEnd.bind(_assertThisInitialized(i)),i.handleOnTouchMove=i.handleOnTouchMove.bind(_assertThisInitialized(i)),i.handleOnTouchStart=i.handleOnTouchStart.bind(_assertThisInitialized(i)),i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,null,[{key:"midpointBetweenTwoTouches",value:function(e){var t=e.x1,r=e.y1;return{x:(t+e.x2)/2,y:(r+e.y2)/2}}},{key:"distanceBetweenTwoTouches",value:function(e){var t=e.x1,r=e.y1,i=e.x2,n=e.y2;return Math.sqrt(Math.pow(i-t,2)+Math.pow(n-r,2))}}]),_createClass(t,[{key:"componentDidUpdate",value:function(e,t){!1===t.isZooming&&!0===this.state.isZooming&&this.props.carouselStore.setStoreState({isPageScrollLocked:!0}),!0===t.isZooming&&!1===this.state.isZooming&&this.props.carouselStore.setStoreState({isPageScrollLocked:!1})}},{key:"handleImageComplete",value:function(){this.setState({isImageLoading:!1})}},{key:"handleOnMouseOver",value:function(){this.state.isZooming||this.setState({isHovering:!0,scale:MOUSE_SCALE})}},{key:"handleOnMouseOut",value:function(){this.state.isZooming||this.setState({isHovering:!1,scale:1})}},{key:"handleOnMouseMove",value:function(e){if(!this.state.isZooming){var t=pct(e.nativeEvent.offsetX/e.target.offsetWidth*100),r=pct(e.nativeEvent.offsetY/e.target.offsetHeight*100);this.setState({x:t,y:r})}}},{key:"handleOnTouchStart",value:function(e){var t=this;this.props.isPinchZoomEnabled&&(_toConsumableArray(e.targetTouches).forEach(function(e){t.tpCache[e.identifier]={clientX:e.clientX,clientY:e.clientY}}),this.setState(function(e){return{isZooming:e.isZooming||Object.keys(t.tpCache).length>1}}))}},{key:"handleOnTouchMove",value:function(e){var r=this;if(this.state.isZooming){e.persist();var i=_toConsumableArray(e.targetTouches).filter(function(e){return r.tpCache[e.identifier]}).slice(0,2);if(2===i.length){e.stopPropagation();var n=e.target.getBoundingClientRect(),s=i[0].identifier,a=i[1].identifier,o={x1:this.tpCache[s].clientX,y1:this.tpCache[s].clientY,x2:this.tpCache[a].clientX,y2:this.tpCache[a].clientY};o.distance=t.distanceBetweenTwoTouches(_objectSpread2({},o));var l=t.midpointBetweenTwoTouches(_objectSpread2({},o));o.cx=l.x,o.cy=l.y;var c={x1:i[0].clientX,y1:i[0].clientY,x2:i[1].clientX,y2:i[1].clientY};c.distance=t.distanceBetweenTwoTouches(_objectSpread2({},c));var u=t.midpointBetweenTwoTouches(_objectSpread2({},c));c.cx=u.x,c.cy=u.y;var p=pct(boundedRange({min:0,max:100,x:(c.cx-n.left)/n.width*100})),d=pct(boundedRange({min:0,max:100,x:(c.cy-n.top)/n.height*100})),h=function(e){return boundedRange({min:1,max:MAX_TOUCH_SCALE,x:e.scale+(c.distance-o.distance)/100})};this.setState(function(e){return{isZooming:1!==h(e),scale:h(e),x:p,y:d}})}}}},{key:"handleOnTouchEnd",value:function(e){var t=this;this.props.isPinchZoomEnabled&&(_toConsumableArray(e.changedTouches).forEach(function(e){delete t.tpCache[e.identifier]}),0===Object.keys(this.tpCache).length&&this.setState({isZooming:!1}))}},{key:"renderLoading",value:function(){if(this.state.isImageLoading){var e=this.props.spinner;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:cn([s$9.imageLoadingSpinnerContainer,"carousel__image-loading-spinner-container"])},e&&e(),!e&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner,null))}return null}},{key:"render",value:function(){var e=this.props,t=(e.carouselStore,e.className),r=e.imageClassName,i=e.overlayClassName,n=(e.isPinchZoomEnabled,e.spinner,e.src),s=e.srcZoomed,a=e.tag,o=_objectWithoutProperties(e,["carouselStore","className","imageClassName","overlayClassName","isPinchZoomEnabled","spinner","src","srcZoomed","tag"]),l=cn([s$9.container,t]),c=cn([s$9.image,"carousel__zoom-image",r]),u=cn([s$9.overlay,"carousel__zoom-image-overlay",this.state.isHovering&&s$9.hover,this.state.isZooming&&s$9.zoom,this.state.isHovering&&"carousel__zoom-image-overlay--hovering",this.state.isZooming&&"carousel__zoom-image-overlay--zooming",i]),p={};return(this.state.isHovering||this.state.isZooming)&&(p.transformOrigin="".concat(this.state.x," ").concat(this.state.y),p.transform="scale(".concat(this.state.scale,")")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,_extends({className:l},o),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image$1,{className:c,tag:"div",src:n,isBgImage:!0,onLoad:this.handleImageComplete,onError:this.handleImageComplete}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image$1,{className:u,tag:"div",src:s||n,style:p,isBgImage:!0,onFocus:this.handleOnMouseOver,onMouseOver:this.handleOnMouseOver,onBlur:this.handleOnMouseOut,onMouseOut:this.handleOnMouseOut,onMouseMove:this.handleOnMouseMove,onTouchStart:this.handleOnTouchStart,onTouchEnd:this.handleOnTouchEnd,onTouchMove:this.handleOnTouchMove}),this.renderLoading())}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_defineProperty(_class$8,"propTypes",{carouselStore:propTypes.object.isRequired,className:propTypes.string,imageClassName:propTypes.string,overlayClassName:propTypes.string,spinner:propTypes.func,src:propTypes.string.isRequired,srcZoomed:propTypes.string,tag:propTypes.string,isPinchZoomEnabled:propTypes.bool}),_defineProperty(_class$8,"defaultProps",{className:null,imageClassName:null,overlayClassName:null,isPinchZoomEnabled:!0,spinner:null,srcZoomed:null,tag:"div"}),_temp$8),index$6=WithStore(ImageWithZoom,function(){return{}}),s$a={slide:"slide___3-Nqo",slideHorizontal:"slideHorizontal___1NzNV",slideInner:"slideInner___2mfX9",focusRing:"focusRing___1airF"},_class$9,_temp$9,Slide=(_temp$9=_class$9=function(e){function t(e){var i;return _classCallCheck(this,t),i=r.call(this,e),i.handleOnFocus=i.handleOnFocus.bind(_assertThisInitialized(i)),i.handleOnBlur=i.handleOnBlur.bind(_assertThisInitialized(i)),i.state={focused:!1},i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,[{key:"isVisible",value:function(){var e=this.props,t=e.currentSlide,r=e.index,i=e.visibleSlides;return r>=t&&r<t+i}},{key:"handleOnFocus",value:function(e){var t=this,r=this.props.onFocus;this.setState({focused:!0},function(){null!==r&&r.call(t,e)})}},{key:"handleOnBlur",value:function(e){var t=this,r=this.props.onBlur;this.setState({focused:!1},function(){null!==r&&r.call(t,e)})}},{key:"renderFocusRing",value:function(){return this.state.focused?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:[s$a.focusRing,"carousel__slide-focus-ring"].join(" ")}):null}},{key:"render",value:function(){var e=this,t=this.props,r=(t.carouselStore,t.children,t.className),i=t.classNameHidden,n=t.classNameVisible,s=(t.currentSlide,t.index,t.innerClassName),a=t.innerTag,o=t.naturalSlideHeight,l=t.naturalSlideWidth,c=(t.onBlur,t.onFocus,t.orientation),u=t.slideSize,p=t.style,d=t.tabIndex,h=t.tag,S=t.totalSlides,y=(t.visibleSlides,t.isIntrinsicHeight),m=_objectWithoutProperties(t,["carouselStore","children","className","classNameHidden","classNameVisible","currentSlide","index","innerClassName","innerTag","naturalSlideHeight","naturalSlideWidth","onBlur","onFocus","orientation","slideSize","style","tabIndex","tag","totalSlides","visibleSlides","isIntrinsicHeight"]),b={};"horizontal"===c?(b.width=pct(u),b.paddingBottom=pct(100*o/(l*S))):(b.width=pct(100),b.paddingBottom=pct(100*o/l));var f={};y&&("horizontal"===c?b.height="unset":b.width="unset",b.position="unset",b.paddingBottom="unset",f.position="unset");var g=_extends({},b,p),v=this.isVisible(),_=cn([s$a.slide,"horizontal"===c&&s$a.slideHorizontal,"carousel__slide",this.state.focused&&"carousel__slide--focused",v&&n,v&&"carousel__slide--visible",!v&&i,!v&&"carousel__slide--hidden",r]),T=cn([s$a.slideInner,"carousel__inner-slide",s]),k=this.isVisible()?0:-1,C="number"==typeof d?d:k;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(h,_extends({ref:function(t){e.tagRef=t},tabIndex:C,"aria-selected":this.isVisible(),role:"option",onFocus:this.handleOnFocus,onBlur:this.handleOnBlur,className:_,style:g},m),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,{ref:function(t){e.innerTagRef=t},className:T,style:f},this.props.children,this.renderFocusRing()))}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),_defineProperty(_class$9,"propTypes",{carouselStore:propTypes.object,children:CarouselPropTypes.children,className:propTypes.string,classNameHidden:propTypes.string,classNameVisible:propTypes.string,currentSlide:propTypes.number.isRequired,index:propTypes.number.isRequired,innerClassName:propTypes.string,innerTag:propTypes.string,naturalSlideHeight:propTypes.number.isRequired,naturalSlideWidth:propTypes.number.isRequired,onBlur:propTypes.func,onFocus:propTypes.func,orientation:CarouselPropTypes.orientation.isRequired,slideSize:propTypes.number.isRequired,style:propTypes.object,tabIndex:propTypes.number,tag:propTypes.string,totalSlides:propTypes.number.isRequired,visibleSlides:propTypes.number.isRequired,isIntrinsicHeight:propTypes.bool}),_defineProperty(_class$9,"defaultProps",{carouselStore:null,children:null,className:null,classNameHidden:null,classNameVisible:null,innerClassName:null,innerTag:"div",onBlur:null,onFocus:null,style:{},tabIndex:null,tag:"li",isIntrinsicHeight:!1}),_temp$9),index$7=WithStore(Slide,function(e){return{currentSlide:e.currentSlide,naturalSlideHeight:e.naturalSlideHeight,naturalSlideWidth:e.naturalSlideWidth,orientation:e.orientation,slideSize:e.slideSize,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides,isIntrinsicHeight:e.isIntrinsicHeight}}),GetScrollParent=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"parents",value:function(e,t){return null===e.parentNode?t:this.parents(e.parentNode,t.concat([e]))}},{key:"scrollParent",value:function(t){for(var r=this.parents(t.parentNode,[]),i=0;i<r.length;i+=1)if(e.scroll(r[i]))return r[i];return document.scrollingElement||document.documentElement}},{key:"getScrollParent",value:function(t){return e.isNodeValid(t)?this.scrollParent(t):null}}],[{key:"style",value:function(e,t){return getComputedStyle(e,null).getPropertyValue(t)}},{key:"overflow",value:function(t){return e.style(t,"overflow")+e.style(t,"overflow-y")+e.style(t,"overflow-x")}},{key:"scroll",value:function(t){return/(auto|scroll)/.test(e.overflow(t))}},{key:"isNodeValid",value:function(e){return e instanceof HTMLElement||e instanceof SVGElement}}]),e}(),s$b={horizontalSlider:"horizontalSlider___281Ls",horizontalSliderTray:"horizontalSliderTray___1L-0W",verticalSlider:"verticalSlider___34ZFD",verticalSliderTray:"verticalSliderTray___267D8",verticalTray:"verticalTray___12Key",verticalSlideTrayWrap:"verticalSlideTrayWrap___2nO7o",sliderTray:"sliderTray___-vHFQ",sliderAnimation:"sliderAnimation___300FY",masterSpinnerContainer:"masterSpinnerContainer___1Z6hB"},_class$a,_temp$a,Slider=(_temp$a=_class$a=function(e){function t(e){var i;return _classCallCheck(this,t),i=r.call(this,e),i.getSliderRef=i.getSliderRef.bind(_assertThisInitialized(i)),i.handleDocumentScroll=i.handleDocumentScroll.bind(_assertThisInitialized(i)),i.handleOnClickCapture=i.handleOnClickCapture.bind(_assertThisInitialized(i)),i.handleOnKeyDown=i.handleOnKeyDown.bind(_assertThisInitialized(i)),i.handleOnMouseDown=i.handleOnMouseDown.bind(_assertThisInitialized(i)),i.handleOnMouseMove=i.handleOnMouseMove.bind(_assertThisInitialized(i)),i.handleOnMouseUp=i.handleOnMouseUp.bind(_assertThisInitialized(i)),i.handleOnTouchCancel=i.handleOnTouchCancel.bind(_assertThisInitialized(i)),i.handleOnTouchEnd=i.handleOnTouchEnd.bind(_assertThisInitialized(i)),i.handleOnTouchMove=i.handleOnTouchMove.bind(_assertThisInitialized(i)),i.handleOnTouchStart=i.handleOnTouchStart.bind(_assertThisInitialized(i)),i.playBackward=i.playBackward.bind(_assertThisInitialized(i)),i.playForward=i.playForward.bind(_assertThisInitialized(i)),i.callCallback=i.callCallback.bind(_assertThisInitialized(i)),i.state={cancelNextClick:!1,deltaX:0,deltaY:0,isBeingMouseDragged:!1,isBeingTouchDragged:!1,startX:0,startY:0},i.interval=null,i.isDocumentScrolling=null,i.moveTimer=null,i.originalOverflow=null,i.scrollParent=null,i.scrollStopTimer=null,i}_inherits(t,e);var r=_createSuper(t);return _createClass(t,null,[{key:"slideSizeInPx",value:function(e,t,r,i){return("horizontal"===e?t:r)/i}},{key:"slidesMoved",value:function(e,t,r,i,n,s){var a="horizontal"===t?r:i,o=Math.abs(Math.round(a/n)),l=Math.abs(a)>=n*e?s:0,c=Math.max(l,o);if(a<0)return c;var u=-c;return 0===u?0:u}}]),_createClass(t,[{key:"componentDidMount",value:function(){this.props.lockOnWindowScroll&&window.addEventListener("scroll",this.handleDocumentScroll,!1),document.documentElement.addEventListener("mouseleave",this.handleOnMouseUp,!1),document.documentElement.addEventListener("mousemove",this.handleOnMouseMove,!1),document.documentElement.addEventListener("mouseup",this.handleOnMouseUp,!1),this.props.isPlaying&&this.play()}},{key:"componentDidUpdate",value:function(e){!e.isPlaying&&this.props.isPlaying&&this.play(),e.isPlaying&&!this.props.isPlaying&&this.stop(),!e.isPageScrollLocked&&this.props.isPageScrollLocked&&this.lockScroll(),e.isPageScrollLocked&&!this.props.isPageScrollLocked&&this.unlockScroll(),!1===e.privateUnDisableAnimation&&!0===this.props.privateUnDisableAnimation&&this.props.carouselStore.setStoreState({privateUnDisableAnimation:!1,disableAnimation:!1})}},{key:"componentWillUnmount",value:function(){document.documentElement.removeEventListener("mouseleave",this.handleOnMouseUp,!1),document.documentElement.removeEventListener("mousemove",this.handleOnMouseMove,!1),document.documentElement.removeEventListener("mouseup",this.handleOnMouseUp,!1),window.removeEventListener("scroll",this.handleDocumentScroll,!1),this.stop(),window.cancelAnimationFrame.call(window,this.moveTimer),window.clearTimeout(this.scrollStopTimer),this.isDocumentScrolling=null,this.moveTimer=null,this.scrollStopTimer=null}},{key:"getSliderRef",value:function(e){this.sliderTrayElement=e}},{key:"fakeOnDragStart",value:function(e){var t=e.screenX,r=e.screenY,i=e.touchDrag,n=void 0!==i&&i,s=e.mouseDrag,a=void 0!==s&&s;this.props.carouselStore.setStoreState({isPlaying:!1}),window.cancelAnimationFrame.call(window,this.moveTimer),"vertical"===this.props.orientation&&this.props.carouselStore.setStoreState({isPageScrollLocked:!0}),this.setState({isBeingTouchDragged:n,isBeingMouseDragged:a,startX:t,startY:r})}},{key:"fakeOnDragMove",value:function(e,t){var r=this;this.moveTimer=window.requestAnimationFrame.call(window,function(){r.setState(function(r){return{deltaX:e-r.startX,deltaY:t-r.startY}})})}},{key:"fakeOnDragEnd",value:function(){window.cancelAnimationFrame.call(window,this.moveTimer),this.computeCurrentSlide(),"vertical"===this.props.orientation&&this.props.carouselStore.setStoreState({isPageScrollLocked:!1}),this.setState({deltaX:0,deltaY:0,isBeingTouchDragged:!1,isBeingMouseDragged:!1}),this.isDocumentScrolling=!this.props.lockOnWindowScroll&&null}},{key:"callCallback",value:function(e,t){var r=this.props.trayProps;r&&"function"==typeof r[e]&&(t.persist(),r[e](t))}},{key:"handleOnMouseDown",value:function(e){if(!this.props.dragEnabled)return void this.callCallback("onMouseDown",e);e.preventDefault(),this.fakeOnDragStart({screenX:e.screenX,screenY:e.screenY,mouseDrag:!0}),this.callCallback("onMouseDown",e)}},{key:"handleOnMouseMove",value:function(e){this.state.isBeingMouseDragged&&(this.setState({cancelNextClick:!0}),e.preventDefault(),this.fakeOnDragMove(e.screenX,e.screenY))}},{key:"handleOnMouseUp",value:function(e){this.state.isBeingMouseDragged&&(e.preventDefault(),this.fakeOnDragEnd())}},{key:"handleOnClickCapture",value:function(e){if(!this.state.cancelNextClick)return void this.callCallback("onClickCapture",e);e.preventDefault(),this.setState({cancelNextClick:!1}),this.callCallback("onClickCapture",e)}},{key:"handleOnTouchStart",value:function(e){if(!this.props.touchEnabled)return void this.callCallback("onTouchStart",e);"vertical"===this.props.orientation&&e.preventDefault();var t=e.targetTouches[0];this.fakeOnDragStart({screenX:t.screenX,screenY:t.screenY,touchDrag:!0}),this.callCallback("onTouchStart",e)}},{key:"handleDocumentScroll",value:function(){var e=this;this.props.touchEnabled&&(this.isDocumentScrolling=!0,window.clearTimeout(this.scrollStopTimer),this.scrollStopTimer=window.setTimeout(function(){e.isDocumentScrolling=!1},66))}},{key:"handleOnTouchMove",value:function(e){if(!this.props.touchEnabled||this.props.lockOnWindowScroll&&this.isDocumentScrolling)return void this.callCallback("onTouchMove",e);window.cancelAnimationFrame.call(window,this.moveTimer);var t=e.targetTouches[0];t&&(this.fakeOnDragMove(t.screenX,t.screenY),this.callCallback("onTouchMove",e))}},{key:"forward",value:function(){var e=this.props,t=e.currentSlide,r=e.step,i=e.totalSlides,n=e.visibleSlides;return Math.min(t+r,i-n)}},{key:"backward",value:function(){var e=this.props,t=e.currentSlide,r=e.step;return Math.max(t-r,0)}},{key:"handleOnKeyDown",value:function(e){var t=e.keyCode,r=this.props,i=r.carouselStore,n=r.currentSlide,s=r.disableKeyboard,a=r.totalSlides,o=r.visibleSlides,l={};!0===s||a<=o||(37===t&&(e.preventDefault(),this.focus(),l.currentSlide=Math.max(0,n-1),l.isPlaying=!1),39===t&&(e.preventDefault(),this.focus(),l.currentSlide=Math.min(a-o,n+1),l.isPlaying=!1),i.setStoreState(l))}},{key:"playForward",value:function(){var e=this.props,t=e.carouselStore,r=e.currentSlide;t.setStoreState({currentSlide:this.forward()===r?0:this.forward()})}},{key:"playBackward",value:function(){var e=this.props,t=e.carouselStore,r=e.currentSlide,i=e.totalSlides,n=e.visibleSlides;t.setStoreState({currentSlide:this.backward()===r?i-n:this.backward()})}},{key:"play",value:function(){var e=this.props.playDirection;this.interval=setInterval("forward"===e?this.playForward:this.playBackward,this.props.interval)}},{key:"stop",value:function(){window.clearInterval(this.interval),this.interval=null}},{key:"lockScroll",value:function(){var e=new GetScrollParent;this.scrollParent=e.getScrollParent(this.sliderTrayElement),this.scrollParent&&(this.originalOverflow=this.originalOverflow||this.scrollParent.style.overflow,this.scrollParent.style.overflow="hidden")}},{key:"unlockScroll",value:function(){this.scrollParent&&(this.scrollParent.style.overflow=this.originalOverflow,this.originalOverflow=null,this.scrollParent=null)}},{key:"computeCurrentSlide",value:function(){var e=t.slideSizeInPx(this.props.orientation,this.sliderTrayElement.clientWidth,this.sliderTrayElement.clientHeight,this.props.totalSlides),r=t.slidesMoved(this.props.moveThreshold,this.props.orientation,this.state.deltaX,this.state.deltaY,e,this.props.dragStep),i=this.props.totalSlides-Math.min(this.props.totalSlides,this.props.visibleSlides),n=boundedRange({min:0,max:i,x:this.props.currentSlide+r});this.props.infinite&&(this.props.currentSlide>=i&&r>0&&(n=0),0===this.props.currentSlide&&r<0&&(n=i)),this.props.carouselStore.setStoreState({currentSlide:n})}},{key:"focus",value:function(){this.sliderElement.focus()}},{key:"handleOnTouchEnd",value:function(e){this.endTouchMove(),this.callCallback("onTouchEnd",e)}},{key:"handleOnTouchCancel",value:function(e){this.endTouchMove(),this.callCallback("onTouchCancel",e)}},{key:"endTouchMove",value:function(){this.props.touchEnabled&&this.fakeOnDragEnd()}},{key:"renderMasterSpinner",value:function(){var e=this.props,t=e.hasMasterSpinner,r=e.masterSpinnerFinished,i=e.spinner;return t&&!r?("function"==typeof this.props.onMasterSpinner&&this.props.onMasterSpinner(),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:cn([s$b.masterSpinnerContainer,"carousel__master-spinner-container"])},i&&i(),!i&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner,null))):null}},{key:"render",value:function(){var e=this,t=this.props,r=(t.carouselStore,t.children),i=t.className,n=t.classNameAnimation,s=t.classNameTray,a=t.classNameTrayWrap,o=t.currentSlide,l=t.disableAnimation,c=(t.disableKeyboard,t.dragEnabled,t.hasMasterSpinner,t.interval,t.isPageScrollLocked,t.isPlaying,t.lockOnWindowScroll,t.masterSpinnerFinished,t.moveThreshold,t.naturalSlideHeight),u=t.naturalSlideWidth,p=(t.onMasterSpinner,t.orientation),d=(t.playDirection,t.privateUnDisableAnimation,t.slideSize),h=t.slideTraySize,S=(t.spinner,t.style),y=t.tabIndex,m=(t.totalSlides,t.touchEnabled,t.trayProps),b=t.trayTag,f=t.visibleSlides,g=t.isIntrinsicHeight,v=_objectWithoutProperties(t,["carouselStore","children","className","classNameAnimation","classNameTray","classNameTrayWrap","currentSlide","disableAnimation","disableKeyboard","dragEnabled","hasMasterSpinner","interval","isPageScrollLocked","isPlaying","lockOnWindowScroll","masterSpinnerFinished","moveThreshold","naturalSlideHeight","naturalSlideWidth","onMasterSpinner","orientation","playDirection","privateUnDisableAnimation","slideSize","slideTraySize","spinner","style","tabIndex","totalSlides","touchEnabled","trayProps","trayTag","visibleSlides","isIntrinsicHeight"]),_=_extends({},S),T={};"vertical"===p&&(T.height=0,T.paddingBottom=pct(100*c*f/u),T.width=pct(100));var k={},C=pct(d*o*-1);(this.state.isBeingTouchDragged||this.state.isBeingMouseDragged||l)&&(k.transition="none"),g&&(k.display="flex",k.alignItems="stretch"),"vertical"===p?(k.transform="translateY(".concat(C,") translateY(").concat(this.state.deltaY,"px)"),k.width=pct(100),k.flexDirection="column"):(k.width=pct(h),k.transform="translateX(".concat(C,") translateX(").concat(this.state.deltaX,"px)"),k.flexDirection="row");var O=cn(["vertical"===p?s$b.verticalSlider:s$b.horizontalSlider,"carousel__slider","vertical"===p?"carousel__slider--vertical":"carousel__slider--horizontal",i]),P=cn([s$b.sliderTrayWrap,"carousel__slider-tray-wrapper","vertical"===p?s$b.verticalSlideTrayWrap:s$b.horizontalTrayWrap,"vertical"===p?"carousel__slider-tray-wrap--vertical":"carousel__slider-tray-wrap--horizontal",a]),E=cn([s$b.sliderTray,n||s$b.sliderAnimation,"carousel__slider-tray","vertical"===p?s$b.verticalTray:s$b.horizontalTray,"vertical"===p?"carousel__slider-tray--vertical":"carousel__slider-tray--horizontal",s]),M=null!==y?y:0,w=(v.dragStep,v.step,v.infinite,_objectWithoutProperties(v,["dragStep","step","infinite"])),R=(m.className,m.onClickCapture,m.onMouseDown,m.onTouchCancel,m.onTouchEnd,m.onTouchMove,m.onTouchStart,m.ref,m.style,_objectWithoutProperties(m,["className","onClickCapture","onMouseDown","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","ref","style"]));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",_extends({ref:function(t){e.sliderElement=t},className:O,"aria-live":"polite",style:_,tabIndex:M,onKeyDown:this.handleOnKeyDown,role:"listbox"},w),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:P,style:T},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b,_extends({ref:this.getSliderRef,className:E,style:k,onTouchStart:this.handleOnTouchStart,onTouchMove:this.handleOnTouchMove,onTouchEnd:this.handleOnTouchEnd,onTouchCancel:this.handleOnTouchCancel,onMouseDown:this.handleOnMouseDown,onClickCapture:this.handleOnClickCapture},R),r),this.renderMasterSpinner()))}}]),t}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_defineProperty(_class$a,"propTypes",{carouselStore:propTypes.object.isRequired,children:propTypes.node.isRequired,className:propTypes.string,classNameAnimation:propTypes.string,classNameTray:propTypes.string,classNameTrayWrap:propTypes.string,currentSlide:propTypes.number.isRequired,disableAnimation:propTypes.bool,disableKeyboard:propTypes.bool,dragEnabled:propTypes.bool.isRequired,dragStep:propTypes.number,hasMasterSpinner:propTypes.bool.isRequired,infinite:propTypes.bool,interval:propTypes.number.isRequired,isPageScrollLocked:propTypes.bool.isRequired,isPlaying:propTypes.bool.isRequired,lockOnWindowScroll:propTypes.bool.isRequired,masterSpinnerFinished:propTypes.bool.isRequired,moveThreshold:propTypes.number,naturalSlideHeight:propTypes.number.isRequired,naturalSlideWidth:propTypes.number.isRequired,onMasterSpinner:propTypes.func,orientation:CarouselPropTypes.orientation.isRequired,playDirection:CarouselPropTypes.direction.isRequired,privateUnDisableAnimation:propTypes.bool,slideSize:propTypes.number.isRequired,slideTraySize:propTypes.number.isRequired,spinner:propTypes.func,step:propTypes.number.isRequired,style:propTypes.object,tabIndex:propTypes.number,totalSlides:propTypes.number.isRequired,touchEnabled:propTypes.bool.isRequired,trayProps:propTypes.shape({className:propTypes.string,onClickCapture:propTypes.func,onMouseDown:propTypes.func,onTouchCancel:propTypes.func,onTouchEnd:propTypes.func,onTouchMove:propTypes.func,onTouchStart:propTypes.func,ref:propTypes.shape({}),style:propTypes.string}),trayTag:propTypes.string,visibleSlides:propTypes.number,isIntrinsicHeight:propTypes.bool}),_defineProperty(_class$a,"defaultProps",{className:null,classNameAnimation:null,classNameTray:null,classNameTrayWrap:null,disableAnimation:!1,disableKeyboard:!1,dragStep:1,infinite:!1,moveThreshold:.1,onMasterSpinner:null,privateUnDisableAnimation:!1,spinner:null,style:{},tabIndex:null,trayProps:{},trayTag:"ul",visibleSlides:1,isIntrinsicHeight:!1}),_temp$a),index$8=WithStore(Slider,function(e){return{currentSlide:e.currentSlide,disableAnimation:e.disableAnimation,privateUnDisableAnimation:e.privateUnDisableAnimation,disableKeyboard:e.disableKeyboard,dragEnabled:e.dragEnabled,hasMasterSpinner:e.hasMasterSpinner,infinite:e.infinite,interval:e.interval,isPageScrollLocked:e.isPageScrollLocked,isPlaying:e.isPlaying,lockOnWindowScroll:e.lockOnWindowScroll,masterSpinnerFinished:e.masterSpinnerFinished,naturalSlideHeight:e.naturalSlideHeight,naturalSlideWidth:e.naturalSlideWidth,orientation:e.orientation,playDirection:e.playDirection,slideSize:e.slideSize,slideTraySize:e.slideTraySize,step:e.step,dragStep:e.dragStep,totalSlides:e.totalSlides,touchEnabled:e.touchEnabled,visibleSlides:e.visibleSlides,isIntrinsicHeight:e.isIntrinsicHeight}});
//# sourceMappingURL=index.es.js.map


/***/ })

})
//# sourceMappingURL=index.js.837646ce20f43fed9b33.hot-update.js.map