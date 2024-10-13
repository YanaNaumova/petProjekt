import styles from "./styles.module.css";
import FirstOrder from "../../assets/images/firstOrder.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import formInfo from "../../utils/validations";
import UIInput from "../uIInput";

function FirstOrderDiscount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });
  //     Эта секция содержит информацию о возможности получить скидку в размере 5% на
  // первый заказ, так же содержит форму для получения скидки. Для ее реализации
  // потребуется:
  // ● Форма с тремя полями: имя, номер телефона, почта.
  // ● Кнопка получить скидку.
  // ● По нажатии на кнопку должен отправляться запрос на backend (Оформление
  // заявки на купон: POST /sale/send)

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
                  register={register}
                  errors={errors}
                  {...item}
                  key={index}
                />
              );
            })}
            <input
              type="submit"
              value="Get a discount"
              className={styles.btn}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default FirstOrderDiscount;
