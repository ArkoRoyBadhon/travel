"use client";
import { usePostBookingMutation } from "@/redux/api/bookingApi";
import {
  useGetServiceByIdQuery,
  usePostReviewMutation,
} from "@/redux/api/serviceApi";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Divider, Input, Row, Select, Space, message } from "antd";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const [commentValue, setCommentValue] = useState("");
  const [authId, setAuthId] = useState<string | undefined>("");
  const [ratingValue, setRatingValue] = useState<number | null>();
  const serviceId = usePathname().slice(9);
  const { data: singleService } = useGetServiceByIdQuery(serviceId);
  const [postReview] = usePostReviewMutation();
  const [postBooking] = usePostBookingMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleReviewSubmit = () => {
    if (commentValue) {
      const reviewInfo = {
        reviews: commentValue,
        ratings: ratingValue ? ratingValue : 5,
        serviceId: singleService && singleService?.id,
      };

      postReview(reviewInfo);
      setCommentValue("");
    }
  };

  const handleBooking = async () => {
    const payload = {
      bookedBy: authId,
      serviceId: serviceId,
    };

    // console.log("post", data);
    const result = await postBooking(payload);
    if (result) {
      message.success("Booking success");
    } else {
      message.error("Booking Failed");
    }
  };

  useEffect(() => {
    const info = getUserInfo() as any;
    if (info) setAuthId(info?.userId || "");
  }, []);

  return (
    <div
      style={{
        padding: "0 40px",
        marginBottom: "30px",
      }}
    >
      <h5
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Service Detail
      </h5>
      <div className="">
        <div className="">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              style={{
                width: "100%",
              }}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              className="gutter-row"
            >
              <Image
                style={{ width: "100%", height: "400px", borderRadius: "5px" }}
                src={singleService?.img}
                alt="banner"
                width={500}
                height={500}
              />
            </Col>
            <Col
              style={{
                width: "100%",
              }}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              className="gutter-row"
            >
              <h4 style={{ fontSize: "24px" }}>{singleService?.title}</h4>
              <div
                style={{
                  fontSize: "20px",
                }}
              >
                <p>
                  <b>Location: </b>
                  {singleService?.tourLocation}
                </p>
                <p>
                  <b>Deperature Location: </b>
                  {singleService?.pickupLocation}
                </p>
                <p>
                  <b>Deperature Time: </b>
                  {singleService?.pickupTime}
                </p>
                <p>
                  <b>Availability: </b>
                  {singleService?.availability ? "Available" : "Unavailable"}
                </p>
                <p>
                  <b>Available Seat: </b>
                  {singleService?.availableSeats}
                </p>
                <Button
                  style={{
                    marginTop: "10px",
                  }}
                  type="primary"
                  onClick={() => handleBooking()}
                >
                  Book Now
                </Button>
                <Button
                  style={{
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                  type="primary"
                  onClick={() => {
                    router.push("/cart");
                    dispatch(addToCart(singleService));
                    message.success("added to cart")
                  }}
                >
                  Addd to Cart
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p className="">
            <b>Description: </b>
            {singleService?.description}
          </p>
        </div>
        <Divider />
        <div>
          <h6 style={{ fontSize: "20px" }}>Reviews</h6>
          <div
            style={{
              border: "1px solid black",
              padding: "5px 10px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            {singleService?.Reviews.map((review: any) => {
              return (
                <div key={review?.id}>
                  <p className="">
                    <b>Comment:</b> {review?.reviews}
                  </p>
                  <Divider style={{ margin: "3px" }} />
                </div>
              );
            })}
          </div>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            <Space.Compact style={{ width: "100%" }}>
              <Input
                defaultValue={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                placeholder="Submit your Comment"
              />
              <Select
                defaultValue={5}
                style={{ width: 120 }}
                onChange={(value) => setRatingValue(value)}
                options={[
                  { value: 5, label: "5" },
                  { value: 4, label: "4" },
                  { value: 3, label: "3" },
                  { value: 2, label: "2" },
                  { value: 1, label: "1" },
                ]}
              />
              <Button onClick={() => handleReviewSubmit()} type="primary">
                Submit
              </Button>
            </Space.Compact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
