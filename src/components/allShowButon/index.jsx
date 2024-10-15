import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "antd";

function AllShowButton({ textTitle, btnTitle, link }) {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.header_text}>{textTitle}</h1>
      <hr className={styles.hr} />
      <NavLink to={link}>
        <Button className={styles.btn}>{btnTitle}</Button>
      </NavLink>
    </div>
  );
}

export default AllShowButton;
