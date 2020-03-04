import React, { Component, Fragment } from "react";
import Link from "next/link";
import Layout from "../components/layout/MyLayout";
import { Button, Avatar } from "antd";
import axios from "axios";
import classnames from "classnames";
import uuid from "react-uuid";

interface IProps {
    router: object;
    shows: [];
    homeStore: object;
}

interface IState {
    loading: boolean;
    loadingMore: boolean;
    hasMore: boolean;
    active: string;
}

interface IItem {
    id: number;
    url: string;
    name: string;
    summary: string;
    premiered: string;
    image: {
        medium: string;
        original: string;
    };
}

class Books extends Component<IProps, IState> {
    static async getInitialProps() {
        const res: { data: any[] } = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
        const data = res.data;
        return {
            shows: data.map((item: { show: object }): object => item.show)
        };
    }

    public state = {
        loading: true,
        active: "hot", // hot or new
        loadingMore: false,
        hasMore: true
    };

    componentDidMount() {
        if (this.props && this.props.shows) {
            this.setState({
                loading: false
            });
        }
    }

    public changeActive(active: string) {
        this.setState({
            active
        });
    }

    render() {
        const { shows } = this.props;
        return (
            <Layout>
                <div>
                    <div className="books-banner">
                        <img src="/static/images/banner.jpg" alt="banner" />
                    </div>
                    <div className="books">
                        <div className="books-left">
                            <div className="left-home-order">
                                <span
                                    onClick={() => this.changeActive("hot")}
                                    className={classnames({ active: this.state.active === "hot" })}
                                >
                                    推荐书籍
                                </span>
                                <i className="line"></i>
                                <span
                                    onClick={() => this.changeActive("new")}
                                    className={classnames({ active: this.state.active === "new" })}
                                >
                                    我购买的书籍
                                </span>
                            </div>
                            <ul className="books-list">
                                {shows.map((item: IItem) => {
                                    return (
                                        <Fragment key={uuid()}>
                                            <Link href={`/book/${item.id}`}>
                                                <li className="books-item">
                                                    <div className="books-item-left">
                                                        <img
                                                            src="data:image/jpeg;base64,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"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="books-item-right">
                                                        <div className="books-item-name">我未完成的问题</div>
                                                        <div className="books-item-desc">
                                                            通过实践快速上手 SwiftUI 及 Combine 响应式编程框架，掌握下一代客户端 UI
                                                            开发技术。 WWDC 2019 上 Apple 公布了声明式全新界面框架
                                                            SwiftUI，以及配套的响应式编程框架 Combine。对于 Apple
                                                            平台的开发者来说，这是一次全新的转变和挑战。本书通过几个具体的实战例子，由浅入深介绍了
                                                            SwiftUI 和 Combine 框架的使用方式及核心思想，帮助您顺利步入令人激动的 Apple
                                                            开发新时代。
                                                        </div>
                                                        <div className="books-item-avatar">
                                                            <Avatar
                                                                size={20}
                                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                            />
                                                            <span> 郭富城</span>
                                                        </div>
                                                        <div className="books-item-read">
                                                            <Button type="danger" shape="round">
                                                                阅读
                                                            </Button>
                                                        </div>
                                                        <div className="books-item-price">
                                                            <span>¥ 19.9</span>
                                                            <span>14 章节 · 222 人购买</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </Link>
                                        </Fragment>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Books;
