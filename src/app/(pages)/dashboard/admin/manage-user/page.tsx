"use client";
import Loading from "@/app/loading";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteUserMutation,
  useGetAllNormalUsersQuery,
} from "@/redux/api/authApi";
import { Button, message } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { getUserInfo } from "@/services/auth.service";

const ManageUser = () => {
  const { data: NormalUsers, isLoading } = useGetAllNormalUsersQuery({});
  const [page, setPage] = useState<number>(5);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [authId, setAuthId] = useState<string | undefined>("");
  const [deleteUser] = useDeleteUserMutation();
  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const handleDeleteUser = async () => {
    const result = await deleteUser(authId);
    if (result) {
      message.success("User deleted Successfully");
    } else {
      message.error("User deletion failed");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Action",
      render: function (data: any) {
        // console.log("inside", data);

        return (
          <div key={data.id}>
            <Button onClick={() => handleDeleteUser()} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const pageCount = Math.ceil((NormalUsers ? NormalUsers?.length : 1) / 1);

  // console.log("normal user", NormalUsers);
  useEffect(() => {
    const info = getUserInfo() as any;
    if (info) setAuthId(info?.userId || "");
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1
        style={{ marginTop: "20px", fontSize: "26px" }}
        className="flexCenter"
      >
        Welcome to Manage User
      </h1>
      <div className="">
        <UMTable
          //   loading={isLoading}
          columns={columns}
          dataSource={NormalUsers}
          pageSize={size}
          totalPages={pageCount}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default ManageUser;
