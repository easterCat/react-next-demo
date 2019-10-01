webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "/Users/mac/Projects/next-demo/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4181757484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Batman TV Shows"), __jsx(PageHeader, {
    onBack: function onBack() {
      return null;
    },
    title: "Title",
    subTitle: "This is a subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), ",", __jsx("h2", {
    className: "jsx-4181757484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Hello userAgent is ", props.userAgent), __jsx("ul", {
    className: "jsx-4181757484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.shows.map(function (show) {
    return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        width: "100%",
        marginTop: 16
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Meta, {
      avatar: __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        src: show.image.medium,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }),
      title: show.name,
      description: show.summary,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "4181757484",
    __self: this
  }, "h1.jsx-4181757484,a.jsx-4181757484{font-family:\"Arial\";}ul.jsx-4181757484{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvUHJvamVjdHMvbmV4dC1kZW1vL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGdCLEFBSTZCLEFBSVYsVUFDWixVQUpBIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvUHJvamVjdHMvbmV4dC1kZW1vL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiwgQnV0dG9uLCBTd2l0Y2gsIENhcmQsIEljb24sIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XG5cbmludGVyZmFjZSBJQ29udGV4dCB7XG4gIHJlcTogSVJlcTtcbn1cblxuaW50ZXJmYWNlIElSZXEge1xuICBoZWFkZXJzOiBJSGVhZGVycztcbn1cblxuaW50ZXJmYWNlIElIZWFkZXJzIHtcbiAgXCJ1c2VyLWFnZW50XCI6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERlZmF1bHRQcm9wcyB7XG4gIHNob3dzOiBhbnlbXTtcbiAgdXNlckFnZW50OiBTdHJpbmc7XG59XG5cbmludGVyZmFjZSBJSXRlbSB7XG4gIHNob3c6IG9iamVjdDtcbn1cblxuaW50ZXJmYWNlIElTaG93IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzdW1tYXJ5OiBzdHJpbmc7XG4gIGltYWdlOiB7XG4gICAgbWVkaXVtOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzOiBEZWZhdWx0UHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbiAgICA8UGFnZUhlYWRlciBvbkJhY2s9eygpID0+IG51bGx9IHRpdGxlPVwiVGl0bGVcIiBzdWJUaXRsZT1cIlRoaXMgaXMgYSBzdWJ0aXRsZVwiIC8+LFxuICAgIDxoMj5IZWxsbyB1c2VyQWdlbnQgaXMge3Byb3BzLnVzZXJBZ2VudH08L2gyPlxuXG4gICAgPHVsPlxuICAgICAge3Byb3BzLnNob3dzLm1hcCgoc2hvdzogSVNob3cpID0+IChcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IDE2IH19PlxuICAgICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e3Nob3cuaW1hZ2UubWVkaXVtfSAvPn1cbiAgICAgICAgICAgIHRpdGxlPXtzaG93Lm5hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17c2hvdy5zdW1tYXJ5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEsXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0OiBJQ29udGV4dCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgdXNlckFnZW50ID0gY29udGV4dC5yZXFcbiAgICA/IGNvbnRleHQucmVxLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdXG4gICAgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhLm1hcCgoaXRlbTogSUl0ZW0pOiBvYmplY3QgPT4gaXRlbS5zaG93KSxcbiAgICB1c2VyQWdlbnRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/mac/Projects/next-demo/pages/index.tsx */"));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var res, data, userAgent;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("https://api.tvmaze.com/search/shows?q=batman");

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            userAgent = context.req ? context.req.headers["user-agent"] : navigator.userAgent;
            return _context.abrupt("return", {
              shows: data.map(function (item) {
                return item.show;
              }),
              userAgent: userAgent
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.42f4ce195abada7a0a2b.hot-update.js.map