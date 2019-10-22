webpackHotUpdate("static/development/pages/marked/[id].js",{

/***/ "./lib/with-post.js":
/*!**************************!*\
  !*** ./lib/with-post.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/mac/Projects/react-next-demo/lib/with-post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var Highlight = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-highlight */ "./node_modules/react-highlight/index.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-highlight */ "./node_modules/react-highlight/index.js")];
    },
    modules: ["react-highlight"]
  }
});
marked__WEBPACK_IMPORTED_MODULE_9___default.a && marked__WEBPACK_IMPORTED_MODULE_9___default.a.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});

function WithPost(InnerComponent, options) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, _React$Component);

      function _class(props) {
        var _this;

        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _class);

        _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_class).call(this, props));
        _this.renderMarkdown = _this.renderMarkdown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
        return _this;
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, [{
        key: "renderMarkdown",
        value: function renderMarkdown(id) {
          // If a code snippet contains in the markdown content
          // then use Highlight component
          if (id === 1 || id === "1") {
            return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            }, __jsx("h1", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            }, options.title), __jsx("h3", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            }, "\u5F53\u524Did=>", id), __jsx("div", {
              className: "markdown",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            }, __jsx(Highlight, {
              innerHTML: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }, marked__WEBPACK_IMPORTED_MODULE_9___default()(options.content))));
          } // If not, simply render the generated HTML from markdown


          return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, __jsx("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, options.title), __jsx("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, "\u5F53\u524Did=>", id), __jsx("div", {
            className: "markdown",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, __jsx("div", {
            dangerouslySetInnerHTML: {
              __html: marked__WEBPACK_IMPORTED_MODULE_9___default()(options.content)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          })));
        }
      }, {
        key: "render",
        value: function render() {
          return __jsx(InnerComponent, {
            renderMarkdown: this.renderMarkdown,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          });
        }
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (WithPost);

/***/ })

})
//# sourceMappingURL=[id].js.290265f22d98556145b2.hot-update.js.map