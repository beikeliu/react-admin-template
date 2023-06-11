import {
  PieChartOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    label: "数据总览",
    key: "data-overview",
    icon: <PieChartOutlined />,
  },
  {
    label: "用户中心",
    key: "user-center",
    icon: <TeamOutlined />,
    children: [
      {
        label: "用户列表",
        key: "user-center/user-list",
        icon: <UnorderedListOutlined />,
      },
    ],
  },
];

export { items };
