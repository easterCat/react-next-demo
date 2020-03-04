import React from "react";
import App from "next/app";
import "../static/css/styles.less";
import { Provider } from "react-redux";
import Router from "next/router";
import withRedux from "next-redux-wrapper";
import createStore from "../redux/store";
import cookies from "../utils/cookie.js";
import { connect } from "react-redux";
import { logged } from "../redux/user/user.action";

@connect(
    ({ user }) => {
        return { user };
    },
    { logged }
)
class MyApp extends App {
    async componentDidMount() {
        const token = cookies.getItem("ptg-token");
        if (token) {
            const user = await this.props.logged({ token });
            if (!user) {
                Router.push({
                    pathname: "/login"
                });
                return cookies.removeItem("ptg-token");
            } else {
                cookies.setItem("ptg-token", user.data.token);
            }
        }
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
