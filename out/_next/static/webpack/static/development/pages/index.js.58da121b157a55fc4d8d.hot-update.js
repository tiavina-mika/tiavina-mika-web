webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/skills/Skills.tsx":
/*!*******************************************!*\
  !*** ./components/home/skills/Skills.tsx ***!
  \*******************************************/
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
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _animations_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../animations/cards */ "./animations/cards.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");




var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\skills\\Skills.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])(function (theme) {
  var _item;

  return {
    fullColumn: {
      composes: 'flexColumn stretchSelf'
    },
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: '$fullColumn justifyCenter'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginTop: theme.spacing(8)
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
      marginBottom: theme.spacing(1)
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
      marginBottom: 0
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Connaissance",
    subtitle: "Ce que je ma\xEEtrise",
    right: true,
    startAnimation: inView,
    icon: "skills",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }, __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.center
  }, itemsAnimation(inView), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
        lineNumber: 312,
        columnNumber: 25
      }
    }), __jsx("h6", {
      className: classes.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/images/icons/".concat(item.icon, ".svg"),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 33
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 33
      }
    }, item.type)), __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.items
    }, itemsAnimation(inView), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
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
          lineNumber: 319,
          columnNumber: 37
        }
      }), __jsx("img", {
        src: "/images/icons/".concat(experience.level, ".svg"),
        alt: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 41
        }
      }), __jsx("h6", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 41
        }
      }, experience.name));
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=index.js.58da121b157a55fc4d8d.hot-update.js.map