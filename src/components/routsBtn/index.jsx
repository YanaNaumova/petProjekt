import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function RoutsBtn({ obj }) {
  return (
    <div className={styles.container}>
      {obj.map((el, index) => {
        return obj.length - 1 === index ? (
          <div key={index} className={styles.routes_container}>
            <Link to={el.link} className={styles.link}>
              <p className={styles.last_page_rout}>{el.title}</p>
            </Link>
          </div>
        ) : (
          <div key={index} className={styles.routes_container}>
            <Link to={el.link} className={styles.link}>
              <p className={styles.page_rout}>{el.title}</p>
            </Link>
            <hr className={styles.hr} />
          </div>
        );
      })}
    </div>
  );
}

export default RoutsBtn;
