"use client";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
} from "antd";
const { Header: AntHeader } = Layout;
import { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { usePathname, useRouter } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import styles from "../../app/Styles/navbar.module.css";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

const HeaderNav = () => {
  const [visible, setVisible] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn());

  const router = useRouter();
  const currentPath = usePathname();
  const { count } = useAppSelector((state) => state.cart);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
    setUserLoggedIn(isLoggedIn());
    setVisible(false);
  };

  const menu = (
    <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link href="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/service">Service</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/cart">Cart({count})</Link>
      </Menu.Item>
    </Menu>
  );

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <>
          {userLoggedIn ? (
            <Button onClick={logOut} type="text" danger>
              Logout
            </Button>
          ) : (
            <Button type="text" danger>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </>
      ),
    },
    {
      key: "1",
      label: (
        <>
          {userLoggedIn ? (
            <></>
          ) : (
            <Button type="text" danger>
              <Link href="/signin">Register</Link>
            </Button>
          )}
        </>
      ),
    },
  ];

  // const cngWidth = window.innerWidth;

  // useEffect(() => {
  //   setUserLoggedIn(isLoggedIn());
  //   const handleResize = () => {
  //     if (window.innerWidth > 767) {
  //       setVisible(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // cleanup function will remove the listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [currentPath, cngWidth]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 767) {
        setVisible(false); // Adjust the visibility of the menu for different screen sizes
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AntHeader style={{ padding: "0 40px", backgroundColor: "#fff" }}>
      <Row
        justify="space-between"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <div>
          <span style={{ fontWeight: "700", color: "skyblue" }}>Travel</span>
          <b>Service</b>
        </div>
        {/* <div className={`${styles.desktopNav}`}>{menu}</div> */}
        <div className={`${styles.desktopNav}`}>
          <div style={{ display: "flex" }}>
            <Link
              style={{ color: "black", margin: "0px 10px", fontWeight: "600" }}
              href="/home"
            >
              Home
            </Link>
            <Link
              style={{ color: "black", margin: "0px 10px", fontWeight: "600" }}
              href="/service"
            >
              Service
            </Link>
            <Link
              style={{ color: "black", margin: "0px 10px", fontWeight: "600" }}
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              style={{ color: "black", margin: "0px 10px", fontWeight: "600" }}
              href="/cart"
            >
              Cart({count})
            </Link>
          </div>
        </div>

        <div className={`${styles.mobileNav}`}>
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={onClose}
            // visible={visible}
            open={visible}
          >
            {menu}
          </Drawer>
        </div>
        <Dropdown className={`${styles.desktopNav}`} menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default HeaderNav;
