"use client";
import Image from "next/image";
import React from "react";
import img1 from "../../../assets/pexels-arthouse-studio-4534200.jpg";
import styles from "../../Styles/home.module.css";
import BrandsHome from "@/components/home/brands";
import HotDeals from "@/components/home/HotDeals";
import DiscountHome from "@/components/home/Discount";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";

const HomePage = () => {
  const { data } = useGetAllServicesQuery(undefined);

  console.log("services ll", data);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Image
          style={{ width: "100%" }}
          src={img1}
          alt="img"
          height="500"
          width="500"
        />
        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "34px",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            Explore The Worlds With Us
          </p>
        </div>
      </div>
      <div className={`${styles.relative} ${styles.bannerArea}`}>
        <div className={`ShadowEffect hoverShadow ${styles.bannerBox1}`}>
          <h5
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Low Cost
          </h5>
          <p
            style={{
              fontSize: "15px",
              marginTop: "10px",
              textAlign: "justify",
            }}
          >
            We are providing the best price in the whole market.
          </p>
        </div>
        <div className={`ShadowEffect hoverShadow ${styles.bannerBox2}`}>
          <h5
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Friendly Journey
          </h5>
          <p
            style={{
              fontSize: "15px",
              marginTop: "10px",
              textAlign: "justify",
            }}
          >
            We are providing the best price in the whole market.
          </p>
        </div>
        <div className={`ShadowEffect hoverShadow ${styles.bannerBox3}`}>
          <h5
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Guidance
          </h5>
          <p
            style={{
              fontSize: "15px",
              marginTop: "10px",
              textAlign: "justify",
            }}
          >
            We are providing the best price in the whole market.
          </p>
        </div>
      </div>

      <HotDeals />
      <DiscountHome />
      <BrandsHome />
      <div
        className=""
        style={{
          height: "100vh",
        }}
      ></div>
    </div>
  );
};

export default HomePage;
