webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/appReducer.ts":
/*!********************************!*\
  !*** ./reducers/appReducer.ts ***!
  \********************************/
/*! exports provided: getScreen, screenState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreen", function() { return getScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenState", function() { return screenState; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var initialState = {
  isMobile: false
}; //------------------------------------------------------------------//
//--------------------------- Slice ----------------------------//
//------------------------------------------------------------------//

var app = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'app',
  initialState: initialState,
  reducers: {
    getScreen: function getScreen(state, action) {
      state.isMobile = action.payload < lg ? true : false;
    }
  }
}); //------------------------------------------------------------------//
//--------------------------- Actions ----------------------------//
//------------------------------------------------------------------//

var getScreen = app.actions.getScreen; //------------------------------------------------------------------//
//--------------------------- Selectors ----------------------------//
//------------------------------------------------------------------//


var screenState = function screenState(state) {
  return state.app.isMobile;
}; //------------------------------------------------------------------//
//--------------------------- Thunk ----------------------------//
//------------------------------------------------------------------//

/* harmony default export */ __webpack_exports__["default"] = (app.reducer);

/***/ }),

/***/ "./utils/constants.tsx":
false

})
//# sourceMappingURL=_app.js.ab1a9bfbad048fb1b468.hot-update.js.map