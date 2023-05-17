import Layout from "./layout/Layout";
import { Watermark } from "antd";
import { useUserStore } from "./store";

const App: React.FC = () => {
  const name = useUserStore((state) => state.name);
  const setName = useUserStore((state) => state.setName);
  setName("admin");  

  return (
    <>
      <Watermark content={name}>
        <Layout />
      </Watermark>
    </>
  );
};

export default App;
