import Header from "./Header";
import "../assets/css/styles.less";

const Layout = props => (
  <div>
    <Header />
    <div className="content">{props.children}</div>
  </div>
);

export default Layout;
