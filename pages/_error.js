import React from "react";
import Link from "next/link";
import { Result, Button } from "antd";
import uuid from "react-uuid";

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  goBack = () => {
    window.history.back(-1);
  };

  render() {
    return (
      <div className="container">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={[
            <Button key={uuid()} onClick={this.goBack}>
              返回上一步
            </Button>,
            <Link key={uuid()} href="/">
              <Button type="primary">回首页</Button>
            </Link>
          ]}
        />
      </div>
    );
  }
}
