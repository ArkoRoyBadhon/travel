"use client";
import Contents from "@/components/ui/Contents";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NormalLayout = ({ children }: { children: React.ReactNode }) => {
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
      <Layout>
        <Contents>{children}</Contents>
      </Layout>
  );
};

export default NormalLayout;
