webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/Projects.tsx":
/*!***********************************************!*\
  !*** ./components/home/projects/Projects.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./components/home/projects/Project.tsx");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");


var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\projects\\Projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var pageInfo = {
  title: 'Projets',
  subtitle: "Projets sur lesquels j'ai travaille",
  icon: 'projects'
};
var data = [{
  image: 'project-demo.svg',
  title: 'Some Project Title here',
  subtitle: 'Some Subtitle',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  link: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/'
}, {
  image: 'project-demo.svg',
  title: 'Some Project Title here',
  subtitle: 'Some Subtitle',
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  link: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/'
} // {
//     image: 'mac.png',
//     title: 'Some Project Title here 2',
//     subtitle: 'Some Subtitle 2',
//     description:
//         'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
//     link: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/',
// },
];
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])(function (theme) {
  return {
    root: {
      composes: 'flexColumn stretchSelf justifyCenter',
      fontFamily: 'Prequelrough, sans-serif',
      paddingBottom: theme.spacing(15)
    }
  };
});

var Projects = function Projects() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    id: "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, data.map(function (item, index) {
    return __jsx(_Project__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      key: index,
      reverse: index % 2 !== 0,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.db752e0b7f4f6bc90456.hot-update.js.map