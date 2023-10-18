"use client";

import DashContents from "@/components/ui/DashboardContent";
import SideBar from "@/components/ui/SideBar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const AdminDashboard = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);
  
  return (
    <Layout hasSider>
      <SideBar />
      <DashContents>{children}</DashContents>
    </Layout>
  );
};

export default AdminDashboard;