import Image from "next/image";
import img1 from "../../assets/pexels-pixabay-289586.jpg";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

const UpcomingService = () => {
  return (
    <div
      style={{
        padding: "0px 40px",
        marginBottom: "20px",
      }}
    >
      <h5 style={{ fontSize: "20px", marginBottom: "10px" }}>Upcoming Service</h5>
      <div className="">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
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
                  src={img1}
                  alt="img"
                  width={500}
                  height={500}
                />
              }
            >
              <div style={{ marginTop: "10px" }}>
                <h4>Sea Beach</h4>
                <p className="">Location: Cox Bazar</p>
                <p className="">Price: 5500 BDT</p>
                <Button
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
          <Col className="gutter-row" span={6}>
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
                  src={img1}
                  alt="img"
                  width={500}
                  height={500}
                />
              }
            >
              <div style={{ marginTop: "10px" }}>
                <h4>Sea Beach</h4>
                <p className="">Location: Cox Bazar</p>
                <p className="">Price: 5500 BDT</p>
                <Button
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
          <Col className="gutter-row" span={6}>
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
                  src={img1}
                  alt="img"
                  width={500}
                  height={500}
                />
              }
            >
              <div style={{ marginTop: "10px" }}>
                <h4>Sea Beach</h4>
                <p className="">Location: Cox Bazar</p>
                <p className="">Price: 5500 BDT</p>
                <Button
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
          <Col className="gutter-row" span={6}>
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
                  src={img1}
                  alt="img"
                  width={500}
                  height={500}
                />
              }
            >
              <div style={{ marginTop: "10px" }}>
                <h4>Sea Beach</h4>
                <p className="">Location: Cox Bazar</p>
                <p className="">Price: 5500 BDT</p>
                <Button
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
        </Row>
        <div
          style={{
            width: "100%",
            textAlign: "end",
          }}
        >
          <div className="">See All</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingService;
