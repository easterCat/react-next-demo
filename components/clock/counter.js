import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../../redux/actions";
import { Button } from "antd";

@connect(
  state => ({ count: state.count }),
  dispatch => bindActionCreators({ increment, decrement, reset }, dispatch)
)
class Counter extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <Button type="primary" onClick={increment}>
          当前counter +1
        </Button>
        <Button type="primary" onClick={decrement}>
          当前counter -1
        </Button>
        <Button type="primary" onClick={reset}>
          当前counter Reset
        </Button>
      </div>
    );
  }
}

export default Counter;
