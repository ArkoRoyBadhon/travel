"use client";

import { authKey } from "@/constants/storageKey";
import { useGetAllBookingByUserQuery } from "@/redux/api/bookingApi";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Divider } from "antd";
import React from "react";

const BookingPage = () => {
  const authToken = getFromLocalStorage(authKey);
  // const [updateUser] = useUpdateUserMutation();

  const userInfo: any = decodedToken(authToken as string);
  const UserId = userInfo?.userId as string;
  const { data: bookingData } = useGetAllBookingByUserQuery(UserId);

  console.log("booking data", bookingData && bookingData[0]?.serviceBooking);
  // console.log("booking data", authToken);

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

      </div>
    </div>
  );
};

export default BookingPage;
