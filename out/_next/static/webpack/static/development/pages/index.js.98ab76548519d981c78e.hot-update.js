webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/BackgroundPlx.tsx":
/*!*********************************************!*\
  !*** ./components/shared/BackgroundPlx.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./hooks/useResponsive.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.tsx");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\shared\\BackgroundPlx.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])({
  plx: {
    composes: 'flexColumn flex1 stretchSelf'
  }
});

var BackgrounPlx = function BackgrounPlx(_ref) {
  var children = _ref.children,
      id = _ref.id;
  var classes = useStyles();
  var triggerClassName = id + 'Trigger';
  var isTablet = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["useResponsive"])(_utils_constants__WEBPACK_IMPORTED_MODULE_7__["sm"]);
  var parallaxData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var _ref2;

    return [(_ref2 = {
      start: ".".concat(triggerClassName),
      startOffset: '10vh',
      duration: '150vh'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "duration", "".concat(duration | '150')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "properties", [{
      startValue: '#ffffff',
      endValue: '#F9F8F7',
      property: 'backgroundColor'
    }]), _ref2)];
  }, []);
  var Component = isTablet ? react__WEBPACK_IMPORTED_MODULE_3__["Fragment"] : react_plx__WEBPACK_IMPORTED_MODULE_5___default.a;
  var otherProps = isTablet ? {} : {
    parallaxData: parallaxData,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(triggerClassName, classes.plx)
  };
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 12
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (BackgrounPlx);

/***/ })

})
//# sourceMappingURL=index.js.98ab76548519d981c78e.hot-update.js.map