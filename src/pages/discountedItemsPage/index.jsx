import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function DiscountedItemsPage() {
  //     То же самое, что и страница определенной категории товаров, но здесь только
  // товары со скидкой.
  // ● В левом верхнем углу маршрут пользователя.
  // ● Товары можно отсортировать.
  // ● Карточки товаров с возможностью добавления товара в корзину.
  const { products, status, error } = useSelector((state) => state.products);

  const productsSale = products.filter(
    (product) => product.discont_price != null
  );

  if (status === "failed") return <h1>{error}</h1>;
  if (status === "loading") return <h1>loading ...</h1>;
  return (
    <div className={styles.discountedItemsPage_container}>
      {status === "succeeded" &&
        productsSale.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.discont_price}</p>
              <p>{product.price}</p>
              <p>{product.title}</p>
            </div>
          );
        })}
    </div>
  );
}

export default DiscountedItemsPage;
