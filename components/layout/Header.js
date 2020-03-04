import React, { Component } from "react";
import classnames from "classnames";
import Link from "next/link";
import Router from "next/router";
import cookies from "../../utils/cookie.js";
import { connect } from "react-redux";
import { logged } from "../../redux/user/user.action";
import { Menu, Button, Icon, Dropdown } from "antd";

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link href="/user">
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

@connect(
    ({ user }) => {
        return { user };
    },
    { logged }
)
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userLoading: false,
            active: "" //home articles collect
        };
    }

    changeActive(active) {
        this.setState({
            active
        });
        sessionStorage.setItem("active", active);
    }

    async componentDidMount() {
        const token = cookies.getItem("ptg-token");
        if (!token) {
            Router.push({
                pathname: "/login"
            });
            return cookies.removeItem("ptg-token");
        } else {
            const active = sessionStorage.getItem("active") || "home";
            this.setState({ active, userLoading: true });
        }
    }

    render() {
        const { active, userLoading } = this.state;
        const { user } = this.props;
        console.log("user :", user);
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

                        {userLoading && user && user.name !== "" ? <div className={"header-name"}>{user.name}</div> : null}

                        {userLoading && user && user.name !== "" ? (
                            <div className={"header-right"}>
                                <Dropdown overlay={menu} trigger={["hover"]} placement="bottomCenter">
                                    <div className={"avatar"}>
                                        <img src="/static/avatar.png" alt="avatar"></img>
                                    </div>
                                </Dropdown>
                            </div>
                        ) : null}

                        {userLoading && user && user.name !== "" ? (
                            <div className="header-btn">
                                <Button type="danger" ghost shape="round" icon="edit" onClick={() => Router.push("/write")}>
                                    写文章
                                </Button>
                            </div>
                        ) : null}

                        {userLoading && (!user || user.name === "") ? (
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
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}
