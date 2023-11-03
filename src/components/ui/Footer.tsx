import { Divider } from "antd";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    // <footer className={styles.footer}>
    //     <p style={{textAlign: "center"}}>© 2023 Arko. All rights reserved.</p>
    // </footer>

    <div style={{ textAlign: "center", backgroundColor: "#ced4da" }}>
      <div style={{
        padding: "20px 0px"
      }}>
        <h5 className="">Services</h5>
        <p style={{ fontSize: "14px" }}>Local Tour</p>
        <p style={{ fontSize: "14px" }}>Foreign Tour</p>
        <p style={{ fontSize: "14px" }}>Couple Tour</p>
        <p style={{ fontSize: "14px" }}>Information Tour</p>
      </div>
      <Divider style={{margin: 0}} />
      <p style={{ textAlign: "center" }}>© 2023 Arko. All rights reserved.</p>
    </div>
  );
};

export default Footer;
