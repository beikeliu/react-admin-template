import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const Content: React.FC = () => {
  return (
    <Layout.Content className="layout__Content">
      <main className="layout__Content__main"><Outlet /></main>
    </Layout.Content>
  );
};

export default Content;
