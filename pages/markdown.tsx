import React, { Fragment, Component } from "react";
import dynamic from "next/dynamic";

const Markdown = dynamic(import("../components/markdown/Markdown"), {
    ssr: true
});

class MDPage extends Component {
    render() {
        return (
            <Fragment>
                <Markdown></Markdown>
            </Fragment>
        );
    }
}

export default MDPage;
