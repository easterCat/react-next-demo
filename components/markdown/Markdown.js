import { Component } from "react";
import { Row, Col, Button, Dropdown, Form, Menu, Icon, Collapse, Input, List, Avatar } from "antd";
const { Panel } = Collapse;
import { connect } from "react-redux";
import { createCollect } from "../../redux/actions";
import Router from "next/router";

@connect(
  state => state,
  { createCollect }
)
class MDEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: []
    };

    this.smde = null;

    this.pickUpCollapse = () => {
      this.setState({ activeKey: [] });
    };

    this.collapseChange = key => {
      this.setState({ activeKey: key });
    };

    this.createCollect = () => {
      this.props.createCollect({
        collectName: "今天是个好日子"
      });
    };
  }

  async componentDidMount() {
    this.setState({ loading: false });

    const SimpleMDE = await import("simplemde");
    const marked = await import("marked");
    const hljs = await import("highlight.js");

    document
      .getElementById("markdownEditor")
      .parentNode // 获取编辑器container
      .addEventListener("click", e => e.stopPropagation());

    this.smde = new SimpleMDE.default({
      element: document.getElementById("markdownEditor").childElementCount,
      autofocus: true,
      autosave: true,
      initialValue: "",
      indentWithTabs: false,
      placeholder: "## 请输入内容......",
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true
      },
      insertTexts: {
        horizontalRule: ["", "\n\n-----\n\n"],
        image: ["![](http://", ")"],
        link: ["[", "](http://)"],
        table: [
          "",
          "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"
        ]
      },
      previewRender: function(plainText) {
        return marked.default(plainText, {
          renderer: new marked.default.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function(code) {
            return hljs.default.highlightAuto(code).value;
          }
        });
      },
      spellChecker: false
    });
    // SimpleMDE.toggleFullScreen(this.smde);
    // SimpleMDE.toggleSideBySide(this.smde);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { activeKey } = this.state;

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            修改文集
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            删除文集
          </a>
        </Menu.Item>
      </Menu>
    );

    const data = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires."
    ];

    return (
      <>
        <Row style={{ height: "100%", overflow: "hidden" }}>
          <Col span={4} className="collect-list">
            <div className="back-btn">
              <Button
                type="danger"
                block
                ghost
                onClick={() => {
                  Router.push("/home");
                }}
              >
                回首页
              </Button>
            </div>
            <Collapse
              expandIconPosition="left"
              activeKey={activeKey}
              onChange={this.collapseChange}
              expandIcon={panelProps => <Icon type="plus" />}
            >
              <Panel header="新建文集" key="one">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Form.Item>{getFieldDecorator("collectName")(<Input placeholder="请输入文集名称" />)}</Form.Item>{" "}
                  <Button
                    type="primary"
                    htmlType="submit"
                    type="danger"
                    ghost
                    size="small"
                    onClick={this.createCollect}
                  >
                    提交
                  </Button>
                  <Button style={{ marginLeft: "5px" }} type="dashed" ghost size="small" onClick={this.pickUpCollapse}>
                    取消
                  </Button>
                </Form>
              </Panel>
            </Collapse>
            <Menu onClick={this.handleClick} mode="inline">
              <Menu.Item key="1">
                <Dropdown overlay={menu} placement="bottomRight" trigger={["click", "contextMenu"]}>
                  <Icon type="setting" />
                </Dropdown>
                是否允许多选
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="setting" />
                当前展开的 SubMenu 菜单项 key 数组
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="setting" />
                是否允许选中
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={5} className="article-list">
            <List
              size="large"
              header={
                <div>
                  <Icon type="plus-circle" theme="filled" style={{ marginRight: "8px" }} />
                  新建文章
                </div>
              }
              footer={
                <div>
                  <Icon type="plus-circle" theme="filled" style={{ marginRight: "8px" }} />
                  在下方新建文章
                </div>
              }
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="data:image/png;base64,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" />
                    }
                    title={item}
                    description={item}
                  />
                  <div>
                    <Icon type="setting" />
                  </div>
                </List.Item>
              )}
            />
          </Col>
          <Col span={15} className="markdown-area">
            <div id="editorContaienr" className="markdown-body">
              <textarea id="markdownEditor"></textarea>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

const WrapperMDEditor = Form.create({ name: "normal_login" })(MDEditor);
export default WrapperMDEditor;
