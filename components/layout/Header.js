import React, { Component } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import Router from 'next/router';
import cookies from '../../utils/cookie.js';
import { connect } from 'react-redux';
import { logged } from '../../redux/user/user.action';
import { Menu, Button, Icon, Dropdown } from 'antd';

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
                    我的文章
                </div>
            </Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link href="/books">
                <div>
                    <Icon type="book" />
                    我的文集
                </div>
            </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="7">我的设置</Menu.Item>
        <Menu.Item key="8">退出</Menu.Item>
    </Menu>
);

@connect(
    ({ user }) => {
        return { user };
    },
    { logged },
)
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userLoading: false,
            active: '', // home articles collect book
        };
    }

    changeActive(active) {
        this.setState({
            active,
        });
        sessionStorage.setItem('active', active);
    }

    async componentDidMount() {
        const token = cookies.getItem('ptg-token');
        if (!token) {
            Router.push({
                pathname: '/login',
            });
            return cookies.removeItem('ptg-token');
        } else {
            const active = sessionStorage.getItem('active') || 'home';
            this.setState({ active, userLoading: true });
        }
    }

    render() {
        const { active, userLoading } = this.state;
        const { user } = this.props;

        return (
            <div className={'nav nav-main header'}>
                <div className={' header-inner'}>
                    <div className={'header-content'}>
                        <div className={'header-left'}>
                            <div className={'logo'}>
                                <img src="https://www.freelogodesign.org/Content/img/logo-samples/bakary.png" alt="logo"></img>
                            </div>
                        </div>
                        <div className="header-menu">
                            <div
                                onClick={() => {
                                    this.changeActive('home');
                                }}
                                className={classnames({
                                    'header-menu-item': true,
                                    active: active === 'home',
                                })}
                            >
                                <Link href="/home">
                                    <div>首页</div>
                                </Link>
                            </div>
                            <div
                                onClick={() => {
                                    this.changeActive('articles');
                                }}
                                className={classnames({
                                    'header-menu-item': true,
                                    active: active === 'articles',
                                })}
                            >
                                <Link href="/articles">
                                    <div>文章</div>
                                </Link>
                            </div>
                            <div
                                onClick={() => {
                                    this.changeActive('collects');
                                }}
                                className={classnames({
                                    'header-menu-item': true,
                                    active: active === 'collects',
                                })}
                            >
                                <Link href="/collects">
                                    <div>文集</div>
                                </Link>
                            </div>
                            <div
                                onClick={() => {
                                    this.changeActive('books');
                                }}
                                className={classnames({
                                    'header-menu-item': true,
                                    active: active === 'books',
                                })}
                            >
                                <Link href="/books">
                                    <div>书籍</div>
                                </Link>
                            </div>
                        </div>

                        {userLoading && user && user.name !== '' ? <div className={'header-name'}>{user.name}</div> : null}

                        {userLoading && user && user.name !== '' ? (
                            <div className={'header-right'}>
                                <Dropdown overlay={menu} trigger={['hover']} placement="bottomCenter">
                                    <div className={'avatar'}>
                                        <img src="/avatar.png" alt="avatar"></img>
                                    </div>
                                </Dropdown>
                            </div>
                        ) : null}

                        {userLoading && user && user.name !== '' ? (
                            <div className="header-btn">
                                <Button type="danger" ghost shape="round" icon="edit" onClick={() => Router.push('/write')}>
                                    写文章
                                </Button>
                            </div>
                        ) : null}

                        {userLoading && (!user || user.name === '') ? (
                            <div className="header-btn">
                                <Button type="danger" ghost shape="round" icon="edit" onClick={() => Router.push('/register')}>
                                    注册
                                </Button>
                                <Button
                                    type="primary"
                                    style={{ marginLeft: '10px' }}
                                    ghost
                                    shape="round"
                                    icon="edit"
                                    onClick={() => Router.push('/login')}
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
