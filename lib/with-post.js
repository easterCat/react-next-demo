import Layout from "../components/MyLayout";
import dynamic from "next/dynamic";
import marked from "marked";

const Highlight = dynamic(() => import("react-highlight"));

marked &&
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true
  });

function WithPost(InnerComponent, options) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.renderMarkdown = this.renderMarkdown.bind(this);
    }

    renderMarkdown(id) {
      // If a code snippet contains in the markdown content
      // then use Highlight component
      if (id === 1 || id === "1") {
        return (
          <Layout>
            <h1>{options.title}</h1>
            <h3>当前id=>{id}</h3>
            <div className="markdown">
              <Highlight innerHTML>{marked(options.content)}</Highlight>
            </div>
          </Layout>
        );
      }

      // If not, simply render the generated HTML from markdown
      return (
        <Layout>
          <h1>{options.title}</h1>
          <h3>当前id=>{id}</h3>
          <div className="markdown">
            <div dangerouslySetInnerHTML={{ __html: marked(options.content) }} />
          </div>
        </Layout>
      );
    }

    render() {
      return <InnerComponent renderMarkdown={this.renderMarkdown}></InnerComponent>;
    }
  };
}

export default WithPost;
