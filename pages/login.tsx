import React, { Component } from "react";
import Layout from "../components/layout/MyLayout";
import Router from "next/router";
import { Button } from "antd";
import config from "../app.config";

interface IProps {
  router: object;
  homeStore: object;
}

interface IState {
  showEditor: boolean;
}

class Login extends Component<IProps, IState> {
  public state = {
    showEditor: true
  };

  public login() {
    const url =
      "https://github.com/login/oauth/authorize?client_id=" +
      config.githubID +
      `&client_secret=${config.githubSecret}`;
    window.location.href = url;
    // sessionStorage.setItem("logged", "1");
    // Router.push("/");
  }

  render() {
    return (
      <Layout>
        <div className="login">
          <div className="login-logo">
            <img
              src="https://www.freelogodesign.org/Content/img/logo-samples/bakary.png"
              alt=""
            />
          </div>
          <div className="login-title">小八阿哥</div>
          <div className="login-tips">
            <p>
              啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
              啦啦啦啦啦啦啦啦 啦啦啦啦啦啦啦啦 啦啦啦啦啦啦啦啦
              啦啦啦啦啦啦啦啦 啦啦啦啦啦啦啦啦 啦啦啦啦啦啦啦啦
              啦啦啦啦啦啦啦啦 啦啦啦啦啦啦啦啦 啦啦啦啦啦啦啦啦
              啦啦啦啦啦啦啦啦 啦啦啦啦啦啦啦啦
            </p>
          </div>
          <div className="login-btns">
            <Button
              type="primary"
              icon="github"
              size="large"
              onClick={this.login}
            >
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

export default Login;
