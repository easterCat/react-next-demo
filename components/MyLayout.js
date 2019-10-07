/*
 * @file: 页面布局组件
 */

import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../assets/css/styles.less";

class Layout extends Component {
  render() {
    let { children } = this.props;
    return (
      <div>
        <Header />
        <div className={"content"}>{children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
