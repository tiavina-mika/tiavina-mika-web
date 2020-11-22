webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects-grid/ProjectsGrid.tsx":
/*!********************************************************!*\
  !*** ./components/home/projects-grid/ProjectsGrid.tsx ***!
  \********************************************************/
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
/* harmony import */ var _ProjectGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProjectGrid */ "./components/home/projects-grid/ProjectGrid.tsx");




var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects-grid\\ProjectsGrid.tsx";

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
      width: _ProjectGrid__WEBPACK_IMPORTED_MODULE_11__["RESPONSIVE_CARD_WIDTH"].lgXl
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_blockTitle, _utils_constants__WEBPACK_IMPORTED_MODULE_7__["media"].mdLg, {
      width: _ProjectGrid__WEBPACK_IMPORTED_MODULE_11__["RESPONSIVE_CARD_WIDTH"].mdLg
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

var ProjectsGrid = function ProjectsGrid() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      leftCardsData = _useState[0],
      setLeftCardData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      rightCardsData = _useState2[0],
      setRightCardData = _useState2[1];

  var _useWindowSize = Object(react_use__WEBPACK_IMPORTED_MODULE_5__["useWindowSize"])(),
      width = _useWindowSize.width;

  var isTablet = width <= _utils_constants__WEBPACK_IMPORTED_MODULE_7__["md"];
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
    return __jsx(_ProjectGrid__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: project.id
    }, project, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 62
      }
    }));
  };

  var blockTitle = __jsx("div", {
    className: classes.blockTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.blockTitleContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, __jsx(_shared_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {
    text: "Some Title",
    level: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }), __jsx(_shared_Text__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.blockDescription,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus metus non nunc tempor, eu ultricies mi euismod.",
    tagName: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 228,
      columnNumber: 9
    }
  }, isTablet && blockTitle, __jsx("div", {
    className: classes.projectsContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.left,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, !isTablet && blockTitle, leftCardsData.map(splicedPorject)), __jsx("div", {
    className: classes.right,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }), rightCardsData.map(splicedPorject)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsGrid);

/***/ })

})
//# sourceMappingURL=index.js.438f78c2d33c18332227.hot-update.js.map