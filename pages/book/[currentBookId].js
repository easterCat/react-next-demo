import Layout from "../../components/layout/MyLayout";
import fetch from "isomorphic-unfetch";
import Markdown from "react-markdown";

const Post = props => (
  <Layout>
    <div className="book-detail">
      <h1>{props.show.name}</h1>
      <div className="markdown">
        <Markdown source={props.show.summary.replace(/<[/]?p>/g, "")} />
      </div>
      <img src={props.show.image.medium} />
      <style jsx global>{`
        .markdown {
          font-family: "Arial";
        }

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
      `}</style>
    </div>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { currentBookId } = context.ctx.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${currentBookId}`);
  const show = await res.json();
  return { show };
};

export default Post;
