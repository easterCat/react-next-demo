import React, { Component } from "react";
import Layout from "../../components/layout/MyLayout";
import Markdown from "react-markdown";
import { getArticleById } from "../../redux/actions";
import { connect } from "react-redux";
import HeadingBlock from "../../components/markdown/HeadingBlock";

@connect(
  ({ article }) => {
    return { article };
  },
  { getArticleById }
)
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      menus: []
    };
  }

  async componentDidMount() {
    await this.props.getArticleById({ id: 3 });
    console.log(
      'document.querySelectorAll(".markdown-body .quick-link") :',
      document.querySelectorAll(".markdown-body .quick-link")
    );

    const linkArr = document.querySelectorAll(".markdown-body .quick-link");
    if (linkArr && linkArr.length > 0) {
      let menus = [];
      linkArr.forEach(item => {
        menus.push({
          name: item.name,
          level: item.getAttribute("level")
        });
      });
      this.setState({ menus });
    }
  }

  render() {
    const { article } = this.props;

    return (
      <Layout>
        <div className="book-detail">
          <div className="markdown-banner">
            <img src="../../static/images/article-banner.jpeg" alt="banner" />
          </div>
          <div className="markdown markdown-body">
            <Markdown
              source={article && article.data.markdown}
              renderers={{
                heading: HeadingBlock
              }}
            />
          </div>
          <div className="markdown-menu"></div>
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
              width: 670px;
              padding: 30px 0 30px 0;
            }

            .markdown-menu {
              float: right;
              padding: 30px 0 30px 0;
              width: 230px;
              max-height: calc(100vh - 60px);
              min-height: 30px;
              overflow: auto;
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

export default Book;
