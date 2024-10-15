import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../productCard";
import AllShowButton from "../allShowButon";

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
      <AllShowButton textTitle="Sale" btnTitle="All sales" link="/allSales" />
      <div className={styles.cards_container}>
        {newArrSales &&
          newArrSales.map((product) => {
            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={styles.link}
              >
                <ProductCard
                  key={product.id}
                  id={product.id}
                  price={product.price}
                  discont_price={product.discont_price}
                  image={product.image}
                  title={product.title}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default DiscountedProducts;
