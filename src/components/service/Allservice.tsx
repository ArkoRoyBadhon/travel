"use client";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import img1 from "../../assets/pexels-pixabay-355872.jpg";
import { useRouter } from "next/navigation";

const Allservice = () => {
  const { data: allService } = useGetAllServicesQuery({});
  const router = useRouter();

  return (
    <div
      style={{
        padding: "0px 40px",
        marginBottom: "20px",
      }}
    >
      <h5
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          marginTop: "10px 0px",
        }}
      >
        Our Services
      </h5>

      <div className="">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {allService &&
            allService.map((item: any) => {
              return (
                // <Col key={item?.id} className="gutter-row" span={{xs:24, sm: 24, md: 8, lg: 6}}>
                <Col
                  style={{
                    width: "100%",
                  }}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  key={item?.id}
                  className="gutter-row"
                >
                  <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={
                      <Image
                        style={{
                          height: "250px",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                        src={item?.img}
                        alt="img"
                        width={500}
                        height={500}
                      />
                    }
                  >
                    <div style={{ marginTop: "10px" }}>
                      <h4>{item?.title}</h4>
                      <p className="">Location: {item?.tourLocation}</p>
                      <p className="">Price: {item?.price} BDT</p>
                      <Button
                        onClick={() => router.push(`/service/${item?.id}`)}
                        style={{
                          marginTop: "5px",
                        }}
                        type="primary"
                      >
                        View
                      </Button>
                    </div>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default Allservice;
