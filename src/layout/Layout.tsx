import { Layout as ALayout } from "antd";
import "./style.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

const Layout: React.FC = () => {
  return (
    <ALayout className="layout">
      <Sidebar />
      <ALayout>
        <Header />
        <Content />
      </ALayout>
    </ALayout>
  );
};

export default Layout;
