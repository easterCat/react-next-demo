webpackHotUpdate("static/development/pages/article.js",{

/***/ "./pages/article.tsx":
/*!***************************!*\
  !*** ./pages/article.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_layout_MyLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout/MyLayout */ "./components/layout/MyLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);












var _jsxFileName = "/Users/mac/Projects/react-next-demo/pages/article.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;







var IconText = function IconText(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    type: type,
    style: {
      marginRight: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), text);
};

var Article =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Article, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Article, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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

  function Article(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Article);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Article).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      loading: true,
      active: "hot",
      // hot or new
      loadingMore: false,
      hasMore: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Article, [{
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

      return __jsx(_components_layout_MyLayout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("div", {
        className: "article-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "left-home-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
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
          lineNumber: 86
        },
        __self: this
      }, "\u70ED\u95E8\u6392\u884C"), __jsx("i", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
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
          lineNumber: 93
        },
        __self: this
      }, "\u6700\u65B0\u66F4\u65B0")), __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a, {
        itemLayout: "vertical",
        size: "large",
        pagination: {
          onChange: function onChange(page) {
            console.log(page);
          },
          pageSize: 10
        },
        dataSource: this.props.shows,
        renderItem: function renderItem(item) {
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
            href: "/book/".concat(item.id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
            key: item.summary,
            actions: [__jsx(IconText, {
              type: "star-o",
              text: "156",
              key: "list-vertical-star-o",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }), __jsx(IconText, {
              type: "like-o",
              text: "156",
              key: "list-vertical-like-o",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            }), __jsx(IconText, {
              type: "message",
              text: "2",
              key: "list-vertical-message",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            })],
            extra: __jsx("img", {
              width: 272,
              height: 168,
              alt: "logo",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGh4jXHhv9fgI7hMGZhagHHz1fyIal1dhOORMXya2RtzTQbPneg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a.Item.Meta, {
            avatar: __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
              size: 48,
              src: item.image.medium,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            }),
            title: __jsx("a", {
              href: item.url,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            }, item.name),
            description: __jsx("div", {
              dangerouslySetInnerHTML: {
                __html: item.premiered
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }), __jsx("div", {
            dangerouslySetInnerHTML: {
              __html: item.summary.slice(0, 90) + "..."
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          })));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), __jsx("div", {
        className: "article-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("div", {
        className: "tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("div", {
        className: "tag-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, this.props.shows.map(function (item) {
        return __jsx("li", {
          key: react_uuid__WEBPACK_IMPORTED_MODULE_16___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, __jsx("img", {
          src: item.image.medium,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }), __jsx("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, item.name.slice(0, 10)), __jsx("div", {
          className: "num",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, "111"));
      })))))));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=article.js.a686b17800e3f848f349.hot-update.js.map