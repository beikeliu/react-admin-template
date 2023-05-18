import { Layout as ALayout } from "antd";
import "./style.scss";
import Sider from "./Sider";
import Header from "./Header";
import Content from "./Content";

const Layout: React.FC = () => {
  return (
    <ALayout className="layout">
      <Sider />
      <ALayout>
        <Header />
        <Content />
      </ALayout>
    </ALayout>
  );
};

export default Layout;
