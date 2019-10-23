import React from "react";
import Layout from "../components/layout/MyLayout";
import { connect } from "react-redux";
import { startClock, tickClock } from "../redux/actions";
import Page from "../components/clock/page";

class Other extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return (
      <Layout>
        <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
      </Layout>
    );
  }
}

export default connect()(Other);
