import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import { Typography, Card, Avatar } from "antd";
const { Title, Paragraph, Text } = Typography;

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
  shows: any[];
  userAgent: String;
}

interface IItem {
  show: object;
}

interface IShow {
  id: string;
  name: string;
  summary: string;
  image: {
    medium: string;
  };
}

const Index = (props: DefaultProps) => (
  <Layout>
    <Title>Batman TV Shows</Title>
    <Paragraph>Hello userAgent is {props.userAgent}</Paragraph>
    <ul>
      {props.shows.map((show: IShow, index: number) => (
        <Card key={show.id} style={{ width: "100%", marginTop: 16 }}>
          <Card.Meta
            avatar={<Avatar src={show.image.medium} />}
            title={show.name}
            description={show.summary}
          />
        </Card>
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
