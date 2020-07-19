webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Common/PlxComponent.tsx":
/*!********************************************!*\
  !*** ./components/Common/PlxComponent.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/appReducer */ "./reducers/appReducer.ts");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\Common\\PlxComponent.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var PlxComponent = function PlxComponent(_ref) {
  var className = _ref.className,
      parallaxData = _ref.parallaxData,
      triggerClass = _ref.triggerClass,
      children = _ref.children,
      triggerlassName = _ref.triggerlassName,
      id = _ref.id,
      trigger = _ref.trigger;
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_5__["screenState"]);
  var Component = !isMobile ? react_plx__WEBPACK_IMPORTED_MODULE_3___default.a : 'div';
  var otherProps = isMobile ? {} : {
    parallaxData: parallaxData
  };
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    className: className,
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), !isMobile && __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(triggerClass, triggerlassName),
    style: {
      pointerEvents: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 27
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (PlxComponent);

/***/ })

})
//# sourceMappingURL=index.js.9e010dfaa1cad856669a.hot-update.js.map