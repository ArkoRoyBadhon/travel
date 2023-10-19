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
import { Button, DatePicker, Divider, Modal, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  usePatchServiceMutation,
} from "@/redux/api/serviceApi";
import { SubmitHandler } from "react-hook-form";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import FormDatePicker from "@/components/forms/FormDatePicker";
import { useRouter } from "next/navigation";

type FormValues = {
  title: string;
  // img: string;
  tourLocation: string;
  pickupLocation: string;
  pickupTime: string;
  duration: string;
  availableSeats: number;
  hotelSeatType: string;
  description: string;
  availability: boolean;
  price: number;
  // type: string;
  // userId: string;
};

const ManageService = () => {
  const [page, setPage] = useState<number>(5);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authId, setAuthId] = useState<string | undefined>("");
  const router = useRouter();
  const [modalId, setModalId] = useState("");

  const { data: allServiceData, isLoading } = useGetAllServicesQuery({});
  const { data: singleService, isLoading: singleIsLoading } =
    useGetServiceByIdQuery(modalId);

  const [deleteService] = useDeleteServiceMutation();
  const [patchService] = usePatchServiceMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      console.log("del id", id);

      // console.log(data);
      const res = await deleteService({ id });
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
      dataIndex: "pickupTime",
      render: function (data: any) {
        // return data && dayjs(data).format("MMM D, YYYY hh:mm A");
        return data && dayjs(data).format("MMM D, YYYY");
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
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {
                showModal();
                setModalId(data?.id);
                // console.log("aa id", data?.id);
              }}
              type="primary"
            >
              <EditOutlined />
            </Button>
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

  const seatTypeOptions = [
    {
      label: "Single",
      value: "single",
    },
    {
      label: "Double",
      value: "double",
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

  const pageCount = Math.ceil(
    (allServiceData ? allServiceData?.length : 1) / 1
  );

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // console.log("update info", data);
      const updateInfo = {
        title: data?.title === undefined ? singleService?.title : data?.title,
        img: singleService && singleService?.img,
        tourLocation:
          data?.tourLocation === undefined
            ? singleService?.tourLocation
            : data?.tourLocation,
        pickupLocation:
          data?.pickupLocation === undefined
            ? singleService?.pickupLocation
            : data?.pickupLocation,
        pickupTime:
          data?.pickupTime === undefined
            ? singleService?.pickupTime
            : data?.pickupTime,
        duration:
          data?.duration === undefined
            ? singleService?.duration
            : data?.duration,
        availableSeats:
          data?.availableSeats === undefined
            ? singleService?.availableSeats
            : data?.availableSeats,
        hotelSeatType:
          data?.hotelSeatType === undefined
            ? singleService?.hotelSeatType
            : data?.hotelSeatType,
        description:
          data?.description === undefined
            ? singleService?.description
            : data?.description,
        availability:
          data?.availability === undefined
            ? singleService?.availability
            : data?.availability,
        price: data?.price === undefined ? singleService?.price : data?.price,
        type: singleService && singleService?.type,
        userId: singleService && singleService?.userId,
      };

      console.log("qqqqqq", updateInfo);
      const id = singleService && singleService?.id;
      patchService({ id, updateInfo });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  // console.log("singleService", singleService);

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
        Manage Your Services
      </h1>
      <Divider />
      <div>
        <Button
          onClick={() => router.push("/dashboard/admin/manage-service/add-service")}
          type="primary"
          style={{
            float: "right",
          }}
        >
          Add Service
        </Button>
      </div>
      <div>
        <UMTable
          loading={isLoading}
          columns={columns}
          dataSource={allServiceData}
          pageSize={size}
          totalPages={pageCount}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>

      <Modal
        title="Update Your Service"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div>
          {singleService && (
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput
                  value={singleService?.title}
                  name="title"
                  type="text"
                  size="large"
                  label="Title"
                />
              </div>
              <div>
                <FormInput
                  name="tourLocation"
                  type="text"
                  size="large"
                  value={singleService?.tourLocation}
                  label="Tour Location"
                />
              </div>
              <div>
                <FormInput
                  name="pickupLocation"
                  type="text"
                  size="large"
                  value={singleService?.pickupLocation}
                  label="pickup Location"
                />
              </div>
              <div>
                {/* <FormInput
                name="pickupTime"
                type="text"
                size="large"
                label="Pickup Time"
              /> */}
                <FormDatePicker
                  value={singleService?.pickupTime}
                  name="pickupTime"
                  label="Pickup Time"
                />
              </div>
              <div>
                <FormInput
                  name="duration"
                  type="text"
                  size="large"
                  label="Duration"
                  value={singleService?.duration}
                />
              </div>
              <div>
                <FormInput
                  name="availableSeats"
                  type="text"
                  size="large"
                  value={singleService?.availableSeats}
                  label="Available Seats"
                />
              </div>
              <div>
                <FormSelectField
                  size="large"
                  name="hotelSeatType"
                  options={seatTypeOptions}
                  value={singleService?.hotelSeatType}
                  label="HotelSeat Type"
                  placeholder="Select"
                />
              </div>
              <div>
                <FormInput
                  name="description"
                  type="text"
                  size="large"
                  value={singleService?.description}
                  label="Description"
                />
              </div>
              <div>
                <FormInput
                  name="price"
                  type="number"
                  value={singleService?.price}
                  size="large"
                  label="Price"
                />
              </div>

              <Button
                style={{ marginTop: "20px" }}
                type="primary"
                htmlType="submit"
              >
                update
              </Button>
            </Form>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ManageService;
