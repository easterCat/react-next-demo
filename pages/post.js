import { useRouter } from "next/router";
import Layout from "../components/layout/MyLayout";
import Markdown from "react-markdown";

const Content = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>这里是pages下的post</h1>
      <h1>{router.query.title}</h1>
      <div className="markdown">
        <Markdown
          source={` # Live demo

                  Changes are automatically rendered as you type.

                  ## Table of Contents

                  * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
                  * Renders actual, "native" React DOM elements
                  * Allows you to escape or skip HTML (try toggling the checkboxes above)
                  * If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!

                  ## HTML block below

                  <blockquote>
                    This blockquote will change based on the HTML settings above.
                  </blockquote>`}
        />
      </div>
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
    </Layout>
  );
};

const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
