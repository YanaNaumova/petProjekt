import styles from "./styles.module.css";
import { useSelector } from "react-redux";
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

  return (
    <div className={styles.cards_products_sale_container}>
      <AllShowButton textTitle="Sale" btnTitle="All sales" link="/allSales" />
      <div className={styles.cards_container}>
        {newArrSales &&
          newArrSales.map((product) => {
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

export default DiscountedProducts;
