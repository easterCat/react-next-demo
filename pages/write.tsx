import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/layout/MyLayout";
import dynamic from "next/dynamic";
import { Row, Col, Button } from "antd";

const DynamicEditor = dynamic(() => import("./editor"), { ssr: false });
const DynamicMarkdown = dynamic(() => import("./markdown"), { ssr: false });

interface IProps {
  router: object;
  shows: [];
  homeStore: object;
}

interface IState {
  showEditor: string;
}

class Write extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public state = {
    showEditor: "button"
  };

  public changeShowEditor(showEditor: string): void {
    this.setState({
      showEditor
    });
  }

  render() {
    const { showEditor } = this.state;
    return (
      <Layout>
        <style jsx global>{`
          .write-content {
            width: 100%;
          }

          .write-content .ant-col {
            text-align: center;
            margin-top: 200px;
          }
        `}</style>
        <div className="write-content">
          {showEditor === "button" ? (
            <Row type="flex">
              <Col lg={{ span: 6, offset: 6 }}>
                <Link href="editor">
                  <Button size="large" onClick={() => this.changeShowEditor("editor")}>
                    富文本编辑器
                  </Button>
                </Link>
              </Col>
              <Col lg={{ span: 6 }}>
                <Link href="markdown">
                  <Button size="large" onClick={() => this.changeShowEditor("markdown")}>
                    Markdown编辑器
                  </Button>
                </Link>
              </Col>
            </Row>
          ) : null}

          <div>{showEditor === "editor" ? <DynamicEditor></DynamicEditor> : null}</div>
          <div>{showEditor === "markdown" ? <DynamicMarkdown></DynamicMarkdown> : null}</div>
        </div>
      </Layout>
    );
  }
}

export default Write;
