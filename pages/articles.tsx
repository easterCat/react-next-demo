import React, { Component } from "react";
import Layout from "../components/layout/MyLayout";
import { List, Avatar, Icon } from "antd";
import axios from "axios";
import classnames from "classnames";
import uuid from "react-uuid";
import Link from "next/link";
import { getAllArticles } from "../redux/actions";
import { connect } from "react-redux";
import moment from "moment";

interface IProps {
  router: object;
  shows: [];
  homeStore: object;
  articles: [];
  getAllArticles(): Promise<any[]>;
}
interface IState {
  loading: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  active: string;
}
interface IArticle {
  WriteID: number;
  Title: string;
  desciprtion: string;
  CreateTime: string;
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

  async componentDidMount() {
    await this.props.getAllArticles();
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
    const { articles } = this.props;

    return (
      <Layout>
        <div className="article">
          <div className="article-left">
            <div className="left-home-order">
              <span
                onClick={() => this.changeActive("hot")}
                className={classnames({ active: this.state.active === "hot" })}
              >
                热门排行
              </span>
              <i className="line"></i>
              <span
                onClick={() => this.changeActive("new")}
                className={classnames({ active: this.state.active === "new" })}
              >
                最新更新
              </span>
            </div>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 10
              }}
              dataSource={articles || []}
              renderItem={(item: IArticle) => (
                <Link href={`/article/${item.WriteID}`}>
                  <List.Item
                    key={uuid}
                    actions={[
                      <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                      <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                      <IconText type="message" text="2" key="list-vertical-message" />
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
                      avatar={
                        <Avatar src="data:image/jpeg;base64,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" />
                      }
                      title={
                        <span>
                          <span>{item.Title}</span>
                          <span style={{ marginLeft: "30px", color: "#ccc", fontSize: "12px" }}>
                            {moment(Number(item.CreateTime)).fromNow()}
                          </span>
                        </span>
                      }
                      description={<div dangerouslySetInnerHTML={{ __html: `${item.Title} desciprtion` }} />}
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

const mapStateToProps = (state: { articles: [] }) => {
  return { articles: state.articles };
};

export default connect(
  mapStateToProps,
  { getAllArticles }
)(Articles);
