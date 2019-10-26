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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_layout_MyLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout/MyLayout */ "./components/layout/MyLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_16__);











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

      var shows = this.props.shows;
      return __jsx(_components_layout_MyLayout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("div", {
        className: "books-banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/banner.jpg",
        alt: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx("div", {
        className: "books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("div", {
        className: "books-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        className: "left-home-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("span", {
        onClick: function onClick() {
          return _this2.changeActive("hot");
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.active === "hot"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "\u63A8\u8350\u4E66\u7C4D"), __jsx("i", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), __jsx("span", {
        onClick: function onClick() {
          return _this2.changeActive("new");
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()({
          active: this.state.active === "new"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "\u6211\u8D2D\u4E70\u7684\u4E66\u7C4D")), __jsx("ul", {
        className: "books-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, shows.map(function (item) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
          key: react_uuid__WEBPACK_IMPORTED_MODULE_16___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/post?id=".concat(item.id, "}"),
          as: "/post/".concat(item.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, __jsx("li", {
          className: "books-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, __jsx("div", {
          className: "books-item-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, __jsx("img", {
          src: "data:image/jpeg;base64,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",
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        })), __jsx("div", {
          className: "books-item-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, __jsx("div", {
          className: "books-item-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "\u6211\u672A\u5B8C\u6210\u7684\u95EE\u9898"), __jsx("div", {
          className: "books-item-desc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, "\u901A\u8FC7\u5B9E\u8DF5\u5FEB\u901F\u4E0A\u624B SwiftUI \u53CA Combine \u54CD\u5E94\u5F0F\u7F16\u7A0B\u6846\u67B6\uFF0C\u638C\u63E1\u4E0B\u4E00\u4EE3\u5BA2\u6237\u7AEF UI \u5F00\u53D1\u6280\u672F\u3002 WWDC 2019 \u4E0A Apple \u516C\u5E03\u4E86\u58F0\u660E\u5F0F\u5168\u65B0\u754C\u9762\u6846\u67B6 SwiftUI\uFF0C\u4EE5\u53CA\u914D\u5957\u7684\u54CD\u5E94\u5F0F\u7F16\u7A0B\u6846\u67B6 Combine\u3002\u5BF9\u4E8E Apple \u5E73\u53F0\u7684\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u8FD9\u662F\u4E00\u6B21\u5168\u65B0\u7684\u8F6C\u53D8\u548C\u6311\u6218\u3002\u672C\u4E66\u901A\u8FC7\u51E0\u4E2A\u5177\u4F53\u7684\u5B9E\u6218\u4F8B\u5B50\uFF0C\u7531\u6D45\u5165\u6DF1\u4ECB\u7ECD\u4E86 SwiftUI \u548C Combine \u6846\u67B6\u7684\u4F7F\u7528\u65B9\u5F0F\u53CA\u6838\u5FC3\u601D\u60F3\uFF0C\u5E2E\u52A9\u60A8\u987A\u5229\u6B65\u5165\u4EE4\u4EBA\u6FC0\u52A8\u7684 Apple \u5F00\u53D1\u65B0\u65F6\u4EE3\u3002"), __jsx("div", {
          className: "books-item-avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
          size: 20,
          src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, " \u90ED\u5BCC\u57CE")), __jsx("div", {
          className: "books-item-read",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: "danger",
          shape: "round",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, "\u9605\u8BFB")), __jsx("div", {
          className: "books-item-price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "\xA5 19.9"), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "14 \u7AE0\u8282 \xB7 222 \u4EBA\u8D2D\u4E70"))))));
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
                return axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("https://api.tvmaze.com/search/shows?q=batman");

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
//# sourceMappingURL=books.js.7ee9cabff13deb8bbf43.hot-update.js.map