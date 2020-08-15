webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/Projects.tsx":
/*!***********************************************!*\
  !*** ./components/home/projects/Projects.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _MobileProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileProjects */ "./components/home/projects/MobileProjects.tsx");
/* harmony import */ var _DesktopProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesktopProjects */ "./components/home/projects/DesktopProjects.tsx");
var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var pageInfo = {
  title: 'Projets',
  subtitle: "Projets sur lesquels j'ai travaille",
  icon: 'projects'
};
var data = [{
  image: 'mac.png',
  title: 'Some Project Title here',
  subtitle: 'Some Subtitle',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  link: 'htttps://www.facebook.com'
}, {
  image: 'mac.png',
  title: 'Some Project Title here 2',
  subtitle: 'Some Subtitle',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  link: 'htttps://www.facebook.com'
}];

var Projects = function Projects() {
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_2__["screenState"]);
  return isMobile ? __jsx(_MobileProjects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    pageInfo: pageInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }) : __jsx(_DesktopProjects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data,
    pageInfo: pageInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.f3631e87d90297a16b4a.hot-update.js.map