import React, { Component } from "react";
import Layout from "../components/layout/MyLayout";
import Router from "next/router";
import { Button } from "antd";
import { Connect } from "../utils/Connect.js";
import cookie from "../utils/cookie.js";
import config from "../app.config";

interface IProps {
    router: object;
    homeStore: object;
    login: Function;
}

interface IState {
    showEditor: boolean;
    account: string;
    password: string;
}

class Login extends Component<IProps, IState> {
    public state = {
        showEditor: true,
        account: "",
        password: ""
    };

    public githubLogin = () => {
        // const url = "https://github.com/login/oauth/authorize?client_id=" + config.githubID + `&client_secret=${config.githubSecret}`;
        // window.location.href = url;
        // sessionStorage.setItem("logged", "1");
        // Router.push("/");
    };

    public formChange = (e: any, type: any) => {
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
        this.setState({
            [type]: e.target.value
        } as Pick<IState, keyof IState>);
    };

    public login = async () => {
        const result = await this.props.login({
            account: this.state.account,
            password: this.state.password
        });
        if (result && result.code === 200) {
            const token = result.data.token;
            cookie.setItem("ptg-token", token);
            Router.push({
                pathname: "/"
            });
        } else {
            Router.push({
                pathname: "/login"
            });
        }
    };

    public goReg = () => {
        Router.push({
            pathname: "/register"
        });
    };

    render() {
        const { login, formChange, githubLogin, goReg } = this;

        return (
            <Layout>
                <div className="login">
                    <div className="main-form first">
                        <div className="main-form__title">
                            <h1>登录</h1>
                        </div>
                        <div className="main-form__body">
                            <input
                                className="main-form__input"
                                type="text"
                                placeholder="请输入用户名"
                                onChange={e => {
                                    formChange(e, "account");
                                }}
                            />
                            <input
                                className="main-form__input"
                                type="password"
                                placeholder="请输入密码"
                                onChange={e => {
                                    formChange(e, "password");
                                }}
                            />
                            <button className="btn" onClick={goReg}>
                                注册
                            </button>
                            <button className="btn" onClick={login}>
                                登录
                            </button>
                        </div>
                    </div>
                    <div className="login-btns">
                        <Button type="primary" icon="github" size="large" onClick={githubLogin}>
                            Github登录
                        </Button>
                        <Button type="danger" icon="wechat" size="large">
                            微信登录
                        </Button>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Connect(["user"], ["login"], Login);
