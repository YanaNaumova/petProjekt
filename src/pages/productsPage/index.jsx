import styles from "./styles.module.css";
import { useSelector } from "react-redux";
function ProductsPage() {
  //     То же самое, что и страница определенной категории товаров, но здесь все товары
  // вперемешку.
  // ● В левом верхнем углу маршрут пользователя.
  // ● Товары можно отсортировать.
  // ● Карточки товаров с возможностью добавления товара в корзину.
  // ● Если на товар действует скидка, это отображается на карточке.
  const { products, status, error } = useSelector((state) => state.products);

  if (status === "failed") return <h1>{error}</h1>;
  if (status === "loading") return <h1>loading ...</h1>;
  return (
    <div className={styles.productsPage_container}>
      {status === "succeeded" &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </div>
          );
        })}
    </div>
  );
}

export default ProductsPage;
