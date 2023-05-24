import { Layout, Menu, MenuProps } from "antd";
import { items } from "../config/menuConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const defaultItem = "data-overview";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("data-overview");
  }, [navigate]);
  const onSelect: MenuProps["onSelect"] = (e) => {
    navigate(e.key);
  };
  return (
    <Layout.Sider>
      <div className="layout__Sidebar__logo">Nine Admin</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[defaultItem]}
        mode="inline"
        items={items}
        onSelect={onSelect}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
