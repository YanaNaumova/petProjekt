import styles from "./styles.module.css";
import Minus from "../../assets/icons/minus.svg";
import Plus from "../../assets/icons/plus.svg";
function CounterBtn({ minusOneProduct, count, plusOneProduct }) {
  return (
    <div className={styles.counter_container}>
      <div className={styles.minus_btn} onClick={minusOneProduct}>
        <img src={Minus} alt="minus" className={styles.minus_icon} />
      </div>
      <div className={styles.count_number}>{count !== 0 ? count : 1}</div>
      <div className={styles.plus_btn} onClick={plusOneProduct}>
        <img src={Plus} alt="plus" className={styles.plus_icon} />
      </div>
    </div>
  );
}

export default CounterBtn;
