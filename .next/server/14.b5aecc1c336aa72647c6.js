exports.ids = [14];
exports.modules = {

/***/ "5xW5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wangeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ju2l");
/* harmony import */ var wangeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wangeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Q25H");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



let editor = undefined;

class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      showMask: false,
      source: ""
    };

    this.showPreview = () => {
      console.log("object :", editor.txt.html());
      this.setState({
        showMask: true,
        source: editor.txt.text()
      });
    };
  }

  componentDidMount() {
    editor = new wangeditor__WEBPACK_IMPORTED_MODULE_2___default.a(this.refs.Editor);
    editor.create();
  }

  render() {
    return __jsx("div", {
      className: "editor-content"
    }, __jsx("div", {
      ref: "Editor"
    }), __jsx("div", {
      className: "preview"
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
      size: "small",
      shape: "round",
      onClick: this.showPreview
    }, "\u9884\u89C8")), this.state.showMask ? __jsx("div", {
      className: "mask"
    }, __jsx("div", {
      className: "markdown-content"
    }, __jsx("div", {
      className: "markdown-text"
    }, __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3___default.a, {
      source: "",
      escapeHtml: false
    })))) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

};;