import React, { Component } from "react";
import Layout from "../components/MyLayout";
import { withRouter } from "next/router";
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("../components/Editor"), { ssr: false });

interface IProps {
  router: object;
  shows: [];
  homeStore: object;
}

interface IState {
  showEditor: boolean;
}

class Write extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public state = {
    showEditor: true
  };

  componentDidMount() {}

  render() {
    return (
      <Layout>
        <div>{this.state.showEditor ? <DynamicEditor></DynamicEditor> : null}</div>
      </Layout>
    );
  }
}

export default Write;
