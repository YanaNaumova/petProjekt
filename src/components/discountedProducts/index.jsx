import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd";

function DiscountedProducts() {
  const products = useSelector((state) => state.products.products);

  const productsSale = products.filter(
    (product) => product.discont_price != null
  );

  const length = productsSale.length;

  const newArrSales = [];
  while (newArrSales.length < 4 && productsSale.length > 0) {
    const randomProduct = productsSale[Math.floor(Math.random() * length)];
    if (randomProduct && !newArrSales.includes(randomProduct)) {
      newArrSales.push(randomProduct);
    }
  }

  //     Эта секция отображает четыре случайных товаров со скидкой. Для ее реализации
  // потребуется:
  // ● Компонент будет получать данные о товарах (названия, изображения и
  // ссылки) через props или из глобального состояния (например, Redux).
  // ● Для каждого товара отрисовывать карточку с изображением, названием и
  // ценой, в правом верхнем углу скидка.
  // ● В правом верхнем углу кнопка, перенаправляющая на страницу со всеми
  // скидками.
  // ● Каждая карточка должна быть обернута в компонент `Link`, который
  // перенаправляет на соответствующую страницу товара.
  return (
    <div className={styles.cards_products_sale_container}>
      <div className={styles.header_container}>
        <h1 className={styles.header_text}>Sale</h1>
        <hr className={styles.hr} />
        <NavLink to="/allSales">
          <Button className={styles.btn}>All sales</Button>
        </NavLink>
      </div>
      <div className={styles.cards_container}>
        {newArrSales &&
          newArrSales.map((product) => {
            let sale = Math.floor(
              ((product.price - product.discont_price) / product.price) * 100
            );
            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={styles.link}
              >
                <div className={styles.card_container}>
                  <div className={styles.img_container}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={styles.img}
                    />
                    <p className={styles.sale}>-{sale}%</p>
                  </div>
                  <div className={styles.text_container}>
                    <p className={styles.card_title}>{product.title}</p>
                    <div className={styles.price_container}>
                      <p className={styles.discont_price}>
                        {product.discont_price}
                      </p>
                      <p className={styles.price}>${product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default DiscountedProducts;
