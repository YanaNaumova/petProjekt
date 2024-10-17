import { NavLink } from "react-router-dom";
import AmazingDiscounts from "../../assets/images/head.png";
import styles from "./styles.module.css";
import { Button } from "antd";

function PromoSection() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${AmazingDiscounts})` }}
    >
      <h1 className={styles.header}>Amazing Discounts on Pets Products!</h1>
      <NavLink to="/allSales">
        <Button type="primary" className={styles.btn}>
          Check out
        </Button>
      </NavLink>
    </div>
  );
}

export default PromoSection;
