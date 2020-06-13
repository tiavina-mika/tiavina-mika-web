webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Common/Button.tsx":
/*!**************************************!*\
  !*** ./components/Common/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\Common\\Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import { media } from '../../utils/constants';



var defaultAnimation = {
  initial: 'in',
  animate: 'out',
  variants: {
    "in": {
      y: 30,
      opacity: 0
    },
    out: {
      y: 0,
      opacity: 1
    }
  },
  transition: {
    duration: 1,
    delay: 0.5
  }
};
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
    },
    button: {
      border: 'none',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none'
      }
    }
  };
});

var Button = function Button(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      url = _ref.url,
      animation = _ref.animation,
      type = _ref.type,
      className = _ref.className;
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__["screenState"]);
  var animate = isMobile ? {} : animation ? animation : defaultAnimation;
  var Link = isMobile ? 'a' : framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a;

  if (type) {
    return __jsx("button", {
      type: type,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.button, className),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, text);
  }

  return __jsx(Link, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.link, className)
  }, animate, {
    href: url || '#',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, text), icon && __jsx("img", {
    alt: "",
    src: "/images/icons/".concat(icon, ".svg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 22
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.030d005c0c6a9c2f48b7.hot-update.js.map