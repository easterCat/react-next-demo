import React from "react";
import App from "next/app";
import NextSeo from "next-seo";
import SEO from "../seo/base-seo.js";
import "../assets/css/styles.less";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import createStore from "../redux/store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(createStore)(MyApp);
