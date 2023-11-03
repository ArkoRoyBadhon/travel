import Image from "next/image";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/brands/jennifer-brand.png";

const BrandsHome = () => {
  return (
    <div style={{
      padding: "0px 40px",
      marginBottom: "40px",
    }}>
      <h5 style={{ fontSize: "20px", marginBottom: "10px" }}>Our Partners</h5>
      <Marquee gradient={true} speed={50} pauseOnHover={true}>
        <Image
          style={{ height: "50px", marginRight: "10px" }}
          src={img1}
          alt=""
          height={300}
          width={300}
        />
        <Image
          style={{ height: "50px", marginRight: "10px" }}
          src={img1}
          alt=""
          height={300}
          width={300}
        />
        <Image
          style={{ height: "50px", marginRight: "10px" }}
          src={img1}
          alt=""
          height={300}
          width={300}
        />
      </Marquee>
    </div>
  );
};

export default BrandsHome;
