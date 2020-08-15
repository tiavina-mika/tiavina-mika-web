webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/menu/Menu.tsx":
/*!**********************************!*\
  !*** ./components/menu/Menu.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _animations_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../animations/app */ "./animations/app.ts");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Link */ "./components/menu/Link.tsx");



var _menuRoot,
    _logo,
    _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\menu\\Menu.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])({
  menuRoot: (_menuRoot = {
    composes: 'flexRow center font-Montserrat-light',
    width: '100%',
    position: 'fixed',
    zIndex: 2000,
    top: 50,
    left: 0,
    fontSize: 18
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_menuRoot, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    top: 0,
    backgroundColor: '#000'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_menuRoot, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
    height: 80
  }), _menuRoot),
  fixedMenuRoot: {
    top: 0
  },
  nonFixedMenuRoot: {
    top: 50
  },
  logo: (_logo = {
    marginLeft: 20,
    flex: 2
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_logo, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].lgDown, {
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginLeft: 0,
    alignItems: 'center',
    padding: 10
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_logo, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].xlDown, {
    flex: 1
  }), _logo),
  fixedLogo: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdUp, {
    backgroundColor: '#000',
    border: '5px solid #000'
  }),
  menus: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    composes: 'flexRow',
    flex: 1
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdDown, {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15
  }),
  fixedMenu: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdUp, {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000',
    height: '100%',
    paddingLeft: 20,
    borderRadius: 2
  }),
  menuIcon: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    cursor: 'pointer'
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__["media"].mdUp, {
    display: 'none'
  }),
  logoIcon: {
    width: 30
  }
});
var links = [{
  id: 'about',
  icon: 'passion',
  text: 'A propos de moi'
}, {
  id: 'competences',
  icon: 'passion',
  text: 'Compétences'
}, {
  id: 'projects',
  icon: 'passion',
  text: 'Projets'
}, {
  id: 'contact',
  icon: 'passion',
  text: 'Contact'
}];

var Menu = function Menu() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      openMenu = _useState[0],
      setOpenMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      fixMenu = _useState2[0],
      setFixMenu = _useState2[1];

  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__["screenState"]);

  var onScroll = function onScroll() {
    var header = document.getElementById('presentation');
    var sticky = header.offsetHeight / 2;

    if (window.pageYOffset > sticky) {
      setFixMenu(true);
    } else {
      setFixMenu(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [fixMenu]);

  var handleOpen = function handleOpen() {
    return setOpenMenu(!openMenu);
  }; // const handleClose = () => setOpenMenu(false);


  var Div = !isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div;
  var animate = !isMobile ? {} : _animations_app__WEBPACK_IMPORTED_MODULE_9__["openMenuAnimation"];

  var menus = __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.menus, fixMenu ? classes.fixedMenu : null)
  }, animate, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), links.map(function (link, index) {
    return __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, link, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }));
  }));

  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.menuRoot, fixMenu ? classes.fixedMenuRoot : classes.nonFixedMenuRoot),
    id: "menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: "",
    src: "/images/logo.svg",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.logoIcon, fixMenu ? classes.fixedLogo : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), __jsx("img", {
    alt: "",
    src: "/images/icons/menu.svg",
    className: classes.menuIcon,
    onClick: handleOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  })), isMobile && openMenu && menus, !isMobile && menus);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.14c367a5b6471a2768a3.hot-update.js.map