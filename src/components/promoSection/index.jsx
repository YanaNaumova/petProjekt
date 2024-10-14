import { NavLink } from "react-router-dom";
import AmazingDiscounts from "../../assets/images/head.png";
import styles from "./styles.module.css";
import { Button } from "antd";

function PromoSection() {
  //   Секция с промо-акциями
  //   Эта секция размещена в верхней части главной страницы и привлекает внимание
  // пользователей специальными предложениями и скидками. Для ее реализации
  // потребуется:
  // ● Компонент будет содержать текст и изображение, которые описывают
  // текущие скидки и акции.
  // ● Необходимо добавить кнопку, которая перенаправляет пользователя на
  // страницу со всеми акциями или на страницу конкретной акции.

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${AmazingDiscounts})` }}
    >
      <h1 className={styles.header}>Amazing Discounts on Pets Products!</h1>
      <NavLink to="/allSales">
        <Button type="primary" className={styles.btn}>
          Check out
        </Button>
      </NavLink>
    </div>
  );
}

export default PromoSection;
