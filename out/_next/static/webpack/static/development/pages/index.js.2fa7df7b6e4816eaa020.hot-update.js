webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/competences/cards/Cards.tsx":
/*!*****************************************************!*\
  !*** ./components/home/competences/cards/Cards.tsx ***!
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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./components/home/competences/cards/Card.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/constants */ "./utils/constants.tsx");



var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\competences\\cards\\Cards.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var y = 40;
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])({
  cardsRoot: {
    composes: 'flexRow justifyStart alignCenter flex1'
  },
  cardsDesktop: {
    composes: 'flexColumn justifyCenter alignCenter',
    position: 'absolute'
  },
  cardsMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    composes: 'flexColumn center flex1 red'
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__["media"].mdLg, {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(3)
  }),
  firstCard: {
    transform: 'translateY(-10vh)'
  },
  otherCard: {
    transform: "translateY(".concat(y, "vh)"),
    opacity: 0
  }
});

var getOffsets = function getOffsets(index) {
  var offsets = [
  /** index, startOffset animation start */
  [0, 0], [1, 80], [2, 160], [3, 240], [4, 320], [5, 400], [6, 480]];
  var offsetAnimationEnd;
  offsets.map(function (offset) {
    if (index === offset[0]) {
      offsetAnimationEnd = offset[1];
    }
  });
  return offsetAnimationEnd;
};

var Cards = function Cards(_ref) {
  var triggerClassName = _ref.triggerClassName,
      items = _ref.items,
      onCurrentStep = _ref.onCurrentStep;
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_6__["screenState"]);

  var setParallaxData = function setParallaxData(index) {
    var offsetAnimationEnd = getOffsets(index);
    var properties = [];

    if (index !== 0) {
      properties.push({
        startValue: y,
        endValue: -10,
        unit: 'vh',
        property: 'translateY'
      });
    } else {
      properties.push({
        startValue: -10,
        endValue: -10,
        unit: 'vh',
        property: 'translateY'
      });
    }

    var enterAnimationPropreties = [{
      startValue: 0,
      endValue: 1,
      property: 'opacity'
    }];
    var enterAnimationSequence = {
      start: ".".concat(triggerClassName),
      startOffset: "".concat(offsetAnimationEnd - 10, "vh"),
      duration: '1vh',
      properties: enterAnimationPropreties
    };
    var exitAnimationSequence = {
      start: ".".concat(triggerClassName),
      startOffset: "".concat(offsetAnimationEnd, "vh"),
      duration: '50vh',
      properties: properties
    };
    return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
      return [enterAnimationSequence, exitAnimationSequence];
    }, []);
  };

  var cardsProps = isMobile ? {
    className: classes.cardsMobile
  } : {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.cardsDesktop, triggerClassName)
  };
  return __jsx("div", {
    className: classes.cardsRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cardsProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }), items.map(function (item, i) {
    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      className: !isMobile && (i === 0 ? classes.firstCard : classes.otherCard),
      parallaxData: setParallaxData(i),
      data: _objectSpread({}, item, {
        ranking: "".concat(i + 1, " / ").concat(items.length)
      }),
      onPlxEnd: onCurrentStep,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ })

})
//# sourceMappingURL=index.js.2fa7df7b6e4816eaa020.hot-update.js.map