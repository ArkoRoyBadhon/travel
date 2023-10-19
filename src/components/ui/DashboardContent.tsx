// "use client";

import { Layout } from "antd";
const { Content } = Layout;

const DashContents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        margin: "0px",
      }}
    >
      {/* <Navbar /> */}
      <div>{children}</div>
    </Content>
  );
};

export default DashContents;
