import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import RoutsBtn from "../../components/routsBtn";
import CustomHeader from "../../components/customHeader";

function DiscountedItemsPage() {
  //     То же самое, что и страница определенной категории товаров, но здесь только
  // товары со скидкой.
  // ● В левом верхнем углу маршрут пользователя.
  // ● Товары можно отсортировать.
  // ● Карточки товаров с возможностью добавления товара в корзину.
  const { products, status, error } = useSelector((state) => state.products);
  const obj = [
    {
      link: "/",
      title: "Main page",
    },
    {
      link: `/allSales`,
      title: "All Sales",
    },
  ];

  const productsSale = products.filter(
    (product) => product.discont_price != null
  );

  if (status === "failed") return <h1>{error}</h1>;
  if (status === "loading") return <h1>loading ...</h1>;
  return (
    <div className={styles.discountedItemsPage_container}>
      <RoutsBtn obj={obj} />
      <CustomHeader title="Discounted items" />
      <div className={styles.cards_container}>
        {status === "succeeded" &&
          productsSale.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                price={product.price}
                discont_price={product.discont_price}
                image={product.image}
                title={product.title}
              />
            );
          })}
      </div>
    </div>
  );
}

export default DiscountedItemsPage;
