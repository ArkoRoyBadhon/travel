"use client";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteBookingMutation,
  useGetAllBookingByUserQuery,
} from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Divider, Modal, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const BookingPage = () => {
  const [page, setPage] = useState<number>(5);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authId, setAuthId] = useState<string | undefined>("");
  const { data: bookingData, isLoading } = useGetAllBookingByUserQuery(authId);

  const [deleteBooking] = useDeleteBookingMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      //   console.log(data);
      const res = await deleteBooking(id);
      if (res) {
        message.success("Your Booking Deleted successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Date of Tour",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        // console.log("inside", data);
        
        return (
          <div key={data.id}>
            {/* <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={showModal}
              type="primary"
            >
              <EditOutlined />
            </Button> */}
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

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

  const pageCount = Math.ceil((bookingData ? bookingData?.length : 1) / 1);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const info = getUserInfo() as any;
    if (info) setAuthId(info?.userId || "");
  }, []);

  return (
    <div>
      <h1
        style={{ marginTop: "20px", fontSize: "26px" }}
        className="flexCenter"
      >
        Welcome to my bookings
      </h1>
      <Divider />
      <div>
        <UMTable
          loading={isLoading}
          columns={columns}
          dataSource={bookingData}
          pageSize={size}
          totalPages={pageCount}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default BookingPage;
