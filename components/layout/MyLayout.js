/*
 * @file: 页面布局组件
 */

import React, { Component, Fragment } from "react";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
    render() {
        let { children, hideHeader } = this.props;
        return (
            <Fragment>
                <Head />
                {hideHeader ? null : <Header />}
                <div className={"content"}>{children}</div>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;
