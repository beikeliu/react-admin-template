import { Layout, Menu, MenuProps } from "antd";
import { items } from "../config/menuConfig";
import { useNavigate } from "react-router-dom";

const Sider: React.FC = () => {
  const navigate = useNavigate();

  const onSelect: MenuProps["onSelect"] = (e) => {
    navigate(e.key);
  };

  return (
    <Layout.Sider>
      <div className="Layout__Sider__logo">Nine Admin</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["data-overview"]}
        mode="inline"
        items={items}
        onSelect={onSelect}
      />
    </Layout.Sider>
  );
};

export default Sider;
