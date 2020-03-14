import React, { Component } from 'react';
import Layout from '../../components/layout/MyLayout';
import ReactMarkdown from 'react-markdown';
import HeadingBlock from '../../components/markdown/HeadingBlock';
import { Affix, BackTop, Button, Comment, Icon, Tooltip, Avatar, Divider, Input, Skeleton, message } from 'antd';
import uuid from 'react-uuid';
import moment from 'moment';
import { withRouter } from 'next/router';
import { Connect } from '../../utils/Connect.js';
import CodeBlock from '../../components/markdown/CodeBlock';

const { TextArea } = Input;

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdown: '',
            menus: [],
            likes: 0,
            dislikes: 0,
            action: null,
            comments: [],
            submitting: false,
            SkeletonLoading: true,
            value: '',
            curArticleId: '',
        };
    }

    async componentDidMount() {
        const id = this.props.router.query.curArticleId;

        await this.props.getArticleById({
            id,
        });

        await this.props.findCommentByArticle({ id });

        this.setState({ SkeletonLoading: false, curArticleId: id }, () => {
            const linkArr = document.querySelectorAll('.markdown-body .quick-link');

            if (linkArr && linkArr.length > 0) {
                let menus = [];
                linkArr.forEach((item) => {
                    menus.push({
                        name: item.name,
                        level: item.getAttribute('level').replace(/^h/, ''),
                    });
                });
                this.setState({ menus });
            }
        });
    }

    renderStyle(level) {
        let style = {};
        style.marginLeft = `${10 * level}px`;
        Number(level) <= 2 ? (style.fontSize = '14px') : (style.fontSize = '10px');
        return style;
    }

    handleCommentChange = (value) => {
        this.setState({
            value,
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    handleCommentSubmit = async () => {
        const { postComment, user } = this.props;
        const { value, curArticleId } = this.state;

        const result = await postComment({
            articleId: curArticleId,
            content: value,
            replyUser: user.id,
            commentUser: user.id,
        });

        if (result.code === 200) {
            message.info(result.message);
            this.setState({ value: '' });
        } else {
            message.error(result.message);
        }
    };

    render() {
        const { article, comments } = this.props;
        const { menus, likes, dislikes, action, SkeletonLoading, value } = this.state;

        const actions = [
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon type="like" theme={action === 'liked' ? 'filled' : 'outlined'} onClick={this.like} />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
            </span>,
            <span key=' key="comment-basic-dislike"'>
                <Tooltip title="Dislike">
                    <Icon type="dislike" theme={action === 'disliked' ? 'filled' : 'outlined'} onClick={this.dislike} />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
            </span>,
            <span key="comment-basic-reply-to">回复</span>,
        ];

        return (
            <Layout>
                <div className="book-detail">
                    <div className="markdown-banner">
                        <img src={`http://172.18.234.34:6688/image/1000*300/CCFFFF/000000?text=${article && article.title}`} alt="banner" />
                    </div>
                    <div className="markdown">
                        <Skeleton loading={SkeletonLoading} paragraph={{ rows: 20 }} active>
                            <ReactMarkdown
                                className="markdown-body"
                                source={article && article.markdown}
                                renderers={{
                                    heading: HeadingBlock,
                                    code: CodeBlock,
                                }}
                            />
                        </Skeleton>
                        {/* 右侧快捷导航 */}
                        <div className="markdown-menu-outer">
                            <Affix offsetTop={30}>
                                <Skeleton loading={SkeletonLoading} paragraph={{ rows: 10 }} active>
                                    <div className="markdown-menu">
                                        <ul>
                                            {menus &&
                                                menus.map((item) => {
                                                    return (
                                                        <li key={uuid()} style={this.renderStyle(item.level)}>
                                                            <a name={item.name} href={`#${item.name}`}>
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                </Skeleton>
                            </Affix>
                        </div>
                    </div>
                    <div className="comment-list">
                        <Divider>评论</Divider>
                        {comments &&
                            comments.map((item) => {
                                return (
                                    <Comment
                                        actions={actions}
                                        author={<a>{item.authorId}</a>}
                                        avatar={<Avatar src="/avatar.png" alt="Han Solo" />}
                                        content={<p>{item.content}</p>}
                                        datetime={
                                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                                <span>{moment().fromNow()}</span>
                                            </Tooltip>
                                        }
                                    />
                                );
                            })}
                        <Divider>回复</Divider>
                        <TextArea
                            rows={4}
                            onChange={(e) => {
                                this.handleCommentChange(e.target.value);
                            }}
                            value={value}
                        />
                        <div className="btn-con">
                            <button className="btn-hover color" onClick={this.handleCommentSubmit}>
                                提交
                            </button>
                        </div>
                    </div>

                    <BackTop>
                        <Button type="primary" icon="arrow-up" alt="返回顶部" />
                    </BackTop>

                    <style jsx global>{`
                        .markdown a {
                            text-decoration: none;
                            color: blue;
                        }

                        .markdown a:hover {
                            opacity: 0.6;
                        }

                        .markdown-body {
                            width: 740px;
                            flex: 0 0 740px;
                        }
                    `}</style>

                    <style jsx>{`
                        .book-detail {
                            width: 1000px;
                            height: 100%;
                            margin: 0 auto;
                            padding: 30px 0;
                        }

                        .markdown {
                            display: flex;
                            justify-content: space-between;
                            font-family: 'Arial';
                            width: 1000px;
                            padding: 30px 0 30px 0;
                        }

                        .markdown-menu-outer {
                            width: 230px;
                            flex: 0 0 230px;
                            padding: 30px 0 30px 0;
                        }

                        .markdown-menu {
                            max-height: calc(100vh - 60px);
                            min-height: 30px;
                            overflow: auto;
                        }

                        .markdown-menu a {
                            color: #666;
                        }

                        .markdown-menu a:hover {
                            color: #1890ff;
                        }

                        .markdown-menu li {
                            list-style: disc;
                            font-weight: 600;
                            line-height: 28px;
                            cursor: pointer;
                        }

                        .markdown-banner {
                            width: 100%;
                        }

                        .markdown-banner img {
                            width: 100%;
                        }

                        .comment-list {
                            width: 750px;
                        }
                    `}</style>
                </div>
            </Layout>
        );
    }
}

export default Connect(['article', 'user', 'comments'], ['getArticleById', 'postComment', 'findCommentByArticle'], withRouter(Article));
