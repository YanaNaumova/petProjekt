import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import formInfo from "../../utils/validations";
import UIInput from "../uIInput";
import { notification } from "antd";
import { CloseOutlined } from "@ant-design/icons";

function ContactForm({ items, totalPrice }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  async function sendSaleData(orderData) {
    try {
      const response = await axios.post(
        "http://localhost:3333/order/send",
        orderData,
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
    const orderData = {
      name: data.username,
      phone: data.phone,
      email: data.email,
    };
    sendSaleData(orderData);
    reset();
    openNotification();
  }

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: (
        <span className={styles.notification_message}>Congratulations!</span>
      ),
      description: (
        <div>
          <div className={styles.notification_description}>
            Your order has been successfully placed on the website.
          </div>
          <div className={styles.notification_description}>
            A manager will contact you shortly to confirm your order.
          </div>
        </div>
      ),
      duration: 5,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0D50FF",
        borderRadius: "12px",
        width: "548px",
      },
      closeIcon: <CloseOutlined style={{ color: "#FFFFFF" }} />,
    });
  };
  //     Создание формы:
  // ● Создайте форму с тремя полями: имя, номер телефона, почта.
  // ● При создании формы рекомендуется использовать react-hook-form.
  // ● Добавьте валидацию данных в форму.
  //   Оформление заказа
  // Обработка нажатия на кнопку:
  // ● Добавьте обработчик событий для кнопки. При нажатии на кнопку собирайте
  // данные из формы и список товаров в корзине.
  // ● Используйте Axios для отправки POST-запроса на backend сервер ( на
  // маршрут `/order/send`) с данными заказа.
  // Модальное окно с подтверждением успешного заказа
  // Отображение модального окна:
  // ● В компоненте корзины добавьте состояние для управления отображением
  // модального окна.
  // ● При успешной отправке данных заказа на сервер обновляйте состояние,
  // чтобы модальное окно открывалось.

  //   Сообщение о пустой корзине, если в ней нет товаров
  //   Проверка содержимого корзины:
  //   ● В компоненте корзины проверяйте, есть ли товары в корзине.
  //   ● Если корзина пуста, отображайте сообщение об этом вместо списка товаров и
  //   формы заказа.
  return (
    <div className={styles.order_details_container}>
      <div className={styles.order_description}>
        <h3 className={styles.order_title}>Order details</h3>
        <p className={styles.items_text}>{items} items</p>
        <div className={styles.total_container}>
          <p className={styles.total}>Total</p>
          <p className={styles.total_price}>${totalPrice}</p>
        </div>
      </div>
      <form className={styles.order_form} onSubmit={handleSubmit(submitForm)}>
        {formInfo.map((item, index) => {
          return (
            <UIInput
              className={styles.input}
              register={register}
              errors={errors}
              {...item}
              key={index}
              bgColor="white"
              placeholder={item.placeholder}
              placeholderColor="#8B8B8B"
            />
          );
        })}
        {contextHolder}
        <input type="submit" value="Order" className={styles.submit_btn} />
      </form>
    </div>
  );
}

export default ContactForm;
