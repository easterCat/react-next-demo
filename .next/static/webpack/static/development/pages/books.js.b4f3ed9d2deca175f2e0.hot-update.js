webpackHotUpdate("static/development/pages/books.js",{

/***/ "./pages/books.tsx":
/*!*************************!*\
  !*** ./pages/books.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_15__);











var _jsxFileName = "/Users/mac/Projects/react-next-demo/pages/books.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;






var Books =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Books, _Component);

  function Books() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Books);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Books)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      loading: true,
      active: "hot",
      // hot or new
      loadingMore: false,
      hasMore: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Books, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props && this.props.shows) {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "changeActive",
    value: function changeActive(active) {
      this.setState({
        active: active
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("div", {
        className: "books-banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/banner.jpg",
        alt: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), __jsx("div", {
        className: "books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("div", {
        className: "books-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("div", {
        className: "left-home-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("span", {
        onClick: function onClick() {
          return _this2.changeActive("hot");
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()({
          active: this.state.active === "hot"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "\u63A8\u8350\u4E66\u7C4D"), __jsx("i", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx("span", {
        onClick: function onClick() {
          return _this2.changeActive("new");
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()({
          active: this.state.active === "new"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u6211\u8D2D\u4E70\u7684\u4E66\u7C4D")), __jsx("ul", {
        className: "books-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, Array(10).fill(0).map(function (item) {
        return __jsx("li", {
          className: "books-item",
          key: react_uuid__WEBPACK_IMPORTED_MODULE_15___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, __jsx("div", {
          className: "books-item-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, __jsx("img", {
          src: "@/static/images/banner.",
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        })), __jsx("div", {
          className: "books-item-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, __jsx("div", {
          className: "books-item-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "\u6211\u672A\u5B8C\u6210\u7684\u95EE\u9898"), __jsx("div", {
          className: "books-item-desc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "\u901A\u8FC7\u5B9E\u8DF5\u5FEB\u901F\u4E0A\u624B SwiftUI \u53CA Combine \u54CD\u5E94\u5F0F\u7F16\u7A0B\u6846\u67B6\uFF0C\u638C\u63E1\u4E0B\u4E00\u4EE3\u5BA2\u6237\u7AEF UI \u5F00\u53D1\u6280\u672F\u3002 WWDC 2019 \u4E0A Apple \u516C\u5E03\u4E86\u58F0\u660E\u5F0F\u5168\u65B0\u754C\u9762\u6846\u67B6 SwiftUI\uFF0C\u4EE5\u53CA\u914D\u5957\u7684\u54CD\u5E94\u5F0F\u7F16\u7A0B\u6846\u67B6 Combine\u3002\u5BF9\u4E8E Apple \u5E73\u53F0\u7684\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u8FD9\u662F\u4E00\u6B21\u5168\u65B0\u7684\u8F6C\u53D8\u548C\u6311\u6218\u3002\u672C\u4E66\u901A\u8FC7\u51E0\u4E2A\u5177\u4F53\u7684\u5B9E\u6218\u4F8B\u5B50\uFF0C\u7531\u6D45\u5165\u6DF1\u4ECB\u7ECD\u4E86 SwiftUI \u548C Combine \u6846\u67B6\u7684\u4F7F\u7528\u65B9\u5F0F\u53CA\u6838\u5FC3\u601D\u60F3\uFF0C\u5E2E\u52A9\u60A8\u987A\u5229\u6B65\u5165\u4EE4\u4EBA\u6FC0\u52A8\u7684 Apple \u5F00\u53D1\u65B0\u65F6\u4EE3\u3002"), __jsx("div", {
          className: "books-item-avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
          size: 20,
          src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, " \u90ED\u5BCC\u57CE")), __jsx("div", {
          className: "books-item-read",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: "danger",
          shape: "round",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "\u9605\u8BFB")), __jsx("div", {
          className: "books-item-price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "\xA5 19.9"), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, "14 \u7AE0\u8282 \xB7 222 \u4EBA\u8D2D\u4E70"))));
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("https://api.tvmaze.com/search/shows?q=batman");

              case 2:
                res = _context.sent;
                data = res.data;
                return _context.abrupt("return", {
                  shows: data.map(function (item) {
                    return item.show;
                  })
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Books;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ })

})
//# sourceMappingURL=books.js.b4f3ed9d2deca175f2e0.hot-update.js.map