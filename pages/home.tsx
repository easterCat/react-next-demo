import React, { Component } from "react";
import Layout from "../components/layout/MyLayout";
import { Button, Tag, List, Avatar, Icon } from "antd";
import axios from "axios";
import classnames from "classnames";
import uuid from "react-uuid";
import moment from "moment";

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

const IconText = ({ type, text }: any) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Index extends Component<IProps, IState> {
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
        <div className="home">
          <div className="left-home">
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
                <List.Item
                  key={item.summary}
                  actions={[
                    <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                    <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                    <IconText type="message" text="2" key="list-vertical-message" />
                  ]}
                  extra={
                    <img
                      width={232}
                      alt="logo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGh4jXHhv9fgI7hMGZhagHHz1fyIal1dhOORMXya2RtzTQbPneg"
                    />
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar size={48} src={item.image.medium} />}
                    title={
                      <span>
                        <span>{item.name}</span>
                        <span style={{ marginLeft: "30px", color: "#ccc", fontSize: "12px" }}>
                          {moment().fromNow()}
                        </span>
                      </span>
                    }
                    description={<div dangerouslySetInnerHTML={{ __html: item.premiered }} />}
                  />
                  {<div dangerouslySetInnerHTML={{ __html: item.summary.slice(0, 90) + "..." }} />}
                </List.Item>
              )}
            />
          </div>
          <div className="right-home">
            <div className="recommend">
              <div className="recommend-header item-header">
                <div className="recommend-title title">文章推荐</div>
                <div className="recommend-more more" onClick={() => {}}>
                  查看更多 >
                </div>
              </div>
              <div className="recommend-content">
                <List
                  itemLayout="horizontal"
                  dataSource={this.props.shows.slice(0, 4)}
                  renderItem={(item: IK) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            shape="square"
                            size={48}
                            src="https://images.xiaozhuanlan.com/photo/2019/57505071975c32af6b89a68abd2d3be6.png"
                          />
                        }
                        title={<a href="https://ant.design">Java面试进阶指南</a>}
                        description="一份 Java 程序员必备的面试进阶指南"
                      />
                    </List.Item>
                  )}
                />
              </div>
            </div>

            <div className="author">
              <div className="author-header item-header">
                <div className="author-title title">关注作者</div>
                <div className="author-more more" onClick={() => {}}>
                  查看更多 >
                </div>
              </div>
              <div className="author-content">
                <List
                  itemLayout="horizontal"
                  dataSource={this.props.shows.slice(0, 4)}
                  renderItem={(item: IK) => (
                    <List.Item
                      actions={[
                        <Button type="danger" ghost size="small" shape="round">
                          {"关注"}
                        </Button>
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            size={48}
                            src="https://images.xiaozhuanlan.com/photo/2018/a2c66d38537fd015e7cdb3623936caf2."
                          />
                        }
                        title={<a href="https://ant.design">大作家</a>}
                        description="33 人关注"
                      />
                    </List.Item>
                  )}
                />
              </div>

              <div className="tag">
                <div className="item-header">
                  <div className="title">热门标签</div>
                  <div className="more" onClick={() => {}}>
                    查看更多 >
                  </div>
                </div>
                <div className="tag-content">
                  {Array(100)
                    .fill(0)
                    .map((item, index) => {
                      return (
                        <Tag key={uuid()} style={{ marginBottom: "10px" }}>
                          Tag 1
                        </Tag>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
