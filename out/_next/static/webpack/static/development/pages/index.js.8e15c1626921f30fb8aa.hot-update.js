webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/*! exports provided: isTop, isReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTop", function() { return isTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReverse", function() { return isReverse; });
/**
 *
 * @param id
 * if the svg position is top or bottom
 */
var isTop = function isTop(id) {
  return id.split('')[0] === 't';
};
/**
 *
 * @param index
 */

var isReverse = function isReverse(index) {
  return index % 2 !== 0;
};

/***/ })

})
//# sourceMappingURL=index.js.8e15c1626921f30fb8aa.hot-update.js.map