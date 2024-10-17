import styles from "./styles.module.css";
import Error from "../../assets/images/4.png";
import Dog from "../../assets/images/dog.png";
import CustomHeader from "../../components/customHeader";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Error404Page() {
  return (
    <div className={styles.error404Page_container}>
      <div className={styles.img_container}>
        <img src={Error} alt="Error 404" className={styles.image_4} />
        <img src={Dog} alt="Error 404" className={styles.image_dog} />
        <img src={Error} alt="Error 404" className={styles.image_4} />
      </div>
      <div className={styles.text_container}>
        <CustomHeader title="Page Not Found" />
        <p className={styles.text}>
          We're sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
        <Link to="/" className={styles.link}>
          <Button className={styles.btn} type="primary">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Error404Page;
