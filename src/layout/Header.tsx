import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Popover } from "antd";
import { useUserStore } from "../store";

const content = (
  <div className="layout__Header__right__logout">退出登录</div>
);
const Header: React.FC = () => {
  const name = useUserStore((state) => state.name);
  return (
    <Layout.Header className="layout__Header">
      <div className="layout__Header__left"></div>
      <div className="layout__Header__right">
        <span className="layout__Header__right__username">{name}</span>
        <Popover
          placement="bottom"
          content={content}
          trigger="click"
        >
          <Avatar icon={<UserOutlined />} className="layout__Header__right__avatar" />
        </Popover>
      </div>
    </Layout.Header>
  );
};

export default Header;
