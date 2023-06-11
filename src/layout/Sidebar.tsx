import { Layout, Menu, MenuProps } from "antd";
import { items } from "../config/menuConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const onSelect: MenuProps["onSelect"] = (e) => {
    navigate(e.key);
  };
  const hash = location.hash.replace("#/", "");
  const hashSplit = hash.split("/");
  useEffect(() => {
    !hash && navigate("data-overview");
  }, [hash, navigate]);
  return (
    <Layout.Sider>
      <div className="layout__Sidebar__logo">Nine Admin</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={hash ? [hash] : ["data-overview"]}
        defaultOpenKeys= {hashSplit.length > 1 ? [hashSplit[0]] : []}
        items={items}
        onSelect={onSelect}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
