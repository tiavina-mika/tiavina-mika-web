webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./animations/app.ts":
/*!***************************!*\
  !*** ./animations/app.ts ***!
  \***************************/
/*! exports provided: openMenuAnimation, menuIconAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMenuAnimation", function() { return openMenuAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuIconAnimation", function() { return menuIconAnimation; });
var openMenuAnimation = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    visible: {
      y: 0,
      opacity: 1
    },
    hidden: {
      y: -30,
      opacity: 0
    }
  },
  transition: {
    duration: 0.8
  }
};
var menuIconAnimation = {
  initial: 'start',
  animate: 'end',
  variants: {
    start: {
      scale: 1,
      opacity: 1
    },
    end: {
      scale: 1.1,
      opacity: 0
    }
  },
  transition: {
    duration: 0.8
  }
};

/***/ })

})
//# sourceMappingURL=index.js.1a1076bc043a5c155cd6.hot-update.js.map