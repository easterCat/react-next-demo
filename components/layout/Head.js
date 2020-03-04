import { Fragment } from "react";
import Head from "next/head";

function MyHead() {
    return (
        <Fragment>
            <Head>
                <meta name="referrer" content="origin"></meta>
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"></meta>
                <meta name="keywords" content="next.js,react.js"></meta>
                <meta content="next 简介 next.js作为一款轻量级的应用框架，主要用于构建静态网站和后端渲染网站。 next 特点 默认情况下由服务器呈现 自动代码拆分可加快页面加载速度 简单的客户端路由（基于页面） 基于"></meta>
                <title>平头哥</title>
            </Head>
        </Fragment>
    );
}

export default MyHead;
