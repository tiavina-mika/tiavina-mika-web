webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/Projects.tsx":
/*!***********************************************!*\
  !*** ./components/home/projects/Projects.tsx ***!
  \***********************************************/
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
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _animations_cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../animations/cards */ "./animations/cards.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");




var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])(function (theme) {
  var _root;

  return {
    rowCenter: {
      composes: 'flexRow stretchSelf center',
      padding: [0, 10]
    },
    root: (_root = {
      composes: 'flexRow flex1 justifyCenter',
      fontFamily: 'Prequelrough, sans-serif',
      paddingBottom: theme.spacing(30)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_root, _utils_constants__WEBPACK_IMPORTED_MODULE_11__["media"].lgUp, {
      marginTop: theme.spacing(30)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_root, _utils_constants__WEBPACK_IMPORTED_MODULE_11__["media"].lgDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(30)
    }), _root),
    center: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow justifyCenter'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_11__["media"].lgUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_11__["lgScreenWidth"],
      marginTop: theme.spacing(4)
    }),
    items: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow stretchSelf'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_11__["media"].lgUp, {
      marginTop: theme.spacing(12)
    }),
    item: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexColumn alignCenter',
      color: '#fff',
      backgroundColor: '#27292C',
      borderRadius: 10,
      marginBottom: theme.spacing(10),
      boxShadow: '0 2px 5px 0 rgba(102, 102, 102, 0.5), 0 2px 10px 0 rgba(102, 102, 102, 0.12)'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_11__["media"].smUp, {
      margin: theme.spacing(2),
      width: 470,
      height: 400
    }),
    body: {
      composes: 'flexColumn'
    },
    image: {
      padding: 10,
      borderRadius: 10,
      overflow: 'hidden',
      '& > img': {
        width: '100%',
        height: 329,
        borderRadius: 10
      }
    },
    description: {
      composes: 'flexRow center spaceBetween stretchSelf',
      height: 40,
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
    }
  };
});
var data = [{
  image: 'dummy',
  description: 'Some sort description',
  link: 'htttps://www.facebook.com'
}, {
  image: 'dummy',
  description: 'Some sort description',
  link: 'htttps://www.facebook.com'
}, {
  image: 'dummy',
  description: 'Some sort description',
  link: 'htttps://www.facebook.com'
}, {
  image: 'dummy',
  description: 'Some sort description',
  link: 'htttps://www.facebook.com'
}];

var Projects = function Projects() {
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_9__["screenState"]);

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"])({
    threshold: 0.1,
    triggerOnce: false
  }),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1]; // /** Components */


  var Div = isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div;
  var Img = isMobile ? 'img' : framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].img; // /** Animation */

  var itemsAnimation = function itemsAnimation(inView) {
    return isMobile ? {} : Object(_animations_cards__WEBPACK_IMPORTED_MODULE_10__["animate"])(inView);
  };

  var itemAnimation = function itemAnimation() {
    return isMobile ? {} : _animations_cards__WEBPACK_IMPORTED_MODULE_10__["itemVariants"];
  };

  var imageAnimation = isMobile ? {} : {
    whileHover: {
      scale: 1.2
    }
  };
  return __jsx("div", {
    className: classes.root,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Projets",
    subtitle: "Projets sur lesquels j'ai travaille",
    startAnimation: inView,
    icon: "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.items
  }, itemsAnimation(inView), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }), data.map(function (item, index) {
    return __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.item,
      key: index
    }, itemAnimation(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: classes.button,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 29
      }
    }, ['#D82734', '#F3A702', '#20891F'].map(function (color, index) {
      return __jsx("div", {
        style: {
          backgroundColor: color
        },
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 37
        }
      });
    })), __jsx("div", {
      className: classes.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/images/dummy.png",
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: classes.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 33
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 37
      }
    }, item.description), __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 37
      }
    }, __jsx(Img, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      src: "/images/icons/enter.svg",
      alt: ""
    }, imageAnimation, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 41
      }
    }))))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.bd8ca91cb6dc8a960be7.hot-update.js.map