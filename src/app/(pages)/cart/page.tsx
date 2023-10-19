"use client";
import UMTable from "@/components/ui/UMTable";
import { Button, message } from "antd";
import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/slices/cartSlice";

const CartPage = () => {
  const [page, setPage] = useState<number>(5);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const { services, total, count } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

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

  const pageCount = Math.ceil((count !== 0 ? count : 1) / 1);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
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
            <Button
                onClick={() => dispatch(removeFromCart(data))}
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

  return (
    <div
      style={{
        padding: "0 40px",
      }}
    >
      <h1
        style={{ marginTop: "20px", fontSize: "26px" }}
        className="flexCenter"
      >
        Cart
      </h1>
      <div>
        <UMTable
          //   loading={isLoading}
          columns={columns}
          dataSource={services}
          pageSize={size}
          totalPages={pageCount}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
        <h4 className="">
          <b>Total Price: {total} BDT</b>
        </h4>
        <Button
          style={{ marginTop: "15px" }}
          type="primary"
          onClick={() => count > 0 ? message.success("Successfully proceed") : message.error("No data selected")}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
