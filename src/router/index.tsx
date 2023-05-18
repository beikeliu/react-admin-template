import App from "../App.tsx";
import { createBrowserRouter } from "react-router-dom";
import { children } from "../config/routerConfig.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>哎呦，您输入的链接出错了！</div>,
    children,
  },
]);

export default router;
