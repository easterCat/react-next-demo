import { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Button, Dropdown, Form, Menu, Icon, Collapse, Input, message, List, Avatar, Modal } from 'antd';
import {
    getAllArticles,
    createNewArticle,
    getAllCollects,
    createNewCollect,
    getArticleById,
    getArticleByCollectId,
    updateArticleById,
    deleteArticleById,
    updateCollectById,
    deleteCollectById,
} from '../../redux/articles/articles.action';

const { Panel } = Collapse;

@connect(
    ({ article, articles, collects, user }) => {
        return { article, articles, collects, user };
    },
    {
        createNewCollect,
        getAllArticles,
        getAllCollects,
        getArticleById,
        createNewArticle,
        updateArticleById,
        getArticleByCollectId,
        deleteArticleById,
        updateCollectById,
        deleteCollectById,
    },
)
class MDEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curSelectArticleId: '',
            curCollectId: '',
            activeKey: [],
            visible: false,
            modelTitle: '',
            articleTitle: '',
            collectMenuSelectedKeys: ['1'],
            curArticle: {},
        };

        this.smde = null;

        this.getNameChange = (e) => {
            this.setState({
                articleTitle: e.target.value,
            });
        };

        this.pickUpCollapse = () => {
            this.setState({ activeKey: [] });
        };

        this.collapseChange = (key) => {
            this.setState({ activeKey: key });
        };

        this.setMarkdownValue = (value) => {
            this.smde.codemirror.setValue(value);
        };
    }

    async componentDidMount() {
        await this.renderSimpleMarkdown();
        const collects = await this.props.getAllCollects();
        if (collects && collects.code === 200 && collects.data.length > 0) {
            const firstId = collects.data[0].id;
            this.setState(
                {
                    curCollectId: firstId,
                    collectMenuSelectedKeys: [firstId + ''],
                },
                async () => {
                    const { getArticleByCollectId } = this.props;
                    const { curCollectId } = this.state;

                    const articles = await getArticleByCollectId({ id: curCollectId });
                    if (articles && articles.code === 200 && articles.data.length > 0) {
                        const { data } = articles;
                        this.handleArticleMenuClick({ id: data[0].id });
                    }
                },
            );
        }
    }

    async renderSimpleMarkdown() {
        const easyMDE = await import('EasyMDE');
        const marked = await import('marked');
        const hljs = await import('highlight.js');
        const _this = this;

        document
            .getElementById('markdownEditor')
            .parentNode // 获取编辑器container
            .addEventListener('click', (e) => e.stopPropagation());

        this.smde = new easyMDE.default({
            element: document.getElementById('markdownEditor').childElementCount,
            autofocus: true,
            autosave: {
                enabled: true,
                uniqueId: 'MyUniqueID',
                delay: 1000,
            },
            initialValue: '',
            indentWithTabs: false,
            placeholder: '## 请输入内容......',
            renderingConfig: {
                singleLineBreaks: false,
                codeSyntaxHighlighting: true,
            },
            insertTexts: {
                horizontalRule: ['', '\n\n-----\n\n'],
                image: ['![](http://', ')'],
                link: ['[', '](http://)'],
                table: [
                    '',
                    '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n',
                ],
            },
            toolbar: [
                'bold',
                'heading',
                'code',
                'quote',
                'unordered-list',
                'ordered-list',
                'link',
                'image',
                'table',
                'horizontal-rule',
                'preview',
                'side-by-side',
                'fullscreen',
                'guide',
                {
                    name: '发布文章',
                    action: async function customFunction(editor) {
                        console.log(editor);
                        const { updateArticleById } = _this.props;
                        const { curArticle, curCollectId } = _this.state;
                        const result = await updateArticleById({
                            id: curArticle.id,
                            markdown: editor.value(),
                            html: editor.markdown(editor.value()),
                            collectId: curCollectId,
                            collectName: '默认文集',
                        });
                        if (result.code === 200) {
                            message.info(result.message);
                        } else {
                            message.error(result.message);
                        }
                    },
                    className: 'fa fa-leanpub',
                    title: '发布文章',
                },
            ],
            previewRender: function (plainText) {
                if (document.querySelector('.editor-preview')) {
                    document.querySelector('.editor-preview').classList.add('markdown-body');
                }
                return marked.default(plainText, {
                    renderer: new marked.default.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return hljs.default.highlightAuto(code).value;
                    },
                });
            },
            spellChecker: false,
        });

        if (document.querySelector('.editor-preview-side')) {
            document.querySelector('.editor-preview-side').classList.add('markdown-body');
        }
    }

    handleArticleMenuClick = async (item) => {
        const article = await this.props.getArticleById({ id: item.id });
        if (article && article.code === 200) {
            this.setCurArticle(article.data);
        } else {
            message.error(article.message);
        }
    };

    setCurArticle = (article) => {
        this.setState({ curArticle: article, curSelectArticleId: article.id }, () => {
            const { curArticle } = this.state;
            this.setMarkdownValue((curArticle && curArticle.markdown) || '');
        });
    };

    confirmCreateCollect = (e) => {
        e.preventDefault();
        const { user, createNewCollect, getAllCollects } = this.props;
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                await createNewCollect({
                    collectName: values.collectName,
                    description: '',
                    collectTags: '',
                    authorId: user.id,
                    authorName: user.name,
                });

                await getAllCollects();
                this.collapseChange('');
            }
        });
    };

    showModal = (type) => {
        let state = { visible: true };
        if (type === 'editArticle') {
            state = { ...state, modelTitle: '修改文章' };
        }
        if (type === 'newArticle') {
            state = { ...state, modelTitle: '新建文章' };
        }
        if (type === 'editCollect') {
            state = { ...state, modelTitle: '修改文集' };
        }
        this.setState(state);
    };

    handleOk = async (e) => {
        const { modelTitle, articleTitle, collectMenuSelectedKeys, curSelectArticleId, curCollectId } = this.state;
        const { updateArticleById, createNewArticle, getAllCollects, updateCollectById, getArticleByCollectId } = this.props;

        if (modelTitle === '新建文章') {
            await createNewArticle({
                title: articleTitle || '',
                collectName: '',
                collectId: collectMenuSelectedKeys[0] || '1',
            });
            this.handleCancel();
            const articles = await getArticleByCollectId({ id: curCollectId });
            if (articles.code === 200) {
                articles.data[0] && this.setCurArticle(articles.data[0]);
            }
        }

        if (modelTitle === '修改文章') {
            await updateArticleById({
                title: articleTitle || '',
                id: curSelectArticleId,
            });
            this.handleCancel();
            const articles = await getArticleByCollectId({ id: curCollectId });
            if (articles.code === 200) {
                articles.data[0] && this.setCurArticle(articles.data[0]);
            }
        }

        if (modelTitle === '修改文集') {
            await updateCollectById({
                collectName: articleTitle || '',
                id: curCollectId,
            });
            await getAllCollects();
            this.handleCancel();
        }
    };

    handleCancel = (e) => {
        this.setState({
            visible: false,
            articleTitle: '',
        });
    };

    handleCollectMenuClick = async (e) => {
        const { getArticleByCollectId } = this.props;
        const articles = await getArticleByCollectId({ id: e.key });

        if (articles.code === 200) {
            articles.data[0] && this.setCurArticle(articles.data[0]);
        }

        this.setState({
            curCollectId: e.key,
            collectMenuSelectedKeys: [e.key + ''],
        });
    };

    deleteArticle = async () => {
        const { deleteArticleById } = this.props;
        const { curSelectArticleId } = this.state;
        await deleteArticleById({ id: curSelectArticleId });
    };

    deleteCollect = () => {
        const { deleteCollectById, getAllCollects } = this.props;
        const { curCollectId } = this.state;

        Modal.confirm({
            title: '删除合集',
            content: '确定要删除该合集吗?',
            okText: '确认',
            cancelText: '取消',
            async onOk() {
                await deleteCollectById({ id: curCollectId });
                await getAllCollects();
            },
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { activeKey, visible, modelTitle, collectMenuSelectedKeys, curSelectArticleId } = this.state;
        const { articles, collects } = this.props;

        const menu = (
            <Menu>
                <Menu.Item>
                    <a
                        onClick={(e) => {
                            this.showModal('editCollect');
                        }}
                    >
                        修改文集
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" onClick={this.deleteCollect}>
                        删除文集
                    </a>
                </Menu.Item>
            </Menu>
        );

        const articlemenu = (
            <Menu>
                <Menu.Item>
                    <a
                        onClick={(e) => {
                            this.showModal('editArticle');
                        }}
                    >
                        修改文章
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            this.deleteArticle();
                        }}
                    >
                        删除文章
                    </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <>
                <Modal
                    title={modelTitle}
                    visible={visible}
                    cancelText="取消"
                    okText="提交"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>
                        <span>名称</span>
                        <span> : </span>
                        <Input style={{ width: '80%' }} placeholder="请输入名称" onChange={this.getNameChange} />
                    </p>
                </Modal>
                <div className="edit-area" style={{ height: '100%', overflow: 'hidden' }}>
                    <div className="collect-list">
                        <div className="back-btn">
                            <Button
                                type="danger"
                                block
                                ghost
                                onClick={() => {
                                    Router.push('/home');
                                }}
                            >
                                回首页
                            </Button>
                        </div>
                        <Collapse
                            expandIconPosition="left"
                            activeKey={activeKey}
                            onChange={this.collapseChange}
                            expandIcon={(panelProps) => <Icon type="plus" />}
                        >
                            <Panel header="新建文集" key="one">
                                <Form onSubmit={this.confirmCreateCollect} className="login-form">
                                    <Form.Item>{getFieldDecorator('collectName')(<Input placeholder="请输入文集名称" />)}</Form.Item>{' '}
                                    <Button type="primary" htmlType="submit" type="danger" ghost size="small">
                                        提交
                                    </Button>
                                    <Button style={{ marginLeft: '5px' }} type="dashed" ghost size="small" onClick={this.pickUpCollapse}>
                                        取消
                                    </Button>
                                </Form>
                            </Panel>
                        </Collapse>
                        <Menu onClick={this.handleCollectMenuClick} mode="inline" selectedKeys={collectMenuSelectedKeys}>
                            {collects &&
                                collects.map((item) => {
                                    return (
                                        <Menu.Item key={item.id}>
                                            <Dropdown overlay={menu} placement="bottomRight" trigger={['click', 'contextMenu']}>
                                                <Icon type="setting" />
                                            </Dropdown>
                                            {item.collectName}
                                        </Menu.Item>
                                    );
                                })}
                        </Menu>
                    </div>
                    <div className="article-list">
                        {articles ? (
                            <List
                                size="large"
                                header={
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            this.showModal('newArticle');
                                        }}
                                    >
                                        <Icon type="plus-circle" theme="filled" style={{ marginRight: '8px' }} />
                                        新建文章
                                    </div>
                                }
                                footer={
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            this.showModal('newArticle');
                                        }}
                                    >
                                        <Icon type="plus-circle" theme="filled" style={{ marginRight: '8px' }} />
                                        在下方新建文章
                                    </div>
                                }
                                dataSource={articles || []}
                                renderItem={(item) => (
                                    <List.Item
                                        onClick={() => this.handleArticleMenuClick(item)}
                                        style={curSelectArticleId === item.id ? { backgroundColor: '#e6e6e6' } : {}}
                                    >
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src="data:image/png;base64,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" />
                                            }
                                            title={item.title || ''}
                                        />
                                        <div>
                                            <Dropdown overlay={articlemenu} placement="bottomCenter" trigger={['click', 'contextMenu']}>
                                                <Icon type="setting" />
                                            </Dropdown>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        ) : null}
                    </div>
                    <div className="markdown-area">
                        <div id="editorContaienr">
                            <textarea id="markdownEditor"></textarea>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const WrapperMDEditor = Form.create({ name: 'normal_login' })(MDEditor);

export default WrapperMDEditor;
