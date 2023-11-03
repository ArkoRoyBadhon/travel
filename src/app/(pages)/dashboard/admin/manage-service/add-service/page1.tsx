"use client";
import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import { usePostServiceMutation } from "@/redux/api/serviceApi";
import { Button, Input, message } from "antd";
import { register } from "module";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  title: string;
  img: any;
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

const AddServicePage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [postService] = usePostServiceMutation();

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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      //   console.log("new data", data);
      const formData = new FormData();
      // formData.append("img", data.img[0]);

      // const response = await fetch(
      //   `https://api.imgbb.com/1/upload?key=e4ff96d27d6b97a1012fd4d5bbcea91c`,
      //   {
      //     method: "POST",
      //     body: formData,
      //   }
      // );

      // const responseData = await response.json();
      // console.log("Image uploaded:", responseData.data.url);

      console.log("data form", data);

      // const FormValues = {
      //   title: data?.title;
      //   img: ;
      //   tourLocation: string;
      //   pickupLocation: string;
      //   pickupTime: string;
      //   duration: string;
      //   availableSeats: number;
      //   hotelSeatType: string;
      //   description: string;
      //   availability: boolean;
      //   price: number;
      //   // type: string;
      //   // userId: string;
      // };

      // const result = await postService(formData);
      // if (result) {
      // message.success("New Service Created");
      // }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div>
      <h1
        style={{ marginTop: "20px", fontSize: "26px" }}
        className="flexCenter"
      >
        Add New Service
      </h1>
      <div
        style={{
          width: "60Vw",
          margin: "20px auto",
        }}
      >
        <Form submitHandler={onSubmit}>
          <div>
            <FormInput name="title" type="text" size="large" label="Title" />
          </div>
          <div>
            <FormInput
              name="tourLocation"
              type="text"
              size="large"
              label="Tour Location"
            />
          </div>
          <div>
            {/* <input
              id="img-office"
              type="file"
              accept="image/*"
              style={{}}
              name="img"
              // {...register("img", { required: true })}
              onChange={handleImageChange}
            /> */}
            <FormInput name="img" type="file" size="large" label="Image"  />
          </div>
          <div>
            <FormInput
              name="pickupLocation"
              type="text"
              size="large"
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
            <FormDatePicker name="pickupTime" label="Pickup Time" />
          </div>
          <div>
            <FormInput
              name="duration"
              type="text"
              size="large"
              label="Duration"
            />
          </div>
          <div>
            <FormInput
              name="availableSeats"
              type="text"
              size="large"
              label="Available Seats"
            />
          </div>
          <div>
            <FormSelectField
              size="large"
              name="hotelSeatType"
              options={seatTypeOptions}
              label="HotelSeat Type"
              placeholder="Select"
            />
          </div>
          <div>
            <FormInput
              name="description"
              type="text"
              size="large"
              label="Description"
            />
          </div>
          <div>
            <FormInput name="price" type="number" size="large" label="Price" />
          </div>

          <Button
            style={{ marginTop: "20px" }}
            type="primary"
            htmlType="submit"
          >
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddServicePage;
