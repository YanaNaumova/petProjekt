import styles from "./styles.module.css";

function CustomHeader({ title }) {
  return <h1 className={styles.text}>{title}</h1>;
}

export default CustomHeader;
