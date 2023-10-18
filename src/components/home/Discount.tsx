import Image from "next/image";
import img1 from "../../assets/pexels-quang-nguyen-vinh-2131964.jpg";

const DiscountHome = () => {
  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <section
        style={{
          backgroundImage: `url(${img1.src})`,
          backgroundAttachment: "fixed",
          //   background: "rgba(0, 0, 0, 0.5)",
          //   opacity: "0.4",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "200px",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            background: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            flexDirection: "column"
          }}
          className="flexCenter"
        >
          <h4 style={{ fontSize: "30px", color: "orange" }}>
            Ensure your Booking For upto 33% Discount
          </h4>
          <div className="bookbtn">Book Now</div>
        </div>
      </section>
    </div>
  );
};

export default DiscountHome;
