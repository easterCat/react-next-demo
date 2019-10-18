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
          src: "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",
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
//# sourceMappingURL=books.js.857f0ea769b32e020679.hot-update.js.map