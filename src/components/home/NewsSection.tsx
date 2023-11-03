import { Collapse, CollapseProps } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Big Sale on 11.11",
    children: <p>Test 1</p>,
  },
  {
    key: "2",
    label: "Upcoming Flash Sales",
    children: <p>test 2</p>,
  },
  {
    key: "3",
    label: "Maldives the ocean paradise",
    children: <p>test 3</p>,
  },
];

const NewsSection = () => {
  return (
    <div
      style={{
        padding: "0px 40px",
        marginBottom: "20px",
        paddingBottom: "20px"
      }}
    >
      <h5 style={{ fontSize: "20px", marginBottom: "10px" }}>
        Latest News
      </h5>
      <Collapse items={items} defaultActiveKey={["1"]} />;
    </div>
  );
};

export default NewsSection;
