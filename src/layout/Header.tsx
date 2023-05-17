import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Popover } from "antd";
import { useUserStore } from "../store";

const content = (
  <div className="Layout__Header__rigth__logout">退出登录</div>
);
const Header: React.FC = () => {
  const name = useUserStore((state) => state.name);
  return (
    <Layout.Header className="Layout__Header">
      <div className="Layout__Header__left"></div>
      <div className="Layout__Header__rigth">
        <span className="Layout__Header__rigth__username">{name}</span>
        <Popover
          placement="bottom"
          content={content}
          trigger="click"
        >
          <Avatar icon={<UserOutlined />} className="Layout__Header__rigth__avatar" />
        </Popover>
      </div>
    </Layout.Header>
  );
};

export default Header;
