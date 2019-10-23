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
          <Icon type="user" />
          我的主页
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link href="/article">
        <div>
          <Icon type="user" />
          我的专辑
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/about">
        <div>
          <Icon type="user" />
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
      active: "home" //home article collect
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
                  active: this.state.active === "home"
                })}
              >
                <Link href="/">
                  <a>首页</a>
                </Link>
              </div>
              <div
                onClick={() => {
                  this.changeActive("collect");
                }}
                className={classnames({
                  "header-menu-item": true,
                  active: this.state.active === "collect"
                })}
              >
                <Link href="/article">
                  <a>专辑</a>
                </Link>
              </div>
              <div
                onClick={() => {
                  this.changeActive("article");
                }}
                className={classnames({
                  "header-menu-item": true,
                  active: this.state.active === "article"
                })}
              >
                <Link href="/books">
                  <a>书籍</a>
                </Link>
              </div>
            </div>

            <div className={"header-right"}>
              <Dropdown overlay={menu} trigger={["click"]} placement="bottomCenter">
                <div className={"avatar"}>
                  <img
                    src="https://images.xiaozhuanlan.com/photo/2019/2ad6384db0b94cd8e76d11194400df23.jpeg"
                    alt="avatar"
                  ></img>
                </div>
              </Dropdown>
            </div>

            <div className="header-btn">
              <Button type="danger" ghost shape="round" icon="edit" onClick={() => Router.push("/write")}>
                写文章>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
