module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5AOK");


/***/ }),

/***/ "3Hq7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(defineProperty["a" /* default */])(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/Header.js





var __jsx = external_react_default.a.createElement;





const menu = __jsx(menu_default.a, null, __jsx(menu_default.a.Item, {
  key: "0"
}, __jsx(link_default.a, {
  href: "/"
}, __jsx("div", null, __jsx(icon_default.a, {
  type: "user"
}), "\u6211\u7684\u4E3B\u9875"))), __jsx(menu_default.a.Item, {
  key: "1"
}, __jsx(link_default.a, {
  href: "/article"
}, __jsx("div", null, __jsx(icon_default.a, {
  type: "user"
}), "\u6211\u7684\u4E13\u8F91"))), __jsx(menu_default.a.Item, {
  key: "2"
}, __jsx(link_default.a, {
  href: "/about"
}, __jsx("div", null, __jsx(icon_default.a, {
  type: "user"
}), "\u6211\u7684\u4E66\u7C4D"))), __jsx(menu_default.a.Divider, null), __jsx(menu_default.a.Item, {
  key: "3"
}, __jsx(link_default.a, {
  href: "/firebase"
}, __jsx("div", null, __jsx(icon_default.a, {
  type: "user"
}), "\u6211\u7684firebase"))), __jsx(menu_default.a.Item, {
  key: "4"
}, __jsx(link_default.a, {
  href: "/awp"
}, __jsx("div", null, __jsx(icon_default.a, {
  type: "user"
}), "\u6211\u7684awp"))), __jsx(menu_default.a.Item, {
  key: "5"
}, "\u6211\u7684\u5565"), __jsx(menu_default.a.Item, {
  key: "6"
}, "\u6211\u7684\u5565"), __jsx(menu_default.a.Divider, null), __jsx(menu_default.a.Item, {
  key: "7"
}, "\u6211\u7684\u8BBE\u7F6E"), __jsx(menu_default.a.Item, {
  key: "8"
}, "\u9000\u51FA"));

class Header_Header extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      active: "home" //home article collect

    };
  }

  changeActive(active) {
    this.setState({
      active
    });
    sessionStorage.setItem("active", active);
  }

  componentDidMount() {
    const logged = sessionStorage.getItem("logged");
    const active = sessionStorage.getItem("active") || "home";
    let state = {
      active
    };

    if (logged && logged === "1") {
      state = _objectSpread({}, state, {
        logged: true
      });
    }

    this.setState(state);
  }

  render() {
    return __jsx("div", {
      className: "nav nav-main header"
    }, __jsx("div", {
      className: " header-inner"
    }, __jsx("div", {
      className: "header-content"
    }, __jsx("div", {
      className: "header-left"
    }, __jsx("div", {
      className: "logo"
    }, __jsx("img", {
      src: "https://www.freelogodesign.org/Content/img/logo-samples/bakary.png",
      alt: "logo"
    }))), __jsx("div", {
      className: "header-menu"
    }, __jsx("div", {
      onClick: () => {
        this.changeActive("home");
      },
      className: external_classnames_default()({
        "header-menu-item": true,
        active: this.state.active === "home"
      })
    }, __jsx(link_default.a, {
      href: "/"
    }, __jsx("a", null, "\u9996\u9875"))), __jsx("div", {
      onClick: () => {
        this.changeActive("collect");
      },
      className: external_classnames_default()({
        "header-menu-item": true,
        active: this.state.active === "collect"
      })
    }, __jsx(link_default.a, {
      href: "/article"
    }, __jsx("a", null, "\u4E13\u8F91"))), __jsx("div", {
      onClick: () => {
        this.changeActive("article");
      },
      className: external_classnames_default()({
        "header-menu-item": true,
        active: this.state.active === "article"
      })
    }, __jsx(link_default.a, {
      href: "/books"
    }, __jsx("a", null, "\u4E66\u7C4D")))), __jsx("div", {
      className: "header-right"
    }, __jsx(dropdown_default.a, {
      overlay: menu,
      trigger: ["click"],
      placement: "bottomCenter"
    }, __jsx("div", {
      className: "avatar"
    }, __jsx("img", {
      src: "https://images.xiaozhuanlan.com/photo/2019/2ad6384db0b94cd8e76d11194400df23.jpeg",
      alt: "avatar"
    })))), __jsx("div", {
      className: "header-btn"
    }, __jsx(button_default.a, {
      type: "danger",
      ghost: true,
      shape: "round",
      icon: "edit",
      onClick: () => router_default.a.push("/write")
    }, "\u5199\u6587\u7AE0>")))));
  }

}
// CONCATENATED MODULE: ./components/Footer.js

var Footer_jsx = external_react_default.a.createElement;
/* harmony default export */ var Footer = (() => Footer_jsx("div", {
  className: ["footer", "footer-main"]
}));
// EXTERNAL MODULE: ./assets/css/styles.less
var styles = __webpack_require__("XNVK");

// CONCATENATED MODULE: ./components/MyLayout.js
var MyLayout_jsx = external_react_default.a.createElement;

/*
 * @file: 页面布局组件
 */





class MyLayout_Layout extends external_react_["Component"] {
  render() {
    let {
      children
    } = this.props;
    return MyLayout_jsx("div", null, MyLayout_jsx(Header_Header, null), MyLayout_jsx("div", {
      className: "content"
    }, children), MyLayout_jsx(Footer, null));
  }

}

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5AOK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9ubE");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3Hq7");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nxIs");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_8__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







class Books extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "state", {
      loading: true,
      active: "hot",
      // hot or new
      loadingMore: false,
      hasMore: true
    });
  }

  static async getInitialProps() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://api.tvmaze.com/search/shows?q=batman");
    const data = res.data;
    return {
      shows: data.map(item => item.show)
    };
  }

  componentDidMount() {
    if (this.props && this.props.shows) {
      this.setState({
        loading: false
      });
    }
  }

  changeActive(active) {
    this.setState({
      active
    });
  }

  render() {
    const {
      shows
    } = this.props;
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, __jsx("div", {
      className: "books-banner"
    }, __jsx("img", {
      src: "/static/images/banner.jpg",
      alt: "banner"
    })), __jsx("div", {
      className: "books"
    }, __jsx("div", {
      className: "books-left"
    }, __jsx("div", {
      className: "left-home-order"
    }, __jsx("span", {
      onClick: () => this.changeActive("hot"),
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
        active: this.state.active === "hot"
      })
    }, "\u63A8\u8350\u4E66\u7C4D"), __jsx("i", {
      className: "line"
    }), __jsx("span", {
      onClick: () => this.changeActive("new"),
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
        active: this.state.active === "new"
      })
    }, "\u6211\u8D2D\u4E70\u7684\u4E66\u7C4D")), __jsx("ul", {
      className: "books-list"
    }, shows.map(item => {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/book/${item.id}`
      }, __jsx("li", {
        className: "books-item",
        key: react_uuid__WEBPACK_IMPORTED_MODULE_8___default()()
      }, __jsx("div", {
        className: "books-item-left"
      }, __jsx("img", {
        src: "data:image/jpeg;base64,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",
        alt: ""
      })), __jsx("div", {
        className: "books-item-right"
      }, __jsx("div", {
        className: "books-item-name"
      }, "\u6211\u672A\u5B8C\u6210\u7684\u95EE\u9898"), __jsx("div", {
        className: "books-item-desc"
      }, "\u901A\u8FC7\u5B9E\u8DF5\u5FEB\u901F\u4E0A\u624B SwiftUI \u53CA Combine \u54CD\u5E94\u5F0F\u7F16\u7A0B\u6846\u67B6\uFF0C\u638C\u63E1\u4E0B\u4E00\u4EE3\u5BA2\u6237\u7AEF UI \u5F00\u53D1\u6280\u672F\u3002 WWDC 2019 \u4E0A Apple \u516C\u5E03\u4E86\u58F0\u660E\u5F0F\u5168\u65B0\u754C\u9762\u6846\u67B6 SwiftUI\uFF0C\u4EE5\u53CA\u914D\u5957\u7684\u54CD\u5E94\u5F0F\u7F16\u7A0B\u6846\u67B6 Combine\u3002\u5BF9\u4E8E Apple \u5E73\u53F0\u7684\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u8FD9\u662F\u4E00\u6B21\u5168\u65B0\u7684\u8F6C\u53D8\u548C\u6311\u6218\u3002\u672C\u4E66\u901A\u8FC7\u51E0\u4E2A\u5177\u4F53\u7684\u5B9E\u6218\u4F8B\u5B50\uFF0C\u7531\u6D45\u5165\u6DF1\u4ECB\u7ECD\u4E86 SwiftUI \u548C Combine \u6846\u67B6\u7684\u4F7F\u7528\u65B9\u5F0F\u53CA\u6838\u5FC3\u601D\u60F3\uFF0C\u5E2E\u52A9\u60A8\u987A\u5229\u6B65\u5165\u4EE4\u4EBA\u6FC0\u52A8\u7684 Apple \u5F00\u53D1\u65B0\u65F6\u4EE3\u3002"), __jsx("div", {
        className: "books-item-avatar"
      }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
        size: 20,
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      }), __jsx("span", null, " \u90ED\u5BCC\u57CE")), __jsx("div", {
        className: "books-item-read"
      }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "danger",
        shape: "round"
      }, "\u9605\u8BFB")), __jsx("div", {
        className: "books-item-price"
      }, __jsx("span", null, "\xA5 19.9"), __jsx("span", null, "14 \u7AE0\u8282 \xB7 222 \u4EBA\u8D2D\u4E70")))));
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "BWRB":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "XNVK":
/***/ (function(module, exports) {



/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nxIs":
/***/ (function(module, exports) {

module.exports = require("react-uuid");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });