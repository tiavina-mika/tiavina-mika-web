webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./animations/app.ts":
/*!***************************!*\
  !*** ./animations/app.ts ***!
  \***************************/
/*! exports provided: openMenuAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMenuAnimation", function() { return openMenuAnimation; });
var openMenuAnimation = function openMenuAnimation(open) {
  return {
    initial: open ? 'visible' : 'hidden',
    animate: 'hidden',
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
};

/***/ })

})
//# sourceMappingURL=index.js.14c9e5d9501959de0b28.hot-update.js.map