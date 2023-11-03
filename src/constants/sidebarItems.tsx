// "use client";
import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";


export const sidebarItems = (role: string) => {
  console.log("AA", role);
  
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/profile`}>Account Profile</Link>,
          key: `/dashboard/profile`,
        },
      ],
    },
    {
      label: "My Booking",
      key: "booking",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/booking`}>Booking</Link>,
          key: `/dashboard/booking`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/admin/manage-user`}>Manage User</Link>,
      // icon: <TableOutlined />,
      key: `manage-user`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Management",
      key: "management",
      icon: <TableOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/admin/manage-service`}>Manage Service</Link>
          ),
          key: `/dashboard/admin/manage-service`,
        },
        // {
        //   label: (
        //     <Link href={`/dashboard/admin/manage-booking`}>Manage Booking</Link>
        //   ),
        //   key: `/dashboard/admin/manage-booking`,
        // },
        {
          label: (
            <Link href={`/dashboard/admin/manage-content`}>Manage Content</Link>
          ),
          key: `/dashboard/admin/manage-content`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    // {
    //   label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/admin`,
    // },
    // {
    //   label: <Link href={`/${role}/user`}>Manage User</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/user`,
    // },
    // {
    //   label: "Management",
    //   key: "management",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/department`}>Department</Link>,
    //       key: `/${role}/department`,
    //     },
    //   ],
    // },
  ];

  // if(role )
  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
