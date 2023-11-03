"use client";
import FormInput from "@/components/forms/FormInput";
import { authKey } from "@/constants/storageKey";
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "@/redux/api/authApi";
import { SubmitHandler } from "react-hook-form";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Button, Divider, Space } from "antd";
import React, { useState } from "react";
import Form from "@/components/forms/Form";
import Loading from "@/app/loading";

type FormValues = {
  name: string | undefined;
  email: string | undefined;
  contactNo: string | undefined;
  age: number | undefined;
  bloodGroup: string | undefined;
  city: string | undefined;
  address: string | undefined;
};

const ProfilePage = () => {
  const [activeEdit, setActiveEdit] = useState(false);
  const authToken = getFromLocalStorage(authKey);
  const [updateUser] = useUpdateUserMutation();

  // const userInfo: any = decodedToken(authToken as string);
  // const UserId = userInfo?.userId as string;
  const userInfo: any = authToken ? decodedToken(authToken as string) : null;
  const UserId = userInfo?.userId as string;
  const { data: userData, isLoading } = useGetUserByIdQuery(UserId && UserId);


  if (isLoading) {
    return <Loading />;
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // const res = await userLogin({ ...data }).unwrap();

      const updateInfo = {
        address:
          data?.address === undefined ? userData?.address : data?.address,
        age: data?.age === undefined ? userData?.age : data?.age,
        bloodGroup:
          data?.bloodGroup === undefined
            ? userData?.bloodGroup
            : data?.bloodGroup,
        city: data?.city === undefined ? userData?.city : data?.city,
        contactNo:
          data?.contactNo === undefined ? userData?.contactNo : data?.contactNo,
        email: data?.email === undefined ? userData?.email : data?.email,
        name: data?.name === undefined ? userData?.name : data?.name,
      };

      // console.log("update data", UserId);
      updateUser({ updateInfo, UserId });
      setActiveEdit(false);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div
      style={{
        padding: "0px 20px",
      }}
    >
      <h1
        style={{ marginTop: "20px", fontSize: "26px" }}
        className="flexCenter"
      >
        Welcome to Profile
      </h1>
      <Divider />
      <div
        style={{
          fontSize: "20px",
          marginBottom: "20px",
        }}
      >
        {/* <div className=""></div> */}
        <p>
          <b>Name: </b> {userData?.name}
        </p>
        <p>
          <b>Email Address: </b> {userData?.email}
        </p>
        <p>
          <b>Contact No: </b> {userData?.contactNo}
        </p>
        <p>
          <b>City: </b> {userData?.city}
        </p>
        <p>
          <b>Age: </b> {userData?.age}
        </p>
        <p>
          <b>Blood Group: </b> {userData?.bloodGroup}
        </p>
        <p>
          <b>Address: </b> {userData?.address}
        </p>
        <p>
          <b>Position: </b> {userData?.role}
        </p>
      </div>
      <Button onClick={() => setActiveEdit(true)} type="primary">
        Edit Your Profile
      </Button>
      <div>
        {activeEdit && (
          <div
            className=""
            style={{
              width: "500px",
              marginTop: "40px",
              border: "2px solid gray",
              padding: "30px 15px 15px 15px",
              borderRadius: "10px",
            }}
          >
            <Form submitHandler={onSubmit}>
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  marginBottom: "10px",
                }}
              >
                Update Your Info
              </h5>
              <div>
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  value={userData?.name}
                  label="User Name"
                />
              </div>
              <div>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  value={userData?.email}
                  label="User Email"
                />
              </div>
              <div>
                <FormInput
                  name="contactNo"
                  type="text"
                  size="large"
                  value={userData?.contactNo}
                  label="User contactNo"
                />
              </div>
              <div>
                <FormInput
                  name="age"
                  type="number"
                  size="large"
                  value={userData?.age}
                  label="User Age"
                />
              </div>
              <div>
                <FormInput
                  name="bloodGroup"
                  type="text"
                  size="large"
                  value={userData?.bloodGroup}
                  label="User bloodGroup"
                />
              </div>
              <div>
                <FormInput
                  name="city"
                  type="text"
                  size="large"
                  value={userData?.city}
                  label="User City"
                />
              </div>
              <div>
                <FormInput
                  name="address"
                  type="text"
                  size="large"
                  value={userData?.address}
                  label="User Address"
                />
              </div>
              <Space style={{ marginTop: "10px" }} wrap>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button
                  type="primary"
                  danger
                  onClick={() => setActiveEdit(false)}
                >
                  Cancel
                </Button>
              </Space>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
