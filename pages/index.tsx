import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = ({ show }: { show: any }) => (
  <li>
    <Link href="/show/[id]" as={`/show/${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = (props: DefaultProps) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <h2>Hello userAgent is {props.userAgent}</h2>
    <ul>
      {props.shows.map((show: any) => (
        <PostLink key={show.id} show={show} />
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
);

interface IContext {
  req: IReq;
}

interface IReq {
  headers: IHeaders;
}

interface IHeaders {
  "user-agent": string;
}

interface DefaultProps {
  shows: any;
  userAgent: String;
}

interface IItem {
  show: object;
}

Index.getInitialProps = async function(context: IContext) {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  const userAgent = context.req
    ? context.req.headers["user-agent"]
    : navigator.userAgent;
  return {
    shows: data.map((item: IItem): object => item.show),
    userAgent
  };
};

export default Index;
