import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "200px",
  borderRadius: "5px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const ClientReview = () => {
  return (
    <div
      style={{
        padding: "0px 40px",
        marginBottom: "20px",
        paddingBottom: "20px",
      }}
    >
      <h5 style={{ fontSize: "20px", marginBottom: "10px" }}>Client Review</h5>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <h3>Roy</h3>
            <p>Awesome Service, I am satisfied</p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3>Arko</h3>

            <p>Your service is so good</p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3>Badhon</h3>

            <p>Overall good service </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ClientReview;
