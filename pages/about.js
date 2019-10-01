import Layout from "../components/MyLayout";
import Link from "next/link";
import { Button } from "antd";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function About() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <Button type="primary">Button</Button>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
