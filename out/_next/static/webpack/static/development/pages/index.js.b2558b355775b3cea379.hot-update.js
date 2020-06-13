webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/contact/Contact.tsx":
/*!*********************************************!*\
  !*** ./components/home/contact/Contact.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Common/BlockTitle */ "./components/Common/BlockTitle.tsx");
/* harmony import */ var _animations_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../animations/cards */ "./animations/cards.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.tsx");
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../reducers/appReducer */ "./reducers/appReducer.ts");
/* harmony import */ var _Common_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Common/Button */ "./components/Common/Button.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");




var _this = undefined,
    _jsxFileName = "E:\\tiavina-mika\\tiavina-mika-web\\components\\home\\contact\\Contact.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["createUseStyles"])(function (theme) {
  var _center, _right;

  return {
    fullColumn: {
      composes: 'flexColumn stretchSelf'
    },
    centered: {
      composes: 'flexRow justifyCenter alignCenter'
    },
    columnStretch: {
      composes: '$fullColumn flex1'
    },
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: '$fullColumn justifyCenter',
      fontFamily: 'Montserrat-Regular',
      fontSize: 20,
      letterSpacing: '0.68px',
      color: '#fff'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginTop: theme.spacing(8)
    }),
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: '$fullColumn center'
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdUp, {
      marginTop: theme.spacing(8)
    }),
    center: (_center = {
      composes: 'flexRow justifyCenter',
      paddingBottom: theme.spacing(6)
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_center, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      width: _utils_constants__WEBPACK_IMPORTED_MODULE_10__["lgScreenWidth"] - 300,
      marginTop: theme.spacing(4)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_center, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, {
      justifyContent: 'flex-start',
      flexDirection: 'column'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_center, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdLg, {
      width: 600
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_center, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].smMd, {
      width: '90%'
    }), _center),
    left: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexRow',
      '& h6': Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
        fontSize: 20,
        lineHeight: 1.3,
        fontWeight: 300
      }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].mdDown, {
        fontSize: 18,
        lineHeight: 1.5
      })
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      flex: 1
    }),
    right: (_right = {
      composes: 'flexRow stretchSelf flex1 justifyCenter'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, {
      marginTop: theme.spacing(6)
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_right, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgUp, {
      flex: 1
    }), _right),
    formContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      width: 400
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].lgDown, {
      width: '100%'
    }),
    contactItems: {
      composes: 'flexColumn',
      marginTop: theme.spacing(6),
      backgroundColor: 'red'
    },
    contactItem: {
      composes: '$centered',
      marginBottom: theme.spacing(5),
      backgroundColor: 'green'
    },
    contactIcon: {
      marginRight: theme.spacing(2.5),
      backgroundColor: 'yellow'
    },
    contactDetail: {
      composes: 'flexColumn',
      backgroundColor: 'yellow'
    },
    icon: {
      composes: 'flexRow justifyCenter center',
      border: '1px solid #fff',
      height: 50,
      width: 50,
      borderRadius: '50%'
    },
    label: {},
    value: {
      fontSize: 18,
      opacity: 0.6,
      fontWeight: 300,
      marginTop: theme.spacing(1),
      width: 300
    },
    items: {
      composes: 'flexColumn flexStart',
      marginBottom: theme.spacing(8),
      '& span': {
        marginLeft: 10
      }
    },
    item: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      composes: 'flexColumn justifyCenter center',
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
      width: 90
    }, _utils_constants__WEBPACK_IMPORTED_MODULE_10__["media"].smDown, {
      marginBottom: 0
    }),
    field: {
      composes: '$columnStretch',
      marginBottom: theme.spacing(3)
    },
    input: {
      composes: 'flexColumn stretchSelf',
      border: "1px solid #fff",
      backgroundColor: '#000',
      height: 60,
      borderRadius: 30,
      paddingLeft: 15,
      paddingRight: 15,
      fontFamily: 'Montserrat',
      color: '#fff',
      fontSize: 14,
      '&:focus': {
        outline: 'none'
      }
    },
    errorInput: {
      border: '1px solid red'
    },
    errorMessage: {
      color: 'red',
      fontSize: 12
    },
    textarea: {
      paddingTop: 10
    },
    buttonContainer: {
      composes: '$columnStretch'
    },
    button: {
      backgroundColor: theme.color.primary,
      color: '#fff',
      borderRadius: 30,
      height: 60,
      fontSize: 18,
      width: '100%'
    }
  };
});
var contacts = [{
  label: 'Téléphone',
  icon: 'phone',
  value: '+261341865749'
}, {
  label: 'Email',
  icon: 'mail',
  value: 'tiavinamika@gmail.com'
}, {
  label: 'Adresse',
  icon: 'home',
  value: 'Lot VN 50B Ankazolava, Ambohitsoa, Antananarivo, Madagascar'
}];

var Contact = function Contact() {
  var classes = useStyles();
  var isMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_11__["screenState"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: '',
    email: '',
    message: ''
  }),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: '',
    email: '',
    message: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"])({
    threshold: 0.2,
    triggerOnce: false
  }),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var handleChange = function handleChange(prop) {
    return function (event) {
      setValues(_objectSpread({}, values, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prop, event.target.value)));
    };
  };

  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    var email = values.email,
        message = values.message;
    if (!email) setError(_objectSpread({}, error, {
      email: 'Veuillez entrer votre email'
    }));

    if (message && message.length > 100) {
      setError(_objectSpread({}, error, {
        message: 'Le message ne doit pas depasser 100 caractères'
      }));
      return;
    }
  };
  /** Components */


  var Div = isMobile ? 'div' : framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div;
  /** Animation */

  var itemsAnimation = function itemsAnimation(inView) {
    return isMobile ? {} : Object(_animations_cards__WEBPACK_IMPORTED_MODULE_9__["animate"])(inView);
  };

  var itemAnimation = isMobile ? {} : _animations_cards__WEBPACK_IMPORTED_MODULE_9__["itemVariants"];
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, __jsx(_Common_BlockTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Contact",
    subtitle: "N'h\xE9sitez pas \xE0 me contacter",
    startAnimation: inView,
    icon: "passion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.content,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.center
  }, itemsAnimation(inView), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }), __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.left
  }, itemAnimation, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 21
    }
  }), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }, "Vous recherchez un designer ou un d\xE9veloppeur ? Laissez-moi un message, je vous r\xE9pondrai rapidement !"), __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.contactItems
  }, itemsAnimation(inView), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }), contacts.map(function (contact, index) {
    return __jsx(Div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.contactItem,
      key: index
    }, itemAnimation, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: classes.contactIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: classes.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "images/icons/".concat(contact.icon, ".svg"),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 45
      }
    }))), __jsx("div", {
      className: classes.contactDetail,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: classes.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 41
      }
    }, contact.label), __jsx("span", {
      className: classes.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 41
      }
    }, contact.value)));
  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].form, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.right,
    onSubmit: onSubmit
  }, itemAnimation, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: classes.formContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: classes.field,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 29
    }
  }, __jsx("input", {
    placeholder: "Votre nom",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])(classes.input, error.name ? classes.errorInput : null),
    onChange: handleChange('name'),
    value: values.name,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: classes.field,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 29
    }
  }, __jsx("input", {
    placeholder: "Votre email",
    className: classes.input,
    type: "email",
    onChange: handleChange('email'),
    value: values.email,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: classes.field,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 29
    }
  }, __jsx("textarea", {
    placeholder: "Votre message",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])(classes.input, classes.textarea, error.message ? classes.errorInput : null),
    onChange: handleChange('message'),
    value: values.message,
    rows: 20,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 33
    }
  }), error.message && __jsx("span", {
    className: classes.errorMessage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 51
    }
  }, error.message)), __jsx("div", {
    className: classes.buttonContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 29
    }
  }, __jsx(_Common_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: "Envoyer",
    type: "submit",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 33
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.b2558b355775b3cea379.hot-update.js.map