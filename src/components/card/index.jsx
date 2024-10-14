import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Card({ id, image, title }) {
  return (
    <Link key={id} to={`/categories/${id}`} className={styles.link}>
      <div key={id} className={styles.card_container}>
        <img src={image} alt={title} className={styles.image} />
        <p className={styles.title_text}>{title}</p>
      </div>
    </Link>
  );
}

export default Card;
