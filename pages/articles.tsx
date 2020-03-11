import React, { Component } from 'react';
import Layout from '../components/layout/MyLayout';
import { List, Avatar, Icon } from 'antd';
import axios from 'axios';
import classnames from 'classnames';
import uuid from 'react-uuid';
import Link from 'next/link';
import { Connect } from '../utils/Connect.js';
import moment from 'moment';

interface IProps {
    router: object;
    shows: [];
    homeStore: object;
    articles: [];
    getAllArticles: Function;
}
interface IState {
    loading: boolean;
    loadingMore: boolean;
    hasMore: boolean;
    active: string;
}
interface IArticle {
    id: number;
    title: string;
    desciprtion: string;
    createTime: string;
    view: number;
    favorite: number;
    like: number;
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

const IconText = ({ type, text }: { type: string; text: string }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class Articles extends Component<IProps, IState> {
    static async getInitialProps() {
        const res: { data: any[] } = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
        const data = res.data;
        return {
            shows: data.map((item: { show: object }): object => item.show),
        };
    }

    public state = {
        loading: true,
        active: 'hot', // hot or new
        loadingMore: false,
        hasMore: true,
    };

    async componentDidMount() {
        await this.props.getAllArticles();
        if (this.props && this.props.shows) {
            this.setState({
                loading: false,
            });
        }
    }

    public changeActive(active: string) {
        this.setState({
            active,
        });
    }

    render() {
        const { articles } = this.props;

        return (
            <Layout>
                <div className="article">
                    <div className="article-left">
                        <div className="left-home-order">
                            <span onClick={() => this.changeActive('hot')} className={classnames({ active: this.state.active === 'hot' })}>
                                热门排行
                            </span>
                            <i className="line"></i>
                            <span onClick={() => this.changeActive('new')} className={classnames({ active: this.state.active === 'new' })}>
                                最新更新
                            </span>
                        </div>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                pageSize: 12,
                            }}
                            dataSource={articles || []}
                            renderItem={(item: IArticle) => (
                                <Link href={`/article/${item.id}`}>
                                    <List.Item
                                        key={uuid}
                                        actions={[
                                            <IconText type="eye" text={item.view + ''} key="list-vertical-star-o" />,
                                            <IconText type="star-o" text={item.favorite + ''} key="list-vertical-star-o" />,
                                            <IconText type="like-o" text={item.like + ''} key="list-vertical-like-o" />,
                                            <IconText type="message" text="2" key="list-vertical-message" />,
                                        ]}
                                        extra={
                                            <img
                                                width={152}
                                                alt="logo"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                            />
                                        }
                                    >
                                        <List.Item.Meta
                                            avatar={<Avatar src={`/avatar/75X75/gs (${parseInt(Math.random() * 733 + '')}).gif`} />}
                                            title={
                                                <span className="article-title">
                                                    <span>{item.title}</span>
                                                    <span style={{ marginLeft: '30px', color: '#ccc', fontSize: '12px' }}>
                                                        {moment(Number(item.createTime)).fromNow()}
                                                    </span>
                                                </span>
                                            }
                                            description={<div dangerouslySetInnerHTML={{ __html: `${item.title} desciprtion` }} />}
                                        />
                                    </List.Item>
                                </Link>
                            )}
                        />
                    </div>
                    <div className="article-right">
                        <div className="tag">
                            {/* <div className="recommend-header item-header">
								<div className="recommend-title title">文章推荐</div>
								<div className="recommend-more more" onClick={() => {}}>
									查看更多 >
								</div>
							</div> */}
                            <div className="tag-content">
                                <ul>
                                    {this.props.shows.map((item: IItem) => {
                                        return (
                                            <li key={uuid()}>
                                                <img src={item.image.medium} alt="" />
                                                <div className="name">{item.name.slice(0, 10)}</div>
                                                <div className="num">111</div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Connect(['articles'], ['getAllArticles'], Articles);
