import React, { Component } from "react";
import Layout from "../components/layout/MyLayout";
import { Connect } from "../utils/Connect.js";
import Router from "next/router";

interface IProps {
    router: object;
    homeStore: object;
    register: Function;
}

interface IState {
    showEditor: boolean;
    account: string;
    password: string;
    rePassword: string;
}

class Register extends Component<IProps, IState> {
    public state = {
        showEditor: true,
        account: "",
        password: "",
        rePassword: ""
    };

    public formChange = (e: any, type: any) => {
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
        this.setState({
            [type]: e.target.value
        } as Pick<IState, keyof IState>);
    };

    public reg = async () => {
        const result = await this.props.register({
            account: this.state.account,
            password: this.state.password
        });
        if (result && result.code === 200) {
            Router.push({
                pathname: "/login"
            });
        } else {
        }
    };

    render() {
        const { reg, formChange } = this;
        return (
            <Layout hideHeader={true}>
                <div className="register">
                    <div className="main-form first">
                        <div className="main-form__title">
                            <h1>注册</h1>
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
                            <input className="main-form__input" type="password" placeholder="请确认密码" />
                            <button className="btn">已有账号</button>
                            <button className="btn" onClick={reg}>
                                注册
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Connect(["user"], ["register"], Register);
