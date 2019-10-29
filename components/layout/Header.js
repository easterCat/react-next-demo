import React, { Component } from "react";
import classnames from "classnames";
import { Menu, Button, Icon, Dropdown } from "antd";
import Link from "next/link";
import Router from "next/router";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="/">
        <div>
          <Icon type="home" />
          我的主页
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link href="/articles">
        <div>
          <Icon type="profile" />
          我的专栏
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/books">
        <div>
          <Icon type="book" />
          我的书籍
        </div>
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link href="/firebase">
        <div>
          <Icon type="user" />
          我的firebase
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="/awp">
        <div>
          <Icon type="user" />
          我的awp
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item key="5">我的啥</Menu.Item>
    <Menu.Item key="6">我的啥</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="7">我的设置</Menu.Item>
    <Menu.Item key="8">退出</Menu.Item>
  </Menu>
);

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      active: "home" //home articles collect
    };
  }

  changeActive(active) {
    this.setState({
      active
    });
    sessionStorage.setItem("active", active);
  }

  componentDidMount() {
    const logged = sessionStorage.getItem("logged");
    const active = sessionStorage.getItem("active") || "home";

    let state = {
      active
    };

    if (logged && logged === "1") {
      state = {
        ...state,
        logged: true
      };
    }

    this.setState(state);
  }

  render() {
    const { logged, active } = this.state;
    return (
      <div className={"nav nav-main header"}>
        <div className={" header-inner"}>
          <div className={"header-content"}>
            <div className={"header-left"}>
              <div className={"logo"}>
                <img src="https://www.freelogodesign.org/Content/img/logo-samples/bakary.png" alt="logo"></img>
              </div>
            </div>
            <div className="header-menu">
              <div
                onClick={() => {
                  this.changeActive("home");
                }}
                className={classnames({
                  "header-menu-item": true,
                  active: active === "home"
                })}
              >
                <Link href="/home">
                  <div>首页</div>
                </Link>
              </div>
              <div
                onClick={() => {
                  this.changeActive("collect");
                }}
                className={classnames({
                  "header-menu-item": true,
                  active: active === "collect"
                })}
              >
                <Link href="/articles">
                  <div>文章</div>
                </Link>
              </div>
              <div
                onClick={() => {
                  this.changeActive("articles");
                }}
                className={classnames({
                  "header-menu-item": true,
                  active: active === "articles"
                })}
              >
                <Link href="/books">
                  <div>书籍</div>
                </Link>
              </div>
            </div>

            {logged ? (
              <div className={"header-right"}>
                <Dropdown overlay={menu} trigger={["hover"]} placement="bottomCenter">
                  <div className={"avatar"}>
                    <img
                      src="https://images.xiaozhuanlan.com/photo/2019/2ad6384db0b94cd8e76d11194400df23.jpeg"
                      alt="avatar"
                    ></img>
                  </div>
                </Dropdown>
              </div>
            ) : null}

            {logged ? (
              <div className="header-btn">
                <Button type="danger" ghost shape="round" icon="edit" onClick={() => Router.push("/write")}>
                  写文章
                </Button>
              </div>
            ) : (
              <div className="header-btn">
                <Button type="danger" ghost shape="round" icon="edit" onClick={() => Router.push("/register")}>
                  注册
                </Button>
                <Button
                  type="primary"
                  style={{ marginLeft: "10px" }}
                  ghost
                  shape="round"
                  icon="edit"
                  onClick={() => Router.push("/login")}
                >
                  登录
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
