"use client";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
const { Sider } = Layout;
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const info = getUserInfo() as any;
    if (info) setRole(info?.role || "user");
    else setRole("user");
  }, []);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={200}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1.2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Travel Agency
      </div>

      {role && (
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
      )}
    </Sider>
  );
};

export default SideBar;
