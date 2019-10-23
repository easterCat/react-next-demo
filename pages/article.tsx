import React, { Component } from "react";
import Layout from "../components/layout/MyLayout";
import { List, Avatar, Icon } from "antd";
import axios from "axios";
import classnames from "classnames";
import uuid from "react-uuid";
import Link from "next/link";

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
interface IRes {
  data: [];
}
interface IItem {
  show: object;
}
interface IK {
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

class Article extends Component<IProps, IState> {
  static async getInitialProps() {
    const res: IRes = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
    const data = res.data;
    return {
      shows: data.map((item: IItem): object => item.show)
    };
  }

  public state = {
    loading: true,
    active: "hot", // hot or new
    loadingMore: false,
    hasMore: true
  };

  constructor(props: IProps) {
    super(props);
  }

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
              dataSource={this.props.shows}
              renderItem={(item: IK) => (
                <Link href={`/book/${item.id}`}>
                  <List.Item
                    key={item.summary}
                    actions={[
                      <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                      <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                      <IconText type="message" text="2" key="list-vertical-message" />
                    ]}
                    extra={
                      <img
                        width={272}
                        height={168}
                        alt="logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGh4jXHhv9fgI7hMGZhagHHz1fyIal1dhOORMXya2RtzTQbPneg"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar size={48} src={item.image.medium} />}
                      title={<a href={item.url}>{item.name}</a>}
                      description={<div dangerouslySetInnerHTML={{ __html: item.premiered }} />}
                    />
                    {<div dangerouslySetInnerHTML={{ __html: item.summary.slice(0, 90) + "..." }} />}
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
                  {this.props.shows.map((item: IK) => {
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

export default Article;
