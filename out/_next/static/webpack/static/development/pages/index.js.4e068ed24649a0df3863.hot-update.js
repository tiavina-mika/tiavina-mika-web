webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/PieChartSvg.tsx":
/*!****************************************************!*\
  !*** ./components/home/knowledges/PieChartSvg.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\PieChartSvg.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  inactiveBar: {
    fill: '#fff',
    stroke: '#eff4f9',
    strokeWidth: 20
  },
  activeBar: {
    strokeWidth: 20,
    fill: 'none',
    // stroke: '#80ebff',
    strokeLinecap: 'round'
  },
  cls3: {
    fill: 'none',
    stroke: '#e7edf1',
    strokeWidth: 2
  },
  text: {
    fontSize: 30,
    composes: 'font-ProximaNova-bold'
  }
});
var activeBar = {
  hidden: {
    stroke: '#eff4f9',
    pathLength: 0 //   fill: "rgba(255, 255, 255, 0)"

  },
  visible: {
    stroke: '#80ebff',
    pathLength: 1 //   fill: "rgba(255, 255, 255, 1)"

  }
};

var PieChartSvg = function PieChartSvg(_ref) {
  var total = _ref.total,
      startAnimation = _ref.startAnimation;
  var classes = useStyles();
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].svg, {
    id: "PieChartSvg_1",
    "data-name": "PieChartSvg 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "193",
    height: "196.02",
    viewBox: "0 0 193 196.02",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("path", {
    id: "inactive-bar",
    className: classes.inactiveBar,
    d: "M183,98c0,48.75-38.87,88-86.5,88S10,146.76,10,98,48.87,10,96.5,10,183,49.25,183,98Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].path, {
    id: "active-bar",
    className: classes.activeBar,
    d: "M96,12c46.39,0,84,38.28,84,85.5S142.39,183,96,183,12,144.72,12,97.5A86.41,86.41,0,0,1,22.33,56.38",
    variants: activeBar,
    initial: "hidden",
    animate: startAnimation ? 'visible' : '',
    transition: {
      "default": {
        duration: 2,
        ease: 'easeInOut'
      },
      stroke: {
        duration: 0.2,
        ease: [1, 0, 0.8, 1]
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("path", {
    id: "divider",
    className: classes.cls3,
    d: "M61,100h69",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("text", {
    id: "value",
    className: classes.text,
    transform: "translate(82.79 85.21)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, total), __jsx("text", {
    id: "unit",
    className: classes.text,
    transform: "translate(68.49 136)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "100"));
};

/* harmony default export */ __webpack_exports__["default"] = (PieChartSvg);

/***/ })

})
//# sourceMappingURL=index.js.4e068ed24649a0df3863.hot-update.js.map