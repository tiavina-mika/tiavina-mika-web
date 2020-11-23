webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects-grid/ProjectGrid.tsx":
false,

/***/ "./components/home/projects-grid/ProjectsGrid.tsx":
false,

/***/ "./components/home/projects-grid/index.tsx":
false,

/***/ "./components/home/projects/Project.tsx":
/*!**********************************************!*\
  !*** ./components/home/projects/Project.tsx ***!
  \**********************************************/
/*! exports provided: RESPONSIVE_CARD_WIDTH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_CARD_WIDTH", function() { return RESPONSIVE_CARD_WIDTH; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _shared_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Text */ "./components/shared/Text.tsx");
/* harmony import */ var _shared_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Title */ "./components/shared/Title.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Project.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var RESPONSIVE_CARD_WIDTH = {
  lgXl: '42vw',
  mdLg: '45vw'
};
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  var _block, _content, _subtitle, _title, _descriptionContainer;

  return {
    block: (_block = {
      composes: 'flexRow',
      position: 'relative',
      borderRadius: 10,
      transition: 'all .5s cubic-bezier(.19,1,.4,1)',
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["projectCardWidth"],
      height: 590,
      backgroundColor: function backgroundColor(_ref) {
        var color = _ref.color;
        return '#' + color;
      },
      marginBottom: theme.spacing(6),
      color: function color(_ref2) {
        var isDark = _ref2.isDark;
        return isDark ? '##54575a' : '#fff';
      }
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_block, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgXl, {
      width: RESPONSIVE_CARD_WIDTH.lgXl,
      height: '43vw'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_block, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdLg, {
      width: RESPONSIVE_CARD_WIDTH.mdLg,
      height: '47vw'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_block, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smMd, {
      width: '46vw',
      height: '48vw'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_block, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      width: '100%',
      height: 366
    }), _block),
    center: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'stretchSelf flex1',
      padding: '10% 12%'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdLg, {
      padding: '6% 8%'
    }),
    cardLink: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      width: '100%',
      height: '100%'
    },
    content: (_content = {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '100%',
      gridTemplateRows: 'repeat(3, auto) 1fr',
      gridGap: theme.spacing(3)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smUp, {
      '&:hover': {
        // the see more button
        '& div:last-child div': {
          backgroundColor: '#fff',
          transform: "translate(".concat(theme.spacing(0), "px,-").concat(theme.spacing(2), "px)"),
          color: theme.colors.secondary
        },
        // grey right arrow
        '& img:last-child': {
          visibility: 'visible'
        },
        // white right arrow
        '& img:first-child': {
          visibility: 'hidden'
        },
        // description block animation
        '& div:nth-child(3)': {
          opacity: 1
        }
      }
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdDown, {
      gridGap: theme.spacing(1)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      gridTemplateRows: 'repeat(2, auto) 1fr'
    }), _content),
    subtitle: (_subtitle = {
      fontSize: 18
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smMd, {
      fontSize: 16,
      fontWeight: 300
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].xsMd, {
      fontSize: 16
    }), _subtitle),
    title: (_title = {
      fontSize: 26,
      width: '60%'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smMd, {
      fontSize: 20,
      width: '80%'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].xsMd, {
      width: '40%'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].mdDown, {
      fontSize: 18
    }), _title),
    descriptionContainer: (_descriptionContainer = {
      width: '40%',
      lineHeight: 1.43,
      opacity: 0,
      transition: 'opacity .5s cubic-bezier(.19,1,.4,1)'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smMd, {
      width: '60%'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_descriptionContainer, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].smDown, {
      // visibility: 'hidden',
      display: 'none'
    }), _descriptionContainer),
    description: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].xsMd, {
      fontSize: 14
    }),
    seeMore: {
      composes: 'flexRow flexEnd'
    },
    seeMoreButton: {
      transition: 'all .5s cubic-bezier(.19,1,.4,1)',
      padding: [theme.spacing(2), theme.spacing(4)],
      transform: "translate(-".concat(theme.spacing(4), "px,-").concat(theme.spacing(2), "px)"),
      borderRadius: 999,
      '& img:last-child': {
        visibility: 'hidden'
      }
    },
    seeMoreText: {
      fontSize: 14,
      marginRight: theme.spacing(2)
    }
  };
});

var Project = function Project(_ref3) {
  var title = _ref3.title,
      subtitle = _ref3.subtitle,
      url = _ref3.url,
      color = _ref3.color,
      description = _ref3.description;
  var classes = useStyles({
    color: color.color,
    isDark: color.dark
  });
  return __jsx("div", {
    className: classes.block,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: url,
    className: classes.cardLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: subtitle,
    level: 4,
    className: classes.subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: title,
    level: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: classes.descriptionContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }, __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: description,
    tagName: "p",
    className: classes.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: classes.seeMore,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: classes.seeMoreButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }, __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Learn more",
    className: classes.seeMoreText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 29
    }
  }), __jsx("img", {
    src: "/images/icons/right-arrow".concat(color.dark ? '' : '-light', ".svg"),
    alt: "arrow right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }), __jsx("img", {
    src: "/images/icons/right-arrow".concat(color.dark ? '-light' : '', ".svg"),
    alt: "arrow right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./components/home/projects/Projects.tsx":
/*!***********************************************!*\
  !*** ./components/home/projects/Projects.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/Layout */ "./components/shared/Layout.tsx");
/* harmony import */ var _shared_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/Text */ "./components/shared/Text.tsx");
/* harmony import */ var _shared_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/Title */ "./components/shared/Title.tsx");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Project */ "./components/home/projects/Project.tsx");




var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])(function (theme) {
  var _left, _right, _blockTitle, _blockTitleContent, _blockDescription;

  return {
    projectsRoot: {
      composes: 'flexRow'
    },
    projectsContent: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow flex1'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smDown, {
      flexDirection: 'column'
    }),
    left: (_left = {
      composes: 'flexColumn flex1 justifyCenter flexEnd'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smMd, {
      marginRight: theme.spacing(1.5)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdUp, {
      marginRight: theme.spacing(3)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_left, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smDown, {
      alignSelf: 'stretch'
    }), _left),
    right: (_right = {
      composes: 'flexColumn flex1 justifyCenter flexStart'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smMd, {
      marginLeft: theme.spacing(1.5)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdUp, {
      marginLeft: theme.spacing(3)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smDown, {
      alignSelf: 'stretch'
    }), _right),
    blockTitle: (_blockTitle = {
      position: 'relative',
      composes: 'flexColumn',
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(16)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockTitle, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgXl, {
      width: _Project__WEBPACK_IMPORTED_MODULE_11__["RESPONSIVE_CARD_WIDTH"].lgXl
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockTitle, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdLg, {
      width: _Project__WEBPACK_IMPORTED_MODULE_11__["RESPONSIVE_CARD_WIDTH"].mdLg
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockTitle, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].xlUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_7__["projectCardWidth"]
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockTitle, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smMd, {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(9)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockTitle, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smDown, {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(5)
    }), _blockTitle),
    blockTitleContent: (_blockTitleContent = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockTitleContent, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smMd, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockTitleContent, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdUp, {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    }), _blockTitleContent),
    blockDescription: (_blockDescription = {
      marginTop: theme.spacing(2),
      width: '80%'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockDescription, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smMd, {
      width: '60%',
      lineHeight: 1.4,
      textAlign: 'center',
      fontSize: 16
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockDescription, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].smDown, {
      fontSize: 14,
      width: '100%',
      lineHeight: 1.6
    }), _blockDescription),
    block: {
      borderRadius: 10,
      transition: 'all .5s cubic-bezier(.19,1,.4,1)',
      width: 580,
      height: 590,
      backgroundColor: '#d3b589',
      marginBottom: theme.spacing(6)
    }
  };
});
var colors = [{
  color: 'd3b589'
}, {
  color: '825c79'
}, {
  color: 'eeedea',
  dark: true
}, {
  color: 'b5d4cc'
}, {
  color: '7ca5cf'
}];
var projects = [{
  id: '1',
  subtitle: 'Some card subtitle',
  title: 'Some card title, two line card title',
  description: 'Some long, very very long card description, and very very long card description',
  url: '/'
}, {
  id: '2',
  subtitle: 'Some card subtitle 2',
  title: 'Some card title 2',
  description: 'Some long, very very long card description, and very very long card description 2',
  url: '/'
}, {
  id: '3',
  subtitle: 'Some card subtitle 3',
  title: 'Some card title, two line card title 3',
  description: 'Some long, very very long card description, and very very long card description 3',
  url: '/'
}, {
  id: '4',
  subtitle: 'Some card subtitle 4',
  title: 'Some card title, two line card title 4',
  description: 'Some long, very very long card description, and very very long card description 4',
  url: '/'
}, {
  id: '5',
  subtitle: 'Some card subtitle 5',
  title: 'Some card title, two line card title 5',
  description: 'Some long, very very long card description, and very very long card description 5',
  url: '/'
}];

var Projects = function Projects() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      leftCardsData = _useState[0],
      setLeftCardData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      rightCardsData = _useState2[0],
      setRightCardData = _useState2[1];

  var _useWindowSize = Object(react_use__WEBPACK_IMPORTED_MODULE_5__["useWindowSize"])(),
      width = _useWindowSize.width;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isTablet = _useState3[0],
      setIsTablet = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setIsTablet(width <= _utils_constants__WEBPACK_IMPORTED_MODULE_7__["md"]);
  }, [width]);
  var parallaxData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return [{
      start: 'self',
      duration: '160vh',
      properties: [{
        startValue: 0,
        endValue: -240,
        unit: 'px',
        property: 'translateY'
      }]
    }, {
      start: 'self',
      duration: '20vh',
      properties: [{
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      }]
    }];
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var split = projects.length <= 5 ? 2 : 3;
    var newProjects = projects.map(function (project, index) {
      return _objectSpread({}, project, {
        color: colors[index]
      });
    });

    var leftCards = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(newProjects).splice(0, split);

    var rightCards = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(newProjects).splice(split, projects.length);

    setLeftCardData(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(leftCards));
    setRightCardData(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rightCards));
  }, []);

  var splicedPorject = function splicedPorject(project) {
    return __jsx(_Project__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: project.id
    }, project, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 62
      }
    }));
  };

  var blockTitle = __jsx("div", {
    className: classes.blockTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.blockTitleContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {
    text: "Some Title",
    level: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }), __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.blockDescription,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus metus non nunc tempor, eu ultricies mi euismod.",
    tagName: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  })));

  var Component = isTablet ? react__WEBPACK_IMPORTED_MODULE_3__["Fragment"] : react_plx__WEBPACK_IMPORTED_MODULE_6___default.a;
  var otherProps = isTablet ? {} : {
    parallaxData: parallaxData
  };
  return __jsx(_shared_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.projectsRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, isTablet && blockTitle, __jsx("div", {
    className: classes.projectsContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.left,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, !isTablet && blockTitle, leftCardsData.map(splicedPorject)), __jsx("div", {
    className: classes.right,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }), rightCardsData.map(splicedPorject)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/home/projects/index.tsx":
/*!********************************************!*\
  !*** ./components/home/projects/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./components/home/projects/Projects.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Projects__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useWindowSize */ "./hooks/useWindowSize.tsx");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _components_shared_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/Header */ "./components/shared/Header.tsx");
/* harmony import */ var _components_home_competences__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/competences */ "./components/home/competences/index.tsx");
/* harmony import */ var _components_home_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/projects */ "./components/home/projects/index.tsx");
/* harmony import */ var _components_home_knowledges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/knowledges */ "./components/home/knowledges/index.tsx");
/* harmony import */ var _components_shared_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shared/Text */ "./components/shared/Text.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    root: {
      composes: 'flexColumn flexCenter alignCenter stretchSelf flex1'
    },
    main: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn stretchSelf flex1',
      backgroundColor: '#000',
      color: '#fff'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].lgDown, {
      flexDirection: 'column'
    }),
    warning: {
      composes: 'flexRow stretchSelf justifyCenter',
      padding: 20,
      backgroundColor: 'red'
    },
    warningText: {
      color: '#fff'
    },
    emailLink: {
      color: theme.colors.active,
      marginLeft: theme.spacing(1)
    }
  };
});
var headerDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var Home = function Home() {
  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__["useWindowSize"])();
  var classes = useStyles({
    size: size
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__["getScreen"])(size.width));
  }, []);
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Tiavina Michael Ralainirina"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "title",
    content: "Tiavina Michael Ralainirina Portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "FullStack Developer from Madagascar.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: classes.warning,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_components_shared_Text__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.warningText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Le site est actuellement en cours de d\xE9veloppement. Pour plus d'info veuillez me contacter", __jsx("a", {
    href: "mailto:tiavinamika@gmail.com",
    className: classes.emailLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "ici"))), __jsx(_components_shared_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Tiavina Michael RALAINIRINA",
    subtitle: "FullStack Developer - UI / UX Designer",
    description: headerDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx(_components_home_competences__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx(_components_home_projects__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx(_components_home_knowledges__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a8c71360df5b915dfe30.hot-update.js.map