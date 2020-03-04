import React, { Fragment, Component } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(import("../components/markdown/Editor"), {
    ssr: false
});

class EditorPage extends Component {
    render() {
        return (
            <Fragment>
                <Editor></Editor>
            </Fragment>
        );
    }
}

export default EditorPage;
