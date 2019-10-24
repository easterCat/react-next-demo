import React, { Component } from "react";
import { Button } from "antd";
import Markdown from "react-markdown/with-html";

let editor = undefined;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMask: false,
      source: ""
    };

    this.showPreview = () => {
      this.setState({
        showMask: true,
        source: editor.txt.text()
      });
    };
  }

  async componentDidMount() {
    const wangeditor = await import("wangeditor");

    editor = new wangeditor(this.refs.Editor);
    editor.create();
  }

  render() {
    return (
      <div className="editor-content">
        <div ref="Editor" />

        <div className="preview">
          <Button size="small" shape="round" onClick={this.showPreview}>
            预览
          </Button>
        </div>
        {this.state.showMask ? (
          <div className="mask">
            <div className="markdown-content">
              <div className="markdown-text">
                {/* <div dangerouslySetInnerHTML={{ __html: this.state.source }}></div> */}
                <Markdown source={""} escapeHtml={false} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Index;
