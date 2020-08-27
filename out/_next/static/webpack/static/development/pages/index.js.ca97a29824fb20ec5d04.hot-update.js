webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/competences/cards/index.tsx":
/*!*****************************************************!*\
  !*** ./components/home/competences/cards/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./components/home/competences/cards/Card.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\competences\\cards\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var y = 40;
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  cardsRoot: {
    composes: 'flexRow justifyStart flex1 blue'
  },
  cards: {
    composes: 'flexColumn justifyCenter alignCenter',
    position: 'absolute'
  },
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
        endValue: -10 + index * 10,
        // endValue: -10,
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
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
      return [enterAnimationSequence, exitAnimationSequence];
    }, []);
  };

  return __jsx("div", {
    className: classes.cardsRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.cards, triggerClassName),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, items.map(function (item, i) {
    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      className: i === 0 ? classes.firstCard : classes.otherCard,
      parallaxData: setParallaxData(i),
      data: _objectSpread({}, item, {
        ranking: "".concat(i + 1, " / ").concat(items.length)
      }),
      onPlxEnd: onCurrentStep,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ })

})
//# sourceMappingURL=index.js.ca97a29824fb20ec5d04.hot-update.js.map