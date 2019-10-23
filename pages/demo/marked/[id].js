import React, { Component } from "react";
import withPost from "../../../lib/with-post";
import { withRouter } from "next/router";

const data = {
  title: "Deploy apps with ZEIT now",
  content: `
          Deploying apps to ZEIT now is pretty easy.
          Simply run the following command from your app root:
          ~~~bash
          npm i -g now # one time command
          now
          ~~~
        `
};

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.renderMarkdown(this.props.router.query.id)}</div>;
  }
}

Post = withRouter(Post);
Post = withPost(Post, data);
export default Post;
