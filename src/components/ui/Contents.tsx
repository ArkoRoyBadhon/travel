"use client";

import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
import Navbar from "./Header";
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

      {/* <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `student`,
            link: `/${base}/student`,
          },
        ]}
      /> */}
      <div
        style={
          {
            // paddingInline: "40px"
          }
        }
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
