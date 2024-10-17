import styles from "./styles.module.css";
import { Select } from "antd";

function FilterElement({
  onChangeInput,
  onChangeCheckbox,
  handleChange,
  valuepriceFrom,
  valuepriceTo,
}) {
  return (
    <div className={styles.filter_container}>
      <div className={styles.price_filter_container}>
        <p className={styles.text}>Price</p>
        <input
          type="number"
          placeholder="from"
          onChange={onChangeInput}
          className={styles.input_Number}
          name="priceFrom"
          value={valuepriceFrom}
        />
        <input
          type="number"
          placeholder="to"
          onChange={onChangeInput}
          className={styles.input_Number}
          name="priceTo"
          value={valuepriceTo}
        />
      </div>
      <div className={styles.checkbox_container}>
        <div className={styles.text}>Discounted items</div>
        <input
          type="checkbox"
          onChange={onChangeCheckbox}
          className={styles.input_checkbox}
        />
      </div>
      <div className={styles.selected_container}>
        <p className={styles.text}>Sorted</p>
        <Select
          defaultValue="by default"
          onChange={handleChange}
          style={{
            width: "200px",
            fontWeight: "500",
            height: "36px",
            lineheight: "126%",
            color: "#282828",
          }}
          options={[
            {
              value: "newest",
              label: "newest",
            },
            {
              value: "price: high-low",
              label: "price: high-low",
            },
            {
              value: "price: low-high",
              label: "price: low-high",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default FilterElement;
