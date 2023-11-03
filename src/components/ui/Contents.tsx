"use client";

import { Layout } from "antd";
import Navbar from "./Header";
import Footer from "./Footer";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        margin: "0px",
      }}
    >
      <Navbar />
      <div
        style={
          {
            // paddingInline: "40px"
          }
        }
      >
        {children}
      </div>
      <Footer />
    </Content>
  );
};

export default Contents;
