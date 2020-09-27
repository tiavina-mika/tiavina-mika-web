webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@font-face {\r\n    font-family: 'DINCondensed';\r\n    src: url('/fonts/DINWeb-CondMedium.ttf');\r\n    /* font-weight: bold; */\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Prequel';\r\n    src: url('/fonts/Prequel-Regular.ttf');\r\n    /* font-weight: bold; */\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Prequelrough';\r\n    /* src: url(/fonts/prequel-rough.eot); */\r\n    src: url('/fonts/prequel-rough.woff2') format(\"woff2\");\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Montserrat Medium';\r\n    src: url('/fonts/Montserrat-Medium.ttf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Montserrat-Regular';\r\n    src: url('/fonts/Montserrat-Regular.ttf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Montserrat-Bold';\r\n    src: url('/fonts/Montserrat-Bold.ttf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Proxima Nova Bold';\r\n    src: url('/fonts/Proxima-Nova-Bold.otf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Proxima Nova Medium';\r\n    src: url('/fonts/Proxima-Nova-Medium.otf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Proxima Nova Regular';\r\n    src: url('/fonts/Proxima-Nova-Regular.otf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Proxima Nova Light';\r\n    src: url('/fonts/Proxima-Nova-Light.otf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Karla Regular';\r\n    src: url('/fonts/Karla-Regular.ttf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Tungsten-Medium';\r\n    src: url('/fonts/Tungsten-Medium.woff');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    margin: 0; \r\n    padding:0;\r\n}\r\nh6, h3, h4, h2 {\r\n    margin: 0;\r\n}\r\n.red {\r\n    background-color: red;\r\n}\r\n.blue {\r\n    background-color: blue;\r\n}\r\n.green {\r\n    background-color: green;\r\n}\r\n\r\n/* Montserrat */\r\n.font-Montserrat {\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.font-Montserrat-light {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n}\r\n.font-Montserrat-regular {\r\n    font-family: 'Montserrat-Regular', sans-serif;\r\n}\r\n.font-Montserrat-medium {\r\n    font-family: 'Montserrat-Medium', sans-serif;\r\n}\r\n.font-Montserrat-semidbold {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n}\r\n.font-Montserrat-bold {\r\n    font-family: 'Montserrat-Bold', sans-serif;\r\n}\r\n\r\n/* ProximaNova */\r\n.font-ProximaNova-bold {\r\n    font-family: 'Proxima Nova Bold', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.font-ProximaNova-extrabold {\r\n    font-family: 'Proxima Nova Medium', sans-serif;\r\n    font-weight: 600;\r\n}\r\n.font-ProximaNova-regular {\r\n    font-family: 'Proxima Nova Regular', sans-serif;\r\n    font-weight: 400;\r\n}\r\n.font-ProximaNova-light {\r\n    font-family: 'Proxima Nova Light', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\n/* DIN */\r\n.font-DINCondensed-medium {\r\n    font-family: 'DINCondensed', sans-serif;\r\n    font-weight: 500;\r\n}\r\n.font-Poppins-bold {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.font-Poppins-regular {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 400;\r\n}\r\n.font-tungsten-regular {\r\n    font-family: 'Tungsten-Medium', sans-serif;\r\n    font-weight: 400;\r\n}\r\n\r\n/*----- Flex -------*/\r\n.flexRow {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap;\r\n}\r\n.flexColumn {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    flex-wrap: nowrap;\r\n}\r\n.flexCenter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.flexStretch {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n}\r\n.stretch {\r\n    align-items: stretch;\r\n}\r\n.center {\r\n    align-items: center;\r\n}\r\n.flexStart {\r\n    align-items: flex-start;\r\n}\r\n.flexEnd {\r\n    align-items: flex-end;\r\n}\r\n.spaceBetween {\r\n    justify-content: space-between;\r\n}\r\n.spaceAround {\r\n    justify-content: space-around;\r\n}\r\n.justifyStart {\r\n    justify-content: flex-start;\r\n}\r\n.justifyEnd {\r\n    justify-content: flex-end;\r\n}\r\n.justifyCenter {\r\n    justify-content: center;\r\n}\r\n.stretchSelf {\r\n    align-self: stretch;\r\n}\r\n.flexEndSelf {\r\n    align-self: flex-end;\r\n}\r\n.centerSelf {\r\n    align-self: center;\r\n}\r\n.flex1 {\r\n    flex: 1 1;\r\n}\r\n.wrap {\r\n    flex-wrap: wrap;\r\n}\r\n.nowrap {\r\n    flex-wrap: nowrap;\r\n}\r\n.shrink0 {\r\n    flex-shrink: 0;\r\n}\r\n.shrink1 {\r\n    flex-shrink: 1;\r\n}\r\n\r\n.flexItem {\r\n    padding: 10px;\r\n}\r\n/*------------------*/\r\n\r\n.textCenter {\r\n    text-align: center;\r\n}\r\n\r\n.errorColor {\r\n    color: #ec554f;\r\n}\r\n.ellipsis {\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n.gridBorder {\r\n    border-right: 1px solid #e2e2e2;\r\n    border-bottom: 1px solid #e2e2e2;\r\n}\r\n.width100 {\r\n    width: 100%;\r\n}\r\n.height100 {\r\n    height: 100%;\r\n}\r\n.pointer {\r\n    cursor: pointer;\r\n}\r\n.overflowHidden {\r\n    overflow: hidden;\r\n}\r\n.overflowAuto {\r\n    overflow: auto;\r\n}\r\n.positionRelative {\r\n    position: relative;\r\n}\r\n.overParent {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.floatRight {\r\n    float: right;\r\n}\r\n\r\n.hidden {\r\n    opacity: 0;\r\n}\r\n.visible {\r\n    opacity: 1;\r\n}\r\n.transition300ms {\r\n    transition: all 300ms ease-in-out;\r\n}\r\n.marginRight8 {\r\n    margin-right: 8px;\r\n}\r\n.marginRight10 {\r\n    margin-right: 10px;\r\n}\r\n.marginRight15 {\r\n    margin-right: 15px;\r\n}\r\n.marginRight25 {\r\n    margin-right: 25px;\r\n}\r\n.marginTop10 {\r\n    margin-top: 10px;\r\n}\r\n.marginTop15 {\r\n    margin-top: 15px;\r\n}\r\n.marginTop20 {\r\n    margin-top: 20px;\r\n}\r\n.marginTop25 {\r\n    margin-top: 25px;\r\n}\r\n.marginTop50 {\r\n    margin-top: 50px;\r\n}\r\n.marginLeft8 {\r\n    margin-left: 8px;\r\n}\r\n.marginLeft10 {\r\n    margin-left: 10px;\r\n}\r\n.marginLeft15 {\r\n    margin-left: 15px;\r\n}\r\n.marginLeft25 {\r\n    margin-left: 25px;\r\n}\r\n.mt0 {\r\n    margin-top: 0;\r\n}\r\n.title15 {\r\n    font-size: 15px;\r\n}\r\n.title17 {\r\n    font-size: 17px;\r\n}\r\n.title16 {\r\n    font-size: 16px;\r\n}\r\n.title20 {\r\n    font-size: 20px;\r\n}\r\n.title22 {\r\n    font-size: 22px;\r\n}\r\n/*-------------------------------------------------------------------*/\r\n/*-------------------------- button styles --------------------------*/\r\n/*-------------------------------------------------------------------*/\r\n.button {\r\n    /*---- copied from flex center ----*/\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    background-color: #1fa086;\r\n    border-radius: 4px;\r\n    padding: 0;\r\n}\r\n.button:active {\r\n    color: white;\r\n    background-color: #1fa086;\r\n}\r\n.button:hover {\r\n    color: white;\r\n    background-color: #2cc9aa;\r\n}\r\n.button:focus,\r\n.button:active:focus {\r\n    color: white;\r\n    background-color: #19836e;\r\n    outline: 0;\r\n}\r\n.button:disabled,\r\n.button:disabled:hover {\r\n    color: white;\r\n    background-color: #1fa086;\r\n    opacity: 0.7;\r\n    outline: 0;\r\n    cursor: not-allowed;\r\n}\r\n.btn-link:focus,\r\n.btn:focus,\r\n.btn:active:focus {\r\n    outline: 0;\r\n}\r\n.btn-link:focus,\r\n.btn-link:hover {\r\n    text-decoration: none;\r\n    border: 2px solid #1fa086;\r\n}\r\n.btn-default.focus,\r\n.btn-default:focus {\r\n    color: #333;\r\n    background-color: #e6e6e6;\r\n    border-color: #8c8c8c;\r\n    outline: 0;\r\n}\r\n.button:active,\r\n.button:focus,\r\n.button:active:focus,\r\n.btn-default:active:focus {\r\n    outline: 0;\r\n}\r\n.btn-without-border,\r\n.btn-without-border:focus,\r\n.btn-without-border:hover {\r\n    border: none;\r\n    outline: 0;\r\n}\r\n", "",{"version":3,"sources":["E:/tiavina-mika/tiavina-mika-web/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,wCAAwC;IACxC,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,sCAAsC;IACtC,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,2BAA2B;IAC3B,wCAAwC;IACxC,sDAAsD;IACtD,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,gCAAgC;IAChC,wCAAwC;IACxC,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,iCAAiC;IACjC,yCAAyC;IACzC,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,8BAA8B;IAC9B,sCAAsC;IACtC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,wCAAwC;IACxC,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,kCAAkC;IAClC,0CAA0C;IAC1C,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,mCAAmC;IACnC,2CAA2C;IAC3C,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,iCAAiC;IACjC,yCAAyC;IACzC,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,uCAAuC;IACvC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,SAAS;AACb;AACA;IACI,SAAS;AACb;AACA;IACI,qBAAqB;AACzB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,uBAAuB;AAC3B;;AAEA,eAAe;AACf;IACI,qCAAqC;AACzC;AACA;IACI,qCAAqC;IACrC,gBAAgB;AACpB;AACA;IACI,6CAA6C;AACjD;AACA;IACI,4CAA4C;AAChD;AACA;IACI,qCAAqC;IACrC,gBAAgB;AACpB;AACA;IACI,0CAA0C;AAC9C;;AAEA,gBAAgB;AAChB;IACI,4CAA4C;IAC5C,iBAAiB;AACrB;AACA;IACI,8CAA8C;IAC9C,gBAAgB;AACpB;AACA;IACI,+CAA+C;IAC/C,gBAAgB;AACpB;AACA;IACI,6CAA6C;IAC7C,gBAAgB;AACpB;;AAEA,QAAQ;AACR;IACI,uCAAuC;IACvC,gBAAgB;AACpB;AACA;IACI,kCAAkC;IAClC,iBAAiB;AACrB;AACA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;AACA;IACI,0CAA0C;IAC1C,gBAAgB;AACpB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;AACxB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,8BAA8B;AAClC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,SAAO;AACX;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;AACA,qBAAqB;;AAErB;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,+BAA+B;IAC/B,gCAAgC;AACpC;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;AACA;IACI,iCAAiC;AACrC;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA,sEAAsE;AACtE,sEAAsE;AACtE,sEAAsE;AACtE;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,yBAAyB;AAC7B;AACA;;IAEI,YAAY;IACZ,yBAAyB;IACzB,UAAU;AACd;AACA;;IAEI,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,UAAU;IACV,mBAAmB;AACvB;AACA;;;IAGI,UAAU;AACd;AACA;;IAEI,qBAAqB;IACrB,yBAAyB;AAC7B;AACA;;IAEI,WAAW;IACX,yBAAyB;IACzB,qBAAqB;IACrB,UAAU;AACd;AACA;;;;IAII,UAAU;AACd;AACA;;;IAGI,YAAY;IACZ,UAAU;AACd","file":"styles.css","sourcesContent":["@font-face {\r\n    font-family: 'DINCondensed';\r\n    src: url('/fonts/DINWeb-CondMedium.ttf');\r\n    /* font-weight: bold; */\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Prequel';\r\n    src: url('/fonts/Prequel-Regular.ttf');\r\n    /* font-weight: bold; */\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Prequelrough';\r\n    /* src: url(/fonts/prequel-rough.eot); */\r\n    src: url('/fonts/prequel-rough.woff2') format(\"woff2\");\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Montserrat Medium';\r\n    src: url('/fonts/Montserrat-Medium.ttf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Montserrat-Regular';\r\n    src: url('/fonts/Montserrat-Regular.ttf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Montserrat-Bold';\r\n    src: url('/fonts/Montserrat-Bold.ttf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Proxima Nova Bold';\r\n    src: url('/fonts/Proxima-Nova-Bold.otf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Proxima Nova Medium';\r\n    src: url('/fonts/Proxima-Nova-Medium.otf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Proxima Nova Regular';\r\n    src: url('/fonts/Proxima-Nova-Regular.otf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Proxima Nova Light';\r\n    src: url('/fonts/Proxima-Nova-Light.otf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Karla Regular';\r\n    src: url('/fonts/Karla-Regular.ttf');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Tungsten-Medium';\r\n    src: url('/fonts/Tungsten-Medium.woff');\r\n    font-display: auto;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    margin: 0; \r\n    padding:0;\r\n}\r\nh6, h3, h4, h2 {\r\n    margin: 0;\r\n}\r\n.red {\r\n    background-color: red;\r\n}\r\n.blue {\r\n    background-color: blue;\r\n}\r\n.green {\r\n    background-color: green;\r\n}\r\n\r\n/* Montserrat */\r\n.font-Montserrat {\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.font-Montserrat-light {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n}\r\n.font-Montserrat-regular {\r\n    font-family: 'Montserrat-Regular', sans-serif;\r\n}\r\n.font-Montserrat-medium {\r\n    font-family: 'Montserrat-Medium', sans-serif;\r\n}\r\n.font-Montserrat-semidbold {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n}\r\n.font-Montserrat-bold {\r\n    font-family: 'Montserrat-Bold', sans-serif;\r\n}\r\n\r\n/* ProximaNova */\r\n.font-ProximaNova-bold {\r\n    font-family: 'Proxima Nova Bold', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.font-ProximaNova-extrabold {\r\n    font-family: 'Proxima Nova Medium', sans-serif;\r\n    font-weight: 600;\r\n}\r\n.font-ProximaNova-regular {\r\n    font-family: 'Proxima Nova Regular', sans-serif;\r\n    font-weight: 400;\r\n}\r\n.font-ProximaNova-light {\r\n    font-family: 'Proxima Nova Light', sans-serif;\r\n    font-weight: 300;\r\n}\r\n\r\n/* DIN */\r\n.font-DINCondensed-medium {\r\n    font-family: 'DINCondensed', sans-serif;\r\n    font-weight: 500;\r\n}\r\n.font-Poppins-bold {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.font-Poppins-regular {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 400;\r\n}\r\n.font-tungsten-regular {\r\n    font-family: 'Tungsten-Medium', sans-serif;\r\n    font-weight: 400;\r\n}\r\n\r\n/*----- Flex -------*/\r\n.flexRow {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap;\r\n}\r\n.flexColumn {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    flex-wrap: nowrap;\r\n}\r\n.flexCenter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.flexStretch {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n}\r\n.stretch {\r\n    align-items: stretch;\r\n}\r\n.center {\r\n    align-items: center;\r\n}\r\n.flexStart {\r\n    align-items: flex-start;\r\n}\r\n.flexEnd {\r\n    align-items: flex-end;\r\n}\r\n.spaceBetween {\r\n    justify-content: space-between;\r\n}\r\n.spaceAround {\r\n    justify-content: space-around;\r\n}\r\n.justifyStart {\r\n    justify-content: flex-start;\r\n}\r\n.justifyEnd {\r\n    justify-content: flex-end;\r\n}\r\n.justifyCenter {\r\n    justify-content: center;\r\n}\r\n.stretchSelf {\r\n    align-self: stretch;\r\n}\r\n.flexEndSelf {\r\n    align-self: flex-end;\r\n}\r\n.centerSelf {\r\n    align-self: center;\r\n}\r\n.flex1 {\r\n    flex: 1;\r\n}\r\n.wrap {\r\n    flex-wrap: wrap;\r\n}\r\n.nowrap {\r\n    flex-wrap: nowrap;\r\n}\r\n.shrink0 {\r\n    flex-shrink: 0;\r\n}\r\n.shrink1 {\r\n    flex-shrink: 1;\r\n}\r\n\r\n.flexItem {\r\n    padding: 10px;\r\n}\r\n/*------------------*/\r\n\r\n.textCenter {\r\n    text-align: center;\r\n}\r\n\r\n.errorColor {\r\n    color: #ec554f;\r\n}\r\n.ellipsis {\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n.gridBorder {\r\n    border-right: 1px solid #e2e2e2;\r\n    border-bottom: 1px solid #e2e2e2;\r\n}\r\n.width100 {\r\n    width: 100%;\r\n}\r\n.height100 {\r\n    height: 100%;\r\n}\r\n.pointer {\r\n    cursor: pointer;\r\n}\r\n.overflowHidden {\r\n    overflow: hidden;\r\n}\r\n.overflowAuto {\r\n    overflow: auto;\r\n}\r\n.positionRelative {\r\n    position: relative;\r\n}\r\n.overParent {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.floatRight {\r\n    float: right;\r\n}\r\n\r\n.hidden {\r\n    opacity: 0;\r\n}\r\n.visible {\r\n    opacity: 1;\r\n}\r\n.transition300ms {\r\n    transition: all 300ms ease-in-out;\r\n}\r\n.marginRight8 {\r\n    margin-right: 8px;\r\n}\r\n.marginRight10 {\r\n    margin-right: 10px;\r\n}\r\n.marginRight15 {\r\n    margin-right: 15px;\r\n}\r\n.marginRight25 {\r\n    margin-right: 25px;\r\n}\r\n.marginTop10 {\r\n    margin-top: 10px;\r\n}\r\n.marginTop15 {\r\n    margin-top: 15px;\r\n}\r\n.marginTop20 {\r\n    margin-top: 20px;\r\n}\r\n.marginTop25 {\r\n    margin-top: 25px;\r\n}\r\n.marginTop50 {\r\n    margin-top: 50px;\r\n}\r\n.marginLeft8 {\r\n    margin-left: 8px;\r\n}\r\n.marginLeft10 {\r\n    margin-left: 10px;\r\n}\r\n.marginLeft15 {\r\n    margin-left: 15px;\r\n}\r\n.marginLeft25 {\r\n    margin-left: 25px;\r\n}\r\n.mt0 {\r\n    margin-top: 0;\r\n}\r\n.title15 {\r\n    font-size: 15px;\r\n}\r\n.title17 {\r\n    font-size: 17px;\r\n}\r\n.title16 {\r\n    font-size: 16px;\r\n}\r\n.title20 {\r\n    font-size: 20px;\r\n}\r\n.title22 {\r\n    font-size: 22px;\r\n}\r\n/*-------------------------------------------------------------------*/\r\n/*-------------------------- button styles --------------------------*/\r\n/*-------------------------------------------------------------------*/\r\n.button {\r\n    /*---- copied from flex center ----*/\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    background-color: #1fa086;\r\n    border-radius: 4px;\r\n    padding: 0;\r\n}\r\n.button:active {\r\n    color: white;\r\n    background-color: #1fa086;\r\n}\r\n.button:hover {\r\n    color: white;\r\n    background-color: #2cc9aa;\r\n}\r\n.button:focus,\r\n.button:active:focus {\r\n    color: white;\r\n    background-color: #19836e;\r\n    outline: 0;\r\n}\r\n.button:disabled,\r\n.button:disabled:hover {\r\n    color: white;\r\n    background-color: #1fa086;\r\n    opacity: 0.7;\r\n    outline: 0;\r\n    cursor: not-allowed;\r\n}\r\n.btn-link:focus,\r\n.btn:focus,\r\n.btn:active:focus {\r\n    outline: 0;\r\n}\r\n.btn-link:focus,\r\n.btn-link:hover {\r\n    text-decoration: none;\r\n    border: 2px solid #1fa086;\r\n}\r\n.btn-default.focus,\r\n.btn-default:focus {\r\n    color: #333;\r\n    background-color: #e6e6e6;\r\n    border-color: #8c8c8c;\r\n    outline: 0;\r\n}\r\n.button:active,\r\n.button:focus,\r\n.button:active:focus,\r\n.btn-default:active:focus {\r\n    outline: 0;\r\n}\r\n.btn-without-border,\r\n.btn-without-border:focus,\r\n.btn-without-border:hover {\r\n    border: none;\r\n    outline: 0;\r\n}\r\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.1d3af6def30dedc445fe.hot-update.js.map