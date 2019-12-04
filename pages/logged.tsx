import React, { Component } from "react";
import Layout from "../components/layout/MyLayout";
import { login } from "../redux/actions";
import { connect } from "react-redux";
import queryString from "query-string";
import Cookies from "js-cookie";
import { Result, Button } from "antd";
import Link from "next/link";
import uuid from "react-uuid";

interface IProps {
  login(arg: { name: any }): Promise<any[]>;
  user: any;
}
interface IState {
  loginStatus: boolean;
  loading: boolean;
}

class Logged extends Component<IProps, IState> {
  public state = {
    loginStatus: false,
    loading: false
  };

  public async componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    const result: any = await this.props.login({ name: parsed.name });
    Cookies.set("ptg-token", result.token || "");

    this.setState({
      loginStatus: true,
      loading: true
    });
  }

  render() {
    const { user } = this.props;
    return (
      <Layout>
        {this.state.loading ? (
          <>
            {this.state.loginStatus ? (
              <Result
                status="success"
                title={`欢迎您!亲爱的${user ? user.name : ""}`}
                subTitle="既然来了，就不要走了，这里或许这就是休息的地带."
                extra={[
                  <Link key={uuid()} href="/home">
                    <Button type="primary">去首页</Button>
                  </Link>
                ]}
              />
            ) : (
              <Result
                status="warning"
                title={`请登录`}
                subTitle="既然来了，就不要走了，这里或许这就是休息的地带."
                extra={[
                  <Link key={uuid()} href="/home">
                    <Button type="primary">去首页</Button>
                  </Link>
                ]}
              />
            )}
          </>
        ) : null}
      </Layout>
    );
  }
}

const mapStateToProps = (state: { user: any }) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { login })(Logged);
