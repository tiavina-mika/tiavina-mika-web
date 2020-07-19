webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Competences.tsx":
/*!*****************************************!*\
  !*** ./components/home/Competences.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _animations_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../animations/cards */ "./animations/cards.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");




var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\Competences.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var data = [{
  title: 'Performance',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
}, {
  title: 'Performance',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
}, {
  title: 'Performance',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
}, {
  title: 'Performance',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
}, {
  title: 'Performance',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
}, {
  title: 'Performance',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
}, {
  title: 'Performance',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
}];
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])(function (theme) {
  var _center, _item;

  return {
    fullColumn: {
      composes: 'flexColumn stretchSelf'
    },
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: '$fullColumn alignCenter',
      paddingBottom: theme.spacing(30)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(0)
    }),
    content: {
      composes: '$fullColumn center'
    },
    center: (_center = {
      composes: 'flexRow justifyCenter'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_center, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_10__["lgScreenWidth"],
      marginTop: theme.spacing(4),
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_center, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].smLg, {
      width: '60%',
      backgroundColor: 'red'
    }), _center),
    items: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      marginTop: theme.spacing(12)
    }),
    item: (_item = {
      color: '#fff',
      marginBottom: theme.spacing(8)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_item, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      width: 300,
      margin: theme.spacing(4)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_item, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdDown, {
      marginBottom: theme.spacing(5)
    }), _item),
    title: {
      composes: 'flexRow center',
      fontFamily: 'Tungsten-Medium',
      color: '#52575f',
      fontSize: 22,
      textTransform: 'uppercase',
      marginBottom: theme.spacing(3),
      '& span': {
        marginLeft: -15
      }
    },
    description: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      lineHeight: 1.6,
      letterSpacing: '0.68px',
      color: '#fff'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].smDown, {
      fontSize: 16
    })
  };
});

var Competences = function Competences() {
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_11__["screenState"]);

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"])({
    threshold: 0.3,
    triggerOnce: false
  }),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];
  /** Components */


  var Div = isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div;
  /** Animation */

  var itemsAnimation = function itemsAnimation(inView) {
    return isMobile ? {} : Object(_animations_cards__WEBPACK_IMPORTED_MODULE_9__["animate"])(inView);
  };

  var itemAnimation = isMobile ? {} : _animations_cards__WEBPACK_IMPORTED_MODULE_9__["itemVariants"];
  return __jsx("div", {
    className: classes.root,
    id: "competences",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Comp\xE9tences cl\xE9es",
    subtitle: "Ce que je ma\xEEtrise",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.items
  }, itemsAnimation(inView), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }), data.map(function (item, index) {
    return __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.item,
      key: index
    }, itemAnimation, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 29
      }
    }), __jsx("h6", {
      className: classes.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/images/icons/left-circle-active.svg",
      alt: "circle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 37
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 37
      }
    }, item.title)), __jsx("span", {
      className: classes.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 33
      }
    }, item.description));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Competences);

/***/ }),

/***/ "./components/home/Skills.tsx":
/*!************************************!*\
  !*** ./components/home/Skills.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _animations_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../animations/cards */ "./animations/cards.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");




var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\Skills.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])(function (theme) {
  var _item;

  return {
    fullColumn: {
      composes: 'flexColumn stretchSelf'
    },
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: '$fullColumn justifyCenter',
      paddingBottom: theme.spacing(30)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginTop: theme.spacing(8),
      paddingBottom: theme.spacing(0)
    }),
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: '$fullColumn center'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      marginTop: theme.spacing(6)
    }),
    center: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow justifyCenter'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_10__["lgScreenWidth"] - 300,
      marginTop: theme.spacing(4)
    }),
    type: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: '$fullColumn flex1'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdDown, {
      marginBottom: theme.spacing(4)
    }),
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow center stretchSelf',
      fontFamily: 'Tungsten-Medium',
      color: '#52575f',
      fontSize: 24,
      textTransform: 'uppercase',
      marginBottom: theme.spacing(3),
      '& span': {
        marginLeft: 10
      }
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdDown, {
      marginBottom: theme.spacing(1.3)
    }),
    items: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexColumn flexStart',
      '& span': {
        marginLeft: 10
      }
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdUp, {
      marginBottom: theme.spacing(8)
    }),
    item: (_item = {
      composes: 'flexRow center',
      marginBottom: theme.spacing(2)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_item, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].smDown, {
      marginBottom: 3
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_item, "width", 300), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_item, '& h6', Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      marginLeft: 10,
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      lineHeight: 1.6,
      letterSpacing: '0.85px',
      color: '#fff'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].smDown, {
      fontSize: 16
    })), _item)
  };
});
var items = [{
  type: 'Language de Programmation',
  icon: 'programing-language',
  experiences: [{
    name: 'Javascript',
    level: 'expert'
  }, {
    name: 'TypeScript',
    level: 'expert'
  }, {
    name: 'PHP',
    level: 'expert'
  }, {
    name: 'Python',
    level: 'medium'
  }, {
    name: 'Ruby',
    level: 'beginner'
  }]
}, {
  type: 'Backend',
  icon: 'backend',
  experiences: [{
    name: 'NodeJs',
    level: 'expert'
  }, {
    name: 'Symfony',
    level: 'expert'
  }, {
    name: 'Flask',
    level: 'expert'
  }, {
    name: 'Ruby on Rails',
    level: 'beginner'
  }]
}, {
  type: 'Frontend',
  icon: 'frontend',
  experiences: [{
    name: 'ReactJs',
    level: 'expert'
  }, {
    name: 'HTML',
    level: 'expert'
  }, {
    name: 'CSS',
    level: 'expert'
  }, {
    name: 'JQuery',
    level: 'expert'
  }, {
    name: 'Angular',
    level: 'medium'
  }]
}, {
  type: 'Base de données',
  icon: 'database',
  experiences: [{
    name: 'MongoDB',
    level: 'expert'
  }, {
    name: 'MySQL',
    level: 'expert'
  }, {
    name: 'PostgreSQL',
    level: 'expert'
  }, {
    name: 'Elastic Search',
    level: 'expert'
  }]
}, {
  type: 'Versioning',
  icon: 'versioning',
  experiences: [{
    name: 'GitHub',
    level: 'expert'
  }, {
    name: 'GitLab',
    level: 'expert'
  }, {
    name: 'BitBucket',
    level: 'expert'
  }]
}, {
  type: 'Webservice',
  icon: 'frontend',
  experiences: [{
    name: 'REST API',
    level: 'expert'
  }, {
    name: 'GraphQL',
    level: 'expert'
  }, {
    name: 'Parse Server',
    level: 'expert'
  }]
}, {
  type: 'Design',
  icon: 'Design',
  experiences: [{
    name: 'Adobe Photoshop',
    level: 'expert'
  }, {
    name: 'Adobe Illustrator',
    level: 'expert'
  }, {
    name: 'InVision',
    level: 'expert'
  }, {
    name: 'Zepplin',
    level: 'expert'
  }]
}, {
  type: 'Gestion Projet',
  icon: 'project-gestion',
  experiences: [{
    name: 'Jira',
    level: 'expert'
  }, {
    name: 'Trello',
    level: 'expert'
  }, {
    name: 'Asana',
    level: 'expert'
  }]
}, {
  type: 'Outils communication',
  icon: 'communication',
  experiences: [{
    name: 'Skype',
    level: 'expert'
  }, {
    name: 'Microsoft Teams',
    level: 'expert'
  }, {
    name: 'Slack',
    level: 'expert'
  }, {
    name: 'Google Sheet',
    level: 'expert'
  }]
}];

var Skills = function Skills() {
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_11__["screenState"]);

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"])({
    threshold: 0.1,
    triggerOnce: false
  }),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];
  /** Components */


  var Div = isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div;
  /** Animation */

  var itemsAnimation = function itemsAnimation(inView) {
    return isMobile ? {} : Object(_animations_cards__WEBPACK_IMPORTED_MODULE_9__["animate"])(inView);
  };

  var itemAnimation = isMobile ? {} : _animations_cards__WEBPACK_IMPORTED_MODULE_9__["itemVariants"];
  return __jsx("div", {
    className: classes.root,
    id: "skills",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Connaissance",
    subtitle: "Ce que je ma\xEEtrise",
    right: true,
    icon: "skills",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  }, __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.center
  }, itemsAnimation(inView), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }), items.map(function (item, index) {
    return __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.type,
      key: index
    }, itemAnimation, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 25
      }
    }), __jsx("h6", {
      className: classes.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/images/icons/".concat(item.icon, ".svg"),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 33
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 33
      }
    }, item.type)), __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.items
    }, itemsAnimation(inView), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 29
      }
    }), item.experiences.map(function (experience, index) {
      return __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: classes.item,
        key: index
      }, itemAnimation, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 37
        }
      }), __jsx("img", {
        src: "/images/icons/".concat(experience.level, ".svg"),
        alt: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 41
        }
      }), __jsx("h6", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 41
        }
      }, experience.name));
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./components/home/about/About.tsx":
/*!*****************************************!*\
  !*** ./components/home/about/About.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _Common_PlxComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/PlxComponent */ "./components/Common/PlxComponent.tsx");
/* harmony import */ var _DownloadButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DownloadButton */ "./components/home/about/DownloadButton.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\about\\About.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _content, _left, _right;

  return {
    rowStretch: {
      composes: 'flexRow justifyCenter stretchSelf'
    },
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexRow flex1 justifyCenter',
      fontFamily: 'Prequelrough, sans-serif',
      paddingBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginTop: theme.spacing(8),
      paddingBottom: theme.spacing(10)
    }),
    content: (_content = {
      composes: '$rowStretch'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(5)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_5__["lgScreenWidth"] - 400,
      marginTop: theme.spacing(20)
    }), _content),
    center: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: '$rowStretch'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].smLg, {
      width: '60%'
    }),
    left: (_left = {
      composes: 'flexColumn center flex1'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].smUp, {
      '& > img': {
        width: 300
      },
      flex: 1
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].xsSm, {
      '& > img': {
        width: '60%'
      }
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].xsDown, {
      '& > img': {
        width: '100%'
      }
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      width: 350,
      opacity: 0
    }), _left),
    right: (_right = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      width: 500,
      opacity: 0
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      marginTop: theme.spacing(8)
    }), _right),
    name: {
      color: theme.color.grey,
      fontWeight: '400',
      lineHeight: 1.4,
      textTransform: 'uppercase',
      letterSpacing: 3.5
    },
    post: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: '#fff',
      fontWeight: '400',
      lineHeight: 1.4,
      textTransform: 'uppercase',
      letterSpacing: 3.5,
      marginTop: 10
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      width: 650
    }),
    descriptionText: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      lineHeight: 1.8,
      marginTop: theme.spacing(3),
      fontSize: 20
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdDown, {
      fontSize: 16
    }),
    shortDescription: {
      color: theme.color.subtitle,
      fontFamily: 'Montserrat, sans-serif'
    },
    description: {
      fontFamily: 'Montserrat-Regular, sans-serif',
      color: '#fff'
    },
    buttonContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexRow justifyCenter stretchSelf',
      marginTop: theme.spacing(20)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].mdDown, {
      marginTop: theme.spacing(1.2)
    }),
    button: {
      flex: 1
    }
  };
});
var textTriggerClass = 'about-text-trigger';

var About = function About() {
  var classes = useStyles();
  var textParallaxData = [{
    start: ".".concat(textTriggerClass),
    duration: '50vh',
    properties: [{
      startValue: 10,
      endValue: 0,
      unit: 'vw',
      property: 'translateX'
    }, {
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }];
  var imageParallaxData = [{
    start: ".".concat(textTriggerClass),
    duration: '50vh',
    properties: [{
      startValue: -22,
      endValue: -5,
      unit: 'vw',
      property: 'translateX'
    }, {
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }];
  return __jsx("div", {
    className: classes.root,
    id: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "A propos de moi",
    subtitle: "Qui suis-je",
    right: true,
    icon: "setting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx(_Common_PlxComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.left,
    parallaxData: imageParallaxData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: "",
    src: "/images/profile2.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: classes.buttonContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }, __jsx(_DownloadButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: "T\xE9l\xE9charger mon CV",
    icon: "download",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 29
    }
  }))), __jsx(_Common_PlxComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.right,
    parallaxData: textParallaxData,
    triggerClass: textTriggerClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: classes.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, "Tiavina Michael Ralainirina"), __jsx("h3", {
    className: classes.post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, "D\xE9veloppeur FullStack / Web Designer / Lead Developpeur"), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.shortDescription, classes.descriptionText),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam")), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.description, classes.descriptionText),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 29
    }
  }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/home/about/DownloadButton.tsx":
/*!**************************************************!*\
  !*** ./components/home/about/DownloadButton.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\about\\DownloadButton.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    link: {
      composes: 'flexRow spaceBetween flex1',
      backgroundColor: theme.color.primary,
      color: '#fff',
      textDecoration: 'none',
      padding: [20, 30],
      letterSpacing: 1,
      '& img': {
        marginLeft: theme.spacing(3)
      }
    }
  };
});

var DownloadButton = function DownloadButton(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      url = _ref.url,
      className = _ref.className;
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__["screenState"]);
  var parallaxData = [{
    start: "self",
    duration: '40vh',
    properties: [{
      startValue: 0,
      endValue: -10,
      unit: 'vh',
      property: 'translateY'
    }, {
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }];
  var Component = isMobile ? 'a' : react_plx__WEBPACK_IMPORTED_MODULE_4___default.a;
  var otherProps = isMobile ? {} : {
    parallaxData: parallaxData,
    tagName: 'a'
  };
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.link, className),
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, text), icon && __jsx("img", {
    alt: "",
    src: "/images/icons/".concat(icon, ".svg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 22
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadButton);

/***/ }),

/***/ "./components/home/projects/DesktopProjects.tsx":
/*!******************************************************!*\
  !*** ./components/home/projects/DesktopProjects.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _PlxLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlxLayout */ "./components/home/projects/PlxLayout.tsx");
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\DesktopProjects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  return {
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow stretchSelf justifyCenter',
      fontFamily: 'Prequelrough, sans-serif',
      paddingBottom: theme.spacing(30)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(0)
    })
  };
});

var DesktopProjects = function DesktopProjects(_ref) {
  var data = _ref.data,
      pageInfo = _ref.pageInfo;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    id: "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), data.map(function (item, index) {
    return __jsx(_PlxLayout__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      key: index,
      reverse: index % 2 !== 0,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopProjects);

/***/ }),

/***/ "./components/home/projects/MobileProjects.tsx":
/*!*****************************************************!*\
  !*** ./components/home/projects/MobileProjects.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\MobileProjects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  return {
    rowCenter: {
      composes: 'flexRow stretchSelf center',
      padding: [0, 10]
    },
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow flex1 justifyCenter',
      fontFamily: 'Prequelrough, sans-serif',
      paddingBottom: theme.spacing(30)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(0)
    }),
    center: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow justifyCenter'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_5__["lgScreenWidth"],
      marginTop: theme.spacing(4)
    }),
    items: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexRow stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].lgUp, {
      marginTop: theme.spacing(12)
    }),
    item: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      composes: 'flexColumn alignCenter',
      marginBottom: theme.spacing(10)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["media"].smUp, {
      margin: theme.spacing(2)
    }),
    body: {
      composes: 'flexColumn'
    },
    image: {
      padding: 10,
      '& > img': {
        width: '100%'
      }
    },
    title: {
      composes: 'flexRow center spaceBetween stretchSelf',
      marginBottom: 20,
      '& span': {
        color: '#fff'
      }
    },
    action: {
      composes: '$rowCenter flex1',
      borderTop: "1px solid ".concat(theme.color.subtitle),
      '& a': {
        '&:hover': {
          color: theme.color.primary
        }
      }
    },
    button: {
      composes: 'flexRow stretchSelf',
      marginTop: 5,
      marginBottom: -5,
      height: 8,
      paddingLeft: 12,
      '& div': {
        height: 8,
        width: 8,
        borderRadius: '50%',
        marginRight: 8
      }
    },
    linkContainer: {
      composes: 'flexRow justifyCenter'
    },
    link: {
      composes: 'flexRow alignCenter justifyCenter',
      color: '#fff',
      textDecoration: 'none',
      width: 250
    },
    rightArrowIcon: {
      marginLeft: 10
    }
  };
});

var MobileProjects = function MobileProjects(_ref) {
  var data = _ref.data,
      pageInfo = _ref.pageInfo;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    id: "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, data.map(function (item, index) {
    return __jsx("div", {
      className: classes.item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: classes.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: classes.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 41
      }
    }, item.title)), __jsx("img", {
      src: "/images/".concat(item.image),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: classes.linkContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 37
      }
    }, __jsx("a", {
      href: "#",
      className: classes.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 45
      }
    }, "Voir le projet"), __jsx("img", {
      src: "/images/icons/enter.svg",
      alt: "",
      className: classes.rightArrowIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 45
      }
    })))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileProjects);

/***/ }),

/***/ "./components/home/projects/PlxLayout.tsx":
/*!************************************************!*\
  !*** ./components/home/projects/PlxLayout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\PlxLayout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SYSTEM_CONTENT_BLOCK_WIDTH = 380;
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  root: {
    composes: 'flexRow justifyCenter',
    height: '280vh',
    width: '100%'
  },
  textBlockRoot: {
    composes: 'textBlock',
    maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH
  },
  textPlx: {
    maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
    top: '20%',
    opacity: 0,
    position: 'fixed',
    transform: 'translateX(-20vw)'
  },
  reverseTextPlx: {
    transform: 'translateX(0vw)'
  },
  imageBlockRoot: {
    composes: 'flexColumn alignCenter justifyCenter'
  },
  imageBlockReverse: {
    order: -1
  },
  img: {
    width: '100%',
    margin: 0,
    transform: 'translateY(50%)'
  },
  imagePlx: {
    pointerEvents: 'none',
    bottom: 0,
    opacity: 0,
    position: 'fixed',
    left: '13vw'
  },
  textTrigger: {
    marginTop: '120vh'
  },
  imageTrigger: {
    marginTop: '50vh'
  },
  scrollY: {
    height: '200vh'
  }
});

var PlxLayout = function PlxLayout(_ref) {
  var image = _ref.image,
      reverse = _ref.reverse,
      title = _ref.title,
      description = _ref.description;
  var classes = useStyles();
  var triggerClass = title.split(' ').join('-') + '-trigger';
  var textTriggerClass = 'text' + triggerClass;
  var imageTriggerClass = 'image' + triggerClass;
  var textParallaxData = [{
    start: ".".concat(textTriggerClass),
    duration: '30vh',
    properties: [{
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }, {
    start: ".".concat(textTriggerClass),
    startOffset: '10vh',
    duration: '30vh',
    properties: [{
      startValue: reverse ? 0 : -20,
      endValue: reverse ? 16 : -38,
      unit: 'vw',
      property: 'translateX'
    }]
  }, {
    start: ".".concat(textTriggerClass),
    startOffset: '90vh',
    duration: '50vh',
    properties: [{
      startValue: 1,
      endValue: 0,
      property: 'opacity'
    }]
  }];
  var imageParallaxData = [{
    start: ".".concat(imageTriggerClass),
    duration: '50vh',
    properties: [{
      startValue: 0,
      endValue: -40,
      unit: 'vh',
      property: 'translateY'
    }, {
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }]
  }, {
    start: ".".concat(imageTriggerClass),
    startOffset: '60vh',
    duration: '30vh',
    properties: [{
      startValue: 0,
      endValue: reverse ? -13 : 15,
      unit: 'vw',
      property: 'translateX'
    }]
  }, {
    start: ".".concat(imageTriggerClass),
    startOffset: '190vh',
    duration: '20vh',
    properties: [{
      startValue: 1,
      endValue: 0,
      property: 'opacity'
    }]
  }];
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.textBlockRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(textTriggerClass, classes.textTrigger),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), __jsx(react_plx__WEBPACK_IMPORTED_MODULE_2___default.a, {
    parallaxData: textParallaxData,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.textPlx, reverse ? classes.reverseTextPlx : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, title), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, description))), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.imageBlockRoot, reverse ? classes.imageBlockReverse : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(imageTriggerClass, classes.imageTrigger),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }), __jsx(react_plx__WEBPACK_IMPORTED_MODULE_2___default.a, {
    parallaxData: imageParallaxData,
    className: classes.imagePlx,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/".concat(image),
    alt: image,
    className: classes.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: classes.scrollY,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PlxLayout);

/***/ }),

/***/ "./components/home/projects/Projects.tsx":
/*!***********************************************!*\
  !*** ./components/home/projects/Projects.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _MobileProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileProjects */ "./components/home/projects/MobileProjects.tsx");
/* harmony import */ var _DesktopProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesktopProjects */ "./components/home/projects/DesktopProjects.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var pageInfo = {
  title: 'Projets',
  subtitle: "Projets sur lesquels j'ai travaille",
  icon: 'projects'
};
var data = [{
  image: 'mac.png',
  title: 'Some Project Title here',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  link: 'htttps://www.facebook.com'
}, {
  image: 'mac.png',
  title: 'Some Project Title here 2',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  link: 'htttps://www.facebook.com'
}];

var Projects = function Projects() {
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_2__["screenState"]);
  return isMobile ? __jsx(_MobileProjects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    pageInfo: pageInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }) : __jsx(_DesktopProjects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data,
    pageInfo: pageInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowSize */ "./hooks/useWindowSize.tsx");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _components_home_Competences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/Competences */ "./components/home/Competences.tsx");
/* harmony import */ var _components_home_about_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/about/About */ "./components/home/about/About.tsx");
/* harmony import */ var _components_home_presentation_Presentation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/presentation/Presentation */ "./components/home/presentation/Presentation.tsx");
/* harmony import */ var _components_home_projects_Projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/projects/Projects */ "./components/home/projects/Projects.tsx");
/* harmony import */ var _components_home_Skills__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/Skills */ "./components/home/Skills.tsx");
/* harmony import */ var _components_home_Interests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home/Interests */ "./components/home/Interests.tsx");
/* harmony import */ var _components_home_Contact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/home/Contact */ "./components/home/Contact.tsx");
/* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/menu/Menu */ "./components/menu/Menu.tsx");


var _right,
    _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  window: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].mdDown, {
    paddingLeft: 15,
    paddingRight: 15
  }),
  root: {
    composes: 'flexColumn flexCenter alignCenter stretchSelf flex1'
  },
  main: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    composes: 'flexColumn stretchSelf flex1',
    backgroundColor: '#000',
    color: '#fff'
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgDown, {
    flexDirection: 'column'
  }),
  left: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    composes: 'flexColumn'
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgUp, {
    width: '80%'
  }),
  right: (_right = {
    composes: 'flexColumn'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgUp, {
    width: '20%'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["media"].lgDown, {
    order: -1,
    alignSelf: 'stretch'
  }), _right)
});

var Home = function Home() {
  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__["useWindowSize"])();
  var classes = useStyles({
    size: size
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_5__["getScreen"])(size.width));
  }, []);
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_components_menu_Menu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(_components_home_presentation_Presentation__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_components_home_Competences__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx(_components_home_about_About__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx(_components_home_projects_Projects__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx(_components_home_Skills__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx(_components_home_Interests__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx(_components_home_Contact__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.71d0417f91e696553475.hot-update.js.map