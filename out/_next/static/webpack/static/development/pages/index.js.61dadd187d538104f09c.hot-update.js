webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/knowledges/Knowledges.tsx":
/*!***************************************************!*\
  !*** ./components/home/knowledges/Knowledges.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.ts");
/* harmony import */ var _Knowledge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Knowledge */ "./components/home/knowledges/Knowledge.tsx");
/* harmony import */ var _OveralCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OveralCard */ "./components/home/knowledges/OveralCard.tsx");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\knowledges\\Knowledges.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])(function (theme) {
  return {
    knowledgesRoot: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      composes: 'flexColumn center stretchSelf red',
      fontFamily: 'font-ProximaNova-regular',
      paddingBottom: theme.spacing(15)
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_3__["media"].lgDown, {
      paddingLeft: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["horizontalPaddingMobile"]),
      paddingRight: theme.spacing(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["horizontalPaddingMobile"])
    }),
    overall: {},
    progressiveContainer: {
      composes: 'flexColumn stretchSelf center',
      width: '100%',
      height: 200
    }
  };
});
var data = [{
  title: 'Frontend',
  description: "Lorem Ipsum is simply dummy text of the printing and \n        typesetting industry. Lorem Ipsum has been the industry's \n        standard dummy text ever since the 1500s, when an unknown \n        printer took a galley of type and scrambled it to make a \n        type specimen book. It has survived not only five centuries, \n        but also the leap into electronic typesetting, remaining \n        essentially unchanged. It was popularised in the 1960s \n        with the release of Letraset sheets containing Lorem Ipsum \n        passages, and more recently with desktop publishing software \n        like Aldus PageMaker including versions of Lorem Ipsum.",
  technos: [{
    name: 'React',
    image: 'react',
    value: 98
  }, {
    name: 'HTML',
    image: 'html',
    value: 100
  }, {
    name: 'CSS',
    image: 'css',
    value: 100
  }, {
    name: 'JQuery',
    image: 'jquery',
    value: 98
  }, {
    name: 'Angular',
    image: 'angular',
    value: 50
  }]
}, {
  title: 'Backend',
  description: "Lorem Ipsum is simply dummy text of the printing and \n        typesetting industry. Lorem Ipsum has been the industry's \n        standard dummy text ever since the 1500s, when an unknown \n        printer took a galley of type and scrambled it to make a \n        type specimen book. It has survived not only five centuries.",
  technos: [{
    name: 'React',
    image: 'react',
    value: 98
  }, {
    name: 'HTML',
    image: 'html',
    value: 100
  }, {
    name: 'CSS',
    image: 'css',
    value: 100
  }, {
    name: 'JQuery',
    image: 'jquery',
    value: 98
  }, {
    name: 'Angular',
    image: 'angular',
    value: 50
  }]
}];

var Knowledges = function Knowledges() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.knowledgesRoot,
    id: "knowledges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.overall,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx(_OveralCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  })), data.map(function (d, i) {
    return __jsx(_Knowledge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: d,
      key: i,
      reverse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isReverse"])(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Knowledges);

/***/ })

})
//# sourceMappingURL=index.js.61dadd187d538104f09c.hot-update.js.map