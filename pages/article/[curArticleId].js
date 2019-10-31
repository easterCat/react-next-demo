import React, { Component } from "react";
import Layout from "../../components/layout/MyLayout";
import Markdown from "react-markdown";
import { getArticleById } from "../../redux/actions";
import { connect } from "react-redux";
import HeadingBlock from "../../components/markdown/HeadingBlock";
import { Affix, BackTop, Button, Comment, Icon, Tooltip, Avatar, Divider, Form, Input, Skeleton } from "antd";
import uuid from "react-uuid";
import moment from "moment";
import Router, { withRouter } from "next/router";

const { TextArea } = Input;

@connect(
  ({ article }) => {
    return { article };
  },
  { getArticleById }
)
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      menus: [],
      likes: 0,
      dislikes: 0,
      action: null,
      comments: [],
      submitting: false,
      value: "",
      SkeletonLoading: true
    };

    this.like = () => {
      this.setState({
        likes: 1,
        dislikes: 0,
        action: "liked"
      });
    };

    this.dislike = () => {
      this.setState({
        likes: 0,
        dislikes: 1,
        action: "disliked"
      });
    };

    this.handleSubmit = () => {
      if (!this.state.value) {
        return;
      }
    };
  }

  async componentDidMount() {
    await this.props.getArticleById({ id: this.props.router.query.curArticleId });

    this.setState({ SkeletonLoading: false }, () => {
      const linkArr = document.querySelectorAll(".markdown-body .quick-link");

      if (linkArr && linkArr.length > 0) {
        let menus = [];
        linkArr.forEach(item => {
          menus.push({
            name: item.name,
            level: item.getAttribute("level").replace(/^h/, "")
          });
        });
        this.setState({ menus });
      }
    });
  }

  renderStyle(level) {
    let style = {};
    style.marginLeft = `${10 * level}px`;
    Number(level) <= 2 ? (style.fontSize = "14px") : (style.fontSize = "10px");
    return style;
  }

  render() {
    const { article } = this.props;
    const { menus, likes, dislikes, action, submitting, value, SkeletonLoading } = this.state;

    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon type="like" theme={action === "liked" ? "filled" : "outlined"} onClick={this.like} />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon type="dislike" theme={action === "disliked" ? "filled" : "outlined"} onClick={this.dislike} />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Reply to</span>
    ];

    const Editor = ({ onChange, onSubmit, submitting, value }) => (
      <div>
        <Form.Item>
          <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Add Comment
          </Button>
        </Form.Item>
      </div>
    );

    return (
      <Layout>
        <div className="book-detail">
          <div className="markdown-banner">
            <img src="../../static/images/article-banner.jpg" alt="banner" />
          </div>
          <div className="markdown ">
            <Skeleton loading={SkeletonLoading} paragraph={{ rows: 20 }} active>
              <Markdown
                className="markdown-body"
                source={article && article.markdown}
                renderers={{
                  heading: HeadingBlock
                }}
              />
            </Skeleton>
            <Divider>评论</Divider>
            <Comment
              actions={actions}
              author={<a>诶嘿嘿</a>}
              avatar={
                <Avatar
                  src="data:image/jpeg;base64,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"
                  alt="Han Solo"
                />
              }
              content={
                <p>
                  红勤奋学习，每天手不释卷，看见优美的文章，总是目不转睛地盯着看，因此她的学习成绩在班上遥遥领先，常常受到老师的夸奖.
                </p>
              }
              datetime={
                <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
            <Divider>回复</Divider>
            <Comment
              avatar={
                <Avatar
                  src="https://images.xiaozhuanlan.com/photo/2019/2ad6384db0b94cd8e76d11194400df23.jpeg"
                  alt="Han Solo"
                />
              }
              content={
                <Editor
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={value}
                />
              }
            />
          </div>

          {/* 右侧快捷导航 */}
          <div className="markdown-menu-outer">
            <Affix offsetTop={30}>
              <Skeleton loading={SkeletonLoading} paragraph={{ rows: 10 }} active>
                <div className="markdown-menu">
                  <ul>
                    {menus &&
                      menus.map(item => {
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

            .markdown h3 {
              margin: 0;
              padding: 0;
              text-transform: uppercase;
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
              float: left;
              font-family: "Arial";
              width: 750px;
              padding: 30px 0 30px 0;
            }

            .markdown-menu-outer {
              float: right;
              width: 230px;
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
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Article);
