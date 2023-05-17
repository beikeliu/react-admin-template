import DataOverview from "../views/data-overview";
import UserList from "../views/user-list";

const children = [
  {
    path: "data-overview",
    element: <DataOverview />,
  },
  {
    path: "user-list",
    element: <UserList />
  }
];

export { children };
