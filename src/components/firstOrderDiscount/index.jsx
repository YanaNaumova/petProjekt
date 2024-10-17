import styles from "./styles.module.css";
import FirstOrder from "../../assets/images/firstOrder.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import formInfo from "../../utils/validations";
import UIInput from "../uIInput";
import { getDiscountRequestSent } from "../../redux/slices/getDiscountSlice";
import { useDispatch, useSelector } from "react-redux";

function FirstOrderDiscount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all" });

  const btnTitle = "Get a discount";
  const sentBtnTitle = "Request Submitted";

  const dispatch = useDispatch();
  const isDiscountRequest = useSelector(
    (state) => state.getDiscount.isDiscountRequestSent
  );

  async function sendSaleData(saleData) {
    try {
      const response = await axios.post(
        "http://localhost:3333/sale/send",
        saleData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function submitForm(data) {
    const saleData = {
      name: data.username,
      phone: data.phone,
      email: data.email,
    };
    sendSaleData(saleData);
    reset();
    if (isValid) {
      dispatch(getDiscountRequestSent());
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_firstOrder}>
        <h1 className={styles.header}>5% off on the first order</h1>
        <div className={styles.info_container}>
          <img src={FirstOrder} alt="first order" className={styles.img} />
          <form
            className={styles.form_container}
            onSubmit={handleSubmit(submitForm)}
          >
            {formInfo.map((item, index) => {
              return (
                <UIInput
                  className={styles.input}
                  register={register}
                  errors={errors}
                  {...item}
                  key={index}
                  bgColor="#0a40bb"
                  placeholder={item.placeholder}
                  placeholderColor="white"
                />
              );
            })}
            <input
              type="submit"
              value={isDiscountRequest ? sentBtnTitle : btnTitle}
              className={isDiscountRequest ? styles.btn_sent : styles.btn}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default FirstOrderDiscount;
